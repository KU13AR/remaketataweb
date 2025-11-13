import restorationWork from "@/assets/restoration-work.jpg";
import architectureDetail from "@/assets/architecture-detail.jpg";
import sculptureRestoration from "@/assets/sculpture-restoration.jpg";
import heroImage from "@/assets/hero-restoration.jpg";

const galleryImages = [
  {
    src: restorationWork,
    title: "Restaurátorské práce",
    description: "Precizní práce s historickými kamennými sochami"
  },
  {
    src: architectureDetail,
    title: "Architektonické detaily",
    description: "Obnova barokních fasád a dekorativních prvků"
  },
  {
    src: sculptureRestoration,
    title: "Sochařská restaurace",
    description: "Before and after - profesionální restaurování"
  },
  {
    src: heroImage,
    title: "Kamenné reliéfy",
    description: "Detailní práce na historických reliéfech"
  }
];

export const Gallery = () => {
  return (
    <section id="galerie" className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Galerie prací</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ukázky realizovaných restaurátorských projektů
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Pro více ukázek prací a detailních fotografií mě prosím kontaktujte
          </p>
        </div>
      </div>
    </section>
  );
};
