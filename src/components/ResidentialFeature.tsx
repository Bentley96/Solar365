import { ArrowRight, CheckCircle, Battery, Sun, Phone } from 'lucide-react';

const highlights = [
  'Reduce electricity bills by up to 70%',
  'Compatible with Tesla Powerwall &amp; all leading batteries',
  'MCS certified installation, full system warranty',
  'Tailored to your roof, energy use &amp; budget',
  'Smart monitoring via app — track generation &amp; savings',
  'Qualify for Octopus smart export payments',
];

export default function ResidentialFeature() {
  return (
    <section className="bg-white section-padding" id="residential">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Our Core Service</p>
          <h2 className="section-heading mb-3">Residential Solar &amp; Battery Storage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            The smartest investment your home can make. Premium solar panels, intelligent battery
            storage, and expert installation — all from a team you can trust.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left — image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/4254151/pexels-photo-4254151.jpeg?auto=compress&cs=tinysrgb&w=900&h=680&fit=crop"
                alt="Residential solar panel installation"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-4 sm:right-4 bg-navy-900 text-white rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-3xl font-extrabold text-solar-400">70%</p>
              <p className="text-sm text-navy-200 font-medium">Max bill reduction</p>
            </div>
          </div>

          {/* Right — copy */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Cut Your Bills from Day One
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our residential solar installations are designed to maximise your energy generation,
              minimise your grid reliance, and pay for themselves in savings. Pair your panels with
              a battery storage system — including Tesla Powerwall — and you'll have clean energy
              on tap, day or night.
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-solar-500 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: h }} />
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#quote" className="btn-primary-lg">
                Get a Residential Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:01302456613" className="btn-outline-navy px-6 py-4 text-base">
                <Phone className="w-4 h-4" />
                01302 456 613
              </a>
            </div>
          </div>
        </div>

        {/* Battery / Tesla feature strip */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-navy-900 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-12 h-12 bg-solar-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Battery className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold mb-1">Tesla Powerwall Certified</p>
              <p className="text-navy-300 text-sm leading-relaxed">
                As a Tesla Certified Installer, we design and fit Powerwall battery systems
                that seamlessly integrate with your solar. Store surplus energy &amp; use it
                when it matters most.
              </p>
              <a href="#case-studies" className="text-solar-400 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                See our Tesla case study <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="bg-solar-50 rounded-2xl p-6 flex gap-4 items-start border border-solar-100">
            <div className="w-12 h-12 bg-solar-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-navy-900 font-bold mb-1">Free Home Energy Survey</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not sure if solar is right for your home? Book a free, no-obligation site survey.
                We'll assess your roof, energy usage &amp; recommend the ideal system.
              </p>
              <a href="#quote" className="text-solar-600 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Book free survey <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
