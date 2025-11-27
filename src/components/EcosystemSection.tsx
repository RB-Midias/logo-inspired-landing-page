const EcosystemSection = () => {
  const services = [
    {
      number: "01",
      title: "Gestão de Tráfego",
      description: "Estratégias de lance focadas em maximizar CPC e escala de volume para encher grupos rapidamente.",
    },
    {
      number: "02",
      title: "Edição de Criativos",
      description: "Transformamos seus vídeos brutos em anúncios de alta retenção (Reels/Stories) que convertem.",
    },
    {
      number: "03",
      title: "Landing Page",
      description: "Página de alta conversão focada em tirar a dúvida do lead e enviá-lo para o grupo ou checkout.",
    },
    {
      number: "04",
      title: "Rastreamento (API)",
      description: "Configuração de Pixel e API de Conversão para driblar bloqueios do iOS14+ e rastrear cada cliente.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-primary pb-2">
        Ecossistema de Conversão
      </h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
        Não fazemos apenas "anúncios". Entregamos a infraestrutura técnica completa:
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
