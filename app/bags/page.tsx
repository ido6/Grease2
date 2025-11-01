'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSheet from '@/components/FilterSheet';
import { useMemo, useState } from 'react';
import { BAGS } from '@/lib/data';

export default function BagsPage() {
  const [query, setQuery] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    return BAGS.filter((b) => {
      const matchQuery = b.title.includes(query.trim());
      const matchColor = !color || b.color === color;
      const matchMaterial = !material || b.material === material;
      const matchSize = !size || b.size === size;
      return matchQuery && matchColor && matchMaterial && matchSize;
    });
  }, [query, color, material, size]);

  const activeFilterCount = [color, material, size].filter(Boolean).length;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <Header />
            <main className="flex flex-col gap-8">
              {/* Back Button */}
              <Link href="/" className="flex items-center gap-2 text-primary hover:underline font-body">
                <span className="material-symbols-outlined">arrow_forward</span>
                <span>חזרה לעמוד הבית</span>
              </Link>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center justify-center gap-2 h-14 px-4 bg-section-light dark:bg-section-dark rounded-xl font-medium"
              >
                <span className="material-symbols-outlined text-xl">tune</span>
                <span>סינון</span>
                {activeFilterCount > 0 && (
                  <span className="flex items-center justify-center size-6 bg-primary text-text-light rounded-full text-xs font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Desktop Filters */}
              <div className="hidden md:flex flex-col gap-4 p-4 bg-section-light dark:bg-section-dark rounded-xl">
                <div className="flex flex-row gap-4 items-center">
                  <input className="flex-1 rounded-lg h-12 px-4" placeholder="חיפוש" value={query} onChange={(e)=>setQuery(e.target.value)} />
                  <select className="rounded-lg h-12 pl-4 pr-10" value={color} onChange={(e)=>setColor(e.target.value)}>
                    <option value="">צבע</option>
                    <option value="brown">חום</option>
                    <option value="beige">בז׳</option>
                    <option value="black">שחור</option>
                  </select>
                  <select className="rounded-lg h-12 pl-4 pr-10" value={material} onChange={(e)=>setMaterial(e.target.value)}>
                    <option value="">חומר</option>
                    <option value="leather">עור</option>
                    <option value="woven">קלוע</option>
                    <option value="fabric">בד</option>
                  </select>
                  <select className="rounded-lg h-12 pl-4 pr-10" value={size} onChange={(e)=>setSize(e.target.value)}>
                    <option value="">גודל</option>
                    <option value="small">קטן</option>
                    <option value="medium">בינוני</option>
                    <option value="large">גדול</option>
                  </select>
                </div>
              </div>

              <section>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-2 md:p-4">
                  {filtered.map((item) => (
                    <Link key={item.id} href={`/bags/${item.id}`} className="flex flex-col gap-3 pb-3 group active:scale-[0.98] transition-transform">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
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
      <FilterSheet isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} title="סינון תיקים" activeFilterCount={activeFilterCount}>
        <div className="space-y-6">
          {/* Search */}
          <div>
            <label className="block text-base font-bold mb-3">חיפוש</label>
            <input className="w-full rounded-lg h-12 px-4" placeholder="חפשי תיקים..." value={query} onChange={(e)=>setQuery(e.target.value)} />
          </div>
          
          {/* Color Filter */}
          <div>
            <label className="block text-base font-bold mb-3">צבע</label>
            <select className="w-full rounded-lg h-12 pl-4 pr-10" value={color} onChange={(e)=>setColor(e.target.value)}>
              <option value="">כל הצבעים</option>
              <option value="brown">חום</option>
              <option value="beige">בז׳</option>
              <option value="black">שחור</option>
            </select>
          </div>
          
          {/* Material Filter */}
          <div>
            <label className="block text-base font-bold mb-3">חומר</label>
            <select className="w-full rounded-lg h-12 pl-4 pr-10" value={material} onChange={(e)=>setMaterial(e.target.value)}>
              <option value="">כל החומרים</option>
              <option value="leather">עור</option>
              <option value="woven">קלוע</option>
              <option value="fabric">בד</option>
            </select>
          </div>
          
          {/* Size Filter */}
          <div>
            <label className="block text-base font-bold mb-3">גודל</label>
            <select className="w-full rounded-lg h-12 pl-4 pr-10" value={size} onChange={(e)=>setSize(e.target.value)}>
              <option value="">כל הגדלים</option>
              <option value="small">קטן</option>
              <option value="medium">בינוני</option>
              <option value="large">גדול</option>
            </select>
          </div>
          
          {/* Apply Button */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full h-14 bg-primary text-text-light rounded-xl font-bold text-base"
          >
            החל סינון
          </button>
        </div>
      </FilterSheet>
    </div>
  );
}


