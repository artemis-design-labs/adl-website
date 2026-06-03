import Link from 'next/link';
import { Logo } from '@/components/atoms/Logo';

const ADMIN_EMAIL = 'itadmin@artemisdesignlabs.com';

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
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 break-all"
            >
              {ADMIN_EMAIL}
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
