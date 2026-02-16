'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const CONTENT = {
  eyebrow: 'Our AI',
  headline: 'Built Different.\nTrained on Production.',
  description: 'We didn\'t bolt AI onto an existing workflow. We built proprietary tools from the ground up, trained on 190,000+ labeled design-to-code examples.',
  features: [
    {
      title: 'Human-AI Collaboration',
      description: 'Our experts handle strategy and quality. AI handles the repetitive, error-prone work of converting designs to production-ready code.',
    },
    {
      title: 'Trained on Reality',
      description: '190,000+ labeled training images from real production codebases. Not tutorials. Not demos. Actual shipped software.',
    },
    {
      title: 'Gets Better Every Project',
      description: 'Every engagement improves our AI. Your project benefits from everything we\'ve learned across hundreds of successful deliveries.',
    },
  ],
  cta: {
    text: 'Learn More About Our AI',
    href: '/our-ai',
  },
};

export function OurAIPreviewSection() {
  const [line1, line2] = CONTENT.headline.split('\n');

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
          {CONTENT.features.map((feature, index) => (
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href={CONTENT.cta.href}
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-6 py-3',
              'border border-[var(--color-border)]',
              'text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-elevated)]',
              'transition-colors duration-150'
            )}
          >
            {CONTENT.cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
