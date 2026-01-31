import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, company, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Combine service preference into message if provided
    const fullMessage = service 
      ? `[Service Interest: ${service}]\n\n${message}`
      : message;

    await prisma.contact.create({
      data: {
        name,
        company: company || null,
        email,
        message: fullMessage,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
