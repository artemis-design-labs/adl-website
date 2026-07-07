'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

type Client = {
  name: string;
  srcLight: string;
  srcDark: string;
};

const CLIENTS: Client[] = [
  { name: 'AT&T',         srcLight: '/images/atnt-light.svg',        srcDark: '/images/atnt-dark.svg'        },
  { name: 'Verizon',      srcLight: '/images/verizon-light.svg',      srcDark: '/images/verizon-dark.svg'      },
  { name: 'NBCUniversal', srcLight: '/images/nbcuniversal-light.svg', srcDark: '/images/nbcuniversal-dark.svg' },
  { name: 'NYCERS',       srcLight: '/images/nycers-light.svg',       srcDark: '/images/nycers-dark.svg'       },
  { name: 'Qualitrol',    srcLight: '/images/qualitrol-light.svg',    srcDark: '/images/qualitrol-dark.svg'    },
];


export function ClientsSection() {
  const { theme } = useTheme();

  return (
    <section
      id="clients"
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-10 md:py-12"
      aria-label="Client logos"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        <ul className="sr-only">
          {CLIENTS.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        <div className="grid grid-cols-4 gap-8 md:gap-12 items-center" aria-hidden="true">
          {CLIENTS.map((client) => (
            <Image
              key={client.name}
              src={theme === 'dark' ? client.srcDark : client.srcLight}
              alt=""
              width={300}
              height={200}
              decoding="async"
              className="w-full h-auto"
              unoptimized
            />
          ))}
        </div>

      </div>
    </section>
  );
}
