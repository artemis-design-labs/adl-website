'use client';

import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { cn } from '@/lib/cn';

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-bg-primary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <span className="w-2 h-2 bg-[var(--color-accent)]" />
              <span
                className={cn(
                  'text-xs font-medium tracking-[0.15em] uppercase',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                Contact
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)] mb-6 leading-tight">
              Ready to Build Your
              <br />
              <span className="text-[var(--color-accent)]">Design Infrastructure?</span>
            </h2>

            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              Let&apos;s have a conversation about what you&apos;re building. No pitch deck. No pressure.
              Just a real talk about your design challenges and how we can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button size="lg" className="min-w-[180px]">
                  Book a Conversation
                </Button>
              </Link>
              <Link href="/contact?type=audit">
                <Button variant="secondary" size="lg" className="min-w-[180px]">
                  Get a Free Audit
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)]">
              We respond within 24 hours
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div
            className={cn(
              'bg-[var(--color-bg-elevated)]',
              'border border-[var(--color-border)]',
              'p-8 lg:p-10'
            )}
          >
            <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@artemisdesignlabs.com"
                  className="text-base text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  hello@artemisdesignlabs.com
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-2">
                  Location
                </p>
                <p className="text-base text-[var(--color-text-secondary)]">
                  Remote-first team
                  <br />
                  Working across US & EU timezones
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)]">
                <p className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-muted)] mb-3">
                  What to Expect
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                    15-minute discovery call
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                    Free design system audit
                  </li>
                  <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                    Custom proposal within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
