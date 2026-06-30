import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const eligibleMeasures = [
  'Cavity wall insulation',
  'Loft insulation',
  'Boiler replacements',
  'Solar panel installations',
  'First-time central heating',
  'Air source heat pump installation',
];

export default function Eco4FundingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <div className="inline-flex items-center gap-2 bg-solar-500/20 border border-solar-400/40 text-solar-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              ECO4 Funding Grants
            </div>
            <p className="section-label mb-3">Government Energy Grants</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              ECO4 Funding
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
              You may be eligible for a FREE ECO4 Funding grant, which can help you make your home
              more energy efficient.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Check Your Eligibility
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* What is ECO4 */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">About ECO4</p>
                <h2 className="section-heading mb-6">We Can Help With Government Energy Grants!</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    ECO4 (Energy Company Obligation phase 4) is a UK government-backed scheme designed
                    to improve energy efficiency in homes, reduce carbon emissions, and combat fuel
                    poverty.
                  </p>
                  <p>
                    The scheme funds upgrades such as insulation (cavity wall, loft, internal wall),
                    heating systems (boilers, air source heat pumps, first-time central heating),
                    solar panels, and other measures to boost your property's EPC rating.
                  </p>
                  <p>
                    It obligates larger energy suppliers to deliver improvements, primarily targeting
                    low-income households, those receiving certain benefits, and properties with poor
                    energy efficiency ratings (EPC D–G).
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src="/images/ECO4Funding/solar-panel-eco-fundinhg.jpg.webp"
                  alt="Energy efficient home improvements funded by ECO4"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">Eligibility</p>
                <h2 className="section-heading mb-6">How We Can Help You</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    An ECO4 grant is aimed at helping people within lower-income households and those
                    who qualify for benefits such as Universal Credit, Pension Credits, and similar
                    means-tested support.
                  </p>
                  <p>
                    Grants also target properties with a low EPC rating (D to G). If your home falls
                    into this category, you may be eligible regardless of your income.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <h3 className="font-bold text-navy-900 text-xl mb-6">
                  ECO4 Funding Can Be Used For:
                </h3>
                <ul className="space-y-3">
                  {eligibleMeasures.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-solar-500 flex-shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Eligibility checker callout */}
            <div className="mt-12 bg-navy-900 rounded-2xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Could You Qualify?</h3>
              <p className="text-navy-200 mb-6 max-w-xl mx-auto">
                Contact us to find out if you qualify — it takes just a few minutes to check. Our
                team will assess your eligibility and guide you through the entire process.
              </p>
              <a href="/#quote" className="btn-primary-lg">
                Check Your Eligibility Free
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
