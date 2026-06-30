import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const benefits = [
  'Full roof surveys before installation',
  'Roof repair and replacement',
  'Integrated solar & roofing project management',
  'MCS accredited team',
  'Full aftercare support',
];

const galleryImages = [
  { src: '/images/residential-roofing-0.png', alt: 'Residential roofing installation' },
  { src: '/images/residential-roofing-2.webp', alt: 'Roofing work in progress' },
  { src: '/images/residential-roofing-3.png', alt: 'Completed roofing project' },
  { src: '/images/residential-roofing-4.webp', alt: 'Roof repair and solar integration' },
  { src: '/images/residential-roofing-5.png', alt: 'Solar and roofing installation' },
  { src: '/images/residential-roofing-6.webp', alt: 'Finished roofing project' },
];

export default function ResidentialRoofingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Professional Roofing</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Residential Roofing
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              Professional roofing services from a team you already trust for solar.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">One Trusted Team</p>
                <h2 className="section-heading mb-6">
                  Roofing & Solar — Under One Roof
                </h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Solar 365 provides professional residential roofing services that integrate
                    seamlessly with your solar installation. Whether you need a full roof replacement
                    before panels go on, or repairs and maintenance alongside an existing system —
                    our team handles it all.
                  </p>
                  <p>
                    One trusted company for both your roof and your solar panels, with the same high
                    standards of workmanship throughout. No coordinating between different
                    contractors — we manage everything.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-xl mb-6">Our Roofing Services</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-solar-500 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="/#quote" className="btn-primary w-full justify-center">
                    Request a Survey
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Gallery */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="text-center mb-8">
              <p className="section-label mb-2">Our Roofing Work</p>
              <h2 className="section-heading">Recent Roofing Projects</h2>
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
            <div className="text-center mt-10">
              <a href="/#quote" className="btn-primary-lg inline-flex">
                Get a Free Roofing Survey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
