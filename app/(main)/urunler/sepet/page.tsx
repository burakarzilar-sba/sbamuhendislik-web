import { Metadata } from 'next'
import { SepetClient } from './sepet-client'

export const metadata: Metadata = {
  title: 'Sepet',
  robots: { index: false, follow: false },
}

export default function SepetPage() {
  return <SepetClient />
}
