'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function PricingPage() {
  const services = [
    {
      id: 'creation',
      title: 'Design System Creation',
      price: '$15,000 - $25,000',
      timeline: '3-4 weeks',
      description: 'Go from zero to a complete, production-ready design system.',
      features: [
        '25+ Figma components with variants',
        'React/TypeScript component library',
        'Design tokens + dark mode',
        'Storybook documentation',
        'WCAG 2.1 AA accessibility',
        '30-day post-delivery support',
      ],
      bestFor: 'Startups with no design system or fragmented components',
      popular: true,
    },
    {
      id: 'maintenance',
      title: 'Design System Maintenance',
      price: '$4,000 - $6,000',
      priceNote: '/month',
      timeline: '6-month minimum',
      description: 'Keep your design system healthy and evolving.',
      features: [
        'Up to 5 new components/month',
        'Monthly Figma ↔ React sync audits',
        'Continuous documentation updates',
        '2-4 hours office hours/month',
        'Quarterly health assessments',
        'Same-week turnaround on critical requests',
      ],
      bestFor: 'Companies with existing systems experiencing drift',
      popular: false,
    },
    {
      id: 'handoff',
      title: 'Design-to-Code Handoff',
      price: '$8,000 - $15,000',
      timeline: '2-3 weeks',
      description: 'Convert your Figma library to production-ready React.',
      features: [
        'Production-ready React components',
        '5 states per component',
        'Virtualization for 10K+ rows',
        'WCAG 2.1 AA accessibility',
        'API integration patterns',
        'Performance benchmarks',
      ],
      bestFor: 'Teams with Figma ready but struggling with implementation',
      popular: false,
    },
  ];

  const comparisons = [
    { option: 'Premium Agency (Clay, Ramotion)', price: '$50K+', delivery: 'Figma only. No code. No states.' },
    { option: 'Budget Shop', price: '$10-15K', delivery: 'Figma only. You fix the inconsistencies.' },
    { option: 'Figma-to-Code Tools', price: '$0-500/mo', delivery: '80% solution. Requires dev cleanup.' },
    { option: 'In-House Designer', price: '$120K+/year', delivery: 'One person. No code expertise.' },
    { option: 'Artemis Design Labs', price: '$15-25K', delivery: 'Figma + React + 5 states + virtualization + docs', highlight: true },
  ];

  const faqs = [
    {
      q: 'Why not hire in-house?',
      a: "A full-time designer costs $120K+/year and can't write React. A full-time design systems engineer costs even more. We deliver a complete system in 3-4 weeks, then you can maintain it in-house or continue with us.",
    },
    {
      q: 'What determines where I fall in the price range?',
      a: 'Component count and complexity. A dashboard with 20 basic components is at the lower end. A complex admin panel with data tables, permissions UI, and custom visualizations is at the higher end. We scope it precisely after our discovery call.',
    },
    {
      q: 'Do you offer discounts?',
      a: "Pricing is based on scope and the value delivered. We don't discount, but we do offer flexible payment terms for multi-month engagements.",
    },
    {
      q: 'What if we need something not listed?',
      a: "We're flexible. If you need a custom engagement—like a design system audit, training workshop, or integration support—let's talk. We'll scope something that fits.",
    },
    {
      q: "What's included in the 30-day support?",
      a: 'Bug fixes, minor adjustments, and questions about implementation. Major new features or components would be scoped separately or covered under a Maintenance retainer.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <header>
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Pricing
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Transparent Pricing.<br />No Surprises.
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Fixed pricing based on scope. Every engagement includes production-ready React components—not just Figma files.
            </p>
          </header>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Service Tiers
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Choose Your Path
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  'bg-[var(--color-bg-elevated)] p-6 lg:p-8 flex flex-col relative',
                  service.popular && 'ring-1 ring-[var(--color-accent)]'
                )}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-[var(--color-accent)] text-white text-[10px] tracking-[0.1em] uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
                      {service.price}
                    </span>
                    {service.priceNote && (
                      <span className="text-[var(--color-text-muted)] ml-1 text-sm">{service.priceNote}</span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">{service.timeline}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-[var(--color-text-secondary)]">
                      <span className="text-[var(--color-text-muted)]">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[var(--color-border)] mb-6">
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">Best for</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{service.bestFor}</p>
                </div>

                <Link
                  href="/contact"
                  className={cn(
                    'block w-full text-center text-xs tracking-[0.08em] uppercase px-6 py-3',
                    service.popular
                      ? 'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]'
                      : 'border border-[var(--color-border)] text-[var(--color-text-primary)]',
                    'hover:opacity-90 transition-opacity'
                  )}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              The Comparison
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-4">
              How We Stack Up
            </h2>
            <p className="text-base text-[var(--color-text-secondary)]">
              Below premium agencies. Above budget shops. Complete delivery.
            </p>
          </header>

          <div className="border border-[var(--color-border)]">
            <div className="grid grid-cols-3 gap-4 p-4 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">Option</div>
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">Price</div>
              <div className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">What You Get</div>
            </div>
            {comparisons.map((item, i) => (
              <div
                key={i}
                className={cn(
                  'grid grid-cols-3 gap-4 p-4 border-b border-[var(--color-border)] last:border-0',
                  item.highlight && 'bg-[var(--color-bg-secondary)]'
                )}
              >
                <div className={cn('text-sm', item.highlight ? 'font-medium text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]')}>
                  {item.option}
                </div>
                <div className={cn('text-sm', item.highlight ? 'font-medium text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]')}>
                  {item.price}
                </div>
                <div className={cn('text-sm', item.highlight ? 'font-medium text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]')}>
                  {item.delivery}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Pricing FAQ
            </h2>
          </header>

          <div className="space-y-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
                <p className="text-base font-medium text-[var(--color-text-primary)] mb-3">{faq.q}</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <header className="mb-10">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
              Get Started
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6">
              Ready for a Custom Quote?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Every project is scoped based on your specific needs. Let's talk about what you're building.
            </p>
          </header>
          <Link
            href="/contact"
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-8 py-4',
              'bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]',
              'hover:bg-[var(--color-text-secondary)]',
              'transition-colors duration-150'
            )}
          >
            Get Your Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
