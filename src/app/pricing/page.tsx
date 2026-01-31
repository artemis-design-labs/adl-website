'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

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
      cta: 'Start Your Design System',
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
      cta: 'Stop Design Drift',
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
      cta: 'Convert Your Designs',
      popular: false,
    },
  ];

  const comparisons = [
    {
      option: 'Premium Agency (Clay, Ramotion)',
      price: '$50K+',
      delivery: 'Figma only. No code. No states.',
    },
    {
      option: 'Budget Shop',
      price: '$10-15K',
      delivery: 'Figma only. You fix the inconsistencies.',
    },
    {
      option: 'Figma-to-Code Tools',
      price: '$0-500/mo',
      delivery: '80% solution. Requires dev cleanup.',
    },
    {
      option: 'In-House Designer',
      price: '$120K+/year',
      delivery: 'One person. No code expertise.',
    },
    {
      option: 'Artemis Design Labs',
      price: '$15-25K',
      delivery: 'Figma + React + 5 states + virtualization + docs',
      highlight: true,
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Transparent pricing. No surprises.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fixed pricing based on scope. Every engagement includes production-ready React
            components—not just Figma files.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative p-6 md:p-8 rounded-2xl border ${
                  service.popular
                    ? 'border-teal-500 bg-teal-50/50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-teal-600 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl md:text-4xl font-semibold text-gray-900">
                      {service.price}
                    </span>
                    {service.priceNote && (
                      <span className="text-gray-500 ml-1">{service.priceNote}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{service.timeline}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm">
                      <span className="text-teal-600 mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Best for</p>
                  <p className="text-sm text-gray-700">{service.bestFor}</p>
                </div>

                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    service.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              The Comparison
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              How we stack up
            </h2>
            <p className="text-lg text-gray-600">
              Below premium agencies. Above budget shops. Complete delivery.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
              <div>Option</div>
              <div>Price</div>
              <div>What You Get</div>
            </div>
            {comparisons.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 gap-4 p-4 border-b border-gray-100 last:border-0 ${
                  item.highlight ? 'bg-teal-50' : ''
                }`}
              >
                <div
                  className={`text-sm ${
                    item.highlight ? 'font-semibold text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {item.option}
                </div>
                <div
                  className={`text-sm ${
                    item.highlight ? 'font-semibold text-teal-600' : 'text-gray-600'
                  }`}
                >
                  {item.price}
                </div>
                <div
                  className={`text-sm ${
                    item.highlight ? 'font-medium text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {item.delivery}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Pricing FAQ
          </h2>

          <div className="space-y-8">
            {[
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
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <p className="text-lg font-medium text-gray-900 mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready for a custom quote?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Every project is scoped based on your specific needs. Let&apos;s talk about what
            you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
