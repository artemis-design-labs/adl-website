'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/cn';

const featuredCaseStudy = {
  title: 'HANDS AI',
  category: 'Healthcare Technology',
  description: 'How we helped a Series B healthcare startup ship their design system in 3 weeks and accelerate their enterprise sales.',
  metrics: [
    { value: '40%', label: 'Faster development velocity' },
    { value: '3 weeks', label: 'To production-ready system' },
    { value: '50+', label: 'Components delivered' },
  ],
  before: [
    'Inconsistent UI across 12 product screens',
    'Engineers rebuilding components from scratch',
    'Enterprise demos failing accessibility audits',
  ],
  after: [
    'Unified design system with full documentation',
    'Reusable component library in Figma + React',
    'WCAG 2.1 AA compliant, audit-ready',
  ],
  href: '/work',
};

export function CaseStudySection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Study"
          title="From scattered to systematic"
          description="See how we help teams transform their design-to-development workflow."
        />

        <div className="mt-16">
          {/* Case study card */}
          <div
            className={cn(
              'rounded-2xl overflow-hidden',
              'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
            )}
          >
            {/* Header with gradient */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-hover)] flex items-center justify-center">
              <div className="text-center text-white">
                <span className="text-sm uppercase tracking-wider opacity-80">
                  {featuredCaseStudy.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mt-2">
                  {featuredCaseStudy.title}
                </h3>
              </div>
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '24px 24px',
                }}
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl">
                {featuredCaseStudy.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-[var(--color-border)]">
                {featuredCaseStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                      {metric.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)] mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-error-muted)] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--color-error)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    Before ADL
                  </h4>
                  <ul className="space-y-3">
                    {featuredCaseStudy.before.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                    <span className="w-8 h-8 rounded-full bg-[var(--color-success-muted)] flex items-center justify-center">
                      <svg className="w-4 h-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    After ADL
                  </h4>
                  <ul className="space-y-3">
                    {featuredCaseStudy.after.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <svg
                          className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Link href={featuredCaseStudy.href}>
                  <Button>
                    View All Case Studies
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
