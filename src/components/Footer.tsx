'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { href: '/services#creation', label: 'Design System Creation' },
      { href: '/services#maintenance', label: 'Design System Maintenance' },
      { href: '/services#handoff', label: 'Design-to-Code Handoff' },
    ],
    company: [
      { href: '/about', label: 'About' },
      { href: '/work', label: 'Work' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block group">
              <span className="text-xl font-semibold text-[var(--color-text-primary)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                Artemis Design Labs
              </span>
            </Link>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              Design systems that ship. We deliver Figma AND production-ready React
              for B2B startups scaling from Seed to Series C.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[var(--color-success)] rounded-full animate-pulse"></span>
                Available for new projects
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-accent)]',
                      'transition-colors text-sm'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-accent)]',
                      'transition-colors text-sm'
                    )}
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
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} Artemis Design Labs. All rights reserved.
          </p>
          <a
            href="mailto:hello@artemisdesignlabs.com"
            className={cn(
              'text-sm text-[var(--color-text-secondary)]',
              'hover:text-[var(--color-accent)]',
              'transition-colors'
            )}
          >
            hello@artemisdesignlabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
