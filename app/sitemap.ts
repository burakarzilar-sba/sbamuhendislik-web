import { MetadataRoute } from 'next'
import { blogPosts, products } from '@/lib/static-data'

const baseUrl = 'https://sbamuhendislik.com'
const siteUpdatedAt = new Date('2026-07-11T00:00:00.000Z')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: siteUpdatedAt, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/hizmetler/`, lastModified: siteUpdatedAt, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/referanslar/`, lastModified: siteUpdatedAt, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/hakkimizda/`, lastModified: siteUpdatedAt, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/iletisim/`, lastModified: siteUpdatedAt, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: siteUpdatedAt, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/urunler/`, lastModified: siteUpdatedAt, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/urunler/${product.slug}/`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticPages, ...blogPages, ...productPages]
}
