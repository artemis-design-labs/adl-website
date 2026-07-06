'use client';

import Image from 'next/image';

const CLIENTS = [
  { name: 'AT&T',             src: '/images/atnt.svg'         },
  { name: 'Verizon',          src: '/images/verizon.svg'      },
  { name: 'NBCUniversal',     src: '/images/nbcuniversal.svg' },
  { name: 'NYC Public Schools', src: '/images/nycps.svg'      },
  { name: 'NYCERS',           src: '/images/nycers.svg'       },
  { name: 'CMA',              src: '/images/cma.svg'          },
  { name: 'Qualitrol',        src: '/images/qualitrol.svg'    },
  { name: 'Freshop',          src: '/images/freshop.svg'      },
];

const DESCRIPTOR = 'SaaS · Enterprise · Nonprofit · Government · Emerging Tech';

export function ClientsSection() {
  return (
    /*
     * Wandr Studio variant — static logo row, no marquee.
     * Dot-separated descriptor above, logos in a centered flex wrap.
     */
    <section
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-10 md:py-12"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        {/* Descriptor */}
        <p
          id="clients-heading"
          className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-tertiary)] tracking-[0.06em] mb-8"
        >
          {DESCRIPTOR}
        </p>

        {/* SR-only list */}
        <ul className="sr-only">
          {CLIENTS.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        {/* Static logo row */}
        <div
          className="flex flex-wrap items-center gap-3 md:gap-4"
          aria-hidden="true"
        >
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-14 w-36 md:h-16 md:w-44 px-5 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)]"
            >
              <Image
                src={client.src}
                alt=""
                width={160}
                height={64}
                decoding="async"
                className="max-h-full max-w-full w-auto h-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
