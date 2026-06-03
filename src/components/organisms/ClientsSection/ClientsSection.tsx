'use client';

import Image from 'next/image';

const CLIENTS = [
  { name: 'AT&T',      src: '/images/AT&T-Logo.png' },
  { name: 'Verizon',   src: '/images/Verizon-logo.png' },
  { name: 'NBCU',      src: '/images/NBCU-logo.png' },
  { name: 'NYCPS',     src: '/images/NYCPS-logo.png' },
  { name: 'NYCERS',    src: '/images/NYCERS-logo.png' },
  { name: 'CMA',       src: '/images/CMA-logo.png' },
  { name: 'Qualitrol', src: '/images/Qualitrol-logo.png' },
  { name: 'Freshop',   src: '/images/Freshop-logo.png' },
];

export function ClientsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]" aria-labelledby="clients-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <span className="inline-block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-3">
            › our clients
          </span>
          <h2 id="clients-heading" className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
            Helping teams at companies you&apos;d recognize
          </h2>
        </header>

        {/* Screen-reader-only list of clients so assistive tech gets the
            real content while the visible marquee (which is doubled for
            the seamless loop) is hidden from AT to avoid duplicate reads. */}
        <ul className="sr-only">
          {CLIENTS.map((c) => (
            <li key={c.name}>{c.name}</li>
          ))}
        </ul>

        <div className="relative overflow-hidden marquee-mask" aria-hidden="true">
          <ul className="flex w-max items-center gap-5 md:gap-8 animate-marquee-x">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <li
                key={`${client.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-28 md:h-32 w-48 md:w-60"
              >
                <Image
                  src={client.src}
                  alt=""
                  width={280}
                  height={140}
                  className="max-h-full w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-center text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)]">
          Trusted by product teams in Health, Fintech, and Enterprise
        </p>
      </div>
    </section>
  );
}
