import { Card } from "./ui/card";
const Services = () => {
  const services = [{
    icon: "🎨",
    title: "Identidade Visual e Branding",
    description: "Criamos a personalidade visual da sua marca para se destacar no mercado"
  }, {
    icon: "📱",
    title: "Gestão de Instagram e Facebook",
    description: "Gerenciamento completo das suas redes sociais com conteúdo estratégico"
  }, {
    icon: "🎬",
    title: "Criação de Reels e Vídeos",
    description: "Conteúdo audiovisual envolvente que gera engajamento e conversões"
  }, {
    icon: "💻",
    title: "Landing Pages e Sites",
    description: "Páginas otimizadas para conversão e presença digital profissional"
  }, {
    icon: "⚡",
    title: "Automação com IA no WhatsApp",
    description: "Atendimento automatizado inteligente que funciona 24/7"
  }, {
    icon: "🎯",
    title: "Mentoria Digital para Empreendedores",
    description: "Capacitação para você dominar o marketing digital do seu negócio"
  }];
  return <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 bg-slate-100">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-brand-yellow">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital e impulsionar seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-transparent hover:border-l-brand-yellow group bg-slate-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-brand-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;