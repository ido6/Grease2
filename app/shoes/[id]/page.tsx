import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/lib/data';
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildProductJsonLd,
  jsonLdScript,
  SITE_URL
} from '@/lib/seo-config';

const heelLabels = {
  flat: 'שטוח',
  mid: 'בינוני',
  high: 'גבוה'
} as const;

const collectionLabels = {
  summer: 'קיץ',
  classic: 'קלאסי',
  evening: 'ערב'
} as const;

const colorLabels: Record<string, string> = {
  yellow: 'צהוב',
  white: 'לבן',
  black: 'שחור',
  brown: 'חום',
  red: 'אדום',
  beige: 'בז׳',
  gold: 'זהב',
  tan: 'טאן',
  pink: 'ורוד',
  silver: 'כסף',
  blue: 'כחול',
  green: 'ירוק',
  multicolor: 'רב צבעים',
  turquoise: 'טורקז',
  burgundy: 'ארגמן'
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id.toString() }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === Number(params.id));
  if (!product) {
    return buildPageMetadata({
      titleHe: 'מוצר לא נמצא – Grease Shoes',
      titleEn: 'Product Not Found – Grease Shoes',
      descriptionHe: 'המוצר שחיפשת אינו זמין באתר.',
      descriptionEn: 'The requested product could not be found on Grease Shoes.',
      path: `/shoes/${params.id}`,
      index: false
    });
  }

  const titleHe = `${product.title} – Grease Shoes`;
  const titleEn = `${product.title} – Grease Shoes`; // Placeholder English until localized copy provided
  const descriptionHe = `מידע מלא על ${product.title} מתוך קולקציית Grease Shoes.`;
  const descriptionEn = `Discover details for ${product.title} from the Grease Shoes collection.`;
  const imageUrl = new URL(product.image, SITE_URL).toString();

  return buildPageMetadata({
    titleHe,
    titleEn,
    descriptionHe,
    descriptionEn,
    path: `/shoes/${product.id}`,
    image: imageUrl
  });
}

export default function ShoeDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  const productJsonLd = buildProductJsonLd(product!);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'דף הבית', url: SITE_URL },
    { name: 'נעליים', url: `${SITE_URL}/shoes` },
    { name: product!.title, url: `${SITE_URL}/shoes/${product!.id}` }
  ]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id={`shoe-${product!.id}-schema`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(productJsonLd)}
      />
      <Script
        id={`shoe-${product!.id}-breadcrumb`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8">
              <Link href="/shoes" className="flex items-center gap-2 text-text-light dark:text-text-dark hover:font-bold transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
                <span className="font-body">חזרה לקטלוג</span>
              </Link>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  className="aspect-[3/4] w-full bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url(${product!.image})` }}
                  role="img"
                  aria-label={`${product!.title} – תצוגת מוצר`}
                />

                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl md:text-4xl font-bold font-display">{product!.title}</h1>
                  <p className="text-2xl font-bold text-primary font-display">₪{product!.price.toFixed(2)}</p>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h2 className="font-bold mb-2 font-display">מידות זמינות</h2>
                      <div className="flex flex-wrap gap-2" aria-label="מידות זמינות">
                        {product!.size.map((s) => (
                          <span key={s} className="px-4 py-2 bg-section-light dark:bg-section-dark rounded-lg font-body">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="font-bold mb-2 font-display">פרטי המוצר</h2>
                      <dl className="grid grid-cols-2 gap-3 font-body">
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">צבע:</dt>
                          <dd>{colorLabels[product!.color] || product!.color}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">גובה עקב:</dt>
                          <dd>{heelLabels[product!.heel]}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-600 dark:text-gray-400">קולקציה:</dt>
                          <dd>{collectionLabels[product!.collection as keyof typeof collectionLabels] || product!.collection}</dd>
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

