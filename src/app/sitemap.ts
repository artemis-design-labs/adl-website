import type { MetadataRoute } from 'next';

const SITE_URL = 'https://artemisdesignlabs.com';

const ROUTES = [
  { path: '/',                      priority: 1.0,  changeFrequency: 'weekly' as const  },
  { path: '/contact',               priority: 0.9,  changeFrequency: 'monthly' as const },
  { path: '/work',                  priority: 0.8,  changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
