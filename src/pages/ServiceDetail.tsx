import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SEO from '@/components/SEO';
import arabicMassage from '@/assets/service-arabic-massage.jpg';
import swedishMassage from '@/assets/service-swedish-massage.jpg';
import deepTissue from '@/assets/service-deep-tissue.jpg';
import hammam from '@/assets/service-hammam.jpg';
import aromatherapy from '@/assets/service-aromatherapy.jpg';
import reflexology from '@/assets/service-reflexology.jpg';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const serviceImages: Record<string, string> = {
    'swedish-massage': swedishMassage,
    'deep-tissue-massage': deepTissue,
    'aromatherapy-massage': aromatherapy,
    'arabic-massage': arabicMassage,
    'traditional-hammam': hammam,
    'reflexology-massage': reflexology,
  };

  const serviceKeys = ['swedish', 'deepTissue', 'aromatherapy', 'arabic', 'hammam', 'reflexology'];
  const currentServiceKey = serviceKeys.find(key => t(`services.${key}.slug`) === slug);

  if (!currentServiceKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('nav.services')} Not Found</h1>
          <Button onClick={() => navigate(`/${i18n.language}`)}>
            {t('nav.home')}
          </Button>
        </div>
      </div>
    );
  }

  const serviceName = t(`services.${currentServiceKey}.name`);
  const serviceImage = serviceImages[slug || ''];

  const handleBookService = () => {
    const message = `Hello! I would like to book ${serviceName}.\n\nPreferred Date & Time: `;
    const whatsappUrl = `https://wa.me/971561121239?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const relatedServices = serviceKeys
    .filter(key => key !== currentServiceKey)
    .slice(0, 3)
    .map(key => ({
      key,
      name: t(`services.${key}.name`),
      slug: t(`services.${key}.slug`),
      image: serviceImages[t(`services.${key}.slug`)],
      duration: t(`services.${key}.duration`),
    }));

  return (
    <>
      <SEO 
        title={`${serviceName} - Bustan Hana Spa`}
        description={t(`services.${currentServiceKey}.description`)}
        path={`/services/${slug}`}
      />
      <Header />
      <FloatingWhatsApp />
      
      <main className="min-h-screen pb-16">
        {/* Hero Section */}
        <section className="relative h-[75vh] overflow-hidden -mt-24 pt-24">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 via-40% to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
            <Button
              variant="ghost"
              onClick={() => navigate(`/${i18n.language}#services`)}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('nav.services')}
            </Button>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 [filter:drop-shadow(0_0_3px_rgba(0,0,0,0.7))_drop-shadow(0_0_6px_rgba(0,0,0,0.45))]">
              {serviceName}
            </h1>
            <div className="flex items-center gap-4 text-white/90 [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.7))_drop-shadow(0_0_4px_rgba(0,0,0,0.5))]">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t(`services.${currentServiceKey}.duration`)}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 pb-16 max-w-4xl">
          <div className="grid gap-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(`services.${currentServiceKey}.fullDescription`)}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {(t(`services.${currentServiceKey}.benefits`, { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(`services.${currentServiceKey}.whatToExpect`)}
              </p>
            </div>

            {/* Preparation Tips */}
            <div className="bg-muted/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Preparation Tips</h2>
              <ul className="space-y-3">
                {(t(`services.${currentServiceKey}.preparation`, { returnObjects: true }) as string[]).map((tip: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking CTA */}
            <div className="text-center py-8">
              <Button
                onClick={handleBookService}
                size="lg"
                className="text-lg px-8"
              >
                {t('nav.bookNow')}
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((service) => (
              <Link
                key={service.key}
                to={`/${i18n.language}/services/${service.slug}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Card className="overflow-hidden hover-lift">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceDetail;
