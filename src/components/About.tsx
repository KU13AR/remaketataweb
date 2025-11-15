export const About = () => {
  return (
    <section id="o-mne" className="py-20 bg-card">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            O mně
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-lg leading-relaxed text-left text-foreground">
                Narodil jsem se v roce <strong>1952</strong> v <strong>Hradci Králové</strong>, po ukončení středoškolského obecného vzdělání v Brně jsem absolvoval v letech <strong>1970–1974</strong> studia na <strong>Střední odborné škole kamenosochařské v Hořicích v Podkrkonoší</strong>. 
              </p>
              <p className="text-lg leading-relaxed text-left text-foreground">
                V letech <strong>1974–1980</strong> jsem studoval na <strong>Akademii výtvarných umění v Praze</strong> v oboru sochařství se zaměřením na restaurování sochařských děl v kameni. 
              </p>
              <p className="text-lg leading-relaxed text-left text-foreground">
                Od roku <strong>1981</strong> vykonávám samostatnou činnost v oboru.
              </p>
            </div>
            <div className="lg:w-1/2">
              {/* Prostor pro fotografii */}
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              Dodávám a zajišťuji tyto práce:
            </p>
            
            <div className="space-y-8 mt-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Restaurátorské průzkumy, odborné posudky a projekty</h3>
                <p className="text-muted-foreground">
                  Včetně laboratorních analýz a jejich vyhodnocení.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Restaurátorské práce</h3>
                <p className="text-muted-foreground mb-4">
                  V interiéru i exteriéru v těchto oborech:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sochařská díla v kameni a štuku</li>
                  <li>• Kamenná architektura, obnova fasád, včetně rekonstrukcí</li>
                  <li>• Provádění kopií a faximilí sochařských děl a architektury</li>
                  <li>• Odborné transféry sochařských děl a architektury</li>
                  <li>• Obnova kamenných fasád historických budov, včetně dekorativních prvků</li>
                  <li>• Kamenické práce, obnova, včetně zhotovení nových prvků</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Garantovaný tým</h3>
                <p className="text-muted-foreground">
                  Plnění zakázek většího rozsahu garantuji stálým týmem restaurátorů a specializovaných řemeslníků. 
                  Realizace rozsáhlých zakázek se vždy fyzicky účastním, spolu se svými spolupracovníky, 
                  <strong> Ing. Oldřichem Hnětynkou, Davidem Seidlem a Eduardem Borisem</strong>.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Odborný restaurátorský dohled</h3>
                <p className="text-muted-foreground">
                  Koordinace prací na památkových objektech, v souladu se záměry a závaznými stanovisky 
                  orgánů Státní památkové péče a příslušných odborů státní správy.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6 bg-accent/5 p-4 rounded-r-lg">
                <p className="text-foreground font-medium">
                  ✓ Jsem pojištěn na rizika spojená s výkonem profese, do výše 5 mil. Kč.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic mt-8 pt-6 border-t">
              Výše uvedené práce provádím na základě povolení MK ČR, č. 6278/91 a 8.001/96. 
              Práce na kulturních památkách jsou prováděny dle Zákona o památkové péči č. 20/1987 Sb. 
              a jeho následných novel v aktuálním znění.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
