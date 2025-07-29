const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/9b6ade7e-1597-4992-8cd4-f8e0dd7a0baa.png" 
                alt="BrilliaCode" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">BrilliaCode</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Agência digital feita para pequenos negócios com grandes sonhos. 
              Transformamos sua presença online com estratégia, criatividade e tecnologia.
            </p>
            <p className="text-brand-yellow font-semibold">
              Feito com 💛 por quem acredita no poder das pequenas empresas.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Pacotes e Preços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-brand-yellow transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://wa.me/5543988508487" 
                  target="_blank"
                  className="hover:text-brand-yellow transition-colors"
                >
                  📱 (43) 98850-8487
                </a>
              </li>
              <li>
                <a 
                  href="mailto:atendimento@brilliacode.com"
                  className="hover:text-brand-yellow transition-colors"
                >
                  📧 atendimento@brilliacode.com
                </a>
              </li>
              <li>
                <span>📍 Pinhalão - PR</span>
              </li>
              <li>
                <a 
                  href="https://instagram.com/brilliacode" 
                  target="_blank"
                  className="hover:text-brand-yellow transition-colors"
                >
                  📱 @brilliacode
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 BrilliaCode. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-yellow transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-brand-yellow transition-colors">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;