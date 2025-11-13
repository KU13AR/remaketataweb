import reliefPattern from "@/assets/relief-pattern.jpg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 relative overflow-hidden">
      {/* Decorative relief pattern */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 opacity-15 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${reliefPattern})`,
          maskImage: 'linear-gradient(to bottom, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)'
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent opacity-40" />
      
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">Jan Vích</h3>
          <p className="text-background/80">
            Akademický sochař a restaurátor
          </p>
          
          <div className="h-px bg-background/20 max-w-xs mx-auto" />
          
          <div className="space-y-2 text-sm text-background/70">
            <p>
              Povolení MK ČR č. 6278/91 a 8.001/96
            </p>
            <p>
              Práce dle Zákona o památkové péči č. 20/1987 Sb.
            </p>
            <p>
              Pojištění do výše 5 mil. Kč
            </p>
          </div>

          <div className="pt-6 text-sm text-background/60">
            <p>© {new Date().getFullYear()} Jan Vích. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
