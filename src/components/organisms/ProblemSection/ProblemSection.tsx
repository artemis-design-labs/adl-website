'use client';

import { cn } from '@/lib/cn';
import { useFadeInOnView } from '@/hooks/useFadeInOnView';

const SERVICES = [
  {
    num: '01',
    title: 'Build',
    description:
      'We work with product teams to architect, build and deliver a series of UI solutions that are part of a larger infrastructure which the team takes complete ownership of. These include, but are not limited to:',
    deliverables: [
      'Initial UI audits of existing systems with a written drift score',
      'Tokenized component library',
      'Governed Design-to-Code Pipeline',
      'Automated drift detection systems to catch UI violations',
    ],
    terms: 'Fixed scope. Fixed price. $15K–$25K.',
    link: "See what's included",
    href: '/services#build',
  },
  {
    num: '02',
    title: 'Operate',
    description:
      'We work alongside your team to continuously operate and govern your UI infrastructure — ensuring your design system stays consistent, scalable, and drift-free as your product and team grow. These include, but are not limited to:',
    deliverables: [
      'Continuous drift monitoring and violation detection',
      'Governed component delivery for new product requirements',
      'Governance enforcement on all UI-related pull requests',
      'Token management and design system maintenance',
      'Monthly infrastructure health reports',
      'New engineer onboarding support to ship from day one',
    ],
    terms: 'Starting at $4K/mo. No long-term contract required.',
    link: 'Learn how it works',
    href: '/services#operate',
  },
];

export function ProblemSection() {
  const { ref, dataVisible } = useFadeInOnView(0.05);

  return (
    /*
     * Blink UX / Interactivism — Services Section pattern.
     * Editorial 2-column, type-forward, no cards. Vertical 1px rule
     * separates tracks. Thin horizontal rules separate sub-blocks
     * within each column. Arrow-prefixed (→) deliverables and
     * arrow-prefixed text-link CTAs. Header uses 60/40 asymmetric
     * split to match Interactivism convention.
     */
    <section
      ref={ref}
      id="services"
      className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] py-24 md:py-32"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        {/* Section header — Interactivism 60/40 asymmetric, left-aligned */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <p
              className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-6 fade-up"
              data-visible={dataVisible}
            >
              <span aria-hidden="true">›&nbsp;</span>
              two tracks. one mission.
            </p>
            <h2
              className={cn(
                'text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05]',
                'tracking-[-0.025em] text-[var(--color-text-primary)] fade-up'
              )}
              data-visible={dataVisible}
              style={{ transitionDelay: '60ms' }}
            >
              The infrastructure that<br />
              <span className="text-[var(--color-accent-text)]">scales with you.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p
              className="text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7] fade-up"
              data-visible={dataVisible}
              style={{ transitionDelay: '140ms' }}
            >
              One operational outcome. Two ownership models. Choose the track that fits
              how much of UI infrastructure you want to own internally — versus outsource
              entirely.
            </p>
          </div>
        </header>

        {/* Horizontal rule below header */}
        <div
          className="mt-16 md:mt-20 h-px bg-[var(--color-border)] fade-up"
          data-visible={dataVisible}
          style={{ transitionDelay: '220ms' }}
          aria-hidden="true"
        />

        {/* Two-track editorial grid — no cards, vertical 1px rule between */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0">
          <ServiceColumn
            svc={SERVICES[0]}
            dataVisible={dataVisible}
            delay={300}
            side="left"
          />

          {/* Vertical rule */}
          <div
            className="hidden lg:block w-px bg-[var(--color-border)] self-stretch"
            aria-hidden="true"
          />

          <ServiceColumn
            svc={SERVICES[1]}
            dataVisible={dataVisible}
            delay={420}
            side="right"
          />
        </div>

      </div>
    </section>
  );
}

type Service = (typeof SERVICES)[number];

function ServiceColumn({
  svc,
  dataVisible,
  delay,
  side,
}: {
  svc: Service;
  dataVisible: string;
  delay: number;
  side: 'left' | 'right';
}) {
  return (
    <div
      className={cn(
        'flex flex-col fade-up',
        side === 'left' ? 'lg:pr-12 xl:pr-16' : 'lg:pl-12 xl:pl-16'
      )}
      data-visible={dataVisible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Eyebrow — Interactivism numbered convention */}
      <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent-text)]">
        {svc.num} <span className="text-[var(--color-text-tertiary)] mx-1">/</span> {svc.title} Track
      </p>

      {/* Title — large editorial */}
      <h3
        className={cn(
          'mt-6 text-[clamp(1.75rem,3.2vw,2.5rem)] font-light',
          'leading-[1.1] tracking-[-0.025em]',
          'text-[var(--color-text-primary)]'
        )}
      >
        {svc.title}
      </h3>

      {/* Description */}
      <p className="mt-6 text-[16px] md:text-[17px] text-[var(--color-text-secondary)] leading-[1.7]">
        {svc.description}
      </p>

      {/* Divider */}
      <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* What's included */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-5">
          What&rsquo;s included
        </p>
        <ul className="space-y-3.5">
          {svc.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-4">
              <span
                className="font-[var(--font-mono)] text-[var(--color-accent-text)] leading-[1.6] mt-px flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <span className="text-[16px] text-[var(--color-text-secondary)] leading-[1.6]">
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="mt-10 h-px bg-[var(--color-border)]" aria-hidden="true" />

      {/* Terms */}
      <div className="mt-8">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-4">
          Terms
        </p>
        <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-text-secondary)] leading-[1.7]">
          {svc.terms}
        </p>
      </div>

      {/* CTA — arrow-prefixed text link (Interactivism) */}
      <div className="mt-12 flex-grow flex items-end">
        <a
          href={svc.href}
          className={cn(
            'group inline-flex items-center gap-3',
            'text-[18px] md:text-[19px] font-medium',
            'text-[var(--color-text-primary)] hover:text-[var(--color-accent-text)]',
            'transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-primary)] rounded-sm'
          )}
        >
          <span
            className="text-[var(--color-accent-text)] transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
          {svc.link}
        </a>
      </div>
    </div>
  );
}
