'use client';

import { cn } from '@/lib/cn';

const CLIENTS = [
  { name: 'Client 1' },
  { name: 'Client 2' },
  { name: 'Client 3' },
  { name: 'Client 4' },
  { name: 'Client 5' },
];

export function ClientsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
            Who We&apos;ve Worked With
          </h2>
        </header>

        {/* Client Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {CLIENTS.map((client, index) => (
            <div
              key={index}
              className={cn(
                'w-28 h-12 md:w-32 md:h-14',
                'bg-[var(--color-bg-elevated)]',
                'border border-[var(--color-border)]',
                'flex items-center justify-center',
                'text-xs text-[var(--color-text-muted)] uppercase tracking-wider'
              )}
            >
              Logo
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)]">
          Trusted by product teams in Health, Fintech, and Enterprise
        </p>
      </div>
    </section>
  );
}
