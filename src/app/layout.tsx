import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { ContentVersionProvider } from '@/context/ContentVersionContext';
import { ContentSwitcher } from '@/components/ContentSwitcher';
import { DevOnly } from '@/components/DevOnly';

const SITE_URL = 'https://artemisdesignlabs.com';
const OG_IMAGE = '/images/logos/adl-logo-1.png';
const TITLE = 'Artemis Design Labs | Design Systems for B2B Startups';
const DESCRIPTION =
  'We deliver Figma AND production-ready React components for Seed to Series C startups. Ship consistent UI 2x faster.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Artemis Design Labs',
  },
  description: DESCRIPTION,
  keywords: [
    'design system',
    'react components',
    'figma to code',
    'B2B startups',
    'design system agency',
    'UI components',
    'design to code',
  ],
  authors: [{ name: 'Artemis Design Labs', url: SITE_URL }],
  creator: 'Artemis Design Labs',
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    locale: 'en_US',
    siteName: 'Artemis Design Labs',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Artemis Design Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Artemis Design Labs',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/adl-logo-1.png`,
  email: 'itadmin@artemisdesignlabs.com',
  sameAs: [],
  description: DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('adl-theme');
                if (stored === 'light' || stored === 'dark') {
                  document.documentElement.setAttribute('data-theme', stored);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ContentVersionProvider>
            {children}
            <DevOnly>
              <ContentSwitcher />
            </DevOnly>
          </ContentVersionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
