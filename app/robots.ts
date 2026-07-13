import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/giris/', '/urunler/sepet/'],
      },
    ],
    sitemap: 'https://sbamuhendislik.com/sitemap.xml',
    host: 'https://sbamuhendislik.com',
  }
}
