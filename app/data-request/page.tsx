import { Suspense } from 'react';
import Script from 'next/script';
import DataRequestPageContent from '@/components/pages/DataRequestPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'בקשות מידע אישי – Grease Shoes',
  titleEn: 'Personal Data Requests – Grease Shoes',
  descriptionHe: 'הגש בקשה לעיון, עדכון או מחיקת מידע אישי בהתאם לתיקון 13 לחוק הגנת הפרטיות.',
  descriptionEn: 'Submit access, update, or deletion requests for your personal data under Israel\'s Privacy Protection Law Amendment 13.',
  path: '/data-request'
});

const dataRequestJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'בקשות מידע אישי – Grease Shoes',
  url: `${SITE_URL}/data-request`,
  description: metadata.description
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'בקשות מידע', url: `${SITE_URL}/data-request` }
]);

export default function DataRequestPage() {
  return (
    <>
      <Script
        id="data-request-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(dataRequestJsonLd)}
      />
      <Script
        id="data-request-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <Suspense
        fallback={
          <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
              <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
                  <main className="flex flex-col gap-8 md:gap-12">
                    <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                      <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">בקשות מידע אישי</h1>
                      <p className="text-lg font-body">טוען...</p>
                    </section>
                  </main>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <DataRequestPageContent />
      </Suspense>
    </>
  );
}

