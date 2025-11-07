'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import FilterSheet from '@/components/FilterSheet';
import { useMemo, useState } from 'react';
import { PRODUCTS } from '@/lib/data';

export default function ShoesPageContent() {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState<string>('');
  const [heel, setHeel] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [collection, setCollection] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const searchQuery = query.trim().toLowerCase();
      const matchQuery = !searchQuery || p.title.toLowerCase().includes(searchQuery);
      const matchColor = !color || p.color === color;
      const matchHeel = !heel || p.heel === heel;
      const matchSize = !size || p.size.includes(Number(size));
      const matchCollection = !collection || p.collection === collection;
      return matchQuery && matchColor && matchHeel && matchSize && matchCollection;
    });
  }, [query, color, heel, size, collection]);

  const clearFilters = () => {
    setQuery('');
    setColor('');
    setHeel('');
    setSize('');
    setCollection('');
  };

  const activeFilterCount = [color, heel, size, collection].filter(Boolean).length;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8">
              <Link href="/" className="flex items-center gap-2 text-text-light dark:text-text-dark font-body hover:font-bold transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
                <span>חזרה לעמוד הבית</span>
              </Link>

              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center justify-center gap-2 h-14 px-4 bg-section-light dark:bg-section-dark rounded-xl font-medium"
                aria-haspopup="dialog"
                aria-expanded={isFilterOpen}
              >
                <span className="material-symbols-outlined text-xl">tune</span>
                <span>סינון</span>
                {activeFilterCount > 0 && (
                  <span className="flex items-center justify-center size-6 bg-primary text-text-light rounded-full text-xs font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="hidden md:flex flex-col gap-4 p-4 bg-section-light dark:bg-section-dark rounded-xl" role="search">
                <div className="flex flex-row gap-4 items-center">
                  <input
                    className="flex-1 rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    placeholder="חיפוש"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="חיפוש נעליים"
                  />
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    aria-label="סינון לפי צבע"
                  >
                    <option value="">צבע</option>
                    <option value="yellow">צהוב</option>
                    <option value="white">לבן</option>
                    <option value="black">שחור</option>
                    <option value="red">אדום</option>
                    <option value="beige">בז׳</option>
                    <option value="gold">זהב</option>
                    <option value="tan">טאן</option>
                    <option value="pink">ורוד</option>
                    <option value="silver">כסף</option>
                    <option value="brown">חום</option>
                    <option value="blue">כחול</option>
                    <option value="green">ירוק</option>
                    <option value="multicolor">רב צבעים</option>
                    <option value="turquoise">טורקז</option>
                    <option value="burgundy">ארגמן</option>
                  </select>
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={heel}
                    onChange={(e) => setHeel(e.target.value)}
                    aria-label="סינון לפי גובה עקב"
                  >
                    <option value="">גובה עקב</option>
                    <option value="flat">שטוח</option>
                    <option value="mid">בינוני</option>
                    <option value="high">גבוה</option>
                  </select>
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    aria-label="סינון לפי מידה"
                  >
                    <option value="">מידה</option>
                    {[35, 36, 37, 38, 39, 40, 41].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={collection}
                    onChange={(e) => setCollection(e.target.value)}
                    aria-label="סינון לפי קולקציה"
                  >
                    <option value="">קולקציה</option>
                    <option value="summer">קיץ</option>
                    <option value="classic">קלאסי</option>
                    <option value="evening">ערב</option>
                  </select>
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark hover:bg-section-light dark:hover:bg-section-dark transition-colors whitespace-nowrap"
                    >
                      נקה סינון
                    </button>
                  )}
                </div>
              </div>

              <section aria-live="polite">
                <h1 className="sr-only">תוצאות חיפוש נעליים</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2 md:p-4">
                  {filtered.map((item) => (
                    <Link
                      key={item.id}
                      href={`/shoes/${item.id}`}
                      className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform"
                    >
                      <div
                        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundImage: `url(${item.image})` }}
                        role="img"
                        aria-label={item.title}
                      />
                      <p className="text-base md:text-lg font-medium leading-normal text-center font-body">{item.title}</p>
                    </Link>
                  ))}
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
      <FilterSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        title="סינון נעליים"
        activeFilterCount={activeFilterCount}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-base font-bold mb-3" htmlFor="shoe-search-input">
              חיפוש
            </label>
            <input
              id="shoe-search-input"
              className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              placeholder="חפשי נעליים..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="shoe-color-filter">
              צבע
            </label>
            <select
              id="shoe-color-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">כל הצבעים</option>
              <option value="yellow">צהוב</option>
              <option value="white">לבן</option>
              <option value="black">שחור</option>
              <option value="red">אדום</option>
              <option value="beige">בז׳</option>
              <option value="gold">זהב</option>
              <option value="tan">טאן</option>
              <option value="pink">ורוד</option>
              <option value="silver">כסף</option>
              <option value="brown">חום</option>
              <option value="blue">כחול</option>
              <option value="green">ירוק</option>
              <option value="multicolor">רב צבעים</option>
              <option value="turquoise">טורקז</option>
              <option value="burgundy">ארגמן</option>
            </select>
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="shoe-heel-filter">
              גובה עקב
            </label>
            <select
              id="shoe-heel-filter"
              className="w-full rounded-lg.h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={heel}
              onChange={(e) => setHeel(e.target.value)}
            >
              <option value="">כל הגבהים</option>
              <option value="flat">שטוח</option>
              <option value="mid">בינוני</option>
              <option value="high">גבוה</option>
            </select>
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="shoe-size-filter">
              מידה
            </label>
            <select
              id="shoe-size-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">כל המידות</option>
              {[35, 36, 37, 38, 39, 40, 41].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="shoe-collection-filter">
              קולקציה
            </label>
            <select
              id="shoe-collection-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
            >
              <option value="">כל הקולקציות</option>
              <option value="summer">קיץ</option>
              <option value="classic">קלאסי</option>
              <option value="evening">ערב</option>
            </select>
          </div>

          <div className="flex gap-3">
            {activeFilterCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex-1 h-14 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark rounded-xl font-bold text-base"
              >
                נקה סינון
              </button>
            )}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="flex-1 h-14 bg-primary text-text-light rounded-xl font-bold text-base"
            >
              החל סינון
            </button>
          </div>
        </div>
      </FilterSheet>
    </div>
  );
}

