import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Roboto, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';

// Body / UI face.
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

// Display face for headlines — drives --font-display in tokens.css.
const openSans = Open_Sans({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const CF_BEACON_TOKEN = '81fa03a077554854b911e476023935c6';
const GA_MEASUREMENT_ID = 'G-SXX4NH3LQ9';

const SITE_URL = 'https://artemisdesignlabs.com';
const OG_IMAGE = '/images/logos/adl-logo-1.png';
const TITLE = 'Artemis Design Labs | Governed UI Infrastructure for B2B Teams';
const DESCRIPTION =
  'ADL builds and operates the UI infrastructure your product team is missing — design language architecture, an automated Figma-to-React pipeline, and drift governance that keeps design and code in sync as you scale.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Artemis Design Labs',
  },
  description: DESCRIPTION,
  keywords: [
    'UI infrastructure',
    'design system',
    'design system governance',
    'figma to code',
    'design token architecture',
    'AI-powered design',
    'B2B startups',
    'production-ready React',
  ],
  authors: [{ name: 'Artemis Design Labs', url: SITE_URL }],
  creator: 'Artemis Design Labs',
  // './' resolves against metadataBase per-route, so every page is
  // self-canonical. A hardcoded SITE_URL here is inherited by every child
  // route and tells Google the whole site is a duplicate of the homepage.
  alternates: { canonical: './' },
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
  email: 'pritish@artemisdesignlabs.com',
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
      className={`scroll-smooth ${roboto.variable} ${openSans.variable}`}
      data-theme="light"
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
                  document.documentElement.setAttribute('data-theme', 'light');
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
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://behavioral-insights.vercel.app/tracker.js"
          data-site-id="737de245-2a09-44f9-bdcd-f3357555eeca"
        />
      </body>
    </html>
  );
}
