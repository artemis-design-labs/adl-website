'use client';

import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  metrics: [
    { value: '40%', label: 'Faster design-to-code', description: 'Average velocity improvement' },
    { value: '25+', label: 'Components per system', description: 'Production-ready with full states' },
    { value: '2x', label: 'Faster onboarding', description: 'New engineers ship on day one' },
    { value: '100%', label: 'Code coverage', description: 'Every design ships with React' },
  ],
  testimonialsEyebrow: 'What Teams Say',
  testimonialsHeadline: 'Trusted by product teams building for enterprise',
  testimonials: [
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
  ],
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  metrics: [
    { value: '190K+', label: 'Training images', description: 'Powering our proprietary AI models' },
    { value: '3-4 weeks', label: 'Not 3-4 months', description: 'Average delivery for a full design system' },
    { value: '5 states', label: 'Per component', description: 'Loading, error, empty, partial, permission-denied' },
    { value: '0', label: 'Figma-only deliverables', description: 'Every design ships with production-ready code' },
  ],
  testimonialsEyebrow: "From Founders Who've Been Where You Are",
  testimonialsHeadline: "We don't have clients. We have founders who trust us with their infrastructure.",
  testimonials: [
    {
      quote: "We'd burned $40K on an agency that delivered Figma files our engineers couldn't use. ADL delivered Figma and production-ready React in three weeks — and the code actually passed review. As a founder, I didn't know that was possible.",
      author: 'CTO & Co-founder',
      company: 'Series A Healthcare SaaS',
    },
    {
      quote: "What sold us wasn't the AI pitch — it was that their team had actually built startups before. They understood why we needed this done in three weeks, not three months. The AI just meant they could actually deliver on that timeline.",
      author: 'Founder & CEO',
      company: 'Seed-Stage Fintech',
    },
    {
      quote: "Our previous design system was a graveyard. Nobody used it. ADL rebuilt it with their AI tools and — more importantly — built it around how our engineers actually work. Adoption went from maybe 30% to over 90% in two months.",
      author: 'VP of Engineering',
      company: 'Series B Analytics Platform',
    },
  ],
};

export function SocialProofSection() {
  const version = useSectionVersion('socialProof');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)] relative">
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
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[var(--color-border)]">
          {content.metrics.map((metric, index) => (
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
              {content.testimonialsEyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              {content.testimonialsHeadline}
            </h2>
          </div>

          <div className="grid gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {content.testimonials.map((testimonial, index) => (
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
