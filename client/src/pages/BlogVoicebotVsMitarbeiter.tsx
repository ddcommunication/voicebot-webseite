import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogVoicebotVsMitarbeiter() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebot vs. Mitarbeiter: Der Kosten-Nutzen-Vergleich"
        description="Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz am Beispiel einer Arztpraxis."
        canonical="/blog/voicebot-vs-mitarbeiter"
      />

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="/images/blog-cost-benefit-professional.jpg"
          alt="Voicebot vs. Mitarbeiter Vergleich"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container max-w-4xl">
            <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              Analyse
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Voicebot vs. Mitarbeiter: Der Kosten-Nutzen-Vergleich
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> 23. Jan 2026
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" /> Zöllner Office
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 -ml-4 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Übersicht
            </Button>
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Die Entscheidung zwischen einem Voicebot und zusätzlichen
              Mitarbeitern ist für viele Unternehmen eine zentrale Frage. In
              diesem Artikel analysieren wir die Kosten, Vorteile und
              Einsatzszenarien beider Optionen am Beispiel einer mittelgroßen
              Arztpraxis.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Die Ausgangssituation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eine Hausarztpraxis mit drei Ärzten erhält täglich etwa 120
              Anrufe. Die Telefonzentrale ist von 8:00 bis 18:00 Uhr besetzt,
              doch in Stoßzeiten (morgens zwischen 8:00 und 10:00 Uhr) sind bis
              zu 40% der Anrufer in der Warteschleife oder erreichen niemanden.
              Außerhalb der Öffnungszeiten gehen alle Anrufe auf den
              Anrufbeantworter – potenzielle Notfälle werden erst am nächsten
              Tag bearbeitet.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Szenario 1: Zusätzliche Mitarbeiter einstellen
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Um die Erreichbarkeit zu verbessern, könnte die Praxis eine
              weitere Teilzeitkraft (20 Stunden/Woche) für die Telefonzentrale
              einstellen.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                Kostenaufstellung Mitarbeiter (pro Monat)
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bruttogehalt (20h/Woche, 15€/h): ca. 1.300€</li>
                <li>• Arbeitgeberanteil Sozialversicherung: ca. 260€</li>
                <li>• Urlaubsvertretung & Krankheitstage: ca. 150€</li>
                <li>• Einarbeitung & Schulung: ca. 100€</li>
                <li className="font-bold pt-2 border-t">
                  Gesamtkosten: ca. 1.810€/Monat
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Vorteile:</strong> Persönlicher Kontakt, Empathie bei
              komplexen Anliegen, flexible Reaktion auf unvorhergesehene
              Situationen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Nachteile:</strong> Begrenzte Verfügbarkeit (nur während
              Arbeitszeiten), keine Skalierbarkeit bei Anrufspitzen, hohe
              Fixkosten auch bei geringem Anrufaufkommen.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Szenario 2: Voicebot implementieren
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ein Voicebot übernimmt die Erstannahme aller Anrufe, kategorisiert
              Anliegen und leitet komplexe Fälle an Mitarbeiter weiter.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                Kostenaufstellung Voicebot (pro Monat)
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lizenzgebühr & Hosting: ca. 299€</li>
                <li>• Gesprächsminuten (120 Anrufe/Tag, Ø 2 Min): ca. 180€</li>
                <li>• Kalenderintegration & CRM-Anbindung: ca. 50€</li>
                <li>• Support & Wartung: ca. 70€</li>
                <li className="font-bold pt-2 border-t">
                  Gesamtkosten: ca. 599€/Monat
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Vorteile:</strong> 24/7 Erreichbarkeit, unbegrenzte
              Skalierbarkeit, konsistente Qualität, automatische
              Terminbuchung, Notfallerkennung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Nachteile:</strong> Einmalige Einrichtungskosten (ca.
              1.500€), weniger Empathie bei emotionalen Anliegen, technische
              Abhängigkeit.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Der direkte Vergleich
            </h2>

            <div className="bg-primary/5 p-8 rounded-lg mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="pb-3 text-primary font-bold">Kriterium</th>
                    <th className="pb-3 text-primary font-bold">Mitarbeiter</th>
                    <th className="pb-3 text-primary font-bold">Voicebot</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-muted">
                    <td className="py-3">Monatliche Kosten</td>
                    <td className="py-3">1.810€</td>
                    <td className="py-3 text-green-600 font-bold">599€</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3">Verfügbarkeit</td>
                    <td className="py-3">20h/Woche</td>
                    <td className="py-3 text-green-600 font-bold">24/7</td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3">Skalierbarkeit</td>
                    <td className="py-3">Begrenzt</td>
                    <td className="py-3 text-green-600 font-bold">
                      Unbegrenzt
                    </td>
                  </tr>
                  <tr className="border-b border-muted">
                    <td className="py-3">Empathie</td>
                    <td className="py-3 text-green-600 font-bold">Hoch</td>
                    <td className="py-3">Mittel</td>
                  </tr>
                  <tr>
                    <td className="py-3">Einarbeitungszeit</td>
                    <td className="py-3">2-4 Wochen</td>
                    <td className="py-3 text-green-600 font-bold">
                      2-3 Tage
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Unser Fazit: Die Hybrid-Lösung
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In der Praxis hat sich eine Kombination bewährt: Der Voicebot
              übernimmt die Erstannahme, kategorisiert Anliegen und bucht
              Routinetermine automatisch. Komplexe Fälle oder emotionale
              Gespräche werden nahtlos an menschliche Mitarbeiter weitergeleitet
              (Human Handover).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Durch diese Hybrid-Lösung spart die Praxis etwa 67% der Kosten im
              Vergleich zur reinen Mitarbeiter-Lösung, während die
              Patientenzufriedenheit sogar steigt: Wartezeiten sinken, die
              Erreichbarkeit verbessert sich drastisch, und die vorhandenen
              Mitarbeiter können sich auf komplexe Anliegen konzentrieren.
            </p>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mt-8">
              <p className="text-lg font-semibold text-primary mb-2">
                Rechenbeispiel über 12 Monate
              </p>
              <p className="text-muted-foreground mb-4">
                Mitarbeiter: 1.810€ × 12 = 21.720€
                <br />
                Voicebot: 599€ × 12 + 1.500€ Einrichtung = 8.688€
                <br />
                <span className="text-green-600 font-bold">
                  Ersparnis: 13.032€ im ersten Jahr
                </span>
              </p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Für wen lohnt sich ein Voicebot?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ein Voicebot ist besonders sinnvoll, wenn:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Sie mehr als 50 Anrufe pro Tag erhalten</li>
              <li>
                Viele Anrufe außerhalb der Geschäftszeiten eingehen (Notdienst,
                internationale Kunden)
              </li>
              <li>
                Standardanfragen einen Großteil der Anrufe ausmachen
                (Terminbuchungen, Öffnungszeiten, Bestellstatus)
              </li>
              <li>
                Sie Ihre Mitarbeiter von Routineaufgaben entlasten möchten
              </li>
              <li>Skalierbarkeit wichtig ist (z.B. saisonale Schwankungen)</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              Für kleinere Unternehmen mit weniger als 20 Anrufen pro Tag oder
              sehr spezialisierten Beratungsleistungen kann ein menschlicher
              Mitarbeiter die bessere Wahl sein. In allen anderen Fällen lohnt
              sich zumindest ein Pilotprojekt mit einem Voicebot – die
              Investition amortisiert sich in der Regel innerhalb von 3-6
              Monaten.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interessiert an einer individuellen Kosten-Nutzen-Analyse?
            </h3>
            <p className="text-muted-foreground mb-6">
              Wir erstellen Ihnen eine maßgeschneiderte Kalkulation für Ihr
              Unternehmen – kostenlos und unverbindlich.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
              >
                Jetzt Beratung anfragen
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
