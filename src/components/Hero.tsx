import heroRelief from "@/assets/hero-relief.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRelief})` }}
        />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={heroRelief} 
                alt="Kamenný reliéf - ukřižování"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Jan Vích
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Akademický sochař a restaurátor
            </p>
            <div className="h-1 w-24 bg-gradient-accent mx-auto md:mx-0 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-xl">
              Specializace na restaurování historických památek, sochařských děl v kameni a štuku, kamenné architektury a fasád
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
