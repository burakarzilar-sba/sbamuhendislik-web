export const productCategories = [
  {
    id: 'kablolar', name: 'Kablolar', slug: 'kablolar', description: 'Elektrik kabloları ve iletkenler', createdAt: '2026-01-01T00:00:00.000Z',
    products: [
      { id: 'nyy-3x2-5-kablo', name: 'NYY 3x2.5mm² Kablo', slug: 'nyy-3x2-5-kablo', description: 'Yüksek kaliteli yer altı kablosu, bina içi ve dışı kullanım için uygun.', price: 45, imageUrl: null, categoryId: 'kablolar', featured: true, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: 'nym-3x1-5-kablo', name: 'NYM 3x1.5mm² Kablo', slug: 'nym-3x1-5-kablo', description: 'Bina içi tesisat kablosu, konut ve ticari binalar için ideal.', price: 28, imageUrl: null, categoryId: 'kablolar', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: 'nhxmh-5x2-5-kablo', name: 'NHXMH 5x2.5mm² Kablo', slug: 'nhxmh-5x2-5-kablo', description: 'Halojensiz, alev iletmeyen güvenlik kablosu.', price: 85, imageUrl: null, categoryId: 'kablolar', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
    ],
  },
  {
    id: 'panolar', name: 'Panolar', slug: 'panolar', description: 'Elektrik panoları ve dağıtım tabloları', createdAt: '2026-01-01T00:00:00.000Z',
    products: [
      { id: '24-modul-siva-alti-pano', name: '24 Modül Sıva Altı Pano', slug: '24-modul-siva-alti-pano', description: 'Kompakt tasarımlı 24 modüllü sıva altı dağıtım panosu.', price: 320, imageUrl: null, categoryId: 'panolar', featured: true, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: '36-modul-siva-ustu-pano', name: '36 Modül Sıva Üstü Pano', slug: '36-modul-siva-ustu-pano', description: 'Kolay montaj için 36 modüllü sıva üstü pano.', price: 280, imageUrl: null, categoryId: 'panolar', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
    ],
  },
  {
    id: 'aydinlatma', name: 'Aydınlatma', slug: 'aydinlatma', description: 'LED ve endüstriyel aydınlatma ürünleri', createdAt: '2026-01-01T00:00:00.000Z',
    products: [
      { id: 'led-panel-60x60-40w', name: 'LED Panel 60x60 40W', slug: 'led-panel-60x60-40w', description: 'Ofis ve ticari alanlar için yüksek verimli LED panel aydınlatma.', price: 185, imageUrl: null, categoryId: 'aydinlatma', featured: true, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: 'led-projektor-100w', name: 'LED Projektör 100W', slug: 'led-projektor-100w', description: 'Dış mekan LED projektör, IP65 koruma sınıfı.', price: 350, imageUrl: null, categoryId: 'aydinlatma', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
    ],
  },
  {
    id: 'otomasyon', name: 'Otomasyon', slug: 'otomasyon', description: 'Akıllı ev ve endüstriyel otomasyon ürünleri', createdAt: '2026-01-01T00:00:00.000Z',
    products: [
      { id: 'akilli-priz-wifi', name: 'Akıllı Priz Wi-Fi', slug: 'akilli-priz-wifi', description: 'Uzaktan kontrol edilebilen Wi-Fi bağlantılı akıllı priz.', price: 120, imageUrl: null, categoryId: 'otomasyon', featured: true, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: 'akilli-termostat', name: 'Akıllı Termostat', slug: 'akilli-termostat', description: 'Programlanabilir akıllı termostat, enerji tasarrufu sağlar.', price: 450, imageUrl: null, categoryId: 'otomasyon', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
      { id: 'hareket-sensoru', name: 'Hareket Sensörü', slug: 'hareket-sensoru', description: 'Tavan tipi PIR hareket sensörü, aydınlatma otomasyonu için.', price: 75, imageUrl: null, categoryId: 'otomasyon', featured: false, inStock: true, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z' },
    ],
  },
]

export const products = productCategories.flatMap((category) => category.products.map((product) => ({ ...product, category })))

export const blogPosts = [
  { id: 'gunes-enerji-sistemleri-yatirim-rehberi', title: 'Güneş Enerji Sistemleri: Yatırım Rehberi', slug: 'gunes-enerji-sistemleri-yatirim-rehberi', excerpt: 'GES yatırımı düşünenler için kapsamlı rehber. Maliyet analizi, geri dönüş süresi ve dikkat edilmesi gerekenler.', category: 'Enerji', imageUrl: '/images/saha/antalya-ges-elektrik-panosu.webp', createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z', content: `<h2>Güneş Enerjisi Neden Önemli?</h2><p>Türkiye, coğrafi konumu itibarıyla güneş enerjisi potansiyeli yüksek bir ülkedir. Özellikle Akdeniz bölgesi, GES yatırımları için idealdir.</p><h2>GES Yatırım Maliyetleri</h2><p>GES sistemlerinde maliyet; panel, inverter, konstrüksiyon, proje ve uygulama detaylarına göre değişir.</p><h2>Dikkat Edilmesi Gerekenler</h2><ul><li>Çatının taşıma kapasitesi kontrol edilmelidir</li><li>Gölgeleme analizi yapılmalıdır</li><li>Lisanslama ve dağıtım başvuru süreçleri doğru yönetilmelidir</li><li>Kaliteli panel ve inverter seçimi önemlidir</li></ul><p>SBA Mühendislik olarak, GES projelerinizde fizibilite çalışmasından kuruluma kadar tüm süreçleri yönetiyoruz.</p>` },
  { id: 'akilli-ev-sistemleri-enerji-tasarrufu', title: 'Akıllı Ev Sistemleri ile Enerji Tasarrufu', slug: 'akilli-ev-sistemleri-enerji-tasarrufu', excerpt: 'Akıllı ev teknolojileri ile enerji tüketiminizi daha kontrollü hale getirebilirsiniz.', category: 'Teknoloji', imageUrl: '/images/saha/antalya-sigorta-dagitim-panosu.webp', createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z', content: `<h2>Akıllı Ev Nedir?</h2><p>Akıllı ev, aydınlatma, ısıtma-soğutma, güvenlik ve enerji yönetimi gibi sistemlerin otomatik ve uzaktan kontrol edilebilmesidir.</p><h2>Popüler Akıllı Ev Çözümleri</h2><ul><li>Akıllı aydınlatma kontrolü</li><li>Otomatik perde ve jaluzi sistemleri</li><li>Akıllı termostat ve klima kontrolü</li><li>Güvenlik kameraları ve alarm sistemleri</li></ul>` },
  { id: 'elektrik-tesisatinda-guvenlik-ipuclari', title: 'Elektrik Tesisatında Güvenlik İpuçları', slug: 'elektrik-tesisatinda-guvenlik-ipuclari', excerpt: 'Ev ve iş yerlerinde elektrik güvenliği için bilmeniz gereken temel kurallar ve önlemler.', category: 'Güvenlik', imageUrl: null, createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z', content: `<h2>Elektrik Güvenliği Neden Önemli?</h2><p>Elektrik tesisatlarında güvenlik, can ve mal güvenliği açısından kritik öneme sahiptir.</p><h2>Temel Güvenlik Kuralları</h2><ul><li>Kaçak akım rölesi kullanılmalıdır</li><li>Topraklama sistemi kontrol edilmelidir</li><li>Kablolar düzenli olarak kontrol edilmelidir</li><li>Aşırı yük bindirilmemelidir</li></ul>` },
  { id: 'trafo-bakimi-neden-onemli', title: 'Trafo Bakımı: Neden Önemli?', slug: 'trafo-bakimi-neden-onemli', excerpt: 'Trafoların düzenli bakımı enerji verimliliği ve güvenlik açısından kritik önem taşır.', category: 'Enerji', imageUrl: '/images/saha/antalya-yagli-tip-trafo-bakimi.webp', createdAt: '2026-01-01T00:00:00.000Z', updatedAt: '2026-01-01T00:00:00.000Z', content: `<h2>Trafo Bakımının Önemi</h2><p>Trafolar, elektrik dağıtım sistemlerinin en kritik bileşenlerindendir. Düzenli bakım yapılmadığında arıza riski artar ve enerji kayıpları yükselir.</p><h2>Bakım Süreci</h2><ul><li>Yağ seviyesi ve kalite kontrolü</li><li>Sıcaklık ölçümleri</li><li>İzolasyon direnci testleri</li><li>Bağlantı noktaları kontrolü</li><li>Koruma sistemleri testi</li></ul>` },
]
