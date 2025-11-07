import Script from 'next/script';
import ShoesPageContent from '@/components/pages/ShoesPageContent';
import { PRODUCTS } from '@/lib/data';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'Grease Shoes – קטלוג נעליים',
  titleEn: 'Grease Shoes – Women\'s Shoes Catalog',
  descriptionHe: 'גלי מגוון נעלי נשים מעוצבות לקיץ, לערב וליום יום עם התאמה מדויקת למידות.',
  descriptionEn: 'Browse designed women\'s shoes for every occasion with size filters and curated looks.',
  path: '/shoes'
});

const productListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'קטלוג נעלי נשים Grease Shoes',
  url: `${SITE_URL}/shoes`,
  itemListElement: PRODUCTS.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE_URL}/shoes/${product.id}`,
    item: {
      '@type': 'Product',
      name: product.title,
      image: new URL(product.image, SITE_URL).toString(),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'ILS',
        price: product.price.toFixed(2),
        availability: 'https://schema.org/InStock'
      }
    }
  }))
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'נעליים', url: `${SITE_URL}/shoes` }
]);

export default function ShoesPage() {
  return (
    <>
      <Script
        id="shoes-itemlist-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(productListJsonLd)}
      />
      <Script
        id="shoes-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <ShoesPageContent />
    </>
  );
}

