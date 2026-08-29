import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/login', '/signup', '/cancel', '/success'],
      },
    ],
    sitemap: 'https://frameflow.io/sitemap.xml',
    host: 'https://frameflow.io',
  }
}
