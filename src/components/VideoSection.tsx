import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-gray-50 section-padding-sm border-y border-gray-100">
      <div className="container-lg">
        <div className="text-center mb-10">
          <p className="section-label mb-2">See How We Work</p>
          <h2 className="section-heading mb-3">Watch a Real Yorkshire Installation</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Jules walks you through a full solar installation from first fix to commissioning —
            the Solar 365 way.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          {!playing ? (
            <div className="relative aspect-video cursor-pointer group" onClick={() => setPlaying(true)}>
              <img
                src="/images/homepage/commercial-solar-panel-cleaning.jpg"
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

        <div className="text-center mt-8">
          <a href="#quote" className="btn-primary-lg inline-flex">
            Book Your Free Survey
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-gray-500 text-sm mt-3">No obligation. Free energy assessment at your property.</p>
        </div>
      </div>
    </section>
  );
}
