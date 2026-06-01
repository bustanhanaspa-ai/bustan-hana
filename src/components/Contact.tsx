import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const { t } = useTranslation();
  
  return <section id="contact" className="spa-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6 scroll-slide-left">
            <Card className="p-6 bg-card rounded-3xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-spa flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.address.title')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.address.line1')}<br />
                  {t('contact.address.line2')}<br />
                  {t('contact.address.line3')}
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-3xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-spa flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.phone.title')}</h3>
                <a href="tel:+971561121239" className="text-primary hover:text-primary/80">
                  {t('contact.phone.number')}
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-3xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-spa flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.email.title')}</h3>
                <a href="mailto:info@bustan-hanaspa.com" className="text-primary hover:text-primary/80">
                  {t('contact.email.address')}
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card rounded-3xl shadow-soft flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-spa flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{t('contact.hours.title')}</h3>
                <div className="text-muted-foreground">
                  <p>{t('contact.hours.daily')}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="scroll-slide-right">
            <div className="w-full h-full min-h-[400px] rounded-3xl shadow-elegant overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57801.27906608711!2d55.12960944863279!3d25.116076900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb21c29ef99%3A0xbec71e65262765a!2sBustan%20Al%20Hana%20Ladies%20Salon!5e0!3m2!1sen!2sae!4v1764780344223!5m2!1sen!2sae" width="100%" height="100%" style={{
              border: 0,
              minHeight: '400px'
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bustan Hana Spa Location" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
