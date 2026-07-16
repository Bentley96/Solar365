import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import OctopusSection from './components/OctopusSection';
import PremiumInstaller from './components/PremiumInstaller';
import OctopusHeatPumps from './components/OctopusHeatPumps';
import FinanceOptions from './components/FinanceOptions';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const AboutSolarPage = lazy(() => import('./pages/AboutSolarPage'));
const ResidentialSolarPage = lazy(() => import('./pages/ResidentialSolarPage'));
const CommercialSolarPage = lazy(() => import('./pages/CommercialSolarPage'));
const AirSourceHeatPumpsPage = lazy(() => import('./pages/AirSourceHeatPumpsPage'));
const SolarMaintenancePage = lazy(() => import('./pages/SolarMaintenancePage'));
const ResidentialRoofingPage = lazy(() => import('./pages/ResidentialRoofingPage'));
const SupportingCommunityPage = lazy(() => import('./pages/SupportingCommunityPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OctopusSection />
        <PremiumInstaller />
        <OctopusHeatPumps />
        <FinanceOptions />
        <Testimonials />
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
        <Route path="/about-solar" element={<AboutSolarPage />} />
        <Route path="/residential-solar" element={<ResidentialSolarPage />} />
        <Route path="/commercial-solar" element={<CommercialSolarPage />} />
        <Route path="/air-source-heat-pumps" element={<AirSourceHeatPumpsPage />} />
        <Route path="/solar-maintenance" element={<SolarMaintenancePage />} />
        <Route path="/residential-roofing" element={<ResidentialRoofingPage />} />
        <Route path="/supporting-our-community" element={<SupportingCommunityPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Suspense>
  );
}
