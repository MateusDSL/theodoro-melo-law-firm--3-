"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/areas-de-atuacao" },
    { name: "Equipe", href: "/equipe" },
    { name: "Recuperações e falências", href: "/recuperacoes" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-gradient-to-br from-[#0b3b49]/90 to-black/90 backdrop-blur-md shadow-lg py-1" : "bg-transparent py-2",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group z-10 shrink-0">
            <div className={cn(
              "flex items-center transition-all duration-300",
              // Mobile: scroll behavior on all pages
              scrolled ? "opacity-100 scale-90" : "opacity-0 pointer-events-none",
              // Desktop: scroll behavior only on home page, always visible on other pages
              pathname !== "/" && "lg:opacity-100 lg:pointer-events-auto"
            )}>
              <div className="relative">
                <Image
                  src="/images/Logotipo_7-removebg-preview.png"
                  alt="Theodoro & Melo Advogados Associados"
                  width={scrolled ? 96 : 112}  // Reduzido
                  height={scrolled ? 32 : 40} // Reduzido
                  className="transition-all duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-grow justify-center">
            <ul className="flex items-center gap-2 xl:gap-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 lg:px-4 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-300 rounded-md flex items-center whitespace-nowrap",
                      pathname === item.href
                        ? "text-white bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div 
            className={cn(
              "hidden lg:flex items-center transition-all duration-500 shrink-0",
              // Default state for large screens: hidden and no pointer events
              "lg:opacity-0 lg:-translate-y-4 lg:pointer-events-none",
              // Override when on homepage AND scrolled OR when NOT on homepage (always visible)
              (pathname === "/" && scrolled) || pathname !== "/" ? "lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto" : ""
            )}
          >
            <Button
              asChild
              variant="outline"
              className="border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-800 transition-all duration-300 shadow-sm ml-4"
            >
              <Link href="/contato" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">Agendar Consulta</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[350px] bg-gradient-to-br from-[#0b3b49] to-black border-slate-800/20 p-0 backdrop-blur-md">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-end p-4 border-b border-slate-800/30">
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Fechar menu</span>
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 overflow-auto py-8 px-6">
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "flex items-center px-4 py-4 text-lg font-medium rounded-xl transition-all duration-200 border border-transparent backdrop-blur-sm",
                          pathname === item.href
                            ? "bg-white/10 text-white border-white/20 shadow-sm"
                            : "text-white/90 hover:bg-white/5 hover:text-white hover:border-white/10",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-slate-800/30">
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full h-12 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-800 transition-all duration-300 shadow-sm font-semibold text-base rounded-xl"
                  >
                    <Link
                      href="/contato"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-3"
                    >
                      <Phone className="w-5 h-5" />
                      Agendar Consulta
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
