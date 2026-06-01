import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEO = ({ title, description, path = '' }: SEOProps) => {
  const { t, i18n } = useTranslation();
  
  const currentLang = i18n.language;
  const alternateLang = currentLang === 'en' ? 'ar' : 'en';
  const baseUrl = 'https://bustanhanaspa.com'; // Replace with your actual domain
  
  const seoTitle = title || t('seo.home.title');
  const seoDescription = description || t('seo.home.description');
  
  return (
    <Helmet>
      <html lang={currentLang} dir={currentLang === 'ar' ? 'rtl' : 'ltr'} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/${currentLang}${path}`} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'ar_AE'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${baseUrl}/${currentLang}${path}`} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      
      {/* Alternate language links for SEO */}
      <link rel="alternate" hrefLang={currentLang} href={`${baseUrl}/${currentLang}${path}`} />
      <link rel="alternate" hrefLang={alternateLang} href={`${baseUrl}/${alternateLang}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${path}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}/${currentLang}${path}`} />
    </Helmet>
  );
};

export default SEO;
