import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// HTTP Basic Auth gate for the /admin contact-submissions dashboard, which
// would otherwise be public (it lists names, emails, and messages). The
// credential is the ADMIN_BASIC_AUTH runtime secret, formatted "user:password"
// and synced to the Worker in .github/workflows/deploy.yml.
//
// Fail-closed: if the secret is unset, every request is denied — the page is
// never served without a configured credential.
export const config = {
  matcher: ['/admin', '/admin/:path*'],
};

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function denied(): NextResponse {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="ADL Admin", charset="UTF-8"' },
  });
}

export function middleware(req: NextRequest): NextResponse {
  const expected = process.env.ADMIN_BASIC_AUTH;
  if (!expected) return denied();

  const header = req.headers.get('authorization');
  if (!header || !header.startsWith('Basic ')) return denied();

  let decoded: string;
  try {
    decoded = atob(header.slice('Basic '.length).trim());
  } catch {
    return denied();
  }

  return timingSafeEqual(decoded, expected) ? NextResponse.next() : denied();
}
