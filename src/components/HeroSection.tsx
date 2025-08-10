import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium">Personalizzazione Illimitata</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="block">Vesti il Tuo</span>
          <span className="gradient-text">Stile Unico</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
          Crea abbigliamento personalizzato che racconta la tua storia. 
          Design unici, qualità premium, spedizione veloce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="btn-hero group">
            Personalizza Ora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold transition-bounce hover:scale-105">
            Scopri la Collezione
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-light">10k+</div>
            <div className="text-sm text-white/80">Clienti Soddisfatti</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-light">24h</div>
            <div className="text-sm text-white/80">Produzione Rapida</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-light">100%</div>
            <div className="text-sm text-white/80">Qualità Garantita</div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full p-1">
          <div className="w-2 h-3 bg-white/70 rounded-full mx-auto animate-bounce-gentle"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;