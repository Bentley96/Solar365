import { ArrowRight, ShieldCheck, BadgeCheck, PoundSterling, Thermometer } from 'lucide-react';
import { useQuote } from './QuoteContext';

const points = [
  {
    icon: BadgeCheck,
    title: 'Cosy & Valen Models',
    description:
      'We install the full range of Cosy and Valen air source heat pump models, matched to your home for maximum efficiency and cosy warmth all year round — even on the coldest Yorkshire days.',
  },
  {
    icon: PoundSterling,
    title: '£7,000 Grant — Claim Now',
    description:
      'Thanks to the government grant scheme, you can claim a £7,000 grant towards your air source heat pump right now — making the switch to low-carbon heating more affordable than ever.',
  },
];

export default function OctopusHeatPumps() {
  const { openQuote } = useQuote();
  return (
    <section className="bg-white section-padding border-y border-gray-100">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy (left on desktop) */}
          <div>
            <div className="inline-flex items-center gap-2 bg-solar-50 border border-solar-200 text-solar-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              <Thermometer className="w-3.5 h-3.5" />
              Accredited Cosy Installer
            </div>

            <h2 className="section-heading mb-4">
              Octopus Cosy{' '}
              <span className="text-solar-500">Air Source Heat Pumps</span>
            </h2>

            <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-xl">
              As a Trusted and Accredited Cosy Installer in Doncaster, Solar 365 installs Octopus
              Cosy air source heat pumps — a cleaner, cheaper and greener way to heat your home and
              hot water all year round.
            </p>

            <div className="space-y-6 mb-8">
              {points.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-solar-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary-lg" onClick={openQuote}>
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="inline-flex items-center gap-2 text-navy-800 text-sm font-medium">
                <ShieldCheck className="w-4 h-4 text-solar-500" />
                Accredited Cosy Installer · £7,000 grant available
              </span>
            </div>
          </div>

          {/* Image (right on desktop) */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/Latest/cosy.png"
                alt="Octopus Cosy air source heat pump installation in Doncaster"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
