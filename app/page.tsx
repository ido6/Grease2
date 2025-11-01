'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <Header />
            <main className="flex flex-col gap-12 md:gap-16 lg:gap-20">
              {/* Hero Section */}
              <section className="mt-4 md:mt-8">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div className="relative flex min-h-[400px] @[480px]:min-h-[520px] flex-col gap-4 @[480px]:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 @[480px]:p-12 text-center overflow-hidden" 
                         style={{
                           backgroundImage: 'url(/Photos/Photo1.png), linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 100%)'
                         }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 z-10" />
                      <div className="relative z-20 flex flex-col gap-4">
                        <h1 className="text-white text-4xl @[480px]:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] font-display">
                          קולקציית קיץ חדשה
                        </h1>
                        <h2 className="text-white text-base @[480px]:text-lg md:text-xl font-normal leading-normal font-body max-w-lg mx-auto">
                          גלי את הסטייל החדש שלנו, שעוצב במיוחד עבור האישה המודרנית.
                        </h2>
                      </div>
                      <Link href="/shoes" className="relative z-20 flex min-w-[84px] max-w-[480px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 @[480px]:h-14 px-6 @[480px]:px-8 bg-primary text-text-light text-base @[480px]:text-lg font-bold leading-normal tracking-[0.015em] hover:brightness-90 active:scale-95 transition-all font-display">
                        <span className="truncate">גלי את הקולקציה</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Products Section */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5 text-center font-display">המועדפים שלנו</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                  <Link href="/shoes" className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
                         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBc9s1Pc4MKHqy_4HLkAVVsfYzlLyDLy8M4Fw2JJZlpfVJNTY-Wecd_F4Gae3axc-bhpDVMIJwRBsKEYXxIx45f_JaK_69GvxXO8jIV2sxKpEQ0ALXoDYS0uW1pzhO2nSghw8MoIpw40516_U2EGVh-k05RoNMZh_roi9lyWUiGuOW-oYe141AiTQak4bPq1_X3iGo-pVJiAblT6wf8VS0kdpOrbjDlBztC4nT5zfVy6g72gN50Q9TexHvkDYz7P9OiMRGxA-kldw8")' }}>
                    </div>
                    <p className="text-base md:text-lg font-medium leading-normal text-center font-body">סנדל רצועות צהוב</p>
                  </Link>
                  <Link href="/bags" className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
                         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARNlHKT2rENjY1nGE6oGJ-IU9vGtZZYSeaWtLYmk_o0T9o5MV9V8qczl7-aCxvGp06zqFPQ4NHTpPM17aTI6ge2WA41TM9UxwraPEIq3btelHvQcwNPH24zHsdGuEY_U0LFN96Jcjh5BqjxxLpJbh_yndunpviOcTpaIxJqLzy2y8XT9BKNg4TWgbmBtSDl4kzhGY3wW5CWP20gFQ7TXrILTJYeVWHXqyIG71vXWtUy12RRIBFiLU6SCuVwdj1mTcG2TQtg7nKuHs")' }}>
                    </div>
                    <p className="text-base md:text-lg font-medium leading-normal text-center font-body">תיק עור קלאסי</p>
                  </Link>
                  <Link href="/shoes" className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
                         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8r2b-goxH5g_VhA-cloENXPjrW_g0ByZwe_8FdFMXNA-Cp7pJU-lBsuibnWv5PdxAicglvfqtEtPTdS4Deas1fmb6D_mJAN2jzRte6Wr_i3GQbxOZe7mvr0mFQnvtOjIjURoxsu3FJOg2zgszQ82QF76ki_vOHvDw68DfFuXzQcLzLBArLizWH78JKW27pBunkdHFRNPdsMobZok7zVHCMKK-g0zTaxicjDrsJ7tuypC5nsAJML9ni0Cz5AqSv7ZIVdKKfmH03to")' }}>
                    </div>
                    <p className="text-base md:text-lg font-medium leading-normal text-center font-body">סניקרס סוליה עבה</p>
                  </Link>
                  <Link href="/bags" className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
                         style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMUAL0ZD8Fg9zHWphCrEFzcrMZPkdWc8l4XdYTB69yXs5kHwLPDf1ZInKR7P8PtDi1MZHDL0QTzdCMHDYFUZOFyy1R4U9DYxIuvvN4Z7SuAPi4DOhVzyRi9NJFFd2qq-mr23gBC_0w8MC-pRuntOIsTv7lBevYyWf3lxiL87q1v9pQfgEf3_7sm8y-PqpTNIa9rq3CAoWEilyKGwIcz31fFjAYspwnB4TTPiYwl8gVgxWvFA8yrPYAx72idRwNn9aqOsSPKwo7nqc")' }}>
                    </div>
                    <p className="text-base md:text-lg font-medium leading-normal text-center font-body">תיק צד קלוע</p>
                  </Link>
                </div>
              </section>

              {/* Shop The Look Section */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-center font-display">Shop The Look</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="w-full aspect-[4/5] bg-cover bg-center rounded-xl" 
                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVqmBwvj3cizVxSk4SIQiTos30n6D3NvWN4DJ94_8tRG-BtxkJQsDGc2mc_grDtfQ9jBNaAGXTH0Z99Tf7brVdieTas708agf8ajaU-54t2dK7KXaE2sMWuSRXATR-NP6z3s-rJQazSkxpMYlyXW1zgE6onRJdoE71bemFq2RxV92BWvC7Lsvk24lrRiVCUklZ2NaTaDyB1cXlDwPJzVio_T6jD8qNFexghieya4jCij-YoTNUlClK1s0V_hkWMIoLy0sS7nddgck")' }}>
                  </div>
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
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

