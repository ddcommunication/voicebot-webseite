import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, User, ArrowLeft, Shield, Clock, Phone, Settings, Globe } from "lucide-react";
import { Link } from "wouter";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function BlogNiaFrontDesk() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Nia FrontDesk: Der KI-Sprachassistent von NFON im Test"
        description="Nia FrontDesk von NFON im Test: KI-Sprachassistent für automatische Anrufannahme, FAQ-Beantwortung und intelligente Weiterleitung – DSGVO-konform, 24/7 verfügbar."
        canonical="/blog/nia-frontdesk-nfon"
        keywords="Nia FrontDesk, NFON, KI-Sprachassistent, digitale Empfangslösung, Voicebot, automatische Telefonzentrale, DSGVO"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            generateBreadcrumbSchema([
              { name: "Startseite", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Nia FrontDesk: Der KI-Sprachassistent von NFON im Test", url: "/blog/nia-frontdesk-nfon" },
            ]),
          ],
        }}
      />

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/nia-frontdesk-ki-sprachassistent-nfon_faa91405.webp"
          alt="Moderner Unternehmensempfang mit KI-Sprachassistent – Nia FrontDesk von NFON"
          className="w-full h-full object-cover"
          width="1366"
          height="768"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container max-w-4xl">
            <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              Produkttest
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nia FrontDesk: Der KI-Sprachassistent von NFON im Test
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> 21. Apr 2026
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
            {/* Intro */}
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Wer kennt das nicht: Das Telefon klingelt, alle Mitarbeiter sind beschäftigt,
              der Anrufer landet in der Warteschleife oder hängt auf. Genau hier setzt{" "}
              <strong>Nia FrontDesk von NFON</strong> an – ein KI-Sprachassistent, der
              Anrufe selbstständig entgegennimmt, Standardfragen beantwortet und Gespräche
              an die richtige Person weiterleitet. Rund um die Uhr, ohne Pause, ohne
              Vertretungsregelung.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Was ist Nia FrontDesk?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nia FrontDesk ist eine cloudbasierte Empfangslösung des deutschen
              Telefonieanbieters NFON. Sie läuft vollständig in der NFON-Cloudtelefonanlage,
              braucht keine zusätzliche Hardware und lässt sich laut Hersteller in wenigen
              Minuten einrichten – ohne technische Vorkenntnisse.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Im Kern funktioniert das System so: Ein Anrufer meldet sich, Nia FrontDesk
              begrüßt ihn auf natürliche Weise, versteht sein Anliegen per Spracherkennung
              und reagiert entsprechend. Entweder beantwortet sie die Frage direkt oder
              verbindet den Anrufer mit dem richtigen Ansprechpartner. Ist die gesuchte
              Person gerade nicht erreichbar, schlägt die KI Alternativen vor, statt
              einfach aufzulegen.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-6">
              Was kann der KI-Sprachassistent konkret?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Im Alltag deckt Nia FrontDesk vor allem drei Szenarien ab:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 bg-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Anrufqualifizierung</h3>
                  <p className="text-sm text-muted-foreground">
                    Die KI erkennt, worum es geht, bevor ein Mensch ans Telefon geht.
                    Wer nach der Buchhaltung fragt, landet dort. Wer nach „Maria" fragt,
                    wird direkt verbunden.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">FAQ-Beantwortung</h3>
                  <p className="text-sm text-muted-foreground">
                    Öffnungszeiten, Adresse, Parkmöglichkeiten, Produktgrundlagen: Rund
                    90 Prozent der Routinefragen soll Nia FrontDesk laut NFON ohne
                    menschliche Hilfe klären können. Das klingt ehrgeizig, deckt sich aber
                    mit dem, was andere Unternehmen aus der Praxis berichten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">24/7-Verfügbarkeit</h3>
                  <p className="text-sm text-muted-foreground">
                    Nach Feierabend, an Feiertagen, beim Mittagessen. Der Assistent nimmt
                    immer ab. Für viele Unternehmen ist das allein schon ein Argument.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Spracherkennung ist mehrsprachig ausgelegt und speziell für Deutsch und
              regionale Dialekte trainiert – ein Punkt, der bei anderen Systemen oft
              schwächelt.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Für wen lohnt sich Nia FrontDesk?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NFON positioniert das Produkt vor allem für Unternehmen mit hohem
              Anrufaufkommen und wiederkehrenden Standardanfragen: Arztpraxen,
              Versicherungen, Behörden, Einzelhandelsfilialen, Kanzleien. Überall dort,
              wo die Rezeption oder der Empfang täglich mit den immer gleichen Fragen
              konfrontiert wird, macht ein solcher Assistent Sinn.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Interessant ist auch der Ansatz für kleinere Betriebe ohne eigene
              Empfangskraft. Statt einen externen Anrufservice zu buchen, übernimmt Nia
              FrontDesk die erste Kontaktstelle – zu deutlich niedrigeren laufenden Kosten
              und ohne Einarbeitungszeit.
            </p>

            {/* Section 4 – Datenschutz */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Datenschutz und Sicherheit
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6 flex gap-4">
              <Shield className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-800 mb-2">DSGVO-konform & BSI-zertifiziert</p>
                <p className="text-sm text-muted-foreground">
                  Alle Daten verarbeitet NFON in europäischen Rechenzentren. Das System ist
                  DSGVO-konform, und NFON hat sowohl das BSI-C5-Typ-1- als auch das
                  Typ-2-Testat erhalten – eine der strengsten Sicherheitszertifizierungen
                  für Cloudanbieter im deutschsprachigen Raum. Für Betriebe im
                  Gesundheitswesen oder öffentliche Träger ist das kein unwichtiger Punkt.
                </p>
              </div>
            </div>

            {/* Section 5 – Einrichtung */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Einrichtung und Kündigung
            </h2>

            <div className="bg-muted/30 rounded-xl p-6 mb-6 flex gap-4">
              <Settings className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-primary mb-2">Einfache Einrichtung über das NFON-Portal</p>
                <p className="text-sm text-muted-foreground">
                  Wer Nia FrontDesk testen will: Die Einrichtung läuft komplett über das
                  NFON-Portal, eine Rufnummer wird zugewiesen, Dialoge und Weiterleitungen
                  konfiguriert. Das klingt einfacher als es bei manchen Konkurrenzlösungen
                  ist. Kündbar ist das Produkt monatlich.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 mt-12 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Interesse an einem NFON-Voicebot für Ihr Unternehmen?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Als zertifizierter NFON-Partner beraten wir Sie zu Nia FrontDesk und
                weiteren KI-Telefonielösungen – kostenlos und unverbindlich.
              </p>
              <Link href="/kontakt">
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-3 h-auto"
                >
                  Jetzt kostenlose Beratung anfragen
                </Button>
              </Link>
            </div>

            {/* FAQ Accordion */}
            <h2 className="text-2xl font-bold text-primary mt-12 mb-6">
              FAQ: Häufige Fragen zu Nia FrontDesk
            </h2>

            <Accordion type="single" collapsible className="w-full mb-12">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Was ist Nia FrontDesk von NFON?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Nia FrontDesk ist ein KI-Sprachassistent, der Anrufe automatisch
                  entgegennimmt, Standardfragen beantwortet und Gespräche intelligent
                  weiterleitet. Er ist direkt in die NFON-Cloudtelefonie integriert und
                  rund um die Uhr verfügbar.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Wie wird Nia FrontDesk eingerichtet?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Die Einrichtung erfolgt im NFON-Portal ohne technische Vorkenntnisse.
                  Rufnummer zuweisen, Dialoge konfigurieren, Weiterleitungsregeln festlegen
                  – fertig. Laut NFON dauert das nur wenige Minuten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Ist Nia FrontDesk DSGVO-konform?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ja. Alle Daten werden ausschließlich in europäischen Rechenzentren
                  verarbeitet. NFON verfügt über das BSI-C5-Testat (Typ 1 und Typ 2).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Welche Sprachen unterstützt Nia FrontDesk?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Das System ist mehrsprachig ausgelegt, mit besonderer Optimierung für
                  Deutsch und lokale Dialekte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Wie viel kostet Nia FrontDesk und wie läuft die Kündigung?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Konkrete Preise kommuniziert NFON auf Anfrage. Das Produkt lässt sich
                  monatlich kündigen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-base font-semibold text-left">
                  Ersetzt Nia FrontDesk das NFON Operator Panel?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Nein. Nia FrontDesk ist eine eigenständige Lösung und kein Ersatz für
                  das Operator-Dashboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Back link */}
            <div className="border-t pt-8">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="-ml-4 text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Zurück zur Blog-Übersicht
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
