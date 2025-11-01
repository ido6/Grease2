'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background-light dark:bg-background-dark z-50 transform transition-transform duration-300 ease-out border-l border-section-light dark:border-section-dark ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-section-light dark:border-section-dark">
            <div className="flex items-center gap-4">
              <Image src="/Photos/GREASELOGO.png" alt="Grease Shoes Logo" width={32} height={32} className="object-contain" />
              <h2 className="text-xl font-bold font-display">Grease Shoes</h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center size-10 rounded-full hover:bg-section-light dark:hover:bg-section-dark transition-colors"
              aria-label="סגור תפריט"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-lg font-medium hover:text-primary transition-colors border-b border-section-light dark:border-section-dark"
                >
                  <span className="font-body">קולקציה חדשה</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/shoes"
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-lg font-medium hover:text-primary transition-colors border-b border-section-light dark:border-section-dark"
                >
                  <span className="font-body">נעליים</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/bags"
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-lg font-medium hover:text-primary transition-colors border-b border-section-light dark:border-section-dark"
                >
                  <span className="font-body">תיקים</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-lg font-medium hover:text-primary transition-colors border-b border-section-light dark:border-section-dark"
                >
                  <span className="font-body">אודותינו</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-between py-4 text-lg font-medium hover:text-primary transition-colors"
                >
                  <span className="font-body">צור קשר</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

