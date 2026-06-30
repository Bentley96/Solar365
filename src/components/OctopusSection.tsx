import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  'Thoroughly vetted to Octopus Energy\'s highest standards',
  'Approved to install solar panels, battery storage, EV chargers & heat pumps',
  'Earn £50 off your first Octopus Energy bill when you switch',
  'Access to exclusive Octopus Energy tariffs and smart energy products',
  'Trusted by one of the UK\'s highest-rated energy suppliers',
];

export default function OctopusSection() {
  return (
    <section className="bg-white section-padding border-b border-gray-100">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-solar-50 border border-solar-200 text-solar-600 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span>Official Partnership</span>
            </div>

            <h2 className="section-heading mb-4">
              Yorkshire's Octopus Energy<br />
              <span className="text-solar-500">Trusted Installer</span>
            </h2>

            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Being an Octopus Energy Trusted Installer isn't something you can just sign up for.
              We've been thoroughly vetted, inspected, and approved by one of the UK's most
              trusted energy suppliers — so when you choose Solar 365, you're choosing a team
              that's already passed the highest standards of quality and professionalism.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
                  <CheckCircle className="w-4 h-4 text-solar-500 mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://octopus.energy/quote/?affiliate=solar365"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Find Out More
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#quote" className="btn-outline-navy">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-solar-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xl">O</span>
              </div>
              <div>
                <p className="text-navy-900 font-bold text-lg">Octopus Energy</p>
                <p className="text-gray-500 text-sm">Trusted Installer Partner</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-solar-500 font-bold text-2xl mb-1">£50</p>
                <p className="text-gray-600 text-sm">Off your first Octopus Energy bill when you switch through Solar 365</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <p className="text-navy-900 font-bold text-lg mb-1">Smart Export Guarantee</p>
                <p className="text-gray-600 text-sm">Get paid for the excess energy your solar panels generate and export to the grid</p>
              </div>
            </div>

            <a
              href="https://octopus.energy/quote/?affiliate=solar365"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center"
            >
              Switch to Octopus + Solar 365
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
