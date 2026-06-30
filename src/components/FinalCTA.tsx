import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-solar-500 section-padding-sm">
      <div className="container-xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-solar-100 font-semibold text-sm uppercase tracking-widest mb-3">
          Start Saving Today
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl xl:text-5xl mb-4 leading-tight">
          Ready to Go Solar?
        </h2>
        <p className="text-solar-100 text-lg mb-8 max-w-2xl mx-auto">
          We offer FREE initial energy surveys and no-obligation quotes. Within a week you could
          have your survey done and installation booked. Most home systems are installed in 1–2 days.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-950 text-white font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 text-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="tel:01302456613"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-solar-600 font-bold px-10 py-4 rounded-lg transition-all duration-200 text-lg"
          >
            <Phone className="w-5 h-5" />
            01302 456 613
          </a>
          <a
            href="tel:07432476663"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white/90 hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-200 text-base"
          >
            <Phone className="w-4 h-4" />
            07432 476 663
          </a>
        </div>

        <p className="text-solar-100/70 text-sm">
          Mon–Fri 9am–5pm · Doncaster &amp; Yorkshire · customerservices@solar-365.co.uk
        </p>
        <p className="text-solar-100/60 text-xs mt-2">
          No spam. No hard sell. Just honest advice from a team that knows solar inside out.
        </p>
      </div>
    </section>
  );
}
