import Script from 'next/script';
import Footer from '@/components/Footer';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'גלריית Grease Shoes',
  titleEn: 'Grease Shoes Gallery',
  descriptionHe: 'השראה מהקולקציות האחרונות של נעלי נשים ותיקים מבית Grease Shoes.',
  descriptionEn: 'Visual inspiration from the latest Grease Shoes women\'s shoe and bag collections.',
  path: '/gallery'
});

const IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1200&auto=format&fit=crop'
];

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'גלריית Grease Shoes',
  url: `${SITE_URL}/gallery`,
  hasPart: IMAGES.map((src, index) => ({
    '@type': 'ImageObject',
    name: `תמונה ${index + 1} מתוך גלריית Grease Shoes`,
    contentUrl: src
  }))
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'גלריה', url: `${SITE_URL}/gallery` }
]);

export default function GalleryPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id="gallery-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(galleryJsonLd)}
      />
      <Script
        id="gallery-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold font-display">גלריה</h1>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
                {IMAGES.map((src) => (
                  <div
                    key={src}
                    className="w-full aspect-[3/4] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${src})` }}
                    role="img"
                    aria-label="תמונה מקולקציית Grease Shoes"
                  />
                ))}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

