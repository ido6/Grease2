import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { BAGS } from '@/lib/data';
import {
  buildBagJsonLd,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  jsonLdScript,
  SITE_URL
} from '@/lib/seo-config';

const sizeLabels = {
  small: 'קטן',
  medium: 'בינוני',
  large: 'גדול'
} as const;

const materialLabels: Record<string, string> = {
  leather: 'עור',
  woven: 'קלוע',
  fabric: 'בד'
};

const colorLabels: Record<string, string> = {
  brown: 'חום',
  beige: 'בז׳',
  black: 'שחור'
};

export function generateStaticParams() {
  return BAGS.map((bag) => ({ id: bag.id.toString() }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const bag = BAGS.find((p) => p.id === Number(params.id));
  if (!bag) {
    return buildPageMetadata({
      titleHe: 'מוצר לא נמצא – Grease Shoes',
      titleEn: 'Product Not Found – Grease Shoes',
      descriptionHe: 'התיק שחיפשת אינו זמין באתר.',
      descriptionEn: 'The requested bag could not be found on Grease Shoes.',
      path: `/bags/${params.id}`,
      index: false
    });
  }

  const titleHe = `${bag.title} – Grease Shoes`;
  const titleEn = `${bag.title} – Grease Shoes`; // English copy placeholder
  const descriptionHe = `פרטים על ${bag.title} מתוך קולקציית התיקים של Grease Shoes.`;
  const descriptionEn = `Discover ${bag.title} from the Grease Shoes bag collection.`;

  return buildPageMetadata({
    titleHe,
    titleEn,
    descriptionHe,
    descriptionEn,
    path: `/bags/${bag.id}`,
    image: bag.image
  });
}

export default function BagDetailPage({ params }: { params: { id: string } }) {
  const bag = BAGS.find((p) => p.id === Number(params.id));

  if (!bag) {
    notFound();
  }

  const productJsonLd = buildBagJsonLd(bag!);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'דף הבית', url: SITE_URL },
    { name: 'תיקים', url: `${SITE_URL}/bags` },
    { name: bag!.title, url: `${SITE_URL}/bags/${bag!.id}` }
  ]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id={`bag-${bag!.id}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(productJsonLd)}
      />
      <Script
        id={`bag-${bag!.id}-breadcrumb`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8">
              <Link href="/bags" className="flex items-center gap-2 text-text-light dark:text-text-dark hover:font-bold transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
                <span className="font-body">חזרה לקטלוג</span>
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="aspect-[3/4] w-full bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${bag!.image})` }}
                  role="img"
                  aria-label={`${bag!.title} – תצוגת מוצר`}
                />

                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl md:text-4xl font-bold font-display">{bag!.title}</h1>
                  <p className="text-2xl font-bold text-primary font-display">₪{bag!.price.toFixed(2)}</p>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="font-bold mb-2 font-display">מידת התיק</h2>
                      <div className="inline-block">
                        <span className="px-4 py-2 bg-section-light dark:bg-section-dark rounded-lg font-body">
                          {sizeLabels[bag!.size]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold mb-2 font-display">פרטי המוצר</h2>
                      <dl className="grid grid-cols-2 gap-3 font-body">
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">צבע:</dt>
                          <dd>{colorLabels[bag!.color] || bag!.color}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">חומר:</dt>
                          <dd>{materialLabels[bag!.material] || bag!.material}</dd>
                        </div>
                      </dl>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full px-6 py-4 bg-primary text-text-light rounded-lg font-bold text-center hover:brightness-90 transition-all font-display"
                    >
                      צרי קשר לרכישה
                    </Link>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

