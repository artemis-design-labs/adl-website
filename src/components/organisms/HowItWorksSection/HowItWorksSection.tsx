'use client';

import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
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

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: 'Our Process',
  headline: 'Built by Founders.\nPowered by AI.',
  description: 'We\'ve been in your shoes — burning runway on agencies that don\'t deliver. So we built a process that actually works for startups.',
  steps: [
    {
      number: '01',
      title: 'Free Audit',
      description: 'Send us your Figma files. Within 48 hours, our AI analyzes your design system and identifies gaps, inconsistencies, and opportunities. You keep the audit whether you work with us or not.',
      duration: '48 hours',
    },
    {
      number: '02',
      title: 'AI-Accelerated Build',
      description: 'Our proprietary AI tools handle the heavy lifting — generating production-ready React components from your designs. Our senior engineers review everything. You get code that actually passes review.',
      duration: '3-4 weeks',
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
  const version = useSectionVersion('home-howItWorks');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;
  const [line1, line2] = content.headline.split('\n');

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)] relative">
      {/* Version indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1' : 'V2'}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            {line1}<br />
            {line2}
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
