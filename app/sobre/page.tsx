"use client"


import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Shield, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SobrePage() {
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
              <Target className="w-4 h-4" />
              Nossa História
            </div>
            <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 font-cinzel">
              Sobre <span style={{ color: "#F1AF09" }}>Nós</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f1af09] to-[#f1af09]/60 mx-auto mb-8"></div>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Construindo relacionamentos sólidos e oferecendo soluções jurídicas de excelência há mais de 15 anos
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Clock className="w-4 h-4" />
                    Nossa Trajetória
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-motiva font-bold text-slate-900 mb-6 leading-tight font-cinzel">
                    Tradição e Inovação <span style={{ color: "#F1AF09" }}>Jurídica</span>
                  </h2>
                  <div
                    className="w-16 h-1 mb-8"
                    style={{ background: "#F1AF09" }}
                  ></div>
                </div>

                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-slate-500 rounded-full"></span>O escritório{" "}
                    <strong className="text-slate-800">Theodoro & Melo Advogados Associados</strong> foi fundado com o
                    propósito de oferecer assessoria jurídica de alta qualidade, combinando tradição e inovação no
                    atendimento aos nossos clientes.
                  </p>
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-slate-500 rounded-full"></span>
                    Com sede em <strong className="text-slate-800">Lages/SC</strong> e atuação nacional, construímos
                    nossa reputação baseada na excelência técnica, ética profissional e compromisso com resultados
                    efetivos para nossos clientes.
                  </p>
                  <p className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2 h-2 bg-slate-500 rounded-full"></span>
                    Ao longo desses <strong className="text-slate-800">15 anos</strong> de história, expandimos nossas
                    áreas de atuação e consolidamos nossa posição como referência no mercado jurídico, sempre mantendo o
                    compromisso com a qualidade e a personalização do atendimento.
                  </p>
                </div>

                <div className="mt-10">
                  <Button
                    asChild
                    className="bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
                  >
                    <Link href="/equipe" className="flex items-center gap-2">
                      Conheça Nossa Equipe
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-xl relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl opacity-10 transform rotate-12"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl opacity-10 transform -rotate-12"></div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    {[
                      { value: "15", label: "Anos de Experiência", delay: 0.2, color: "slate" },
                      { value: "500+", label: "Clientes Atendidos", delay: 0.4, color: "slate" },
                      { value: "6", label: "Áreas de Atuação", delay: 0.6, color: "slate" },
                      { value: "100%", label: "Dedicação", delay: 0.8, color: "slate" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105"
                      >
                        <div
                          className={`text-3xl font-bold mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent animate-pulse-subtle`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>
        <div className="absolute inset-0 bg-grid-slate/[0.02] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Nossos Princípios
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4 font-cinzel">
              Valores que <span style={{ color: "#F1AF09" }}>Nos Definem</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-8"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Os princípios que norteiam nossa atuação e definem nossa identidade profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Missão",
                description:
                  "Oferecer soluções jurídicas eficazes e personalizadas, protegendo os direitos e interesses de nossos clientes com excelência e dedicação.",
                color: "from-slate-700 to-slate-800",
                delay: 0,
              },
              {
                icon: Eye,
                title: "Visão",
                description:
                  "Ser reconhecido como referência em excelência jurídica e atendimento humanizado, expandindo nossa atuação e mantendo os mais altos padrões de qualidade.",
                color: "from-slate-700 to-slate-800",
                delay: 0.2,
              },
              {
                icon: Heart,
                title: "Valores",
                description:
                  "Ética, transparência, compromisso, excelência técnica e respeito às pessoas são os pilares que sustentam todas as nossas ações e decisões.",
                color: "from-slate-700 to-slate-800",
                delay: 0.4,
              },
              {
                icon: Shield,
                title: "Compromisso",
                description:
                  "Dedicação integral aos interesses de nossos clientes e busca constante por resultados, com responsabilidade social e ética profissional.",
                color: "from-slate-700 to-slate-800",
                delay: 0.6,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-8 text-center relative">
                  {/* Gradient Background */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform transition-all duration-500 group-hover:h-full opacity-100 group-hover:opacity-5`}
                  ></div>

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-motiva font-semibold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10">{item.description}</p>
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
