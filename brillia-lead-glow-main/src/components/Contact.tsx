import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Monta query string para GET
    const params = new URLSearchParams(formData).toString();
    fetch(`https://script.google.com/macros/s/AKfycbwOpwybiFwBUfpYXzoWT9PSu-4Pfz5-UsajoVVgA-6jdSpcHptm01Oo_tfBiFGSvXPQrg/exec?${params}`)
      .catch((err) => console.error('Erro ao enviar para planilha:', err));

    // Cria mensagem para WhatsApp
    const message = `Olá! Gostaria de receber um plano gratuito.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Tipo de Negócio:* ${formData.business}\n*Mensagem:* ${formData.message}\n\nEnviado através do site BrilliaCode.`;
    const whatsappUrl = `https://wa.me/5543988508487?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "WhatsApp",
      value: "(43) 98850-8487",
      link: "https://wa.me/5543988508487"
    },
    {
      icon: "📧",
      title: "Email",
      value: "atendimento@brilliacode.com",
      link: "mailto:atendimento@brilliacode.com"
    },
    {
      icon: "📍",
      title: "Localização",
      value: "Pinhalão - PR",
      link: "#"
    },
    {
      icon: "📱",
      title: "Instagram",
      value: "@brilliacode",
      link: "https://instagram.com/brilliacode"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Receba um <span className="text-brand-yellow">Plano Gratuito</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e receba uma proposta personalizada para o seu negócio
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(43) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Negócio *
                  </label>
                  <Input
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Ex: Salão de beleza"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Conte-nos sobre seus objetivos
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva brevemente seus principais desafios e objetivos com o marketing digital..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" variant="brand" size="lg" className="w-full">
                Enviar via WhatsApp →
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você será redirecionado para o WhatsApp para finalizar o contato.
              </p>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contato <span className="text-brand-yellow">Rápido</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Prefere falar diretamente? Entre em contato através dos nossos canais oficiais.
              </p>
            </div>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <a 
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-2xl group-hover:bg-brand-yellow/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-brand-yellow transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 bg-gradient-to-r from-brand-yellow/10 to-transparent border-brand-yellow/20">
              <h4 className="font-bold text-foreground mb-2">🚀 Resposta Rápida</h4>
              <p className="text-muted-foreground text-sm">
                Respondemos em até 2 horas durante horário comercial. Para urgências, 
                WhatsApp é o canal mais rápido!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;