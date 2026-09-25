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

/**
 * 2-column capability grid (R/GA pattern) — numbered, hairline top rule
 * per cell. The number does the ordering work that a decorative bullet
 * used to do, and reads as a system rather than a list.
 */
export function ServicesSection() {
  const { ref, dataVisible } = useFadeInOnView(0.05);

  return (
    <section
      ref={ref}
      id="services"
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <p
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-5 fade-up"
              data-visible={dataVisible}
            >
              What We Do
            </p>
            <h2
              className={cn(
                'text-[clamp(1.75rem,3.5vw,var(--text-h2))] font-semibold leading-[1.1]',
                'tracking-[-0.03em] text-[var(--color-text-primary)] fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: '60ms' }}
            >
              We fix what&apos;s broken. Then we build what keeps it fixed.
            </h2>
          </div>

          <p
            className="lg:col-span-6 lg:col-start-7 text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] fade-up lg:pt-10"
            data-visible={dataVisible}
            style={{ transitionDelay: '120ms' }}
          >
            ADL is an operational partner — not a vendor that drops off files. We
            identify where manual processes cost your team the most, then replace
            them with AI-powered systems, automated workflows, and trained teams
            that keep running long after we&apos;re gone.
          </p>
        </div>

        {/* 2 × 2 block lattice — hairlines are the 1px grid gap showing
            through from the container beneath, so every rule is exactly
            one pixel and no borders ever double up. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-[var(--color-border)] bg-[var(--color-border)]">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-[var(--color-bg-primary)] p-8 md:p-10 fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: `${180 + i * 80}ms` }}
            >
              <span
                className="block font-[var(--font-mono)] text-[11px] tracking-[0.14em] text-[var(--color-accent-text)] mb-6"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[clamp(1.125rem,1.6vw,var(--text-body-lg))] font-semibold text-[var(--color-text-primary)] mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[46ch]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
