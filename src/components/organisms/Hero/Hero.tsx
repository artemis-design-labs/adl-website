'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const INLINE_STATS = [
  { value: '3–4 wks', label: 'Not 3–4 months' },
  { value: '190K+',  label: 'Training images' },
  { value: '0',      label: 'Figma-only output' },
];

export function Hero() {
  return (
    /*
     * HTEC Momentum pattern — Enterprise Digital Transformation.
     * 60/40 asymmetric split: content (eyebrow + headline + body + CTAs)
     * lives left, technical visual (metrics console) lives right. A
     * subtle grid-lines background runs underneath the whole section
     * with a radial mask softening the edges — HTEC's signature
     * engineering aesthetic. All copy preserved verbatim.
     */
    <section className="relative bg-[var(--color-bg-primary)] pt-28 md:pt-40 pb-14 lg:pb-20 overflow-hidden">

      {/* HTEC signature: grid-lines background, soft radial fade to edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 60% 40%, #000 35%, transparent 90%)',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 60% 40%, #000 35%, transparent 90%)',
        }}
      />

      {/* Soft violet wash behind right column — anchors the metrics panel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 85% 45%, rgba(124,58,237,0.10), transparent 70%)',
        }}
      />

      <div className="relative max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT — 60% (col-span-7) */}
          <div className="lg:col-span-7">

            {/* Mono eyebrow */}
            <p
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-7 hero-animate"
              style={{ animationDelay: '0ms' }}
            >
              UI INFRASTRUCTURE · ENTERPRISE B2B STARTUPS
            </p>

            {/* Headline — sized for narrower column */}
            <h1
              className={cn(
                'text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.035em]',
                'text-[var(--color-text-primary)] mb-8 hero-animate'
              )}
              style={{ animationDelay: '60ms' }}
            >
              We build the AI<br />
              that scales your<br />
              <span className="text-[var(--color-accent-text)]">UI Infrastructure.</span>
            </h1>

            {/* Body paragraph — full column width */}
            <p
              className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.65] mb-10 max-w-[620px] hero-animate"
              style={{ animationDelay: '160ms' }}
            >
              Artemis Design Labs is a design partner that builds and governs
              scalable AI solutions to remove design bottlenecks that plague
              enterprise startups. From the component architecture to the
              governance layer to the single source of truth between design
              and code, we at Artemis ensure that your engineering teams ship
              features with minimal friction in the UI.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-3 hero-animate"
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
          </div>

          {/* RIGHT — 40% (col-span-5) — Metrics Console (HTEC technical visual) */}
          <div className="lg:col-span-5">
            <MetricsConsole />
          </div>
        </div>

        {/* Thin separator — transitions into the stat bar below */}
        <div className="mt-14 lg:mt-20 border-t border-[var(--color-border)]" aria-hidden="true" />
      </div>
    </section>
  );
}

function MetricsConsole() {
  return (
    <div
      className={cn(
        'relative rounded-[10px] border border-[var(--color-border)]',
        'bg-[var(--color-bg-elevated)] overflow-hidden',
        'shadow-[var(--shadow-lg)] hero-animate'
      )}
      style={{ animationDelay: '340ms' }}
    >
      {/* Header bar — filename + ONLINE indicator */}
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="text-[var(--color-accent-text)] font-[var(--font-mono)] text-[11px] flex-shrink-0"
            aria-hidden="true"
          >
            ›
          </span>
          <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-secondary)] truncate">
            system.metrics.json
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"
            aria-hidden="true"
          />
          <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-emerald-400">
            Online
          </span>
        </div>
      </div>

      {/* Stats stack — grid-aligned rows */}
      <ul className="divide-y divide-[var(--color-border)]">
        {INLINE_STATS.map((s, i) => (
          <li
            key={s.value}
            className="grid grid-cols-[auto_1fr_auto] items-end gap-4 px-6 py-6"
          >
            <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-tertiary)] leading-none self-start mt-2">
              0{i + 1}
            </span>
            <div className="min-w-0">
              <div className="text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[0.95] tracking-[-0.035em] text-[var(--color-text-primary)]">
                {s.value}
              </div>
              <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-tertiary)] mt-2">
                {s.label}
              </div>
            </div>
            <span
              className="text-[var(--color-accent-text)] font-[var(--font-mono)] text-[14px] leading-none self-center"
              aria-hidden="true"
            >
              →
            </span>
          </li>
        ))}
      </ul>

      {/* Footer bar — capability tags + version */}
      <div className="flex items-center justify-between gap-3 px-5 py-2.5 border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
          audit · stream · gov
        </span>
        <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-text-tertiary)]">
          v1.4
        </span>
      </div>
    </div>
  );
}
