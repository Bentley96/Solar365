import { Zap, PoundSterling, ArrowRight } from 'lucide-react';

export default function PricePromise() {
  return (
    <div className="bg-navy-900 rounded-xl border border-navy-700 shadow-md p-5">
      {/* Octopus */}
      <div className="flex items-start gap-4">
        <img
          src="/images/Rectangle-1024x356.png"
          alt="Octopus Energy Trusted Installer Partner"
          className="h-11 w-auto object-contain flex-shrink-0"
        />
        <div>
          <p className="flex items-center gap-2 font-bold text-white text-base">
            <Zap className="w-4 h-4 text-[#ff8fcf] flex-shrink-0" />
            Octopus Energy Trusted Installer
          </p>
          <p className="text-navy-200 text-sm leading-relaxed mt-1">
            Switch through Solar 365 for{' '}
            <span className="text-[#ff8fcf] font-bold">£50 off</span> your first bill, plus exclusive
            smart tariffs built to work with your solar &amp; battery storage.
          </p>
          <a
            href="https://octopus.energy/quote/?affiliate=solar365"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#ff8fcf] hover:text-white font-semibold text-sm mt-2 transition-colors"
          >
            Switch &amp; Save £50
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-navy-700 my-4" />

      {/* Price promise */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-solar-500/20 flex items-center justify-center flex-shrink-0">
          <PoundSterling className="w-5 h-5 text-solar-400" />
        </div>
        <div>
          <p className="font-bold text-white text-base">We won't be beaten on price</p>
          <p className="text-navy-200 text-sm leading-relaxed mt-0.5">
            Found a cheaper like-for-like MCS quote? We'll match it.
          </p>
        </div>
      </div>
    </div>
  );
}
