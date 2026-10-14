import type { MetadataRoute } from 'next';
import { INDUSTRIES, industryHref } from '@/lib/industries';

const SITE_URL = 'https://artemisdesignlabs.com';

// Only indexable, finished routes belong here. /publication is deliberately
// absent — it ships `robots: { index: false }` until it has real content.
const ROUTES = [
  { path: '/',                      priority: 1.0,  changeFrequency: 'weekly' as const  },
  { path: '/services',              priority: 0.9,  changeFrequency: 'monthly' as const },
  { path: '/contact',               priority: 0.9,  changeFrequency: 'monthly' as const },
  { path: '/work',                  priority: 0.8,  changeFrequency: 'monthly' as const },
  { path: '/hands-ai',              priority: 0.7,  changeFrequency: 'yearly' as const  },
];

// Industry pages join the sitemap once they have real copy; placeholder
// shells are noindex and stay out (see src/lib/industries.ts).
const INDUSTRY_ROUTES = INDUSTRIES.filter((i) => i.content).map((i) => ({
  path: industryHref(i.slug),
  priority: 0.8,
  changeFrequency: 'monthly' as const,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...ROUTES, ...INDUSTRY_ROUTES].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
