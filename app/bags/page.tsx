import Script from 'next/script';
import BagsPageContent from '@/components/pages/BagsPageContent';
import { BAGS } from '@/lib/data';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'Grease Shoes – קטלוג תיקים',
  titleEn: 'Grease Shoes – Designer Bags Collection',
  descriptionHe: 'תיקי נשים מעוצבים מעור וקליעה בעבודת יד, לבחירה בכל הגדלים והצבעים.',
  descriptionEn: 'Explore handcrafted women\'s bags in leather and woven textures with flexible sizing.',
  path: '/bags'
});

const bagsListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'קטלוג תיקים Grease Shoes',
  url: `${SITE_URL}/bags`,
  itemListElement: BAGS.map((bag, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${SITE_URL}/bags/${bag.id}`,
    item: {
      '@type': 'Product',
      name: bag.title,
      image: bag.image,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'ILS',
        price: bag.price.toFixed(2),
        availability: 'https://schema.org/InStock'
      }
    }
  }))
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'תיקים', url: `${SITE_URL}/bags` }
]);

export default function BagsPage() {
  return (
    <>
      <Script
        id="bags-itemlist-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(bagsListJsonLd)}
      />
      <Script
        id="bags-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <BagsPageContent />
    </>
  );
}

