import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FloatingLocation = () => {
  const { t } = useTranslation();
  
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/6xA2P1LEqSP1BjFw6?g_st=ipc', '_blank');
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleLocationClick}
            size="lg"
            className="fixed bottom-6 left-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300"
            aria-label={t('location.tooltip', 'Find Us')}
          >
            <MapPin className="!w-10 !h-10 md:!w-12 md:!h-12" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{t('location.tooltip', 'Find Us')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingLocation;
