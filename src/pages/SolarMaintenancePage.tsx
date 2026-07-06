import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const stats = [
  { value: '10–30%', label: 'Efficiency drop from neglect' },
  { value: '20–30%', label: 'Energy loss from dirt & debris' },
  { value: '10–20%', label: 'Boost from angle adjustment' },
  { value: '20–40%', label: 'Efficiency loss from shading' },
];

export default function SolarMaintenancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">Maintenance & Optimisation</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              Solar Panel Maintenance
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl mx-auto mb-8">
              Our team provide a wide range of solar panel maintenance, including system
              optimisations, cleaning, shading management &amp; more!
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Book a Service
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-solar-500">
          <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-navy-900 mb-2">{s.value}</div>
                <div className="text-navy-800 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Solar Panel Cleaning */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">Cleaning</p>
                <h2 className="section-heading mb-6">Solar Panel Cleaning & Maintenance</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Regular maintenance helps prevent issues such as reduced performance due to dirt
                    accumulation, physical damage, or system inefficiencies. While solar panels are
                    generally low-maintenance, neglecting them can result in a 10–30% drop in
                    efficiency over time.
                  </p>
                  <p>
                    Our services cover both solar panels and solar battery systems, ensuring your
                    entire installation performs at its best year-round.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/SolarMaintenance/solar-maintenance-781x1024.jpg.webp"
                  alt="Solar panel cleaning and maintenance"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Clean */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="section-label mb-3">Why Clean?</p>
                <h2 className="section-heading mb-6">
                  Why Have Your Solar Panels Cleaned?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Cleaning removes dust, dirt, bird droppings, pollen, and debris that can block
                    sunlight, reducing energy production by up to 20–30% in severe cases.
                  </p>
                  <p>
                    Regular cleaning ensures maximum efficiency, extends panel lifespan, and
                    maintains warranty validity — protecting your investment for the long term.
                  </p>
                </div>
              </div>

              <div>
                <p className="section-label mb-3">Optimisation</p>
                <h2 className="section-heading mb-6">
                  What Are The Benefits Of Solar Panel Optimisation?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Adjusting panel angles can boost output by 10–20% seasonally. Removing shade
                    using vegetation trimming or micro-inverters reduces losses — shade can cut
                    efficiency by 20–40%.
                  </p>
                  <p>
                    Regular optimisation minimises wear, extends panel lifespan, and maintains
                    warranty compliance — keeping your system performing at its peak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Management */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] order-last lg:order-first">
                <img
                  src="/images/SolarMaintenance/solar-performance-management.jpg.webp"
                  alt="Solar system performance monitoring and management"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="section-label mb-3">Performance Management</p>
                <h2 className="section-heading mb-6">Keep Your System Performing At Its Best</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Ongoing performance monitoring helps spot underperforming panels, faults, or
                    shading issues before they cost you money — so your system keeps delivering the
                    savings it was designed for.
                  </p>
                  <p>
                    Combined with regular cleaning and optimisation, proactive management protects
                    your investment and maximises the return on your solar installation for years to
                    come.
                  </p>
                </div>
                <a href="/#quote" className="btn-primary mt-8">
                  Book a Service
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
