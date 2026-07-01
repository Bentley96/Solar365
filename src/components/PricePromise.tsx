import { ArrowRight, PoundSterling, Zap } from 'lucide-react';
import { useQuote } from './QuoteContext';

export default function PricePromise() {
  const { openQuote } = useQuote();

  return (
    <section className="bg-navy-900 border-b border-navy-800">
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Price promise */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 rounded-lg bg-solar-500/20 border border-solar-400/40 flex items-center justify-center flex-shrink-0">
              <PoundSterling className="w-5 h-5 text-solar-400" />
            </div>
            <p className="text-white text-sm sm:text-base leading-snug">
              <span className="font-extrabold uppercase tracking-wide text-solar-400">Price Promise:</span>{' '}
              <span className="font-bold">We won't be beaten on price.</span>{' '}
              <span className="text-navy-200">Beat a like-for-like MCS quote? We'll match it.</span>
            </p>
          </div>

          {/* Octopus £50 tie-in */}
          <div className="flex items-center gap-3 md:border-l md:border-navy-700 md:pl-6 flex-shrink-0">
            <Zap className="w-5 h-5 text-[#f3469b] flex-shrink-0" />
            <p className="text-white text-sm leading-snug">
              <span className="font-extrabold text-[#f3469b]">£50 off</span> your first Octopus Energy
              bill when you switch through us
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={openQuote}
            className="btn-primary whitespace-nowrap flex-shrink-0 justify-center"
          >
            Get Your Best Price
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
