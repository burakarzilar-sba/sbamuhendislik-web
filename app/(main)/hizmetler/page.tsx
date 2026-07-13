import { Metadata } from 'next'
import { HizmetlerClient } from './hizmetler-client'

export const metadata: Metadata = {
  title: 'Elektrik Mühendisliği Hizmetleri Antalya',
  description: 'Antalya’da elektrik proje ve taahhüt, GES, trafo, OG enerji nakil hattı, güç artışı, yeni abonelik, topraklama ve paratoner hizmetleri.',
  alternates: { canonical: '/hizmetler/' },
  openGraph: {
    title: 'Elektrik Mühendisliği Hizmetleri Antalya | SBA Mühendislik',
    description: 'Antalya ve çevresinde profesyonel elektrik mühendisliği hizmetleri.',
    url: '/hizmetler/',
  },
}

export default function HizmetlerPage() {
  return <HizmetlerClient />
}
