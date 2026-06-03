import { NextResponse } from 'next/server';
import { getDb, type ContactDoc } from '@/lib/mongo';

export const runtime = 'nodejs';

interface IncomingContact {
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
}

const ADMIN_INBOX = 'itadmin@artemisdesignlabs.com';

async function notifyByEmail(submission: ContactDoc) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — skipping email notification');
    return;
  }

  const from = process.env.RESEND_FROM ?? 'ADL Contact <onboarding@resend.dev>';

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
    const { name, company, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
