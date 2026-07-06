'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const PROJECTS = [
  {
    eyebrow: 'HEALTHCARE SAAS · DESIGN SYSTEM BUILD',
    title: 'HANDS AI — Production Design System',
    description:
      'Built a complete WIC case management platform powered by a custom AI agent. Production-ready React in three weeks — the first PR passed senior-engineer review on submission.',
    metric: '40%',
    metricLabel: 'Faster case processing',
    href: '/work/hands-ai',
    colorBlock: 'left',
  },
  {
    eyebrow: 'ENTERPRISE MEDIA · COMPONENT LIBRARY',
    title: 'NBCU — Unified Component Architecture',
    description:
      'Eliminated handoff chaos across four separate product teams by building a single token-synced component library. One source of truth, every surface.',
    metric: '94%',
    metricLabel: 'First-PR approval rate',
    href: '/work/nbcu',
    colorBlock: 'right',
  },
];

export function CaseStudySection() {
  const { ref, dataVisible } = useFadeInOnView(0.05);

  return (
    /*
     * Interactivism pattern: each case study spans the full container width as an
     * alternating two-panel row — one side is a solid accent-tinted block,
     * the other holds the content. Rows stack with a border-t divider.
     * No image placeholders — the color block IS the visual anchor.
     * Blink UX tokens: bg-elevated section, accent metric, radius-md block.
     */
    <section
      ref={ref}
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20 pt-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)] mb-5 fade-up"
              data-visible={dataVisible}
            >
              SELECTED WORK
            </p>
            <h2
              className={cn(
                'text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]',
                'text-[var(--color-text-primary)] fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: '60ms' }}
            >
              Work that closes<br />
              <span className="text-[var(--color-accent-text)]">enterprise deals.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="font-bold text-[13px] text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 flex-shrink-0 ml-8 pb-1 fade-up"
            data-visible={dataVisible}
            style={{ transitionDelay: '80ms' }}
          >
            View all →
          </Link>
        </div>

      </div>

      {/* Interactivism: full-width alternating rows — no container padding so color
          block bleeds to the section edge on desktop */}
      <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {PROJECTS.map((project, i) => (
          <article
            key={i}
            className={cn(
              'grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-[320px] fade-up',
              project.colorBlock === 'right' && 'lg:grid-cols-[3fr_2fr]'
            )}
            data-visible={dataVisible}
            style={{ transitionDelay: `${80 + i * 100}ms` }}
          >
            {/* Color block — Interactivism's visual anchor (accent-subtle bg) */}
            <div
              className={cn(
                'bg-[var(--color-accent-subtle)] min-h-[180px] lg:min-h-0',
                project.colorBlock === 'right' && 'lg:order-2'
              )}
              aria-hidden="true"
            />

            {/* Content panel */}
            <div
              className={cn(
                'px-6 lg:px-12 py-10 flex flex-col justify-center space-y-5',
                'max-w-[var(--container-max)] mx-auto w-full',
                project.colorBlock === 'right' && 'lg:order-1'
              )}
            >
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-accent-text)]">
                {project.eyebrow}
              </p>

              <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--color-text-primary)]">
                {project.title}
              </h3>

              <p className="text-[15px] text-[var(--color-text-secondary)] leading-[1.6] max-w-[480px]">
                {project.description}
              </p>

              {/* Large metric — kept from previous implementation */}
              <div className="flex items-baseline gap-3">
                <span className="text-[3rem] font-bold text-[var(--color-accent)] leading-none tracking-[-0.03em]">
                  {project.metric}
                </span>
                <span className="text-[14px] text-[var(--color-text-secondary)]">
                  {project.metricLabel}
                </span>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
