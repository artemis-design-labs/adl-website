'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

const SERVICES = [
  {
    number: '01',
    title: 'Design System Creation',
    tagline: "We've built this from scratch — for our own startups.",
    price: '$15,000 – $25,000',
    timeline: '3-4 weeks',
    description:
      "You either don't have a design system, or you have fragments scattered across your product. We audit the chaos and build you a real foundation — 25+ production-ready components in Figma AND your framework.",
  },
  {
    number: '02',
    title: 'Design System Maintenance',
    tagline: 'Infrastructure without maintenance is debt waiting to happen.',
    price: '$4,000 – $6,000 / mo',
    timeline: '6-month minimum',
    description:
      "Design systems die without maintenance. Components drift. Documentation goes stale. We become your dedicated design systems team with AI-powered drift detection and monthly health reports.",
  },
  {
    number: '03',
    title: 'Design-to-Code Handoff',
    tagline: 'Your designers did the work. Our AI finishes the job.',
    price: '$8,000 – $15,000',
    timeline: '2-3 weeks',
    description:
      "Designs sitting in Figma your engineering team doesn't have bandwidth to implement. Our AI converts your existing files into production-ready code your senior engineers approve on the first PR.",
  },
];

const STATS = [
  { value: '190K+', label: 'Training images' },
  { value: '3-4 wks', label: 'Average delivery' },
  { value: '100%', label: 'Code parity' },
];

const AUTO_ADVANCE_MS = 6500;

export function AboutUsSection() {
  const [activeService, setActiveService] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setActiveService((prev) => (prev + 1) % SERVICES.length);
      }
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => {
    pausedRef.current = true;
    setActiveService(i);
  };
  const prev = () => goTo((activeService - 1 + SERVICES.length) % SERVICES.length);
  const next = () => goTo((activeService + 1) % SERVICES.length);

  const service = SERVICES[activeService];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — About */}
          <div className="lg:col-span-6 space-y-8">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              › about adl
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Built by founders.
              <br />
              <span className="text-[var(--color-accent)]">For founders.</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                We&apos;re ex-startup operators who burned years of runway on agency retainers,
                handoff cycles, and Figma files our engineers couldn&apos;t implement.
              </p>
              <p>
                When the AI tooling caught up to the problem, we stopped waiting for someone else
                to fix it and built it ourselves. Now we ship the design infrastructure we
                wished we&apos;d had — for the next generation of founders walking the same path.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--color-bg-elevated)] p-5 lg:p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Services carousel */}
          <div
            className="lg:col-span-6"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                › what we offer
              </span>
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                {String(activeService + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
              </span>
            </div>

            <article
              className={cn(
                'relative p-8 lg:p-10 rounded-2xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'shadow-[var(--shadow-md)]',
                'transition-all duration-300'
              )}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {service.number}
                </span>
                <span className="flex-1 h-px bg-[var(--color-border)]" />
                <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-text-tertiary)]">
                  {service.timeline}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] mb-3">
                {service.title}
              </h3>

              <p className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-[var(--color-accent)] mb-6">
                {service.tagline}
              </p>

              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex items-baseline justify-between pt-6 border-t border-[var(--color-border)]">
                <div>
                  <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-1">
                    Starting at
                  </span>
                  <span className="text-lg font-medium text-[var(--color-text-primary)]">
                    {service.price}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous service"
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-md',
                      'border border-[var(--color-border)] text-[var(--color-text-secondary)]',
                      'hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
                      'transition-colors'
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next service"
                    className={cn(
                      'inline-flex items-center justify-center w-10 h-10 rounded-md',
                      'border border-[var(--color-border)] text-[var(--color-text-secondary)]',
                      'hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]',
                      'transition-colors'
                    )}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Dots */}
            <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Services">
              {SERVICES.map((s, i) => (
                <button
                  key={s.number}
                  role="tab"
                  aria-selected={i === activeService}
                  aria-label={`Go to ${s.title}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-200',
                    i === activeService
                      ? 'w-8 bg-[var(--color-accent)]'
                      : 'w-1.5 bg-[var(--color-border-strong)] hover:bg-[var(--color-text-muted)]'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
