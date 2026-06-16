import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// insight/page.tsx is a Client Component and can't export metadata, so
// this passthrough layout carries the case study's unique SEO metadata.
export const metadata: Metadata = {
  title: 'Insight — AI analytics for educators',
  description:
    "Case study: an education analytics platform whose AI Key Insights feature turns complex student data into plain-language summaries and recommended actions.",
};

export default function InsightLayout({ children }: { children: ReactNode }) {
  return children;
}
