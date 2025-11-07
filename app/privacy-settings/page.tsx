import Script from 'next/script';
import PrivacySettingsContent from '@/components/pages/PrivacySettingsContent';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'הגדרות פרטיות Grease Shoes',
  titleEn: 'Grease Shoes Privacy Settings',
  descriptionHe: 'נהל את העדפות העוגיות והשיווק שלך בהתאם לחוק הגנת הפרטיות ותיקון 13.',
  descriptionEn: 'Manage your cookie and marketing preferences in line with Israel\'s Privacy Protection Law Amendment 13.',
  path: '/privacy-settings'
});

const preferenceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'הגדרות פרטיות Grease Shoes',
  url: `${SITE_URL}/privacy-settings`,
  description: metadata.description
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'הגדרות פרטיות', url: `${SITE_URL}/privacy-settings` }
]);

export default function PrivacySettingsPage() {
  return (
    <>
      <Script
        id="privacy-settings-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(preferenceJsonLd)}
      />
      <Script
        id="privacy-settings-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <PrivacySettingsContent />
    </>
  );
}

