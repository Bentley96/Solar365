import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AccreditationsStrip from './components/AccreditationsStrip';
import OctopusSection from './components/OctopusSection';
import WhyChooseUs from './components/WhyChooseUs';
import ResidentialFeature from './components/ResidentialFeature';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FinanceBanner from './components/FinanceBanner';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AccreditationsStrip />
        <OctopusSection />
        <WhyChooseUs />
        <ResidentialFeature />
        <ServicesGrid />
        <HowItWorks />
        <CaseStudies />
        <Testimonials />
        <FinanceBanner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
