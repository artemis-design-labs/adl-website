'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

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
              DESIGN INFRASTRUCTURE FOR ENGINEERING-LED SAAS TEAMS
            </p>

            {/* Headline — all primary color, no inline accent */}
            <h1
              className={cn(
                'text-[clamp(2.25rem,4.5vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em]',
                'text-[var(--color-text-primary)] mb-6 hero-animate'
              )}
              style={{ animationDelay: '80ms' }}
            >
              You don't need more designers.<br />
              You need a system.
            </h1>

            {/* Body paragraph */}
            <p
              className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.65] mb-7 max-w-[560px] hero-animate"
              style={{ animationDelay: '160ms' }}
            >
              Most fast-growing teams have designers, engineers, and a roadmap
              — but no single owner for the layer connecting them. ADL builds
              that layer and keeps it governed, so your product scales without
              the UI debt that compounds every sprint.
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

          {/* RIGHT — 40% (col-span-5) — Product UI showcase.
              Scaled up 25% on desktop via a wrapper (kept off the animated
              card so the hero-animate transform doesn't override the scale). */}
          <div className="lg:col-span-5">
            <div className="lg:scale-[1.25] lg:origin-center">
            <div
              className={cn(
                'rounded-[var(--radius-md)] border border-[var(--color-border)]',
                'bg-[var(--color-bg-elevated)] overflow-hidden shadow-[var(--shadow-card)] hero-animate'
              )}
              style={{ animationDelay: '320ms' }}
            >
              <video
                src="/videos/mixpanel-insights.mp4"
                poster="/videos/mixpanel-insights-poster.jpg"
                width={1440}
                height={900}
                autoPlay
                loop
                muted
                playsInline
                aria-label="A product-analytics dashboard ADL built — funnels, retention charts, and metric cards updating in real time."
                className="w-full h-auto"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Thin separator */}
        <div className="mt-8 lg:mt-12 border-t border-[var(--color-border)]" aria-hidden="true" />
      </div>
    </section>
  );
}
