import { ArrowRight, CreditCard } from 'lucide-react';

export default function FinanceBanner() {
  return (
    <section className="bg-navy-50 border-y border-navy-100 py-14">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Octopus */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f3469b]/10 rounded-xl flex items-center justify-center">
                <span className="text-[#f3469b] font-black text-lg">O</span>
              </div>
              <div>
                <p className="font-bold text-navy-900">Octopus Energy Partner</p>
                <p className="text-xs text-gray-500">Trusted Installer Affiliate</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Switch to Octopus Energy through Solar 365 and earn <strong className="text-navy-900">£50 off your first bill</strong>.
              Access smart tariffs designed to work with your solar generation and battery storage.
            </p>
            <a
              href="https://octopus.energy/quote/?affiliate=solar365"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-auto"
            >
              Find Out More <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Finance */}
          <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-solar-50 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-solar-500" />
              </div>
              <div>
                <p className="font-bold text-navy-900">Finance Options Available</p>
                <p className="text-xs text-gray-500">Via Phoenix Financial Consultants</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Going solar doesn't have to be a big upfront cost. We work with{' '}
              <strong className="text-navy-900">Phoenix Financial Consultants</strong> to
              offer flexible finance options that let you start saving from day one — even
              before the system pays for itself.
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
