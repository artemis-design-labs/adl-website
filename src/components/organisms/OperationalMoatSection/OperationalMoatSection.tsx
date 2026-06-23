'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const TAGS = [
  'Agentic Ecosystem',
  'Drift Detection',
  'Component Governance',
  'Figma ↔ React Sync',
  'UI Forge Engine',
  'Governance Enforcement',
  'Monthly Health Reports',
  'WCAG 2.1 AA',
];

export function OperationalMoatSection() {
  const { ref, dataVisible } = useFadeInOnView(0.1);

  return (
    /*
     * Semiflat "Design is the first layer of trust" pattern: the headline is
     * unconstrained — it fills the available width at display scale. Body text
     * and tags sit beneath it. No accent bar, no sidebar, no image.
     * The headline IS the whole visual event.
     * Blink UX tokens: bg-primary, accent-text on second line, xxs tags.
     */
    <section
      ref={ref}
      className="py-10 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Semiflat: headline runs at full display scale — no max-w constraint */}
        <h2
          className={cn(
            'text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.0] tracking-[-0.04em]',
            'text-[var(--color-text-primary)] mb-8 fade-up'
          )}
          data-visible={dataVisible}
        >
          The operational moat<br />
          <span className="text-[var(--color-accent-text)]">no agency can replicate.</span>
        </h2>

        {/* Body text */}
        <p
          className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[620px] mb-10 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '80ms' }}
        >
          ADL&apos;s agentic ecosystem — a master UI Infrastructure Architect
          agent coordinating specialized sub-agents — delivers the UI governance
          of a 500-person company to a 15-person startup, at startup pricing,
          at a speed no human-only agency can match. Every component passes
          through automated drift detection, token validation, and governance
          enforcement before it reaches your codebase. &ldquo;It runs&rdquo; is not
          the bar. Production-ready is.
        </p>

        {/* Blink UX: xxs radius (2px) tags */}
        <div
          className="flex flex-wrap gap-2 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '160ms' }}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className={cn(
                'inline-flex items-center px-3.5 py-1.5 rounded-[var(--radius-xxs)]',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'font-[var(--font-mono)] text-[12px] text-[var(--color-accent-text)]'
              )}
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
