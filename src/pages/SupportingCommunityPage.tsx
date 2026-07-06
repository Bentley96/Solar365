import { ArrowRight, Heart, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const galleryImages = [
  'Screenshot-Capture-2025-08-04-09-36-35.png.webp',
  'Screenshot-Capture-2025-08-04-09-36-48.png.webp',
  'Screenshot-Capture-2025-08-04-09-37-38.png.webp',
  'Screenshot-Capture-2025-08-04-09-38-04.png.webp',
  'Screenshot-Capture-2025-08-04-09-38-15.png.webp',
  'Screenshot-Capture-2025-08-04-09-38-28.png.webp',
].map((file) => ({
  src: `/images/SupportingOurCommunity/${file}`,
  alt: 'Solar 365 supporting the local Doncaster community',
}));

export default function SupportingCommunityPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Giving Back</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Supporting The Community
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              We're proud to support our local community! Whether that's through sponsorships or
              charity events.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Intro — image beside text */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-solar-50 border border-solar-200 text-solar-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                  <Heart className="w-3.5 h-3.5" />
                  Powering Our Community
                </div>
                <h2 className="section-heading mb-6">
                  Supporting Our Local Community in Doncaster
                </h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    At Solar 365, we believe that making a difference goes beyond solar panels — it's
                    about powering our community in every way we can. We're proud to support local
                    clubs and foundations across Doncaster, helping to build a brighter future for
                    the residents who make this area so special.
                  </p>
                  <p>
                    From sponsorships to volunteering, giving back is at the heart of what we do.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/SupportingOurCommunity/local-support.jpg.webp"
                  alt="Solar 365 supporting local Doncaster clubs and foundations"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Get involved */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-3">Get Involved</p>
              <h2 className="section-heading mb-6">Have an Idea? Let's Work Together</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Do you have a charitable event or initiative we could get involved with? We're
                  always looking for opportunities to lend a hand — whether it's through time,
                  resources, or simply showing up to support. Together, let's create a stronger, more
                  connected community.
                </p>
                <p>
                  Reach out to us today with your ideas — we'd love to hear from you!
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a href="tel:01302456613" className="btn-primary">
                  <Phone className="w-4 h-4" />
                  01302 456 613
                </a>
                <a href="mailto:customerservices@solar-365.co.uk" className="btn-outline-navy">
                  <Mail className="w-4 h-4" />
                  Email Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community gallery */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="text-center mb-8">
              <p className="section-label mb-2">Out in the Community</p>
              <h2 className="section-heading">Recent Sponsorships &amp; Events</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl shadow-md card-hover">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
