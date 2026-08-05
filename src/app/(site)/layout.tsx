/**
 * Shared shell for all public-facing pages. Anything in this route group
 * automatically renders inside Navigation + <main> + Footer, in the
 * dark-violet aesthetic provided by the root layout's ThemeProvider.
 *
 * Things NOT in this group (kept at /app/ level): /admin (auth, no
 * Navigation), /api/* (JSON endpoints). They're naturally excluded
 * because they live outside the (site) folder.
 *
 * To add a new page: create app/(site)/<route>/page.tsx with just the
 * content — Nav, Footer, main landmark, theme, etc. come for free.
 */
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BackToTop } from '@/components/atoms/BackToTop/BackToTop';
import { PageLoader } from '@/components/atoms/PageLoader';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <PageLoader />
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
