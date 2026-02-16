import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/context/ThemeContext';
import { ContentVersionProvider } from '@/context/ContentVersionContext';
import { ContentSwitcher } from '@/components/ContentSwitcher';
import { DevOnly } from '@/components/DevOnly';

export const metadata: Metadata = {
  title: 'Artemis Design Labs | Design Systems for B2B Startups',
  description:
    'We deliver Figma AND production-ready React components for Seed to Series C startups. Ship consistent UI 2x faster.',
  keywords: [
    'design system',
    'react components',
    'figma to code',
    'B2B startups',
    'design system agency',
    'UI components',
    'design to code',
  ],
  authors: [{ name: 'Artemis Design Labs' }],
  openGraph: {
    title: 'Artemis Design Labs | Design Systems for B2B Startups',
    description:
      'We deliver Figma AND production-ready React components. Ship consistent UI 2x faster.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Artemis Design Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artemis Design Labs | Design Systems for B2B Startups',
    description:
      'We deliver Figma AND production-ready React components. Ship consistent UI 2x faster.',
  },
  icons: {
    icon: '/favicon.ico',
  },
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
