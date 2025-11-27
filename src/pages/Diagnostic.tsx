import React from "react";
import { Send, User, Phone, Mail } from "lucide-react";

const Diagnostic = () => {
  // CONFIGURAÇÕES
  // 1. Seu Email para receber o formulário
  const EMAIL_DESTINO = "rjbmidias@gmail.com"; 
  
  // 2. Seu WhatsApp para redirecionamento (apenas números, com 55 e DDD)
  const WHATSAPP_NUMERO = "5547992400169";
  
  // Mensagem que aparecerá no seu Whats
  const msgWhats = encodeURIComponent("Olá, acabei de preencher o diagnóstico no site e gostaria de falar com a RB Mídias.");
  const redirectUrl = `https://wa.me/${WHATSAPP_NUMERO}?text=${msgWhats}`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-2xl bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="p-8 border-b border-border text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
            Briefing de Performance <span className="text-primary">RB Mídias</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Preencha seus dados para iniciarmos o plano de escala da sua rifa.
          </p>
        </div>

        <div className="p-8">
          <form 
            action={`https://formsubmit.co/${EMAIL_DESTINO}`} 
            method="POST"
            className="space-y-8"
          >
            {/* Configurações Ocultas do FormSubmit */}
            <input type="hidden" name="_next" value={redirectUrl} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Novo Lead: Diagnóstico RB Mídias" />
            <input type="hidden" name="_template" value="table" />

            {/* SEÇÃO DE CONTATO (DESTACADA) */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-primary font-bold uppercase text-sm tracking-wider">
                  Seus Dados de Contato
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">Nome Completo</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="nome" 
                      required 
                      className="w-full bg-muted border border-border rounded p-3 pl-10 text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Digite seu nome"
                    />
                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">WhatsApp</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        name="whatsapp" 
                        required 
                        className="w-full bg-muted border border-border rounded p-3 pl-10 text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="(xx) 9xxxx-xxxx"
                      />
                      <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">E-mail</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        className="w-full bg-muted border border-border rounded p-3 pl-10 text-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                      <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* PERGUNTAS DO BRIEFING */}
            <div className="space-y-6">
              
              {/* Pergunta 1 */}
              <div>
                <label className="block text-primary font-medium mb-3 text-lg">1. Há quanto tempo você trabalha com rifas online?</label>
                <div className="space-y-2">
                  {[
                    "Já fiz algumas, mas de forma amadora/entre amigos.",
                    "Faço algumas, é uma fonte de renda secundária.",
                    "Já atuo profissionalmente e vivo disso."
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 rounded bg-muted border border-border hover:border-primary cursor-pointer transition-all group">
                      <input type="radio" name="experiencia" value={option} required className="mr-3 accent-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pergunta 2 */}
              <div>
                <label className="block text-primary font-medium mb-3 text-lg">2. Como você vende hoje?</label>
                <div className="space-y-2">
                  {[
                    "Somente orgânico (Status/Grupos).",
                    "Botão 'Turbinar' do Instagram.",
                    "Já tenho/tive gestor de tráfego."
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 rounded bg-muted border border-border hover:border-primary cursor-pointer transition-all group">
                      <input type="radio" name="venda_atual" value={option} required className="mr-3 accent-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pergunta 3 */}
              <div>
                <label className="block text-primary font-medium mb-3 text-lg">3. Qual a maior dificuldade hoje?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Atração (Ninguém entra)",
                    "Conversão (Ninguém compra)",
                    "Confiança (Medo de golpe)",
                    "Escala (Demora p/ vender)"
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 rounded bg-muted border border-border hover:border-primary cursor-pointer transition-all group">
                      <input type="radio" name="dificuldade" value={option} required className="mr-3 accent-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pergunta 4 */}
              <div>
                <label className="block text-primary font-medium mb-3 text-lg">4. Como é a produção de conteúdo?</label>
                <div className="space-y-2">
                  {[
                    "Eu apareço e falo (Influenciador).",
                    "Contrato influenciadores.",
                    "Só filmo o prêmio com música.",
                    "Tenho vergonha de gravar."
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 rounded bg-muted border border-border hover:border-primary cursor-pointer transition-all group">
                      <input type="radio" name="conteudo" value={option} required className="mr-3 accent-primary" />
                      <span className="text-muted-foreground group-hover:text-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Campos Abertos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div>
                  <label className="block text-xs font-semibold uppercase text-primary mb-2">Segmento</label>
                  <input type="text" name="segmento" placeholder="Ex: Motos..." required className="w-full bg-muted border border-border rounded p-3 text-foreground focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-primary mb-2">Plataforma</label>
                  <input type="text" name="plataforma" placeholder="Ex: Rifa321..." required className="w-full bg-muted border border-border rounded p-3 text-foreground focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-primary mb-2">Valor Cota</label>
                  <input type="text" name="valor_cota" placeholder="Ex: R$ 0,50" required className="w-full bg-muted border border-border rounded p-3 text-foreground focus:border-primary focus:outline-none" />
                </div>
              </div>

            </div>

            {/* BOTÃO FINAL */}
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest py-4 rounded-lg shadow-glow-cyan transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Enviar e Falar no WhatsApp
              <Send className="w-5 h-5" />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;
