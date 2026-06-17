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
    <section
      className="bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-8 py-14 md:py-16">
        <p
          id="clients-heading"
          className="font-[var(--font-mono)] text-[length:var(--text-xs)] uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-8"
        >
          TRUSTED BY PRODUCT TEAMS YOU'D RECOGNIZE
        </p>

        {/* SR-only list */}
        <ul className="sr-only">
          {CLIENTS.map((c) => (
            <li key={c.name}>{c.name}</li>
          ))}
        </ul>

        {/* Scrollable logo row */}
        <div className="overflow-hidden marquee-mask" aria-hidden="true">
          <ul className="flex w-max items-center gap-5 md:gap-7 animate-marquee-x">
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <li
                key={`${client.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center h-16 md:h-20 w-44 md:w-52 px-6 py-4 bg-white rounded-xl"
              >
                <Image
                  src={client.src}
                  alt=""
                  width={200}
                  height={80}
                  decoding="async"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
