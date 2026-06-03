import { NextResponse } from 'next/server';
import { getDb, type ContactDoc } from '@/lib/mongo';

export const runtime = 'nodejs';

interface IncomingContact {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  turnstileToken?: string;
}

const ADMIN_INBOX = 'itadmin@artemisdesignlabs.com';
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstile(token: string | undefined, remoteIp: string | null): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Verification not configured — fail open (dev / pre-rollout).
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
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    submission.company ? `Company: ${submission.company}` : null,
    '',
    'Message:',
    submission.message,
  ].filter(Boolean);

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
    const { name, company, email, service, message, turnstileToken } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Spam protection — only enforced if TURNSTILE_SECRET_KEY is set.
    const remoteIp =
      req.headers.get('cf-connecting-ip') ?? req.headers.get('x-forwarded-for') ?? null;
    const verdict = await verifyTurnstile(turnstileToken, remoteIp);
    if (!verdict.ok) {
      return NextResponse.json({ error: 'Spam protection check failed.' }, { status: 400 });
    }

    const fullMessage = service
      ? `[Service Interest: ${service}]\n\n${message}`
      : message;

    const submission: ContactDoc = {
      name,
      email,
      company: company || null,
      message: fullMessage,
      createdAt: new Date(),
    };

    const db = await getDb();
    const result = await db.collection<ContactDoc>('contacts').insertOne(submission);

    await notifyByEmail(submission);

    return NextResponse.json({ success: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
