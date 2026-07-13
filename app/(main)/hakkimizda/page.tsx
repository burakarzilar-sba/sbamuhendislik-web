import { Metadata } from 'next'
import { HakkimizdaClient } from './hakkimizda-client'

export const metadata: Metadata = {
  title: 'Hakkımızda | Antalya Elektrik Mühendisliği',
  description: 'SBA Elektrik Elektronik Mühendislik’in deneyimi, hizmet yaklaşımı, misyonu ve Antalya’daki elektrik mühendisliği faaliyetleri hakkında bilgi alın.',
  alternates: { canonical: '/hakkimizda/' },
}

export default function HakkimizdaPage() {
  return <HakkimizdaClient />
}
