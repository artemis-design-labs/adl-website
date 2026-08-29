'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/cn';

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: 'https://medium.com/ai-ui', label: 'Blog', external: true },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-200',
        isMobileMenuOpen
          ? 'bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]'
          : isScrolled
            ? 'bg-[var(--color-bg-primary)]/85 backdrop-blur-md border-b border-[var(--color-border)]'
            : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-10 lg:px-20">
        <div className={cn(
          'flex items-center justify-between transition-[padding] duration-300 ease-in-out',
          isScrolled ? 'pt-1 pb-1' : 'pt-[14px] pb-3'
        )}>
          {/* Logo */}
          <Link
            href="/"
            className="-ml-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
            aria-label="Artemis Design Labs — Home"
          >
            <Logo className={cn(
              'transition-[height] duration-300 ease-in-out',
              isScrolled ? 'h-[44px]' : 'h-[76px]'
            )} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1 mr-3" role="menubar">
              {NAV_LINKS.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    role="menuitem"
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm',
                      'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                      'hover:bg-[var(--color-bg-hover)]',
                      'transition-colors duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact#book-a-call"
              className={cn(
                'inline-flex items-center gap-1.5 h-9 px-4 rounded-md',
                'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
                'border border-[var(--color-accent)]',
                'text-sm font-medium',
                'hover:bg-[var(--color-accent-hover)] hover:border-[var(--color-accent-hover)]',
                'hover:shadow-[var(--shadow-glow)]',
                'transition-[background-color,border-color,box-shadow] duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
              )}
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-md',
                'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-bg-hover)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
              )}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-[max-height,opacity] duration-200',
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="py-3 border-t border-[var(--color-border)] flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact#book-a-call"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 h-11 px-5 rounded-md bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Book a Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
