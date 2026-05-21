'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';

const METRICS = [
  { value: '40%', label: 'Faster design-to-code', description: 'Average velocity improvement' },
  { value: '25+', label: 'Components per system', description: 'Production-ready with full states' },
  { value: '2x', label: 'Faster onboarding', description: 'New engineers ship on day one' },
  { value: '100%', label: 'Code coverage', description: 'Every design ships with React' },
];

const TESTIMONIALS = [
  {
    quote: "ADL transformed how our team ships UI. We went from weeks of back-and-forth to same-day implementation. The design system they built is actually used by everyone—not just sitting in a Figma file.",
    author: 'Engineering Lead',
    company: 'Series B Healthcare Startup',
  },
  {
    quote: "Before ADL, every new engineer spent their first two weeks figuring out our component mess. Now they're shipping features on day one. That's not an exaggeration.",
    author: 'VP of Engineering',
    company: 'Series A Fintech',
  },
  {
    quote: "Our previous design system was a graveyard. Nobody used it. ADL rebuilt it around how our engineers actually work. Adoption went from 30% to over 90% in two months.",
    author: 'VP of Engineering',
    company: 'Series B Analytics Platform',
  },
];

export function MetricsTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToTestimonial = (index: number) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Metrics */}
          <div>
            <div className="mb-8">
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">
                By The Numbers
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
                Results That Speak
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[var(--color-border)]" style={{ border: '1px solid var(--color-border)' }}>
              {METRICS.map((metric, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-bg-elevated)] p-6"
                >
                  <div className="text-2xl md:text-3xl font-medium text-[var(--color-text-primary)] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs tracking-[0.08em] uppercase text-[var(--color-accent)] mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonials */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-2">
                What Teams Say
              </span>
              <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
                Trusted by Product Teams
              </h2>
            </div>

            <div
              className={cn(
                'flex-grow',
                'bg-[var(--color-bg-elevated)]',
                'border border-[var(--color-border)]',
                'p-6 lg:p-8',
                'flex flex-col'
              )}
            >
              {/* Testimonial Content */}
              <div className="flex-grow">
                <blockquote className="text-base md:text-lg text-[var(--color-text-primary)] leading-relaxed mb-6">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center">
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                      {TESTIMONIALS[activeTestimonial].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">
                      {TESTIMONIALS[activeTestimonial].author}
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      {TESTIMONIALS[activeTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={cn(
                      'w-2 h-2 transition-all duration-200',
                      index === activeTestimonial
                        ? 'bg-[var(--color-accent)] w-6'
                        : 'bg-[var(--color-border-strong)] hover:bg-[var(--color-text-muted)]'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
