'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

const ADMIN_EMAIL = 'itadmin@artemisdesignlabs.com';

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)] overflow-hidden"
    >
      {/* Ambient violet wash */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-1/2 h-[120%] pointer-events-none opacity-50"
        style={{ background: 'var(--gradient-subtle)' }}
      />

      <div className="relative max-w-[var(--container-wide)] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Pitch */}
          <div className="lg:col-span-7 space-y-7">
            <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              › get started
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)] leading-[1.05]">
              Let&apos;s have a
              <br />
              <span className="text-[var(--color-accent)]">founder-to-founder</span>
              <br />
              conversation.
            </h2>

            <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              No pitch deck. No pressure. Just a real talk about what you&apos;re building, what&apos;s
              slowing you down, and whether we&apos;re the right fit. We&apos;ve been on your side of
              this call — we know what you&apos;re looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link
                href="/contact"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
                  'bg-[var(--color-accent)] text-[var(--color-text-on-accent)]',
                  'font-medium text-base',
                  'hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-glow)]',
                  'active:translate-y-px transition-all duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-secondary)]'
                )}
              >
                Book a Conversation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact?type=audit"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md',
                  'border border-[var(--color-border-strong)] text-[var(--color-text-primary)]',
                  'font-medium text-base',
                  'hover:bg-[var(--color-bg-hover)] hover:border-[var(--color-accent)]',
                  'transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-secondary)]'
                )}
              >
                Get a Free Audit
              </Link>
            </div>

            <p className="pt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-tertiary)]">
              We respond within 24 hours · usually faster
            </p>
          </div>

          {/* Right — Contact card */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                'p-8 lg:p-10 rounded-2xl',
                'bg-[var(--color-bg-elevated)] border border-[var(--color-border)]',
                'shadow-[var(--shadow-md)]'
              )}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] tracking-[-0.01em] mb-7">
                Get in touch
              </h3>

              <div className="space-y-7">
                <div>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${ADMIN_EMAIL}`}
                    className="inline-flex items-center gap-2 text-base text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors underline-offset-4 hover:underline"
                  >
                    {ADMIN_EMAIL}
                  </a>
                </div>

                <div>
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-2">
                    Team
                  </p>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                    Remote-first.
                    <br />
                    Working across US &amp; EU timezones.
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--color-border)]">
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] mb-4">
                    What to expect
                  </p>
                  <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                    {[
                      '15-minute discovery call',
                      'Free design system audit within 48 hours',
                      'Custom proposal — yours to keep either way',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
