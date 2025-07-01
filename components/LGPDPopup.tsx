"use client"
import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LGPDPopup() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Verifica se está no navegador antes de acessar localStorage (compatibilidade com SSR)
    if (typeof window !== 'undefined') {
      const hasAccepted = localStorage.getItem("lgpd-accepted");
      
      if (!hasAccepted) {
        // Pequeno delay para mostrar o popup após o carregamento da página
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      }
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem("lgpd-accepted", "true");
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in [animation-duration:500ms]">
      <div className="container mx-auto px-4 pb-4">
        <div className="relative bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Ícone e Gradiente */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0b3b49] to-slate-700 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="flex-grow">
            <h3 className="text-lg md:text-xl font-motiva font-bold text-slate-800 mb-1">Política de Privacidade</h3>
            <p className="text-sm md:text-base text-slate-600">
              Este site utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação, personalizar conteúdo e analisar nosso tráfego. Ao clicar em "Aceitar", você concorda com o uso de cookies conforme descrito em nossa Política de Privacidade.
            </p>
          </div>
          
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0 w-full md:w-auto">
            <Button
              asChild
              variant="link"
              size="sm"
              className="text-slate-600 hover:text-slate-800"
            >
              <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                Saiba mais
              </a>
            </Button>
            
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-[#0b3a48] hover:bg-[#1a4a60] text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Aceitar
            </Button>
          </div>
          
          {/* Botão de fechar */}
          <button 
            onClick={handleAccept}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
