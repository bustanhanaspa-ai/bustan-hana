import { Shield, Users, Droplets, Lock, CheckCircle2, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const reasons = [
    { icon: Shield, key: 'licensed' },
    { icon: Award, key: 'therapists' },
    { icon: Droplets, key: 'products' },
    { icon: CheckCircle2, key: 'hygiene' },
    { icon: Lock, key: 'privacy' },
    { icon: Users, key: 'authentic' },
  ];

  return (
    <section className="spa-section bg-gradient-spa">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className={`flex flex-col items-center text-center space-y-4 p-8 bg-card/50 backdrop-blur-sm rounded-3xl scroll-scale-in stagger-${(index % 6) + 1}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {t(`whyChoose.${reason.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`whyChoose.${reason.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
