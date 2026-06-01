import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import aromatherapy from '@/assets/aromatherapy.jpg';
import spaTreatment from '@/assets/spa-treatment.jpg';
import hammamInterior from '@/assets/hammam-interior.jpg';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const { t } = useTranslation();
  const images = [
    { src: spaTreatment, alt: 'Luxurious spa treatment room' },
    { src: hammamInterior, alt: 'Traditional hammam interior' },
    { src: aromatherapy, alt: 'Aromatherapy treatment setup' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setFeaturedIndex(index);
  };

  const handleExpandClick = () => {
    setCurrentIndex(featuredIndex);
    setIsOpen(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="gallery" className="spa-section bg-gradient-spa">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-elegant scroll-scale-in group">
            <Badge className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground backdrop-blur-sm">
              {t('gallery.badge')}
            </Badge>
            <Button
              variant="secondary"
              size="icon"
              className="absolute bottom-4 right-4 z-10 h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleExpandClick}
            >
              <Maximize2 className="h-5 w-5" />
            </Button>
            <img
              src={images[featuredIndex].src}
              alt={images[featuredIndex].alt}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4 scroll-fade-in">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`rounded-2xl overflow-hidden hover-lift transition-all ${
                  featuredIndex === index 
                    ? 'ring-4 ring-primary shadow-lg scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 md:h-32 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Carousel Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-full w-screen h-screen p-0 bg-background/98 backdrop-blur-md border-0 rounded-none">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-6 right-6 z-50 text-foreground/80 hover:text-foreground hover:bg-background/60 h-10 w-10 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-foreground/80 hover:text-foreground hover:bg-background/60 h-12 w-12 rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div 
              className="w-full h-full flex items-center justify-center p-4 md:p-20"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain select-none"
              />
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-foreground/80 hover:text-foreground hover:bg-background/60 h-12 w-12 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-sm px-5 py-2 rounded-full text-sm text-foreground font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
