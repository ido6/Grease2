'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-section-light dark:border-section-dark px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-4">
          <Image src="/Photos/GREASELOGO.png" alt="Grease Shoes Logo" width={32} height={32} className="object-contain" />
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] font-display">Grease Shoes</h2>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-start gap-8 mr-10">
          <nav className="flex items-center gap-9">
            <Link className="text-base font-medium leading-normal hover:text-primary transition-colors font-body" href="/">קולקציה חדשה</Link>
            <Link className="text-base font-medium leading-normal hover:text-primary transition-colors font-body" href="/shoes">נעליים</Link>
            <Link className="text-base font-medium leading-normal hover:text-primary transition-colors font-body" href="/bags">תיקים</Link>
            <Link className="text-base font-medium leading-normal hover:text-primary transition-colors font-body" href="/about">אודותינו</Link>
          </nav>
        </div>
        <div className="flex gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="md:hidden flex items-center justify-center size-11 rounded-full hover:bg-primary/20 transition-colors"
            aria-label="תפריט"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          {/* Desktop Icons */}
          <button
            className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full size-10 bg-section-light dark:bg-section-dark text-text-light dark:text-text-dark hover:bg-primary/20 transition-colors"
            aria-label="חיפוש"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}


