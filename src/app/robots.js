import { siteOrigin } from '@/lib/contact';

/**
 * @type {() => import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: siteOrigin + 'sitemap.xml',
  };
}
