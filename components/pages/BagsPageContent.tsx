'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import FilterSheet from '@/components/FilterSheet';
import { useMemo, useState } from 'react';
import { BAGS } from '@/lib/data';

export default function BagsPageContent() {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return BAGS.filter((b) => {
      const searchQuery = query.trim().toLowerCase();
      const matchQuery = !searchQuery || b.title.toLowerCase().includes(searchQuery);
      const matchColor = !color || b.color === color;
      const matchMaterial = !material || b.material === material;
      const matchSize = !size || b.size === size;
      return matchQuery && matchColor && matchMaterial && matchSize;
    });
  }, [query, color, material, size]);

  const clearFilters = () => {
    setQuery('');
    setColor('');
    setMaterial('');
    setSize('');
  };

  const activeFilterCount = [color, material, size].filter(Boolean).length;

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
                    aria-label="חיפוש תיקים"
                  />
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    aria-label="סינון לפי צבע"
                  >
                    <option value="">צבע</option>
                    <option value="brown">חום</option>
                    <option value="beige">בז׳</option>
                    <option value="black">שחור</option>
                  </select>
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    aria-label="סינון לפי חומר"
                  >
                    <option value="">חומר</option>
                    <option value="leather">עור</option>
                    <option value="woven">קלוע</option>
                  </select>
                  <select
                    className="rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    aria-label="סינון לפי גודל"
                  >
                    <option value="">גודל</option>
                    <option value="small">קטן</option>
                    <option value="medium">בינוני</option>
                    <option value="large">גדול</option>
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
                <h1 className="sr-only">תוצאות חיפוש תיקים</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2 md:p-4">
                  {filtered.map((item) => (
                    <Link
                      key={item.id}
                      href={`/bags/${item.id}`}
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
        title="סינון תיקים"
        activeFilterCount={activeFilterCount}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-base font-bold mb-3" htmlFor="bag-search-input">
              חיפוש
            </label>
            <input
              id="bag-search-input"
              className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              placeholder="חפשי תיקים..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="bag-color-filter">
              צבע
            </label>
            <select
              id="bag-color-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="">כל הצבעים</option>
              <option value="brown">חום</option>
              <option value="beige">בז׳</option>
              <option value="black">שחור</option>
            </select>
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="bag-material-filter">
              חומר
            </label>
            <select
              id="bag-material-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="">כל החומרים</option>
              <option value="leather">עור</option>
              <option value="woven">קלוע</option>
            </select>
          </div>

          <div>
            <label className="block text-base font-bold mb-3" htmlFor="bag-size-filter">
              גודל
            </label>
            <select
              id="bag-size-filter"
              className="w-full rounded-lg h-12 pl-4 pr-10 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">כל הגדלים</option>
              <option value="small">קטן</option>
              <option value="medium">בינוני</option>
              <option value="large">גדול</option>
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

