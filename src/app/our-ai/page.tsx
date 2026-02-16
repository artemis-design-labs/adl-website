'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function OurAIPage() {
  const humanVsAI = [
    {
      human: 'Understanding your product vision and business context',
      ai: 'Converting design files to production-ready code',
    },
    {
      human: 'Strategic decisions about component architecture',
      ai: 'Generating consistent, error-free implementations',
    },
    {
      human: 'Quality review and edge case identification',
      ai: 'Handling repetitive patterns across your codebase',
    },
    {
      human: 'Team training and governance setup',
      ai: 'Documentation generation and maintenance',
    },
    {
      human: 'Adapting to your unique constraints and requirements',
      ai: 'State coverage (loading, error, empty, permission-denied)',
    },
  ];

  const technologyStack = [
    {
      title: 'Custom Training Data',
      stat: '190,000+',
      description: 'Labeled design-to-code examples from real production codebases. Not tutorials or demos.',
    },
    {
      title: 'Continuous Learning',
      stat: 'Every Project',
      description: 'Our AI improves with every engagement. Your project benefits from hundreds of successful deliveries.',
    },
    {
      title: 'Framework Agnostic',
      stat: '6+ Frameworks',
      description: 'React, Vue, Angular, Svelte, and more. We match your stack, your conventions, your standards.',
    },
    {
      title: 'Code Quality',
      stat: '94%',
      description: 'First-PR approval rate. Code that passes review because it was trained on production standards.',
    },
  ];

  const comparisonData = [
    { feature: 'Design-to-code accuracy', traditional: 'Manual translation', adl: 'AI-assisted precision' },
    { feature: 'Delivery timeline', traditional: '3-4 months', adl: '3-4 weeks' },
    { feature: 'State coverage', traditional: 'Happy path only', adl: 'All 5 states included' },
    { feature: 'Documentation', traditional: 'Separate deliverable', adl: 'Auto-generated with code' },
    { feature: 'Consistency', traditional: 'Varies by developer', adl: 'AI-enforced standards' },
    { feature: 'Maintenance', traditional: 'Manual updates', adl: 'AI-powered drift detection' },
    { feature: 'Accessibility', traditional: 'Often an afterthought', adl: 'Baked in from day one' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Our AI
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              We Didn't Bolt AI Onto an Existing Workflow.<br />
              We Built From Scratch.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Most "AI-powered" design tools generate code nobody wants to deploy. We built something different: proprietary tools trained on 190,000+ labeled examples from real production codebases.
            </p>
          </div>
        </div>
      </section>

      {/* Human vs AI Roles */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              The Partnership
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
              Human Expertise Meets AI Precision
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              We don't replace human expertise with AI. We amplify it. Here's how the work divides.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {/* Headers */}
            <div className="bg-[var(--color-bg-primary)] p-4 lg:p-6">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] font-medium">
                What Humans Handle
              </h3>
            </div>
            <div className="bg-[var(--color-bg-primary)] p-4 lg:p-6">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] font-medium">
                What AI Handles
              </h3>
            </div>

            {/* Rows */}
            {humanVsAI.map((row, index) => (
              <>
                <div key={`human-${index}`} className="bg-[var(--color-bg-elevated)] p-4 lg:p-6">
                  <p className="text-sm text-[var(--color-text-primary)]">{row.human}</p>
                </div>
                <div key={`ai-${index}`} className="bg-[var(--color-bg-elevated)] p-4 lg:p-6">
                  <p className="text-sm text-[var(--color-text-secondary)]">{row.ai}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              The Technology
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
              Trained on Production,<br />Not Tutorials
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our AI wasn't trained on open-source examples or tutorial code. It learned from real production systems at scale.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {technologyStack.map((item, index) => (
              <article key={index} className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
                <span className="text-3xl lg:text-4xl font-medium text-[var(--color-text-primary)] block mb-2">
                  {item.stat}
                </span>
                <h3 className="text-sm font-medium text-[var(--color-text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              The Difference
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
              Traditional Agencies vs. ADL
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              See how our AI-powered approach compares to traditional design agency workflows.
            </p>
          </header>

          <div className="overflow-x-auto">
            <table className="w-full border border-[var(--color-border)]">
              <thead>
                <tr className="bg-[var(--color-bg-primary)]">
                  <th className="text-left p-4 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">
                    Feature
                  </th>
                  <th className="text-left p-4 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] font-medium border-b border-[var(--color-border)]">
                    Traditional Agency
                  </th>
                  <th className="text-left p-4 text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] font-medium border-b border-[var(--color-border)]">
                    Artemis Design Labs
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="bg-[var(--color-bg-elevated)]">
                    <td className="p-4 text-sm text-[var(--color-text-primary)] border-b border-[var(--color-border)]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-sm text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
                      {row.traditional}
                    </td>
                    <td className="p-4 text-sm text-[var(--color-text-primary)] font-medium border-b border-[var(--color-border)]">
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
      <section className="py-20 md:py-28 bg-[var(--color-text-primary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <header className="mb-10">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Get Started
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-bg-primary)] mb-6">
              See Our AI in Action
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Book a call to see how our AI-powered workflow can accelerate your design-to-code delivery.
            </p>
          </header>
          <Link
            href="/contact"
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-8 py-4',
              'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-colors duration-150'
            )}
          >
            Book a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
