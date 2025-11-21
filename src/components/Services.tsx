import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Hammer, Users, ClipboardCheck, FileText, Shield, FolderOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileSearch,
    title: "Průzkumy a posudky",
    description: "Restaurátorské průzkumy, odborné posudky a projekty, včetně laboratorních analýz. Podklady pro vyhlášení VZ, žádost o dotaci EU, MK ČR."
  },
  {
    icon: Hammer,
    title: "Restaurátorské práce",
    description: "Kompletní restaurování sochařských děl v kameni a štuku, kamenné architektury a fasád."
  },
  {
    icon: Users,
    title: "Garantovaný tým",
    description: "Stálý tým profesionálních restaurátorů a specializovaných řemeslníků."
  },
  {
    icon: ClipboardCheck,
    title: "Odborný dohled",
    description: "Koordinace prací v souladu se záměry orgánů Státní památkové péče."
  },
  {
    icon: FileText,
    title: "Restaurátorské zprávy",
    description: "Kompletní dokumentace doplněná režimem památky a fotografiemi."
  },
  {
    icon: Shield,
    title: "Pojištění",
    description: "Pojištěn na rizika spojená s výkonem profese do výše 5 mil. Kč."
  }
];

export const Services = () => {
  return (
    <section id="sluzby" className="py-20 bg-gradient-hero">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Služby</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komplexní péče o historické památky s důrazem na odbornost a kvalitu
          </p>
        </div>

        <div className="mx-auto space-y-8" style={{ maxWidth: 'min(1280px, 100%)' }}>
          <div className="grid gap-6" style={{ 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))' 
          }}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Referenční zakázky - široká klikatelná dlaždice */}
          <Link to="/reference" className="block group">
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Referenční zakázky</h3>
                      <p className="text-muted-foreground text-sm">
                        Přehled realizovaných projektů a oceněných zakázek včetně památek UNESCO a národních kulturních památek
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};
