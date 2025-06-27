import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"
import WhatsAppLeadCapture from "@/components/WhatsAppLeadCapture" // Importa o componente
import LGPDPopup from "@/components/LGPDPopup" // Importa o componente LGPDPopup (sem a extensão .tsx)

const inter = Inter({ subsets: ["latin"] })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
})

export const metadata: Metadata = {
  title: "Theodoro & Melo Advogados Associados",
  description:
    "Escritório de advocacia especializado em direito empresarial, trabalhista, previdenciário, familiar, sucessório e do consumidor. Mais de 15 anos de experiência.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${merriweather.variable}`}>
        {children}
        <LGPDPopup />
        <WhatsAppLeadCapture /> {/* Renderiza o componente aqui */}
      </body>
    </html>
  )
}
