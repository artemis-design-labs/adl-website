'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

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
    /*
     * Interactivism testimonials pattern — dark bg, plain bold h2,
     * 3 equal cards each opened by a large accent quotation mark,
     * quote body fills card, attribution separated by thin rule at bottom.
     */
    <section
      ref={ref}
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <h2
          className={cn(
            'text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.05]',
            'tracking-[-0.025em] text-[var(--color-text-primary)] mb-12 fade-up'
          )}
          data-visible={dataVisible}
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={cn(
                'bg-[var(--color-bg-primary)] border border-[var(--color-border)]',
                'rounded-[var(--radius-md)] p-6 flex flex-col fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${80 + i * 80}ms` }}
            >
              {/* Interactivism: large accent quotation mark as card opener */}
              <span
                className="text-[3rem] font-bold leading-none text-[var(--color-accent)] mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7] flex-1 mb-6">
                {t.quote}
              </blockquote>

              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="text-[12px] text-[var(--color-text-tertiary)] leading-[1.6]">
                  {t.author}<br />{t.company}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
