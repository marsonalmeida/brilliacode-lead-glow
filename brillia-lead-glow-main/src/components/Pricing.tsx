import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const Pricing = () => {
  const packages = [
    {
      name: "Essencial",
      price: "R$ 297",
      period: "/mês",
      ideal: "Negócios locais iniciantes",
      features: [
        "8 posts por mês",
        "Stories semanais",
        "Agendamento automático",
        "Design com identidade",
        "Calendário editorial personalizado",
        "Suporte via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Avançado",
      price: "R$ 497",
      period: "/mês",
      ideal: "Negócios com produtos visuais",
      features: [
        "Tudo do Essencial",
        "Criação de Reels",
        "Campanhas de anúncios",
        "Monitoramento de métricas",
        "Relatórios mensais",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Turbo",
      price: "R$ 797",
      period: "/mês",
      ideal: "Negócios com vendas online",
      features: [
        "Tudo do Avançado",
        "Landing Page personalizada",
        "Automação no WhatsApp",
        "Integração com vendas",
        "Consultoria estratégica",
        "Suporte 24/7"
      ],
      popular: false
    },
    {
      name: "Sob Medida",
      price: "Sob",
      period: "Consulta",
      ideal: "Projetos únicos ou personalizados",
      features: [
        "Reunião de descoberta",
        "Proposta exclusiva",
        "Soluções customizadas",
        "Escalabilidade total",
        "Acompanhamento dedicado",
        "Resultados garantidos"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pacotes e <span className="text-brand-yellow">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem suporte e acompanhamento personalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-6 relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular 
                  ? 'border-2 border-brand-yellow shadow-lg scale-105' 
                  : 'border hover:border-brand-yellow/50'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-bold">
                  MAIS POPULAR
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.ideal}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-brand-yellow">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">{pkg.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <span className="text-brand-yellow font-bold mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={pkg.popular ? "brand" : "brand-outline"} 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {pkg.name === "Sob Medida" ? "Solicitar Proposta" : "Escolher Plano"}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Todos os pacotes incluem: Design com identidade • Calendário editorial • Monitoramento e relatórios • Suporte via WhatsApp
          </p>
          <Button 
            variant="ghost" 
            className="text-brand-yellow hover:text-brand-yellow/80"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Precisa de algo específico? Fale conosco →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;