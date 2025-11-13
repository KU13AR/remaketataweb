import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const references = [
  {
    title: "Areál Poutního kostela P. Marie Horní Police",
    year: "2021",
    client: "Římskokatolická farnost Horní Police",
    description: "Komplexní restaurátorské práce zahrnovaly obnovu fasád poutního kostela, restaurování sochařských prvků a architektonických detailů. Práce byly provedeny v souladu se záměry památkové péče s důrazem na zachování historické autenticity objektu. Součástí zakázky bylo provedení restaurátorského průzkumu, laboratorních analýz a kompletní dokumentace.",
    scope: "Restaurování kamenných fasád, obnova štukových prvků, konservace sochařských děl, průzkumy a dokumentace"
  },
  {
    title: "Mariánský sloup v Plzni",
    year: "2022",
    client: "Město Plzeň",
    description: "Restaurování historického Mariánského sloupu v centru Plzně představovalo náročnou práci na exponovaném památkovém objektu. Práce zahrnovaly komplexní konservaci kamenných prvků, obnovu sochařských detailů a ošetření povrchů. Veškeré práce byly koordinovány s Národním památkovým ústavem.",
    scope: "Restaurování kamenné konstrukce sloupu, konservace sochařských prvků, ošetření povrchů, průzkumy"
  },
  {
    title: "Rekonstrukce sousoší Korunovace Panny Marie v Rokytníku u Trutnova",
    year: "2016",
    client: "Obec Rokytník v Orlických horách",
    description: "Kompletní rekonstrukce barokního sousoší zahrnovala restaurování kamene a štuku, doplnění chybějících částí a celkovou konservaci díla. Práce vyžadovaly specializované řemeslné dovednosti a znalost historických materiálů a postupů. Výsledkem je kompletně obnovené sousoší splňující vysoké nároky památkové péče.",
    scope: "Restaurování kamenných a štukových prvků, rekonstrukce chybějících částí, konservace, dokumentace"
  },
  {
    title: "Kuks Hospital",
    year: "2013-2015",
    client: "Nemocnice Kuks",
    description: "Rozsáhlé restaurátorské práce na hospitálním komplexu v Kuksu představovaly jeden z nejvýznamnějších projektů na díle Matyáše Bernarda Brauna. Projekt zahrnoval restaurování exteriérových i interiérových prvků, včetně monumentálních alegorických soch. Práce probíhaly ve více etapách s kontinuální koordinací s památkovou péčí.",
    scope: "Restaurování monumentálních sochařských děl M. B. Brauna, obnova fasád, konservace štukových výzdoby, průzkumy a dokumentace"
  },
  {
    title: "Sluneční brána od M.B. Brauna na Zámku v Hořovicích",
    year: "2010",
    client: "Národní památkový ústav",
    description: "Restaurování významného barokního díla od Matyáše Bernarda Brauna vyžadovalo maximální odbornost a citlivý přístup. Projekt zahrnoval podrobný restaurátorský průzkum, konservaci a částečnou rekonstrukci kamenných prvků. Výsledkem je zachování tohoto unikátního uměleckého díla pro budoucí generace.",
    scope: "Restaurátorský průzkum, konservace kamenných prvků, částečná rekonstrukce, dokumentace"
  }
];

const References = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zpět na hlavní stránku
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Detailní reference</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Přehled realizovaných restaurátorských projektů s podrobným popisem prací
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {references.map((reference, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl">{reference.title}</CardTitle>
                    <span className="text-lg font-semibold text-primary shrink-0">{reference.year}</span>
                  </div>
                  <CardDescription className="text-base font-medium">
                    Zadavatel: {reference.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Popis projektu:</h4>
                    <p className="text-muted-foreground leading-relaxed">{reference.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Rozsah prací:</h4>
                    <p className="text-muted-foreground leading-relaxed">{reference.scope}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Pro více informací o konkrétních projektech mě neváhejte kontaktovat.
            </p>
            <Link to="/#kontakt">
              <Button>Kontaktovat</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default References;
