import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Megaphone, Loader2, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitQuoteRequest } from '../lib/supabase';

const installationTypes = [
  'Residential Solar',
  'Commercial Solar',
  'Air Source Heat Pump',
  'Battery Storage',
  'ECO4 Funding',
  'Residential Roofing',
  'Not Sure — Advise Me',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    installation_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Make an Enquiry
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto">
              Contact Solar 365 for tailored energy-saving solutions designed to ensure cost
              efficiency and sustainability.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact details */}
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-8">Contact Details</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-solar-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Phone</p>
                      <a href="tel:01302456613" className="text-gray-600 hover:text-solar-600 transition-colors block">
                        01302 456 613
                      </a>
                      <a href="tel:07432476663" className="text-gray-600 hover:text-solar-600 transition-colors block">
                        07432 476 663
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-solar-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Email</p>
                      <a
                        href="mailto:customerservices@solar-365.co.uk"
                        className="text-gray-600 hover:text-solar-600 transition-colors"
                      >
                        customerservices@solar-365.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-solar-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Hours</p>
                      <p className="text-gray-600">Mon–Fri 9am–5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-solar-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy-900 mb-1">Location</p>
                      <p className="text-gray-600">Doncaster &amp; Yorkshire</p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-10">
                  <p className="font-semibold text-navy-900 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {[
                      { href: 'https://facebook.com/people/Solar-365-Ltd/61567868732789/', Icon: Facebook, label: 'Facebook' },
                      { href: 'https://instagram.com/solar365_/', Icon: Instagram, label: 'Instagram' },
                      { href: 'https://uk.linkedin.com/company/solar365uk', Icon: Linkedin, label: 'LinkedIn' },
                      { href: 'https://www.bark.com/en/gb/company/solar-365-ltd/LJ1eM/', Icon: Megaphone, label: 'Bark' },
                    ].map(({ href, Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center text-white hover:bg-solar-500 hover:text-navy-900 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Send an Enquiry</h2>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-navy-900 mb-2">Message Received!</h3>
                    <p className="text-gray-600">
                      Thank you for getting in touch. We'll be in contact within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1">
                          Full Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Your name"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1">
                          Phone *
                        </label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="Your phone number"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="your@email.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1">
                          Postcode *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.postcode}
                          onChange={set('postcode')}
                          placeholder="e.g. DN1 1AA"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1">
                          Installation Type
                        </label>
                        <select
                          value={form.installation_type}
                          onChange={set('installation_type')}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select type…</option>
                          {installationTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1">
                        Message (optional)
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Tell us about your project…"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center text-base py-3"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        'Send Enquiry'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
