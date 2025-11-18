export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Jan Vích. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};
