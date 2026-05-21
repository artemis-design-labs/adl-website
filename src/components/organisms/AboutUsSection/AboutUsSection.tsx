'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

const SERVICES = [
  {
    number: '01',
    title: 'Design System Creation',
    tagline: 'From chaos to foundation',
    price: '$15,000 - $25,000',
    timeline: '3-4 weeks',
    description: 'You don\'t have a design system, or you have fragments scattered across your product. We audit the chaos and build you a real foundation with 25+ production-ready components.',
  },
  {
    number: '02',
    title: 'Design System Maintenance',
    tagline: 'Keep it alive, keep it aligned',
    price: '$4,000 - $6,000/mo',
    timeline: '6-month minimum',
    description: 'Design systems die without maintenance. We become your dedicated design systems team with AI-powered drift detection and monthly health reports.',
  },
  {
    number: '03',
    title: 'Design-to-Code',
    tagline: 'Your designs, shipped',
    price: '$8,000 - $15,000',
    timeline: '2-3 weeks',
    description: 'Your designs are sitting in Figma. Your engineering team doesn\'t have bandwidth. Our AI converts your existing designs into production-ready code.',
  },
];

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3x', label: 'Faster Handoff' },
  { value: '100%', label: 'Code Parity' },
];

export function AboutUsSection() {
  const [activeService, setActiveService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToService = (index: number) => {
    setActiveService(index);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setActiveService((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setActiveService((prev) => (prev + 1) % SERVICES.length);
    setIsAutoPlaying(false);
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Us */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              <span
                className={cn(
                  'text-xs font-medium tracking-[0.15em] uppercase',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2
              className={cn(
                'text-2xl md:text-3xl lg:text-4xl',
                'font-medium tracking-[-0.02em]',
                'text-[var(--color-text-primary)]',
                'leading-[1.2]'
              )}
            >
              Production-Grade Design Systems
              <br />
              <span className="text-[var(--color-accent)]">Delivered in Weeks</span>
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                We&apos;re design system architects with over a decade of experience helping startup teams
                eliminate the friction between design and development.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Our mission is simple: so your team can focus on building products that matter.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border)]">
              {STATS.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Services Carousel */}
          <div className="flex flex-col">
            {/* Carousel Header */}
            <div className="mb-6">
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">
                Products & Services
              </span>
              <h3 className="text-xl md:text-2xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
                What We Offer
              </h3>
            </div>

            {/* Carousel Content */}
            <div
              className={cn(
                'flex-grow',
                'bg-[var(--color-bg-elevated)]',
                'border border-[var(--color-border)]',
                'p-6 lg:p-8',
                'flex flex-col'
              )}
            >
              {/* Service Content */}
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium tracking-[0.15em] text-[var(--color-accent)]">
                    {SERVICES[activeService].number}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                    {SERVICES[activeService].timeline}
                  </span>
                </div>

                <h4 className="text-xl lg:text-2xl font-medium text-[var(--color-text-primary)] leading-snug mb-2">
                  {SERVICES[activeService].title}
                </h4>

                <p className="text-sm text-[var(--color-accent)] mb-4">
                  {SERVICES[activeService].tagline}
                </p>

                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {SERVICES[activeService].description}
                </p>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Starting at </span>
                  <span className="text-lg font-medium text-[var(--color-text-primary)]">
                    {SERVICES[activeService].price}
                  </span>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {SERVICES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToService(index)}
                      className={cn(
                        'w-2 h-2 transition-all duration-200',
                        index === activeService
                          ? 'bg-[var(--color-accent)] w-6'
                          : 'bg-[var(--color-border-strong)] hover:bg-[var(--color-text-muted)]'
                      )}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrev}
                    className={cn(
                      'w-10 h-10 flex items-center justify-center',
                      'border border-[var(--color-border)]',
                      'text-[var(--color-text-secondary)]',
                      'hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]',
                      'transition-colors duration-150'
                    )}
                    aria-label="Previous service"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className={cn(
                      'w-10 h-10 flex items-center justify-center',
                      'border border-[var(--color-border)]',
                      'text-[var(--color-text-secondary)]',
                      'hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]',
                      'transition-colors duration-150'
                    )}
                    aria-label="Next service"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
