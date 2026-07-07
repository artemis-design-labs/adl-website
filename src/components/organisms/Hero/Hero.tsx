'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const CAPABILITIES = [
  { label: 'Design Language Architecture',      href: '/services' },
  { label: 'Figma-to-Code Pipeline',            href: '/services' },
  { label: 'Agentic UI Generation',             href: '/services' },
  { label: 'Drift Detection & Governance',      href: '/services' },
  { label: 'Infrastructure Lifecycle Management', href: '/services' },
];

export function Hero() {
  return (
    /*
     * Creative Navy pattern — Enterprise UX & Research.
     * Clean dark background (no grid lines). 60/40 split: content left,
     * navigational capabilities card right. Short accent rule above the
     * eyebrow. Headline is all primary color — no inline accent span.
     */
    <section className="relative bg-[var(--color-bg-primary)] pt-[88px] md:pt-[104px] pb-8 lg:pb-12 overflow-hidden">
      <div className="relative max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — 60% (col-span-7) */}
          <div className="lg:col-span-7">

            {/* Creative Navy signature: short accent rule above eyebrow */}
            <div
              className="w-8 h-[2px] bg-[var(--color-accent)] mb-4 hero-animate"
              style={{ animationDelay: '0ms' }}
              aria-hidden="true"
            />

            {/* Mono eyebrow */}
            <p
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5 hero-animate"
              style={{ animationDelay: '40ms' }}
            >
              UI INFRASTRUCTURE · ENTERPRISE B2B STARTUPS
            </p>

            {/* Headline — all primary color, no inline accent */}
            <h1
              className={cn(
                'text-[clamp(2.75rem,6vw,5.25rem)] font-bold leading-[1.0] tracking-[-0.035em]',
                'text-[var(--color-text-primary)] mb-6 hero-animate'
              )}
              style={{ animationDelay: '80ms' }}
            >
              We build<br />
              AI-engineered<br />
              UI Infrastructure.
            </h1>

            {/* Body paragraph */}
            <p
              className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.65] mb-7 max-w-[560px] hero-animate"
              style={{ animationDelay: '160ms' }}
            >
              Artemis Design Labs builds and governs scalable AI solutions
              to remove design bottlenecks that plague enterprise startups.
              From component architecture to the governance layer — we ensure
              your teams ship features with minimal UI friction.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-3 hero-animate"
              style={{ animationDelay: '240ms' }}
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
                href="#clients"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[44px] px-7 rounded-[var(--radius-md)]',
                  'border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] font-bold text-[14px]',
                  'hover:border-[var(--color-accent)] hover:text-[var(--color-accent-text)]',
                  'active:brightness-90 transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]'
                )}
              >
                About us →
              </Link>
            </div>
          </div>

          {/* RIGHT — 40% (col-span-5) — Capabilities Panel (Creative Navy pattern) */}
          <div className="lg:col-span-5">
            <CapabilitiesPanel />
          </div>
        </div>

        {/* Thin separator */}
        <div className="mt-8 lg:mt-12 border-t border-[var(--color-border)]" aria-hidden="true" />
      </div>
    </section>
  );
}

function CapabilitiesPanel() {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--color-border)]',
        'bg-[var(--color-bg-elevated)] overflow-hidden hero-animate'
      )}
      style={{ animationDelay: '320ms' }}
    >
      {/* Panel header */}
      <div className="px-6 py-5 border-b border-[var(--color-border)]">
        <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-text)]">
          › Capabilities
        </p>
      </div>

      {/* Capability list */}
      <ul className="divide-y divide-[var(--color-border)]">
        {CAPABILITIES.map((cap) => (
          <li
            key={cap.label}
            className="px-6 py-5 text-[15px] text-[var(--color-text-secondary)]"
          >
            {cap.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
