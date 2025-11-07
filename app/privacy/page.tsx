import Script from 'next/script';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { buildBreadcrumbJsonLd, buildPageMetadata, jsonLdScript, SITE_URL } from '@/lib/seo-config';

export const metadata = buildPageMetadata({
  titleHe: 'מדיניות פרטיות Grease Shoes',
  titleEn: 'Grease Shoes Privacy Policy',
  descriptionHe: 'מדיניות הפרטיות של Grease Shoes בהתאם לחוק הגנת הפרטיות ותיקון 13, כולל זכויות משתמש וגילוי עוגיות.',
  descriptionEn: 'Grease Shoes privacy policy aligned with Israeli Privacy Protection Law Amendment 13, including cookies and user rights.',
  path: '/privacy'
});

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PrivacyPolicy',
  name: 'מדיניות פרטיות Grease Shoes',
  url: `${SITE_URL}/privacy`,
  description: metadata.description
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'דף הבית', url: SITE_URL },
  { name: 'מדיניות פרטיות', url: `${SITE_URL}/privacy` }
]);

export default function PrivacyPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Script
        id="privacy-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(privacyJsonLd)}
      />
      <Script
        id="privacy-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd)}
      />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl w-full flex-1">
            <main className="flex flex-col gap-8 md:gap-12">
              {/* Privacy Policy Header */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold font-display mb-6">מדיניות פרטיות</h1>
                <p className="text-lg font-body leading-relaxed mb-4">
                  מדיניות פרטיות זו מסבירה כיצד Grease Shoes ("אנו", "שלנו", "החברה") אוספת, משתמשת, מגנה ומחשיפה את המידע האישי שלך בהתאם לחוק הגנת הפרטיות, התשמ"א–1981 ותיקון 13 לחוק.
                </p>
                <p className="text-sm font-body text-text-light/70 dark:text-text-dark/70">
                  עודכן לאחרונה: {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>

              {/* Data Controller Information */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">זהות מבקר הנתונים (Data Controller)</h2>
                <div className="flex flex-col gap-3 text-base font-body">
                  <p><strong>שם החברה:</strong> Grease Shoes</p>
                  <p><strong>כתובת:</strong> ישראל</p>
                  <p><strong>דוא"ל:</strong> <a href="/contact" className="text-primary hover:underline">דף יצירת קשר</a></p>
                  <p className="mt-2">
                    אנו אחראים על המידע האישי שאנו אוספים ומעבדים דרך האתר. אם יש לך שאלות או בקשות בנוגע למידע האישי שלך, אנא פנה אלינו באמצעות <Link href="/contact" className="text-primary hover:underline">דף יצירת קשר</Link> או <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link>.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">1. המידע שאנו אוספים ומטרות האיסוף</h2>
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-bold font-display mb-3">מידע אישי שאתה מספק</h3>
                    <div className="space-y-4 text-base font-body">
                      <div>
                        <p className="font-semibold mb-1">שם מלא:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> זיהוי וטיפול בפניות שלך, יצירת קשר אישי</li>
                          <li><strong>השלכות של סירוב לספק:</strong> לא נוכל לטפל בפניותיך באופן אישי או ליצור איתך קשר</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">כתובת דוא"ל:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> תגובה לפניות, שליחת עדכונים חשובים, יצירת קשר</li>
                          <li><strong>השלכות של סירוב לספק:</strong> לא נוכל ליצור איתך קשר או לשלוח עדכונים</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">מספר טלפון:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> יצירת קשר דחוף או אישי (אם סיפקת מרצונך)</li>
                          <li><strong>השלכות של סירוב לספק:</strong> לא נוכל ליצור איתך קשר טלפוני</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">כתובת מגורים:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> משלוח מוצרים (אם רלוונטי להזמנות)</li>
                          <li><strong>השלכות של סירוב לספק:</strong> לא נוכל לספק שירותי משלוח אם נדרש</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">הודעות ומידע נוסף:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> הבנת בקשותיך וטיפול בהן</li>
                          <li><strong>השלכות של סירוב לספק:</strong> לא נוכל להבין או לטפל בבקשותיך במלואן</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold font-display mb-3">מידע טכני שנאסף אוטומטית</h3>
                    <div className="space-y-4 text-base font-body">
                      <div>
                        <p className="font-semibold mb-1">כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שביקרת, זמן ביקור, מקור הפניה:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li><strong>מטרה:</strong> שיפור ביצועי האתר, ניתוח סטטיסטי, אבטחת האתר, מניעת הונאות</li>
                          <li><strong>השלכות של סירוב:</strong> חלק מהפונקציות באתר עלולות לא לעבוד כראוי, חוויית המשתמש עלולה להיפגע</li>
                          <li><strong>הערה:</strong> מידע זה נאסף אוטומטית בעת השימוש באתר. ניתן לשלוט בחלק מהמידע דרך הגדרות העוגיות ב<Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link>.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">2. אופן השימוש במידע</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  אנו משתמשים במידע שאנו אוספים למטרות הבאות:
                </p>
                <ul className="list-disc pr-6 space-y-2 text-base font-body">
                  <li>מתן שירותים וטיפול בפניות שלך</li>
                  <li>שיפור חוויית המשתמש באתר</li>
                  <li>שליחת עדכונים והודעות חשובות</li>
                  <li>שליחת הצעות שיווקיות ומידע על מוצרים חדשים (רקכמתך המפורשת)</li>
                  <li>ניתוח סטטיסטי לשיפור האתר והשירותים</li>
                  <li>אכיפת תנאי השימוש והגנה על זכויותינו החוקיות</li>
                  <li>עמידה בחובות משפטיות וחוקיות</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">3. שיתוף מידע עם צדדים שלישיים ומעבדי נתונים</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  אנו לא מוכרים, משכירים או מעבירים את המידע האישי שלך לצדדים שלישיים למטרות מסחריות. אנו עשויים לשתף מידע עם הגופים הבאים:
                </p>
                <div className="space-y-4 text-base font-body">
                  <div>
                    <p className="font-semibold mb-2">ספקי שירותים (מעבדי נתונים):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">אנו משתמשים בשירותים של חברות המסייעות לנו להפעיל את האתר ולספק שירותים, כולל:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li><strong>ספקי אירוח (Hosting):</strong> חברות המארחות את האתר שלנו בשרתים שלהן</li>
                      <li><strong>שירותי אנליטיקה:</strong> כלים לניתוח התנהגות משתמשים באתר (רק עם הסכמתך לעוגיות אנליטיקה)</li>
                      <li><strong>שירותי דוא"ל:</strong> ספקים לשליחת הודעות דוא"ל</li>
                    </ul>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2">כל ספקי השירותים מחויבים בחוזים לשמור על סודיות המידע ולהשתמש בו רק למטרות המפורטות ולפי הוראותינו. הם לא רשאים להשתמש במידע למטרות אחרות.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">רשויות חוק:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">כאשר נדרש על פי חוק, תקנות, צווי בית משפט, או כאשר אנו מאמינים שזה נחוץ להגנה על זכויותינו או על בטיחות המשתמשים.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">יועצים מקצועיים:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">עורכי דין, רואי חשבון ויועצים אחרים המסייעים לנו בניהול העסק, בכפוף לחובות סודיות מקצועיות.</p>
                  </div>
                </div>
                <p className="text-base font-body leading-relaxed mt-4 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <strong>העברות חוץ-מדינתיות:</strong> חלק מספקי השירותים שלנו עשויים להיות ממוקמים מחוץ לישראל (למשל, שירותי ענן בינלאומיים). כאשר אנו מעבירים מידע אישי מחוץ לישראל, אנו מוודאים שקיימים הסכמי הגנת נתונים מתאימים או שהמדינה המקבלת נמצאת ברשימת המדינות עם רמת הגנה נאותה לפי החוק הישראלי.
                </p>
              </section>

              {/* Cookies */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">4. שימוש בעוגיות (Cookies) וטכנולוגיות דומות</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  האתר שלנו משתמש בעוגיות וטכנולוגיות דומות (כגון localStorage, pixel tags) לשיפור חוויית המשתמש ולמטרות אחרות. עוגיות הן קבצים קטנים המאוחסנים במחשב או במכשיר שלך.
                </p>
                <div className="space-y-4 text-base font-body">
                  <div>
                    <p className="font-semibold mb-2">עוגיות הכרחיות (Essential Cookies):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">עוגיות אלה נחוצות לפעולת האתר ואי אפשר להפעיל את האתר בלעדיהן. הן כוללות:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li>זכירת העדפות שפה והגדרות</li>
                      <li>אבטחת האתר ומניעת הונאות</li>
                      <li>תמיכה בפונקציות בסיסיות של האתר</li>
                    </ul>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>הסכמה:</strong> עוגיות אלה אינן דורשות הסכמה מכיוון שהן הכרחיות לפעולת האתר.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">עוגיות אנליטיקה (Analytics Cookies):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">עוגיות אלה עוזרות לנו להבין איך משתמשים משתמשים באתר, כולל:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li>מספר המבקרים בדפים שונים</li>
                      <li>זמן שהייה באתר</li>
                      <li>דפוסי ניווט</li>
                    </ul>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>הסכמה:</strong> עוגיות אלה דורשות את הסכמתך המפורשת. ניתן לנהל את ההעדפות ב<Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link>.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">עוגיות שיווק (Marketing Cookies):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">עוגיות אלה משמשות לשליחת פרסומות מותאמות אישית ולמדידת יעילות קמפיינים שיווקיים.</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>הסכמה:</strong> עוגיות אלה דורשות את הסכמתך המפורשת. ניתן לנהל את ההעדפות ב<Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link>.</p>
                  </div>
                </div>
                <p className="text-base font-body leading-relaxed mt-4">
                  אתה יכול לנהל את העדפות העוגיות שלך בכל עת דרך <Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link> או דרך הגדרות הדפדפן שלך. שים לב שסירוב לעוגיות מסוימות עלול להשפיע על תפקוד האתר או על חוויית השימוש.
                </p>
              </section>

              {/* Data Security */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">5. אבטחת מידע ודיווח על פרצות</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  אנו נוקטים אמצעי אבטחה מתאימים להגנה על המידע האישי שלך מפני גישה לא מורשית, שינוי, חשיפה או השמדה, בהתאם לתקנות אבטחת המידע (הגנת הפרטיות) (אבטחת מידע), התשע"ז-2017.
                </p>
                <div className="space-y-3 text-base font-body">
                  <div>
                    <p className="font-semibold mb-2">אמצעי אבטחה שאנו נוקטים:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li>הצפנת מידע בעת העברה (HTTPS)</li>
                      <li>הגבלת גישה למידע אישי רק לעובדים הזקוקים לו</li>
                      <li>מערכות אימות חזקות</li>
                      <li>ניטור ובדיקות אבטחה תקופתיות</li>
                      <li>גיבויים מאובטחים</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="font-semibold mb-2">דיווח על פרצות אבטחה:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                      בהתאם לתיקון 13, אם תתרחש פרצת אבטחה משמעותית שתשפיע על המידע האישי שלך, אנו נודיע לרשות להגנת הפרטיות בהתאם לדרישות החוק. אם הפרצה עלולה לסכן את זכויותיך או את חירותך, נודיע גם לך, במידת האפשר, בהתאם להנחיות הרשות.
                    </p>
                  </div>
                </div>
                <p className="text-base font-body leading-relaxed mt-4">
                  עם זאת, אין מערכת אבטחה מושלמת, ואנו לא יכולים להבטיח אבטחה מוחלטת של המידע. אנו ממליצים לך לנקוט בזהירות בעת שיתוף מידע אישי באינטרנט.
                </p>
              </section>

              {/* User Rights */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">6. זכויותיך ומימושן</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  בהתאם לחוק הגנת הפרטיות ותיקון 13, יש לך הזכויות הבאות:
                </p>
                <div className="space-y-4 text-base font-body">
                  <div>
                    <p className="font-semibold mb-2">זכות לעיין (Right of Access):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">אתה רשאי לבקש לקבל עותק של כל המידע האישי שאנו מחזיקים עליך, כולל:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li>מידע אישי שסיפקת (שם, דוא"ל, טלפון, וכו')</li>
                      <li>מידע טכני שנאסף (כתובת IP, היסטוריית ביקורים, וכו')</li>
                      <li>פרטי עיבוד המידע (מטרות, צדדים שלישיים שקיבלו את המידע)</li>
                    </ul>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>איך לממש:</strong> שלח בקשה דרך <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link> או <Link href="/contact" className="text-primary hover:underline">דף יצירת קשר</Link>. נענה לבקשתך תוך 30 יום (או נסביר מדוע נדרש זמן נוסף).</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכות לעדכן (Right to Rectification):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">אתה רשאי לבקש לתקן או לעדכן מידע לא מדויק או לא מעודכן. אם נתקן את המידע, נשתף את התיקון עם צדדים שלישיים שקיבלו את המידע השגוי, במידת האפשר.</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>איך לממש:</strong> שלח בקשה דרך <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link> או <Link href="/contact" className="text-primary hover:underline">דף יצירת קשר</Link>.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכות למחוק (Right to Erasure / "Right to be Forgotten"):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mb-2">אתה רשאי לבקש למחוק את המידע האישי שלך. נמחק את המידע בכפוף למגבלות חוקיות, כגון:</p>
                    <ul className="list-disc pr-6 space-y-1 text-sm">
                      <li>חובות שמירת רשומות לפי חוק (למשל, רשומות פיננסיות)</li>
                      <li>צורך בהגנה על זכויותינו החוקיות</li>
                      <li>צורך בהגנה על זכויות של צדדים שלישיים</li>
                    </ul>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>איך לממש:</strong> שלח בקשה דרך <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link>. נאשר את המחיקה או נסביר מדוע לא ניתן למחוק את המידע.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכות להתנגד (Right to Object):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">אתה רשאי להתנגד לעיבוד המידע שלך למטרות שיווקיות או לפרופילינג. אם תתנגד, נפסיק להשתמש במידע שלך למטרות אלה.</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>איך לממש:</strong> ניתן לבטל הסכמה לשיווק דרך <Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link> או דרך קישור "הסרה" בהודעות שיווקיות.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכות לחזור בך מהסכמה (Right to Withdraw Consent):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">אם נתת הסכמה לעיבוד מידע מסוים, אתה רשאי לחזור בך מהסכמה זו בכל עת. החזרה בהסכמה לא תשפיע על חוקיות העיבוד שנעשה לפני החזרה.</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80 mt-2"><strong>איך לממש:</strong> ניתן לחזור בהסכמה דרך <Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link> או דרך <Link href="/contact" className="text-primary hover:underline">דף יצירת קשר</Link>.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">זכות להגיש תלונה (Right to Lodge a Complaint):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">אם אתה מאמין שזכויותיך הופרו, אתה רשאי להגיש תלונה לרשות להגנת הפרטיות (הרשות להגנת הפרטיות, אתר: privacy.org.il) או לפנות לבית משפט.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-base font-body leading-relaxed">
                    <strong>אימות זהות:</strong> כדי להגן על המידע שלך, נדרוש אימות זהות לפני מימוש זכויותיך. נבקש ממך לספק מידע מזהה (כגון כתובת דוא"ל או פרטים נוספים) כדי לוודא שאתה הבעלים של המידע.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">7. שמירת מידע ותקופות שמירה</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  אנו נשמור את המידע האישי שלך רק כל עוד הוא נחוץ למטרות המפורטות במדיניות זו, או כנדרש על פי חוק. תקופות השמירה משתנות בהתאם לסוג המידע ולמטרת העיבוד:
                </p>
                <div className="space-y-3 text-base font-body">
                  <div>
                    <p className="font-semibold mb-1">מידע מפניות יצירת קשר:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">נשמור עד 3 שנים ממועד הפניה, אלא אם כן ביקשת שנמחק את המידע קודם לכן.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">מידע טכני (כתובות IP, לוגים):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">נשמור עד 2 שנים, בהתאם לדרישות תקנות אבטחת המידע.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">מידע שיווקי (עם הסכמתך):</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">נשמור עד שתבטל את הסכמתך או עד 5 שנים ממועד האיסוף האחרון, לפי המוקדם מביניהם.</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">מידע הנדרש לשמירה לפי חוק:</p>
                    <p className="text-sm text-text-light/80 dark:text-text-dark/80">נשמור לפי תקופות השמירה הנדרשות בחוק (למשל, רשומות פיננסיות, רשומות מס).</p>
                  </div>
                </div>
                <p className="text-base font-body leading-relaxed mt-4">
                  לאחר תום תקופת השמירה, נמחק את המידע באופן בטוח וסופי, או נאנונימו אותו כך שלא ניתן יהיה לזהות אותך. אם ביקשת מחיקה של המידע שלך, נמחק אותו בהקדם האפשרי, בכפוף למגבלות חוקיות.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">8. שינויים במדיניות</h2>
                <p className="text-base font-body leading-relaxed">
                  אנו רשאים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יפורסם בדף זה עם תאריך העדכון. מומלץ לבדוק מדיניות זו מעת לעת כדי להישאר מעודכן.
                </p>
              </section>

              {/* Privacy Protection Officer */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">8. קצין הגנת הפרטיות (Privacy Protection Officer)</h2>
                <p className="text-base font-body leading-relaxed">
                  בהתאם לתיקון 13, אם החברה עומדת בתנאים המחייבים מינוי קצין הגנת פרטיות (למשל, עיבוד נרחב של מידע רגיש או מעקב שיטתי אחר משתמשים), נמנה קצין הגנת פרטיות שיהיה אחראי על פיקוח על עמידה בחוק והגנה על זכויות המשתמשים. פרטי יצירת קשר עם קצין הגנת הפרטיות יפורסמו כאן בעת הצורך.
                </p>
                <p className="text-base font-body leading-relaxed mt-4">
                  <strong>הערה:</strong> בשלב זה, החברה אינה מחויבת במינוי קצין הגנת פרטיות לפי החוק, אך אנו מקפידים על עמידה בכל דרישות החוק והגנה על זכויות המשתמשים.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">9. שינויים במדיניות</h2>
                <p className="text-base font-body leading-relaxed">
                  אנו רשאים לעדכן מדיניות פרטיות זו מעת לעת. כל שינוי יפורסם בדף זה עם תאריך העדכון. מומלץ לבדוק מדיניות זו מעת לעת כדי להישאר מעודכן.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-section-light dark:bg-section-dark rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">10. יצירת קשר ומימוש זכויות</h2>
                <p className="text-base font-body leading-relaxed mb-4">
                  אם יש לך שאלות או בקשות בנוגע למדיניות פרטיות זו או למימוש זכויותיך, אנא פנה אלינו:
                </p>
                <div className="flex flex-col gap-3 text-base font-body">
                  <p><strong>חברה:</strong> Grease Shoes</p>
                  <p><strong>דרך יצירת קשר כללי:</strong> <Link href="/contact" className="text-primary hover:underline">דף יצירת קשר</Link></p>
                  <p><strong>בקשות מידע אישי (גישה, עדכון, מחיקה):</strong> <Link href="/data-request" className="text-primary hover:underline">טופס בקשות מידע</Link></p>
                  <p><strong>ניהול העדפות פרטיות:</strong> <Link href="/privacy-settings" className="text-primary hover:underline">הגדרות הפרטיות</Link></p>
                </div>
                <p className="text-base font-body leading-relaxed mt-4">
                  נשתדל להגיב לכל פניה תוך 30 יום. אם הבקשה מורכבת, ייתכן שנדרש זמן נוסף, ואנו נודיע לך על כך.
                </p>
              </section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

