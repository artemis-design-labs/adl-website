'use client';

import Link from 'next/link';
import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  eyebrow: 'How We Help',
  headline: 'Human Expertise with AI Velocity',
  description: 'Our design systems experts bring the strategy. Our proprietary AI tools accelerate execution. You get enterprise-grade output at startup speed.',
  services: [
    {
      id: 'creation',
      number: 'A',
      title: 'Design System Creation',
      tagline: 'From chaos to foundation',
      description: 'We come in, audit what exists, and build you a real foundation: a production-ready component library in both design and code. Our internally developed AI tools accelerate every stage of the process — so you get enterprise-grade output in weeks, not months.',
      features: [
        'Design tokens that actually sync across your entire product',
        'Documentation your team will read and actually use',
        'Complete state coverage for every real-world scenario',
        'Accessibility built in from day one',
        'AI-assisted delivery that adapts to your stack, your standards, your workflow',
      ],
      href: '/services#creation',
    },
    {
      id: 'maintenance',
      number: 'B',
      title: 'Design System Maintenance',
      tagline: 'Keep it alive, keep it aligned',
      description: "Your design system isn't a project — it's infrastructure. We become your design systems team, using our AI-powered tools to monitor, maintain, and evolve your system so you can focus on growth.",
      features: [
        'Continuous health monitoring and reporting',
        'Dedicated support for your design and engineering teams',
        'New components built and delivered as your product evolves',
        'AI-powered sync audits to catch drift before it compounds',
        'Governance and documentation that scales with your team',
      ],
      href: '/services#maintenance',
    },
    {
      id: 'handoff',
      number: 'C',
      title: 'Design-to-Code Handoff',
      tagline: 'Your designs, shipped',
      description: "You have the designs. Your designers did great work. But those files have been sitting for weeks. We make them real — powered by our proprietary AI tools that convert design files into production-ready code at a speed and accuracy manual processes can't match.",
      features: [
        'Production-ready components built to your codebase standards',
        'Full state coverage beyond the happy path',
        'Comprehensive documentation your engineers can onboard with instantly',
        'Code that passes review on the first PR — in whatever framework your team runs',
      ],
      href: '/services#handoff',
    },
  ],
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: 'Human Expertise × AI Precision',
  headline: 'Our Experts Build the Strategy.\nOur AI Builds the System.',
  description: "Every engagement pairs our design systems specialists — people who've built and scaled design infrastructure at startups — with proprietary AI tools we developed in-house. The humans handle what AI can't: understanding your product, your team dynamics, your growth stage. The AI handles what humans shouldn't have to: the repetitive, error-prone, time-intensive work of turning designs into production-ready code.",
  subDescription: 'This isn\'t "we use ChatGPT." We built our own tools from 190,000+ labeled training images, refined through hundreds of real engagements. The AI gets better with every project — and your team gets the benefit.',
  services: [
    {
      id: 'creation',
      number: 'A',
      title: 'Design System Creation',
      tagline: "We've built this from scratch before — for our own startups.",
      description: "You either don't have a design system, or you have fragments of one scattered across your product that nobody trusts. We've been there. We come in, audit the chaos, and build you a real foundation: production-ready components in both Figma and code.",
      features: [
        '25+ production-ready components in Figma AND your framework (React, Angular, Vue)',
        'Design tokens that sync across your entire product — not just a Figma file',
        'Every component ships with full state coverage: loading, error, empty, partial, permission-denied',
        "Documentation your engineers will actually read because it's built around their workflow",
        'Accessibility baked in from day one — not bolted on before an audit',
        'Delivered in 3-4 weeks, not 3-4 months, because our AI accelerates what used to be manual',
      ],
      investment: '$15,000 – $25,000',
      timeline: '3-4 weeks',
      href: '/solutions#creation',
    },
    {
      id: 'maintenance',
      number: 'B',
      title: 'Design System Maintenance',
      tagline: 'Because infrastructure without maintenance is just debt waiting to happen.',
      description: "We've watched design systems die. Not because they were built poorly, but because nobody maintained them. Components drift. Documentation goes stale. We become your dedicated design systems team.",
      features: [
        'Continuous health monitoring with AI-powered drift detection between Figma and code',
        'New components built and delivered as your product evolves — Figma, code, and documentation together',
        'Monthly health reports that prove ROI to your leadership team',
        'Dedicated office hours for your designers and engineers',
        'Governance support that scales — from a 5-person team to a 500-person organization',
        'Priority response when something breaks before a launch or a demo',
      ],
      investment: '$4,000 – $6,000/month',
      timeline: '6-month minimum',
      href: '/solutions#maintenance',
    },
    {
      id: 'handoff',
      number: 'C',
      title: 'Design-to-Code Handoff',
      tagline: 'Your designers did the work. Let our AI finish the job.',
      description: "Your designs are sitting in Figma. Your designers did great work. But your engineering team doesn't have the frontend bandwidth to implement them. Our AI converts your existing design files into production-ready code.",
      features: [
        'Production-ready components built to your codebase standards — TypeScript, Tailwind, your conventions',
        'Full state coverage beyond the happy path: loading, error, empty, partial, permission-denied',
        'Performance optimization for enterprise-scale data — virtualization for 10K+ rows',
        'Comprehensive Storybook documentation your team can onboard with immediately',
        "Code that passes review on the first PR — because our AI was trained on production standards, not tutorials",
        "Delivered in weeks, not the months it would take your team to build manually",
      ],
      investment: '$8,000 – $15,000',
      timeline: '2-3 weeks',
      href: '/solutions#handoff',
    },
  ],
};

export function ServicesSection() {
  const version = useSectionVersion('services');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;
  const headlineLines = content.headline.split('\n');

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            {headlineLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {content.description}
          </p>
          {version === 'v2' && (
            <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-2xl mx-auto">
              {V2_CONTENT.subDescription}
            </p>
          )}
        </header>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {content.services.map((service, serviceIndex) => (
            <article
              key={service.id}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
                {service.number}
              </span>

              <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] leading-snug mb-2">
                {service.title}
              </h3>

              <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-accent)] mb-4">
                {service.tagline}
              </p>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="text-[var(--color-text-muted)]">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* V2 shows investment/timeline, V1 shows just link */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                {version === 'v2' && (
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Investment</span>
                      <span className="text-[var(--color-text-primary)] font-medium">{V2_CONTENT.services[serviceIndex].investment}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Timeline</span>
                      <span className="text-[var(--color-text-primary)] font-medium">{V2_CONTENT.services[serviceIndex].timeline}</span>
                    </div>
                  </div>
                )}
                <Link
                  href={service.href}
                  className="text-xs tracking-[0.05em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                >
                  Learn more {version === 'v2' ? '→' : ''}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
