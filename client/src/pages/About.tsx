import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <div className="container relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Über Zöllner Office</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Wir verbinden menschlichen Service mit künstlicher Intelligenz. Unsere Mission: Unternehmen erreichbar machen und Mitarbeiter entlasten.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/images/about-team.jpg" 
                alt="Das Team von Zöllner Office" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-border max-w-xs hidden md:block">
                <p className="font-serif italic text-primary text-lg">"Technologie ist am besten, wenn sie den Menschen dient, nicht ersetzt."</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Unsere Geschichte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gegründet mit der Vision, den telefonischen Kundenservice zu revolutionieren, hat sich Zöllner Office zu einem führenden Anbieter für Voicebot-Lösungen entwickelt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir haben erkannt, dass viele Unternehmen unter der Last ständiger Erreichbarkeit leiden. Das Telefon klingelt, die Arbeit bleibt liegen, und am Ende sind Kunden und Mitarbeiter frustriert.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Antwort darauf ist nicht einfach "ein Anrufbeantworter", sondern ein intelligenter Assistent, der versteht, antwortet und handelt. Wir kombinieren modernste KI-Technologie mit tiefem Verständnis für geschäftliche Prozesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Unsere Werte</h2>
            <p className="text-lg text-muted-foreground">
              Was uns antreibt und wie wir arbeiten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Qualität vor Quantität</h3>
              <p className="text-muted-foreground">
                Wir setzen nicht auf Masse, sondern auf maßgeschneiderte Lösungen, die wirklich funktionieren. Jeder Bot wird individuell auf Ihre Bedürfnisse trainiert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Transparenz & Vertrauen</h3>
              <p className="text-muted-foreground">
                Keine versteckten Kosten, keine leeren Versprechen. Wir kommunizieren offen, was möglich ist und was (noch) nicht. Datenschutz ist für uns nicht verhandelbar.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Innovation mit Sinn</h3>
              <p className="text-muted-foreground">
                Wir nutzen KI nicht als Selbstzweck, sondern um echte Probleme zu lösen. Technologie muss dem Menschen dienen und den Arbeitsalltag erleichtern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Werden Sie Teil der Zukunft</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Lassen Sie uns gemeinsam Ihren Kundenservice auf das nächste Level heben.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
