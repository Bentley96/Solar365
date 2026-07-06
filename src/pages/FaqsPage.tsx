import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const faqs = [
  {
    q: 'How much do solar panels cost?',
    a: 'The cost of a solar panel system varies depending on the size of your property, your energy usage, and the system specification. We provide FREE no-obligation quotes tailored to your specific needs. Most domestic systems range from 4kW to 10kW. Contact us for an accurate quote.',
  },
  {
    q: 'How long does installation take?',
    a: 'Most residential solar installations are completed in just 1–2 days. From initial enquiry to installation, many customers are up and running within a week.',
  },
  {
    q: 'Will solar panels work in cloudy weather?',
    a: "Yes! Solar panels generate electricity from daylight, not direct sunlight, so they work even on cloudy days — just at reduced output. Paired with a battery storage system, you can store energy from sunny periods and use it when it's overcast or at night.",
  },
  {
    q: 'What is MCS accreditation?',
    a: 'MCS (Microgeneration Certification Scheme) accreditation is the industry standard for renewable energy installers in the UK. Solar 365 is fully MCS accredited, meaning our installations meet the highest quality and safety standards.',
  },
  {
    q: 'What is the Octopus Energy Trusted Installer scheme?',
    a: "Octopus Energy's Trusted Installer scheme vets and approves renewable energy installers to their highest standards. Solar 365 is an official Trusted Installer — meaning you can switch your energy to Octopus through us and earn £50 off your first bill.",
  },
  {
    q: 'Do you offer finance?',
    a: 'Yes. We work with Phoenix Financial Consultants to offer flexible finance options, so you can start saving from day one without a large upfront cost. Subject to status and credit checks.',
  },
  {
    q: 'What is the Smart Export Guarantee (SEG)?',
    a: 'The SEG requires energy suppliers to pay you for surplus electricity your solar panels export to the national grid. Octopus Energy offers some of the best SEG rates — another reason to switch through Solar 365.',
  },
  {
    q: 'Am I eligible for ECO4 funding?',
    a: 'ECO4 grants target low-income households and those receiving benefits such as Universal Credit or Pension Credit, with properties rated EPC D–G. Contact us to check your eligibility — it only takes a few minutes.',
  },
  {
    q: 'Do you cover my area?',
    a: 'We are based in Doncaster and cover all of Yorkshire, Lincolnshire, Nottinghamshire, Derbyshire and the wider UK — including Worksop, Retford, Wakefield, Leeds, Sheffield, Gainsborough, Scunthorpe, Goole, Pontefract, Castleford and more.',
  },
  {
    q: 'What warranty do you provide?',
    a: 'All our solar panel systems come with an extensive product and workmanship warranty. We also provide ongoing aftercare support. Contact us for specific warranty details on your chosen system.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-navy-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-solar-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-navy-800 max-w-xl mx-auto">
              Everything you need to know about solar panels, heat pumps, and working with Solar 365.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl max-w-3xl mx-auto">
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-200">
              <p className="text-navy-900 font-semibold text-lg mb-2">
                Still have questions?
              </p>
              <p className="text-gray-600 mb-6">
                Our team is happy to help. Call us or send a quick message.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:01302456613" className="btn-outline-navy">
                  Call 01302 456 613
                </a>
                <a href="/#quote" className="btn-primary">
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
