'use client';

import { SectionHeader } from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/cn';

const metrics = [
  {
    value: '40%',
    label: 'Faster design-to-code',
    description: 'Average velocity improvement for teams',
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
    avatar: null,
  },
  {
    quote: "Before ADL, every new engineer spent their first two weeks figuring out our component mess. Now they're shipping features on day one. That's not an exaggeration.",
    author: 'VP of Engineering',
    company: 'Series A Fintech',
    avatar: null,
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-medium text-[var(--color-text-primary)] mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[var(--color-border)] mb-20" />

        {/* Testimonials */}
        <SectionHeader
          eyebrow="What Teams Say"
          title="Trusted by product teams building for enterprise"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'p-8 rounded-2xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]'
              )}
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-[var(--color-accent)] opacity-50 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-lg text-[var(--color-text-primary)] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent-subtle)] flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-[var(--color-text-primary)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos placeholder */}
        <div className="mt-16 pt-12 border-t border-[var(--color-border)]">
          <p className="text-center text-sm text-[var(--color-text-muted)] mb-8">
            Helping teams at companies you&apos;d recognize
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 rounded bg-[var(--color-text-muted)]/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
