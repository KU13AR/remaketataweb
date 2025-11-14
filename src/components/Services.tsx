import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSearch, Hammer, Users, ClipboardCheck, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Průzkumy a posudky",
    description: "Restaurátorské průzkumy, odborné posudky a projekty, včetně laboratorních analýz. Podklady pro vyhlášení VZ, žádost o dotaci EU, MK ČR."
  },
  {
    icon: Hammer,
    title: "Restaurátorské práce",
    description: "Kompletní restaurování sochařských děl v kameni a štuku, kamenné architektury a fasád. Doplněné režimem památky, včetně fotografické dokumentace."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
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
      </div>
    </section>
  );
};
