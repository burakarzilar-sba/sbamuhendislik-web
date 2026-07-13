import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { BlogDetailClient } from './blog-detail-client'
import { blogPosts } from '@/lib/static-data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Yazı Bulunamadı' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}/`,
      type: 'article',
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()
  return <BlogDetailClient post={post} />
}
