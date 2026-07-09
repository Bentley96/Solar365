import { Zap, ArrowRight } from 'lucide-react';

export default function PricePromise() {
  return (
    <div className="bg-navy-900 rounded-xl border border-navy-700 shadow-md p-5">
      {/* Octopus */}
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

      <div className="h-px w-full bg-navy-700 my-4" />

      {/* Badge + price promise — 50/50 */}
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <img
            src="/images/Latest/OctopusFinalist.png"
            alt="Octopus Energy Small Business of the Year Finalist"
            className="w-full h-auto object-contain drop-shadow-lg"
          />
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
