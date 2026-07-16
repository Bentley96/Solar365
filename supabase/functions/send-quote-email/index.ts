// Supabase Edge Function: send-quote-email
//
// Receives a quote/enquiry submission from the website forms and emails it to
// the sales team via Resend (https://resend.com).
//
// Routing:
//   To:  sales@solar-365.co.uk
//   Cc:  jordan@solar-365.co.uk
//   Bcc: lewis@solar-365.co.uk, lucie@solar-365.co.uk
//
// Required environment variables (set with `supabase secrets set`):
//   RESEND_API_KEY  - Resend API key
//   FROM_EMAIL      - verified sender, e.g. "Solar 365 Website <noreply@solar-365.co.uk>"

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

const TO_EMAIL = 'sales@solar-365.co.uk';
const CC_EMAILS = ['jordan@solar-365.co.uk'];
const BCC_EMAILS = ['lewis@solar-365.co.uk', 'lucie@solar-365.co.uk'];

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface QuotePayload {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  installation_type: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const row = (label: string, value: string) =>
  `<tr><td style="padding:6px 12px;font-weight:600;color:#0f172a;">${label}</td>` +
  `<td style="padding:6px 12px;color:#334155;">${escapeHtml(value)}</td></tr>`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = (await req.json()) as QuotePayload;

    if (!data?.name || !data?.email || !data?.phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const apiKey = Deno.env.get('RESEND_API_KEY');
    const fromEmail =
      Deno.env.get('FROM_EMAIL') ??
      'Solar 365 Website <noreply@solar-365.co.uk>';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#0f172a;">New Website Enquiry</h2>
        <table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px;">
          ${row('Name', data.name)}
          ${row('Phone', data.phone)}
          ${row('Email', data.email)}
          ${row('Postcode', data.postcode)}
          ${row('Interested in', data.installation_type)}
          ${data.message ? row('Message', data.message) : ''}
        </table>
        <p style="color:#64748b;font-size:12px;margin-top:16px;">
          Sent automatically from the Solar 365 website.
        </p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [TO_EMAIL],
        cc: CC_EMAILS,
        bcc: BCC_EMAILS,
        reply_to: data.email,
        subject: `New Enquiry: ${data.installation_type || 'General'} — ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend error:', res.status, detail);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-quote-email error:', err);
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
