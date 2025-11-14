import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const references = [
  {
    period: "Oceněné projekty",
    projects: [
      {
        title: "NKP Hospital Kuks – Generální rekonstrukce",
        year: "2013–2015",
        description: "Hlavní restaurátor kostela Nejsvětější Trojice a sochařských děl M.B. Brauna v areálu. Projekt oceněn titulem Stavba roku 2016 - Cena Ministerstva kultury ČR a Grand Prix / Europa Nostra - Cena Evropského kulturního dědictví 2017.",
        highlight: true
      },
      {
        title: "Poutní areál kostela P. Marie, Horní Police",
        year: "2019–2021",
        description: "Restaurování kamenných prvků a sochařských děl poutního areálu. Ocenění v soutěži Stavba roku 2021 – Cena Ministerstva kultury ČR.",
        highlight: true
      },
      {
        title: "Mariánský sloup K. Videmanna, Plzeň",
        year: "2020–2021",
        description: "Komplexní restaurování historického Mariánského sloupu z roku 1681 na náměstí Republiky včetně zlacení. Nominace na cenu NPÚ Patrimonium pro futuro (2022).",
        highlight: false
      }
    ]
  },
  {
    period: "Klíčové realizace 2003–2016",
    projects: [
      {
        title: "Sousoší Korunovace P. Marie, Starý Rokytník",
        year: "2016",
        description: "Kompletní rekonstrukce barokního sousoší zahrnující restaurování kamene a štuku s doplněním chybějících částí."
      },
      {
        title: "Chrám sv. Barbory, Kutná Hora",
        year: "2011",
        description: "Restaurování vnějšího pláště národní kulturní památky."
      },
      {
        title: "Sluneční brána M.B. Brauna, zámek Hořovice",
        year: "2010",
        description: "Restaurování významného barokního díla s podrobným průzkumem a konservací kamenných prvků."
      },
      {
        title: "Liebiegova vila (A. Burger, 1902), Liberec",
        year: "2010",
        description: "Rekonstrukce historické vily z počátku 20. století."
      },
      {
        title: "Křížová cesta, Františkánský klášter Kadaň",
        year: "2007",
        description: "Restaurování křížové cesty v klášterním areálu."
      },
      {
        title: "Fontána Napájení Héliových koní I.F. Platzera, zámek Dobříš",
        year: "2006–2008",
        description: "Víceetapové restaurování barokní fontány."
      },
      {
        title: "Městské lázně (A. Burger, 1902), Liberec",
        year: "2006–2009",
        description: "Víceetapová rekonstrukce historického lázeňského objektu."
      },
      {
        title: "Čtyři roční období M.B. Brauna, Teplice",
        year: "2005",
        description: "Restaurování sochařských děl M.B. Brauna v Zahradním a plesovém domě."
      },
      {
        title: "Mariánský sloup G.B. Bully, Hradec Králové",
        year: "2004",
        description: "Restaurování Mariánského sloupu na Velkém náměstí."
      },
      {
        title: "Transfér šesti soch I.F. Platzera, zámek Dobříš",
        year: "2004",
        description: "Odborný přesun a instalace barokních soch."
      },
      {
        title: "Sousoší Kalvárie, Benešov nad Ploučnicí",
        year: "2003",
        description: "Restaurování sochařské skupiny Kalvárie."
      }
    ]
  },
  {
    period: "Významné projekty 1993–2002",
    projects: [
      {
        title: "Sousoší Kalvárie a tři portály, klášter Broumov NKP",
        year: "2002",
        description: "Restaurování sochařské výzdoby a architektonických prvků národní kulturní památky."
      },
      {
        title: "Muzeum východních Čech (J. Kotěra) NKP, Hradec Králové",
        year: "2000–2002",
        description: "Rekonstrukce interiérů modernistické budovy s odborným dozorem."
      },
      {
        title: "Dvorana Akademie věd NKP, Národní třída Praha",
        year: "1998",
        description: "Restaurování interiéru historické dvorany."
      },
      {
        title: "Zvonice chrámu sv. Mikuláše, Malá Strana",
        year: "1996",
        description: "Rekonstrukce fasád zvonice na Malé Straně v Praze."
      },
      {
        title: "Astronomická věž Klementina NKP",
        year: "1990s",
        description: "Rekonstrukce fasád včetně sochy Atlanta od M.B. Brauna."
      },
      {
        title: "Mariánský sloup M.B. Brauna, Jaroměř",
        year: "1992–1996",
        description: "Restaurování a vytvoření kopií na významném barokním sloupu."
      }
    ]
  },
  {
    period: "Mariánské a trojiční sloupy 1985–1994",
    projects: [
      {
        title: "Mariánské a trojiční sloupy",
        year: "1985–1994",
        description: "Série restaurátorských prací na mariánských a trojiních sloupech: Odolená Voda (1985), Vizovice (1986), Žatec (1987), Klášterec nad Ohří (1988), Skuteč (1991), Ústí nad Orlicí (1994)."
      }
    ]
  },
  {
    period: "Restaurátorské zakázky 1981–1996",
    projects: [
      {
        title: "Obecní dům, Praha",
        year: "1995–1996",
        description: "Restaurování architektury a sochařské výzdoby secesní budovy."
      },
      {
        title: "Prašná brána, Praha",
        year: "1991–1992",
        description: "Restaurování sochařské výzdoby gotické brány."
      },
      {
        title: "Sousoší sv. Jana z Mathy a Fr. Xaverského, Karlův most",
        year: "1986–1988",
        description: "Restaurování barokního sousoší od F.M. Brokofa na Karlově mostě."
      },
      {
        title: "Reliéf Ukřižování, chrám P. Marie před Týnem",
        year: "1986–1988",
        description: "Kopie reliéfu severního portálu gotického chrámu."
      },
      {
        title: "Socha Minervy od M.B. Brauna, Clam-Gallasův palác",
        year: "1986",
        description: "Kopie barokní sochy pro pražský palác."
      },
      {
        title: "Socha sv. Jana Evangelisty, Kalvárie Na Pohořelci",
        year: "1981",
        description: "Kopie sochy pro pražskou Kalvárii."
      }
    ]
  }
];

const collaborators = "Dlouhodobá spolupráce s předními restaurátory: Jiří Švec, Petr Siegl, Jiří Živný, Jiří Středa, Jiří Seifert, Lenka Beranová a další. Stálý tým od 2003: Ing. Oldřich Hnětynka, Nina Jindřichová, David Seidl, Eduard Boris, Daniel Bartoš.";

const professionalActivities = [
  "Člen odborné komise pro restaurování a konzervaci památek Ministerstva kultury ČR (1994–1999)",
  "Člen Umělecké rady Fakulty restaurování Univerzity Pardubice v Litomyšli (od 2006)",
  "Člen Asociace restaurátorů (od 1992)"
];

const References = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

          <div className="max-w-5xl mx-auto space-y-12">
            {references.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                <h2 className="text-3xl font-bold text-primary border-b pb-3">
                  {section.period}
                </h2>
                <div className="grid gap-6">
                  {section.projects.map((project, projectIndex) => (
                    <Card 
                      key={projectIndex} 
                      className={`shadow-soft hover:shadow-elegant transition-all duration-300 ${
                        project.highlight ? 'border-primary/50' : ''
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <span className="text-base font-semibold text-primary shrink-0">
                            {project.year}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Professional Activities Section */}
            <div className="mt-16 space-y-6">
              <h2 className="text-3xl font-bold text-primary border-b pb-3">
                Profesní aktivity
              </h2>
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {professionalActivities.map((activity, index) => (
                      <li key={index} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Collaborators Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary border-b pb-3">
                Spolupracující restaurátoři
              </h2>
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {collaborators}
                  </p>
                </CardContent>
              </Card>
            </div>
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
