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
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <span className="inline-block text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
            Helping teams at companies you&apos;d recognize
          </h2>
        </header>

        <div
          className="relative overflow-hidden marquee-mask"
          aria-label="Client logos"
          role="region"
        >
          <ul
            className="flex w-max items-center gap-12 md:gap-16 animate-marquee-x"
            aria-hidden="true"
          >
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <li
                key={`${client.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-32 md:w-40"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-full w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300"
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
