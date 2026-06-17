import Link from 'next/link';
import type { Metadata } from 'next';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Fixed pricing based on scope. Every engagement ships Figma AND production-ready React. No surprises.',
};

const TIERS = [
  {
    id: 'creation',
    title: 'Design System Creation',
    tagline: 'From zero to a real foundation.',
    price: '$15,000 – $25,000',
    priceNote: 'one-time',
    timeline: '3-4 weeks',
    features: [
      '25+ components in Figma AND your framework (React, Angular, Vue)',
      'Design tokens that sync across the entire product',
      'Full state coverage: loading · error · empty · partial · denied',
      'Storybook documentation built for engineers',
      'WCAG 2.1 AA accessibility baked in from day one',
      '30-day post-delivery support',
    ],
    bestFor: 'Founders with no design system, or fragments nobody trusts.',
    popular: true,
    ctaLabel: 'Start the project',
  },
  {
    id: 'maintenance',
    title: 'Design System Maintenance',
    tagline: 'Keep it alive, keep it aligned.',
    price: '$4,000 – $6,000',
    priceNote: '/ month · 6-month minimum',
    timeline: 'ongoing',
    features: [
      'Up to 5 new components/month — Figma + code together',
      'AI-powered drift detection between Figma and your codebase',
      'Monthly health reports your leadership team can read',
      'Office hours for your designers and engineers',
      'Governance support — scales from 5 to 500 people',
      'Priority response when something breaks before a demo',
    ],
    bestFor: 'Companies whose system is drifting or whose adoption is stalling.',
    popular: false,
    ctaLabel: 'Talk about a retainer',
  },
  {
    id: 'handoff',
    title: 'Design-to-Code Handoff',
    tagline: 'Your designers did the work. Our AI finishes it.',
    price: '$8,000 – $15,000',
    priceNote: 'one-time',
    timeline: '2-3 weeks',
    features: [
      'Production-ready components in TypeScript + Tailwind',
      'Full state coverage beyond the happy path',
      'Performance optimization — virtualization for 10K+ rows',
      'Storybook docs your team can onboard with immediately',
      'PR-ready: code that passes review on the first submission',
      'Framework-agnostic: React, Angular, Vue — your call',
    ],
    bestFor: 'Teams with Figma ready but no frontend bandwidth to ship it.',
    popular: false,
    ctaLabel: 'Convert your designs',
  },
];

const COMPARISON = [
  { option: 'Premium Agency (Clay, Ramotion)', price: '$50K+',         delivery: 'Figma only. No code. No states.' },
  { option: 'Budget Shop',                     price: '$10-15K',       delivery: 'Figma only. You fix the inconsistencies.' },
  { option: 'Figma-to-Code Tools (Anima, Locofy)', price: '$0-500/mo', delivery: '70% solution. Your engineers fix the rest.' },
  { option: 'In-House Design Systems Engineer', price: '$180K+/year',  delivery: 'One person. Slower than a focused engagement.' },
  { option: 'Artemis Design Labs',             price: '$15-25K',       delivery: 'Figma + React + 5 states + virtualization + docs', highlight: true },
];

const FAQS = [
  {
    q: 'Why not hire in-house?',
    a: "A full-time designer is $120K+/year and usually can't write React. A full-time design-systems engineer is $180K+. We deliver a complete system in 3-4 weeks. After that, your team can maintain it in-house or roll into a maintenance retainer with us — your call.",
  },
  {
    q: 'What determines where I fall in the price range?',
    a: 'Component count, state complexity, integration requirements. A marketing dashboard with 20 components lands low. An admin panel with data tables, permissions UI, and custom visualizations lands high. We scope it precisely after the discovery call so the proposal you sign is the proposal you pay.',
  },
  {
    q: 'Do you offer discounts?',
    a: "Pricing is set against the scope and the velocity we save you. We don't discount the price, but we do offer flexible payment terms for multi-month engagements.",
  },
  {
    q: 'What if we need something not listed?',
    a: "We're flexible. If you need a one-off audit, a workshop for your team, accessibility remediation on an existing system, or integration support, let's talk. We'll scope something custom.",
  },
  {
    q: "What's included in the 30-day support?",
    a: 'Bug fixes, minor adjustments, implementation Q&A. Major new components or scope additions are quoted separately, or covered by a maintenance retainer.',
  },
];

export default function PricingPage() {
  return (
    <>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[50vh] pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              Fixed pricing.
              <br />
              <span className="text-[var(--color-accent)]">No &ldquo;scope creep&rdquo; emails.</span>
            </h1>
            <p className="mt-7 text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Every engagement ships Figma AND production-ready React. The proposal you sign is the proposal you pay.
            </p>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-14 md:mb-16 max-w-2xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › three places to start
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Pick the engagement
              <br />
              <span className="text-[var(--color-accent)]">that matches your stage.</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {TIERS.map((tier) => (
              <article
                key={tier.id}
                className={cn(
                  'relative flex flex-col p-7 lg:p-8 rounded-2xl',
                  'bg-[var(--color-bg-elevated)] border',
                  tier.popular
                    ? 'border-[var(--color-accent)] shadow-[var(--shadow-glow)]'
                    : 'border-[var(--color-border)]'
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    Most popular
                  </span>
                )}

                <div className="mb-5">
                  <h3 className="text-xl lg:text-2xl font-semibold tracking-[-0.01em] text-[var(--color-text-primary)] mb-2">
                    {tier.title}
                  </h3>
                  <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    {tier.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline flex-wrap gap-x-2">
                    <span className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
                      {tier.price}
                    </span>
                    <span className="text-sm text-[var(--color-text-tertiary)]">{tier.priceNote}</span>
                  </div>
                  <p className="mt-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
                    timeline · {tier.timeline}
                  </p>
                </div>

                <ul className="space-y-3 mb-7 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 mb-6 border-t border-[var(--color-border)]">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2">
                    best for
                  </p>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {tier.bestFor}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 w-full h-12 rounded-md font-medium text-base transition-all duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-elevated)]',
                    tier.popular
                      ? 'bg-[var(--color-accent)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] active:translate-y-px'
                      : 'border border-[var(--color-border-strong)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-accent)]'
                  )}
                >
                  {tier.ctaLabel}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <header className="max-w-2xl mb-12">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › how we stack up
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Below premium agencies.
              <br />
              <span className="text-[var(--color-accent)]">Above the budget shops.</span>
            </h2>
            <p className="mt-5 text-base md:text-lg text-[var(--color-text-secondary)]">
              The same conversation founders have when they ask &ldquo;should I just hire an agency?&rdquo;
            </p>
          </header>

          <div className="overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0">
            <table className="w-full text-left border-separate border-spacing-y-2 min-w-[640px]">
              <thead>
                <tr>
                  <th className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] pb-4 px-5">option</th>
                  <th className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] pb-4 px-5">price</th>
                  <th className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] pb-4 px-5">what you get</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr
                    key={row.option}
                    className={cn(
                      'transition-colors',
                      row.highlight
                        ? 'bg-[var(--color-accent-subtle)]'
                        : 'bg-[var(--color-bg-elevated)]'
                    )}
                  >
                    <td
                      className={cn(
                        'rounded-l-lg px-5 py-5 text-base align-middle border-l',
                        row.highlight
                          ? 'font-semibold text-[var(--color-text-primary)] border-[var(--color-accent)]'
                          : 'text-[var(--color-text-primary)] border-[var(--color-border)]'
                      )}
                    >
                      {row.option}
                    </td>
                    <td
                      className={cn(
                        'px-5 py-5 text-base align-middle border-t border-b',
                        row.highlight
                          ? 'font-semibold text-[var(--color-accent)] border-[var(--color-accent)]'
                          : 'text-[var(--color-text-secondary)] border-[var(--color-border)]'
                      )}
                    >
                      {row.price}
                    </td>
                    <td
                      className={cn(
                        'rounded-r-lg px-5 py-4 text-sm md:text-base align-middle border-r',
                        row.highlight
                          ? 'text-[var(--color-text-primary)] border-[var(--color-accent)]'
                          : 'text-[var(--color-text-secondary)] border-[var(--color-border)]'
                      )}
                    >
                      {row.delivery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-12 md:mb-14">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › faq
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              The questions founders actually ask.
            </h2>
          </header>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group p-6 lg:p-7 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] open:border-[var(--color-accent)] transition-colors"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <h3 className="text-[length:var(--text-body-lg)] font-medium text-[var(--color-text-primary)] leading-snug">
                    {faq.q}
                  </h3>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border border-[var(--color-border)] group-open:bg-[var(--color-accent)] group-open:border-[var(--color-accent)] group-open:text-[var(--color-text-on-accent)] text-[var(--color-text-tertiary)] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" className="group-open:hidden" />
                      <polyline points="18 15 12 9 6 15" className="hidden group-open:block" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-[length:var(--text-body)] text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-[var(--color-bg-primary)] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1/2 h-[120%] pointer-events-none opacity-50"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
            › ready for a custom quote
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1] mb-6">
            Every project is scoped
            <br />
            <span className="text-[var(--color-accent)]">to what you&apos;re actually building.</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            Tell us where you are, where you&apos;re trying to go, and we&apos;ll send back a proposal you can sign as-is.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-medium text-base hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] active:translate-y-px transition-all duration-150"
          >
            Get Your Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </>
  );
}
