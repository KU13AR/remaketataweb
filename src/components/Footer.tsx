export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-background/70">Historické památky UNESCO</span>
            <span className="text-background/70">•</span>
            <span className="text-background/70">Kamenná architektura</span>
            <span className="text-background/70">•</span>
            <span className="text-background/70">Barokní sochy</span>
            <span className="text-background/70">•</span>
            <span className="text-background/70">Fasády</span>
          </div>
          
          <p className="text-sm text-background/60">© 2025 Jan Vích</p>
        </div>
      </div>
    </footer>
  );
};
