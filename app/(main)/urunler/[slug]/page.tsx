import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { ProductDetailClient } from './product-detail-client'
import { products } from '@/lib/static-data'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return { title: 'Ürün Bulunamadı' }
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/urunler/${product.slug}/` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/urunler/${product.slug}/`,
      type: 'website',
    },
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const related = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4)
  return <ProductDetailClient product={product} related={related} />
}
