import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  postcode: string;
  installation_type: string;
  message?: string;
}

export async function submitQuoteRequest(data: QuoteRequest) {
  const { error } = await supabase.from('quote_requests').insert([data]);
  if (error) throw error;
}
