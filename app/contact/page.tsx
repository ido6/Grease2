import Script from 'next/script';
import ContactPageContent from '@/components/pages/ContactPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata, BUSINESS_INFO, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'Grease Shoes – צור קשר',
  titleEn: 'Grease Shoes – Contact Us',
  descriptionHe: 'צוות שירות הלקוחות של Grease Shoes זמין לשאלות, הזמנות ובקשות שירות.',
  descriptionEn: 'Reach Grease Shoes customer care for orders, questions, and service requests.',
  path: '/contact'
});

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'צור קשר עם Grease Shoes',
  url: `${SITE_URL}/contact`,
  description: metadata.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS_INFO.phone,
    contactType: 'customer service',
    areaServed: 'IL',
    availableLanguage: ['he', 'en'],
    email: BUSINESS_INFO.email
  }
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'צור קשר', url: `${SITE_URL}/contact` }
]);

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(contactJsonLd)}
      />
      <Script
        id="contact-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <ContactPageContent />
    </>
  );
}

