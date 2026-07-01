import { useState } from 'react';
import { Phone, ArrowRight, Play } from 'lucide-react';
import { useQuote } from './QuoteContext';
import PricePromise from './PricePromise';

export default function Hero() {
  const { openQuote } = useQuote();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="quote">
      {/* ── Banner with background image ── */}
      <div
        className="relative"
        style={{
          paddingTop: '112px',
          backgroundImage: 'url(/images/homepage/commercial-solar-panels.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-white/85 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/80 lg:to-white/30" />

        <div className="relative container-xl section-padding py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div>
              <p className="section-label mb-3">Yorkshire's Solar Specialists</p>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-navy-900 leading-tight mb-5">
                Solar Energy &amp;<br />
                <span className="text-solar-500">Battery Storage</span><br />
                for Yorkshire Homes
              </h1>

              <p className="text-lg text-gray-700 mb-7 max-w-xl leading-relaxed">
                We specialise in solar panel installation for homes and businesses across Yorkshire and the UK.
                Over 15 years combined experience. MCS accredited. Octopus Energy Trusted Installer.
                The only Cosy Heat Pump accredited installer based in Doncaster.
              </p>

              {/* Octopus + price promise */}
              <div className="mb-8 max-w-xl">
                <PricePromise />
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button onClick={openQuote} className="btn-primary-lg">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="tel:01302456613" className="btn-outline-navy text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  01302 456 613
                </a>
              </div>

              <p className="mt-5 text-gray-500 text-sm">
                FREE initial energy survey. No obligation. No hard sell. Just honest advice.
              </p>
            </div>

            {/* Right — Video */}
            <div>
              <div className="mb-4">
                <p className="section-label mb-2">See How We Work</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
                  Watch a Real Yorkshire Installation
                </h2>
                <p className="text-gray-600 text-base mt-2 max-w-md">
                  Jules walks you through a full solar installation from first fix to commissioning —
                  the Solar 365 way.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                {!playing ? (
                  <div className="relative aspect-video cursor-pointer group" onClick={() => setPlaying(true)}>
                    <img
                      src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1280&h=720&fit=crop"
                      alt="Solar 365 installation walkthrough"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-900/50 flex flex-col items-center justify-center gap-4 group-hover:bg-navy-900/40 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-solar-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-9 h-9 text-white fill-white ml-1" />
                      </div>
                      <p className="text-white font-semibold text-lg">Watch Jules on a Live Install</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-400 p-8">
                      <Play className="w-12 h-12 mx-auto mb-3 text-solar-400" />
                      <p className="font-semibold text-navy-900 mb-1">Video Coming Soon</p>
                      <p className="text-sm">We're uploading Jules's installation walkthrough shortly.</p>
                      <p className="text-sm mt-2">
                        In the meantime, call us on{' '}
                        <a href="tel:01302456613" className="text-solar-500 font-semibold">01302 456 613</a>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5">
                <button onClick={openQuote} className="btn-primary-lg inline-flex">
                  Book Your Free Survey
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-gray-500 text-sm mt-3">
                  No obligation. Free energy assessment at your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="container-xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Installations Completed' },
            { value: '15+', label: 'Years Combined Experience' },
            { value: '4.9★', label: 'Google Rating (60+ Reviews)' },
            { value: 'Up to 70%', label: 'Bill Reduction Possible' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-extrabold text-solar-500">{value}</p>
              <p className="text-sm text-gray-600 mt-0.5 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
