import { ArrowRight, PoundSterling, Zap } from 'lucide-react';
import { useQuote } from './QuoteContext';

export default function PricePromise() {
  const { openQuote } = useQuote();

  return (
    <section className="bg-navy-900 border-b border-navy-800">
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Price promise */}
          <div>
            <div className="inline-flex items-center gap-2 bg-solar-500/20 border border-solar-400/40 text-solar-300 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              <PoundSterling className="w-3.5 h-3.5" />
              Our Price Promise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              We Won't Be Beaten<br className="hidden sm:block" /> on Price
            </h2>
            <p className="text-navy-200 text-base leading-relaxed max-w-xl">
              Found a cheaper like-for-like quote from another MCS-accredited installer?{' '}
              <span className="text-white font-semibold">We'll beat it.</span> Premium products,
              premium workmanship — at a price that won't be topped. No pressure, no hard sell,
              just honest Yorkshire value.
            </p>
            <button onClick={openQuote} className="btn-primary-lg mt-6">
              Get Your Best Price
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Octopus tie-in */}
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#f3469b]/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#f3469b]" />
              </div>
              <div>
                <p className="font-bold text-navy-900 leading-tight">Octopus Energy Trusted Installer</p>
                <p className="text-gray-500 text-sm">Save even more when you switch through us</p>
              </div>
            </div>
            <img
              src="/images/Rectangle-1024x356.png"
              alt="Octopus Energy Trusted Installer Partner"
              className="w-full h-auto rounded-xl object-contain mb-4"
            />
            <div className="flex items-center gap-3 bg-[#f3469b]/5 border border-[#f3469b]/20 rounded-xl px-4 py-3">
              <p className="text-2xl font-extrabold text-[#f3469b] leading-none">£50</p>
              <p className="text-sm text-gray-700 leading-snug">
                <span className="font-semibold text-navy-900">off your first Octopus Energy bill</span>{' '}
                when you switch through Solar 365 — on top of the savings your new system delivers.
              </p>
            </div>
            <a
              href="https://octopus.energy/quote/?affiliate=solar365"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center mt-4"
            >
              Switch to Octopus + Save £50
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
