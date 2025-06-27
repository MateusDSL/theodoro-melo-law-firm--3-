"use client"

import React from "react"
import { useState, useEffect } from "react"
import { X, Phone, User, Loader2 } from "lucide-react"

// CONFIGURAÇÕES
const WHATSAPP_NUMBER = "5549988385377"
const GOOGLE_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxCfahnAV6rMhAyIhMXEchwkMAlcmtQGYQV_0F2Uyn2i9CCt8x0XytNm9Yu8m8YUv5YTw/exec"

// --- Componentes UI Mínimos (Button, Input, Label - sem alterações) ---
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string }
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  />
))
Label.displayName = "Label"
// --- Fim dos Componentes UI Mínimos ---


export default function WhatsAppLeadCapture() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [statusMessage, setStatusMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gclid: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setFormData(prev => ({
        ...prev,
        gclid: params.get("gclid") || "",
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        utm_term: params.get("utm_term") || "",
        utm_content: params.get("utm_content") || "",
      }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "")
      let formattedPhone = phoneValue
      if (phoneValue.length <= 2) {
        formattedPhone = `(${phoneValue}`
      } else if (phoneValue.length <= 6) {
        formattedPhone = `(${phoneValue.slice(0,2)}) ${phoneValue.slice(2)}`
      } else if (phoneValue.length <= 10) {
          formattedPhone = `(${phoneValue.slice(0,2)}) ${phoneValue.slice(2,6)}-${phoneValue.slice(6)}`
      } else {
          formattedPhone = `(${phoneValue.slice(0,2)}) ${phoneValue.slice(2,7)}-${phoneValue.slice(7,11)}`
      }
      setFormData((prev) => ({ ...prev, [name]: formattedPhone.slice(0,15) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setStatusMessage("Enviando dados...")

    if (!GOOGLE_SCRIPT_WEB_APP_URL) {
        console.error("URL do Google Apps Script não configurada!");
        setStatusMessage("Erro de configuração: URL do Google Script não definida.");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
    }

    try {
      const payload = {
        nome: formData.name,
        telefone: formData.phone.replace(/\D/g, ''),
        gclid: formData.gclid,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
      };

      await fetch(GOOGLE_SCRIPT_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(payload)
      });

      console.log("Tentativa de envio para o Google Script concluída.");
      setStatusMessage("Dados enviados! Redirecionando para o WhatsApp...");
      setSubmitStatus("success");

      const message = `Olá! Meu nome é ${formData.name}. Gostaria de mais informações.\n\n📱 Telefone: ${formData.phone}\n\n(Ref: ${formData.gclid ? `GCLID ${formData.gclid}` : ''} ${formData.utm_source ? `Source ${formData.utm_source}` : ''}) \n\nAguardo seu contato!`;
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      setTimeout(() => {
        setFormData(prev => ({
            ...prev,
            name: "",
            phone: "",
        }));
        closeModal();
        window.open(whatsappUrl, "_blank");
        setIsSubmitting(false);
        setSubmitStatus(null);
        setStatusMessage("");
      }, 1500);

    } catch (error) {
      console.error("Erro ao enviar dados para o Google Script:", error);
      setStatusMessage("Erro ao enviar dados. Tente novamente.");
      setSubmitStatus("error");
      setIsSubmitting(false);
    }
  }

  const closeModal = () => {
    if (isSubmitting) return;
    setIsClosing(true)
    setShowContent(false)
    setTimeout(() => {
      setIsModalOpen(false)
      setIsClosing(false)
    }, 300)
  }

  const openModal = () => {
    setIsModalOpen(true)
    setIsOpening(true)
    setShowContent(false)
    setSubmitStatus(null);
    setStatusMessage("");
    setFormData(prev => ({
        ...prev,
        name: "",
        phone: ""
    }));

    setTimeout(() => {
      setIsOpening(false)
    }, 50)
    setTimeout(() => {
      setShowContent(true)
    }, 200)
  }

  useEffect(() => {
    if (isModalOpen && !isOpening && !isClosing) {
      setShowContent(false);
      setTimeout(() => setShowContent(true), 200);
    }
  }, [isModalOpen, isOpening, isClosing]);


  return (
    <div className="font-sans">
      {/* Botão Flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-[99]">
        <Button
          onClick={openModal}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover-float"
          title="Fale conosco pelo WhatsApp"
        >
          {/* Ícone oficial do WhatsApp */}
          <svg className="w-7 h-7 text-white hover-rotate" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
          </svg>
        </Button>
      </div>

      {/* Modal de Captura de Lead */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-30"
            }`}
            onClick={closeModal}
          />

          {/* Panel deslizante */}
          <div
            className={`absolute right-0 bottom-0 h-auto w-full max-w-sm bg-white shadow-2xl rounded-tl-3xl rounded-bl-3xl md:rounded-bl-none spring-animation ${
              isClosing ? "slide-out" : isOpening ? "slide-in-start" : "slide-in-end"
            }`}
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-[#25D366] rounded-tl-3xl">
              <div className="flex items-center space-x-3 hover-group">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover-pulse">
                  {/* Ícone oficial do WhatsApp */}
                  <svg className="w-5 h-5 text-white hover-bounce" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-white hover-glow">WhatsApp</h2>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-white hover:bg-white hover:bg-opacity-20 h-8 w-8 p-0 hover-rotate-close"
                disabled={isSubmitting}
              >
                <X className="w-4 h-4 hover-spin" />
              </Button>
            </div>

            {/* Corpo do Panel */}
            <div className="p-3">
              <div
                className={`mb-4 transition-all duration-500 hover-lift-subtle ${showContent ? "animate-fade-in-up-1" : "opacity-0 translate-y-4"}`}
              >
                <h3 className="text-base font-medium text-gray-900 mb-1 hover-color-shift">Fale Conosco</h3>
                <p className="text-xs text-gray-600 hover-fade-in">
                  Deixe seus dados e inicie uma conversa no WhatsApp.
                </p>
              </div>

              {statusMessage && (
                <div
                  className={`mb-3 p-2 text-sm rounded-lg text-center ${
                    submitStatus === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : submitStatus === "error"
                      ? "bg-red-100 text-red-700 border border-red-200"
                      : "bg-blue-100 text-blue-700 border border-blue-200"
                  }`}
                >
                  {isSubmitting && submitStatus !== 'success' && submitStatus !== 'error' && <Loader2 className="w-4 h-4 inline mr-2 animate-spin" />}
                  {statusMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Campo Nome */}
                <div
                  className={`space-y-1 transition-all duration-500 hover-field-group ${showContent ? "animate-fade-in-up-2" : "opacity-0 translate-y-4"}`}
                >
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 hover-label">
                    Nome
                  </Label>
                  <div className="relative hover-input-container">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 hover-icon-color transition-colors duration-200" />
                    <Input
                      id="name" name="name" type="text" placeholder="Seu nome completo"
                      value={formData.name} onChange={handleInputChange}
                      className="pl-10 h-10 hover-input-focus" required disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Campo Telefone */}
                <div
                  className={`space-y-1 transition-all duration-500 hover-field-group ${showContent ? "animate-fade-in-up-3" : "opacity-0 translate-y-4"}`}
                >
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 hover-label">
                    Telefone (WhatsApp)
                  </Label>
                  <div className="relative hover-input-container">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 hover-icon-color transition-colors duration-200" />
                    <Input
                      id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX"
                      value={formData.phone} onChange={handleInputChange}
                      className="pl-10 h-10 hover-input-focus" required disabled={isSubmitting} maxLength={15}
                    />
                  </div>
                </div>

                {/* Botão Enviar */}
                <div
                  className={`pt-1 transition-all duration-500 ${showContent ? "animate-fade-in-up-4" : "opacity-0 translate-y-4"}`}
                >
                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium py-2.5 transition-all duration-200 hover-button-premium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /><span>Processando...</span></>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2 hover-icon-wiggle" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
                        </svg>
                        <span className="hover-text-glow">Iniciar Conversa</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div
                className={`mt-3 pt-3 border-t border-gray-100 transition-all duration-500 hover-info-section ${showContent ? "animate-fade-in-up-5" : "opacity-0 translate-y-4"}`}
              >
                <p className="text-xs text-gray-500 text-center hover-info-text">
                  Ao enviar, seus dados serão registrados e você será redirecionado(a) para o WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos */}
      <style jsx>{`
        .font-sans {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
        .spring-animation {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out;
        }
        .slide-in-start {
          transform: translateX(100%) scale(0.95);
          opacity: 0;
        }
        .slide-in-end {
          transform: translateX(0) scale(1);
          opacity: 1;
        }
        .slide-out {
          transform: translateX(100%) scale(0.95);
          opacity: 0;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.2s ease-in;
        }
        .animate-fade-in-up-1 { animation: fadeInUp 0.5s ease-out 0.1s both; }
        .animate-fade-in-up-2 { animation: fadeInUp 0.5s ease-out 0.15s both; }
        .animate-fade-in-up-3 { animation: fadeInUp 0.5s ease-out 0.2s both; }
        .animate-fade-in-up-4 { animation: fadeInUp 0.5s ease-out 0.25s both; }
        .animate-fade-in-up-5 { animation: fadeInUp 0.5s ease-out 0.3s both; }
        .animate-fade-in-up-6 { animation: fadeInUp 0.5s ease-out 0.35s both; }
        .hover-lift { transition: all 0.3s ease; }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .hover-float { animation: float 2.5s ease-in-out infinite; }
        .hover-rotate { transition: transform 0.3s ease; }
        .hover-rotate:hover { transform: rotate(10deg) scale(1.1); }
        .hover-group:hover .hover-pulse { animation: pulseSimple 1.5s infinite cubic-bezier(0.4, 0, 0.6, 1); }
        .hover-bounce { transition: transform 0.2s ease; }
        .hover-group:hover .hover-bounce { animation: bounceSoft 0.8s ease; }
        .hover-glow { transition: text-shadow 0.3s ease; }
        .hover-group:hover .hover-glow { text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }
        .hover-rotate-close { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .hover-rotate-close:hover { transform: rotate(90deg) scale(1.1); }
        .hover-spin { transition: transform 0.3s ease; }
        .hover-rotate-close:hover .hover-spin { transform: rotate(90deg); }
        .hover-lift-subtle { transition: transform 0.2s ease-out; }
        .hover-lift-subtle:hover { transform: translateY(-2px); }
        .hover-color-shift { transition: color 0.2s ease; }
        .hover-lift-subtle:hover .hover-color-shift { color: #128C7E; }
        .hover-fade-in { transition: opacity 0.3s ease; }
        .hover-lift-subtle:hover .hover-fade-in { opacity: 0.7; }
        .hover-field-group .hover-label { transition: color 0.2s ease, transform 0.2s ease; }
        .hover-field-group:hover .hover-label { color: #25D366; transform: translateX(1px); }
        .hover-input-container .hover-icon-color { transition: color 0.2s ease; }
        .hover-field-group:hover .hover-icon-color { color: #25D366; }
        .hover-input-focus { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        .hover-input-focus:focus,
        .hover-field-group:hover .hover-input-focus { border-color: #25D366 !important; box-shadow: 0 0 0 2px rgba(37, 211, 102, 0.2) !important; }
        .hover-button-premium { transition: transform 0.2s ease-out, box-shadow 0.2s ease-out, background-color 0.2s ease; }
        .hover-button-premium:hover { transform: translateY(-2px); box-shadow: 0 8px 15px rgba(37, 211, 102, 0.25); background-color: #20BA5A; }
        .hover-icon-wiggle { display: inline-block; transition: transform 0.1s ease; }
        .hover-button-premium:hover .hover-icon-wiggle { animation: wiggleSoft 0.4s ease-in-out; }
        .hover-text-glow { transition: text-shadow 0.3s ease; }
        .hover-button-premium:hover .hover-text-glow { text-shadow: 0 0 5px rgba(255, 255, 255, 0.4); }
        .hover-info-section .hover-info-text { transition: color 0.2s ease, transform 0.2s ease; }
        .hover-info-section:hover .hover-info-text { color: #128C7E; transform: scale(1.01); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes bounceSoft { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-4px) scale(1.05); } }
        @keyframes wiggleSoft { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-3deg); } 75% { transform: rotate(3deg); } }
        @keyframes pulseSimple { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
      `}</style>
    </div>
  )
}
