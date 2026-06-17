'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const METRICS = [
  {
    value: '190K+',
    label: 'Training images',
    description: 'Powering our proprietary AI models',
  },
  {
    value: '3–4 wks',
    label: 'Not 3–4 months',
    description: 'Average delivery for a full system',
  },
  {
    value: '5 states',
    label: 'Per component',
    description: 'Loading · error · empty · partial · denied',
  },
  {
    value: '0',
    label: 'Figma-only output',
    description: 'Every design ships with production code',
  },
];

export function StatBarSection() {
  const { ref, dataVisible } = useFadeInOnView(0.2);

  return (
    <section
      ref={ref}
      className="bg-[var(--color-bg-primary)] border-y border-[var(--color-border)]"
      aria-label="Key metrics"
    >
      <div className="max-w-[var(--container-wide)] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border)]">
          {METRICS.map((m, idx) => (
            <div
              key={m.label}
              className="px-8 py-12 lg:py-14 text-center fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div
                className="text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-[-0.025em] text-[var(--color-accent-text)] leading-none mb-3"
                aria-label={m.value}
              >
                {m.value}
              </div>
              <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-primary)] mb-2">
                {m.label}
              </div>
              <div className="text-sm text-[var(--color-text-tertiary)] leading-snug">
                {m.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
