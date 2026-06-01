import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Update the language
    i18n.changeLanguage(newLang);
    
    // Update the URL
    const pathWithoutLang = location.pathname.replace(/^\/(en|ar)/, '');
    navigate(`/${newLang}${pathWithoutLang}`);
    
    // Update document direction and language
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
      aria-label="Switch language"
    >
      <Languages className="h-4 w-4" />
      <span>{i18n.language === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
