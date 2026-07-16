import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  installation_type: string;
  message?: string;
}

export async function submitQuoteRequest(data: QuoteRequest) {
  if (!supabase) throw new Error('Database not configured');
  const { error } = await supabase.from('quote_requests').insert([data]);
  if (error) throw error;

  // Email the submission to the sales team (sales@solar-365.co.uk, with jordan@
  // cc'd and lewis@/lucie@ bcc'd — configured in the send-quote-email function).
  const { error: emailError } = await supabase.functions.invoke('send-quote-email', {
    body: data,
  });
  if (emailError) throw emailError;
}
