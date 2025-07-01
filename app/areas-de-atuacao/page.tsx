import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Shield,
  Heart,
  FileText,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AreasAtuacaoPage() {
  const areas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Assessoria jurídica completa para empresas, desde a constituição até questões contratuais complexas e planejamento societário estratégico.",
      services: [
        "Constituição e alteração de empresas",
        "Contratos empresariais complexos",
        "Fusões e aquisições",
        "Compliance empresarial",
        "Planejamento tributário",
        "Governança corporativa",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0,
    },
    {
      icon: TrendingUp,
      title: "Recuperação Judicial",
      description:
        "Especialização em processos de recuperação judicial e extrajudicial, oferecendo soluções estratégicas para empresas em dificuldades financeiras.",
      services: [
        "Recuperação judicial",
        "Recuperação extrajudicial",
        "Negociação com credores",
        "Planos de recuperação",
        "Assessoria a credores",
        "Prevenção de crises",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.2,
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description:
        "Acompanhamento sensível e eficaz em questões familiares delicadas, com abordagem humanizada e personalizada.",
      services: [
        "Divórcio e separação consensual",
        "Guarda compartilhada de filhos",
        "Pensão alimentícia",
        "União estável",
        "Adoção nacional e internacional",
        "Mediação familiar",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.4,
    },
    {
      icon: FileText,
      title: "Inventários",
      description:
        "Condução especializada de processos de inventário e questões sucessórias, protegendo o patrimônio familiar com eficiência.",
      services: [
        "Inventários judiciais e extrajudiciais",
        "Partilha de bens",
        "Testamentos e codicilos",
        "Planejamento sucessório",
        "Doações estratégicas",
        "Holding familiar",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.6,
    },
    {
      icon: FileText,
      title: "Contratos",
      description:
        "Elaboração, análise e negociação de contratos diversos, garantindo segurança jurídica e proteção dos interesses dos clientes.",
      services: [
        "Contratos empresariais",
        "Contratos imobiliários",
        "Contratos de prestação de serviços",
        "Revisão e análise contratual",
        "Negociação de termos",
        "Resolução de conflitos contratuais",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 0.8,
    },
    {
      icon: Shield,
      title: "Demandas Indenizatórias",
      description:
        "Representação especializada em ações indenizatórias, buscando a reparação justa por danos morais e materiais.",
      services: [
        "Danos morais e materiais",
        "Responsabilidade civil",
        "Acidentes de trânsito",
        "Erro médico",
        "Danos estéticos",
        "Indenizações trabalhistas",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 1.0,
    },
    {
      icon: Building2,
      title: "Posse e Propriedade de Imóveis",
      description:
        "Assessoria completa em questões imobiliárias, desde aquisições até resolução de conflitos de posse e propriedade.",
      services: [
        "Ações possessórias",
        "Usucapião",
        "Regularização fundiária",
        "Compra e venda de imóveis",
        "Registro de imóveis",
        "Conflitos de vizinhança",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 1.2,
    },
    {
      icon: ShoppingCart,
      title: "Relações de Consumo",
      description:
        "Proteção integral dos direitos do consumidor em relações de consumo, com foco na reparação efetiva de danos e defesa de direitos.",
      services: [
        "Defesa do consumidor",
        "Indenizações por danos morais",
        "Contratos de consumo",
        "Recall de produtos",
        "Superendividamento",
        "Ações coletivas",
      ],
      color: "absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black",
      delay: 1.4,
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 text-white/90" />
              Nossas Especialidades
            </div>
            <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 font-cinzel">
              Áreas de <span className="text-[#f1af09]">Atuação</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f1af09] to-[#f1af09]/60 mx-auto mb-8"></div>
            <p className="text-xl text-white/80 leading-relaxed">
              Oferecemos assessoria jurídica especializada em diversas áreas do direito, sempre com foco na excelência e
              nos resultados efetivos para nossos clientes
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-16 max-w-7xl mx-auto">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-5 h-full">
                    {/* Icon Section */}
                    <div
                      className={`lg:col-span-2 bg-gradient-to-br ${area.color} p-10 flex flex-col items-center justify-center relative overflow-hidden`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2] bg-[length:15px_15px]"></div>

                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                          <area.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-motiva font-bold text-white mb-4 text-center">
                        {area.title.split(" ").map((word, i) =>
                          i === area.title.split(" ").length - 1 ? (
                            <span key={i} className="text-[#f1af09]">{word}</span>
                          ) : (
                            word + " "
                          )
                        )}
                      </h2>
                      <p className="text-white/90 text-center leading-relaxed">{area.description}</p>
                    </div>
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-10 flex flex-col">
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                          <Award className="w-5 h-5 text-[#f1af09]" />
                          <span className="text-[#f1af09]">Principais Serviços</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {area.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-start gap-3 group/item">
                              <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0 group-hover:item:scale-110 transition-transform duration-300" />
                              <span className="text-slate-600 group-hover:item:text-slate-800 transition-colors duration-300">
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          className="bg-[#0b3a48] hover:bg-[#1a4a60] text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
                        >
                          <Link href="/contato" className="flex items-center justify-center gap-2">
                            Consultar Especialista
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 px-6 py-3 rounded-xl"
                        >
                          <Link href="/equipe">Conhecer a Equipe</Link>
                        </Button>
                      </div>
                    </div>
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