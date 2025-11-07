'use client';

import { useState } from 'react';
import Link from 'next/link';

type RequestType = 'access' | 'delete' | 'update';

interface DataRequestFormProps {
  requestType: RequestType;
}

export default function DataRequestForm({ requestType }: DataRequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual API call to handle data request
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <h3 className="text-xl font-bold font-display mb-2 text-green-800 dark:text-green-200">
          הבקשה התקבלה
        </h3>
        <p className="text-base font-body text-green-700 dark:text-green-300 mb-4">
          תודה על פנייתך. קיבלנו את בקשתך ונטפל בה בהקדם האפשרי.
        </p>
        <div className="space-y-2 text-sm font-body text-green-700 dark:text-green-300">
          <p><strong>מה קורה עכשיו?</strong></p>
          <ul className="list-disc pr-6 space-y-1">
            <li>נבדוק את זהותך כדי להגן על המידע שלך</li>
            <li>נעבד את בקשתך תוך 30 יום (או נודיע לך אם נדרש זמן נוסף)</li>
            <li>ניצור איתך קשר בכתובת הדוא"ל שסיפקת</li>
          </ul>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
          }}
          className="mt-4 px-4 py-2 bg-primary text-text-light rounded-lg hover:brightness-90 transition-colors font-display font-bold"
        >
          שליחת בקשה נוספת
        </button>
      </div>
    );
  }

  const requestTypeLabels = {
    access: {
      title: 'בקשת גישה למידע',
      description: 'בקש לקבל עותק של כל המידע האישי שאנו מחזיקים עליך',
      instructions: 'אנא מלא את הפרטים הבאים כדי שנוכל לאמת את זהותך ולשלוח לך את המידע שביקשת.',
    },
    delete: {
      title: 'בקשת מחיקת מידע',
      description: 'בקש למחוק את המידע האישי שלך',
      instructions: 'אנא מלא את הפרטים הבאים כדי שנוכל לאמת את זהותך ולמחוק את המידע שביקשת. שים לב: חלק מהמידע עשוי להישמר אם נדרש לפי חוק.',
    },
    update: {
      title: 'בקשת עדכון מידע',
      description: 'בקש לעדכן או לתקן מידע אישי',
      instructions: 'אנא מלא את הפרטים הבאים וציין מה המידע שברצונך לעדכן.',
    },
  };

  const labels = requestTypeLabels[requestType];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">{labels.title}</h2>
        <p className="text-base font-body text-text-light/80 dark:text-text-dark/80 mb-4">
          {labels.description}
        </p>
        <div className="p-4 bg-section-light dark:bg-section-dark rounded-lg">
          <p className="text-sm font-body text-text-light/80 dark:text-text-dark/80">
            {labels.instructions}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium font-body mb-2">
            שם מלא <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium font-body mb-2">
            כתובת דוא"ל <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <p className="text-xs text-text-light/70 dark:text-text-dark/70 mt-1">
            נשתמש בכתובת זו כדי לאמת את זהותך ולשלוח לך את התשובה
          </p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium font-body mb-2">
            מספר טלפון (אופציונלי)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg h-12 px-4 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium font-body mb-2">
            פרטים נוספים {requestType === 'update' && <span className="text-red-500">*</span>}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required={requestType === 'update'}
            rows={4}
            className="w-full rounded-lg px-4 py-3 bg-background-light dark:bg-background-dark border border-section-light dark:border-section-dark focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={requestType === 'update' ? 'ציין מה המידע שברצונך לעדכן...' : 'הוסף פרטים נוספים אם נדרש (אופציונלי)...'}
          />
        </div>

        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm font-body text-yellow-800 dark:text-yellow-200">
            <strong>חשוב:</strong> כדי להגן על המידע שלך, נדרוש אימות זהות לפני מימוש בקשתך. 
            ייתכן שנבקש ממך לספק מידע נוסף או מסמכים מזהה כדי לוודא שאתה הבעלים של המידע.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-primary text-text-light rounded-lg hover:brightness-90 transition-colors font-display font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'שולח...' : 'שלח בקשה'}
          </button>
          <Link
            href="/privacy"
            className="px-6 py-3 text-center border border-section-light dark:border-section-dark rounded-lg hover:bg-section-light dark:hover:bg-section-dark transition-colors font-body"
          >
            קרא עוד על זכויותיך
          </Link>
        </div>
      </form>
    </div>
  );
}

