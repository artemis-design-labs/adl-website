'use client';

import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const SERVICES = [
  {
    icon: '⬡',
    title: 'Build Track',
    description:
      'We audit your UI infrastructure, then build a custom AI-powered governance system for the specific problems found — component architecture, drift detection, and a Figma-to-React pipeline your team owns after delivery. Fixed scope. $15K–$25K.',
  },
  {
    icon: '◎',
    title: 'Operate Track',
    description:
      'We take over and run your entire UI infrastructure operation. ADL\'s agentic ecosystem handles drift monitoring, governed component delivery, governance enforcement, and monthly health reports. Your team focuses on shipping. $4K–$15K/mo.',
  },
  {
    icon: '⟠',
    title: 'Agentic Ecosystem',
    description:
      'A master "UI Infrastructure Architect" agent coordinating specialized sub-agents that autonomously govern, maintain, and scale your frontend. It\'s what lets a 15-person startup run UI governance at 500-person company quality.',
  },
  {
    icon: '◈',
    title: 'UI Forge',
    description:
      'Our internal AI engine converts Figma designs into production-ready React — all 5 interaction states, full token integration, governance review before any output touches your codebase. Not 80% complete. Production-ready.',
  },
];

export function ProblemSection() {
  const { ref, dataVisible } = useFadeInOnView(0.08);

  return (
    <section
      ref={ref}
      id="services"
      className="py-16 md:py-20 bg-[var(--color-bg-elevated)]"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8">

        {/* Section header — 50/50 split per Creative Navy pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
          <h2
            className={cn(
              'text-[2rem] font-semibold leading-[1.2]',
              'tracking-[-0.01em] text-[var(--color-text-primary)] fade-up'
            )}
            data-visible={dataVisible}
          >
            Two Tracks. One Mission.
          </h2>
          <p
            className="text-[16px] text-[var(--color-text-secondary)] leading-[1.65] lg:pt-2 fade-up"
            data-visible={dataVisible}
            style={{ transitionDelay: '80ms' }}
          >
            ADL operates on two tracks depending on how much of the UI
            infrastructure function you want to own versus outsource. Both are
            powered by the same proprietary agentic ecosystem — the difference
            is who runs it after delivery.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SERVICES.map((svc, i) => (
            <article
              key={i}
              className={cn(
                'bg-[var(--color-bg-primary)] border border-[var(--color-border)]',
                'rounded-[var(--radius-md)] p-7 lg:p-8',
                'shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]',
                'hover:border-[var(--color-accent)] transition-all duration-200',
                'fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: `${120 + i * 80}ms` }}
            >
              <span
                className="block text-[var(--color-accent-text)] text-[22px] mb-5"
                aria-hidden="true"
              >
                {svc.icon}
              </span>
              <h3 className="text-[18px] font-semibold text-[var(--color-text-primary)] leading-[1.2] mb-3">
                {svc.title}
              </h3>
              <p className="text-[14px] text-[var(--color-text-secondary)] leading-[1.65]">
                {svc.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
