import { Card } from "./ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Sobre a <span className="text-brand-yellow">BrilliaCode</span>
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A BrilliaCode é uma agência digital feita para pequenos negócios com grandes sonhos. 
            Unimos criatividade, tecnologia e atendimento humanizado para te ajudar a crescer online, 
            com menos gasto e mais estratégia.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-brand-yellow">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Atendimento Personalizado</h3>
              <p className="text-muted-foreground">Presencial e remoto, sempre com o toque humano que você merece</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-brand-yellow">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">IA Acessível</h3>
              <p className="text-muted-foreground">Tecnologia avançada aplicada de forma simples e acessível</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-brand-yellow">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Raízes Locais</h3>
              <p className="text-muted-foreground">Fundadores com raízes em Pinhalão-PR, conhecemos sua realidade</p>
            </Card>
          </div>
          
          <div className="mt-16 p-8 bg-gradient-to-r from-brand-yellow/10 to-transparent rounded-2xl border border-brand-yellow/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Princípio BrilliaCode</h3>
            <p className="text-xl text-brand-yellow font-semibold mb-2">
              "Tecnologia com raiz, presença com verdade."
            </p>
            <p className="text-muted-foreground">
              Acreditamos que cada microempresa carrega um brilho único. Nosso papel é fazer com que 
              esse brilho apareça para o mundo — com estratégia, simplicidade e um toque de IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;