'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const SERVICES = [
  {
    title: 'Design System Creation',
    description:
      'Tokenized component libraries built from the ground up — production-ready in Figma and code, documented, and scalable across your entire product surface.',
  },
  {
    title: 'Design-to-Code Handoff',
    description:
      'Governed pipelines that close the gap between Figma and engineering — every component ships exactly as designed, with full state coverage.',
  },
  {
    title: 'AI Model Training',
    description:
      'Custom AI trained on your design tokens, component patterns, and brand rules — so your team ships UI faster with significantly less manual lift.',
  },
  {
    title: 'Governance Layer',
    description:
      'Automated drift detection and enforcement across your product surface — catching UI violations before they reach production.',
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
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-20 md:py-28"
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
          Everything your UI<br />infrastructure needs.
        </h2>

        {/* Body */}
        <p
          className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[600px] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '120ms' }}
        >
          Artemis Design Labs delivers end-to-end UI infrastructure — from design system
          architecture and component engineering through to AI model training,
          governed code handoff, and ongoing drift monitoring.
        </p>

        {/* Horizontal divider */}
        <div
          className="mt-12 mb-12 h-px bg-[var(--color-border)] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '180ms' }}
          aria-hidden="true"
        />

        {/* 2×2 service grid */}
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
