import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Certification from '@/components/Certification';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Blog from '@/components/Blog';
import Booking from '@/components/Booking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingLocation from '@/components/FloatingLocation';
import AmbientBackground from '@/components/AmbientBackground';
import SEO from '@/components/SEO';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Update language based on URL path
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'ar' || pathLang === 'en') {
      i18n.changeLanguage(pathLang);
      document.documentElement.dir = pathLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = pathLang;
    }
  }, [location.pathname, i18n]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO />
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <VideoSection />
        <WhyChooseUs />
        <Certification />
        <Testimonials />
        <Gallery />
        <Blog />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingLocation />
    </div>
  );
};

export default Index;
