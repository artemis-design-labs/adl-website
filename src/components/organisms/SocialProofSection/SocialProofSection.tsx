'use client';


const CLIENTS_TRUST_LINE =
  'Trusted by product teams in Health, Fintech, and Enterprise';

const CONTENT = {
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
  clientsTrustLine: CLIENTS_TRUST_LINE,
};

export function SocialProofSection() {
  const content = CONTENT;

  return (
    <div className="relative">
      {/* Metrics Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-10 lg:px-20">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
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
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto px-10 lg:px-20">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
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
                    <div className="text-xs text-[var(--color-text-secondary)]">
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
        <div className="max-w-5xl mx-auto px-10 lg:px-20">
          <header className="text-center mb-12">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
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

          <p className="mt-12 text-center text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)]">
            {content.clientsTrustLine}
          </p>
        </div>
      </section>
    </div>
  );
}
