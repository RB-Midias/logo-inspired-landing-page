const ScenarioSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-primary pb-2">
        Seu Grupo não é um Cemitério de Vendas. O problema é a aquisição.
      </h2>
      <div className="bg-card border border-border rounded-xl p-8 md:p-10 hover:shadow-glow-cyan transition-all duration-300 max-w-4xl mx-auto">
        <p className="text-muted-foreground mb-6 text-lg">
          Você já percebeu que a rifa vende rapidamente até 50% ou 70% e depois trava? Isso acontece porque você está queimando dinheiro com:
        </p>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
            <span className="text-destructive text-xl font-bold mt-0.5">✗</span>
            <div>
              <strong className="text-foreground">Público Frio:</strong>
              <span className="text-muted-foreground"> Pessoas que nunca compraram uma rifa na vida.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
            <span className="text-destructive text-xl font-bold mt-0.5">✗</span>
            <div>
              <strong className="text-foreground">Anúncios Amadores:</strong>
              <span className="text-muted-foreground"> Vídeos caseiros que não passam credibilidade nem retenção.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
            <span className="text-destructive text-xl font-bold mt-0.5">✗</span>
            <div>
              <strong className="text-foreground">Dependência Orgânica:</strong>
              <span className="text-muted-foreground"> Ficar implorando por compartilhamentos ou contando com a sorte.</span>
            </div>
          </li>
        </ul>
        <p className="text-foreground font-semibold text-lg">
          O resultado? Queima de orçamento no Facebook e o estresse de ter que adiar a data do sorteio.
        </p>
      </div>
    </section>
  );
};

export default ScenarioSection;
