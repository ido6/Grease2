import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo-config';
import { PRODUCTS, BAGS } from '@/lib/data';

const staticRoutes = [
  '/',
  '/about',
  '/shoes',
  '/bags',
  '/gallery',
  '/contact',
  '/privacy',
  '/privacy-settings',
  '/data-request'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
    alternates: {
      languages: {
        'he-IL': `${SITE_URL}${path}`,
        'en-US': `${SITE_URL}${path}`
      }
    }
  }));

  const shoeEntries: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${SITE_URL}/shoes/${product.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
    alternates: {
      languages: {
        'he-IL': `${SITE_URL}/shoes/${product.id}`,
        'en-US': `${SITE_URL}/shoes/${product.id}`
      }
    }
  }));

  const bagEntries: MetadataRoute.Sitemap = BAGS.map((bag) => ({
    url: `${SITE_URL}/bags/${bag.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
    alternates: {
      languages: {
        'he-IL': `${SITE_URL}/bags/${bag.id}`,
        'en-US': `${SITE_URL}/bags/${bag.id}`
      }
    }
  }));

  return [...staticEntries, ...shoeEntries, ...bagEntries];
}

