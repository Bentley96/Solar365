// Submits website enquiry forms to the WordPress backend.
//
// The form data is POSTed to a WordPress REST endpoint which stores the lead
// and emails it to the sales team via wp_mail() (routed through SMTP or Mailgun
// depending on how the site is configured). See wordpress/inc/quote-form.php.
//
// The endpoint defaults to a same-origin WordPress REST route, which is correct
// once the built app is served from within the WordPress theme. During local
// development against a remote WP install, set VITE_QUOTE_ENDPOINT to the full
// URL (e.g. https://solar-365.co.uk/wp-json/solar365/v1/quote).

import { getRecaptchaToken } from './recaptcha';

const QUOTE_ENDPOINT =
  (import.meta.env.VITE_QUOTE_ENDPOINT as string | undefined) ??
  '/wp-json/solar365/v1/quote';

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  installation_type: string;
  message?: string;
  /** Honeypot — must stay empty; real users never fill it. */
  website?: string;
}

const COMPLAINT_ENDPOINT =
  (import.meta.env.VITE_COMPLAINT_ENDPOINT as string | undefined) ??
  '/wp-json/solar365/v1/complaint';

export interface ComplaintRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  /** Honeypot — must stay empty; real users never fill it. */
  website?: string;
}

async function postForm(endpoint: string, data: object, action: string) {
  // Attach a reCAPTCHA v3 token (verified server-side). If the reCAPTCHA script
  // is blocked/unavailable the token is empty and the server decides how to
  // handle it.
  let recaptcha_token = '';
  try {
    recaptcha_token = await getRecaptchaToken(action);
  } catch {
    // ignore — submit without a token
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, recaptcha_token }),
  });

  if (!res.ok) {
    let detail = '';
    try {
      detail = ((await res.json()) as { message?: string })?.message ?? '';
    } catch {
      // ignore non-JSON error bodies
    }
    throw new Error(detail || `Submission failed (${res.status})`);
  }
}

export function submitQuoteRequest(data: QuoteRequest) {
  return postForm(QUOTE_ENDPOINT, data, 'quote');
}

export function submitComplaint(data: ComplaintRequest) {
  return postForm(COMPLAINT_ENDPOINT, data, 'complaint');
}
