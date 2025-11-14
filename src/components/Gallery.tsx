import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import photos
import horniPolice1 from "@/assets/gallery/horni-police-1.jpg";
import horniPolice2 from "@/assets/gallery/horni-police-2.jpg";
import horniPolice3 from "@/assets/gallery/horni-police-3.jpg";
import horniPolice4 from "@/assets/gallery/horni-police-4.jpg";
import horniPolice5 from "@/assets/gallery/horni-police-5.jpg";
import horniPolice6 from "@/assets/gallery/horni-police-6.jpg";
import marianskesloup1 from "@/assets/gallery/marianske-sloup-1.jpg";
import marianskesloup2 from "@/assets/gallery/marianske-sloup-2.jpg";
import marianskesloup3 from "@/assets/gallery/marianske-sloup-3.jpg";
import marianskesloup4 from "@/assets/gallery/marianske-sloup-4.jpg";
import marianskesloup5 from "@/assets/gallery/marianske-sloup-5.jpg";
import rokytnik1 from "@/assets/gallery/rokytnik-1.jpg";
import rokytnik2 from "@/assets/gallery/rokytnik-2.jpg";
import rokytnik3 from "@/assets/gallery/rokytnik-3.jpg";
import rokytnik4 from "@/assets/gallery/rokytnik-4.jpg";
import rokytnik5 from "@/assets/gallery/rokytnik-5.jpg";
import rokytnik6 from "@/assets/gallery/rokytnik-6.jpg";
import kuks1 from "@/assets/gallery/kuks-1.jpg";
import kuks2 from "@/assets/gallery/kuks-2.jpg";
import kuks3 from "@/assets/gallery/kuks-3.jpg";
import kuks4 from "@/assets/gallery/kuks-4.jpg";
import kuks5 from "@/assets/gallery/kuks-5.jpg";
import kuks6 from "@/assets/gallery/kuks-6.jpg";
import kuks7 from "@/assets/gallery/kuks-7.jpg";
import horovice1 from "@/assets/gallery/horovice-1.jpg";
import horovice2 from "@/assets/gallery/horovice-2.jpg";
import horovice3 from "@/assets/gallery/horovice-3.jpg";
import horovice4 from "@/assets/gallery/horovice-4.jpg";
import horovice5 from "@/assets/gallery/horovice-5.jpg";
import horovice6 from "@/assets/gallery/horovice-6.jpg";
import liberec1 from "@/assets/gallery/liberec-1.jpg";
import liberec2 from "@/assets/gallery/liberec-2.jpg";
import liberec3 from "@/assets/gallery/liberec-3.jpg";
import liberec4 from "@/assets/gallery/liberec-4.jpg";
import liberec5 from "@/assets/gallery/liberec-5.jpg";
import liberec6 from "@/assets/gallery/liberec-6.jpg";
import dobris1 from "@/assets/gallery/dobris-1.jpg";
import dobris2 from "@/assets/gallery/dobris-2.jpg";
import dobris3 from "@/assets/gallery/dobris-3.jpg";
import dobris5 from "@/assets/gallery/dobris-5.jpg";
import dobris6 from "@/assets/gallery/dobris-6.jpg";
import hradecKralove1 from "@/assets/gallery/hradec-kralove-1.jpg";
import hradecKralove2 from "@/assets/gallery/hradec-kralove-2.jpg";
import hradecKralove3 from "@/assets/gallery/hradec-kralove-3.jpg";
import hradecKralove4 from "@/assets/gallery/hradec-kralove-4.jpg";
import hradecKralove5 from "@/assets/gallery/hradec-kralove-5.jpg";
import kutnaHora1 from "@/assets/gallery/kutna-hora-1.jpg";
import kutnaHora2 from "@/assets/gallery/kutna-hora-2.jpg";
import kutnaHora3 from "@/assets/gallery/kutna-hora-3.jpg";
import kutnaHora4 from "@/assets/gallery/kutna-hora-4.jpg";

interface Photo {
  url: string;
  caption?: string;
}

interface Project {
  title: string;
  year: string;
  description: string;
  photos: Photo[];
}

const projects: Project[] = [
  {
    title: "Areál Poutního kostela P. Marie Horní Police",
    year: "2021",
    description: "Komplexní restaurátorské práce na areálu poutního kostela včetně fasád a sochařských prvků",
    photos: [
      { url: horniPolice1 },
      { url: horniPolice2 },
      { url: horniPolice3 },
      { url: horniPolice4 },
      { url: horniPolice5 },
      { url: horniPolice6 }
    ]
  },
  {
    title: "Mariánský sloup v Plzni",
    year: "2022",
    description: "Restaurování historického Mariánského sloupu v centru Plzně",
    photos: [
      { url: marianskesloup1 },
      { url: marianskesloup2 },
      { url: marianskesloup3 },
      { url: marianskesloup4 },
      { url: marianskesloup5 }
    ]
  },
  {
    title: "Rekonstrukce sousoší Korunovace Panny Marie v Rokytníku u Trutnova",
    year: "2016",
    description: "Kompletní rekonstrukce barokního sousoší včetně restaurování kamene a štuku",
    photos: [
      { url: rokytnik1 },
      { url: rokytnik2 },
      { url: rokytnik3 },
      { url: rokytnik4 },
      { url: rokytnik5 },
      { url: rokytnik6 }
    ]
  },
  {
    title: "Kuks Hospital",
    year: "2013-2015",
    description: "Rozsáhlé restaurátorské práce na hospitálním komplexu v Kuksu - dílo M. B. Brauna",
    photos: [
      { url: kuks1 },
      { url: kuks2 },
      { url: kuks3 },
      { url: kuks4 },
      { url: kuks5 },
      { url: kuks6 },
      { url: kuks7 }
    ]
  },
  {
    title: "Sluneční brána od M.B. Brauna na Zámku v Hořovicích",
    year: "2010",
    description: "Restaurování významného barokního díla od Matyáše Bernarda Brauna",
    photos: [
      { url: horovice1 },
      { url: horovice2 },
      { url: horovice3 },
      { url: horovice4 },
      { url: horovice5 },
      { url: horovice6 }
    ]
  },
  {
    title: "Rekonstrukce Městských lázní v Liberci",
    year: "2009",
    description: "Obnova historických fasád a architektonických prvků budovy městských lázní",
    photos: [
      { url: liberec1 },
      { url: liberec2 },
      { url: liberec3 },
      { url: liberec4 },
      { url: liberec5 },
      { url: liberec6 }
    ]
  },
  {
    title: "Zámek Dobříš - Fontána napájení Héliových koní",
    year: "2008",
    description: "Restaurování sochařských prvků a kamenných balustrad ve francouzské zahradě",
    photos: [
      { url: dobris1 },
      { url: dobris2 },
      { url: dobris3 },
      { url: dobris5 },
      { url: dobris6 }
    ]
  },
  {
    title: "Sousoší sv.Isidora v Kutné Hoře",
    year: "2005",
    description: "Restaurování sousoší sv. Isidora, které je součást souboru třinácti barokních soch na terase před jezuitskou kolejíí",
    photos: [
      { url: kutnaHora1 },
      { url: kutnaHora2 },
      { url: kutnaHora3 },
      { url: kutnaHora4 }
    ]
  },
  {
    title: "Mariánský sloup G.B. Bully, Hradec Králové",
    year: "2004",
    description: "Restaurování Mariánského sloupu na Velkém náměstí",
    photos: [
      { url: hradecKralove1 },
      { url: hradecKralove2 },
      { url: hradecKralove3 },
      { url: hradecKralove4 },
      { url: hradecKralove5 }
    ]
  }
];

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openGallery = (project: Project, photoIndex: number = 0) => {
    setSelectedProject(project);
    setCurrentPhotoIndex(photoIndex);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedProject) {
      setCurrentPhotoIndex((prev) => 
        prev === selectedProject.photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedProject) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? selectedProject.photos.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="galerie" className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Referenční zakázky</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Výběr z realizovaných restaurátorských projektů
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, projectIndex) => (
            <Card key={projectIndex} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-muted cursor-pointer" onClick={() => openGallery(project, 0)}>
                <img 
                  src={project.photos[0].url} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.photos.length} fotografií
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                
                {/* Thumbnail grid */}
                <div className="grid grid-cols-4 gap-2">
                  {project.photos.slice(0, 4).map((photo, photoIndex) => (
                    <div 
                      key={photoIndex}
                      className="aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                      onClick={() => openGallery(project, photoIndex)}
                    >
                      <img 
                        src={photo.url} 
                        alt={`${project.title} ${photoIndex + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
                {project.photos.length > 4 && (
                  <button
                    onClick={() => openGallery(project, 0)}
                    className="mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Zobrazit všech {project.photos.length} fotografií →
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Klikněte na fotografii pro zobrazení detailu
          </p>
          <Link to="/reference">
            <Button variant="outline" className="mt-4">
              Reference - detailní popis
            </Button>
          </Link>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="text-primary">• Historické památky UNESCO</span>
            <span className="text-primary">• Kamenná architektura</span>
            <span className="text-primary">• Barokní sochy</span>
            <span className="text-primary">• Fasády</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={closeGallery}>
        <DialogContent className="max-w-7xl h-[95vh] p-0">
          {selectedProject && (
            <>
              <DialogHeader className="px-6 pt-6 pb-4">
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                  <span className="text-base font-normal text-muted-foreground ml-3">
                    ({currentPhotoIndex + 1} / {selectedProject.photos.length})
                  </span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="relative flex-1 flex items-center justify-center px-4 py-2 bg-muted/30">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg h-12 w-12"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                <img
                  src={selectedProject.photos[currentPhotoIndex].url}
                  alt={`${selectedProject.title} ${currentPhotoIndex + 1}`}
                  className="max-h-[calc(95vh-200px)] max-w-full object-contain"
                  loading="lazy"
                />

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg h-12 w-12"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>

              {/* Thumbnail strip */}
              <div className="px-4 pb-4 pt-2 border-t bg-background">
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                  {selectedProject.photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden border-2 transition-all hover:scale-105 ${
                        index === currentPhotoIndex 
                          ? 'border-primary shadow-md' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={`Náhled ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
