// ─── Meta Pixel / Analytics helpers ──────────────────────────────────────────
// Usage: import { trackEvent } from '@/lib/analytics'
//        trackEvent('Lead', { content_name: 'homepage_form' })

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

type PixelEvent =
  | 'PageView'
  | 'Lead'
  | 'Purchase'
  | 'Contact'
  | 'InitiateCheckout'
  | 'ViewContent'
  | 'AddToCart'
  | 'CompleteRegistration';

interface EventParams {
  value?: number;
  currency?: string;
  content_name?: string;
  content_type?: string;
  content_ids?: string[];
  [key: string]: unknown;
}

export function trackEvent(event: PixelEvent, params?: EventParams) {
  if (typeof window === 'undefined') return;

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', event, params);
  }

  // Google Analytics (if added later)
  if (window.gtag) {
    window.gtag('event', event.toLowerCase(), params);
  }

  // Dev logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${event}`, params);
  }
}

export function trackPageView() {
  trackEvent('PageView');
}

export function trackLead(source?: string) {
  trackEvent('Lead', { content_name: source || 'unknown' });
}

export function trackInitiateCheckout(programName: string, value: number) {
  trackEvent('InitiateCheckout', {
    content_name: programName,
    value,
    currency: 'INR',
  });
}

export function trackPurchase(programName: string, value: number) {
  trackEvent('Purchase', {
    content_name: programName,
    value,
    currency: 'INR',
  });
}

export function trackViewContent(programName: string) {
  trackEvent('ViewContent', {
    content_name: programName,
    content_type: 'program',
  });
}
