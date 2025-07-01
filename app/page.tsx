"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card" // Adicionado Card e CardContent
import {
  Facebook,
  Instagram,
  MessageCircle,
  Building2,
  Users,
  Shield,
  Heart,
  FileText,
  ShoppingCart,
  ArrowRight,
  Award,
  Target,
  BarChart3, // Adicionado BarChart3
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Scale, // Adicionado Scale
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppLeadCapture from "@/components/WhatsAppLeadCapture"
import Image from "next/image"
import { useState, useRef } from "react"

export default function HomePage() {
  const processSteps = [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Análise completa da situação financeira e jurídica da empresa",
      icon: BarChart3,
    },
    {
      step: "02",
      title: "Estratégia",
      description: "Desenvolvimento de plano personalizado de recuperação ou liquidação",
      icon: Target,
    },
    {
      step: "03",
      title: "Execução",
      description: "Implementação das medidas necessárias com acompanhamento rigoroso",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Monitoramento",
      description: "Acompanhamento contínuo e ajustes estratégicos conforme necessário",
      icon: TrendingUp,
    },
  ]
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="max-w-4xl lg:max-w-5xl w-full mx-auto flex flex-col items-center justify-center h-full">
            {/* Logo Principal */}
            <div className="mb-8 animate-fade-in flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src="/images/Logotipo_7-removebg-preview.png"
                  alt="Theodoro Melo Andrade Costa Logo"
                  width={300}
                  height={100}
                  className="mx-auto transition-transform duration-300 hover:scale-105 filter brightness-0 invert"
                  priority
                />
              </div>
              <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-2 tracking-normal lg:tracking-tight lg:whitespace-nowrap">
                THEODORO MELO ANDRADE COSTA
              </h1>
              <p className="text-xl lg:text-2xl text-white/80 font-light tracking-widest">ADVOGADOS ASSOCIADOS</p>
            </div>

            {/* CTA Button */}
            <div className="mb-12 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards] flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-slate-800 transition-all duration-300 px-8 py-3 text-lg"
              >
                <Link href="/contato">Entre em Contato</Link>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
              <Link
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-grid-slate/[0.02] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagem do Escritório */}
            <div className="animate-fade-in">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40 z-10"></div>
                  <Image
                    src="/images/tm358.webp"
                    alt="Escritório Theodoro & Melo Advogados"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg z-20">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-medium text-slate-800">15 Anos</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl opacity-10 transform rotate-12"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl opacity-10 transform -rotate-12"></div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="animate-fade-in [animation-delay:0.1s]">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Sobre Nós
                </div>
                <h2 className="text-4xl lg:text-5xl font-motiva font-bold text-slate-800 mb-6 leading-tight">
                  Quem <span className="text-[#f1af09]">somos</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#f1af09] to-[#f1af09]/60 mb-8"></div>
              </div>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-slate-500 rounded-full"></span>
                  Há <strong className="text-slate-800">15 anos</strong> defendemos e representamos pessoas e empresas
                  no âmbito judicial e extrajudicial em questões relacionadas ao direito empresarial, trabalhista,
                  previdenciário, familiar, sucessório e consumerista.
                </p>
                <p className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-slate-500 rounded-full"></span>A{" "}
                  <strong className="text-slate-800">Theodoro & Melo Advogados Associados</strong> atua em todo o Brasil
                  tendo como sócios os advogados Brian Curts de Souza Theodoro e Vitor Hugo de Melo, profissionais com
                  vasta experiência e reconhecimento no mercado jurídico.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: CheckCircle, label: "Excelência", value: "Técnica" },
                  { icon: Users, label: "Atendimento", value: "Personalizado" },
                  { icon: Shield, label: "Ética", value: "Profissional" },
                ].map((point, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f1af09] to-[#f1af09]/80 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-slate-800">{point.label}</div>
                    <div className="text-xs text-slate-600">{point.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#0b3a48] hover:bg-[#1a4a60] text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
                >
                  <Link href="/sobre" className="flex items-center gap-2">
                    Nossa História Completa
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 px-6 py-3 rounded-xl"
                >
                  <Link href="/equipe">Conheça a Equipe</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher nossa assessoria jurídica? */}
      <section className="py-16 lg:py-24 bg-[#FCFDFE] text-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start"> {/* Changed from items-center */}
            {/* FAQ Section */}
            <div className="space-y-8 min-h-[600px] relative z-20"> {/* Added z-20 */}
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#09303B]">Por que escolher nossa <span className="text-[#f1af09]">assessoria jurídica</span>?</h2>
                <p className="text-[#09303B]/80 leading-relaxed">
                  Oferecemos soluções jurídicas personalizadas com mais de 15 anos de experiência, sempre focando na excelência e nos resultados para nossos clientes.
                </p>
              </div>

              <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#09303B]/10 scrollbar-track-transparent">
                <details className="group border border-[#09303B]/20 rounded-lg bg-white/80 [&[open]~div.center-image]:order-1"> {/* Added order class */}
                  <summary className="flex items-center justify-between p-4 cursor-pointer text-[#09303B] hover:bg-[#09303B]/5 transition-all">
                    <span className="font-medium">Atendimento Personalizado</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xl group-open:rotate-45 transition-all duration-300 text-[#09303B]">+</span>
                    </div>
                  </summary>
                  <div className="overflow-hidden">
                    <div className="text-[#09303B]/80 p-4 transform-gpu transition-all duration-300 ease-in-out origin-top">
                      Cada cliente é único e merece uma estratégia jurídica desenvolvida especificamente para suas necessidades e objetivos.
                    </div>
                  </div>
                </details>

                <details className="group border border-[#09303B]/20 rounded-lg bg-white/80">
                  <summary className="flex items-center justify-between p-4 cursor-pointer text-[#09303B] hover:bg-[#09303B]/5 transition-colors">
                    <span className="font-medium">Experiência Comprovada</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xl group-open:rotate-45 transition-transform text-[#09303B]">+</span>
                    </div>
                  </summary>
                  <div className="p-4 pt-0 text-[#09303B]/80">
                    Há 15 anos de atuação no mercado jurídico, com centenas de casos resolvidos com sucesso em diversas áreas do direito.
                  </div>
                </details>

                <details className="group border border-[#09303B]/20 rounded-lg bg-white/80">
                  <summary className="flex items-center justify-between p-4 cursor-pointer text-[#09303B] hover:bg-[#09303B]/5 transition-colors">
                    <span className="font-medium">Transparência Total</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xl group-open:rotate-45 transition-transform text-[#09303B]">+</span>
                    </div>
                  </summary>
                  <div className="p-4 pt-0 text-[#09303B]/80">
                    Comunicação clara sobre custos, prazos e expectativas, mantendo você informado em cada etapa do processo.
                  </div>
                </details>

                <details className="group border border-[#09303B]/20 rounded-lg bg-white/80">
                  <summary className="flex items-center justify-between p-4 cursor-pointer text-[#09303B] hover:bg-[#09303B]/5 transition-colors">
                    <span className="font-medium">Ética Profissional</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-xl group-open:rotate-45 transition-transform text-[#09303B]">+</span>
                    </div>
                  </summary>
                  <div className="p-4 pt-0 text-[#09303B]/80">
                    Atuação sempre pautada nos mais altos padrões éticos da advocacia, garantindo credibilidade e confiança.
                  </div>
                </details>
              </div>
            </div>

            {/* Center Image */}
            <div className="relative -mt-20 lg:mt-0 center-image"> {/* Added center-image class */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/jus.webp"
                  alt="Tribunal - Justiça"
                  width={600}
                  height={750}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>

            {/* Testimonial and CTA Section */}
            <div className="space-y-8">

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#09303B]/5 to-[#09303B]/10 rounded-xl p-6 border border-[#09303B]/20">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#09303B]">Precisa de assessoria jurídica?</h3>
                  <p className="text-[#09303B]/80">
                    Agende uma consulta e descubra como podemos ajudar a resolver seus desafios jurídicos com excelência e eficiência.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1 bg-[#09303B] hover:bg-[#09303B]/90 text-white font-medium">
                      <Link href="/contato" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Agendar Consulta
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-[#09303B]/20 text-[#09303B] hover:bg-[#09303B]/5">
                      <Link href="/contato" className="flex items-center justify-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Saiba Mais
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#09303B]/5 rounded-lg p-4 text-center border border-[#09303B]/10">
                  <div className="text-2xl font-bold text-[#09303B]">500+</div>
                  <div className="text-[#09303B]/70 text-sm">Clientes Atendidos</div>
                </div>
                <div className="bg-[#09303B]/5 rounded-lg p-4 text-center border border-[#09303B]/10">
                  <div className="text-2xl font-bold text-[#09303B]">15+</div>
                  <div className="text-[#09303B]/70 text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section className="py-12 relative overflow-hidden bg-[#FCFDFE]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#09303B]/5 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2cfa0]/5 rounded-full filter blur-3xl opacity-30"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate/[0.03] bg-[length:20px_20px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-motiva font-bold text-[#09303B] mb-6 leading-tight">Áreas de <span className="text-[#f1af09]">Atuação</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f1af09] to-[#f1af09]/60 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/direito-empresarial.webp",
                title: "Direito Empresarial",
                description:
                  "Consultoria completa para empresas, desde a constituição até questões contratuais complexas e planejamento societário.",
                color: "from-slate-700 to-slate-800",
              },
              {
                image: "/images/recuperacao.webp",
                title: "Recuperação Judicial",
                description:
                  "Especialização em processos de recuperação judicial e extrajudicial para empresas em dificuldades financeiras.",
                color: "from-slate-700 to-slate-800",
              },
              {
                image: "/images/familia.webp",
                title: "Direito de Família",
                description:
                  "Acompanhamento sensível e eficaz em questões familiares delicadas, com abordagem humanizada.",
                color: "from-slate-700 to-slate-800",
              },
              {
                image: "/images/inventario.webp",
                title: "Inventários",
                description:
                  "Condução especializada de processos de inventário e questões sucessórias, protegendo o patrimônio familiar.",
                color: "from-slate-700 to-slate-800",
              },
              {
                image: "/images/contrato.webp",
                title: "Contratos",
                description:
                  "Elaboração, análise e negociação de contratos diversos, garantindo segurança jurídica e proteção dos interesses.",
                color: "from-slate-700 to-slate-800",
              },
              {
                image: "/images/indenizacao.webp",
                title: "Demandas Indenizatórias",
                description:
                  "Representação especializada em ações indenizatórias, buscando a reparação justa por danos morais e materiais.",
                color: "from-slate-700 to-slate-800",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="group relative animate-fade-in transition-transform duration-300"
              >
                {/* Card Background with Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"></div>

                {/* Colored Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-[1px]">
                  <div className="absolute inset-0 bg-white rounded-xl"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col rounded-xl overflow-hidden bg-white transition-transform duration-300 group-hover:scale-[1.03]">
                  {/* Imagem no topo do card, parte real do card */}
                  <div className="w-full" style={{ height: '10rem', position: 'relative' }}>
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        borderTopLeftRadius: '0.75rem',
                        borderTopRightRadius: '0.75rem',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                  </div>
                  {/* Conteúdo do card com padding reduzido */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-medium text-slate-800 mb-2 group-hover:text-slate-900">{area.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{area.description}</p>
                    {/* Learn More Link */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href={`/areas-de-atuacao#${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        Saiba mais
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#0b3a48] hover:bg-[#1a4a60] text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
            >
              <Link href="/areas-de-atuacao" className="flex items-center gap-2">
                Ver Todas as Áreas <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nossa Trajetória */}
      <section className="py-12 relative overflow-hidden bg-[#0b3a48] text-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 bg-grid-slate/[0.03] bg-[length:20px_20px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-motiva font-bold mb-6 leading-tight">Nossa <span className="text-[#f1af09]">Trajetória</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f1af09] to-white/60 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16">
            {[
              { icon: Award, value: "15+", label: "Anos de Experiência" },
              { icon: Users, value: "500+", label: "Clientes Atendidos" },
              { icon: Scale, value: "10+", label: "Áreas de Atuação" },
              { icon: Target, value: "100%", label: "Dedicação" },
            ].map((stat, index) => (
              <div key={index} className="text-center flex"> {/* Adicionado flex para garantir altura igual se necessário */}
                <div className="relative group w-full h-full">
                  {/* Removed hover effect div */}
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 md:p-8 h-full flex flex-col justify-center"> {/* Removed transform and hover effects */}
                    <div className="mb-4">
                      <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-slate-100 mx-auto" />
                    </div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight bg-gradient-to-r from-[#f1af09] to-white bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm sm:text-base md:text-lg font-light tracking-wide">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Como Trabalhamos */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate/[0.02] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Nossa Metodologia
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Como <span className="text-[#f1af09]">Trabalhamos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#f1af09] to-[#f1af09]/60 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Nossa metodologia estruturada garante o melhor resultado para cada situação específica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in group text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f1af09] to-[#f1af09]/80 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                  <div className="mb-4">
                    <item.icon className="w-8 h-8 text-[#f1af09] mx-auto group-hover:text-[#f1af09]/80 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-motiva font-semibold text-slate-900 mb-3">
                    <span className="text-[#f1af09]">{item.title}</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#09303B] hover:bg-[#09303B]/90 text-white transition-all duration-300 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl group"
            >
              <Link href="/contato" className="flex items-center gap-3 text-lg">
                Inicie sua Consultoria Agora
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppLeadCapture />
    </div>
  )
}