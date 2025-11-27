import Header from "@/components/Header";
import ScenarioSection from "@/components/ScenarioSection";
import SkinInGameSection from "@/components/SkinInGameSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ScenarioSection />
        <SkinInGameSection />
        <EcosystemSection />
        <ProcessSection />
        <CTASection />
      </main>
      <footer className="container mx-auto px-4 py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2024 RB Mídias. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
