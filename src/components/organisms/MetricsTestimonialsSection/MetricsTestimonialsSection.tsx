'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

const METRICS = [
  { value: '190K+',     label: 'Training images',     description: 'Powering our proprietary AI models' },
  { value: '3-4 wks',   label: 'Not 3-4 months',      description: 'Average delivery for a full system' },
  { value: '5 states',  label: 'Per component',       description: 'Loading · error · empty · partial · denied' },
  { value: '0',         label: 'Figma-only output',   description: 'Every design ships with production code' },
];

const TESTIMONIALS = [
  {
    quote:
      "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React in three weeks — and the code actually passed review. As a founder, I didn't know that was possible.",
    author: 'CTO & Co-founder',
    company: 'Series A Healthcare SaaS',
  },
  {
    quote:
      "What sold us wasn't the AI pitch — it was that their team had actually built startups before. They understood why we needed this done in three weeks, not three months. The AI just meant they could actually deliver on that timeline.",
    author: 'Founder & CEO',
    company: 'Seed-Stage Fintech',
  },
  {
    quote:
      "Our previous design system was a graveyard. Nobody used it. ADL rebuilt it around how our engineers actually work. Adoption went from maybe 30% to over 90% in two months.",
    author: 'VP of Engineering',
    company: 'Series B Analytics Platform',
  },
];

const AUTO_ADVANCE_MS = 7000;

export function MetricsTestimonialsSection() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const goTo = (i: number) => {
    pausedRef.current = true;
    setActive(i);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Metrics */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                › by the numbers
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
                AI-Powered Results
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m) => (
                <article
                  key={m.label}
                  className={cn(
                    'p-6 rounded-xl',
                    'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                    'hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)]',
                    'transition-colors duration-200'
                  )}
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-2">
                    {m.value}
                  </div>
                  <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-primary)] mb-2">
                    {m.label}
                  </div>
                  <div className="text-sm md:text-base text-[var(--color-text-secondary)] leading-snug">
                    {m.description}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right — Testimonials */}
          <div
            className="lg:col-span-6"
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-3">
                  › testimonials
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
                  Founders who trust us
                </h2>
              </div>
            </div>

            <article
              className={cn(
                'p-8 lg:p-10 rounded-2xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'shadow-[var(--shadow-md)]'
              )}
            >
              {/* Decorative open-quote in violet */}
              <span aria-hidden="true" className="block text-5xl leading-none text-[var(--color-accent)] mb-2 font-[var(--font-mono)]">
                &ldquo;
              </span>

              <blockquote className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-primary)] leading-relaxed mb-8">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-border)]">
                <div className="w-11 h-11 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/40 flex items-center justify-center">
                  <span className="font-[var(--font-mono)] text-sm font-medium text-[var(--color-accent)]">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text-primary)]">
                    {t.author}
                  </div>
                  <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]">
                    {t.company}
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    'relative h-11 inline-flex items-center justify-center',
                    'before:content-[""] before:block before:rounded-full before:transition-all before:duration-200',
                    i === active
                      ? 'before:w-8 before:h-1.5 before:bg-[var(--color-accent)]'
                      : 'before:w-1.5 before:h-1.5 before:bg-[var(--color-border-strong)] hover:before:bg-[var(--color-text-muted)]'
                  )}
                  style={{ minWidth: 44 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
