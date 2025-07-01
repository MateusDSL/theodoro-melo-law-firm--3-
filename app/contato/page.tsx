"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Target, CheckCircle, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContatoPage() {
  const contactInfo = [
    {
      title: "Endereço",
      icon: MapPin,
      content: (
        <>
          Rua Exemplo, 123 - Centro
          <br />
          Lages/SC - CEP 88500-000
          <br />
          <span className="text-sm text-slate-600 font-medium">Atuação Nacional</span>
        </>
      ),
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
    },
    {
      title: "Telefone",
      icon: Phone,
      content: (
        <>
          (49) 3222-0000
          <br />
          <span className="text-sm font-medium">WhatsApp: (49) 99999-0000</span>
        </>
      ),
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
    },
    {
      title: "E-mail",
      icon: Mail,
      content: (
        <>
          contato@theodoromelo.adv.br
          <br />
          <span className="text-sm font-medium">Resposta em até 24h</span>
        </>
      ),
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
    },
    {
      title: "Horário de Atendimento",
      icon: Clock,
      content: (
        <>
          Segunda a Sexta: 8h às 18h
          <br />
          Sábado: 8h às 12h
          <br />
          <span className="text-sm text-slate-600 font-medium">Emergências: 24h</span>
        </>
      ),
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black"></div>
        <div className="absolute inset-0 opacity-20 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in [animation-fill-mode:backwards]">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </div>
            <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 font-cinzel">
              Entre em <span style={{ color: "#F1AF09" }}>Contato</span>
            </h1>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-xl text-white/80 leading-relaxed">
              Estamos prontos para ouvir você e oferecer a melhor solução jurídica para suas necessidades específicas
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Formulário */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Solicite uma Consulta
                </div>
                <h2 className="text-3xl lg:text-4xl font-motiva font-bold text-slate-900 mb-6 font-cinzel">
                  Vamos Conversar Sobre Seu <span style={{ color: "#F1AF09" }}>Caso</span>
                </h2>
                <div
                  className="w-16 h-1 bg-gradient-to-r mb-8"
                  style={{ background: "#F1AF09" }}
                ></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas para agendar sua
                  consulta gratuita e personalizada.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-slide-up [animation-delay:0.2s] [animation-fill-mode:backwards]">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="animate-slide-up [animation-delay:0.3s] [animation-fill-mode:backwards]">
                    <label className="block text-sm font-medium text-slate-700 mb-2">E-mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-slide-up [animation-delay:0.4s] [animation-fill-mode:backwards]">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="animate-slide-up [animation-delay:0.5s] [animation-fill-mode:backwards]">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Área de Interesse</label>
                    <select className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 hover:border-slate-400">
                      <option value="">Selecione uma área</option>
                      <option value="empresarial">Direito Empresarial</option>
                      <option value="recuperacao-judicial">Recuperação Judicial</option>
                      <option value="familia">Direito de Família</option>
                      <option value="inventarios">Inventários</option>
                      <option value="contratos">Contratos</option>
                      <option value="indenizatorias">Demandas Indenizatórias</option>
                      <option value="imoveis">Posse e Propriedade de Imóveis</option>
                      <option value="consumo">Relações de Consumo</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="animate-slide-up [animation-delay:0.6s] [animation-fill-mode:backwards]">
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-300 hover:border-slate-400"
                    placeholder="Descreva brevemente sua situação ou necessidade jurídica..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 animate-slide-up [animation-delay:0.7s] [animation-fill-mode:backwards]">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    Concordo com a{" "}
                    <a href="#" className="text-slate-600 hover:underline font-medium">
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o contato para fins de consultoria jurídica.
                  </label>
                </div>

                <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up [animation-delay:0.8s] [animation-fill-mode:backwards]">
                  Enviar Solicitação
                </Button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="animate-fade-in [animation-delay:0.3s] [animation-fill-mode:backwards]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Phone className="w-4 h-4" />
                  Informações de Contato
                </div>
                <h2 className="text-3xl lg:text-4xl font-motiva font-bold text-slate-900 mb-6 font-cinzel">
                  Fale <span style={{ color: "#F1AF09" }}>Diretamente</span> Conosco
                </h2>
                <div
                  className="w-16 h-1 mb-8"
                  style={{ background: "#F1AF09" }}
                ></div>
              </div>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          style={{ background: "#F1AF09" }}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                          <div className="text-slate-600">{item.content}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:0.8s] [animation-fill-mode:backwards]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-slate-900">Consulta Gratuita</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Oferecemos uma primeira consulta gratuita de 30 minutos para avaliar seu caso e apresentar as
                    melhores opções jurídicas disponíveis.
                  </p>
                  <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl">
                    Agendar Consulta Gratuita
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
