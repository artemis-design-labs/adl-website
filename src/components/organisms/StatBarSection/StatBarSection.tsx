'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const METRICS = [
  { value: '3–4 wks', label: 'Delivery',              sub: 'Not 3–4 months' },
  { value: '190K+',  label: 'Training images',         sub: 'Proprietary AI models' },
  { value: '5',      label: 'States per component',    sub: 'Loading · error · empty · partial · denied' },
  { value: '0',      label: 'Figma-only output',       sub: 'Every design ships with production code' },
];

export function StatBarSection() {
  const { ref, dataVisible } = useFadeInOnView(0.15);

  return (
    /*
     * Wandr Studio pattern: dark result-card row — each metric sits in its own
     * elevated card rather than a bare divided strip. bg-elevated surface, no border
     * between cards (gap instead), accent numeral, bold label, mono sub-caption.
     */
    <section
      ref={ref}
      className="bg-[var(--color-bg-primary)] py-10 border-b border-[var(--color-border)]"
      aria-label="Key metrics"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'rounded-[var(--radius-md)] px-6 py-7 fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Wandr: large metric numeral in accent */}
              <div className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em] text-[var(--color-accent-text)] mb-3">
                {m.value}
              </div>
              {/* Bold label */}
              <div className="text-[13px] font-bold text-[var(--color-text-primary)] mb-1">
                {m.label}
              </div>
              {/* Mono sub-caption */}
              <div className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] leading-[1.45]">
                {m.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
