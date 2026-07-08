import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccreditationsStrip from '../components/AccreditationsStrip';
import WhyChooseUs from '../components/WhyChooseUs';
import ResidentialFeature from '../components/ResidentialFeature';
import ServicesGrid from '../components/ServicesGrid';
import HowItWorks from '../components/HowItWorks';
import CaseStudies from '../components/CaseStudies';
import FinanceBanner from '../components/FinanceBanner';
import FinalCTA from '../components/FinalCTA';

export default function AboutSolarPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">Get To Know Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              About Solar 365
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl mx-auto mb-8">
              Yorkshire's trusted solar, battery and heat pump installer. Discover why homeowners and
              businesses across the region choose Solar 365 — and how we work.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <AccreditationsStrip />
        <WhyChooseUs />
        <ResidentialFeature />
        <ServicesGrid />
        <HowItWorks />
        <CaseStudies />
        <FinanceBanner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
