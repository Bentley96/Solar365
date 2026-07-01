import { Zap, PoundSterling, ArrowRight } from 'lucide-react';

export default function PricePromise() {
  return (
    <section className="bg-navy-900 border-b border-navy-800" style={{ paddingTop: '112px' }}>
      <div className="container-xl px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            {/* Octopus */}
            <div className="flex items-start sm:items-center gap-4 lg:flex-1">
              <img
                src="/images/Rectangle-1024x356.png"
                alt="Octopus Energy Trusted Installer Partner"
                className="h-12 sm:h-14 w-auto object-contain flex-shrink-0"
              />
              <div>
                <p className="flex items-center gap-2 font-bold text-navy-900 text-base sm:text-lg">
                  <Zap className="w-4 h-4 text-[#f3469b] flex-shrink-0" />
                  Octopus Energy Trusted Installer
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Switch through Solar 365 and get{' '}
                  <span className="text-[#f3469b] font-bold">£50 off</span> your first bill, plus
                  access to exclusive smart tariffs and the Smart Export Guarantee — designed to work
                  with your solar &amp; battery storage.
                </p>
                <a
                  href="https://octopus.energy/quote/?affiliate=solar365"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#c4307a] hover:text-[#f3469b] font-semibold text-sm mt-2 transition-colors"
                >
                  Switch &amp; Save £50
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px self-stretch bg-gray-200" />
            <div className="lg:hidden h-px w-full bg-gray-200" />

            {/* Price promise */}
            <div className="flex items-center gap-4 lg:flex-shrink-0 lg:max-w-xs">
              <div className="w-11 h-11 rounded-xl bg-solar-50 flex items-center justify-center flex-shrink-0">
                <PoundSterling className="w-5 h-5 text-solar-500" />
              </div>
              <div>
                <p className="font-bold text-navy-900 text-base sm:text-lg">We won't be beaten on price</p>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Found a cheaper like-for-like MCS quote? We'll match it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
