'use client';

import Link from 'next/link';

const services = [
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
    description: 'Your design system isn\'t a project — it\'s infrastructure. We become your design systems team, using our AI-powered tools to monitor, maintain, and evolve your system so you can focus on growth.',
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
    description: 'You have the designs. Your designers did great work. But those files have been sitting for weeks. We make them real — powered by our proprietary AI tools that convert design files into production-ready code at a speed and accuracy manual processes can\'t match.',
    features: [
      'Production-ready components built to your codebase standards',
      'Full state coverage beyond the happy path',
      'Comprehensive documentation your engineers can onboard with instantly',
      'Code that passes review on the first PR — in whatever framework your team runs',
    ],
    href: '/services#handoff',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-16">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            How We Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] leading-tight">
            Human Expertise with AI Velocity
          </h2>
          <p className="mt-6 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Our design systems experts bring the strategy. Our proprietary AI tools accelerate execution. You get enterprise-grade output at startup speed.
          </p>
        </header>

        {/* Services Grid - Responsive CSS Grid */}
        {/* Mobile: 1 col | Tablet: 2 cols | Desktop: 3 cols */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]"
          style={{ border: '1px solid var(--color-border)' }}
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col"
            >
              {/* Letter indicator - visually secondary */}
              <span className="text-[10px] font-medium tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
                {service.number}
              </span>

              {/* Title - dominant */}
              <h3 className="text-lg lg:text-xl font-medium text-[var(--color-text-primary)] leading-snug mb-2">
                {service.title}
              </h3>

              {/* Tagline */}
              <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--color-accent)] mb-4">
                {service.tagline}
              </p>

              {/* Description - subdued */}
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
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

              {/* Link */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <Link
                  href={service.href}
                  className="text-xs tracking-[0.05em] uppercase text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
