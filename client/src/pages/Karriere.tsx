import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Headphones, Rocket } from "lucide-react";
import SEO from "@/components/SEO";

export default function Karriere() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Karriere & Jobs"
        description="Werde Teil unseres Teams und gestalte die Zukunft der Kommunikation mit KI-Voicebots."
        canonical="/karriere"
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Gestalte die Zukunft mit uns
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
            Wir suchen Talente, die mit Leidenschaft an der Schnittstelle von
            Mensch und KI arbeiten wollen.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-muted/30 border-none">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Wir arbeiten mit den neuesten KI-Technologien.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Entwicklung</h3>
                <p className="text-muted-foreground">
                  Lerne täglich dazu und wachse über dich hinaus.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-none">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Teamgeist</h3>
                <p className="text-muted-foreground">
                  Flache Hierarchien und ein unterstützendes Umfeld.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Offene Stellen
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">
                    Senior Frontend Developer (m/w/d)
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Remote / Berlin • Vollzeit
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">
                    AI Conversation Designer (m/w/d)
                  </CardTitle>
                  <p className="text-muted-foreground">Berlin • Vollzeit</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl mb-2">
                    Sales Manager B2B (m/w/d)
                  </CardTitle>
                  <p className="text-muted-foreground">Remote • Vollzeit</p>
                </div>
                <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Keine passende Stelle dabei?
            </p>
            <Button variant="outline">Initiativbewerbung senden</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
