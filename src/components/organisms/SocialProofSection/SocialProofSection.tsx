'use client';

import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  metricsEyebrow: 'By The Numbers',
  metricsHeadline: 'Results That Speak',
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
  clientsEyebrow: 'Our Clients',
  clientsHeadline: 'Helping teams at companies you\'d recognize',
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  metricsEyebrow: 'By The Numbers',
  metricsHeadline: 'AI-Powered Results',
  metrics: [
    { value: '190K+', label: 'Training images', description: 'Powering our proprietary AI models' },
    { value: '3-4 weeks', label: 'Not 3-4 months', description: 'Average delivery for a full design system' },
    { value: '5 states', label: 'Per component', description: 'Loading, error, empty, partial, permission-denied' },
    { value: '0', label: 'Figma-only deliverables', description: 'Every design ships with production-ready code' },
  ],
  testimonialsEyebrow: 'Testimonials',
  testimonialsHeadline: "Founders Who Trust Us With Their Infrastructure",
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
  clientsEyebrow: 'Our Clients',
  clientsHeadline: 'Helping teams at companies you\'d recognize',
};

export function SocialProofSection() {
  const version = useSectionVersion('socialProof');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;

  return (
    <div className="relative">
      {/* Version indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1' : 'V2'}
        </span>
      </div>

      {/* Metrics Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              {content.metricsEyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              {content.metricsHeadline}
            </h2>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {content.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[var(--color-bg-elevated)] p-6 text-center"
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              {content.testimonialsEyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              {content.testimonialsHeadline}
            </h2>
          </header>

          <div className="grid gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
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
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              {content.clientsEyebrow}
            </span>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              {content.clientsHeadline}
            </h2>
          </header>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-24 h-8 bg-[var(--color-border)]"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
