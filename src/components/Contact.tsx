import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, FileCheck, Briefcase, Inbox } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-hero">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rád zodpovím Vaše dotazy a probereme možnosti spolupráce
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Jan Vích</CardTitle>
              <p className="text-center text-muted-foreground">Akademický sochař a restaurátor</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:vichrest1@seznam.cz"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      vichrest1@seznam.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a 
                      href="tel:+420605268730"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +420 605 268 730
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresa</h3>
                    <p className="text-muted-foreground text-sm">
                      Pod Saharou 712<br />
                      252 66 Libčice nad Vltavou<br />
                      Czech Republic
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Povolení</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      MK ČR č. 6278/91 a 8.001/96
                    </p>
                    <a 
                      href="https://rrkp.mkcr.cz/rejstrik/9dwBB4Q" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    >
                      Rejstřík MK ČR →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Živnostenské oprávnění</h3>
                    <p className="text-muted-foreground text-sm">
                      Subjekt: ak.soch. Jan Vích<br />
                      Vznik: 14. 4. 1993<br />
                      IČO: 48090395<br />
                      DIČ: CZ520503370
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Inbox className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Datová schránka</h3>
                    <p className="text-muted-foreground text-sm">
                      ID schránky: g4aivre
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
