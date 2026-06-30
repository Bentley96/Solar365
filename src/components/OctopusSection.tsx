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
    <section className="section-padding bg-gradient-to-br from-[#3a0f73] via-[#2a0a55] to-[#1a0838]">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              Official Partnership
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Yorkshire's Octopus Energy<br />
              <span className="text-[#ff8fcf]">Trusted Installer</span>
            </h2>

            <p className="text-purple-100/80 mb-4 text-base leading-relaxed">
              Being an Octopus Energy Trusted Installer isn't something you can just sign up for.
              We've been thoroughly vetted, inspected, and approved by one of the UK's most
              trusted energy suppliers — so when you choose Solar 365, you're choosing a team
              that's already passed the highest standards of quality and professionalism.
            </p>

            <p className="text-purple-100/80 mb-6 text-base leading-relaxed">
              As an Octopus Trusted Installer, we can also help you switch your energy supplier
              and access smart tariffs that are designed to work hand-in-hand with your solar
              panels and battery storage — so you save even more on your bills.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/90 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#ff8fcf] mt-0.5 flex-shrink-0" />
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
              <a
                href="#quote"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                Get a Solar Quote
              </a>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="space-y-4">
            {/* Octopus badge */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="mb-6">
                <img
                  src="/images/Rectangle-1024x356.png"
                  alt="Octopus Energy Trusted Installer Partner"
                  className="w-full h-auto rounded-xl object-contain"
                />
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
            <div className="bg-[#15062b] border border-white/15 rounded-2xl p-6 text-center">
              <p className="text-white font-bold text-lg mb-2">Ready to switch and save?</p>
              <p className="text-purple-100/80 text-sm mb-5">
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
