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

/** 4-column metric grid. Bare numerals, hairline dividers, no cards. */
export function StatBarSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    <section
      ref={ref}
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-16 md:py-20"
      aria-label="Key metrics"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="bg-[var(--color-bg-elevated)] p-8 md:p-10 fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[clamp(2.25rem,4vw,var(--text-h2))] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)] mb-4">
                {m.value}
              </div>
              <div className="text-[13px] text-[var(--color-text-tertiary)] leading-snug max-w-[22ch]">
                {m.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
