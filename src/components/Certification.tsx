import { FileCheck, ShieldCheck, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import certificationBg from '@/assets/certification-bg.jpg';

const Certification = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionOffset = sectionRef.current?.offsetTop || 0;
  const parallaxY = (scrollY - sectionOffset) * -0.3;

  return (
    <section 
      ref={sectionRef}
      className="relative spa-section overflow-hidden isolate" 
      style={{ zIndex: 2 }}
    >
      {/* Solid background to block ambient orbs */}
      <div className="absolute inset-0 bg-background z-0" />
      
      {/* Parallax Background Image - Extended to prevent clipping */}
      <div 
        className="absolute inset-x-0 -top-20 -bottom-20 z-[1] bg-gradient-to-br from-gray-700 to-gray-900"
        style={{
          backgroundImage: `url(${certificationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: window.innerWidth < 768 ? '75% center' : 'center',
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-[2]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-[10]" style={{ transform: 'translateZ(0)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-8 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
            {t('certification.title')}
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            {t('certification.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-elegant">
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                {t('certification.license.title')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('certification.license.description')}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-elegant">
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                {t('certification.health.title')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('certification.health.description')}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-elegant">
              <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center">
                <Award className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white">
                {t('certification.international.title')}
              </h3>
              <p className="text-white/80 text-sm">
                {t('certification.international.description')}
              </p>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-lg text-white font-medium italic">
              "{t('certification.quote')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
