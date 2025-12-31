import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-gradient-to-br from-primary via-primary to-accent py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-white/20 rounded-full p-4">
                    <Mail className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-black text-white">
                  ¡GRACIAS POR SUSCRIBIRTE!
                </h3>
                <p className="text-xl text-white/90">
                  Pronto recibirás nuestras mejores ofertas y promociones exclusivas.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                    ¿QUIERES OFERTAS EXCLUSIVAS?
                  </h3>
                  <p className="text-xl text-white/90">
                    Suscríbete y recibe un 10% de descuento en tu primera compra
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 h-14 text-lg bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto h-14 px-8 bg-white text-black hover:bg-white/90 font-black text-lg"
                  >
                    {logic.isSubmitting ? 'SUSCRIBIENDO...' : 'SUSCRIBIRME'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-white bg-destructive/20 p-3 rounded-lg">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};