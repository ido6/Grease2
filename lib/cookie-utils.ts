/**
 * Cookie utility functions for managing consent and cookies
 * Complies with Amendment 13 to Israel's Privacy Protection Law
 */

export type CookieCategory = 'essential' | 'analytics' | 'marketing';

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: string;
}

const CONSENT_STORAGE_KEY = 'cookie_consent';
const CONSENT_VERSION = '1.0';

/**
 * Get current cookie consent preferences
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    
    const consent = JSON.parse(stored) as CookieConsent;
    // Validate consent structure
    if (
      typeof consent.essential === 'boolean' &&
      typeof consent.analytics === 'boolean' &&
      typeof consent.marketing === 'boolean' &&
      typeof consent.timestamp === 'number'
    ) {
      return consent;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Save cookie consent preferences
 */
export function saveCookieConsent(consent: Partial<CookieConsent>): void {
  if (typeof window === 'undefined') return;
  
  const currentConsent = getCookieConsent() || {
    essential: true, // Essential cookies are always true
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  
  const newConsent: CookieConsent = {
    ...currentConsent,
    ...consent,
    essential: true, // Essential cookies cannot be disabled
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(newConsent));
    // Also set a cookie for server-side access if needed
    setCookie('cookie_consent', JSON.stringify(newConsent), 365);
  } catch (error) {
    console.error('Failed to save cookie consent:', error);
  }
}

/**
 * Check if user has given consent for a specific category
 */
export function hasConsent(category: CookieCategory): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;
  
  // Essential cookies are always allowed
  if (category === 'essential') return true;
  
  return consent[category] === true;
}

/**
 * Check if user has given any consent (banner should not show)
 */
export function hasGivenConsent(): boolean {
  const consent = getCookieConsent();
  return consent !== null;
}

/**
 * Clear all consent preferences
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    deleteCookie('cookie_consent');
  } catch (error) {
    console.error('Failed to clear cookie consent:', error);
  }
}

/**
 * Set a cookie
 */
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * Delete a cookie
 */
function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

/**
 * Get a cookie value
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return null;
}

/**
 * Load analytics scripts conditionally based on consent
 */
export function loadAnalyticsScripts(): void {
  if (!hasConsent('analytics')) {
    return;
  }
  
  // Add your analytics scripts here
  // Example: Google Analytics, etc.
  // This is a placeholder - implement based on your analytics provider
}

/**
 * Load marketing scripts conditionally based on consent
 */
export function loadMarketingScripts(): void {
  if (!hasConsent('marketing')) {
    return;
  }
  
  // Add your marketing scripts here
  // Example: Facebook Pixel, etc.
  // This is a placeholder - implement based on your marketing tools
}

