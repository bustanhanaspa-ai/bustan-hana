import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoFooter from '@/assets/logo-footer.png';
const Footer = () => {
  const {
    t
  } = useTranslation();
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoFooter} alt="Bustan Alhana by casrose WELLNESS & SPA" className="h-12 mb-4" />
            <p className="text-background/80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#about" className="hover:text-background transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">{t('nav.services')}</a></li>
              <li><a href="#gallery" className="hover:text-background transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-2 text-background/80">
              
              <li>{t('contact.phone.number')}</li>
              <li>{t('contact.email.address')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            {t('footer.copyright', {
            year: currentYear
          })}
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;