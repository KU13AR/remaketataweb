export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Jan Vích
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Akademický sochař a restaurátor
          </p>
          <div className="h-1 w-24 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializace na restaurování historických památek, sochařských děl v kameni a štuku, kamenné architektury a fasád
          </p>
        </div>
      </div>
    </section>
  );
};
