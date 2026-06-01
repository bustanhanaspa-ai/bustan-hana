import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  
  const handleWhatsAppClick = () => {
    // GA4 event
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Floating WhatsApp Button'
      });
    }

    // Open WhatsApp
    window.open('https://wa.me/971561121239', '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-elegant animate-pulse hover:animate-none"
            aria-label={t('whatsapp.tooltip')}
          >
            <MessageCircle className="!w-10 !h-10 md:!w-12 md:!h-12" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('whatsapp.tooltip')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingWhatsApp;
