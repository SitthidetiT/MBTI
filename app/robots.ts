import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://16personalityth.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/result', '/career-result'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
