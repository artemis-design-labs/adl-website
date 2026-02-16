'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { useSectionVersion } from '@/context/ContentVersionContext';
import { cn } from '@/lib/cn';

// V1 Content (Main Branch)
const V1_CONTENT = {
  eyebrow: 'Get Started',
  headline: 'Ready to stop debugging handoffs?',
  subheadline: "Let's have a conversation about what you're building. No pitch deck. No pressure. Just a real talk about your design challenges.",
  primaryCta: { label: 'Book a Conversation', href: '/contact' },
  secondaryCta: { label: 'UI Forge Waitlist', href: '/ui-forge' },
  trustNote: 'Usually respond within 24 hours',
};

// V2 Content (AI-First Rebrand)
const V2_CONTENT = {
  eyebrow: 'Get Started',
  headline: "Let's Have a Founder-to-Founder Conversation",
  subheadline: "No pitch deck. No pressure. Just a real talk about what you're building, what's slowing you down, and whether we're the right fit. We've been on your side of this call — we know what you're looking for.",
  primaryCta: { label: 'Book a Conversation', href: '/contact' },
  secondaryCta: { label: 'Get a Free Audit', href: '/contact?type=audit' },
  trustNote: 'We respond within 24 hours. Usually faster.',
  additionalNote: 'P.S. If you just want to see what our AI can do with your existing Figma files — no commitment — we offer a free audit. Takes 48 hours. You keep the output either way.',
};

export function CTASection() {
  const version = useSectionVersion('home-cta');
  const content = version === 'v1' ? V1_CONTENT : V2_CONTENT;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-text-primary)] relative">
      {/* Version indicator */}
      <div className="absolute top-4 right-4 z-10">
        <span className={cn(
          'px-2 py-1 text-[10px] font-medium uppercase tracking-wider rounded',
          version === 'v1' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
        )}>
          {version === 'v1' ? 'V1' : 'V2'}
        </span>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <header className="mb-10">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">
            {content.eyebrow}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-bg-primary)] mb-6">
            {content.headline}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
            {content.subheadline}
          </p>
        </header>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={content.primaryCta.href}>
            <Button size="lg" variant="secondary" className="min-w-[180px] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]">
              {content.primaryCta.label}
            </Button>
          </Link>
          <Link href={content.secondaryCta.href}>
            <Button variant="ghost" size="lg" className="min-w-[180px] text-[var(--color-bg-primary)] border-[var(--color-bg-primary)] hover:bg-[var(--color-bg-primary)]/10">
              {content.secondaryCta.label}
            </Button>
          </Link>
        </div>

        {/* Trust note */}
        <p className="mt-10 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
          {content.trustNote}
        </p>

        {/* V2 Additional note */}
        {version === 'v2' && (
          <p className="mt-6 text-sm text-[var(--color-text-muted)] max-w-lg mx-auto">
            {V2_CONTENT.additionalNote}
          </p>
        )}
      </div>
    </section>
  );
}
