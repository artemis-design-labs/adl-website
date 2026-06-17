import Link from 'next/link';
import { Logo } from '@/components/atoms/Logo';

const ADMIN_EMAIL = 'hello@artemisdesignlabs.com';

const FOOTER_LINKS = {
  services: [
    { href: '/#about', label: 'Design System Creation' },
    { href: '/#about', label: 'Design System Maintenance' },
    { href: '/#about', label: 'Design-to-Code Handoff' },
  ],
  company: [
    { href: '/about',   label: 'About' },
    { href: '/our-ai',  label: 'Our AI' },
    { href: '/work',    label: 'Work' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
              aria-label="Artemis Design Labs — Home"
            >
              <Logo size="md" />
            </Link>
            <p className="mt-5 text-sm text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              We build the AI that builds your design infrastructure.
              Founder-built. Human-validated. Production-ready.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent-glow)]" />
              Available for new projects
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/artemis-design-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Artemis Design Labs on LinkedIn"
                className="inline-flex p-1 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/artemis-design-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Artemis Design Labs on GitHub"
                className="inline-flex p-1 rounded-md text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <nav className="md:col-span-3" aria-labelledby="footer-services">
            <p id="footer-services" className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">
              › services
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="md:col-span-2" aria-labelledby="footer-company">
            <p id="footer-company" className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">
              › company
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">
              › contact
            </p>
            <a
              href={`mailto:${ADMIN_EMAIL}`}
              className="inline-flex items-start gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 break-all"
              title="Opens your email client"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0 mt-0.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="22 6 12 13 2 6" />
              </svg>
              <span>{ADMIN_EMAIL}</span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
            © {year} Artemis Design Labs · All rights reserved
          </p>
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
            Built with care · trained on production
          </p>
        </div>
      </div>
    </footer>
  );
}
