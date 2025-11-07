import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-section-light dark:border-section-dark pt-6 md:pt-8 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-3 md:gap-4">
          <div className="flex items-center gap-2">
            <Image src="/Photos/GREASELOGO.png" alt="Grease Shoes Logo" width={24} height={24} className="object-contain" />
            <h3 className="font-bold text-lg font-display">Grease Shoes</h3>
          </div>
          <p className="text-center md:text-right text-xs md:text-sm text-text-light/80 dark:text-text-dark/80 font-body">
            אופנה שמרגישה בבית. קולקציות נעליים ותיקים שנוצרו באהבה בישראל.
          </p>
        </div>
        <div className="text-center md:text-right">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base font-display">ניווט</h4>
          <ul className="space-y-1.5 md:space-y-2 font-body text-sm md:text-base">
            <li><a className="hover:text-primary" href="/">בית</a></li>
            <li><a className="hover:text-primary" href="/shoes">נעליים</a></li>
            <li><a className="hover:text-primary" href="/bags">תיקים</a></li>
            <li><a className="hover:text-primary" href="/about">אודותינו</a></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base font-display">מידע</h4>
          <ul className="space-y-1.5 md:space-y-2 font-body text-sm md:text-base">
            <li><a className="hover:text-primary" href="/contact">צור קשר</a></li>
            <li><a className="hover:text-primary" href="/privacy">מדיניות פרטיות</a></li>
            <li><a className="hover:text-primary" href="/privacy-settings">הגדרות פרטיות</a></li>
            <li><a className="hover:text-primary" href="/data-request">בקשות מידע</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 text-center md:text-right">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base font-display">עקבו אחרינו</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="hover:text-primary transition-colors" href="https://www.instagram.com/greaseshoes" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs md:text-sm text-text-light/70 dark:text-text-dark/70 pt-6 md:pt-8 mt-6 md:mt-8 border-t border-section-light dark:border-section-dark font-body">
        © 2024 Grease Shoes. כל הזכויות שמורות.
      </div>
    </footer>
  );
}


