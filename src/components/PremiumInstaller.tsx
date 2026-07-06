import { ArrowRight, Award, ShieldCheck, BadgeCheck, Star } from 'lucide-react';
import { useQuote } from './QuoteContext';

const points = [
  {
    icon: BadgeCheck,
    title: 'Premium SIG Energy Installer',
    description:
      'As an approved Premium SIG Energy Installer, we\'ve been vetted and trusted to install SIG Energy\'s premium range of solar and battery technology — giving our customers access to leading products, extended manufacturer warranties and complete peace of mind.',
  },
  {
    icon: Award,
    title: 'Premium Tesla Installer',
    description:
      'As a certified Tesla Installer, we design and fit Tesla Powerwall battery storage to the highest standards — so you can store the energy your panels generate and power your home around the clock, backed by Tesla\'s market-leading warranty.',
  },
];

export default function PremiumInstaller() {
  const { openQuote } = useQuote();
  return (
    <section className="bg-white section-padding border-y border-gray-100">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy (right on desktop) */}
          <div className="lg:order-last">
            <div className="inline-flex items-center gap-2 bg-solar-50 border border-solar-200 text-solar-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              <Star className="w-3.5 h-3.5" />
              Premium Accredited Installer
            </div>

            <h2 className="section-heading mb-4">
              Yorkshire's Premium Solar and{' '}
              <span className="text-solar-500">Battery Installer</span>
            </h2>

            <p className="text-gray-600 mb-8 text-base leading-relaxed max-w-xl">
              We don't cut corners. Solar 365 holds premium installer status — meaning premium
              products, premium workmanship and premium aftercare on every project we take on.
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
                MCS accredited · Fully warrantied
              </span>
            </div>
          </div>

          {/* Image (left on desktop) */}
          <div className="relative lg:order-first">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/NewProject/tesla.jpeg"
                alt="Solar 365 premium Tesla installation"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
