'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/cn';

const services = [
  {
    id: 'creation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: 'Design System Creation',
    tagline: 'From scattered to systematic',
    description: 'We come in, audit what exists, and build you a real foundation: 25+ production-ready components in Figma AND React.',
    features: [
      'Design tokens that actually sync',
      'Documentation your team will read',
      'States for errors, loading, empty data',
      'Accessibility built in from day one',
    ],
    timeline: '3-4 weeks',
    href: '/services#creation',
  },
  {
    id: 'handoff',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Design-to-Code Handoff',
    tagline: 'Your Figma files, shipped',
    description: 'You have the designs. Your designers did great work. But those files have been sitting for weeks. We make them real.',
    features: [
      'Production-ready React components',
      'TypeScript + Tailwind CSS',
      'Storybook documentation',
      'Code that passes review on first PR',
    ],
    timeline: '2-3 weeks',
    href: '/services#handoff',
  },
  {
    id: 'maintenance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'Design System Maintenance',
    tagline: 'Keep it alive, keep it aligned',
    description: 'Your design system isn\'t a project—it\'s infrastructure. We become your design systems team so you can focus on growth.',
    features: [
      'Monthly health reports',
      'Office hours for your engineers',
      'New components when you need them',
      'Sync audits to catch drift early',
    ],
    timeline: 'Ongoing partnership',
    href: '/services#maintenance',
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Help"
          title="Three ways we eliminate friction"
          description="We're not a traditional agency that hands off Figma files and moves on. We embed into your workflow and grow with you."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={cn(
                'group flex flex-col p-8 rounded-2xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'hover:border-[var(--color-accent)] transition-all duration-300',
                'hover:shadow-xl hover:shadow-[var(--color-accent)]/5',
                'hover:-translate-y-1'
              )}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--color-accent)] font-medium mb-4">
                {service.tagline}
              </p>
              <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Timeline */}
              <div className="pt-4 border-t border-[var(--color-border)]">
                <span className="text-sm text-[var(--color-text-muted)]">
                  Timeline: <span className="text-[var(--color-text-primary)] font-medium">{service.timeline}</span>
                </span>
              </div>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
