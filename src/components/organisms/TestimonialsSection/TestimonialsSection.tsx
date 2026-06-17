'use client';

import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const TESTIMONIALS = [
  {
    quote:
      "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React in three weeks — and the code actually passed review the first time. I didn't know that was possible at this stage.",
    author: 'CTO & Co-founder',
    company: 'Series A Healthcare SaaS',
  },
  {
    quote:
      "We lost an enterprise deal because the buyer flagged UI inconsistency in the demo. Six weeks after ADL built our governance system, we closed the same deal. That's the only number that matters.",
    author: 'CEO & Co-founder',
    company: 'Seed-Stage B2B SaaS',
  },
  {
    quote:
      "Nobody on our team owned UI infrastructure — everyone built inconsistently and the debt was invisible until it wasn't. ADL built the governance layer and ran it for us. New engineers ship their first feature in three days now. It used to take two weeks.",
    author: 'VP of Engineering',
    company: 'Series A Analytics Platform',
  },
];

export function TestimonialsSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section ref={ref} className="py-16 md:py-20 bg-[var(--color-bg-elevated)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        <h2
          className={cn(
            'text-[2rem] font-semibold leading-[1.2]',
            'tracking-[-0.01em] text-[var(--color-text-primary)] mb-12 fade-up'
          )}
          data-visible={dataVisible}
        >
          From Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={cn(
                'bg-[var(--color-bg-primary)] border border-[var(--color-border)]',
                'rounded-[var(--radius-md)] overflow-hidden p-6',
                'shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
                'transition-shadow duration-200 fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              {/* Creative Navy accent bar — 48px × 3px at card top-left */}
              <div
                className="w-12 h-[3px] bg-[var(--color-accent)] mb-5"
                aria-hidden="true"
              />

              <blockquote className="text-[14px] text-[var(--color-text-primary)] leading-[1.65] mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <p className="font-[var(--font-mono)] text-[12px] text-[var(--color-text-muted)]">
                {t.author} · {t.company}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
