import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// contact/page.tsx is a Client Component (form state, Turnstile, Calendly)
// and so can't export metadata. Without this passthrough layout the page
// inherits the homepage title — on the highest-intent page on the site.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a 30-minute call or request a free design-to-code audit. No pitch deck — a straight conversation about your UI infrastructure and where it is costing you.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
