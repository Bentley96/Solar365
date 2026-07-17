// reCAPTCHA v3 helper. Loads Google's script on demand and returns a token for
// a given action, which the server verifies. The site key is public by design.
export const RECAPTCHA_SITE_KEY =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) ??
  '6LfvT1gtAAAAAOMhZ8c9ad1U4fRgZfvig5gG0L9f';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('reCAPTCHA failed to load'));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/** Returns a fresh reCAPTCHA v3 token for the given action (e.g. "quote"). */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY) return '';
  await loadScript();
  const grecaptcha = window.grecaptcha;
  if (!grecaptcha) throw new Error('reCAPTCHA unavailable');
  return new Promise<string>((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve, reject);
    });
  });
}
