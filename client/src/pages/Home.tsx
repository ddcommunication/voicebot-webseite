import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Clock, Users, ArrowRight, Shield, BarChart3, Headphones } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-main.jpg" 
            alt="Professioneller Voicebot Service" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container relative z-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-secondary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Die Zukunft der Telefonie
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight tracking-tight">
              Voicebots für Unternehmen – <br/>
              <span className="text-secondary">damit Ihr Telefon wirklich abnimmt.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Schluss mit verpassten Anrufen und Warteschleifen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – freundlich, zuverlässig und rund um die Uhr.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/kontakt">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                  Demo & Beratung anfragen
                </Button>
              </Link>
              <Link href="/loesungen">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-white h-14 text-lg backdrop-blur-sm">
                  Beispiel-Dialoge anhören
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/10">
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-primary-foreground/60">Erreichbarkeit</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-primary-foreground/60">Annahmequote</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">DSGVO</div>
                <div className="text-sm text-primary-foreground/60">Konform</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Right Side */}
          <div className="hidden md:block relative animate-in slide-in-from-right-5 duration-1000 delay-200">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-white/90 backdrop-blur-md p-6 text-foreground">
              <div className="mb-6 border-b border-border pb-4">
                <h3 className="font-bold text-xl text-primary">Kurzer Weg zur Demo</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Zwei, drei Eckdaten genügen – wir melden uns mit einem Vorschlag.
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="hero-company" className="text-sm font-medium">Firma</label>
                  <Input id="hero-company" placeholder="z. B. Müller Haustechnik GmbH" className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hero-phone" className="text-sm font-medium">Telefon</label>
                  <Input id="hero-phone" type="tel" placeholder="+49 ..." className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="hero-topic" className="text-sm font-medium">Worum geht's?</label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zentrale">Telefonzentrale / Erstannahme</SelectItem>
                      <SelectItem value="termin">Terminvereinbarung</SelectItem>
                      <SelectItem value="service">Service & häufige Fragen</SelectItem>
                      <SelectItem value="lead">Lead-Qualifizierung</SelectItem>
                      <SelectItem value="standorte">Mehrere Standorte / Teams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold mt-2">
                  Anfrage senden
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Unverbindlich & kostenlos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Die Lösung für überlastete Telefonleitungen
            </h2>
            <p className="text-lg text-muted-foreground">
              In vielen Betrieben entscheidet ein einziges Telefonat über Auftrag oder Absage. Ein Voicebot sorgt dafür, dass Sie erreichbar bleiben, ohne dass Ihr Team ständig im Stress ist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">24/7 Erreichbarkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ihr Voicebot schläft nie. Er nimmt Anrufe auch nachts, am Wochenende oder an Feiertagen entgegen und erfasst alle wichtigen Informationen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">Team-Entlastung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Weniger Routine, mehr Zeit fürs Wesentliche. Der Bot filtert Standardfragen und verbindet nur komplexe Fälle an Ihre Mitarbeiter weiter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">Mehr Umsatz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Kein Lead geht mehr verloren. Jeder Anrufer wird bedient, qualifiziert und bei Bedarf direkt terminiert. Keine "Besetzt"-Zeichen mehr.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section with Image */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-xl transform -rotate-2"></div>
              <img 
                src="/images/solutions-tech.jpg" 
                alt="Voicebot Technologie Visualisierung" 
                className="relative rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Vielseitig einsetzbar in jeder Branche
                </h2>
                <p className="text-lg text-muted-foreground">
                  Unsere Voicebots sind flexibel und passen sich Ihren Prozessen an. Hier sind einige typische Anwendungsfälle:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Telefonzentrale & Erstannahme</h3>
                    <p className="text-muted-foreground">Nimmt jedes Gespräch an, erkennt Abteilungen und leitet gezielt weiter.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Terminvereinbarung</h3>
                    <p className="text-muted-foreground">Fragt passende Zeiten ab, erkennt Notfälle und synchronisiert Kalender.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">Service & FAQ</h3>
                    <p className="text-muted-foreground">Beantwortet Standardfragen zu Öffnungszeiten, Status oder Leistungen automatisch.</p>
                  </div>
                </div>
              </div>

              <Link href="/loesungen">
                <Button variant="link" className="text-primary font-semibold p-0 h-auto hover:text-secondary transition-colors group">
                  Alle Anwendungsfälle ansehen <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Branchenlösungen
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Wir verstehen die spezifischen Anforderungen Ihrer Branche.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Handwerk & Bau",
              "Praxen & Gesundheit",
              "Immobilien & Verwaltung",
              "Hotellerie & Service",
              "Kanzleien & Beratung",
              "Mittelstand & Industrie"
            ].map((industry, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-default">
                <h3 className="font-bold text-lg text-white mb-2">{industry}</h3>
                <p className="text-sm text-primary-foreground/60">Spezialisierte Dialoge und Prozesse für {industry}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles, was Sie über Voicebots wissen müssen.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Was ist der Unterschied zu einem klassischen Sprachmenü?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ein Sprachmenü arbeitet starr mit Tastendrücken ("Drücken Sie die 1..."). Ein Voicebot versteht gesprochene Anliegen, stellt Rückfragen und führt durch den Prozess – deutlich natürlicher, schneller und kundenfreundlicher.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Versteht der Bot auch Dialekte?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Ja, moderne KI-Modelle sind sehr robust gegenüber Dialekten und Umgangssprache. Zudem trainieren wir den Bot kontinuierlich mit echten Gesprächen aus Ihrem Alltag, sodass er stetig dazulernt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Ist das DSGVO-konform?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolut. Wir setzen auf Datenminimierung, transparente Hinweise im Gespräch und Server-Standorte in der EU. Datenschutz ist ein integraler Bestandteil unserer Architektur.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Wie schnell ist ein Voicebot einsatzbereit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Einfache Use Cases wie eine Rückrufbitte oder Terminannahme können oft innerhalb weniger Tage live gehen. Komplexere Integrationen benötigen etwas mehr Zeit für Konzeption und Tests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                  Bereit für bessere Erreichbarkeit?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Lassen Sie uns gemeinsam herausfinden, wie ein Voicebot Ihr Unternehmen voranbringen kann. Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/kontakt">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                      Kostenlose Beratung
                    </Button>
                  </Link>
                  <Link href="/preise">
                    <Button variant="outline" size="lg">
                      Preise ansehen
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                  <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-600" /> Unverbindlich</span>
                  <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-600" /> Individuell</span>
                  <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-600" /> Transparent</span>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/images/contact-support.jpg" 
                  alt="Zöllner Office Beratung" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
