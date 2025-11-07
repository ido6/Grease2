'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  getCookieConsent, 
  saveCookieConsent, 
  hasGivenConsent,
  loadAnalyticsScripts,
  loadMarketingScripts,
  type CookieConsent 
} from '@/lib/cookie-utils';
import { logCookieConsent } from '@/lib/consent-logger';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: '1.0',
  });
  const bannerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if user has already given consent
    if (hasGivenConsent()) {
      const savedConsent = getCookieConsent();
      if (savedConsent) {
        setConsent(savedConsent);
        // Load scripts based on saved consent
        if (savedConsent.analytics) {
          loadAnalyticsScripts();
        }
        if (savedConsent.marketing) {
          loadMarketingScripts();
        }
      }
      return;
    }
    
    // Show banner if no consent has been given
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      bannerRef.current?.focus();
    }
  }, [isOpen, showDetails]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
      version: '1.0',
    };
    saveCookieConsent(newConsent);
    setConsent(newConsent);
    
    // Log consent
    logCookieConsent('analytics', true);
    logCookieConsent('marketing', true);
    
    setIsOpen(false);
    
    // Load scripts based on consent
    loadAnalyticsScripts();
    loadMarketingScripts();
  };

  const handleRejectAll = () => {
    const newConsent: CookieConsent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
      version: '1.0',
    };
    saveCookieConsent(newConsent);
    setConsent(newConsent);
    
    // Log consent
    logCookieConsent('analytics', false);
    logCookieConsent('marketing', false);
    
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(consent);
    
    // Log consent
    logCookieConsent('analytics', consent.analytics);
    logCookieConsent('marketing', consent.marketing);
    
    setIsOpen(false);
    
    // Load scripts based on consent
    if (consent.analytics) {
      loadAnalyticsScripts();
    }
    if (consent.marketing) {
      loadMarketingScripts();
    }
  };

  const handleToggleCategory = (category: 'analytics' | 'marketing') => {
    setConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-background-light dark:bg-background-dark border-t border-section-light dark:border-section-dark shadow-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      ref={bannerRef}
      tabIndex={-1}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex flex-col gap-4">
          {/* Main Banner */}
          {!showDetails && (
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 id="cookie-consent-title" className="text-lg font-bold font-display mb-2">
                  שימוש בעוגיות
                </h3>
                <p className="text-sm md:text-base font-body text-text-light/80 dark:text-text-dark/80">
                  אנו משתמשים בעוגיות כדי לשפר את חוויית השימוש באתר, לנתח את השימוש ולספק תוכן מותאם אישית. 
                  על ידי המשך השימוש באתר, אתה מסכים לשימוש בעוגיות. 
                  למידע נוסף, עיין ב<Link href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</Link> שלנו.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:flex-shrink-0">
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 text-sm font-medium border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                >
                  הגדרות
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                >
                  דחה הכל
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium bg-primary text-text-light rounded-lg hover:brightness-90 transition-colors font-display font-bold"
                >
                  קבל הכל
                </button>
              </div>
            </div>
          )}

          {/* Detailed Settings */}
          {showDetails && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold font-display mb-4">הגדרות עוגיות</h3>
                <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80 mb-4">
                  בחר את סוגי העוגיות שאתה מאפשר. עוגיות הכרחיות תמיד פעילות ואי אפשר לבטלן.
                </p>
              </div>

              {/* Essential Cookies */}
              <div className="p-4 bg-section-light dark:bg-section-dark rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold font-display mb-1">עוגיות הכרחיות</h4>
                    <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
                      עוגיות אלה נחוצות לפעולת האתר ואי אפשר להפעיל את האתר בלעדיהן. הן כוללות זכירת העדפות, אבטחה ופונקציות בסיסיות.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-6 bg-primary rounded-full opacity-50 cursor-not-allowed">
                      <span className="text-xs text-text-light font-bold">פעיל</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-4 bg-section-light dark:bg-section-dark rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold font-display mb-1">עוגיות אנליטיקה</h4>
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
                      aria-label="Toggle analytics cookies"
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

              {/* Marketing Cookies */}
              <div className="p-4 bg-section-light dark:bg-section-dark rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-bold font-display mb-1">עוגיות שיווק</h4>
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
                      aria-label="Toggle marketing cookies"
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2 text-sm font-medium border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                >
                  ביטול
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
                >
                  דחה הכל
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium bg-primary text-text-light rounded-lg hover:brightness-90 transition-colors font-display font-bold"
                >
                  שמור העדפות
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

