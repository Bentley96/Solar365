import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import ScrollToTop from './components/ScrollToTop';

const ResidentialSolarPage = lazy(() => import('./pages/ResidentialSolarPage'));
const CommercialSolarPage = lazy(() => import('./pages/CommercialSolarPage'));
const AirSourceHeatPumpsPage = lazy(() => import('./pages/AirSourceHeatPumpsPage'));
const Eco4FundingPage = lazy(() => import('./pages/Eco4FundingPage'));
const SolarMaintenancePage = lazy(() => import('./pages/SolarMaintenancePage'));
const ResidentialRoofingPage = lazy(() => import('./pages/ResidentialRoofingPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OctopusSection />
        <VideoSection />
        <AccreditationsStrip />
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

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-navy-900 text-lg font-semibold">Loading…</div>
        </div>
      }
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/residential-solar" element={<ResidentialSolarPage />} />
        <Route path="/commercial-solar" element={<CommercialSolarPage />} />
        <Route path="/air-source-heat-pumps" element={<AirSourceHeatPumpsPage />} />
        <Route path="/eco4-funding" element={<Eco4FundingPage />} />
        <Route path="/solar-maintenance" element={<SolarMaintenancePage />} />
        <Route path="/residential-roofing" element={<ResidentialRoofingPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
      </Routes>
    </Suspense>
  );
}
