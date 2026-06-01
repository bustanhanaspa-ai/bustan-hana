import { Button } from '@/components/ui/button';
import { Shield, Award, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import hammam from '@/assets/hammam.jpg';
const Hero = () => {
  const {
    t
  } = useTranslation();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${hammam})`
    }} />
      
      
      {/* Hero Content */}
      <motion.div initial={{
      opacity: 0,
      y: -80
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6
    }} className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl bg-transparent -mt-1 md:mt-[100px]">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight [filter:drop-shadow(0_0_3px_rgba(0,0,0,0.7))_drop-shadow(0_0_6px_rgba(0,0,0,0.45))]">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground [filter:drop-shadow(0_0_2px_rgba(0,0,0,0.7))_drop-shadow(0_0_4px_rgba(0,0,0,0.6))]">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button onClick={() => scrollToSection('booking')} size="lg" className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 px-8 py-6 text-lg shadow-lg">
              {t('hero.bookAppointment')}
            </Button>
            
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-elegant border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-10 h-10 drop-shadow-md text-emerald-800" />
              <p className="font-semibold text-white drop-shadow-sm">{t('hero.licensed')}</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-elegant border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Award className="w-10 h-10 drop-shadow-md text-emerald-800" />
              <p className="font-semibold text-white drop-shadow-sm">{t('hero.certified')}</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-elegant border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Sparkles className="w-10 h-10 drop-shadow-md text-emerald-800" />
              <p className="font-semibold text-white drop-shadow-sm">{t('hero.authentic')}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default Hero;