import { Metadata } from 'next'
import { BlogClient } from './blog-client'
import { blogPosts } from '@/lib/static-data'

export const metadata: Metadata = {
  title: 'Elektrik Mühendisliği Blogu',
  description: 'Elektrik projeleri, GES, trafo sistemleri, enerji verimliliği ve elektrik güvenliği hakkında teknik ve anlaşılır içerikler.',
  alternates: { canonical: '/blog/' },
}

export default function BlogPage() {
  return <BlogClient posts={blogPosts} />
}
