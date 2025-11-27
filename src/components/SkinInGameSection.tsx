const SkinInGameSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground border-l-4 border-primary pl-4 mb-8 uppercase tracking-wide">
        Skin in the Game
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Diferente de agências que testam com o dinheiro do cliente, a <strong className="text-foreground">RB Mídias</strong> nasceu no campo de batalha. Atuamos com gestão própria de rifas há mais de 1 ano.
      </p>
      
      <div className="bg-gradient-to-br from-card to-muted border-2 border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-glow-cyan">
        <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-4">
          CASE: TABERO WOOD
        </span>
        <span className="text-5xl md:text-7xl font-black text-foreground block mb-4">
          R$ 2,50
        </span>
        <span className="text-primary text-sm font-bold uppercase tracking-widest block mb-6">
          Custo Médio por Lead (Validado)
        </span>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Utilizamos públicos Lookalike proprietários de quem realmente paga, não apenas de quem clica.
        </p>
      </div>
    </section>
  );
};

export default SkinInGameSection;
