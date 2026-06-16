import type { MetadataRoute } from 'next';

const SITE_URL = 'https://artemisdesignlabs.com';

const ROUTES = [
  { path: '/',                      priority: 1.0,  changeFrequency: 'weekly' as const  },
  { path: '/about',                 priority: 0.8,  changeFrequency: 'monthly' as const },
  { path: '/contact',               priority: 0.9,  changeFrequency: 'monthly' as const },
  { path: '/pricing',               priority: 0.7,  changeFrequency: 'monthly' as const },
  { path: '/work',                  priority: 0.8,  changeFrequency: 'monthly' as const },
  { path: '/our-ai',                priority: 0.7,  changeFrequency: 'monthly' as const },
  { path: '/hands-ai',              priority: 0.6,  changeFrequency: 'yearly' as const  },
  { path: '/insight',               priority: 0.5,  changeFrequency: 'monthly' as const },
  { path: '/my-project-inbox',      priority: 0.5,  changeFrequency: 'yearly' as const  },
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
