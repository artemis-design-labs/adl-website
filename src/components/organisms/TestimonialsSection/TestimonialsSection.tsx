'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const TESTIMONIALS = [
  {
    quote:
      "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React — and the code actually passed review the first time. I didn't know that was possible at this stage.",
    author: 'CTO & Co-founder',
    company: 'Series A Healthcare SaaS',
  },
  {
    quote:
      "We lost an enterprise deal because the buyer flagged UI inconsistency in the demo. After ADL built our governance system, we closed the same deal. That's the only number that matters.",
    author: 'CEO & Co-founder',
    company: 'Seed-Stage B2B SaaS',
  },
  {
    quote:
      "Nobody on our team owned UI infrastructure — everyone built inconsistently and the debt was invisible until it wasn't. ADL built the governance layer and ran it for us. New engineers ship their first feature significantly faster now.",
    author: 'VP of Engineering',
    company: 'Series A Analytics Platform',
  },
];

/**
 * 3-column proof grid. Hairline top rule per column instead of bordered
 * cards and an oversized quotation mark — the quote carries itself.
 */
export function TestimonialsSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <h2
          className={cn(
            'text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1]',
            'tracking-[-0.03em] text-[var(--color-text-primary)] mb-16 max-w-[20ch] fade-up'
          )}
          data-visible={dataVisible}
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col bg-[var(--color-bg-elevated)] p-8 md:p-10 fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${80 + i * 80}ms` }}
            >
              <blockquote className="flex-1 text-[15px] text-[var(--color-text-secondary)] leading-[1.75] mb-8">
                {t.quote}
              </blockquote>
              <figcaption className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)] leading-[1.7]">
                {t.author}<br />{t.company}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}
