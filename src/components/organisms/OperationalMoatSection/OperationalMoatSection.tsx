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
    <section
      ref={ref}
      className="py-16 md:py-20 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Accent bar + headline / body — 50/50 split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <div
              className="w-12 h-[3px] bg-[var(--color-accent)] mb-4 fade-up"
              data-visible={dataVisible}
              aria-hidden="true"
            />
            <h2
              className={cn(
                'text-[2rem] font-semibold leading-[1.2]',
                'tracking-[-0.01em] text-[var(--color-text-primary)] fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: '80ms' }}
            >
              The operational moat<br />
              <span className="text-[var(--color-accent-text)]">no agency can replicate.</span>
            </h2>
          </div>

          {/* Right */}
          <p
            className="text-[16px] text-[var(--color-text-secondary)] leading-[1.7] lg:pt-10 fade-up"
            data-visible={dataVisible}
            style={{ transitionDelay: '160ms' }}
          >
            ADL&apos;s agentic ecosystem — a master UI Infrastructure Architect
            agent coordinating specialized sub-agents — is what allows us to
            deliver the UI governance of a 500-person company to a 15-person
            startup, at startup pricing, at a speed no human-only agency can
            match. Every component passes through automated drift detection,
            token validation, and governance enforcement before it reaches
            your codebase. &ldquo;It runs&rdquo; is not the bar. Production-ready is.
          </p>
        </div>

        {/* Tag pills */}
        <div
          className="flex flex-wrap gap-3 mt-12 fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '280ms' }}
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className={cn(
                'inline-flex items-center px-4 py-2 rounded-full',
                'bg-[var(--color-bg-elevated)]',
                'font-[var(--font-mono)] text-[13px] text-[var(--color-accent-text)]',
                'border border-[var(--color-border)]'
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
