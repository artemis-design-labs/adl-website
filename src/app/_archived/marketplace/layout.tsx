import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// The marketplace page is a Client Component and can't export metadata
// itself, so this passthrough layout carries the noindex. Work in
// progress — hidden from search until it ships with a real purchase flow.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return children;
}
