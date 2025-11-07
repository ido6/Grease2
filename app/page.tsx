import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import { buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';
import Image from 'next/image';

export const metadata = buildPageMetadata({
  titleHe: 'Grease Shoes – אופנת נשים ישראלית',
  titleEn: "Grease Shoes – Israeli Women's Fashion",
  descriptionHe: 'קולקציה חדשה של נעלי נשים ותיקים מעוצבים, עם התאמה מלאה לאירועים וליום יום.',
  descriptionEn: 'Discover new-season women\'s shoes and bags designed in Israel for every occasion.',
  path: '/',
  image: `${SITE_URL}/Photos/Photo1.png`
});

const featuredItems = [
  {
    name: 'סנדל רצועות צהוב',
    url: `${SITE_URL}/shoes`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc9s1Pc4MKHqy_4HLkAVVsfYzlLyDLy8M4Fw2JJZlpfVJNTY-Wecd_F4Gae3axc-bhpDVMIJwRBsKEYXxIx45f_JaK_69GvxXO8jIV2sxKpEQ0ALXoDYS0uW1pzhO2nSghw8MoIpw40516_U2EGVh-k05RoNMZh_roi9lyWUiGuOW-oYe141AiTQak4bPq1_X3iGo-pVJiAblT6wf8VS0kdpOrbjDlBztC4nT5zfVy6g72gN50Q9TexHvkDYz7P9OiMRGxA-kldw8'
  },
  {
    name: 'תיק עור קלאסי',
    url: `${SITE_URL}/bags`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARNlHKT2rENjY1nGE6oGJ-IU9vGtZZYSeaWtLYmk_o0T9o5MV9V8qczl7-aCxvGp06zqFPQ4NHTpPM17aTI6ge2WA41TM9UxwraPEIq3btelHvQcwNPH24zHsdGuEY_U0LFN96Jcjh5BqjxxLpJbh_yndunpviOcTpaIxJqLzy2y8XT9BKNg4TWgbmBtSDl4kzhGY3wW5CWP20gFQ7TXrILTJYeVWHXqyIG71vXWtUy12RRIBFiLU6SCuVwdj1mTcG2TQtg7nKuHs'
  },
  {
    name: 'סניקרס סוליה עבה',
    url: `${SITE_URL}/shoes`,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8r2b-goxH5g_VhA-cloENXPjrW_g0ByZwe_8FdFMXNA-Cp7pJU-lBsuibnWv5PdxAicglvfqtEtPTdS4Deas1fmb6D_mJAN2jzRte6Wr_i3GQbxOZe7mvr0mFQnvtOjIjURoxsu3FJOg2zgszQ82QF76ki_vOHvDw68DfFuXzQcLzLBArLizWH78JKW27pBunkdHFRNPdsMobZok7zVHCMKK-g0zTaxicjDrsJ7tuypC5nsAJML9ni0Cz5AqSv7ZIVdKKfmH03to'
  }
];

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: metadata.title as string,
  description: metadata.description as string,
  url: SITE_URL,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Grease Shoes',
    url: SITE_URL
  },
  primaryImageOfPage: `${SITE_URL}/Photos/Photo1.png`
};

const featuredListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'פריטים מומלצים',
  url: SITE_URL,
  itemListElement: featuredItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: item.url,
    item: {
      '@type': 'Product',
      name: item.name,
      image: item.image,
      url: item.url
    }
  }))
};

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id="homepage-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(homepageJsonLd)}
      />
      <Script
        id="homepage-featured-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(featuredListJsonLd)}
      />
      <section className="relative w-full">
        <div className="relative w-full">
          <div className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden p-6 text-center md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] md:p-12">
            <Image
              src="/Photos/Photo1.png"
              alt="קולקציית קיץ חדשה של Grease Shoes"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" aria-hidden="true" />
            <div className="relative z-10 flex flex-col gap-4 mt-20 md:mt-32">
              <h1 className="text-white text-4xl @[480px]:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] font-display">
                קולקציית קיץ חדשה
              </h1>
              <p className="text-white text-base @[480px]:text-lg md:text-xl lg:text-2xl font-normal leading-normal font-body max-w-lg mx-auto">
                גלי את הסטייל החדש שלנו, שעוצב במיוחד עבור האישה המודרנית.
              </p>
            </div>
            <Link
              href="/shoes"
              className="relative z-10 flex min-w-[84px] max-w-[480px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 @[480px]:h-14 px-6 @[480px]:px-8 bg-primary text-text-light text-base @[480px]:text-lg font-bold leading-normal tracking-[0.015em] hover:brightness-90 active:scale-95 transition-all font-display"
            >
              <span className="truncate">גלי את הקולקציה</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
              <section aria-labelledby="featured-products-heading">
                <h2 id="featured-products-heading" className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 text-center font-display">
                  המועדפים שלנו
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                  {featuredItems.map((item) => (
                    <Link
                      href={item.url.replace(SITE_URL, '')}
                      key={item.name}
                      className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform"
                    >
                      <div
                        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${item.image})` }}
                        role="img"
                        aria-label={item.name}
                      />
                      <p className="text-base md:text-lg font-medium leading-normal text-center font-body">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12" aria-labelledby="shop-the-look-heading">
                <h2 id="shop-the-look-heading" className="text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center font-display">
                  Shop The Look
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div
                    className="w-full aspect-[4/5] bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVqmBwvj3cizVxSk4SIQiTos30n6D3NvWN4DJ94_8tRG-BtxkJQsDGc2mc_grDtfQ9jBNaAGXTH0Z99Tf7brVdieTas708agf8ajaU-54t2dK7KXaE2sMWuSRXATR-NP6z3s-rJQazSkxpMYlyXW1zgE6onRJdoE71bemFq2RxV92BWvC7Lsvk24lrRiVCUklZ2NaTaDyB1cXlDwPJzVio_T6jD8qNFexghieya4jCij-YoTNUlClK1s0V_hkWMIoLy0sS7nddgck")' }}
                    role="img"
                    aria-label="מראה מלא של קולקציית Grease Shoes"
                  />
                  <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-right">
                    <h3 className="text-2xl font-bold leading-snug font-display">השלימי את המראה שלך</h3>
                    <p className="text-lg leading-relaxed max-w-md font-body">
                      שדרגי את המלתחה שלך עם הפריטים הכי נכונים לעונה. גלי את השילובים המנצחים שלנו והתאהבי מחדש.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/shoes" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-light text-base font-bold hover:brightness-90 transition-all font-display">
                        לכל הנעליים
                      </Link>
                      <Link href="/bags" className="flex items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark border border-gray-300 dark:border-gray-600 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 transition-all font-display">
                        לכל התיקים
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

