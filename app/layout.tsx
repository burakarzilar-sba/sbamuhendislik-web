import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { Providers } from './providers'
import type { Metadata } from 'next'
import {
  COMPANY_EMAIL,
  COMPANY_FULL_ADDRESS,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_SHORT,
} from '@/lib/constants'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

const siteUrl = 'https://sbamuhendislik.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SBA Mühendislik | Antalya Elektrik Mühendisi',
    template: '%s | SBA Mühendislik',
  },
  description:
    'Antalya’da elektrik proje ve taahhüt, GES kurulumu, trafo bakım ve kurulumu, OG işletme sorumluluğu, güç artışı ve periyodik kontrol hizmetleri.',
  applicationName: COMPANY_SHORT,
  authors: [{ name: COMPANY_NAME, url: siteUrl }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  category: 'Elektrik Mühendisliği',
  keywords: [
    'Antalya elektrik mühendisi',
    'Antalya elektrik mühendisliği',
    'Antalya elektrik proje',
    'elektrik taahhüt Antalya',
    'GES kurulumu Antalya',
    'trafo bakımı Antalya',
    'OG işletme sorumluluğu Antalya',
    'topraklama ölçümü Antalya',
    'paratoner kontrolü Antalya',
    'güç artışı Antalya',
    'SBA Mühendislik',
  ],
  formatDetection: { telephone: false, address: false, email: false },
  openGraph: {
    title: 'SBA Mühendislik | Antalya Elektrik Mühendisi',
    description: 'Antalya’da elektrik proje, GES, trafo, OG ve periyodik kontrol hizmetleri.',
    url: siteUrl,
    siteName: COMPANY_SHORT,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SBA Mühendislik Antalya elektrik mühendisliği hizmetleri' }],
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBA Mühendislik | Antalya Elektrik Mühendisi',
    description: 'Elektrik proje, GES, trafo, OG ve periyodik kontrol çözümleri.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const phone = COMPANY_PHONE.replace(/\s+/g, '')
const addressParts = COMPANY_FULL_ADDRESS.split(' Kepez/Antalya')

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${siteUrl}/#business`,
  name: COMPANY_NAME,
  alternateName: COMPANY_SHORT,
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}/og-image.png`,
  telephone: phone,
  email: COMPANY_EMAIL,
  description:
    'Antalya’da elektrik proje ve taahhüt, GES kurulumu, trafo bakım ve kurulumu, OG işletme sorumluluğu, güç artışı, topraklama ve paratoner hizmetleri sunan elektrik mühendisliği firması.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: addressParts[0],
    addressLocality: 'Kepez',
    addressRegion: 'Antalya',
    addressCountry: 'TR',
  },
  areaServed: [
    { '@type': 'City', name: 'Antalya' },
    { '@type': 'AdministrativeArea', name: 'Burdur' },
    { '@type': 'AdministrativeArea', name: 'Isparta' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: phone,
    contactType: 'customer service',
    areaServed: 'TR',
    availableLanguage: ['Turkish'],
  },
  knowsAbout: [
    'Elektrik proje ve taahhüt',
    'Güneş enerji sistemleri',
    'Trafo kurulumu ve bakımı',
    'OG işletme sorumluluğu',
    'Elektrik güç artışı',
    'Topraklama ve paratoner ölçümü',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: COMPANY_SHORT,
  inLanguage: 'tr-TR',
  publisher: { '@id': `${siteUrl}/#business` },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Providers>{children}</Providers>
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
