'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  eyebrow: 'Case Study',
  headline: 'From scattered to systematic',
  description: 'See how we help teams transform their design-to-development workflow.',
  caseStudy: {
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
  },
  primaryCta: { label: 'View All Case Studies', href: '/work' },
  secondaryCta: { label: 'Discuss Your Project', href: '/contact' },
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: 'What It Looks Like When It Works',
  headline: "Here's What Three Weeks Actually Gets You",
  description: "Not a pitch. Not a promise. An actual engagement we shipped.",
  caseStudy: {
    title: 'HANDS AI',
    category: 'Series B Healthcare SaaS',
    description: "They'd spent $40K on an agency that delivered Figma files their engineers couldn't implement. Three months later, they still didn't have a usable design system. We shipped one in three weeks — Figma, React, and documentation their engineers actually use.",
    metrics: [
      { value: '3 weeks', label: 'Full delivery' },
      { value: '47', label: 'Production-ready components' },
      { value: '$40K', label: 'Already burned on agency' },
    ],
    before: [
      'Figma files that didn\'t match production',
      'Engineers rebuilding every component from scratch',
      'Enterprise deals stalling on "polish" feedback',
      'Accessibility gaps flagged in every demo',
    ],
    after: [
      '47 components in Figma AND React — fully synced',
      'Engineers shipping features instead of translating designs',
      'Enterprise deals closing without UI objections',
      'WCAG 2.1 AA compliant, audit-ready',
    ],
  },
  quote: {
    text: "What sold us wasn't just the speed — it was that their AI actually produced code our engineers approved. First PR passed review. That had never happened with any other vendor.",
    author: 'CTO',
    company: 'HANDS AI',
  },
  primaryCta: { label: 'See More Work', href: '/work' },
  secondaryCta: { label: "Let's Talk About Yours", href: '/contact' },
};

export function CaseStudySection() {
  const version = useSectionVersion('work-caseStudies');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;
  const caseStudy = content.caseStudy;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)] relative">
      {/* Version indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1' : 'V2'}
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
            {content.headline}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Case study card - Geometric, minimal */}
        <div className="border border-[var(--color-border)]">
          {/* Header */}
          <div className="p-8 md:p-10 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <span className="text-sm tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              {caseStudy.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mt-2">
              {caseStudy.title}
            </h3>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <p className="text-base text-[var(--color-text-secondary)] mb-8 max-w-2xl">
              {caseStudy.description}
            </p>

            {/* Metrics - Inline grid */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-10">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="bg-[var(--color-bg-elevated)] p-4 text-center">
                  <div className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Before */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)] mb-4">
                  Before
                </h4>
                <ul className="space-y-2">
                  {caseStudy.before.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="text-[var(--color-text-secondary)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div>
                <h4 className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)] mb-4">
                  After
                </h4>
                <ul className="space-y-2">
                  {caseStudy.after.map((item, index) => (
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

            {/* V2 Quote */}
            {version === 'v2' && (
              <div className="mb-10 p-6 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                <blockquote className="text-base text-[var(--color-text-primary)] leading-relaxed mb-4">
                  &ldquo;{V2_CONTENT.quote.text}&rdquo;
                </blockquote>
                <div className="text-sm">
                  <span className="text-[var(--color-text-secondary)]">{V2_CONTENT.quote.author}</span>
                  <span className="text-[var(--color-text-secondary)]"> — {V2_CONTENT.quote.company}</span>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href={content.primaryCta.href}>
                <Button>{content.primaryCta.label}</Button>
              </Link>
              <Link href={content.secondaryCta.href}>
                <Button variant="link">{content.secondaryCta.label}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
