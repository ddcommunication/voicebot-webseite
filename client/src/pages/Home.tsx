import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Phone, Clock, Users, ArrowRight, Shield, BarChart3, Headphones, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <SEO 
        title="Voicebots für Unternehmen"
        description="Schluss mit verpassten Anrufen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – 24/7."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-dynamic-blue.jpg" 
            alt="Dynamische Voicebot Technologie" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 py-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse shadow-[0_0_10px_#60a5fa]"></span>
              Next Gen Voice AI
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Voicebots, die <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient bg-300%">begeistern</span>. <br/>
              <span className="text-3xl md:text-5xl font-light text-slate-300 block mt-4">Nicht nur abnehmen.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed border-l-4 border-blue-500 pl-6">
              Verwandeln Sie jeden Anruf in ein Erlebnis. Unsere KI-Assistenten verstehen Nuancen, lösen Probleme und schaffen Freiraum für Ihr Team.
            </p>
            
            <div className="pt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-400" /></div>
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-400" /></div>
                <span>Made in Germany</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-400" /></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Extended Contact Form in Hero */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] text-white animate-in slide-in-from-right-5 duration-700 delay-200 border border-white/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-1000"></div>
            
            <h3 className="text-2xl font-bold mb-2 relative z-10">Jetzt durchstarten</h3>
            <p className="text-blue-200 mb-6 relative z-10">Füllen Sie das Formular aus – wir melden uns innerhalb von 24h.</p>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium text-blue-200 uppercase tracking-wider">Ansprechpartner</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Max Mustermann" 
                    className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-medium text-blue-200 uppercase tracking-wider">Firma</label>
                  <input 
                    id="company"
                    type="text" 
                    placeholder="Muster GmbH" 
                    className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-blue-200 uppercase tracking-wider">E-Mail Adresse</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="max@muster.de" 
                  className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-medium text-blue-200 uppercase tracking-wider">Telefon</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="+49 30 12345678" 
                  className="flex h-11 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-blue-200 uppercase tracking-wider">Nachricht (optional)</label>
                <textarea 
                  id="message"
                  placeholder="Wie können wir helfen?" 
                  className="flex min-h-[80px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:border-transparent transition-all"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white h-12 text-lg font-bold rounded-xl shadow-lg shadow-blue-900/20 mt-2 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Kostenlos anfragen
              </Button>
              <p className="text-[10px] text-center text-blue-200/60 mt-4">
                Mit dem Absenden stimmen Sie unserer <Link href="/datenschutz" className="underline hover:text-blue-300">Datenschutzerklärung</Link> zu.
              </p>
            </form>
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
                    <h3 className="font-bold text-lg text-primary">Support & FAQ</h3>
                    <p className="text-muted-foreground">Beantwortet häufige Fragen sofort und entlastet den First-Level-Support.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/loesungen">
                <Button variant="link" className="p-0 h-auto text-primary font-semibold hover:text-secondary transition-colors group text-lg">
                  Alle Lösungen ansehen <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg text-muted-foreground">Alles, was Sie über den Start mit Voicebots wissen müssen.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Wie schnell ist der Voicebot einsatzbereit?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Standard-Lösungen können oft innerhalb von 48 Stunden aktiviert werden. Für komplexere, individuelle Integrationen in Ihre CRM-Systeme benötigen wir in der Regel 2-4 Wochen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Klingt der Bot wie ein Roboter?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Nein. Wir nutzen modernste Neural Text-to-Speech Technologie. Die Stimmen sind kaum von menschlichen Sprechern zu unterscheiden und können sogar Emotionen und Betonungen variieren.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Was passiert, wenn der Bot nicht weiterweiß?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Der Bot erkennt seine Grenzen. In solchen Fällen leitet er das Gespräch nahtlos an einen menschlichen Mitarbeiter weiter ("Human Handover") oder nimmt eine Nachricht auf, die Ihnen per E-Mail zugestellt wird.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Ist das System DSGVO-konform?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolut. Alle Daten werden auf Servern in Deutschland verarbeitet. Wir schließen mit Ihnen einen Auftragsverarbeitungsvertrag (AVV) ab und erfüllen alle gesetzlichen Datenschutzanforderungen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Bereit für das nächste Level?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie ein Voicebot Ihr Unternehmen voranbringen kann. Unverbindlich und kostenlos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Jetzt Beratungstermin buchen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
