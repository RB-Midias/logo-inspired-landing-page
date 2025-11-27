const EcosystemSection = () => {
  const services = [
    {
      number: "01",
      title: "Infraestrutura Completa (LP + API)",
      description: "Fim dos bloqueios de Pixel. Rastreamento 100% de quem comprou.",
    },
    {
      number: "02",
      title: "Edição de Criativos Profissionais",
      description: "Seus anúncios param de parecer amadores, aumentando a Taxa de Clique (CTR).",
    },
    {
      number: "03",
      title: "Estratégia de Lances (Bid Strategy)",
      description: "Otimização para volume máximo (Maximizar CPC) de pessoas certas.",
    },
    {
      number: "04",
      title: "Relatórios Descomplicados",
      description: "Saiba exatamente quanto está investindo e qual o retorno de cada centavo (ROI).",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-primary pb-2">
        Pare de Contratar 3 Freelancers. Contrate a Engenharia de Tráfego Completa.
      </h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
        Contratar a RB Mídias significa ter a solução 360º que realmente escala vendas.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-glow-cyan transition-all duration-300 group text-center"
          >
            <h3 className="text-primary text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
              {service.number}. {service.title}
            </h3>
            <p className="text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemSection;
