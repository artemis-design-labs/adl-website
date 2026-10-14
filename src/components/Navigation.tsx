'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/cn';
import { INDUSTRIES, industryHref } from '@/lib/industries';

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  /** Dropdown items. The parent stays a real link to `href`. */
  children?: { href: string; label: string }[];
};

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  {
    // Labelled "Industries", but the parent still lands on /services.
    href: '/services',
    label: 'Industries',
    children: INDUSTRIES.map((i) => ({ href: industryHref(i.slug), label: i.name })),
  },
  { href: '/work', label: 'Work' },
  { href: 'https://medium.com/ai-ui', label: 'Blog', external: true },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  // The homepage opens on a permanently dark banner, so an unscrolled nav
  // there must render on-dark even though the canvas is light. Every other
  // route opens on the light canvas and inherits the normal token colours.
  const onDarkBanner = usePathname() === '/' && !isScrolled;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Short grace period so the pointer can cross the gap between the trigger
  // and the panel without the menu snapping shut.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(href);
  };
  const closeMenuSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
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
                <li
                  key={link.label}
                  role="none"
                  className={cn(link.children && 'relative')}
                  onMouseEnter={link.children ? () => openMenu(link.href) : undefined}
                  onMouseLeave={link.children ? closeMenuSoon : undefined}
                  onFocus={link.children ? () => openMenu(link.href) : undefined}
                  onBlur={
                    link.children
                      ? (e) => {
                          if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenDropdown(null);
                        }
                      : undefined
                  }
                >
                  <Link
                    role="menuitem"
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    aria-haspopup={link.children ? 'menu' : undefined}
                    aria-expanded={link.children ? openDropdown === link.href : undefined}
                    onClick={link.children ? () => setOpenDropdown(null) : undefined}
                    className={cn(
                      'inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors',
                      onDarkBanner
                        ? 'text-[color-mix(in_srgb,var(--color-text-on-dark)_78%,transparent)] hover:text-[var(--color-text-on-dark)] hover:bg-white/10'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]',
                      'transition-colors duration-150',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                        className={cn('transition-transform duration-150', openDropdown === link.href && 'rotate-180')}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                  {link.children && (
                    // pt-2 is a hover bridge: the panel's padding, not a gap,
                    // sits between trigger and list so the pointer never leaves.
                    <div
                      className={cn(
                        'absolute left-0 top-full pt-2 w-72 transition-[opacity,transform] duration-150',
                        openDropdown === link.href
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 -translate-y-1 invisible pointer-events-none'
                      )}
                    >
                      <ul
                        role="menu"
                        aria-label={link.label}
                        className="p-2 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
                      >
                        {link.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              role="menuitem"
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={cn(
                                'block px-3 py-2.5 rounded-md text-sm',
                                'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]',
                                'transition-colors duration-150',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]'
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
          <div className="flex md:hidden items-center gap-1">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-md',
                onDarkBanner
                  ? 'text-[var(--color-text-on-dark)] hover:bg-white/10'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]',
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
            isMobileMenuOpen ? 'max-h-[calc(100svh-80px)] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <ul className="py-3 border-t border-[var(--color-border)] flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="mb-1 ml-3 pl-3 border-l border-[var(--color-border)] flex flex-col">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2.5 rounded-md text-[13px] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)]"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
