import { ArrowRight, Thermometer, Zap, Leaf, PoundSterling } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const stats = [
  { icon: PoundSterling, value: '£7,500', label: 'BUS Grant Available' },
  { icon: Thermometer, value: '-15°C', label: 'Operates down to' },
  { icon: Zap, value: '2.5–4', label: 'COP (units of heat per unit electricity)' },
  { icon: Leaf, value: '50%', label: 'Carbon reduction potential' },
];

export default function AirSourceHeatPumpsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <div className="inline-flex items-center gap-2 bg-solar-500/20 border border-solar-400/40 text-solar-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              Installation Grants Available
            </div>
            <p className="section-label mb-3">Eco-Conscious Heating</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Air Source Heat Pumps
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              Transform your home's heating systems with an air source heat pump!
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-solar-500">
          <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-8 h-8 text-navy-900 mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-navy-900 mb-1">{s.value}</div>
                <div className="text-navy-800 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="section-label mb-3">How It Works</p>
                <h2 className="section-heading mb-6">
                  Cut Your Energy Bills With An Air Source Heat Pump
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Air source heat pumps (ASHPs) provide a cutting-edge, eco-conscious way to heat
                    your home, harnessing renewable energy from the outdoor air — even in chilly
                    conditions — to deliver cosy warmth and hot water.
                  </p>
                  <p>
                    Unlike conventional heating that burns fossil fuels, ASHPs reduce operating
                    expenses while significantly lowering environmental impact. High efficiency:
                    2.5–4 units of heat per unit of electricity (COP). Can cut carbon emissions by
                    up to 50% when paired with renewable electricity.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* BUS Grant callout */}
                <div className="bg-navy-900 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-3">Boiler Upgrade Scheme (BUS) Grant</h3>
                  <p className="text-navy-200 leading-relaxed">
                    Thanks to the government's Boiler Upgrade Scheme, which offers a{' '}
                    <span className="text-solar-400 font-bold">£7,500 grant</span> for qualifying
                    homeowners, adopting this technology is now more affordable than ever — paving
                    the way for sustainable and cost-effective home heating.
                  </p>
                </div>

                {/* ECO4 mention */}
                <div className="bg-solar-50 border border-solar-200 rounded-2xl p-6">
                  <p className="text-navy-900 font-semibold mb-2">Also eligible for ECO4?</p>
                  <p className="text-gray-600 text-sm">
                    Some customers may also be eligible for ECO4 funding in addition to the BUS
                    grant. Contact us to find out if you qualify.
                  </p>
                </div>

                {/* Accreditation note */}
                <div className="bg-white border-2 border-solar-500 rounded-2xl p-6">
                  <p className="text-navy-900 font-bold mb-1">
                    Only Cosy Homes Heat Pump Accredited Installer Based in Doncaster
                  </p>
                  <p className="text-gray-600 text-sm">
                    Solar 365 holds the Cosy Homes heat pump accreditation — the only installer
                    based in Doncaster with this certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How ASHPs Work */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl max-w-3xl mx-auto">
            <p className="section-label mb-3">The Technology</p>
            <h2 className="section-heading mb-6">How Air Source Heat Pumps Work</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                ASHPs extract heat from outdoor air even at temperatures as low as -15°C. A fan draws
                air over a heat exchanger containing refrigerant, which absorbs heat and evaporates
                into gas. The gas is compressed to raise its temperature, then passes through another
                heat exchanger to transfer heat to your home's heating system.
              </p>
              <p>
                The result is a highly efficient system that can deliver 2.5–4 units of heat for
                every unit of electricity consumed — dramatically cheaper than traditional gas or
                electric heating.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
