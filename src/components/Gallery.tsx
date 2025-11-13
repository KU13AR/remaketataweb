import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  photos: number;
}

const projects: Project[] = [
  {
    title: "Areál Poutního kostela P. Marie Horní Police",
    year: "2021",
    description: "Komplexní restaurátorské práce na areálu poutního kostela včetně fasád a sochařských prvků",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/122.jpg",
    photos: 6
  },
  {
    title: "Mariánský sloup v Plzni",
    year: "2022",
    description: "Restaurování historického Mariánského sloupu v centru Plzně",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/113.jpg",
    photos: 5
  },
  {
    title: "Rekonstrukce sousoší Korunovace Panny Marie v Rokytníku u Trutnova",
    year: "2016",
    description: "Kompletní rekonstrukce barokního sousoší včetně restaurování kamene a štuku",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/101.jpg",
    photos: 7
  },
  {
    title: "Kuks Hospital",
    year: "2013-2015",
    description: "Rozsáhlé restaurátorské práce na hospitálním komplexu v Kuksu - dílo M. B. Brauna",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/83.jpg",
    photos: 17
  },
  {
    title: "Sluneční brána od M.B. Brauna na Zámku v Hořovicích",
    year: "2010",
    description: "Restaurování významného barokního díla od Matyáše Bernarda Brauna",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/60.jpg",
    photos: 23
  },
  {
    title: "Rekonstrukce Městských lázní v Liberci",
    year: "2009",
    description: "Obnova historických fasád a architektonických prvků budovy městských lázní",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/44.jpg",
    photos: 15
  },
  {
    title: "Zámek Dobříš - Francouzská zahrada",
    year: "2008",
    description: "Restaurování sochařských prvků a kamenných balustrad ve francouzské zahradě",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/39.jpg",
    photos: 6
  },
  {
    title: "Zpevňování pod sníženým tlakem",
    year: "2007",
    description: "Specializovaná technika restaurování s použitím zpevňování pod sníženým tlakem",
    imageUrl: "https://jan-vich.estranky.cz/img/mid/27.jpg",
    photos: 5
  }
];

export const Gallery = () => {
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
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={project.imageUrl} 
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
                    {project.photos} fotografií
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Pro detailní fotografie a kompletní portfolium prací prosím kontaktujte
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="text-primary">• Historické památky UNESCO</span>
            <span className="text-primary">• Kamenná architektura</span>
            <span className="text-primary">• Barokní sochy</span>
            <span className="text-primary">• Fasády</span>
          </div>
        </div>
      </div>
    </section>
  );
};
