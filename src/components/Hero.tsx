import { useState } from 'react';
import { Phone, ArrowRight, CheckCircle, Loader2, ShieldCheck, Star, Zap, Award } from 'lucide-react';
import { submitQuoteRequest } from '../lib/supabase';

const trustPills = [
  { icon: ShieldCheck, label: 'MCS Accredited' },
  { icon: Zap, label: 'Octopus Trusted Partner' },
  { icon: Award, label: 'Tesla Certified' },
  { icon: ShieldCheck, label: 'HIES Registered' },
  { icon: Star, label: 'Cosy HP Approved' },
  { icon: Award, label: 'Small Business of the Year Finalist' },
];

const installationTypes = [
  'Residential Solar',
  'Commercial Solar',
  'Air Source Heat Pump',
  'Battery Storage',
  'ECO4 Funding',
  'Residential Roofing',
  'Not Sure — Advise Me',
];

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', postcode: '', installation_type: '', message: '' });
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
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <section id="quote">
      {/* ── Banner with background image ── */}
      <div
        className="relative"
        style={{
          paddingTop: '112px',
          backgroundImage: 'url(https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Overlay — left half opaque white, right fades to transparent on large screens */}
        <div className="absolute inset-0 bg-white/85 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-white/30" />

        <div className="relative container-xl section-padding py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div>
              <p className="section-label mb-3">Yorkshire's Premium Solar Installer</p>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-navy-900 leading-tight mb-5">
                Cut Your Bills.<br />
                <span className="text-solar-500">Go Solar Today.</span>
              </h1>

              <p className="text-lg text-gray-700 mb-7 max-w-xl leading-relaxed">
                15+ years combined experience. MCS accredited. Octopus Energy trusted installer.
                Yorkshire's only Cosy Heat Pump accredited installer based in Doncaster —
                covering Yorkshire, Lincolnshire &amp; beyond.
              </p>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {trustPills.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm text-navy-800 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    <Icon className="w-3.5 h-3.5 text-solar-500 flex-shrink-0" />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="btn-primary-lg">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:01302456613" className="btn-outline-navy text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  01302 456 613
                </a>
              </div>

              <p className="mt-5 text-gray-500 text-sm">
                Free survey. No obligation. No hard sell. Just honest advice.
              </p>
            </div>

            {/* Right — Lead form */}
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
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container-xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Installations Completed' },
            { value: '15+', label: 'Years Combined Experience' },
            { value: '5★', label: 'Average Customer Rating' },
            { value: '£0', label: 'Obligation to Get a Quote' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-extrabold text-solar-500">{value}</p>
              <p className="text-sm text-gray-600 mt-0.5 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
