SBA WEB FINAL - Abacus bağımsız statik site

Bu paket Abacus, Prisma, veritabanı ve admin panel bağımlılığı kaldırılmış temiz statik Next.js sürümüdür.
Hostinger Premium/Business üzerinde public_html içine yüklenerek çalışır.

1) Klasörü VS Code ile açın.
2) Terminal açıp çalıştırın:

npm install --legacy-peer-deps
npm run build

3) Başarılı olursa proje içinde out klasörü oluşur.
4) Hostinger > File Manager > public_html içine girin.
5) Eski dosyaları yedekleyin/silin.
6) out klasörünün kendisini değil, out klasörünün İÇİNDEKİ tüm dosya ve klasörleri public_html içine yükleyin.

Güncelleme yapmak için:
- Yazıları/resimleri VS Code içinde değiştirin.
- Tekrar npm run build çalıştırın.
- Yeni oluşan out içeriğini Hostinger public_html içine yükleyin.

Önemli:
- .env dosyası yoktur ve gerekmiyor.
- DATABASE_URL, ABACUSAI_API_KEY gibi gizli bilgiler bu paketten çıkarıldı.
- Admin panel ve form API devre dışıdır.
- İletişim ve teklif formları kullanıcının e-posta uygulamasını açacak şekilde mailto olarak ayarlandı.
- Blog/ürün içerikleri lib/static-data.ts dosyasından düzenlenir.
- Firma sabitleri lib/constants.ts dosyasından düzenlenir.
