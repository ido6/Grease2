import Script from 'next/script';
import { Assistant, Heebo } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import CookieConsent from '@/components/CookieConsent';
import { buildLocalBusinessJsonLd, buildPageMetadata, jsonLdScript } from '@/lib/seo-config';

const heebo = Heebo({ subsets: ['hebrew'], weight: ['400', '700', '900'], variable: '--font-heebo' });
const assistant = Assistant({ subsets: ['hebrew'], weight: ['400', '700'], variable: '--font-assistant' });

export const metadata = buildPageMetadata({
  titleHe: 'Grease Shoes – חנות נעלי נשים',
  titleEn: "Grease Shoes – Boutique Women's Shoes",
  descriptionHe: 'קולקציות נעלי נשים ותיקים מעוצבים בישראל עם התאמה אישית ושירות חם.',
  descriptionEn: 'Israeli-designed women\'s shoes and bags with personalized service.',
  path: '/',
  image: 'https://grease-shoes.vercel.app/Photos/Photo1.png'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();

  return (
    <html lang="he-IL" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <Script id="gtm-base" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9QB36VG');`}
      </Script>
      <body className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9QB36VG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          דלג לתוכן הראשי
        </a>
        <Navigation />
        <main id="main-content" role="main">
          {children}
        </main>
        <CookieConsent />
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd)}
        />
        <script src="https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js" defer></script>
      </body>
    </html>
  );
}


