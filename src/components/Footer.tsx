'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { href: '/#about', label: 'Design System Creation' },
      { href: '/#about', label: 'Design System Maintenance' },
      { href: '/#about', label: 'Design-to-Code' },
    ],
    company: [
      { href: '/about', label: 'About' },
      { href: '/our-ai', label: 'Our AI' },
      { href: '/work', label: 'Work' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-sm font-medium tracking-[0.05em] uppercase text-[var(--color-text-primary)]">
                Artemis Design Labs
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              Design systems that ship. We deliver Figma AND production-ready React
              for B2B startups scaling from Seed to Series C.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.05em] uppercase text-[var(--color-text-muted)]">
              <span className="w-2 h-2 bg-[var(--color-accent)]"></span>
              Available for new projects
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
              Services
            </p>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
              Company
            </p>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {currentYear} Artemis Design Labs
          </p>
          <a
            href="mailto:itadmin@artemisdesignlabs.com"
            className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            itadmin@artemisdesignlabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
