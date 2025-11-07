'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useId } from 'react';
import MobileNav from './MobileNav';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavId = useId();

  const navLinks = [
    { href: '/', label: 'בית' },
    { href: '/shoes', label: 'נעליים' },
    { href: '/bags', label: 'תיקים' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <header
        className={`grid grid-cols-3 items-center whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 ${
          transparent
            ? 'bg-transparent border-transparent'
            : 'border-b border-solid border-section-light dark:border-section-dark'
        }`}
        role="banner"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileNavOpen(true)}
            className={`md:hidden flex items-center justify-center size-11 rounded-full hover:bg-section-light dark:hover:bg-section-dark transition-colors ${
              transparent ? 'text-white' : ''
            }`}
            aria-label="פתח תפריט ניווט"
            aria-expanded={isMobileNavOpen}
            aria-controls={mobileNavId}
          >
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              menu
            </span>
          </button>
        </div>
        <div className="hidden md:flex justify-center">
          <nav className="flex items-center gap-9" aria-label="ניווט ראשי">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg leading-normal transition-all duration-200 font-body ${
                    active ? 'font-bold' : 'font-medium'
                  } ${
                    transparent
                      ? active
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                      : active
                        ? 'text-text-light dark:text-text-dark'
                        : 'hover:text-text-light/70 dark:hover:text-text-dark/70'
                  } hover:scale-105`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex gap-2 justify-end" aria-hidden="true" />
      </header>
      <MobileNav
        id={mobileNavId}
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}

