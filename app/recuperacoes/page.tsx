import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  TrendingUp,
  Shield,
  FileText,
  Users,
  CheckCircle,
  Target,
  Award,
  ArrowRight,
  BarChart3,
  Scale,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RecuperacoesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Recuperação Judicial",
      description:
        "Planejamento e execução estratégica de processos de recuperação judicial para empresas viáveis com potencial de reestruturação.",
      features: [
        "Análise de viabilidade econômica",
        "Elaboração de plano de recuperação",
        "Negociação com credores",
        "Acompanhamento processual completo",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0,
    },
    {
      icon: FileText,
      title: "Recuperação Extrajudicial",
      description:
        "Negociação direta e estratégica com credores para reestruturação de dívidas sem necessidade de processo judicial.",
      features: [
        "Acordo extrajudicial homologado",
        "Redução de custos processuais",
        "Maior agilidade na solução",
        "Preservação da imagem empresarial",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.2,
    },
    {
      icon: Building2,
      title: "Processos Falimentares",
      description:
        "Assessoria especializada em processos falimentares e liquidação ordenada de empresas quando necessário.",
      features: [
        "Liquidação ordenada de ativos",
        "Proteção dos direitos dos credores",
        "Minimização de perdas",
        "Cumprimento das obrigações legais",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.4,
    },
    {
      icon: Shield,
      title: "Prevenção de Crises",
      description:
        "Consultoria preventiva especializada para identificar e evitar situações de insolvência empresarial.",
      features: [
        "Diagnóstico financeiro preventivo",
        "Implementação de controles",
        "Planejamento estratégico",
        "Monitoramento contínuo",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.6,
    },
    {
      icon: Users,
      title: "Assessoria a Credores",
      description:
        "Representação especializada de credores em processos de recuperação e falência para maximizar recuperação de créditos.",
      features: [
        "Habilitação de créditos",
        "Impugnação de planos inadequados",
        "Fiscalização do devedor",
        "Maximização da recuperação",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.8,
    },
    {
      icon: Scale,
      title: "Compliance Empresarial",
      description:
        "Implementação de práticas de governança e compliance empresarial para prevenção de crises e fortalecimento institucional.",
      features: [
        "Auditoria de compliance",
        "Implementação de políticas",
        "Treinamento de equipes",
        "Monitoramento contínuo",
      ],
      color: "bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 1.0,
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Building2 className="w-4 h-4" />
              Especialização Empresarial
            </div>
            <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
              Recuperações e <span style={{ color: "#F1AF09" }}>Falências</span>
            </h1>
            <div
              className="w-24 h-1 mx-auto mb-8 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:backwards]"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-xl text-white/80 leading-relaxed animate-fade-in [animation-delay:0.4s] [animation-fill-mode:backwards]">
              Especialistas em recuperação judicial, extrajudicial e processos falimentares com soluções estratégicas
              para empresas em dificuldades financeiras
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Nossos Serviços
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Soluções <span style={{ color: "#F1AF09" }}>Especializadas</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Oferecemos assessoria completa em processos de recuperação e falência com abordagem estratégica e
              personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in [animation-fill-mode:backwards] group overflow-hidden"
                style={{ animationDelay: `${service.delay}s` }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Gradient Background */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color} transform transition-all duration-500 group-hover:h-full opacity-100 group-hover:opacity-5`}
                  ></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                      style={{ background: "#F1AF09" }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-motiva font-semibold text-slate-900 mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 relative z-10">{service.description}</p>

                  <div className="relative z-10">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" style={{ color: "#F1AF09" }} />
                      Principais Características
                    </h4>
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-slate-600 text-sm">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
