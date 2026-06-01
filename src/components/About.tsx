import { useTranslation } from 'react-i18next';
import massageRoom from '@/assets/massage-room.jpg';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="spa-section bg-spa-warm-bg">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-slide-left">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.paragraph3')}
            </p>
          </div>
          <div className="scroll-slide-right">
            <img
              src={massageRoom} 
              alt="Serene massage therapy room at Bustan Hana Spa" 
              className="rounded-3xl shadow-elegant w-full h-auto object-cover hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
