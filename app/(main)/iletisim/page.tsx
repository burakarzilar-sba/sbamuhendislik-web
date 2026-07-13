import { Metadata } from 'next'
import { IletisimClient } from './iletisim-client'

export const metadata: Metadata = {
  title: 'İletişim ve Teklif | Antalya',
  description: 'Antalya Kepez’de elektrik mühendisliği, GES, trafo, proje ve taahhüt hizmetleri için SBA Mühendislik ile iletişime geçin ve teklif alın.',
  alternates: { canonical: '/iletisim/' },
  openGraph: {
    title: 'SBA Mühendislik İletişim | Antalya',
    description: 'Elektrik mühendisliği hizmetleri için bize ulaşın.',
    url: '/iletisim/',
  },
}

export default function IletisimPage() {
  return <IletisimClient />
}
