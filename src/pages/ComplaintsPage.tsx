import { useState } from 'react';
import { FileText, Loader2, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import { submitComplaint } from '../lib/quote';

// Compliance documents shown as download buttons. Update these hrefs to point at
// the PDFs hosted with the site (currently the originals on solar-365.co.uk).
const documents = [
  { label: 'Trustmark – Customer Charter', href: 'https://solar-365.co.uk/wp-content/uploads/2024/05/Solar-365-document-.pdf' },
  { label: 'P18H Customer Complaints Procedure', href: 'https://solar-365.co.uk/wp-content/uploads/2024/05/Solar-365-document-2.pdf' },
  { label: 'Public & Product Liability', href: 'https://solar-365.co.uk/wp-content/uploads/2024/05/Final-document-needed-.pdf' },
  { label: 'Certificate of Employers Liability Insurance', href: 'https://solar-365.co.uk/wp-content/uploads/2024/05/Final-document-needed-.pdf' },
];

export default function ComplaintsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitComplaint({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
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
        <section className="bg-[#68c0b8] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">
              We&apos;re Listening
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              Complaints &amp; Feedback
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl mx-auto">
              Solar 365 take the feedback and the complaints of our customers very seriously. Please
              fill out the form below, and use the buttons to open documents relating to our
              complaints procedure.
            </p>
          </div>
        </section>

        {/* Documents */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container-xl">
            <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Our Policies &amp; Documents</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {documents.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 hover:border-solar-400 hover:bg-solar-50 transition-colors group"
                >
                  <FileText className="w-6 h-6 text-solar-500 flex-shrink-0" />
                  <span className="text-navy-900 font-semibold text-sm group-hover:text-solar-600">
                    {doc.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Complaint form */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900 mb-1">Submit Your Complaint or Feedback</h2>
              <p className="text-gray-600 text-sm mb-6">
                We aim to respond to all complaints promptly and fairly.
              </p>

              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Thank You</h3>
                  <p className="text-gray-600">
                    Your message has been received. A member of our customer services team will be in
                    touch as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1">Full Name *</label>
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
                      <label className="block text-sm font-medium text-navy-900 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="Your phone number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Complaint Information *</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={set('message')}
                      placeholder="Please enter all of the details relating to your complaint"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">
                      Something went wrong. Please try again or email customerservices@solar-365.co.uk directly.
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
                      'Submit'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
