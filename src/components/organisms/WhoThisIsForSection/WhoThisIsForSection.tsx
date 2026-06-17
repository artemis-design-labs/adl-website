'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const QUALIFIERS = [
  'You ship in React or Next.js',
  'Your engineering team is 15–60 people, actively hiring',
  'Your product is data-heavy — dashboards, admin panels, multi-role permissions',
  'You operate in fintech, healthtech, govtech, or compliance-sensitive B2B SaaS',
  'You\'ve raised $2M–$20M, between Seed and early Series A',
  'You\'re losing sprint time to UI rework — or losing enterprise deals to UI polish',
];

const DISQUALIFIERS = [
  'You\'re pre-product or pre-team — come back at Series A',
  'You need a marketing site or a consumer app',
  'You want Figma files without production-ready code',
  'You want brand identity, logo design, or a shadcn wrapper',
  'Your stack isn\'t React or Next.js — we can\'t help, period',
];

export function WhoThisIsForSection() {
  const { ref, dataVisible } = useFadeInOnView(0.15);

  return (
    <section
      ref={ref}
      id="who-this-is-for"
      className="relative bg-[var(--color-bg-primary)] scroll-mt-24"
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8 py-28 md:py-36">
        {/* Section header */}
        <header
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto fade-up"
          data-visible={dataVisible}
        >
          <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-accent)]" aria-hidden="true">›&nbsp;</span>
            who this is for
          </p>
          <h2
            className={cn(
              'mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold',
              'leading-[1.1] tracking-[-0.025em]',
              'text-[var(--color-text-primary)]'
            )}
          >
            Built for engineering-led
            <br />
            <span className="text-[var(--color-accent)]">B2B startups.</span>
          </h2>
          <p className="mt-7 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
            ADL works with a narrow profile of teams. The engagement compounds when there&apos;s
            fit — and fails when there isn&apos;t. Here&apos;s exactly who we&apos;re built for.
          </p>
        </header>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Qualifiers card */}
          <article
            className={cn(
              'rounded-2xl border border-[var(--color-border)]',
              'bg-[var(--color-bg-elevated)]',
              'p-8 lg:p-10',
              'transition-colors duration-200',
              'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
              'fade-up'
            )}
            data-visible={dataVisible}
            style={{ transitionDelay: '120ms' }}
          >
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              <span aria-hidden="true">›&nbsp;</span>
              a fit
            </p>
            <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] leading-snug">
              You&apos;re an engineering-led B2B startup hitting structural UI debt.
            </h3>
            <ul className="mt-8 space-y-4">
              {QUALIFIERS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="font-[var(--font-mono)] text-[var(--color-accent)] leading-[1.55] mt-px flex-shrink-0"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                  <span className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Disqualifiers card */}
          <article
            className={cn(
              'rounded-2xl border border-[var(--color-border)]',
              'bg-[var(--color-bg-elevated)]',
              'p-8 lg:p-10',
              'transition-colors duration-200',
              'hover:border-[var(--color-border-strong)]',
              'fade-up'
            )}
            data-visible={dataVisible}
            style={{ transitionDelay: '240ms' }}
          >
            <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
              <span aria-hidden="true">›&nbsp;</span>
              not a fit
            </p>
            <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] leading-snug">
              We&apos;ll turn the engagement down — and tell you why.
            </h3>
            <ul className="mt-8 space-y-4">
              {DISQUALIFIERS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="font-[var(--font-mono)] text-[var(--color-text-muted)] leading-[1.55] mt-px flex-shrink-0"
                    aria-hidden="true"
                  >
                    –
                  </span>
                  <span className="text-sm md:text-base text-[var(--color-text-tertiary)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 md:mt-16 text-center fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '380ms' }}
        >
          <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)] mb-5">
            <span className="text-[var(--color-accent)]" aria-hidden="true">›&nbsp;</span>
            sounds like you?
          </p>
          <Link
            href="/contact?type=audit"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
              'font-medium text-base',
              'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
              'active:translate-y-px transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            Get a free UI infrastructure audit
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
