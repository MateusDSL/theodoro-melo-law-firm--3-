"use client"

import { Button } from "@/components/ui/button" // Assuming this path is correct
import { Building2, Heart, FileText, ShoppingCart, ArrowRight, ArrowLeft, TrendingUp } from "lucide-react" // Removed FileSignature as it wasn't used
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

const AreasDeAtuacaoCarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      dragFree: true, // Enables "flick" scrolling
      containScroll: "trimSnaps", // Good for preventing overscroll
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onInit()
    onSelect()
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      emblaApi.off("reInit", onInit)
      emblaApi.off("reInit", onSelect)
      emblaApi.off("select", onSelect)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [emblaApi, onInit, onSelect, scrollPrev, scrollNext])

  const areas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description:
        "Assessoria completa para empresas, da constituição ao planejamento societário e contratos complexos.",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: TrendingUp,
      title: "Recuperação Judicial",
      description:
        "Expertise em recuperação judicial e extrajudicial, auxiliando empresas a superarem crises financeiras.",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description:
        "Atuação sensível e eficaz em divórcios, guarda, pensão alimentícia e outras questões familiares.",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: FileText, // Assuming this is for Inventários
      title: "Inventários",
      description:
        "Conduzimos processos de inventário e partilha de bens com agilidade e segurança, protegendo o patrimônio familiar.",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: FileText, // Assuming this is for Contratos
      title: "Contratos",
      description:
        "Elaboramos, analisamos e negociamos contratos diversos, garantindo segurança jurídica e a proteção dos seus interesses.",
      color: "from-slate-700 to-slate-800",
    },
    {
      icon: ShoppingCart,
      title: "Relações de Consumo",
      description:
        "Defesa dos direitos do consumidor em litígios e negociações, buscando a reparação efetiva de danos.",
      color: "from-slate-700 to-slate-800",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-slate-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-slate-200 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate/[0.03] bg-[length:20px_20px]"></div>

      {/* Container principal da seção com padding consistente */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-motiva font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            Áreas de Atuação
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-md sm:text-lg lg:text-xl text-slate-600 max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            Oferecemos assessoria jurídica especializada em diversas áreas do direito, sempre com foco na excelência e nos resultados
          </p>
        </div>

        {/* Wrapper do carrossel */}
        <div className="relative group/carousel sm:-mx-4">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2"
                  // Adjusted sm flex-basis slightly for better view on smaller tablets
                >
                  <div className="group/card relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-xl shadow-lg transform transition-all duration-300 group-hover/card:scale-[1.02] group-hover/card:shadow-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl p-[1px]">
                      <div className="absolute inset-0 bg-white rounded-xl"></div>
                    </div>
                    <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col"> {/* Adjusted padding progression */}
                      <div className="mb-3 sm:mb-4 md:mb-5 relative flex items-center justify-center"> {/* Adjusted margin progression */}
                        {/* Adjusted icon background size for responsiveness */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${area.color} opacity-20 absolute`}></div>
                        {/* Adjusted icon size for responsiveness */}
                        <area.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-700 relative z-10 transition-transform duration-300 group-hover/card:scale-110" />
                      </div>
                      {/* Adjusted title font size and margin for responsiveness */}
                      <h3 className="text-md sm:text-lg md:text-xl font-semibold text-slate-800 mb-1 sm:mb-2 md:mb-2.5 group-hover/card:text-slate-900 text-center"> {/* Added text-center, adjusted font-medium to font-semibold */}
                        {area.title}
                      </h3>
                      {/* Adjusted description font size and leading for responsiveness */}
                      <p className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed flex-grow text-center sm:text-left"> {/* Adjusted base to text-xs, md to text-sm, added text-center for base, sm:text-left */}
                        {area.description}
                      </p>
                      <div className="mt-3 sm:mt-4 md:mt-5 pt-3 sm:pt-4 border-t border-slate-200/80"> {/* Adjusted spacing and border color */}
                        <Link
                          href={`/areas-de-atuacao#${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-flex items-center justify-center w-full text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors" // Adjusted font size, added justify-center and w-full
                        >
                          Saiba mais
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-300 group-hover/card:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            variant="outline"
            size="icon"
            // Adjusted positioning for smaller screens, more subtle on larger screens
            className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-0 z-20 bg-white/70 hover:bg-white border-slate-300/70 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-full shadow-md transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group-hover/carousel:opacity-100 sm:opacity-0"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <Button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            variant="outline"
            size="icon"
            // Adjusted positioning for smaller screens, more subtle on larger screens
            className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-0 z-20 bg-white/70 hover:bg-white border-slate-300/70 hover:border-slate-400 text-slate-600 hover:text-slate-800 rounded-full shadow-md transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group-hover/carousel:opacity-100 sm:opacity-0"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-slate-700 w-4 sm:w-5" // Active dot wider
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-14 md:mt-16">
          <Button
            asChild
            // Adjusted size prop and specific padding/text for responsiveness
            size="lg" // Keeps it relatively large, but padding below refines it
            className="bg-[#0b3a48] hover:bg-[#1a4a60] text-white transition-all duration-300 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl"
          >
            <Link href="/areas-de-atuacao" className="flex items-center gap-2">
              Ver Todas as Áreas <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AreasDeAtuacaoCarouselSection