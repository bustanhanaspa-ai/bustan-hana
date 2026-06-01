import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Waves, Heart, Mountain, Flower2, Flame, FootprintsIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import FloatingLocation from '@/components/FloatingLocation';
import arabicMassage from '@/assets/service-arabic-massage.jpg';
import swedishMassage from '@/assets/service-swedish-massage.jpg';
import deepTissue from '@/assets/service-deep-tissue.jpg';
import hammam from '@/assets/service-hammam.jpg';
import aromatherapy from '@/assets/service-aromatherapy.jpg';
import reflexology from '@/assets/service-reflexology.jpg';

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const services = [
    {
      icon: Waves,
      key: 'arabic',
      image: arabicMassage,
    },
    {
      icon: Heart,
      key: 'swedish',
      image: swedishMassage,
    },
    {
      icon: Mountain,
      key: 'deepTissue',
      image: deepTissue,
    },
    {
      icon: Flower2,
      key: 'hammam',
      image: hammam,
    },
    {
      icon: Flame,
      key: 'aromatherapy',
      image: aromatherapy,
    },
    {
      icon: FootprintsIcon,
      key: 'reflexology',
      image: reflexology,
    },
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hello! I would like to book ${serviceName}.\n\nPreferred Date & Time: `;
    const whatsappUrl = `https://wa.me/971561121239?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{t('servicesPage.seo.title')}</title>
        <meta name="description" content={t('servicesPage.seo.description')} />
        <link rel="canonical" href={`https://bustanhanaspa.com/${i18n.language}/services`} />
        <html lang={i18n.language} dir={isRTL ? 'rtl' : 'ltr'} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hammam})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {t('servicesPage.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            to={`/${i18n.language}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            {isRTL ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            {t('servicesPage.backToHome')}
          </Link>
        </div>

        {/* Services Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceName = t(`services.${service.key}.name`);
              const serviceSlug = t(`services.${service.key}.slug`);
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden bg-card border-border hover-lift rounded-3xl"
                >
                  <Link to={`/${i18n.language}/services/${serviceSlug}`}>
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={serviceName}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </Link>
                  <div className="p-8 space-y-4">
                    <Link to={`/${i18n.language}/services/${serviceSlug}`}>
                      <h2 className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                        {serviceName}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.${service.key}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                        {t(`services.${service.key}.duration`)}
                      </span>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Link 
                        to={`/${i18n.language}/services/${serviceSlug}`}
                        className="flex-1"
                      >
                        <Button 
                          variant="outline"
                          className="w-full border-border text-foreground hover:bg-secondary"
                        >
                          {t('servicesPage.viewDetails')}
                        </Button>
                      </Link>
                      <Button 
                        onClick={() => handleBookService(serviceName)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {t('nav.bookNow')}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
        <FloatingLocation />
      </div>
    </>
  );
};

export default ServicesPage;
