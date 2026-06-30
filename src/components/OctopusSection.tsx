import { ArrowRight, CheckCircle, Zap, PoundSterling } from 'lucide-react';

const benefits = [
  'Thoroughly vetted and approved to Octopus Energy\'s highest standards',
  'Approved to install solar panels, battery storage, EV chargers & heat pumps',
  'Earn £50 off your first Octopus Energy bill when you switch through us',
  'Access exclusive Octopus smart tariffs designed to work with your solar system',
  'Smart Export Guarantee — get paid for energy your panels export to the grid',
  'Trusted by one of the UK\'s highest-rated energy suppliers',
];

const octopusFeatures = [
  {
    title: '£50 Off Your First Bill',
    description: 'Switch to Octopus Energy through Solar 365 and get £50 off your first bill — a bonus on top of the savings your solar system already delivers.',
    highlight: '£50',
  },
  {
    title: 'Smart Export Guarantee',
    description: 'Get paid for the surplus energy your solar panels generate and export back to the national grid — Octopus Energy offers some of the best export rates available.',
    highlight: 'Paid for excess',
  },
  {
    title: 'Exclusive Smart Tariffs',
    description: 'Octopus offer smart tariffs like Agile and Intelligent Octopus that are designed to work with solar and battery storage — maximising your savings 24/7.',
    highlight: 'Smart pricing',
  },
];

export default function OctopusSection() {
  return (
    <section className="bg-white section-padding border-b border-gray-100">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f3469b]/10 border border-[#f3469b]/20 text-[#c4307a] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              Official Partnership
            </div>

            <h2 className="section-heading mb-4">
              Yorkshire's Octopus Energy<br />
              <span className="text-solar-500">Trusted Installer</span>
            </h2>

            <p className="text-gray-600 mb-4 text-base leading-relaxed">
              Being an Octopus Energy Trusted Installer isn't something you can just sign up for.
              We've been thoroughly vetted, inspected, and approved by one of the UK's most
              trusted energy suppliers — so when you choose Solar 365, you're choosing a team
              that's already passed the highest standards of quality and professionalism.
            </p>

            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              As an Octopus Trusted Installer, we can also help you switch your energy supplier
              and access smart tariffs that are designed to work hand-in-hand with your solar
              panels and battery storage — so you save even more on your bills.
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
                Switch to Octopus + Save £50
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#quote" className="btn-outline-navy">
                Get a Solar Quote
              </a>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="space-y-4">
            {/* Octopus badge */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#f3469b] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-2xl">O</span>
                </div>
                <div>
                  <p className="text-navy-900 font-bold text-lg">Octopus Energy</p>
                  <p className="text-gray-500 text-sm">Official Trusted Installer Partner</p>
                </div>
              </div>

              <div className="space-y-3">
                {octopusFeatures.map(({ title, description }) => (
                  <div key={title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-solar-50 rounded-lg flex items-center justify-center">
                      <PoundSterling className="w-4 h-4 text-solar-500" />
                    </div>
                    <div>
                      <p className="text-navy-900 font-bold text-sm mb-1">{title}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-navy-900 rounded-2xl p-6 text-center">
              <p className="text-white font-bold text-lg mb-2">Ready to switch and save?</p>
              <p className="text-navy-300 text-sm mb-5">
                Switch your energy to Octopus through Solar 365 and earn £50 off your first bill.
                The perfect partner for your new solar system.
              </p>
              <a
                href="https://octopus.energy/quote/?affiliate=solar365"
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center"
              >
                Switch to Octopus Energy
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
