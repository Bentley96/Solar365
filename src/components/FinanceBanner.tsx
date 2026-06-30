import { ArrowRight, CreditCard, Zap } from 'lucide-react';

export default function FinanceBanner() {
  return (
    <section className="bg-navy-50 border-y border-navy-100 py-14">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Octopus */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="mb-4">
              <img
                src="/images/Rectangle-1024x356.png"
                alt="Octopus Energy Trusted Installer Partner"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Switch to Octopus Energy through Solar 365 and earn{' '}
              <strong className="text-navy-900">£50 off your first bill</strong>. Access exclusive
              smart tariffs — including Agile Octopus and Intelligent Octopus — designed to work
              with your solar generation and battery storage, maximising your savings 24/7.
            </p>
            <ul className="space-y-1.5 mb-5">
              {[
                '£50 off your first Octopus Energy bill',
                'Smart Export Guarantee — get paid for exported solar energy',
                'Exclusive smart tariffs for solar households',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                  <Zap className="w-3.5 h-3.5 text-[#f3469b] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://octopus.energy/quote/?affiliate=solar365"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-auto"
            >
              Switch &amp; Earn £50 <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Finance */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-solar-500" />
              </div>
              <div>
                <p className="font-bold text-navy-900">Finance Options Available</p>
                <p className="text-xs text-gray-500">Via Phoenix Financial Consultants</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Going solar doesn't have to be a big upfront cost. We work with{' '}
              <strong className="text-navy-900">Phoenix Financial Consultants</strong> to offer
              flexible finance options that let you start saving from day one — even before the
              system pays for itself. Subject to status and credit checks.
            </p>
            <a
              href="https://www.phoenix-fc.co.uk/finance_landing?b=6598B6E5D7AE4889&t=9E634738F2D54B36B2BDB6BD"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-solar mt-auto"
            >
              Explore Finance Options <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
