import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t('testimonials.reviews.0.name'),
      country: t('testimonials.reviews.0.country'),
      rating: 5,
      text: t('testimonials.reviews.0.text'),
    },
    {
      name: t('testimonials.reviews.1.name'),
      country: t('testimonials.reviews.1.country'),
      rating: 5,
      text: t('testimonials.reviews.1.text'),
    },
    {
      name: t('testimonials.reviews.2.name'),
      country: t('testimonials.reviews.2.country'),
      rating: 5,
      text: t('testimonials.reviews.2.text'),
    },
    {
      name: t('testimonials.reviews.3.name'),
      country: t('testimonials.reviews.3.country'),
      rating: 5,
      text: t('testimonials.reviews.3.text'),
    },
    {
      name: t('testimonials.reviews.4.name'),
      country: t('testimonials.reviews.4.country'),
      rating: 5,
      text: t('testimonials.reviews.4.text'),
    },
    {
      name: t('testimonials.reviews.5.name'),
      country: t('testimonials.reviews.5.country'),
      rating: 5,
      text: t('testimonials.reviews.5.text'),
    },
  ];
  
  return (
    <section id="testimonials" className="spa-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`p-8 bg-card border-border rounded-3xl space-y-4 scroll-scale-in hover-lift stagger-${(index % 6) + 1}`}
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.country}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden max-w-sm mx-auto">
          <Carousel>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 bg-card border-border rounded-3xl space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
