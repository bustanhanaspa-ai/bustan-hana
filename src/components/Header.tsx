import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';
import logoHeader from '@/assets/logo-header.png';
import logoFooter from '@/assets/logo-footer.png';
import LanguageSwitcher from './LanguageSwitcher';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    t,
    i18n
  } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    // Set language based on URL path
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'ar' || pathLang === 'en') {
      i18n.changeLanguage(pathLang);
    }
  }, [location.pathname, i18n]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-lg border-b border-white/20 ${isScrolled ? 'shadow-elegant' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={`/${i18n.language}`} className="flex items-center">
          <img 
            src={isScrolled ? logoHeader : logoFooter} 
            alt="Bustan Alhana by casrose WELLNESS & SPA" 
            className="h-12 md:h-16 transition-all duration-300" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>
            {t('nav.about')}
          </button>
          <Link to={`/${i18n.language}/services`} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>
            {t('nav.services')}
          </Link>
          <button onClick={() => scrollToSection('gallery')} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>
            {t('nav.gallery')}
          </button>
          <button onClick={() => scrollToSection('testimonials')} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>
            {t('nav.testimonials')}
          </button>
          <button onClick={() => scrollToSection('contact')} className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors`}>
            {t('nav.contact')}
          </button>
          <LanguageSwitcher />
          <a href="tel:+971561121239" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300">
            <Phone size={20} />
            <span className="font-medium">+971 56 112 1239</span>
          </a>
          <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90">
            {t('nav.bookNow')}
          </Button>
        </div>

        {/* Mobile Menu Button and Call Icon */}
        <div className="md:hidden flex items-center gap-3">
          <a href="tel:+971561121239" className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border p-2 rounded-lg transition-all duration-300 border-primary-foreground text-primary-foreground">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
            {isMobileMenuOpen ? <X size={24} className="text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.7)]" /> : <Menu size={24} className="text-white drop-shadow-[0_0_3px_rgba(0,0,0,0.7)]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors py-2">
              {t('nav.about')}
            </button>
            <Link to={`/${i18n.language}/services`} onClick={() => setIsMobileMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors py-2">
              {t('nav.services')}
            </Link>
            <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors py-2">
              {t('nav.gallery')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors py-2">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors py-2">
              {t('nav.contact')}
            </button>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <a href="tel:+971561121239" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 w-full justify-center">
              <Phone size={20} />
              <span>+971 56 112 1239</span>
            </a>
            <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-primary hover:bg-primary/90 w-full">
              {t('nav.bookNow')}
            </Button>
          </div>
        </div>}
    </header>;
};
export default Header;