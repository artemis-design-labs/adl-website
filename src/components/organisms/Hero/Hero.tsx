'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const TRACKS = [
  { name: 'Build Track — UI Infrastructure Setup' },
  { name: 'Operate Track — Managed UI Infrastructure' },
  { name: 'Agentic Ecosystem' },
  { name: 'Drift Detection & Correction' },
  { name: 'Component Governance Layer' },
  { name: 'Figma → Production-Ready React' },
];

export function Hero() {
  return (
    <section className="relative bg-[var(--color-bg-primary)] pt-32 md:pt-44 pb-16 md:pb-20">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-start">

          {/* Left — Content */}
          <div>
            {/* Accent bar */}
            <div
              className="w-12 h-[3px] bg-[var(--color-accent)] mb-3 hero-animate"
              style={{ animationDelay: '0ms' }}
              aria-hidden="true"
            />
            {/* Eyebrow */}
            <p
              className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-[var(--color-accent-text)] mb-8 hero-animate"
              style={{ animationDelay: '80ms' }}
            >
              UI INFRASTRUCTURE · ENTERPRISE B2B STARTUPS
            </p>

            {/* Headline */}
            <h1
              className={cn(
                'text-[clamp(3rem,7vw,5.75rem)] font-semibold leading-[1.0]',
                'tracking-[-0.02em] text-[var(--color-text-primary)] mb-8 hero-animate'
              )}
              style={{ animationDelay: '160ms' }}
            >
              Your frontend ships.<br />
              It doesn&apos;t scale.<br />
              <span className="text-[var(--color-accent-text)]">We fix that.</span>
            </h1>

            {/* Body */}
            <p
              className="text-[length:var(--text-body-lg)] text-[var(--color-text-secondary)] leading-[1.5] max-w-[600px] mb-10 hero-animate"
              style={{ animationDelay: '280ms' }}
            >
              ADL builds and operates governed UI infrastructure for enterprise
              B2B startups — the component architecture, the governance layer,
              the single source of truth between design and code. So your
              engineering team ships features instead of maintaining spaghetti.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 hero-animate"
              style={{ animationDelay: '380ms' }}
            >
              <Link
                href="/contact?type=audit"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[45px] px-7 rounded-[var(--radius-md)]',
                  'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
                  'font-semibold text-[length:var(--text-sm)]',
                  'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                  'active:brightness-90 transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
                )}
              >
                Book a free audit
              </Link>
              <Link
                href="/work"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[45px] px-7 rounded-[var(--radius-md)]',
                  'border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]',
                  'font-semibold text-[length:var(--text-sm)]',
                  'hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)]',
                  'active:brightness-90 transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
                )}
              >
                View our work →
              </Link>
            </div>
          </div>

          {/* Right — What We Build panel (desktop only) */}
          <div
            className="hidden lg:block bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-7 mt-2 hero-animate shadow-[var(--shadow-card)] border border-[var(--color-border)]"
            style={{ animationDelay: '300ms' }}
            aria-hidden="true"
          >
            <p className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-[var(--color-accent-text)] font-semibold mb-4">
              WHAT WE BUILD
            </p>
            <div className="border-t border-[var(--color-border)]" />
            {TRACKS.map((track, i) => (
              <div
                key={i}
                className="border-b border-[var(--color-border)] py-[14px] flex items-start gap-3"
              >
                <svg className="w-4 h-4 mt-1 flex-shrink-0 text-[var(--color-accent-text)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[var(--color-text-primary)] text-[length:var(--text-body)] leading-[1.35]">
                  {track.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
