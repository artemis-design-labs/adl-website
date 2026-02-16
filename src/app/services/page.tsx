'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { cn } from '@/lib/cn';

export default function ServicesPage() {
  const services = [
    {
      id: 'creation',
      number: 'A',
      title: 'Design System Creation',
      tagline: 'From chaos to foundation',
      price: '$15,000 - $25,000',
      timeline: '3-4 weeks',
      description: 'You either don\'t have a design system, or you have fragments scattered across your product. We come in, audit the chaos, and build you a real foundation.',
      deliverables: [
        '25+ production-ready components in Figma AND your framework',
        'Design tokens that sync across your entire product',
        'Full state coverage: loading, error, empty, partial, permission-denied',
        'Documentation your engineers will actually read',
        'Accessibility baked in from day one',
        'Delivered in 3-4 weeks via AI-accelerated workflow',
      ],
    },
    {
      id: 'maintenance',
      number: 'B',
      title: 'Design System Maintenance',
      tagline: 'Keep it alive, keep it aligned',
      price: '$4,000 - $6,000/month',
      timeline: '6-month minimum',
      description: 'Design systems die without maintenance. Components drift. Documentation goes stale. We become your dedicated design systems team.',
      deliverables: [
        'Up to 5 new components per month',
        'AI-powered drift detection between Figma and code',
        'Monthly health reports that prove ROI',
        'Dedicated office hours for your team',
        'Priority response for critical requests',
        'Governance support that scales with you',
      ],
    },
    {
      id: 'handoff',
      number: 'C',
      title: 'Design-to-Code',
      tagline: 'Your designs, shipped',
      price: '$8,000 - $15,000',
      timeline: '2-3 weeks',
      description: 'Your designs are sitting in Figma. Your engineering team doesn\'t have the frontend bandwidth. Our AI converts your existing designs into production-ready code.',
      deliverables: [
        'Production-ready components built to your codebase standards',
        'Full state coverage beyond the happy path',
        'Performance optimization for enterprise-scale data',
        'Comprehensive Storybook documentation',
        'Code that passes review on the first PR',
        'Delivered in weeks, not months',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="max-w-3xl">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Products & Services
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Three Ways to Eliminate<br />Design-Dev Friction
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Every engagement is scoped, priced, and delivered on a fixed timeline. No hourly billing. No scope creep. No surprises.
            </p>
          </header>
        </div>
      </section>

      {/* DS Creation Section */}
      <section id="creation" className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Service A
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Design System Creation
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {services[0].description}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">What You Get</h3>
              <ul className="space-y-3">
                {services[0].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">Investment</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-3xl font-medium text-[var(--color-text-primary)]">{services[0].price}</span>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Timeline: </span>
                  <span className="text-sm text-[var(--color-text-primary)]">{services[0].timeline}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Best for startups with no design system or fragmented components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DS Maintenance Section */}
      <section id="maintenance" className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Service B
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Design System Maintenance
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {services[1].description}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">What You Get</h3>
              <ul className="space-y-3">
                {services[1].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">Investment</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-3xl font-medium text-[var(--color-text-primary)]">{services[1].price}</span>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Commitment: </span>
                  <span className="text-sm text-[var(--color-text-primary)]">{services[1].timeline}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Best for companies with existing systems experiencing drift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design-to-Code Section */}
      <section id="handoff" className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Service C
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
              Design-to-Code
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {services[2].description}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">What You Get</h3>
              <ul className="space-y-3">
                {services[2].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-text-muted)]">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-bg-elevated)] p-6 lg:p-8">
              <h3 className="text-xs tracking-[0.1em] uppercase text-[var(--color-accent)] mb-6">Investment</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-3xl font-medium text-[var(--color-text-primary)]">{services[2].price}</span>
                </div>
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Timeline: </span>
                  <span className="text-sm text-[var(--color-text-primary)]">{services[2].timeline}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Best for teams with Figma ready but struggling with implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[var(--color-text-primary)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <header className="mb-10">
            <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
              Get Started
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-bg-primary)] mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Book a 15-minute call. We'll review your current setup and recommend the right approach.
            </p>
          </header>
          <Link
            href="/contact"
            className={cn(
              'inline-block text-xs tracking-[0.08em] uppercase px-8 py-4',
              'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-colors duration-150'
            )}
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
