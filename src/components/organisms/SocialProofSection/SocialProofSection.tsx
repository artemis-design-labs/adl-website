'use client';

import { cn } from '@/lib/cn';

const metrics = [
  {
    value: '40%',
    label: 'Faster design-to-code',
    description: 'Average velocity improvement',
  },
  {
    value: '25+',
    label: 'Components per system',
    description: 'Production-ready with full states',
  },
  {
    value: '2x',
    label: 'Faster onboarding',
    description: 'New engineers ship on day one',
  },
  {
    value: '100%',
    label: 'Code coverage',
    description: 'Every design ships with React',
  },
];

const testimonials = [
  {
    quote: "ADL transformed how our team ships UI. We went from weeks of back-and-forth to same-day implementation. The design system they built is actually used by everyone—not just sitting in a Figma file.",
    author: 'Engineering Lead',
    company: 'Series B Healthcare Startup',
  },
  {
    quote: "Before ADL, every new engineer spent their first two weeks figuring out our component mess. Now they're shipping features on day one. That's not an exaggeration.",
    author: 'VP of Engineering',
    company: 'Series A Fintech',
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Metrics - Table-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[var(--color-border)]">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={cn(
                'p-6 text-center',
                'border-[var(--color-border)]',
                index < 2 && 'border-b md:border-b-0',
                index % 2 === 0 && 'border-r',
                index < 2 && 'md:border-r'
              )}
            >
              <div className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mb-1">
                {metric.value}
              </div>
              <div className="text-xs tracking-[0.08em] uppercase text-[var(--color-text-secondary)] mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              What Teams Say
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Trusted by product teams building for enterprise
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[var(--color-bg-elevated)] p-8 md:p-10"
              >
                <blockquote className="text-base md:text-lg text-[var(--color-text-primary)] leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client logos placeholder */}
        <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
          <p className="text-center text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-8">
            Helping teams at companies you&apos;d recognize
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-20 h-6 bg-[var(--color-border)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
