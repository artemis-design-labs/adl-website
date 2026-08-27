'use client';

import { useFadeInOnView } from '@/hooks/useFadeInOnView';
import { cn } from '@/lib/cn';

const PILLARS = [
  {
    title: 'UI Infrastructure',
    description:
      'As your team grows, different people make different decisions. Products start looking inconsistent, and fixing it eats more time than building new features. We install the foundation that keeps everything aligned — across every team, every screen, every release.',
  },
  {
    title: 'AI Product Solutions',
    description:
      'Off-the-shelf AI tools handle generic tasks. We build custom solutions for the specific manual work slowing your team down — automating the workflows that currently require a person to check, generate, or approve.',
  },
  {
    title: 'Agentic Workflows & Automations',
    description:
      'When critical knowledge lives in one person\'s head, you\'re one departure away from a crisis. We build automated systems that monitor your operations, catch problems early, and handle complex coordination — without someone managing them every day.',
  },
  {
    title: 'Training',
    description:
      'Most agencies deliver and disappear. We treat your team\'s ability to own and evolve the system as a core deliverable. New hires are productive in days, not weeks. Key exits don\'t break anything. The work lasts.',
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
          We fix what&apos;s broken. <span className="text-[var(--color-accent)]">Then we build what keeps it fixed.</span>
        </h2>

        {/* Body */}
        <p
          className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[600px] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '120ms' }}
        >
          ADL is an operational partner — not a vendor that drops off files. We
          identify where manual processes cost your team the most, then replace
          them with AI-powered systems, automated workflows, and trained teams
          that keep running long after we&apos;re gone.
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
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
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
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.7]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
