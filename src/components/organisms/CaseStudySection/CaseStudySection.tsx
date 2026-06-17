'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const PROJECTS = [
  {
    category: 'Healthcare SaaS · Design System Build',
    title: 'HANDS AI — Production Design System',
    href: '/work/hands-ai',
  },
  {
    category: 'Enterprise Media · Component Library',
    title: 'NBCU — Unified Component Architecture',
    href: '/work/nbcu',
  },
  {
    category: 'Industrial B2B · Token Architecture',
    title: 'Qualitrol — Design Token System',
    href: '/work',
  },
];

export function CaseStudySection() {
  const { ref, dataVisible } = useFadeInOnView(0.05);

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-baseline justify-between mb-12">
          <h2
            className={cn(
              'text-[2rem] font-semibold leading-[1.2]',
              'tracking-[-0.01em] text-[var(--color-text-primary)] fade-up'
            )}
            data-visible={dataVisible}
          >
            Selected Work
          </h2>
          <Link
            href="/work"
            className="font-semibold text-[14px] text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 fade-up"
            data-visible={dataVisible}
            style={{ transitionDelay: '80ms' }}
          >
            View all →
          </Link>
        </div>

        {/* 3-up cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className={cn(
                'bg-[var(--color-bg-secondary)] rounded-[var(--radius-md)] overflow-hidden',
                'border border-[var(--color-border)]',
                'shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
                'hover:border-[var(--color-accent)] transition-all duration-200 group',
                'fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              {/* Accent top bar — key Creative Navy detail */}
              <div className="h-[3px] w-full bg-[var(--color-accent)]" aria-hidden="true" />

              {/* Image placeholder */}
              <div className="h-[200px] bg-[var(--color-bg-tertiary)] border-b border-[var(--color-border)]" />

              {/* Card body */}
              <div className="p-5">
                <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent-text)] mb-2">
                  {project.category}
                </p>
                <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] leading-[1.3] mb-5">
                  {project.title}
                </h3>
                <Link
                  href={project.href}
                  className="font-semibold text-[13px] text-[var(--color-accent-text)] hover:text-[var(--color-accent-hover)] transition-colors duration-150"
                >
                  View project →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
