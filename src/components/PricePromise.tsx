import { Zap, PoundSterling } from 'lucide-react';

export default function PricePromise() {
  return (
    <section className="bg-navy-900 border-b border-navy-800" style={{ paddingTop: '112px' }}>
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4 sm:gap-6 whitespace-nowrap overflow-x-auto">
          {/* Octopus logo + £50 offer */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/images/Rectangle-1024x356.png"
              alt="Octopus Energy Trusted Installer Partner"
              className="h-8 w-auto object-contain flex-shrink-0"
            />
            <p className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold">
              <Zap className="w-4 h-4 text-[#f3469b] flex-shrink-0" />
              <span className="text-[#f3469b] font-extrabold">£50 off</span>
              your first Octopus Energy bill when you switch through us
            </p>
          </div>

          {/* Price promise */}
          <p className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold flex-shrink-0">
            <PoundSterling className="w-4 h-4 text-solar-400 flex-shrink-0" />
            We won't be beaten on price
          </p>
        </div>
      </div>
    </section>
  );
}
