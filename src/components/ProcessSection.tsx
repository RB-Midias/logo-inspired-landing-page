const ProcessSection = () => {
  const phases = [
    {
      title: "Fase 1 (Setup)",
      description: "Configuração de tags, pixel e criação da Landing Page.",
    },
    {
      title: "Fase 2 (Validação)",
      description: "Teste de criativos para encontrar o lead mais barato.",
    },
    {
      title: "Fase 3 (Escala)",
      description: "Aceleração do orçamento nos públicos campeões.",
    },
    {
      title: "Fase 4 (Remarketing)",
      description: "Perseguição inteligente para quem clicou e não comprou.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-secondary pb-2">
        Como Trabalhamos
      </h2>
      <div className="bg-card border border-secondary rounded-xl p-8 md:p-10 max-w-4xl mx-auto">
        <ul className="space-y-6">
          {phases.map((phase, index) => (
            <li key={index} className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
              <span className="text-primary text-xl font-bold mt-0.5">✓</span>
              <div>
                <strong className="text-foreground text-lg">{phase.title}:</strong>
                <span className="text-muted-foreground"> {phase.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProcessSection;
