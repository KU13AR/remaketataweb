import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, FileCheck } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-hero">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rádi zodpovíme Vaše dotazy a probereme možnosti spolupráce
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
                    <p className="text-muted-foreground text-sm">
                      Kontaktujte mě pro nezávaznou poptávku
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground text-sm">
                      Pro rychlou konzultaci
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Působnost</h3>
                    <p className="text-muted-foreground text-sm">
                      Celá Česká republika
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Povolení</h3>
                    <p className="text-muted-foreground text-sm">
                      MK ČR č. 6278/91 a 8.001/96
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="font-semibold mb-4 text-center">Reference a publikace</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="text-center">
                    Rád poskytnu reference na realizované projekty a další informace o své práci
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <a 
                      href="http://www.socharstvi.webgarden.cz/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Sochařský a štukatérský ateliér
                    </a>
                    <span className="text-border">•</span>
                    <a 
                      href="http://www.kamenictviman.cz/index.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Kamenictví Man
                    </a>
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
