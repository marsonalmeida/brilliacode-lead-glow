import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-dark via-brand-black to-brand-dark flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-yellow rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sua Presença Digital
              <span className="block text-brand-yellow">Merece Brilhar</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transformamos microempresas em marcas relevantes com marketing 
              <span className="text-brand-yellow font-semibold"> acessível, estratégico e autêntico.</span>
            </p>
            
            <p className="text-lg text-brand-yellow font-medium">
              Estratégia. Conteúdo. Crescimento. Tudo isso com IA e coração local.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="brand" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Receba um Plano Gratuito
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button 
                variant="brand-outline" 
                size="xl"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-sm border-brand-yellow/20 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                    <span className="text-brand-dark font-bold text-sm">★</span>
                  </div>
                  <span className="text-white font-semibold">Instagram Otimizado</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div 
                    key={item} 
                    className="aspect-square bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/5 rounded-lg flex items-center justify-center"
                  >
                    <div className="w-6 h-6 bg-brand-yellow/50 rounded"></div>
                  </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <span>+127% engajamento</span>
                  <span>+89% alcance</span>
                </div>
              </div>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center animate-bounce">
              <span className="text-brand-dark font-bold">📈</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-brand-yellow/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;