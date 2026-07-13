import { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'Antalya Elektrik Mühendisi | Proje, GES, Trafo ve OG',
  description: 'Antalya’da elektrik proje ve taahhüt, GES kurulumu, trafo bakım ve kurulumu, OG işletme sorumluluğu, güç artışı ve periyodik kontrol hizmetleri.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Antalya Elektrik Mühendisi | SBA Mühendislik',
    description: 'Antalya’da elektrik proje, GES, trafo, OG ve periyodik kontrol hizmetleri.',
    url: '/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
