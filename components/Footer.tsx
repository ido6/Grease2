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
            <li><a className="hover:text-primary" href="/">קולקציה חדשה</a></li>
            <li><a className="hover:text-primary" href="/shoes">נעליים</a></li>
            <li><a className="hover:text-primary" href="/bags">תיקים</a></li>
            <li><a className="hover:text-primary" href="/about">אודותינו</a></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base font-display">מידע</h4>
          <ul className="space-y-1.5 md:space-y-2 font-body text-sm md:text-base">
            <li><a className="hover:text-primary" href="/contact">צור קשר</a></li>
            <li><a className="hover:text-primary" href="#">שאלות נפוצות</a></li>
            <li><a className="hover:text-primary" href="#">מדיניות פרטיות</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 text-center md:text-right">
          <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base font-display">עקבו אחרינו</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a className="text-xl md:text-2xl hover:text-primary" href="https://www.instagram.com/greaseshoes" target="_blank" rel="noreferrer">IG</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs md:text-sm text-text-light/70 dark:text-text-dark/70 pt-6 md:pt-8 mt-6 md:mt-8 border-t border-section-light dark:border-section-dark font-body">
        © 2024 Grease Shoes. כל הזכויות שמורות.
      </div>
    </footer>
  );
}


