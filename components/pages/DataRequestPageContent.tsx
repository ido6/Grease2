'use client';

import Footer from '@/components/Footer';
import DataRequestForm from '@/components/DataRequestForm';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function DataRequestPageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as 'access' | 'update' | 'delete' | null;
  const requestType = type || 'access';

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8 md:gap-12">
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">בקשות מידע אישי</h1>
                <p className="text-lg font-body leading-relaxed mb-4">
                  בהתאם לחוק הגנת הפרטיות ותיקון 13, יש לך זכויות לגבי המידע האישי שאנו מחזיקים עליך.
                </p>
                <p className="text-base font-body text-text-light/80 dark:text-text-dark/80">
                  אתה יכול לבקש גישה למידע, עדכון מידע, או מחיקת מידע. בחר את סוג הבקשה שברצונך להגיש:
                </p>
              </section>

              {!type && (
                <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold font-display mb-6">בחר סוג בקשה</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      href="/data-request?type=access"
                      className="p-6 border-2 border-section-light dark:border-section-dark rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                        <h3 className="text-xl font-bold font-display">גישה למידע</h3>
                      </div>
                      <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                        קבל עותק של כל המידע האישי שאנו מחזיקים עליך
                      </p>
                    </Link>

                    <Link
                      href="/data-request?type=update"
                      className="p-6 border-2 border-section-light dark:border-section-dark rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-3xl text-primary">edit</span>
                        <h3 className="text-xl font-bold font-display">עדכון מידע</h3>
                      </div>
                      <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                        עדכן או תקן מידע אישי לא מדויק
                      </p>
                    </Link>

                    <Link
                      href="/data-request?type=delete"
                      className="p-6 border-2 border-section-light dark:border-section-dark rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-3xl text-primary">delete</span>
                        <h3 className="text-xl font-bold font-display">מחיקת מידע</h3>
                      </div>
                      <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                        מחק את המידע האישי שלך (בכפוף למגבלות חוקיות)
                      </p>
                    </Link>
                  </div>
                </section>
              )}

              {type && (
                <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                  <Link
                    href="/data-request"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-4 font-body"
                  >
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    חזרה לבחירת סוג בקשה
                  </Link>
                  <DataRequestForm requestType={requestType} />
                </section>
              )}

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">מידע נוסף</h2>
                <div className="space-y-4 text-base font-body">
                  <div>
                    <p className="font-semibold mb-2">זמן תגובה:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                      נשתדל להגיב לבקשתך תוך 30 יום. אם הבקשה מורכבת, ייתכן שנדרש זמן נוסף, ואנו נודיע לך על כך.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">אימות זהות:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                      כדי להגן על המידע שלך, נדרוש אימות זהות לפני מימוש בקשתך. ייתכן שנבקש ממך לספק מידע נוסף או מסמכים מזהה.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">מגבלות:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                      חלק מהמידע עשוי להישמר אם נדרש לפי חוק (למשל, רשומות פיננסיות, רשומות מס). נסביר לך אם יש מגבלות על בקשתך.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכויות נוספות:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                      למידע נוסף על זכויותיך, עיין ב<Link href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</Link> שלנו.
                    </p>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

