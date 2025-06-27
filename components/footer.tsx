import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0b3a48] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <Image
                src="/images/Logotipo_7-removebg-preview.png"
                alt="Theodoro & Melo Advogados Associados"
                width={160}
                height={55}
                className="transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Há mais de 15 anos oferecendo soluções jurídicas com excelência, ética e compromisso. Sua confiança é
              nossa maior conquista.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-medium mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/areas-de-atuacao"
                  className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/recuperacoes"
                  className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  Recuperações e falências
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>Lages/SC</p>
                  <p className="text-sm">Atuação Nacional</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">(49) 3222-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">contato@theodoromelo.adv.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Theodoro Melo Andrade Costa. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-de-privacidade" className="text-slate-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
