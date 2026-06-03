import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Our AI',
  description:
    "We didn't bolt AI onto a workflow. We built it from scratch — trained on 190,000+ production design-to-code examples, validated by senior engineers.",
};

const HUMAN_VS_AI = [
  {
    human: 'Understanding your product vision and business context.',
    ai: 'Converting design files to production-ready code.',
  },
  {
    human: 'Strategic decisions about component architecture.',
    ai: 'Generating consistent, error-free implementations.',
  },
  {
    human: 'Quality review and edge case identification.',
    ai: 'Handling repetitive patterns across your codebase.',
  },
  {
    human: 'Team training and governance setup.',
    ai: 'Documentation generation and maintenance.',
  },
  {
    human: 'Adapting to your unique constraints and requirements.',
    ai: 'State coverage — loading, error, empty, partial, denied.',
  },
];

const TECH_STATS = [
  {
    title: 'Custom training data',
    stat: '190K+',
    description: 'Labeled design-to-code pairs from real production codebases. Not tutorials, not demos.',
  },
  {
    title: 'Continuous learning',
    stat: 'Every project',
    description: 'Each engagement improves the models. Your project inherits everything we\'ve shipped before.',
  },
  {
    title: 'Framework agnostic',
    stat: '6+ frameworks',
    description: 'React, Vue, Angular, Svelte and more. We match your stack, your conventions, your standards.',
  },
  {
    title: 'First-PR approval',
    stat: '94%',
    description: 'Code that passes senior review because it was trained on production standards, not happy-path samples.',
  },
];

const COMPARISON = [
  { feature: 'Design-to-code accuracy', traditional: 'Manual translation',    adl: 'AI-assisted precision' },
  { feature: 'Delivery timeline',       traditional: '3-4 months',            adl: '3-4 weeks' },
  { feature: 'State coverage',          traditional: 'Happy path only',       adl: 'All 5 states included' },
  { feature: 'Documentation',           traditional: 'Separate deliverable',  adl: 'Auto-generated with code' },
  { feature: 'Consistency',             traditional: 'Varies by developer',   adl: 'AI-enforced standards' },
  { feature: 'Maintenance',             traditional: 'Manual updates',        adl: 'AI-powered drift detection' },
  { feature: 'Accessibility',           traditional: 'Often an afterthought', adl: 'WCAG baked in from day one' },
];

export default function OurAIPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[55vh] pointer-events-none opacity-70"
          style={{ background: 'var(--gradient-subtle)' }}
        />
        <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-5">
              › ./adl --tech-stack
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              We didn&apos;t bolt AI
              <br />
              onto a workflow.
              <br />
              <span className="text-[var(--color-accent)]">We built it from scratch.</span>
            </h1>
            <p className="mt-7 text-base md:text-lg lg:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Most &ldquo;AI-powered&rdquo; design tools generate code nobody wants to deploy. We built something different: proprietary models trained on 190,000+ labeled design-to-code pairs from real production codebases, validated by senior engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › the partnership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Human expertise
              <br />
              <span className="text-[var(--color-accent)]">× AI precision.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We don&apos;t replace human expertise with AI — we amplify it. The work divides cleanly.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Humans column */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--color-border)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/40">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  what humans handle
                </h3>
              </div>
              <ul className="space-y-4">
                {HUMAN_VS_AI.map((row, i) => (
                  <li key={i} className="text-base md:text-lg text-[var(--color-text-primary)] leading-relaxed">
                    {row.human}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI column */}
            <div className="p-6 lg:p-8 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[var(--color-border)]">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/40">
                  <svg className="w-4 h-4 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
                  </svg>
                </span>
                <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  what ai handles
                </h3>
              </div>
              <ul className="space-y-4">
                {HUMAN_VS_AI.map((row, i) => (
                  <li key={i} className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                    {row.ai}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
        <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
          <header className="max-w-3xl mb-14 md:mb-16">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › the technology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Trained on production,
              <br />
              <span className="text-[var(--color-accent)]">not tutorials.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Open-source samples and tutorial code don&apos;t reflect how your team actually works. Our models learned from real production systems at scale.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_STATS.map((item) => (
              <article
                key={item.title}
                className="p-6 lg:p-7 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] text-[var(--color-accent)] mb-4">
                  {item.stat}
                </div>
                <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <header className="max-w-3xl mb-12">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)] mb-4">
              › the difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1]">
              Traditional agencies
              <br />
              <span className="text-[var(--color-accent)]">vs. ADL.</span>
            </h2>
          </header>

          <div className="overflow-x-auto -mx-6 lg:mx-0 px-6 lg:px-0">
            <table className="w-full border-separate border-spacing-y-2 min-w-[640px]">
              <thead>
                <tr>
                  <th className="text-left font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] pb-3 px-5">feature</th>
                  <th className="text-left font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] pb-3 px-5">traditional agency</th>
                  <th className="text-left font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] pb-3 px-5">artemis design labs</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="bg-[var(--color-bg-elevated)]">
                    <td className={cn('px-5 py-4 text-base md:text-lg align-middle rounded-l-lg border border-r-0 border-[var(--color-border)] text-[var(--color-text-primary)] font-medium')}>
                      {row.feature}
                    </td>
                    <td className={cn('px-5 py-4 text-base align-middle border-t border-b border-[var(--color-border)] text-[var(--color-text-secondary)]')}>
                      {row.traditional}
                    </td>
                    <td className={cn('px-5 py-4 text-base align-middle rounded-r-lg border border-l-0 border-[var(--color-border)] text-[var(--color-accent)] font-medium')}>
                      {row.adl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            › see it in action
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.1] mb-6">
            Want to watch the AI
            <br />
            <span className="text-[var(--color-accent)]">work on your own files?</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
            Send us your Figma files. Within 48 hours, our AI audits the design system and identifies the gaps. You keep the audit either way.
          </p>
          <Link
            href="/contact?type=audit"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-medium text-base hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)] active:translate-y-px transition-all duration-150"
          >
            Get a Free AI Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
