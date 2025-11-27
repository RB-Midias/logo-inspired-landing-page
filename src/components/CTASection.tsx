import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-card via-muted to-card border-2 border-primary/30 rounded-2xl p-10 md:p-16 text-center shadow-glow-purple">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          Troque a Espera Pelo Método. Garanta a Previsibilidade de 100%.
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
          O sucesso da sua rifa não é sorte, é engenharia de tráfego. Enquanto a concorrência torce para a venda aparecer, nós aplicamos o método validado da RB Mídias para garantir que seu fechamento seja rápido, lucrativo e totalmente previsível.
        </p>
        <div className="flex justify-center">
          <Link to="/diagnostico">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 uppercase tracking-wide shadow-glow-cyan"
            >
              Destravar minha rifa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
