import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-brand-dark/95 backdrop-blur-sm z-50 border-b border-brand-yellow/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/9b6ade7e-1597-4992-8cd4-f8e0dd7a0baa.png" 
              alt="BrilliaCode" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">BrilliaCode</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-brand-yellow transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-brand-yellow transition-colors"
            >
              Pacotes
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-brand-yellow transition-colors"
            >
              Depoimentos
            </button>
            <Button 
              variant="brand" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Plano Gratuito
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-brand-yellow/20">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-white hover:text-brand-yellow transition-colors py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-white hover:text-brand-yellow transition-colors py-2"
              >
                Pacotes
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-white hover:text-brand-yellow transition-colors py-2"
              >
                Depoimentos
              </button>
              <Button 
                variant="brand" 
                size="sm" 
                className="w-fit"
                onClick={() => scrollToSection('contact')}
              >
                Plano Gratuito
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;