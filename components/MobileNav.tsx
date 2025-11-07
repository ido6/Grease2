'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
}

export default function MobileNav({ isOpen, onClose, id }: MobileNavProps) {
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navLinks = [
    { href: '/', label: 'בית' },
    { href: '/shoes', label: 'נעליים' },
    { href: '/bags', label: 'תיקים' },
    { href: '/about', label: 'אודותינו' },
    { href: '/contact', label: 'צור קשר' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-light dark:bg-background-dark z-50 transform transition-transform duration-300 ease-out border-l border-section-light dark:border-section-dark ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
        id={id}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-section-light dark:border-section-dark">
            <h2 id="mobile-nav-title" className="sr-only">
              ניווט ראשי בנייד
            </h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center size-10 rounded-full hover:bg-section-light dark:hover:bg-section-dark transition-colors"
              aria-label="סגור תפריט"
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                close
              </span>
            </button>
          </div>

          <nav className="flex-1 p-6" aria-label="ניווט ראשי בנייד">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                const isLast = index === navLinks.length - 1;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      ref={index === 0 ? firstLinkRef : undefined}
                      className={`flex items-center justify-between py-5 text-xl transition-all duration-200 font-body hover:scale-105 hover:text-text-light/70 dark:hover:text-text-dark/70 ${
                        active ? 'font-bold' : 'font-medium'
                      } ${!isLast ? 'border-b border-section-light dark:border-section-dark' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="font-body">{link.label}</span>
                      <span className="material-symbols-outlined" aria-hidden="true">
                        chevron_left
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

