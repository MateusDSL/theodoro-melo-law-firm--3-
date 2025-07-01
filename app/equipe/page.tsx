"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, GraduationCap, Award, Users, Target, CheckCircle, ArrowRight, Star, BookOpen, Building2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import Footer from "@/components/footer"

export default function EquipePage() {
  const allTeamMembers = [
    {
      name: "Brian Curts de Souza Theodoro",
      role: "Sócio Fundador",
      specialties: ["Direito Empresarial", "Direito Trabalhista"],
      education: "Graduação em Direito - UNIPLAC, Pós-graduação em Direito Empresarial",
      experience: "Mais de 15 anos de experiência em consultoria jurídica empresarial e trabalhista. Atua principalmente na assessoria a empresas de médio e grande porte.",
      achievements: [
        "Reconhecido pela OAB/SC como advogado destaque",
        "Palestrante em congressos nacionais",
      ],
      imageUrl: "/images/theodoro.webp",
      delay: 0,
    },
    {
      name: "Vitor Hugo de Melo",
      role: "Sócio Fundador",
      specialties: ["Direito Previdenciário", "Direito Familiar"],
      education: "Graduação em Direito - UNIPLAC, Especialização em Direito Previdenciário",
      experience: "Especialista reconhecido em Direito Previdenciário, com centenas de casos exitosos. Atua também em questões familiares complexas.",
      achievements: [
        "Mais de 90% de êxito em casos previdenciários",
        "Mediador certificado pelo CNJ",
      ],
      imageUrl: "/images/melo.webp",
      delay: 0.2,
    },
    {
      name: "Danielle Costa Pereira",
      role: "Advogada e Consultora Jurídica",
      specialties: ["Direito do Trabalho", "Mediação e Arbitragem"],
      education: "Graduada em Direito pela UNIPLAC, Pós-graduada em Direito do Trabalho",
      experience: "Advogada com expertise em consultoria trabalhista para empresas, focada na prevenção e gestão de passivos.",
      achievements: [
        "Especialista em mediação e arbitragem",
        "Professora universitária",
      ],
      delay: 0.4,
      imageUrl: "/images/daniele.webp",
    },
    {
      name: "Alessandra Bittencourt",
      role: "Advogada Associada",
      specialties: ["Direito Civil", "Direito do Trabalho"],
      education: "Bacharela em Direito pela UNIPLAC, Pós-graduada em Direito Civil",
      experience: "Especialista em Direito Civil e Trabalhista, com vasta experiência em consultoria jurídica e acompanhamento processual.",
      achievements: [
        "Experiência em grandes escritórios",
        "Especialista em consultoria jurídica",
      ],
      delay: 0.6,
      imageUrl: "/images/alessandra.webp",
    },
    {
      name: "Nicolas Rodrigues Ronsoni",
      role: "Auxiliar Jurídico",
      specialties: ["Direito Civil", "Pesquisa Jurídica"],
      education: "Bacharel em Direito pela UNIPLAC, Pós-graduando em Direito Civil",
      experience: "Bacharel em Direito com foco em pesquisa jurídica e suporte processual, oferecendo apoio técnico especializado.",
      achievements: [
        "Especialista em pesquisa jurídica",
        "Apoio técnico especializado",
      ],
      delay: 0.8,
      imageUrl: "/images/nicolas.webp",
    },
    {
      name: "Vanessa Concer",
      role: "Secretária",
      specialties: ["Gestão Administrativa"],
      education: "Formada em Jornalismo pela UNIPLAC/VEST em 2005",
      experience: "Profissional com formação em Jornalismo, responsável pela gestão administrativa e atendimento personalizado aos clientes.",
      achievements: [
        "Especialista em atendimento ao cliente",
        "Gestão administrativa eficiente",
      ],
      delay: 1.0,
      imageUrl: "/images/concer.webp",
    },
  ]

  const libraryImages = [
    {
      src: "/images/biblioteca-1.webp",
      alt: "Biblioteca jurídica do escritório",
      title: "Acervo Jurídico Especializado"
    },
    {
      src: "/images/biblioteca-2.webp", 
      alt: "Sala de estudos e pesquisa",
      title: "Ambiente de Pesquisa"
    },
    {
      src: "/images/biblioteca-3.webp",
      alt: "Coleção de livros jurídicos",
      title: "Literatura Jurídica Atualizada"
    },
    {
      src: "/images/biblioteca-4.webp",
      alt: "Mesa de estudos com livros",
      title: "Espaço de Análise Jurídica"
    },
    {
      src: "/images/biblioteca-5.webp",
      alt: "Estantes com códigos e manuais",
      title: "Códigos e Manuais Especializados"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b49] to-black"></div>
        <div className="absolute inset-0 opacity-20 bg-grid-white/[0.2] bg-[length:20px_20px]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Users className="w-4 h-4" />
              Nossos Profissionais
            </div>
            <h1
              className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]"
            >
              Nossa <span style={{ color: "#F1AF09" }}>Equipe</span>
            </h1>
            <div
              className="w-24 h-1 mx-auto mb-8 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:backwards]"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-xl text-white/80 leading-relaxed animate-fade-in [animation-delay:0.4s] [animation-fill-mode:backwards]">
              Profissionais experientes e comprometidos com a excelência no atendimento e na busca pelos melhores
              resultados
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Equipe Completa */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate/[0.02] bg-[length:30px_30px]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-8xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Nossa Equipe
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Profissionais <span style={{ color: "#F1AF09" }}>Especializados</span>
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ background: "#F1AF09" }}></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nossa equipe combina experiência, dedicação e expertise para oferecer as melhores soluções jurídicas
            </p>
          </div>
          
          {/* Grid 3x2 */}
          <div className="flex flex-col items-center">
            {/* Primeira linha - 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
              {allTeamMembers.slice(0, 3).map((member, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up group overflow-hidden h-full"
                  style={{ animationDelay: `${member.delay}s` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="w-56 h-56 mx-auto mb-3 relative overflow-hidden flex items-center justify-center bg-slate-200 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Image
                          src={member.imageUrl || "/images/placeholder-avatar.webp"}
                          alt={`Foto de ${member.name}`}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "top center",
                          }}
                          className="rounded-2xl"
                        />
                      </div>
                      <h3 className="text-xl font-motiva font-bold text-slate-900 mb-2">{member.name}</h3>
                      <p className="text-slate-600 font-medium mb-3 text-base">{member.role}</p>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <Target className="w-4 h-4 text-slate-600" />
                          Especialidades
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {member.specialties.map((specialty, specIndex) => (
                            <span
                              key={specIndex}
                              className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <GraduationCap className="w-4 h-4 text-slate-600" />
                          Formação
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{member.education}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <Award className="w-4 h-4 text-slate-600" />
                          Experiência
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{member.experience}</p>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle className="w-3 h-3 text-slate-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto pt-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300"
                      >
                        <Link href="/contato" className="flex items-center justify-center gap-2 text-sm">
                          Entrar em Contato
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Segunda linha - 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-8">
              {allTeamMembers.slice(3, 6).map((member, index) => (
                <Card
                  key={index + 3}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up group overflow-hidden h-full"
                  style={{ animationDelay: `${member.delay}s` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="w-56 h-56 mx-auto mb-3 relative overflow-hidden flex items-center justify-center bg-slate-200 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Image
                          src={member.imageUrl || "/images/placeholder-avatar.webp"}
                          alt={`Foto de ${member.name}`}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "top center",
                          }}
                          className="rounded-2xl"
                        />
                      </div>
                      <h3 className="text-xl font-motiva font-bold text-slate-900 mb-2">{member.name}</h3>
                      <p className="text-slate-600 font-medium mb-3 text-base">{member.role}</p>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <Target className="w-4 h-4 text-slate-600" />
                          Especialidades
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {member.specialties.map((specialty, specIndex) => (
                            <span
                              key={specIndex}
                              className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <GraduationCap className="w-4 h-4 text-slate-600" />
                          Formação
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{member.education}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-base">
                          <Award className="w-4 h-4 text-slate-600" />
                          Experiência
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{member.experience}</p>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle className="w-3 h-3 text-slate-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto pt-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300"
                      >
                        <Link href="/contato" className="flex items-center justify-center gap-2 text-sm">
                          Entrar em Contato
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Foto da Equipe Completa com CTA e Elementos de Canto */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* Mantive o estilo do selo e cabeçalho da sua versão anterior, pois não foram mencionados para alteração nesta rodada */}
            <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Nossa Força Coletiva
            </div>
            <h2
              className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4"
            >
              Nossa Equipe <span style={{ color: "#F1AF09" }}>Unida</span>
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{ background: "#F1AF09" }}
            ></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Juntos, combinamos expertise e paixão para alcançar os melhores resultados para você.
            </p>
          </div>

          {/* Wrapper para o card da imagem e elementos de canto */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40 z-10"></div>
                <Image
                  src="/images/unidos.webp" // Certifique-se que este é o caminho correto para sua imagem
                  alt="Foto da equipe completa do escritório Theodoro & Melo"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl opacity-10 transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl opacity-10 transform -rotate-12"></div>
            </div>
          </div>

          {/* Botão de CTA */}
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl text-lg font-semibold group"
            >
              <Link href="/contato" className="flex items-center justify-center gap-2">
                Agendar uma Consulta
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Fim da Seção Foto da Equipe Completa */}

      <Footer />
    </div>
  )
}