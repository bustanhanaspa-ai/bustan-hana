import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

const Booking = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'd like to book:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/971561121239?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecting to WhatsApp...');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971561121239', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971561121239';
  };

  return (
    <section id="booking" className="spa-section bg-spa-warm-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('booking.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('booking.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Booking Form */}
            <Card className="p-8 bg-card rounded-3xl shadow-elegant scroll-slide-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('booking.form.name')}</Label>
                  <Input 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('booking.form.phone')}</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{t('booking.form.service')}</Label>
                  <Input 
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">{t('booking.form.date')}</Label>
                  <Input 
                    id="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t('booking.form.message')}</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="rounded-xl min-h-24"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {t('booking.form.submit')}
                </Button>
              </form>
            </Card>

            {/* Quick Contact */}
            <div className="space-y-6 scroll-slide-right">
              <Card className="p-8 bg-card rounded-3xl shadow-elegant space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {t('booking.quickContact')}
                </h3>
                <p className="text-muted-foreground">
                  {t('booking.call')}
                </p>
                <Button 
                  onClick={handlePhoneClick}
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="mr-2" />
                  {t('booking.call')}
                </Button>
              </Card>

              <Card className="p-8 bg-card rounded-3xl shadow-elegant space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {t('booking.whatsapp')}
                </h3>
                <p className="text-muted-foreground">
                  {t('booking.whatsapp')}
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <MessageCircle className="mr-2" />
                  {t('booking.whatsapp')}
                </Button>
              </Card>

              <Card className="p-8 bg-gradient-gold rounded-3xl shadow-elegant space-y-4">
                <h3 className="font-serif text-xl font-semibold text-accent-foreground">
                  {t('booking.hours.title')}
                </h3>
                <div className="space-y-2 text-accent-foreground">
                  <p>{t('booking.hours.daily')}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
