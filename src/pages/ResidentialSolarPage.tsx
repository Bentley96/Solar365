import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import Testimonials from '../components/Testimonials';

const benefits = [
  'Up to 70% bill reduction',
  'Compatible with Tesla Powerwall & all leading batteries',
  'MCS certified with full warranty',
  'Tailored to your roof, usage & budget',
  'Smart app monitoring',
  'Octopus smart export payments',
  'Extensive product warranty',
];

export default function ResidentialSolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Yorkshire's Solar Specialists</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Residential Solar Panels
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              Having solar panels installed on your property is a great way to produce electricity,
              reducing your bills and saving you money.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Sustainable Solar Energy For Your Home */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">Sustainable Energy</p>
                <h2 className="section-heading mb-6">Sustainable Solar Energy For Your Home</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Solar PV panels lower your energy bills by up to 70% and reduce your carbon footprint.
                    All products come with extensive warranty coverage, giving you complete peace of mind.
                  </p>
                  <p>
                    Solar battery systems ensure electricity is supplied whatever the weather — storing
                    energy generated during the day for use at night or on cloudy days. Our services are
                    available throughout Yorkshire and beyond.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/ResidentialSolar/residential-solar-yorkshire.jpg.webp"
                  alt="Residential solar panel installation in Yorkshire"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Install Solar */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">Why Solar?</p>
                <h2 className="section-heading mb-6">Why Install Solar For Your Home?</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The price of energy has increased to record levels. The best way to bring bills
                    down is to reduce our reliance on fossil fuels. Solar panels are one of the best
                    and fastest-developing forms of renewable energy.
                  </p>
                  <p>
                    Harnessing solar power means reducing the amount of energy you use from the grid.
                    We also install solar batteries to power your home through the night, maximising
                    the value of every unit you generate.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="font-bold text-navy-900 text-xl mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-solar-500 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Solar Panels Work */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-last lg:order-first">
                <img
                  src="/images/ResidentialSolar/residential-solar-installing.jpg.webp"
                  alt="Solar panels generating renewable electricity"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="section-label mb-3">The Technology</p>
                <h2 className="section-heading mb-6">How Do Solar Panels Work?</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Solar panels capture the sun's energy and convert it into electricity through a process
                  called photovoltaics (PV). By installing solar panels, you can generate your own
                  renewable electricity to use in your home — reducing or eliminating your reliance on
                  the national grid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Battery Storage */}
        <section className="section-padding bg-navy-900">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-solar-400 font-semibold text-sm uppercase tracking-widest mb-3">
                  Store Your Energy
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Solar Battery Storage Systems
                </h2>
                <p className="text-navy-200 text-lg leading-relaxed mb-4">
                  Solar 365 can install an energy-storage system (home battery) so you can store
                  electricity generated during the day and use it at night or on cloudy days. Battery
                  storage makes the most of solar energy and helps cut energy bills further still.
                </p>
                <p className="text-navy-200 text-lg leading-relaxed mb-8">
                  From <span className="text-white font-semibold">Tesla Powerwall</span> to{' '}
                  <span className="text-white font-semibold">SigEnergy</span> and{' '}
                  <span className="text-white font-semibold">Fox ESS</span>, we install the leading
                  battery storage systems on the market.
                </p>
                <a href="/#quote" className="btn-primary-lg">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: '/images/NewProject/tesla2.jpeg', alt: 'Tesla Powerwall battery storage' },
                  { src: '/images/NewProject/sigenergy.jpeg', alt: 'SigEnergy battery storage system' },
                  { src: '/images/NewProject/fox.jpeg', alt: 'Fox ESS battery storage' },
                  { src: '/images/NewProject/sigenergy2.jpeg', alt: 'SigEnergy home battery installation' },
                ].map((img) => (
                  <div key={img.src} className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                    <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
