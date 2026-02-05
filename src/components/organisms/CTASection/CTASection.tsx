'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6">
          Ready to stop debugging handoffs?
        </h2>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10">
          Let&apos;s have a conversation about what you&apos;re building.
          No pitch deck. No pressure. Just a real talk about your design challenges.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact">
            <Button size="lg" className="min-w-[180px]">
              Book a Conversation
            </Button>
          </Link>
          <Link href="/ui-forge">
            <Button variant="secondary" size="lg" className="min-w-[180px]">
              UI Forge Waitlist
            </Button>
          </Link>
        </div>

        {/* Trust note */}
        <p className="mt-10 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          Usually respond within 24 hours
        </p>
      </div>
    </section>
  );
}
