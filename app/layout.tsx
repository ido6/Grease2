import type { Metadata } from 'next';
import { Heebo, Assistant } from 'next/font/google';
import './globals.css';

const heebo = Heebo({ subsets: ['hebrew'], weight: ['400', '700', '900'], variable: '--font-heebo' });
const assistant = Assistant({ subsets: ['hebrew'], weight: ['400', '700'], variable: '--font-assistant' });

export const metadata: Metadata = {
  title: 'Grease Shoes',
  description: 'חנות בוטיק לנעלי נשים מעוצבות – Grease Shoes',
  metadataBase: new URL('https://grease-shoes.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Grease Shoes',
    description: 'חנות בוטיק לנעלי נשים מעוצבות – Grease Shoes',
    locale: 'he_IL',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${assistant.variable}`}>
      <body className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
        {children}
      </body>
    </html>
  );
}


