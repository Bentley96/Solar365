import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import CaseStudies from '../components/CaseStudies';

const benefits = [
  {
    title: 'Energy independence',
    desc: 'Reduce dependence on fossil fuels and price caps',
  },
  {
    title: 'Store energy',
    desc: 'Harness energy with a solar battery for darker months and night',
  },
  {
    title: 'Corporate Social Responsibility',
    desc: 'Demonstrate commitment to the environment and sustainability',
  },
  {
    title: 'Cost savings',
    desc: 'Generate free electricity during daytime hours',
  },
  {
    title: 'Lower carbon footprint',
    desc: 'Significantly reduce your business carbon emissions',
  },
  {
    title: 'Additional income',
    desc: 'Surplus power can be sold back to the grid',
  },
];

export default function CommercialSolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Commercial Solar</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Commercial Solar Panels For Your Business
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              Solar 365 are specialists in commercial solar PV systems for a range of sectors —
              offices, garages, warehouses, hotels, manufacturing, farms and factories.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Survey
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Sustainable Solar For Business */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="max-w-3xl mx-auto">
              <p className="section-label mb-3">Why Go Solar?</p>
              <h2 className="section-heading mb-6">Sustainable Solar Energy For Your Business</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Solar PV is a fantastic way of cutting electricity costs for your business, and can
                  even provide 100% bill reduction depending on your energy usage and system size.
                  Each proposal is tailored around bespoke requirements to maximise the benefits for
                  your specific situation.
                </p>
                <p>
                  Moving to renewable energy demonstrates sustainability commitments to customers and
                  adds a beneficial green focus to your marketing — an increasingly important
                  differentiator in today's market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="section-label mb-3">The Benefits</p>
              <h2 className="section-heading">
                The Benefits of Solar Panels For Your Business
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-solar-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-navy-900 mb-1">{b.title}</h3>
                      <p className="text-gray-600 text-sm">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-solar-50 border border-solar-200 rounded-2xl p-8 max-w-2xl mx-auto text-center">
              <p className="text-navy-900 font-semibold text-lg mb-2">
                Installing solar panels can make a big difference to business expenses.
              </p>
              <p className="text-gray-600">
                Whether you're looking for energy efficiency or sustainability, we arrange
                no-obligation FREE energy surveys. Harnessing solar power reduces energy from the
                grid, lowers bills, and surplus power can be sold back.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <CaseStudies />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
