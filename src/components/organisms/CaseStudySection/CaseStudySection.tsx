'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

const CONTENT = {
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
  const content = CONTENT;
  const caseStudy = content.caseStudy;

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
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

            <div className="mb-10 p-6 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg">
              <blockquote className="text-base text-[var(--color-text-primary)] leading-relaxed mb-4">
                &ldquo;{CONTENT.quote.text}&rdquo;
              </blockquote>
              <div className="text-sm">
                <span className="text-[var(--color-text-secondary)]">{CONTENT.quote.author}</span>
                <span className="text-[var(--color-text-secondary)]"> — {CONTENT.quote.company}</span>
              </div>
            </div>

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
