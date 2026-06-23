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
    /*
     * Interactivism pattern: 3-col dark cards, each opened by a large accent
     * quotation mark (blue instead of yellow). Quote body fills the card,
     * attribution sits at the very bottom separated by a thin rule.
     * Blink UX tokens: bg-elevated section, bg-primary cards, radius-md, accent color.
     */
    <section ref={ref} className="py-10 bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        <p
          className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-10 fade-up"
          data-visible={dataVisible}
        >
          WHAT FOUNDERS SAY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className={cn(
                'bg-[var(--color-bg-primary)] border border-[var(--color-border)]',
                'rounded-[var(--radius-md)] p-6 flex flex-col',
                'fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${60 + i * 80}ms` }}
            >
              {/* Interactivism: large accent quotation mark as card opener */}
              <span
                className="text-[3.5rem] font-bold leading-none text-[var(--color-accent)] mb-3 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote body */}
              <blockquote className="text-[14px] text-[var(--color-text-primary)] leading-[1.7] flex-1 mb-6">
                {t.quote}
              </blockquote>

              {/* Thin rule + attribution */}
              <div className="border-t border-[var(--color-border)] pt-4">
                <p className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-[0.08em] leading-[1.5]">
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
