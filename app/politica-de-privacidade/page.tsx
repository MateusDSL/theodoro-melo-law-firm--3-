import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, FileText, UserCheck, Database, Mail, Info } from "lucide-react"

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Page Header Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-gradient-to-br from-[#0b3b49] to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          {/* Você pode adicionar elementos de fundo sutis aqui, se desejar */}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            Privacidade e Segurança
          </div>
          <h1 className="text-4xl lg:text-5xl font-motiva font-bold mb-4 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:backwards]">
            Política de Privacidade
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s] [animation-fill-mode:backwards]">
            Nosso compromisso com a proteção dos seus dados pessoais.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-xl animate-fade-in">
            <div className="space-y-10 text-slate-700 leading-relaxed">
              {/* Introdução */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    1. Introdução
                  </h2>
                </div>
                <p>
                  Bem-vindo à Política de Privacidade do Theodoro & Melo Advogados Associados. Sua privacidade é de extrema importância para nós. Esta política descreve como coletamos, usamos, armazenamos, compartilhamos e protegemos suas informações pessoais quando você utiliza nossos serviços ou visita nosso site.
                </p>
              </div>

              {/* Coleta de Informações */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    2. Informações que Coletamos
                  </h2>
                </div>
                <p className="mb-3">
                  Podemos coletar os seguintes tipos de informações:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Informações de Identificação Pessoal:</strong> Nome, endereço de e-mail, número de telefone, CPF, endereço residencial ou comercial, e outras informações que você nos fornece voluntariamente através de formulários de contato, agendamentos ou durante a prestação de serviços jurídicos.
                  </li>
                  <li>
                    <strong>Informações de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas em nosso site, tempo gasto em cada página, e dados de cookies para melhorar sua experiência online.
                  </li>
                  <li>
                    <strong>Informações Relacionadas a Casos Jurídicos:</strong> Detalhes específicos sobre seu caso, documentos e outras informações confidenciais necessárias para a prestação de nossos serviços.
                  </li>
                </ul>
              </div>

              {/* Uso das Informações */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    3. Como Usamos Suas Informações
                  </h2>
                </div>
                <p className="mb-3">
                  As informações coletadas são utilizadas para:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Prestar e gerenciar nossos serviços jurídicos.</li>
                  <li>Comunicarmo-nos com você sobre seu caso ou solicitações.</li>
                  <li>Melhorar nosso site e serviços.</li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                  <li>Enviar informativos, notícias ou convites para eventos, caso você opte por recebê-los.</li>
                </ul>
              </div>

              {/* Compartilhamento de Informações */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    4. Compartilhamento de Informações
                  </h2>
                </div>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. Suas informações podem ser compartilhadas com:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-3">
                  <li>Autoridades judiciais ou governamentais, quando exigido por lei ou para proteger nossos direitos.</li>
                  <li>Prestadores de serviços terceirizados que nos auxiliam na operação do nosso site ou na condução de nossos negócios (ex: provedores de hospedagem, ferramentas de análise), desde que concordem em manter essas informações confidenciais.</li>
                  <li>Outras partes envolvidas em seu caso jurídico, com seu consentimento prévio.</li>
                </ul>
              </div>

              {/* Segurança dos Dados */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    5. Segurança dos Dados
                  </h2>
                </div>
                <p>
                  Empregamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
                </p>
              </div>

              {/* Seus Direitos */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    6. Seus Direitos
                  </h2>
                </div>
                <p>
                  Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos abaixo.
                </p>
              </div>

              {/* Alterações na Política */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    7. Alterações nesta Política de Privacidade
                  </h2>
                </div>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer alterações. As alterações entrarão em vigor a partir da data de sua publicação em nosso site.
                </p>
              </div>

              {/* Contato */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-slate-500" />
                  <h2 className="text-2xl font-semibold text-slate-800">
                    8. Contato
                  </h2>
                </div>
                <p>
                  Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre nossas práticas de tratamento de dados, entre em contato conosco:
                </p>
                <p className="mt-2">
                  Theodoro & Melo Advogados Associados<br />
                  Email: contato@theodoromelo.adv.br<br />
                  Telefone: (49) 3222-0000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}