const SkinInGameSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-primary pb-2">
        Contrate um Duplo Especialista: Tráfego e o Jogo Real das Rifas
      </h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
        Nós não somos apenas gestores de tráfego. Somos operadores de rifas que dominaram a Meta. Isso faz toda a diferença:
      </p>
      
      <div className="bg-gradient-to-br from-card to-muted border-2 border-primary/30 rounded-2xl p-8 md:p-12 shadow-glow-cyan mb-8">
        <blockquote className="text-foreground text-xl md:text-2xl font-semibold italic mb-8 max-w-3xl mx-auto">
          "Você contará com um especialista não apenas em tráfego, mas também em rifas. Só quem vive o jogo pode entender os detalhes técnicos e comportamentais que realmente farão a sua rifa decolar."
        </blockquote>
        
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl font-bold mt-0.5">✓</span>
            <div>
              <strong className="text-foreground text-lg">Conhecimento Profundo:</strong>
              <p className="text-muted-foreground">Entendemos a sazonalidade, a psicologia de compra da cota e o ciclo de vida do cliente de rifa. Não perdemos tempo com testes básicos.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl font-bold mt-0.5">✓</span>
            <div>
              <strong className="text-foreground text-lg">Refinamento Comprovado:</strong>
              <p className="text-muted-foreground">Nossa metodologia foi validada e refinada com capital próprio. Você evita os custos de risco inicial e acessa uma estratégia já vencedora.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <span className="text-primary text-xl font-bold mt-0.5">✓</span>
            <div>
              <strong className="text-foreground text-lg">Prova Social:</strong>
              <p className="text-muted-foreground">"No nosso próprio projeto, Tabero Wood, conseguimos manter o Custo por Lead Qualificado em patamares extremamente baixos e otimizados, garantindo o fechamento rápido e previsível das ações."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinInGameSection;
