"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, GraduationCap, Award, Users, Target, CheckCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import Footer from "@/components/footer"
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'

export default function EquipePage() {
  const team = [
    {
      name: "Brian Curts de Souza Theodoro",
      role: "Sócio Fundador",
      specialties: ["Direito Empresarial", "Direito Trabalhista"],
      education: [
        "Graduação em Direito - UNIPLAC",
        "Pós-graduação em Direito Empresarial",
        "Especialização em Direito Trabalhista",
        "MBA em Gestão Empresarial",
      ],
      experience:
        "Mais de 15 anos de experiência em consultoria jurídica empresarial e trabalhista. Atua principalmente na assessoria a empresas de médio e grande porte, com foco em compliance e gestão de riscos.",
      achievements: [
        "Reconhecido pela OAB/SC como advogado destaque",
        "Palestrante em congressos nacionais de direito empresarial",
        "Autor de artigos especializados em compliance",
      ],
      email: "brian@theodoromelo.adv.br",
      imageUrl: "/images/theodoro.webp ",
      delay: 0,
    },
    {
      name: "Vitor Hugo de Melo",
      role: "Sócio Fundador",
      specialties: ["Direito Previdenciário", "Direito Familiar", "Direito Sucessório"],
      education: [
        "Graduação em Direito - UNIPLAC",
        "Especialização em Direito Previdenciário",
        "Pós-graduação em Direito de Família",
        "Curso de Mediação e Arbitragem",
      ],
      experience:
        "Especialista reconhecido em Direito Previdenciário, com centenas de casos exitosos. Atua também em questões familiares complexas e planejamento sucessório para famílias e empresários.",
      achievements: [
        "Mais de 90% de êxito em casos previdenciários",
        "Mediador certificado pelo CNJ",
        "Especialista em planejamento sucessório",
      ],
      email: "vitor@theodoromelo.adv.br",
      imageUrl: "/images/melo.webp",
      delay: 0.3,
    },
  ]

  const associates = [
    {
      name: "Danielle Costa Pereira",
      role: "Advogada e Consultora Jurídica",
      specialties: ["Direito do Trabalho", "Mediação e Arbitragem"],
      education: "Graduada em Direito pela Universidade do Planalto Catarinense",
      experience: "Advogada com expertise em consultoria trabalhista para empresas, focada na prevenção e gestão de passivos. Atua também como professora universitária.",
      achievements: [
        "Pós-graduada em Direito e Processo do Trabalho",
        "Especialista em mediação e arbitragem"
      ],
      delay: 0.4,
      imageUrl: "/images/daniele.webp",
    },
    {
      name: "Alessandra Aparecida Bittencourt",
      role: "Advogada Associada",
      specialties: ["Direito Civil", "Direito do Trabalho"],
      education: "Bacharela em Direito pela Universidade do Planalto Catarinense",
      experience:
        "Especialista em Direito Civil e Trabalhista, com vasta experiência em consultoria jurídica e acompanhamento processual completo.",
      achievements: ["Pós-graduada em Direito Civil", "Experiência em grandes escritórios"],
      delay: 0.6,
      imageUrl: "/images/alessandra.webp",
    },
    {
      name: "Nicolas Rodrigues Ronsoni",
      role: "Auxiliar Jurídico",
      specialties: ["Direito Civil", "Pesquisa Jurídica"],
      education: "Bacharel em Direito pela Universidade do Planalto Catarinense",
      experience:
        "Bacharel em Direito com foco em pesquisa jurídica e suporte processual, oferecendo apoio técnico especializado.",
      achievements: ["Pós-graduando em Direito Civil", "Especialista em pesquisa jurídica"],
      delay: 0.8,
      imageUrl: "/images/nicolas.webp",
    },
    {
      name: "Vanessa Concer",
      role: "Secretária",
      specialties: ["Gestão Administrativa"],
      education: "Formada em Jornalismo pela UNIPLAC/VEST em 2005",
      experience:
        "Profissional com formação em Jornalismo, responsável pela gestão administrativa e atendimento personalizado aos clientes.",
      achievements: ["Formada em Jornalismo", "Especialista em atendimento ao cliente"],
      delay: 1.0,
      imageUrl: "/images/concer.webp",
    },
  ]

  // Configuração do Flickity
  const flickityOptions = {
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: true,
    groupCells: 2,
    autoPlay: 5000,
    wrapAround: true,
    draggable: true,
  }

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
            <h1 className="text-4xl lg:text-6xl font-motiva font-bold text-white mb-6 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
              Nossa <span className="text-slate-300">Equipe</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-8 animate-fade-in [animation-delay:0.3s] [animation-fill-mode:backwards]"></div>
            <p className="text-xl text-white/80 leading-relaxed animate-fade-in [animation-delay:0.4s] [animation-fill-mode:backwards]">
              Profissionais experientes e comprometidos com a excelência no atendimento e na busca pelos melhores
              resultados
            </p>
          </div>
        </div>
      </section>

      {/* Sócios */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              Liderança
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Sócios <span className="text-slate-600">Fundadores</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Liderança experiente e visão estratégica para oferecer as melhores soluções jurídicas
            </p>
          </div>
          <div className="grid gap-24 max-w-8xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-fade-in group overflow-hidden"
                style={{ animationDelay: `${member.delay}s` }}
              >
                <CardContent className="p-12">
                  <div className="grid lg:grid-cols-5 h-full">
                    <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 py-12 px-8 flex flex-col items-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10 bg-grid-white/[0.2] bg-[length:15px_15px]"></div>
                      <div className="w-56 h-56 mb-6 relative overflow-hidden flex items-center justify-center bg-slate-900 rounded-3xl group-hover/card:scale-105 transition-transform duration-500 shadow-2xl">
                        <Image
                          src={member.imageUrl}
                          alt={`Foto de ${member.name}`}
                          fill
                          style={{
                            objectFit: "cover",
                            objectPosition: "top center", // Foca mais no topo para evitar cortes no rosto
                          }}
                          className="rounded-3xl"
                          priority={index < 2}
                        />
                      </div>
                      <h3 className="text-2xl font-motiva font-bold text-white mb-2 text-center">{member.name}</h3>
                      <p className="text-slate-300 font-medium mb-6 text-center">{member.role}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300
                                       bg-white/10 hover:bg-white/20 text-white/90 hover:text-white"
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button
                          className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300
                                       bg-white/10 hover:bg-white/20 text-white/90 hover:text-white"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="lg:col-span-3 p-10 flex flex-col">
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-slate-600" />
                          Experiência Profissional
                        </h4>
                        <p className="text-slate-600 leading-relaxed mb-6">{member.experience}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <GraduationCap className="w-5 h-5 text-slate-600" />
                              Formação Acadêmica
                            </h5>
                            <ul className="space-y-2">
                              {member.education.map((edu, eduIndex) => (
                                <li key={eduIndex} className="flex items-start gap-2 text-slate-600">
                                  <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{edu}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                              <Star className="w-5 h-5 text-slate-600" />
                              Principais Conquistas
                            </h5>
                            <ul className="space-y-2">
                              {member.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                                  <CheckCircle className="w-4 h-4 text-slate-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          className="bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
                        >
                          <Link href="/contato" className="flex items-center justify-center gap-2">
                            Agendar Consulta
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 px-6 py-3 rounded-xl"
                        >
                          <Link href={`mailto:${member.email}`}>Enviar E-mail</Link>
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

      {/* Equipe de Apoio */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate/[0.02] bg-[length:30px_30px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Equipe Especializada
            </div>
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Nossa <span className="text-slate-600">Equipe</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Profissionais qualificados que complementam nossa equipe com expertise especializada
            </p>
          </div>
          {/* Carrossel horizontal para os cards */}
          <div className="relative max-w-7xl mx-auto">
            <Flickity
              className={'carousel !pb-12'} // default ''
              elementType={'div'} // default 'div'
              options={flickityOptions}
              disableImagesLoaded={false} // default false
              reloadOnUpdate
              static
            >
              {associates.map((associate, index) => (
                <div className="carousel-cell w-full md:w-1/2 px-2" key={index}>
                  <Card
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up group overflow-visible h-full"
                    style={{ animationDelay: `${associate.delay}s` }}
                  >
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-center mb-6">
                        <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden flex items-center justify-center bg-slate-200 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Image
                            src={associate.imageUrl || "/images/placeholder-avatar.png"}
                            alt={`Foto de ${associate.name}`}
                            fill
                            style={{
                              objectFit: "cover",
                              objectPosition: "top center",
                            }}
                            className="rounded-2xl"
                          />
                        </div>
                        <h3 className="text-xl font-motiva font-bold text-slate-900 mb-2">{associate.name}</h3>
                        <p className="text-slate-600 font-medium mb-4">{associate.role}</p>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-slate-600" />
                            Especialidades
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {associate.specialties.map((specialty, specIndex) => (
                              <span
                                key={specIndex}
                                className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-slate-600" />
                            Formação
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{associate.education}</p>
                        </div>
                        <div className="mb-6 flex-grow">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-slate-600" />
                            Experiência
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">{associate.experience}</p>
                          <ul className="space-y-1">
                            {associate.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                                <CheckCircle className="w-3 h-3 text-slate-600 mt-1 flex-shrink-0" />
                                <span className="text-xs">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-auto pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300"
                        >
                          <Link href="/contato" className="flex items-center justify-center gap-2">
                            Entrar em Contato
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Flickity>
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
            <h2 className="text-3xl lg:text-5xl font-motiva font-bold text-slate-900 mb-4">
              Nossa Equipe <span className="text-slate-600">Unida</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-500 to-slate-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Juntos, combinamos expertise e paixão para alcançar os melhores resultados para você.
            </p>
          </div>

          {/* Wrapper para o card da imagem e elementos de canto */}
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40 z-10"></div>
                <Image
                  src="/images/unidos.webp"
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

      <style jsx global>{`
        /* Flickity custom pagination style */
        .flickity-page-dots .dot {
          background: rgb(71 85 105);
          opacity: 0.3;
        }
        .flickity-page-dots .dot.is-selected {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}