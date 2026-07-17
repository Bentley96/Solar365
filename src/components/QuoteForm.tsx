import { useState } from 'react';
import { Phone, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { submitQuoteRequest } from '../lib/quote';
import Honeypot from './Honeypot';

const installationTypes = [
  'Residential Solar',
  'Commercial Solar',
  'Air Source Heat Pump',
  'Battery Storage',
  'Residential Roofing',
  'Not Sure — Advise Me',
];

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', postcode: '', installation_type: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.installation_type) return;
    setStatus('loading');
    try {
      await submitQuoteRequest({
        name: form.name,
        phone: form.phone,
        email: form.email,
        postcode: form.postcode,
        installation_type: form.installation_type,
        message: form.message || undefined,
        website: form.website,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-navy-900 px-6 py-4">
        <h2 className="text-white font-bold text-lg">Request Your Free Quote</h2>
        <p className="text-navy-300 text-sm mt-0.5">One of our specialists will call you within 1 business day</p>
      </div>

      {status === 'success' ? (
        <div className="p-8 text-center">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-navy-900 mb-2">Quote Request Sent!</h3>
          <p className="text-gray-600 mb-6">
            Thanks! One of our solar specialists will be in touch within 1 business day.
          </p>
          <a href="tel:01302456613" className="btn-primary-lg w-full justify-center">
            <Phone className="w-5 h-5" />
            Call Us Now: 01302 456 613
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <Honeypot value={form.website} onChange={(v) => setForm((p) => ({ ...p, website: v }))} />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={set('name')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-1">Phone *</label>
              <input
                type="tel"
                required
                placeholder="07xxx xxxxxx"
                value={form.phone}
                onChange={set('phone')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1">Email Address *</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={set('email')}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-1">Postcode *</label>
              <input
                type="text"
                required
                placeholder="DN1 1AA"
                value={form.postcode}
                onChange={set('postcode')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-navy-800 mb-1">I'm interested in *</label>
              <select
                required
                value={form.installation_type}
                onChange={set('installation_type')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 bg-gray-50"
              >
                <option value="">Select type...</option>
                {installationTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1">Message (optional)</label>
            <textarea
              rows={2}
              placeholder="Anything else you'd like us to know?"
              value={form.message}
              onChange={set('message')}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-navy-900 placeholder-gray-400 bg-gray-50 resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">
              Something went wrong. Please call us on 01302 456 613.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Request Free Quote
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            No spam. We'll only contact you about your enquiry.
          </p>
        </form>
      )}
    </div>
  );
}
