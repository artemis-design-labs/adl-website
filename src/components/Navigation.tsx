'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { cn } from '@/lib/cn';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/our-ai', label: 'Our AI' },
    { href: '/work', label: 'Work' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-150',
        isScrolled
          ? 'bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-sm font-medium tracking-[0.05em] uppercase text-[var(--color-text-primary)]">
              Artemis Design Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.08em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[var(--color-border)]">
              <ThemeToggle />

              <Link
                href="/contact"
                className={cn(
                  'text-xs tracking-[0.08em] uppercase px-4 py-2',
                  'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
                  'hover:bg-[var(--color-text-secondary)]',
                  'transition-colors duration-150'
                )}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-200',
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs tracking-[0.08em] uppercase py-3 px-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs tracking-[0.08em] uppercase px-4 py-3 mt-4 text-center bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-text-secondary)] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
