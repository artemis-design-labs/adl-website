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
];


export function ClientsSection() {
  const { theme } = useTheme();

  return (
    /*
     * Wandr Studio variant — static logo row, no marquee.
     * Dot-separated descriptor above, logos in a centered flex wrap.
     */
    <section
      id="clients"
      className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border)] py-10 md:py-12"
      aria-label="Client logos"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-10 lg:px-20">

        {/* SR-only list */}
        <ul className="sr-only">
          {CLIENTS.map((c) => <li key={c.name}>{c.name}</li>)}
        </ul>

        {/* Logo row */}
        <div
          className="flex items-center gap-8 md:gap-12"
          aria-hidden="true"
        >
          {CLIENTS.map((client) => (
            <div key={client.name} className="w-[180px] h-10 flex items-center justify-center">
              <Image
                src={theme === 'dark' ? client.srcDark : client.srcLight}
                alt=""
                width={180}
                height={40}
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
