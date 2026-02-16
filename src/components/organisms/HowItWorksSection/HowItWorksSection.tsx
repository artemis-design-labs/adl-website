'use client';

const CONTENT = {
  eyebrow: 'How It Works',
  headline: 'From Chaos to Clarity.\nIn Three Steps.',
  description: 'We\'ve refined our process through hundreds of engagements. Here\'s how we transform your design-to-code workflow.',
  steps: [
    {
      number: '01',
      title: 'Discovery & Audit',
      description: 'We start by understanding your current state. What exists? What\'s broken? What does your team actually need? We audit your design files, codebase, and workflows to identify gaps and opportunities.',
      duration: '1-2 days',
    },
    {
      number: '02',
      title: 'Build & Deliver',
      description: 'Our team gets to work. Human expertise drives strategy and quality. AI accelerates execution. You get production-ready components in both Figma and code, complete with documentation.',
      duration: '2-4 weeks',
    },
    {
      number: '03',
      title: 'Integrate & Evolve',
      description: 'We don\'t just hand off files and disappear. We work with your team to integrate the system, train your engineers, and establish governance. Optional ongoing maintenance keeps everything aligned.',
      duration: 'Ongoing',
    },
  ],
};

export function HowItWorksSection() {
  const [line1, line2] = CONTENT.headline.split('\n');

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            {CONTENT.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            {line1}<br />
            {line2}
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {CONTENT.description}
          </p>
        </header>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
          {CONTENT.steps.map((step, index) => (
            <article
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
                {step.number}
              </span>
              <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {step.description}
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  Duration: {step.duration}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
