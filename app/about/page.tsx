import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <Header />
            <main className="flex flex-col gap-8">
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h1 className="text-3xl font-bold font-display mb-4">אודות Grease Shoes</h1>
                <p className="text-lg font-body leading-relaxed max-w-3xl">
                  Grease Shoes היא מותג ישראלי לנעלי נשים ותיקים, המתמחה בעיצוב נשי, מודרני ונוח. אנו פועלים ממספר חנויות ברחבי הארץ, ומתחייבים לאיכות בלתי מתפשרת ושירות חם.
                </p>
                <ul className="list-disc pr-6 mt-6 space-y-2 text-base font-body">
                  <li>איכות חומרים מעולה</li>
                  <li>עיצוב ישראלי</li>
                  <li>נוחות לאורך כל היום</li>
                </ul>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}


