import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// The license page is a Client Component and can't export metadata
// itself, so this passthrough layout carries the noindex. Work in
// progress — hidden from search until it ships with a real backend.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DesignSystemLicenseLayout({ children }: { children: ReactNode }) {
  return children;
}
