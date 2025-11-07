'use client';

import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  getCookieConsent,
  saveCookieConsent,
  type CookieConsent
} from '@/lib/cookie-utils';
import {
  logCookieConsent,
  logMarketingConsent,
  hasGrantedConsent
} from '@/lib/consent-logger';

export default function PrivacySettingsContent() {
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: '1.0'
  });
  const [marketingEmailConsent, setMarketingEmailConsent] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedConsent = getCookieConsent();
    if (savedConsent) {
      setConsent(savedConsent);
    }

    const marketingConsent = hasGrantedConsent('marketing_emails');
    setMarketingEmailConsent(marketingConsent);
  }, []);

  const handleToggleCategory = (category: 'analytics' | 'marketing') => {
    setConsent((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
    setIsSaved(false);
  };

  const handleToggleMarketingEmails = () => {
    setMarketingEmailConsent((prev) => !prev);
    setIsSaved(false);
  };

  const persistConsent = (updatedConsent: CookieConsent, marketingEmails: boolean) => {
    saveCookieConsent(updatedConsent);
    logCookieConsent('analytics', updatedConsent.analytics);
    logCookieConsent('marketing', updatedConsent.marketing);
    logMarketingConsent(marketingEmails);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleSave = () => {
    const updatedConsent: CookieConsent = {
      ...consent,
      essential: true,
      timestamp: Date.now()
    };
    persistConsent(updatedConsent, marketingEmailConsent);
    window.location.reload();
  };

  const handleWithdrawAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
      version: '1.0'
    };
    setConsent(newConsent);
    setMarketingEmailConsent(false);
    persistConsent(newConsent, false);
    window.location.reload();
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8 md:gap-12">
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">הגדרות פרטיות</h1>
                <p className="text-lg font-body leading-relaxed mb-4">
                  כאן תוכל לנהל את העדפות הפרטיות שלך, כולל העדפות עוגיות והסכמה לשיווק.
                </p>
                <p className="text-base font-body text-text-light/80 dark:text-text-dark/80">
                  אתה יכול לשנות את ההעדפות שלך בכל עת. שינויים ייכנסו לתוקף מיד.
                </p>
              </section>

              {isSaved && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg" role="status">
                  <p className="text-sm font-body text-green-800 dark:text-green-200">
                    ההעדפות נשמרו בהצלחה!
                  </p>
                </div>
              )}

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">הגדרות עוגיות</h2>
                <p className="text-base font-body text-text-light/80 dark:text-text-dark/80 mb-6">
                  בחר אילו סוגי עוגיות אתה מאפשר. עוגיות הכרחיות תמיד פעילות ואי אפשר לבטלן.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg border border-section-light dark:border-section-dark">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold font-display mb-1">עוגיות הכרחיות</h3>
                        <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                          עוגיות אלה נחוצות לפעולת האתר ואי אפשר להפעיל את האתר בלעדיהן. הן כוללות זכירת העדפות, אבטחה ופונקציות בסיסיות.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-6 bg-primary rounded-full opacity-50 cursor-not-allowed" aria-hidden="true">
                          <span className="text-xs text-text-light font-bold">פעיל</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg border border-section-light dark:border-section-dark">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold font-display mb-1">עוגיות אנליטיקה</h3>
                        <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                          עוגיות אלה עוזרות לנו להבין איך משתמשים משתמשים באתר, כולל מספר המבקרים, זמן שהייה ודפוסי ניווט. זה עוזר לנו לשפר את האתר.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleToggleCategory('analytics')}
                          className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            consent.analytics ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          aria-pressed={consent.analytics}
                          aria-label="הפעל או בטל עוגיות אנליטיקה"
                        >
                          <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                              consent.analytics ? 'translate-x-7' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg border border-section-light dark:border-section-dark">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold font-display mb-1">עוגיות שיווק</h3>
                        <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                          עוגיות אלה משמשות לשליחת פרסומות מותאמות אישית ולמדידת יעילות קמפיינים שיווקיים.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleToggleCategory('marketing')}
                          className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            consent.marketing ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          aria-pressed={consent.marketing}
                          aria-label="הפעל או בטל עוגיות שיווק"
                        >
                          <span
                            className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                              consent.marketing ? 'translate-x-7' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">העדפות שיווק</h2>
                <div className="p-4 bg-background-light dark:bg-background-dark rounded-lg border border-section-light dark:border-section-dark">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold font-display mb-1">הודעות שיווקיות בדוא"ל</h3>
                      <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                        קבל עדכונים על מוצרים חדשים, מבצעים והצעות מיוחדות. אתה יכול לבטל את ההסכמה בכל עת.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        onClick={handleToggleMarketingEmails}
                        className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                          marketingEmailConsent ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        aria-pressed={marketingEmailConsent}
                        aria-label="הפעל או בטל הודעות שיווקיות"
                      >
                        <span
                          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                            marketingEmailConsent ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">סטטוס הסכמה נוכחי</h2>
                <div className="space-y-3 text-base font-body">
                  <div className="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-lg">
                    <span>עוגיות הכרחיות</span>
                    <span className="text-green-600 dark:text-green-400 font-semibold">פעיל</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-lg">
                    <span>עוגיות אנליטיקה</span>
                    <span className={consent.analytics ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-500 font-semibold'}>
                      {consent.analytics ? 'פעיל' : 'לא פעיל'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-lg">
                    <span>עוגיות שיווק</span>
                    <span className={consent.marketing ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-500 font-semibold'}>
                      {consent.marketing ? 'פעיל' : 'לא פעיל'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background-light dark:bg-background-dark rounded-lg">
                    <span>הודעות שיווקיות</span>
                    <span className={marketingEmailConsent ? 'text-green-600 dark:text-green-400 font-semibold' : 'text-gray-500 font-semibold'}>
                      {marketingEmailConsent ? 'פעיל' : 'לא פעיל'}
                    </span>
                  </div>
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-primary text-text-light rounded-lg hover:brightness-90 transition-colors font-display font-bold"
                  >
                    שמור העדפות
                  </button>
                  <button
                    onClick={handleWithdrawAll}
                    className="px-6 py-3 border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                  >
                    בטל את כל ההסכמות
                  </button>
                  <Link
                    href="/privacy"
                    className="px-6 py-3 text-center border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                  >
                    קרא עוד על מדיניות הפרטיות
                  </Link>
                </div>
              </section>

              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">מידע נוסף</h2>
                <div className="space-y-3 text-base font-body">
                  <p>
                    למידע נוסף על איך אנו משתמשים במידע האישי שלך, עיין ב<Link href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</Link> שלנו.
                  </p>
                  <p>
                    אם ברצונך לממש זכויות נוספות (כגון גישה למידע, עדכון או מחיקה), תוכל להגיש בקשה דרך <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link>.
                  </p>
                  <p>
                    אם יש לך שאלות נוספות, אנא <Link href="/contact" className="text-primary hover:underline">צור קשר</Link> איתנו.
                  </p>
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

