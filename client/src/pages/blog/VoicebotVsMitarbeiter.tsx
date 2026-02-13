import SEO from "@/components/SEO";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check, X, Clock, Euro, Phone } from "lucide-react";
import { Link } from "wouter";

export default function VoicebotVsMitarbeiter() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: "Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen",
        description: "Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz.",
        url: "https://www.zoellner-office.de/blog/voicebot-vs-mitarbeiter",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg",
        datePublished: "2026-01-23",
        dateModified: "2026-02-13"
      }),
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Voicebot vs. Mitarbeiter", url: "/blog/voicebot-vs-mitarbeiter" }
      ])
    ]
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebot vs. Mitarbeiter: Ein Vergleich"
        description="Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz."
        canonical="/blog/voicebot-vs-mitarbeiter"
        type="article"
        keywords="Voicebot, Kosten-Nutzen-Vergleich, Arztpraxen, Mitarbeiter, Effizienz, ROI"
        schema={articleSchema}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg"
          alt="Voicebot vs. Mitarbeiter Kostenvergleich"
          className="w-full h-full object-cover"
        />
      </div>

      <article className="bg-background py-20 -mt-32 relative z-10">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Übersicht
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-12 text-sm">
            <span>23. Jan 2026</span>
            <span>•</span>
            <span>Lesezeit: 5 Min.</span>
            <span>•</span>
            <span>Von Zöllner Office</span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            Das Telefon klingelt ununterbrochen. Die medizinischen
            Fachangestellten (MFA) hetzen zwischen Anmeldung,
            Behandlungszimmer und Telefon hin und her. Patienten in der
            Warteschleife sind genervt, Termine gehen verloren. Ein Szenario,
            das viele Praxisinhaber nur zu gut kennen. Doch lohnt sich die
            Investition in einen KI-Voicebot wirklich? Wir machen den harten
            Fakten-Check.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Das Problem: Die "Telefon-Falle"
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            In einer durchschnittlichen Hausarztpraxis gehen täglich zwischen
            50 und 150 Anrufe ein. Etwa 70% davon sind Routineanfragen:
            Terminvereinbarungen, Rezeptbestellungen oder Fragen zu
            Öffnungszeiten. Wenn eine MFA jeden dieser Anrufe persönlich
            entgegennimmt, bindet das wertvolle Arbeitszeit – Zeit, die für
            die Patientenversorgung fehlt.
          </p>

          {/* Comparison Cards */}
          <div className="my-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-red-50 border-red-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <X className="w-5 h-5 mr-2" /> Status Quo (Mensch)
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Erreichbar nur zu Sprechzeiten (ca. 30h/Woche)</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-4 h-4 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Besetztzeichen bei hohem Aufkommen</span>
                  </li>
                  <li className="flex items-start">
                    <Euro className="w-4 h-4 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                    <span>Hohe Personalkosten für Routineaufgaben</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2" /> Mit Voicebot (KI)
                </h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>24/7 Erreichbarkeit (168h/Woche)</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Nimmt unbegrenzt viele Anrufe gleichzeitig an</span>
                  </li>
                  <li className="flex items-start">
                    <Euro className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>Fixe monatliche Pauschale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Die Rechnung: Kostenvergleich
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Lassen Sie uns rechnen. Eine MFA verdient inklusive
            Arbeitgeberanteilen ca. 25€ pro Stunde. Wenn sie täglich 2 Stunden
            nur mit Telefonieren verbringt (was konservativ geschätzt ist),
            kostet das die Praxis:
          </p>
          <ul className="space-y-3 mb-6 ml-6">
            <li className="text-base">
              <strong className="font-semibold">Täglich:</strong> 50€
            </li>
            <li className="text-base">
              <strong className="font-semibold">Monatlich (20 Tage):</strong> 1.000€
            </li>
            <li className="text-base">
              <strong className="font-semibold">Jährlich:</strong> 12.000€
            </li>
          </ul>
          <p className="text-base mb-6 leading-relaxed">
            Ein professioneller Voicebot kostet im Vergleich
            dazu oft nur einen Bruchteil – meist zwischen 100€ und 300€ im
            Monat, je nach Funktionsumfang.{" "}
            <strong className="font-semibold">Die Ersparnis liegt also bei über 70%.</strong>
          </p>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Qualität und Patientenzufriedenheit
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            "Aber wollen meine Patienten nicht lieber mit einem Menschen
            sprechen?" Das ist der häufigste Einwand. Die Realität zeigt
            jedoch: Patienten wollen vor allem eines –{" "}
            <strong className="font-semibold">schnell ihr Ziel erreichen</strong>. Nichts frustriert
            mehr als 10 Minuten Warteschleife, nur um ein Rezept zu bestellen.
          </p>
          <p className="text-base mb-6 leading-relaxed">
            Ein moderner KI-Voicebot versteht natürliche Sprache. Der Patient
            sagt einfach: "Ich brauche ein neues Rezept für meine
            Blutdrucktabletten", und der Bot erfasst Name, Geburtsdatum und
            Medikament. Das dauert 30 Sekunden. Kein Warten, kein Stress.
          </p>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Fazit: Eine Investition, die sich sofort rechnet
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Der Einsatz eines Voicebots ist keine Frage von "Mensch gegen
            Maschine". Es geht darum, dem Personal den Rücken freizuhalten für
            das, was wirklich zählt: die Arbeit am Menschen. Die Technik
            übernimmt die Bürokratie.
          </p>
          <p className="text-base mb-6 leading-relaxed">
            Für Arztpraxen, Handwerksbetriebe und Kanzleien ist der Voicebot
            heute kein Luxus mehr, sondern ein notwendiges Werkzeug gegen
            Fachkräftemangel und Überlastung.
          </p>

          {/* CTA Box */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Möchten Sie Ihre Erreichbarkeit testen?
            </h3>
            <p className="mb-6 text-muted-foreground text-base">
              Lassen Sie uns gemeinsam herausfinden, wie viel Zeit und Geld Sie
              sparen können.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-primary text-primary-foreground">
                Kostenlose Beratung vereinbaren
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="bg-muted/30 py-16">
        <div className="container max-w-5xl">
          <h3 className="text-3xl font-bold mb-8 text-center">Weitere interessante Artikel</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/zukunft-kundenservice" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/cWJnjiaMnKxmewHD.jpg"
                  alt="Zukunft des Kundenservice"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3">Warum Voicebots die Zukunft des Kundenservice sind</h4>
                  <p className="text-muted-foreground text-base">
                    Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/blog/perfekte-begruessung" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FyIGbdGFeQuXelAa.jpg"
                  alt="Perfekte Voicebot-Begrüßung"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3">5 Tipps für die perfekte Voicebot-Begrüßung</h4>
                  <p className="text-muted-foreground text-base">
                    Der erste Eindruck zählt. So gestalten Sie Dialoge, die begeistern.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
