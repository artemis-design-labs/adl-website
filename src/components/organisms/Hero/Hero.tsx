'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

// Three inline stats pulled from the StatBar data — surface them early for fast credibility.
const INLINE_STATS = [
  { value: '3–4 wks', label: 'Not 3–4 months' },
  { value: '190K+',  label: 'Training images' },
  { value: '0',      label: 'Figma-only output' },
];

export function Hero() {
  return (
    /*
     * Interactivism pattern: full-dark, headline spans the full container width
     * (no left/right column split), body copy sits left beneath it, inline
     * credibility stats float right alongside the body, CTAs sit below.
     * Blink UX tokens throughout — blue accent, radius-md buttons, tight type.
     */
    <section className="bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-0">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Mono eyebrow */}
        <p
          className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7 hero-animate"
          style={{ animationDelay: '0ms' }}
        >
          UI INFRASTRUCTURE · ENTERPRISE B2B STARTUPS
        </p>

        {/* Interactivism: headline fills the full width — no column constraint */}
        <h1
          className={cn(
            'text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-10 hero-animate'
          )}
          style={{ animationDelay: '60ms' }}
        >
          We build the AI<br />
          that scales your <span className="text-[var(--color-accent-text)]">UI.</span>
        </h1>

        {/* Interactivism: body copy LEFT, inline stats RIGHT — same row */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-10 hero-animate"
          style={{ animationDelay: '160ms' }}
        >
          {/* Body text */}
          <p className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[560px]">
            Artemis Design Labs is a design partner that builds and governs
            scalable AI solutions to remove design bottlenecks that plague
            enterprise startups. From the component architecture to the
            governance layer to the single source of truth between design
            and code, we at Artemis ensure that your engineering teams ship
            features with minimal friction in the UI.
          </p>

          {/* Interactivism: 3 inline credibility stats, stacked vertically right of body */}
          <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 lg:text-right flex-shrink-0">
            {INLINE_STATS.map((s) => (
              <div key={s.value}>
                <div className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">
                  {s.value}
                </div>
                <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start gap-3 pb-14 lg:pb-20 hero-animate"
          style={{ animationDelay: '260ms' }}
        >
          <Link
            href="/contact?type=audit"
            className={cn(
              'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
              'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-bold text-[14px]',
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
              'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
              'border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] font-bold text-[14px]',
              'hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)]',
              'active:brightness-90 transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
            )}
          >
            View our work →
          </Link>
        </div>

        {/* Thin separator — transitions into the stat bar below */}
        <div className="border-t border-[var(--color-border)]" aria-hidden="true" />
      </div>
    </section>
  );
}
