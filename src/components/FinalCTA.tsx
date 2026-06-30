import { ArrowRight, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="bg-solar-500 section-padding-sm">
      <div className="container-xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-solar-100 font-semibold text-sm uppercase tracking-widest mb-3">
          Get Started Today
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl xl:text-5xl mb-4 leading-tight">
          Ready to Reduce Your Energy Bills?
        </h2>
        <p className="text-solar-100 text-lg mb-8 max-w-xl mx-auto">
          Free survey. No obligation. No hard sell. Just an honest assessment of what solar
          can do for your home or business.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
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
        </div>

        <p className="text-solar-100/70 text-sm mt-6">
          Mon–Fri 9am–5pm · Doncaster &amp; Yorkshire · customerservices@solar-365.co.uk
        </p>
      </div>
    </section>
  );
}
