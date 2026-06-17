import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/context/ThemeContext';

const CF_BEACON_TOKEN = '81fa03a077554854b911e476023935c6';

const SITE_URL = 'https://artemisdesignlabs.com';
const OG_IMAGE = '/images/logos/adl-logo-1.png';
const TITLE = 'Artemis Design Labs | AI-Powered Design Infrastructure';
const DESCRIPTION =
  'We build the AI that builds your design infrastructure. Founder-built, human-validated, production-ready. Trained on 190K+ design-to-code examples.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Artemis Design Labs',
  },
  description: DESCRIPTION,
  keywords: [
    'design system',
    'AI-powered design',
    'figma to code',
    'design infrastructure',
    'B2B startups',
    'production-ready React',
    'AI design tools',
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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Artemis Design Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  // Icons are auto-resolved by Next from src/app/icon.svg + apple-icon.svg.
};

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Artemis Design Labs',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/adl-logo-1.png`,
  email: 'itadmin@artemisdesignlabs.com',
  sameAs: [
    'https://www.linkedin.com/company/artemis-design-labs',
    'https://github.com/artemis-design-labs',
  ],
  founder: {
    '@type': 'Person',
    name: 'Pritish Sai',
    url: 'https://www.linkedin.com/in/pritishsai',
  },
  description: DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        {/* Set the data-theme attribute before paint so we don't flash the wrong theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('adl-theme');
                  if (stored === 'light' || stored === 'dark') {
                    document.documentElement.setAttribute('data-theme', stored);
                    return;
                  }
                  var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider>{children}</ThemeProvider>
        {/* Cloudflare Web Analytics — privacy-friendly, no cookies. */}
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${CF_BEACON_TOKEN}"}`}
        />
      </body>
    </html>
  );
}
