const ScenarioSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 uppercase tracking-wide inline-block border-b-4 border-primary pb-2">
        O Cenário Atual
      </h2>
      <div className="bg-card border border-border rounded-xl p-8 md:p-10 hover:shadow-glow-cyan transition-all duration-300 max-w-4xl mx-auto">
        <p className="text-foreground font-semibold text-lg mb-4">
          O mercado de rifas no WhatsApp tem um teto invisível.
        </p>
        <p className="text-muted-foreground mb-6">
          A maioria dos organizadores "trava" nos 70% das cotas vendidas. Isso acontece por dois motivos técnicos:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
            <span className="text-primary text-xl font-bold mt-0.5">✓</span>
            <div>
              <strong className="text-foreground">Saturação da Base:</strong>
              <span className="text-muted-foreground"> Seus contatos atuais já compraram. Sem "sangue novo", a venda para.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 justify-center text-left max-w-2xl mx-auto">
            <span className="text-primary text-xl font-bold mt-0.5">✓</span>
            <div>
              <strong className="text-foreground">Leads Desqualificados:</strong>
              <span className="text-muted-foreground"> Grupos cheios de curiosos apenas aumentam o custo e diminuem a moral do grupo.</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ScenarioSection;
