import { Metadata } from 'next'
import { ReferanslarClient } from './referanslar-client'

export const metadata: Metadata = {
  title: 'Elektrik Proje ve Taahhüt Referansları',
  description: 'SBA Mühendislik’in otel, sanayi tesisi, kamu kurumu ve ticari işletmelerde gerçekleştirdiği elektrik mühendisliği çalışmalarını inceleyin.',
  alternates: { canonical: '/referanslar/' },
}

export default function ReferanslarPage() {
  return <ReferanslarClient />
}
