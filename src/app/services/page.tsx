'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      id: 'creation',
      title: 'Design System Creation',
      headline: 'From Scattered Components to Shipping Machine',
      price: '$15,000 - $25,000',
      timeline: '3-4 weeks',
      narrative:
        "You know the drill. A button here, a modal there, three different shades of gray that were supposed to be the same. Your product looks like five different apps had a meeting. We've seen it a hundred times. Here's what we do about it.",
      deliverables: [
        {
          item: '25+ core Figma components with variants',
          detail:
            'Buttons, inputs, cards, modals, tables, navigation, forms—all with loading, error, and empty states',
        },
        {
          item: 'React/TypeScript component library',
          detail:
            'Production-ready code with Tailwind CSS, virtualization for 10K+ rows, keyboard navigation',
        },
        {
          item: 'Design tokens',
          detail: 'Colors, typography, spacing, shadows—systematized for consistency across your product',
        },
        {
          item: 'Dark mode support',
          detail: 'Built-in from day one, not bolted on later',
        },
        {
          item: 'Storybook documentation',
          detail: "Interactive component docs your devs will actually use",
        },
        {
          item: 'WCAG 2.1 AA accessibility',
          detail: 'Pass enterprise accessibility audits on the first attempt',
        },
      ],
      triggerEvents: [
        'You just closed your Seed/Series A and need to ship faster',
        'You lost a deal because the prospect said your product looked "unpolished"',
        'Your first designer just joined and inherited chaos',
        'Your engineers are complaining about "design drift" in retros',
        "You're preparing for an accessibility or SOC2 audit",
      ],
      guarantee: 'Developers ship 2x faster within 30 days or extended support free',
    },
    {
      id: 'maintenance',
      title: 'Design System Maintenance',
      headline: 'Your Design System Is Drifting. We Fix That.',
      price: '$4,000 - $6,000/month',
      timeline: '6-month minimum',
      narrative:
        "The Figma file is not the truth. It's a picture of the truth. And that picture is already out of date. Design systems rot without dedicated maintenance. Figma drifts from code. Documentation goes stale. New devs don't know which components to use. We prevent all of that.",
      deliverables: [
        {
          item: 'Up to 5 new components per month',
          detail: 'Built to your existing standards and patterns',
        },
        {
          item: 'Monthly Figma ↔ React sync audits',
          detail: 'We catch drift before it becomes technical debt',
        },
        {
          item: 'Continuous documentation updates',
          detail: 'Every change is documented as it happens',
        },
        {
          item: '2-4 hours monthly office hours',
          detail: 'Direct access to our team for questions and guidance',
        },
        {
          item: 'Quarterly health assessments',
          detail: 'Comprehensive review of adoption, consistency, and areas for improvement',
        },
        {
          item: 'Same-week turnaround on critical requests',
          detail: 'When you need something fast, we deliver',
        },
      ],
      triggerEvents: [
        'Your existing design system is experiencing Figma-code drift',
        "You don't have a dedicated design system maintainer",
        "You're launching new product lines and need components fast",
        'Multiple teams are building simultaneously with no coordination',
        'Design system support tickets are piling up',
      ],
      guarantee: 'Same-week turnaround on critical component requests',
    },
    {
      id: 'handoff',
      title: 'Design-to-Code Handoff',
      headline: 'Your Figma Files Deserve to Ship',
      price: '$8,000 - $15,000',
      timeline: '2-3 weeks',
      narrative:
        "You have designers. You have Figma files. What you don't have is frontend bandwidth. Those beautiful designs are sitting in a folder while your engineers rebuild buttons for the third time. We convert your existing Figma library into production-ready React components.",
      deliverables: [
        {
          item: 'Production-ready React components',
          detail: 'TypeScript, Tailwind CSS, optimized for your tech stack',
        },
        {
          item: 'Full state coverage',
          detail: 'Loading, error, empty, partial, permission-denied states',
        },
        {
          item: 'Virtualization for large datasets',
          detail: 'Tables and lists that handle 10K+ rows without lag',
        },
        {
          item: 'WCAG 2.1 AA accessibility',
          detail: 'Keyboard navigation, ARIA labels, screen reader support',
        },
        {
          item: 'API integration patterns',
          detail: 'Data binding scaffolding, loading states, error handling',
        },
        {
          item: 'Performance benchmarks',
          detail: 'Documented render times and optimization recommendations',
        },
      ],
      triggerEvents: [
        'You have Figma designs ready but no frontend bandwidth to implement',
        'Previous attempts with freelancers or Figma-to-code tools produced unusable output',
        'Your engineering team is strong on backend but frontend-constrained',
        "You have a tight deadline for a feature launch or redesign",
      ],
      guarantee: '100% design fidelity or we revise until it matches',
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-teal-600 uppercase tracking-wider mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Three ways we eliminate design-dev friction
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every engagement is scoped, priced, and delivered on a fixed timeline. No hourly
              billing. No scope creep. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-y border-gray-200 bg-gray-50 sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all whitespace-nowrap"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 md:py-28 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left column - Overview */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-40">
                  <p className="text-4xl md:text-5xl font-semibold text-teal-600 mb-2">
                    {service.price}
                  </p>
                  <p className="text-gray-500 mb-6">{service.timeline}</p>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.headline}</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.narrative}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get started
                  </Link>
                </div>
              </div>

              {/* Right column - Details */}
              <div className="lg:col-span-2 space-y-12">
                {/* Deliverables */}
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                    What you get
                  </p>
                  <div className="space-y-6">
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-teal-600 mt-1 flex-shrink-0">✓</span>
                        <div>
                          <p className="font-medium text-gray-900 mb-1">{d.item}</p>
                          <p className="text-gray-600 text-sm">{d.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trigger Events */}
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                    This service is for you if...
                  </p>
                  <ul className="space-y-3">
                    {service.triggerEvents.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-gray-400">→</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guarantee */}
                <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl">
                  <p className="text-sm font-medium text-teal-700 uppercase tracking-wider mb-2">
                    Our guarantee
                  </p>
                  <p className="text-gray-800">{service.guarantee}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">Common questions</h2>

          <div className="space-y-8">
            {[
              {
                q: 'What tech stack do you work with?',
                a: "We primarily deliver React/TypeScript with Tailwind CSS. We can also work with Vue, Angular, or vanilla CSS—just depends on your setup.",
              },
              {
                q: 'Do we need a designer on our team?',
                a: "No. We handle the complete design and development of your design system. Having a designer helps with ongoing adoption, but isn't required.",
              },
              {
                q: 'What if we already have some components?',
                a: 'We audit what you have and either incorporate, rebuild, or replace based on quality. No wasted work.',
              },
              {
                q: 'How do you handle revisions?',
                a: "Each service includes a revision period. For Design System Creation, that's 30 days of support. For Handoff, we revise until it matches your Figma exactly.",
              },
              {
                q: 'Can we start with Handoff and add Maintenance later?',
                a: 'Absolutely. Many clients start with a one-time project and add Maintenance once they see the value.',
              },
              {
                q: 'Why not just use Figma-to-code tools like Locofy or Anima?',
                a: "Those tools deliver 80% solutions that require significant developer cleanup. We deliver production-ready code that passes code review on the first submission. The time you'd spend fixing automated output is better spent shipping features.",
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
            Not sure which service you need?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Book a 15-minute call. We&apos;ll review your current setup and recommend the right
            approach.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Book a discovery call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
