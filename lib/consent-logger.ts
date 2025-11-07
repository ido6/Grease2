/**
 * Consent logging system for tracking user consents
 * Complies with Amendment 13 to Israel's Privacy Protection Law
 */

export type ConsentType = 
  | 'cookie_essential'
  | 'cookie_analytics'
  | 'cookie_marketing'
  | 'privacy_policy'
  | 'marketing_emails'
  | 'data_processing';

export interface ConsentLog {
  id: string;
  timestamp: number;
  consentType: ConsentType;
  granted: boolean;
  userId?: string; // Optional user identifier (email, etc.)
  ipAddress?: string; // Optional IP address (if available)
  userAgent?: string; // Browser user agent
  version: string; // Version of consent text/policy
  metadata?: Record<string, any>; // Additional metadata
}

const CONSENT_LOGS_KEY = 'consent_logs';
const MAX_LOGS = 1000; // Maximum number of logs to keep in localStorage

/**
 * Log a consent event
 */
export function logConsent(
  consentType: ConsentType,
  granted: boolean,
  options?: {
    userId?: string;
    version?: string;
    metadata?: Record<string, any>;
  }
): void {
  if (typeof window === 'undefined') return;

  const log: ConsentLog = {
    id: generateId(),
    timestamp: Date.now(),
    consentType,
    granted,
    userId: options?.userId,
    userAgent: navigator.userAgent,
    version: options?.version || '1.0',
    metadata: options?.metadata,
  };

  try {
    const logs = getConsentLogs();
    logs.push(log);
    
    // Keep only the most recent logs
    if (logs.length > MAX_LOGS) {
      logs.splice(0, logs.length - MAX_LOGS);
    }
    
    localStorage.setItem(CONSENT_LOGS_KEY, JSON.stringify(logs));
    
    // Also try to send to server if endpoint exists
    // This is a placeholder - implement based on your backend
    sendConsentLogToServer(log).catch(err => {
      console.warn('Failed to send consent log to server:', err);
    });
  } catch (error) {
    console.error('Failed to log consent:', error);
  }
}

/**
 * Get all consent logs
 */
export function getConsentLogs(): ConsentLog[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(CONSENT_LOGS_KEY);
    if (!stored) return [];
    
    return JSON.parse(stored) as ConsentLog[];
  } catch {
    return [];
  }
}

/**
 * Get consent logs for a specific type
 */
export function getConsentLogsByType(consentType: ConsentType): ConsentLog[] {
  const logs = getConsentLogs();
  return logs.filter(log => log.consentType === consentType);
}

/**
 * Get the most recent consent for a specific type
 */
export function getLatestConsent(consentType: ConsentType): ConsentLog | null {
  const logs = getConsentLogsByType(consentType);
  if (logs.length === 0) return null;
  
  // Sort by timestamp descending and return the most recent
  logs.sort((a, b) => b.timestamp - a.timestamp);
  return logs[0];
}

/**
 * Check if user has granted consent for a specific type
 */
export function hasGrantedConsent(consentType: ConsentType): boolean {
  const latest = getLatestConsent(consentType);
  return latest !== null && latest.granted === true;
}

/**
 * Clear all consent logs (for testing or user request)
 */
export function clearConsentLogs(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(CONSENT_LOGS_KEY);
  } catch (error) {
    console.error('Failed to clear consent logs:', error);
  }
}

/**
 * Export consent logs (for compliance reporting)
 */
export function exportConsentLogs(): string {
  const logs = getConsentLogs();
  return JSON.stringify(logs, null, 2);
}

/**
 * Generate a unique ID for a consent log
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Send consent log to server (placeholder - implement based on your backend)
 */
async function sendConsentLogToServer(log: ConsentLog): Promise<void> {
  // TODO: Implement API endpoint to receive consent logs
  // Example:
  // await fetch('/api/consent-logs', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(log),
  // });
}

/**
 * Log cookie consent
 */
export function logCookieConsent(
  category: 'essential' | 'analytics' | 'marketing',
  granted: boolean
): void {
  const consentType: ConsentType = 
    category === 'essential' ? 'cookie_essential' :
    category === 'analytics' ? 'cookie_analytics' :
    'cookie_marketing';
  
  logConsent(consentType, granted, {
    version: '1.0',
  });
}

/**
 * Log privacy policy consent (from contact form, etc.)
 */
export function logPrivacyPolicyConsent(granted: boolean, userId?: string): void {
  logConsent('privacy_policy', granted, {
    userId,
    version: '1.0',
  });
}

/**
 * Log marketing email consent
 */
export function logMarketingConsent(granted: boolean, userId?: string): void {
  logConsent('marketing_emails', granted, {
    userId,
    version: '1.0',
  });
}

