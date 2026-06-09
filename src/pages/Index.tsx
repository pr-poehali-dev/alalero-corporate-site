import { LangProvider } from '@/contexts/LangContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import AboutPageSection from '@/components/AboutPageSection';
import GeographySection from '@/components/GeographySection';
import ServicesSection from '@/components/ServicesSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import PartnersSection from '@/components/PartnersSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';

const Index = () => {
  return (
    <LangProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <AboutPageSection />
        <GeographySection />
        <ServicesSection />
        <CapabilitiesSection />
        <PartnersSection />
        <ContactsSection />
        <Footer />
        <ScrollToTop />
        <CookieBanner />
      </div>
    </LangProvider>
  );
};

export default Index;
