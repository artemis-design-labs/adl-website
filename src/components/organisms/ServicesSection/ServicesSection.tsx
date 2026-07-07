'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const SERVICES = [
  {
    title: 'Design Language Architecture',
    description:
      'The token-based foundation that gives every design decision a single source of truth across your entire product.',
  },
  {
    title: 'Figma-to-Code Pipeline',
    description:
      'Automated sync between design intent and production code, eliminating the translation layer that costs engineering teams hours every sprint.',
  },
  {
    title: 'Agentic UI Generation',
    description:
      'AI-powered pipelines that produce production-ready UI at the speed your roadmap demands, without the manual overhead.',
  },
  {
    title: 'Drift Detection & Governance',
    description:
      'Continuous monitoring that catches inconsistencies before they compound, keeping every layer aligned as your team scales.',
  },
  {
    title: 'Infrastructure Lifecycle Management',
    description:
      'Ongoing evolution of the system as your product, team, and stack grow — so the infrastructure never becomes the constraint.',
  },
];

export function ServicesSection() {
  const { ref, dataVisible } = useFadeInOnView(0.05);

  return (
    /*
     * Apexon Services pattern — elevated bg, bold headline,
     * thin horizontal divider, 2×2 grid with square accent bullet.
     */
    <section
      ref={ref}
      id="services"
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-20 md:py-28"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        {/* Eyebrow */}
        <p
          className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-5 fade-up"
          data-visible={dataVisible}
        >
          <span aria-hidden="true">›&nbsp;</span>
          What We Do
        </p>

        {/* Headline */}
        <h2
          className={cn(
            'text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.05]',
            'tracking-[-0.03em] text-[var(--color-text-primary)] mb-6 max-w-[640px] fade-up'
          )}
          data-visible={dataVisible}
          style={{ transitionDelay: '60ms' }}
        >
          One Single Ecosystem designed to scale<br />with your product and team.
        </h2>

        {/* Body */}
        <p
          className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[600px] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '120ms' }}
        >
          Most infrastructure work fixes one layer at a time. ADL architects every layer
          as a unified system — so design decisions, code, and documentation compound
          together instead of drifting apart.
        </p>

        {/* Horizontal divider */}
        <div
          className="mt-12 mb-12 h-px bg-[var(--color-border)] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '180ms' }}
          aria-hidden="true"
        />

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.title}
              className="flex items-start gap-4 fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${240 + i * 80}ms` }}
            >
              {/* Square accent bullet — Apexon signature */}
              <div
                className="w-[10px] h-[10px] flex-shrink-0 mt-[5px] bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
