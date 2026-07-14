import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Cable,
  CheckCircle,
  ClipboardCheck,
  Factory,
  FileText,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animate'

export const metadata: Metadata = {
  title: 'Elektrik Proje ve Taahhüt Antalya | SBA Mühendislik',
  description:
    'Antalya elektrik proje ve taahhüt hizmetleri. Otel, fabrika, iş yeri, depo ve kamu yapıları için projelendirme, uygulama, test ve anahtar teslim elektrik çözümleri.',
  alternates: {
    canonical:
      'https://sbamuhendislik.com/hizmetler/elektrik-proje-taahhut',
  },
  openGraph: {
    title: 'Elektrik Proje ve Taahhüt | SBA Mühendislik',
    description:
      'Projelendirmeden saha uygulamasına kadar anahtar teslim elektrik mühendisliği ve taahhüt çözümleri.',
    url: 'https://sbamuhendislik.com/hizmetler/elektrik-proje-taahhut',
    type: 'website',
    images: [
      {
        url: '/images/hizmetler/proje-taahhut/elektrik-proje-taahhut-uygulamalari-antalya.png',
        width: 1536,
        height: 1024,
        alt: 'SBA Mühendislik elektrik proje ve taahhüt uygulamaları',
      },
    ],
  },
}

const services = [
  'Saha keşfi ve mevcut tesis analizi',
  'Elektrik ihtiyaçlarının ve güç taleplerinin belirlenmesi',
  'Elektrik iç tesisat projelerinin hazırlanması',
  'Kuvvetli akım ve zayıf akım sistemleri',
  'Elektrik pano ve enerji dağıtım sistemleri',
  'Kablo, kablo tavası ve enerji iletim uygulamaları',
  'Aydınlatma sistemleri',
  'Topraklama ve yıldırımdan korunma sistemleri',
  'Trafo, orta gerilim ve alçak gerilim uygulamaları',
  'Elektrikli araç şarj istasyonu altyapıları',
  'Test, kontrol ve devreye alma çalışmaları',
]

const references = [
  'Galeri Kristal Otel Grubu',
  'Öztiryakiler Endüstriyel Mutfak – Antalya OSB Fabrikası',
  'Reysaş A.Ş. – Antalya Serik Tesisi',
  'ATI Soğuk Oda ve Depolama Tesisi',
  'Seashell Otel – Manavgat Personel Lojmanı',
  'Antalya Serik Adliye Sarayı',
  'Ada Tarım',
  'Prestige Bazaar – Antalya Kundu',
]

const processSteps = [
  {
    title: 'Keşif ve ihtiyaç analizi',
    description:
      'Tesisin mevcut durumu, güç ihtiyacı, kullanım amacı ve saha koşulları incelenir.',
    icon: ClipboardCheck,
  },
  {
    title: 'Projelendirme',
    description:
      'Teknik hesaplamalar, sistem seçimi ve uygulama detayları mühendislik esaslarına göre hazırlanır.',
    icon: FileText,
  },
  {
    title: 'Saha uygulaması',
    description:
      'Projede belirlenen sistemler, uygun malzeme ve profesyonel ekip ile sahaya uygulanır.',
    icon: Wrench,
  },
  {
    title: 'Test ve teslim',
    description:
      'Sistem kontrolleri, ölçümler ve devreye alma işlemlerinin ardından teslim gerçekleştirilir.',
    icon: ShieldCheck,
  },
]

export default function ElektrikProjeTaahhutPage() {
  return (
    <>
      {/* ANA KAPAK BÖLÜMÜ */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden text-white">
  <Image
    src="/images/hizmetler/proje-taahhut/elektrik-proje-taahhut-uygulamalari-antalya.png"
    alt="SBA Mühendislik elektrik proje ve taahhüt uygulamaları"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />

        <div className="absolute inset-0 bg-[#111126]/10" />

        <div className="absolute inset-0 bg-[#111126]/45" />

<div className="absolute inset-0 bg-gradient-to-r from-[#111126]/60 via-[#111126]/35 to-transparent" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-20 md:py-28">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm backdrop-blur-sm">
                <Zap className="h-4 w-4 text-primary" />
                Elektrik Mühendisliği ve Taahhüt
              </div>

              <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Elektrik Proje ve Taahhüt Hizmetleri
              </h1>

              <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
                Proje aşamasından saha uygulamasına, test ve devreye almadan
                anahtar teslim çözümlere kadar güvenli, kaliteli ve
                sürdürülebilir elektrik mühendisliği hizmetleri sunuyoruz.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/iletisim">
                  <Button size="lg" className="w-full gap-2 sm:w-auto">
                    Projeniz İçin Teklif Alın
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/referanslar">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-[#1a1a2e] sm:w-auto"
                  >
                    Referanslarımız
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJE VE TAAHHÜT AÇIKLAMASI */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-4">
          <FadeIn>
            <div>
              <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Proje ve Taahhüt Neden Önemlidir?
              </h2>

              <div className="space-y-5">
                <p className="leading-relaxed text-muted-foreground">
                  Elektrik proje ve taahhüt uygulamaları; teknik detayların,
                  saha koşullarının, yürürlükteki standartların ve işletme
                  ihtiyaçlarının birlikte değerlendirilmesini gerektiren
                  kapsamlı bir süreçtir.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  Projede belirlenen teknik detayların sahada doğru, güvenli
                  ve eksiksiz şekilde uygulanması; tesis güvenliği, sistem
                  sürekliliği, enerji verimliliği ve yatırım maliyetlerinin
                  korunması açısından büyük önem taşımaktadır.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  SBA Mühendislik olarak elektrik projelerinin
                  hazırlanmasından saha uygulamalarına, malzeme seçiminden
                  montaj ve devreye alma süreçlerine kadar tüm aşamalarda
                  mühendislik esaslarına dayalı çözümler sunuyoruz.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  Sahadaki uygulama tecrübemizi dijital proje ve mühendislik
                  çalışmalarımızla birleştirerek oteller, fabrikalar,
                  endüstriyel tesisler, depolama alanları, ticari işletmeler
                  ve kamu yapıları için ihtiyaca özel çözümler geliştiriyoruz.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ÇALIŞMA SÜRECİ */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Proje Aşamasından Uygulamaya
              </h2>

              <p className="mx-auto max-w-2xl text-muted-foreground">
                Elektrik tesisinin tüm aşamalarını tek bir mühendislik
                yaklaşımıyla yönetiyoruz.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <FadeIn key={step.title}>
                  <div className="h-full rounded-xl border bg-background p-6 shadow-sm">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="mb-2 block text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>

                    <h3 className="mb-3 font-display text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* HİZMET KAPSAMI */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 lg:grid-cols-2">
          <FadeIn>
            <div>
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <Cable className="h-6 w-6" />
              </div>

              <h2 className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Hizmet Kapsamımız
              </h2>

              <p className="mb-8 leading-relaxed text-muted-foreground">
                Projelendirme ve uygulama süreçlerini bir bütün olarak ele
                alarak tesisin ihtiyacına uygun anahtar teslim elektrik
                çözümleri sunuyoruz.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-lg border p-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm leading-relaxed">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-2xl bg-[#1a1a2e] p-8 text-white md:p-10">
              <Building2 className="mb-6 h-10 w-10 text-primary" />

              <h2 className="mb-6 font-display text-3xl font-bold">
                Hizmet Verdiğimiz Yapılar
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Oteller ve turizm tesisleri',
                  'Fabrikalar ve üretim tesisleri',
                  'Depo ve soğuk hava tesisleri',
                  'Mağaza ve ticari işletmeler',
                  'Kamu binaları',
                  'Konut, site ve lojmanlar',
                  'Tarım ve üretim tesisleri',
                  'Enerji tesisleri',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REFERANSLAR */}
      <section className="bg-muted/40 py-16 md:py-24">
  <div className="mx-auto max-w-[1200px] px-4">
    <FadeIn>
      <div className="mb-12 text-center">
        <Factory className="mx-auto mb-5 h-10 w-10 text-primary" />

        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Proje ve Uygulama Referanslarımız
        </h2>

        <p className="mx-auto max-w-3xl text-muted-foreground">
          Farklı sektörlerde ve farklı teknik ihtiyaçlara sahip birçok
          projede mühendislik ve uygulama çalışmaları gerçekleştirdik.
        </p>
      </div>
    </FadeIn>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {references.map((reference) => (
        <FadeIn key={reference}>
          <div className="flex h-full items-center gap-3 rounded-xl border bg-background p-5 shadow-sm">
            <CheckCircle className="h-5 w-5 shrink-0 text-primary" />

            <span className="text-sm font-medium leading-relaxed">
              {reference}
            </span>
          </div>
        </FadeIn>
      ))}
    </div>

    <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-primary/20 bg-background px-6 py-5 text-center shadow-sm">
      <p className="text-base font-semibold leading-relaxed text-foreground md:text-lg">
        Burada belirtilen tesisler ve firmalar, gerçekleştirdiğimiz proje ve
        uygulama çalışmalarının yalnızca bir bölümünü oluşturmaktadır.
      </p>
    </div>
  </div>
</section>

      {/* İLETİŞİM ÇAĞRISI */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1000px] px-4">
          <FadeIn>
            <div className="rounded-2xl bg-[#1a1a2e] p-8 text-center text-white md:p-12">
              <Zap className="mx-auto mb-6 h-12 w-12 text-primary" />

              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                Projenizi Birlikte Hayata Geçirelim
              </h2>

              <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-gray-300">
                Elektrik proje çizimi, elektrik taahhüt uygulamaları ve
                anahtar teslim elektrik mühendisliği hizmetleri için bizimle
                iletişime geçebilirsiniz.
              </p>

              <Link href="/iletisim">
                <Button size="lg" className="gap-2">
                  Teklif ve Keşif Talebi Oluşturun
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}