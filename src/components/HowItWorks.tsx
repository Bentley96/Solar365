import { ArrowRight, Phone } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Free Consultation',
    description:
      'We carry out a free, no-obligation energy survey at your property. We assess your roof, energy usage, and tailor a system recommendation just for you.',
    tag: 'No obligation',
    tagColor: 'bg-solar-100 text-solar-700',
  },
  {
    num: '02',
    title: 'Design & Install',
    description:
      'Our MCS-certified team designs your bespoke solar system and installs it with minimal disruption. Most residential installs are completed in just 1–2 days.',
    tag: '1–2 days',
    tagColor: 'bg-navy-100 text-navy-700',
  },
  {
    num: '03',
    title: 'Start Saving',
    description:
      'From day one, your panels start generating clean energy and cutting your bills. Add battery storage to maximise savings day and night.',
    tag: 'Up to 70% savings',
    tagColor: 'bg-green-100 text-green-700',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-2">The Solar 365 Process</p>
          <h2 className="section-heading mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Going solar has never been simpler. Three steps from enquiry to generating clean,
            free energy on your roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative mb-12">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-solar-200 -translate-y-1/2 pointer-events-none" />

          {steps.map(({ num, title, description, tag, tagColor }) => (
            <div key={num} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-solar-400 font-black text-xl">{num}</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
                {tag}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-navy-800 font-semibold mb-4">Ready to start the process?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn-primary-lg">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:01302456613" className="btn-outline-navy px-8 py-4 text-base">
              <Phone className="w-4 h-4" />
              Call 01302 456 613
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
