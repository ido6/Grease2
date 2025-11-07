import type { Metadata } from 'next';
import type { Product, Bag } from '@/lib/data';

export const SITE_URL = 'https://grease-shoes.vercel.app';
export const DEFAULT_LOCALE = 'he-IL';
export const ALT_LOCALE = 'en-US';

export const BUSINESS_INFO = {
  nameHe: 'Grease Shoes',
  nameEn: 'Grease Shoes',
  descriptionHe: 'חנות בוטיק לנעלי נשים מעוצבות ותיקים יוקרתיים, עם שירות ישראלי חם.',
  descriptionEn: 'Boutique women\'s shoes and bags designed in Israel with premium comfort.',
  phone: '+972-3-555-1234',
  email: 'info@grease-shoes.co.il',
  streetAddressHe: 'דיזנגוף 123',
  cityHe: 'תל אביב',
  postalCode: '62345',
  countryCode: 'IL',
  coordinates: {
    latitude: 32.08088,
    longitude: 34.78057
  }
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/Photos/GREASELOGO.png`;

type PageSeoInput = {
  titleHe: string;
  titleEn?: string;
  descriptionHe: string;
  descriptionEn?: string;
  path?: string;
  image?: string;
  index?: boolean;
};

export function mergeTitles(titleHe: string, titleEn?: string) {
  return titleEn ? `${titleHe} | ${titleEn}` : titleHe;
}

export function mergeDescriptions(descriptionHe: string, descriptionEn?: string) {
  if (!descriptionEn) return descriptionHe;
  return `${descriptionHe} | ${descriptionEn}`;
}

export function buildPageMetadata({
  titleHe,
  titleEn,
  descriptionHe,
  descriptionEn,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  index = true
}: PageSeoInput): Metadata {
  const title = mergeTitles(titleHe, titleEn);
  const description = mergeDescriptions(descriptionHe, descriptionEn);
  const url = new URL(path, SITE_URL).toString();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [DEFAULT_LOCALE.toLowerCase()]: url,
        [ALT_LOCALE.toLowerCase()]: url
      }
    },
    robots: index
      ? {
          index: true,
          follow: true
        }
      : {
          index: false,
          follow: false,
          nocache: true
        },
    openGraph: {
      title,
      description,
      url,
      locale: DEFAULT_LOCALE.replace('-', '_'),
      alternateLocale: [ALT_LOCALE.replace('-', '_')],
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: BUSINESS_INFO.nameHe
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.nameHe,
    description: BUSINESS_INFO.descriptionHe,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.streetAddressHe,
      addressLocality: BUSINESS_INFO.cityHe,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: BUSINESS_INFO.countryCode
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.coordinates.latitude,
      longitude: BUSINESS_INFO.coordinates.longitude
    }
  };
}

export function buildProductJsonLd(product: Product) {
  const url = new URL(`/shoes/${product.id}`, SITE_URL).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.title,
    image: new URL(product.image, SITE_URL).toString(),
    url,
    sku: String(product.id),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ILS',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url
    },
    brand: {
      '@type': 'Brand',
      name: BUSINESS_INFO.nameHe
    }
  };
}

export function buildBagJsonLd(bag: Bag) {
  const url = new URL(`/bags/${bag.id}`, SITE_URL).toString();
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: bag.title,
    description: bag.title,
    image: new URL(bag.image, SITE_URL).toString(),
    url,
    sku: `bag-${bag.id}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ILS',
      price: bag.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url
    },
    brand: {
      '@type': 'Brand',
      name: BUSINESS_INFO.nameHe
    }
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data)
  };
}

