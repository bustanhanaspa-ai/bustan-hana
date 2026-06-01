import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Waves, Heart, Mountain, Flower2, Flame, FootprintsIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import arabicMassage from '@/assets/service-arabic-massage.jpg';
import swedishMassage from '@/assets/service-swedish-massage.jpg';
import deepTissue from '@/assets/service-deep-tissue.jpg';
import hammam from '@/assets/service-hammam.jpg';
import aromatherapy from '@/assets/service-aromatherapy.jpg';
import reflexology from '@/assets/service-reflexology.jpg';

const Services = () => {
  const { t, i18n } = useTranslation();
  
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
    <section id="services" className="spa-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceName = t(`services.${service.key}.name`);
            const serviceSlug = t(`services.${service.key}.slug`);
            return (
              <Card 
                key={index} 
                className={`overflow-hidden bg-card border-border hover-lift rounded-3xl scroll-scale-in stagger-${(index % 6) + 1}`}
              >
                <Link to={`/${i18n.language}/services/${serviceSlug}`}>
                  <div className="relative h-48 overflow-hidden">
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
                    <h3 className="font-serif text-2xl font-semibold text-foreground hover:text-primary transition-colors">
                      {serviceName}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                      {t(`services.${service.key}.duration`)}
                    </span>
                  </div>
                  <Button 
                    onClick={() => handleBookService(serviceName)}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-4"
                  >
                    {t('nav.bookNow')}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
