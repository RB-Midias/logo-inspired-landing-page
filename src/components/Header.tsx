import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="flex flex-col items-center gap-8 mb-12">
        <img 
          src={logo} 
          alt="RB Mídias Logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-primary/20 shadow-glow-cyan"
        />
        <div>
          <p className="text-sm md:text-base text-primary font-bold uppercase tracking-widest mb-2">
            RB Mídias - Performance Digital
          </p>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight max-w-5xl mx-auto">
        Chega de Grupo Estagnado: Garanta 100% das Cotas da sua Rifa com{" "}
        <span className="text-primary">Leads Qualificados em tempo recorde</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        O único serviço de tráfego especializado em rifas com método que já foi validado com capital próprio antes de ser aplicado no seu negócio.
      </p>
      <Link to="/diagnostico">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 uppercase tracking-wide shadow-glow-cyan"
        >
          Fazer Mapeamento Estratégico Gratuito
        </Button>
      </Link>
    </header>
  );
};

export default Header;
