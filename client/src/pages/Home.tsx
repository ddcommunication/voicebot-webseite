import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Phone,
  Clock,
  Users,
  ArrowRight,
  Shield,
  BarChart3,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import { generateOrganizationSchema, generateWebSiteSchema, generateFAQSchema } from "@/lib/schema";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebots für Unternehmen"
        description="Schluss mit verpassten Anrufen. Unsere KI-Voicebots nehmen Gespräche an, erfassen Anliegen und buchen Termine – 24/7."
        canonical="/"
        keywords="Voicebot, KI-Sprachassistent, automatische Telefonzentrale, Terminvereinbarung, 24/7 Kundenservice, DSGVO-konform, Made in Germany"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            generateOrganizationSchema(),
            generateWebSiteSchema(),
            generateFAQSchema([
              {
                question: "Wie schnell ist der Voicebot einsatzbereit?",
                answer: "Standard-Lösungen können oft innerhalb von 48 Stunden aktiviert werden. Für komplexere, individuelle Integrationen in Ihre CRM-Systeme benötigen wir in der Regel 2-4 Wochen."
              },
              {
                question: "Klingt der Bot wie ein Roboter?",
                answer: "Nein. Wir nutzen modernste Neural Text-to-Speech Technologie. Die Stimmen sind kaum von menschlichen Sprechern zu unterscheiden und können sogar Emotionen und Betonungen variieren."
              },
              {
                question: "Was passiert, wenn der Bot nicht weiterweiß?",
                answer: "Der Bot erkennt, wenn er an seine Grenzen stößt, und leitet das Gespräch nahtlos an einen Mitarbeiter weiter. Dabei übergibt er alle bereits erfassten Informationen, sodass der Kunde sich nicht wiederholen muss."
              }
            ])
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FsnTgEKaTsmGiZsv.jpg"
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
              Voicebots, die <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient bg-300%">
                begeistern
              </span>
              . <br />
              <span className="text-3xl md:text-5xl font-light text-slate-300 block mt-4">
                Nicht nur abnehmen.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed border-l-4 border-blue-500 pl-6">
              Verwandeln Sie jeden Anruf in ein Erlebnis. Unsere KI-Assistenten
              verstehen Nuancen, lösen Probleme und schaffen Freiraum für Ihr
              Team.
            </p>

            <div className="pt-8 flex flex-wrap gap-6 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                <span>DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                <span>Made in Germany</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="p-1 bg-blue-500/20 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Extended Contact Form in Hero */}
          <ContactForm />
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Die Lösung für professionelle Kommunikation – Ihr intelligenter Sprachassistent
            </h2>
            <p className="text-lg text-muted-foreground">
              In vielen Betrieben entscheidet ein einziges Telefonat über
              Auftrag oder Absage. Ein Voicebot sorgt dafür, dass Sie erreichbar
              bleiben, ohne dass Ihr Team ständig im Stress ist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">
                  24/7 Erreichbarkeit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ihr Voicebot schläft nie. Er nimmt Anrufe auch nachts, am
                  Wochenende oder an Feiertagen entgegen und erfasst alle
                  wichtigen Informationen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Team-Entlastung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Weniger Routine, mehr Zeit fürs Wesentliche. Der Bot filtert
                  Standardfragen und verbindet nur komplexe Fälle an Ihre
                  Mitarbeiter weiter.
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
                  Kein Lead geht mehr verloren. Jeder Anrufer wird bedient,
                  qualifiziert und bei Bedarf direkt terminiert. Keine
                  "Besetzt"-Zeichen mehr.
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/hlgZPasNjAgptxJy.webp"
                alt="Voicebot Technologie Visualisierung"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Vielseitig einsetzbar in jeder Branche
                </h2>
                <p className="text-lg text-muted-foreground">
                  Unsere Voicebots sind flexibel und passen sich Ihren Prozessen
                  an. Hier sind einige typische Anwendungsfälle:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">
                      Telefonzentrale & Erstannahme
                    </h3>
                    <p className="text-muted-foreground">
                      Nimmt jedes Gespräch an, verbindet gezielt weiter und erkennt ob frei oder besetzt ist.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">
                      Terminvereinbarung
                    </h3>
                    <p className="text-muted-foreground">
                      Fragt passende Zeiten ab, erkennt Notfälle und
                      synchronisiert Kalender.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary">
                      Support & FAQ
                    </h3>
                    <p className="text-muted-foreground">
                      Beantwortet häufige Fragen sofort und entlastet den
                      First-Level-Support.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/loesungen">
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary font-semibold hover:text-secondary transition-colors group text-lg"
                >
                  Alle Lösungen ansehen{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-lg text-muted-foreground">
              Alles, was Sie über den Start mit Voicebots wissen müssen.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Wie schnell ist der Voicebot einsatzbereit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Standard-Lösungen können oft innerhalb von 48 Stunden aktiviert
                werden. Für komplexere, individuelle Integrationen in Ihre
                CRM-Systeme benötigen wir in der Regel 2-4 Wochen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Klingt der Bot wie ein Roboter?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Nein. Wir nutzen modernste Neural Text-to-Speech Technologie.
                Die Stimmen sind kaum von menschlichen Sprechern zu
                unterscheiden und können sogar Emotionen und Betonungen
                variieren.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Was passiert, wenn der Bot nicht weiterweiß?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Der Bot erkennt seine Grenzen. In solchen Fällen leitet er das
                Gespräch nahtlos an einen menschlichen Mitarbeiter weiter
                ("Human Handover") oder nimmt eine Nachricht auf, die Ihnen per
                E-Mail zugestellt wird.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Ist das System DSGVO-konform?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Absolut. Alle Daten werden auf Servern in Deutschland
                verarbeitet. Wir schließen mit Ihnen einen
                Auftragsverarbeitungsvertrag (AVV) ab und erfüllen alle
                gesetzlichen Datenschutzanforderungen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Kann ich meine bestehende Telefonnummer behalten?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Ja, Sie können Ihre bestehende Nummer einfach per Rufumleitung
                auf den Voicebot weiterleiten. Alternativ können wir Ihnen auch
                neue Rufnummern aus Ihrem Ortsnetz bereitstellen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                Welche Sprachen spricht der Voicebot?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Unsere Bots beherrschen über 50 Sprachen fließend, darunter
                Deutsch, Englisch, Französisch, Spanisch und Italienisch. Er
                kann sogar die Sprache des Anrufers automatisch erkennen und
                wechseln.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                Wie viel kostet ein Voicebot?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Die Kosten richten sich individuell nach Ihrer Konfiguration und dem Einsatzbereich. 
                Faktoren wie Anrufvolumen, gewünschte Integrationen und spezifische Anforderungen 
                bestimmen den Preis. Kontaktieren Sie uns für ein maßgeschneidertes Angebot, 
                das exakt zu Ihren Bedürfnissen passt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                Kann der Bot Termine direkt in meinen Kalender eintragen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Ja, wir bieten Integrationen für alle gängigen Kalendersysteme
                wie Google Calendar, Outlook, Doctolib, Calendly und viele
                branchenspezifische Softwarelösungen an.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                Gibt es eine Mindestvertragslaufzeit?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Wir glauben an unsere Qualität, nicht an Knebelverträge. Unsere
                Standard-Pakete sind monatlich kündbar. Für Enterprise-Lösungen
                bieten wir attraktive Jahreskonditionen an.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                Wie kann ich den Bot testen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sie können jederzeit eine kostenlose Demo anfordern. Wir richten
                Ihnen gerne einen Testzugang ein, damit Sie die Qualität unserer
                Spracherkennung und Stimmen selbst erleben können.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Bereit für das nächste Level?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Lassen Sie uns gemeinsam herausfinden, wie ein Voicebot Ihr
            Unternehmen voranbringen kann. Unverbindlich und kostenlos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Jetzt Beratungstermin buchen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
