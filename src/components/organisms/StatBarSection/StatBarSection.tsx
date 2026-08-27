'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';

// Every figure here must be something we can point at a source for.
// `190K+ AI training images` was removed 2026-07-25 — no citable source.
// See the fact-audit table in Website-Content.md before adding another.
const METRICS = [
  { value: '10',   label: 'Design systems deployed' },
  { value: '15',   label: 'AI solutions & agentic workflows implemented' },
  { value: '20+',  label: 'Years of combined experience' },
  { value: '250+', label: 'Active users trained on our solutions' },
];

export function StatBarSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    /*
     * Ramotion metrics pattern — bare bold numbers, no cards, no borders.
     * Light elevated bg creates visual pause between hero and logo strip.
     */
    <section
      ref={ref}
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-6 md:py-8"
      aria-label="Key metrics"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:gap-16">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] mb-2">
                {m.value}
              </div>
              <div className="text-[13px] text-[var(--color-text-tertiary)] leading-snug">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
