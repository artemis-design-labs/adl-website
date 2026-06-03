'use client';

const CONTENT = {
  eyebrow: 'Our Process',
  headline: 'Built by Founders.\nPowered by AI.',
  description: 'We\'ve been in your shoes — burning runway on agencies that don\'t deliver. So we built a process that actually works for startups.',
  steps: [
    {
      number: '01',
      title: 'Free Audit',
      description: 'Send us your Figma files. Within 48 hours, our AI analyzes your design system and identifies gaps, inconsistencies, and opportunities. You keep the audit whether you work with us or not.',
      duration: '1-2 weeks',
    },
    {
      number: '02',
      title: 'AI-Accelerated Build',
      description: 'Our proprietary AI tools handle the heavy lifting — generating production-ready React components from your designs. Our senior engineers review everything. You get code that actually passes review.',
      duration: '2-4 weeks',
    },
    {
      number: '03',
      title: 'Ship & Scale',
      description: 'We don\'t disappear after delivery. We help your team adopt the system, train your engineers, and optionally provide ongoing maintenance. Your design infrastructure scales as you grow.',
      duration: 'Ongoing',
    },
  ],
};

export function HowItWorksSection() {
  const content = CONTENT;
  const [line1, line2] = content.headline.split('\n');

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            {line1}<br />
            <span className="text-[var(--color-accent)]">{line2}</span>
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {content.description}
          </p>
        </header>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
          {content.steps.map((step, index) => (
            <article
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              <span className="text-sm font-medium tracking-[0.15em] text-[var(--color-text-secondary)] mb-4">
                {step.number}
              </span>
              <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-grow">
                {step.description}
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
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
