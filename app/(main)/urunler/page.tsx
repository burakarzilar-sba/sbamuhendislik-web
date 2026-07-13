import { Metadata } from 'next'
import { UrunlerClient } from './urunler-client'
import { productCategories } from '@/lib/static-data'

export const metadata: Metadata = {
  title: 'Elektrik Malzemeleri ve Ürünler',
  description: 'Elektrik kabloları, panolar, aydınlatma ve otomasyon ürünlerini inceleyin; ürün ve proje ihtiyaçlarınız için SBA Mühendislik’ten teklif alın.',
  alternates: { canonical: '/urunler/' },
}

export default function UrunlerPage() {
  return <UrunlerClient categories={productCategories} />
}
