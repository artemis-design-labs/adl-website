import { NextResponse } from 'next/server';
import { getDb, type ContactDoc } from '@/lib/mongo';

export const runtime = 'nodejs';

interface IncomingContact {
  name?: string;
  email?: string;
  company?: string;
  domain?: string;
  domainOther?: string;
  service?: string;
  pillars?: string[];
  businessDescription?: string;
  painPoints?: string;
  message?: string;
  turnstileToken?: string;
}

const ADMIN_INBOX = 'itadmin@artemisdesignlabs.com';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token: string | undefined, remoteIp: string | null): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Verification not configured — fail open so a missing secret can't take
    // the contact form down with it. Deliberately loud: in production the
    // Worker secret IS set, so this line means spam protection has silently
    // disappeared and needs re-syncing (see .github/workflows/deploy.yml).
    console.warn('TURNSTILE_SECRET_KEY not set — accepting submission WITHOUT spam verification.');
    return { ok: true };
  }
  if (!token) {
    return { ok: false, reason: 'Missing Turnstile token.' };
  }

  const params = new URLSearchParams({ secret, response: token });
  if (remoteIp) params.set('remoteip', remoteIp);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const body = (await res.json()) as { success: boolean; 'error-codes'?: string[] };
    if (body.success) return { ok: true };
    return { ok: false, reason: body['error-codes']?.join(',') ?? 'Turnstile verification failed.' };
  } catch (err) {
    console.error('Turnstile verify error:', err);
    return { ok: false, reason: 'Turnstile network error.' };
  }
}

async function notifyByEmail(submission: ContactDoc) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — skipping email notification');
    return;
  }

  const from = process.env.RESEND_FROM ?? 'ADL <noreply@artemisdesignlabs.com>';

  const lines = [
    `Contact name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.company ? `Company: ${submission.company}` : null,
    submission.domain ? `Domain: ${submission.domain}` : null,
    submission.service ? `Interested in: ${submission.service}` : null,
    submission.pillars?.length ? `Services: ${submission.pillars.join(', ')}` : null,
    '',
    submission.businessDescription ? 'Description of Business:' : null,
    submission.businessDescription ?? null,
    submission.businessDescription ? '' : null,
    submission.painPoints ? 'Current Pain Points:' : null,
    submission.painPoints ?? null,
  ].filter((line) => line !== null);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [ADMIN_INBOX],
        reply_to: submission.email,
        subject: `New contact form submission from ${submission.name}`,
        text: lines.join('\n'),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Resend send failed:', res.status, body);
    }
  } catch (err) {
    console.error('Resend send error:', err);
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as IncomingContact;
    const {
      name,
      company,
      email,
      domain,
      domainOther,
      service,
      pillars,
      businessDescription,
      painPoints,
      turnstileToken,
    } = body;

    // Contact name, email, and a business description are the minimum we need
    // to act on a lead. Everything else is optional context.
    if (!name || !email || !businessDescription) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Spam protection — only enforced if TURNSTILE_SECRET_KEY is set.
    const remoteIp =
      req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? null;
    const verdict = await verifyTurnstile(turnstileToken, remoteIp);
    if (!verdict.ok) {
      return NextResponse.json({ error: 'Spam protection check failed.' }, { status: 400 });
    }

    // Composite kept for the /admin viewer and email, which render `message` as
    // one block without knowing the individual structured fields.
    const fullMessage = [
      domain ? `Domain: ${domain === 'other' && domainOther ? domainOther : domain}` : null,
      service ? `Interested in: ${service}` : null,
      pillars?.length ? `Services: ${pillars.join(', ')}` : null,
      domain || service || pillars?.length ? '' : null,
      'Description of Business:',
      businessDescription,
      painPoints ? '' : null,
      painPoints ? 'Current Pain Points:' : null,
      painPoints ?? null,
    ]
      .filter((line) => line !== null)
      .join('\n');

    const submission: ContactDoc = {
      name,
      email,
      company: company || null,
      domain: domain || null,
      service: service || null,
      pillars: pillars?.length ? pillars : null,
      businessDescription,
      painPoints: painPoints || null,
      message: fullMessage,
      createdAt: new Date(),
    };

    // Email fires first — guaranteed capture regardless of DB state.
    await notifyByEmail(submission);

    // MongoDB is best-effort. A connection failure (e.g. Atlas IP restriction)
    // must not block the submission or the email notification.
    let insertedId: string | null = null;
    try {
      const db = await getDb();
      const result = await db.collection<ContactDoc>('contacts').insertOne(submission);
      insertedId = result.insertedId.toString();
    } catch (dbErr) {
      console.error('MongoDB write failed (submission captured via email):', dbErr);
    }

    return NextResponse.json({ success: true, id: insertedId });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
