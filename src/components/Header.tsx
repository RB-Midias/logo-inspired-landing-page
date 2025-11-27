import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24 text-center border-b border-border">
      <div className="flex flex-col items-center gap-6">
        <img 
          src={logo} 
          alt="RB Mídias Logo" 
          className="w-32 h-32 md:w-40 md:h-40 object-cover animate-pulse-slow rounded-full border-4 border-primary/20 shadow-glow-cyan scale-110"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-4">
            RB <span className="text-primary">MÍDIAS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            Tráfego de Performance & Infraestrutura para Rifas Digitais
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
