'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/cn';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]" />
        {/* Accent glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">
              For B2B Startups Scaling Fast
            </span>
          </div>

          {/* Headline */}
          <h1
            className={cn(
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
              'text-[var(--color-text-primary)]',
              'leading-[1.1]'
            )}
          >
            From Bootstrapped to Unicorn{' '}
            <span className="text-gradient">We Grow with You.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            We eliminate the Friction between Design and Development with Scalable AI Design Solutions for Enterprise SaaS Startups
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="min-w-[180px]">
                Let&apos;s Talk
              </Button>
            </Link>
            <Link href="/contact?type=audit">
              <Button variant="secondary" size="lg" className="min-w-[180px]">
                Get a Free Audit
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-[var(--color-text-muted)]">
            Trusted by product teams at Series A-C startups
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[var(--color-border)] flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[var(--color-text-muted)] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
