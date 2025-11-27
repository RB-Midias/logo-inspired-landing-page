import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-card via-muted to-card border-2 border-primary/30 rounded-2xl p-10 md:p-16 text-center shadow-glow-purple">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Vamos escalar sua operação?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Pare de depender da sorte ou da boa vontade dos amigos. Transforme sua rifa em um processo previsível de vendas.
        </p>
        <p className="text-foreground font-bold text-xl mb-8">
          RB Mídias - Performance Digital
        </p>
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 uppercase tracking-wide shadow-glow-cyan"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
