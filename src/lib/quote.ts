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
}

export async function submitQuoteRequest(data: QuoteRequest) {
  const res = await fetch(QUOTE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
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
