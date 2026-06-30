import { ArrowRight, CheckCircle, Battery, Sun, Phone, Home } from 'lucide-react';

const highlights = [
  'Reduce electricity bills by up to 70% from day one',
  'Solar battery storage — power your home day and night',
  'Compatible with Tesla Powerwall &amp; all leading batteries',
  'MCS certified installation with full system warranty',
  'Tailored to your roof, energy usage &amp; budget',
  'Smart app monitoring — track generation &amp; savings live',
  'Earn money back via Octopus smart export payments',
  'All our products come with an extensive product warranty',
];

export default function ResidentialFeature() {
  return (
    <section className="bg-white section-padding" id="residential">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Domestic Solar Installation</p>
          <h2 className="section-heading mb-3">Residential Solar &amp; Battery Storage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Solar PV panels lower your energy bills by up to 70% and reduce your carbon footprint.
            Our solar battery systems ensure electricity is supplied to your home whatever the weather.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left — image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/homepage/residential-solar-installers.jpg.webp"
                alt="Residential solar panel installation on Yorkshire home"
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
            <div className="inline-flex items-center gap-2 bg-solar-50 border border-solar-200 text-solar-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              <Home className="w-3.5 h-3.5" />
              Yorkshire's #1 Home Solar Installer
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Sustainable Solar Energy For Your Home
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The price of energy has increased to record levels — the best way to bring bills down is to reduce
              our reliance on fossil fuels. Solar panels are one of the best and fastest-developing forms of
              renewable energy on the market.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Harnessing solar power for your home means reducing the amount of energy you draw from the grid.
              We also install solar batteries to power your home through the night — so you're generating and
              storing clean energy around the clock.
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
                Get a Free Home Survey
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:01302456613" className="btn-outline-navy px-6 py-4 text-base">
                <Phone className="w-4 h-4" />
                01302 456 613
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Survey completed within days. Most residential installs finished in 1–2 days.
            </p>
          </div>
        </div>

        {/* Battery / Solar Battery feature strip */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="bg-navy-900 rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-12 h-12 bg-solar-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Battery className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold mb-1">Solar Battery Storage Systems</p>
              <p className="text-navy-300 text-sm leading-relaxed">
                Solar 365 can install a home energy storage system so you can store the electricity your
                panels generate during the day and use it at night or on cloudy days. Tesla Powerwall,
                GivEnergy, Sunsynk and more — we'll find the right battery for your home.
              </p>
              <a href="#case-studies" className="text-solar-400 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                See our battery installations <ArrowRight className="w-3.5 h-3.5" />
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
                We'll assess your roof, your energy usage, and recommend the ideal system — then
                provide a full savings projection with no pressure to proceed.
              </p>
              <a href="#quote" className="text-solar-600 text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Book your free survey <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
