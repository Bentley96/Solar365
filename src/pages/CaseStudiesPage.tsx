import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto">
              Have a look through some of the projects undertaken by Solar 365!
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container-xl max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              We undertake a variety of projects, including commercial solar installations and solar
              panel installations for homes and domestic buildings. We also provide solar battery
              storage, air source heat pump installation, solar panel maintenance &amp;
              optimisation, plus much more!
            </p>
          </div>
        </section>

        <CaseStudies />

        {/* Contact prompt */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container-xl max-w-xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Interested in a project like one of these? Get in touch for a free no-obligation quote.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
