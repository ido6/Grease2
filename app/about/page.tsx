import Script from 'next/script';
import Footer from '@/components/Footer';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'אודות Grease Shoes',
  titleEn: 'About Grease Shoes',
  descriptionHe: 'הכירו את מותג Grease Shoes – עיצוב ישראלי, איכות חומרים ונוחות לאורך כל היום.',
  descriptionEn: 'Learn about Grease Shoes: Israeli design, premium materials, and all-day comfort.',
  path: '/about'
});

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'אודות Grease Shoes',
  url: `${SITE_URL}/about`,
  description: metadata.description
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'אודות', url: `${SITE_URL}/about` }
]);

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(aboutJsonLd)}
      />
      <Script
        id="about-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8 md:gap-12">
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">אודות Grease Shoes</h1>
                <div className="flex flex-col gap-6">
                  <p className="text-lg md:text-xl font-body leading-relaxed max-w-3xl">
                    Grease Shoes היא מותג ישראלי לנעלי נשים ותיקים, המתמחה בעיצוב נשי, מודרני ונוח. אנו פועלים ממספר חנויות ברחבי הארץ, ומתחייבים לאיכות בלתי מתפשרת ושירות חם.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                          star
                        </span>
                        <h2 className="text-xl font-bold font-display">איכות חומרים מעולה</h2>
                      </div>
                      <p className="text-base font-body text-text-light/80 dark:text-text-dark/80">
                        אנו בוחרים בקפידה את החומרים הטובים ביותר ליצירת מוצרים איכותיים ועמידים.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                          palette
                        </span>
                        <h2 className="text-xl font-bold font-display">עיצוב ישראלי</h2>
                      </div>
                      <p className="text-base font-body text-text-light/80 dark:text-text-dark/80">
                        כל מוצר מעוצב בישראל עם תשומת לב לפרטים הקטנים והטעם המקומי.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                          favorite
                        </span>
                        <h2 className="text-xl font-bold font-display">נוחות לאורך כל היום</h2>
                      </div>
                      <p className="text-base font-body text-text-light/80 dark:text-text-dark/80">
                        נעליים ותיקים שנוצרו לחוויה נוחה ומהנה לאורך כל היום.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">החזון שלנו</h2>
                <p className="text-lg font-body leading-relaxed max-w-3xl">
                  ב-Grease Shoes, אנו מאמינים שאופנה צריכה להיות נוחה, איכותית ונגישה. המטרה שלנו היא להביא לך את הקולקציות הטובות ביותר של נעליים ותיקים, שעוצבו במיוחד עבור האישה המודרנית בישראל.
                </p>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

