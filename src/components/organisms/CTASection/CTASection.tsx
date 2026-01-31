'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/cn';

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]">
        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 via-transparent to-[var(--color-accent)]/5" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--color-text-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] mb-8">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
        </div>

        {/* Headline */}
        <h2
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
            'text-[var(--color-text-primary)]',
            'text-balance mb-6'
          )}
        >
          Ready to stop debugging handoffs?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
          Let&apos;s have a conversation about what you&apos;re building.
          No pitch deck. No pressure. Just a real talk about your design challenges.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="min-w-[200px]">
              Book a Conversation
            </Button>
          </Link>
          <Link href="/ui-forge">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Join the UI Forge Waitlist
            </Button>
          </Link>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-sm text-[var(--color-text-muted)]">
          Usually respond within 24 hours
        </p>
      </div>
    </section>
  );
}
