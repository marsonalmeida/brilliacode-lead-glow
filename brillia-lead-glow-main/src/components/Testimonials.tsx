import { Card } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Joana",
      business: "Loja de Roupas em Tomazina",
      text: "Depois que comecei com a BrilliaCode, meu perfil virou vitrine de verdade.",
      avatar: "👩"
    },
    {
      name: "Carlos",
      business: "Estética Automotiva de Ibaiti",
      text: "A automação com WhatsApp mudou meu atendimento. Agora respondo até dormindo.",
      avatar: "👨"
    },
    {
      name: "Lívia",
      business: "Salão de Beleza em Pinhalão",
      text: "É um serviço de cidade grande, feito com o cuidado de cidade pequena.",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos <span className="text-brand-yellow">Reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre os resultados alcançados
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-dark font-bold text-xl">"</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-foreground italic leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-brand-yellow">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">4.9/5 de satisfação</span>
          </div>
          <p className="text-muted-foreground mt-2">Baseado em mais de 150 avaliações de clientes</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;