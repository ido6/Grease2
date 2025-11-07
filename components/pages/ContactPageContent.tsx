'use client';

import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { logPrivacyPolicyConsent } from '@/lib/consent-logger';

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) {
      alert('אנא אשר את מדיניות הפרטיות כדי להמשיך');
      return;
    }

    setIsSubmitting(true);

    logPrivacyPolicyConsent(true, formData.email);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setPrivacyConsent(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8">
              <section className="rounded-xl p-8 md:p-12 bg-section-light dark:bg-section-dark" aria-labelledby="contact-heading">
                <h1 id="contact-heading" className="text-3xl font-bold font-display mb-4">
                  צור קשר
                </h1>
                <p className="text-lg font-body mb-6">נשמח לשמוע ממך! אפשר ליצור קשר דרך הטופס.</p>
                <div className="flex flex-col gap-6 max-w-xl">
                  {isSubmitted ? (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg" role="status">
                      <h2 className="text-xl font-bold font-display mb-2 text-green-800 dark:text-green-200">
                        ההודעה נשלחה בהצלחה!
                      </h2>
                      <p className="text-base font-body text-green-700 dark:text-green-300">
                        תודה על פנייתך. נחזור אליך בהקדם האפשרי.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4" aria-describedby="contact-privacy-note">
                      <label className="flex flex-col gap-2" htmlFor="contact-name">
                        <span className="font-body font-medium">שם מלא</span>
                        <input
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="שם מלא"
                          autoComplete="name"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2" htmlFor="contact-email">
                        <span className="font-body font-medium">אימייל</span>
                        <input
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="אימייל"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          required
                        />
                      </label>
                      <label className="flex flex-col gap-2" htmlFor="contact-message">
                        <span className="font-body font-medium">הודעה</span>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="rounded-lg min-h-32 px-4 py-3 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="הודעה"
                          required
                        />
                      </label>

                      <div className="flex items-start gap-3" id="contact-privacy-note">
                        <input
                          type="checkbox"
                          id="privacy-consent"
                          checked={privacyConsent}
                          onChange={(e) => setPrivacyConsent(e.target.checked)}
                          className="mt-1 size-5 rounded border-section-light dark:border-section-dark text-primary focus:ring-primary"
                          required
                        />
                        <label htmlFor="privacy-consent" className="text-sm font-body leading-relaxed cursor-pointer">
                          אני מאשר/ת כי ידוע לי ומוסכם עלי כי הפרטים שמסרתי ייאספו, יוחזקו ויעובדו במאגר מידע בהתאם להוראות חוק הגנת הפרטיות, התשמ"א–1981 (כולל תיקון 13), ולמטרות המפורטות ב<Link href="/privacy" className="text-primary hover:underline font-bold">מדיניות הפרטיות</Link> של האתר. ידוע לי כי מסירת המידע נעשית מרצוני החופשי, וכי עומדות לי הזכויות המוקנות לי לפי החוק.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="rounded-lg h-12 bg-primary text-text-light font-display font-bold active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!privacyConsent || isSubmitting}
                      >
                        {isSubmitting ? 'שולח...' : 'שליחה'}
                      </button>
                    </form>
                  )}
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

