'use client';


const CONTENT = {
  eyebrow: 'The Technology Behind ADL',
  headline: 'AI That Actually Works.\nBuilt From the Trenches.',
  description: 'We got tired of AI tools that generated code nobody wanted to deploy. So we built our own — trained on production codebases, validated by senior engineers, and battle-tested across hundreds of projects.',
  features: [
    {
      title: 'Built by Founders, For Founders',
      description: 'We\'ve been on your side of this problem. Burning runway on agencies. Watching engineers fix AI-generated garbage. We built something that actually works because we needed it ourselves.',
    },
    {
      title: '190,000+ Training Images',
      description: 'Not scraped from the internet. Not generated from tutorials. Real design-to-code pairs from production codebases at companies you\'d recognize.',
    },
    {
      title: 'Human Quality Control',
      description: 'Our AI generates. Our senior engineers validate. Every component passes the same review your team would run. That\'s why the code actually ships.',
    },
  ],
  cta: {
    text: 'See How Our AI Works',
    href: '/our-ai',
  },
};

export function OurAIPreviewSection() {
  const content = CONTENT;
  const [line1, line2] = content.headline.split('\n');

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)]">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
          {content.features.map((feature, index) => (
            <article
              key={index}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] leading-snug mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
