'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

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
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            Case Study
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
            From scattered to systematic
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-xl mx-auto">
            See how we help teams transform their design-to-development workflow.
          </p>
        </div>

        {/* Case study card - Geometric, minimal */}
        <div className="border border-[var(--color-border)]">
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--color-text-muted)]">
              {featuredCaseStudy.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mt-2">
              {featuredCaseStudy.title}
            </h3>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <p className="text-base text-[var(--color-text-secondary)] mb-8 max-w-2xl">
              {featuredCaseStudy.description}
            </p>

            {/* Metrics - Inline grid */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-10">
              {featuredCaseStudy.metrics.map((metric, index) => (
                <div key={index} className="bg-[var(--color-bg-elevated)] p-4 text-center">
                  <div className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Before */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
                  Before
                </h4>
                <ul className="space-y-2">
                  {featuredCaseStudy.before.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="text-[var(--color-text-muted)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-4">
                  After
                </h4>
                <ul className="space-y-2">
                  {featuredCaseStudy.after.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="text-[var(--color-accent)]">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href={featuredCaseStudy.href}>
                <Button>View All Case Studies</Button>
              </Link>
              <Link href="/contact">
                <Button variant="link">Discuss Your Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
