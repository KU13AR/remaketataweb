import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { FileSearch, Hammer, Users, ClipboardCheck, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: FileSearch,
    title: "Průzkumy a posudky",
    description: "Restaurátorské průzkumy, odborné posudky a projekty, včetně laboratorních analýz.",
    details: "Včetně laboratorních analýz a jejich vyhodnocení."
  },
  {
    icon: Hammer,
    title: "Restaurátorské práce",
    description: "Kompletní restaurování sochařských děl v kameni a štuku, kamenné architektury a fasád.",
    details: (
      <div className="space-y-3">
        <p className="font-medium">V interiéru i exteriéru v těchto oborech:</p>
        <ul className="space-y-2 text-sm">
          <li>• Sochařská díla v kameni a štuku</li>
          <li>• Kamenná architektura, obnova fasád, včetně rekonstrukcí</li>
          <li>• Provádění kopií a faximilí sochařských děl a architektury</li>
          <li>• Odborné transféry sochařských děl a architektury</li>
          <li>• Obnova kamenných fasád historických budov, včetně dekorativních prvků</li>
          <li>• Kamenické práce, obnova, včetně zhotovení nových prvků</li>
        </ul>
      </div>
    )
  },
  {
    icon: Users,
    title: "Garantovaný tým",
    description: "Stálý tým profesionálních restaurátorů a specializovaných řemeslníků.",
    details: "Plnění zakázek většího rozsahu garantuji stálým týmem restaurátorů a specializovaných řemeslníků. Realizace rozsáhlých zakázek se vždy fyzicky účastním, spolu se svými spolupracovníky, Ing. Oldřichem Hnětynkou, Davidem Seidlem a Eduardem Borisem."
  },
  {
    icon: ClipboardCheck,
    title: "Odborný dohled",
    description: "Koordinace prací v souladu se záměry orgánů Státní památkové péče.",
    details: "Koordinace prací na památkových objektech, v souladu se záměry a závaznými stanovisky orgánů Státní památkové péče a příslušných odborů státní správy."
  },
  {
    icon: FileText,
    title: "Restaurátorské zprávy",
    description: "Kompletní dokumentace doplněná režimem památky a fotografiemi.",
    details: "Doplněné režimem památky, včetně fotografické dokumentace."
  },
  {
    icon: Shield,
    title: "Pojištění",
    description: "Pojištěn na rizika spojená s výkonem profese do výše 5 mil. Kč.",
    details: "Jsem pojištěn na rizika spojená s výkonem profese, do výše 5 mil. Kč."
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
              <HoverCard key={index} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
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
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 bg-card border-primary/20" side="top" align="center">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      {service.title}
                    </h4>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {service.details}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
