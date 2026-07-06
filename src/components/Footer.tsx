import Link from 'next/link';

const FOOTER_NAV = [
  { href: '/services', label: 'Services' },
  { href: '/work',     label: 'Work' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
];

const FOOTER_SOCIAL = [
  { href: 'https://www.linkedin.com/company/artemis-design-labs', label: 'LinkedIn' },
  { href: 'https://github.com/artemis-design-labs',               label: 'GitHub' },
];

const ADMIN_EMAIL = 'hello@artemisdesignlabs.com';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    /*
     * Blink UX footer pattern — dark bg, brand name + tagline left,
     * nav columns right, thin divider + copyright bar at bottom.
     */
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]">
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20 py-12 md:py-16">

        {/* Main row: brand left, nav columns right */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-16">

          {/* Brand + tagline */}
          <div className="flex-shrink-0">
            <p className="font-bold text-[15px] text-[var(--color-text-primary)] mb-1">
              Artemis Design Labs
            </p>
            <p className="text-[13px] text-[var(--color-text-tertiary)]">
              UI Infrastructure · AI-Native · New York
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-12 md:gap-16">

            <nav aria-label="Footer pages">
              <ul className="space-y-2.5">
                {FOOTER_NAV.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer social and contact">
              <ul className="space-y-2.5">
                {FOOTER_SOCIAL.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${ADMIN_EMAIL}`}
                    className="text-[13px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                  >
                    {ADMIN_EMAIL}
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <p className="text-[12px] text-[var(--color-text-tertiary)]">
            © {year} Artemis Design Labs. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
