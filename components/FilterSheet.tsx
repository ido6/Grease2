'use client';

import { useEffect, useRef } from 'react';

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  activeFilterCount?: number;
}

export default function FilterSheet({ isOpen, onClose, children, title, activeFilterCount = 0 }: FilterSheetProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      panelRef.current?.querySelector<HTMLElement>('button, input, select, textarea, a, [tabindex="0"]')?.focus?.();
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
        className={`fixed bottom-0 right-0 left-0 max-h-[85vh] bg-background-light dark:bg-background-dark z-50 transform transition-transform duration-300 ease-out border-t border-section-light dark:border-section-dark rounded-t-2xl ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="filter-sheet-title"
        ref={panelRef}
      >
        <div className="flex flex-col h-full max-h-[85vh]">
          <div className="flex items-center justify-between p-4 border-b border-section-light dark:border-section-dark">
            <div className="flex items-center gap-3">
              <h3 id="filter-sheet-title" className="text-xl font-bold font-display">
                {title}
              </h3>
              {activeFilterCount > 0 && (
                <span className="flex items-center justify-center size-7 bg-primary text-text-light rounded-full text-sm font-bold">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center size-10 rounded-full hover:bg-section-light dark:hover:bg-section-dark transition-colors"
              aria-label="סגור"
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                close
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

