import SEO from "@/components/SEO";
import { ArrowLeft, TrendingUp, Calculator, Users, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { generateOrganizationSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

export default function VoicebotFuerKMU() {
  const publishDate = "2026-02-14";
  const modifiedDate = "2026-02-14";
  
  const articleSchema = generateArticleSchema({
    title: "Voicebot für KMU: Lohnt sich das?",
    description: "Umfassende Analyse der Kosten, des Nutzens und der praktischen Einsatzmöglichkeiten von KI-Telefonassistenten für kleine und mittelständische Unternehmen. Inklusive ROI-Rechnung und Praxisbeispielen.",
    url: "/blog/voicebot-kmu-kosten-roi",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/DxjkMTxZCjnyTRIc.jpg",
    datePublished: publishDate,
    dateModified: modifiedDate,
    author: "Zöllner Office"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Startseite", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Voicebot für KMU: Lohnt sich das?", url: "/blog/voicebot-kmu-kosten-roi" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Voicebot für KMU: Lohnt sich das?"
        description="Voicebot für KMU: Kosten, ROI und Einsparpotenziale einfach erklärt. So rechnet sich Telefon-KI für kleine und mittlere Unternehmen."
        canonical="/blog/voicebot-kmu-kosten-roi"
        keywords="Voicebot Kosten, KI Telefonassistent, Voicebot Mittelstand, automatisierte Telefonzentrale, Telefon KI für Unternehmen, Voicebot ROI, KMU Digitalisierung"
        schema={[generateOrganizationSchema(), articleSchema, breadcrumbSchema]}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/wMwNFKsdYBdTJHqL.jpg" 
            alt="KI-Telefonassistent Kosten-Nutzen-Analyse für KMU" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-slate-900/20" />
        </div>
        
        <div className="container relative z-10 py-16 md:py-24">
          <Link href="/blog">
            <Button variant="ghost" className="text-white hover:text-blue-300 mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Blog
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-blue-300 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 px-3 py-1 rounded-full font-medium border border-blue-400/30">
                <TrendingUp className="h-3.5 w-3.5" />
                KMU & Mittelstand
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                12 Min. Lesezeit
              </span>
              <time dateTime={publishDate} className="text-blue-200">
                14. Februar 2026
              </time>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Voicebot für KMU: Lohnt sich das?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Umfassende Analyse der Kosten, des Nutzens und der praktischen Einsatzmöglichkeiten von KI-Telefonassistenten für kleine und mittelständische Unternehmen.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            
            {/* Einleitung */}
            <p className="text-xl leading-relaxed text-muted-foreground border-l-4 border-primary pl-6 my-8">
              Die Digitalisierung macht auch vor kleinen und mittelständischen Unternehmen nicht halt. Während Großkonzerne längst auf automatisierte Telefonzentralen und KI-gestützte Kundenservice-Lösungen setzen, stellen sich viele KMU die Frage: <strong>Ist ein Voicebot auch für uns sinnvoll? Und vor allem: Rechnet sich die Investition?</strong>
            </p>

            <p>
              Die Antwort ist eindeutig: Ja – wenn Sie die richtige Lösung wählen und Ihre Erwartungen realistisch sind. In diesem Artikel beleuchten wir die Kosten, den Nutzen und die praktischen Einsatzmöglichkeiten von KI-Telefonassistenten speziell für den Mittelstand.
            </p>

            {/* Was ist ein KI-Telefonassistent? */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Was ist ein KI-Telefonassistent überhaupt?</h2>
            
            <p>
              Ein Voicebot – auch <strong>KI-Telefonassistent</strong> oder <strong>Telefon-KI</strong> genannt – ist eine Software, die eingehende Anrufe automatisch entgegennimmt, Anliegen versteht und darauf reagiert. Anders als klassische Sprachmenüs ("Drücken Sie die 1 für...") nutzt moderne Telefon-KI natürliche Sprachverarbeitung und kann echte Gespräche führen.
            </p>

            <p>
              Die Technologie basiert auf künstlicher Intelligenz und maschinellem Lernen. Der Bot erkennt nicht nur einzelne Schlüsselwörter, sondern versteht den Kontext eines Gesprächs. Er kann Termine vereinbaren, häufige Fragen beantworten, Informationen erfassen und bei Bedarf an menschliche Mitarbeiter weiterleiten.
            </p>

            {/* Voicebot Kosten */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Calculator className="h-8 w-8 text-primary" />
              Voicebot Kosten: Was kostet ein KI-Telefonassistent wirklich?
            </h2>

            <p>
              Die Investition in einen <strong>Voicebot für den Mittelstand</strong> ist deutlich günstiger, als viele Unternehmer zunächst vermuten. Die Kosten setzen sich typischerweise aus drei Komponenten zusammen:
            </p>

            <div className="bg-muted/50 rounded-2xl p-8 my-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Einmalige Einrichtungskosten
              </h3>
              <p className="mb-4">
                Der Einstieg ist bereits ab <strong>712 Euro</strong> möglich. Die finalen Kosten richten sich nach Umfang und Komplexität Ihres Projekts.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Monatliche Betriebskosten
              </h3>
              <p className="mb-4">
                Der Einstieg ist bereits ab <strong>399 Euro</strong> möglich. Die finalen Kosten richten sich nach Umfang und Komplexität Ihres Projekts. Viele Anbieter rechnen nach Gesprächsminuten ab, was besonders für kleinere Unternehmen fair ist – Sie zahlen nur, was Sie tatsächlich nutzen.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4 mt-8 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Anpassungen und Erweiterungen
              </h3>
              <p>
                Können zusätzlich anfallen, wenn Sie den Funktionsumfang später erweitern möchten.
              </p>
            </div>

            <p className="text-lg font-medium text-primary">
              Im Vergleich zu den Kosten einer Vollzeitkraft (durchschnittlich 40.000 bis 50.000 Euro Jahresgehalt plus Lohnnebenkosten) amortisiert sich ein Voicebot oft bereits im ersten Jahr – selbst wenn er nur einen Teil der Anrufe übernimmt.
            </p>

            {/* Wann lohnt sich ein Voicebot? */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Wann lohnt sich ein Voicebot für KMU?</h2>

            <p>
              Nicht jedes Unternehmen profitiert gleichermaßen von einer <strong>automatisierten Telefonzentrale</strong>. Die Investition rechnet sich besonders, wenn mindestens einer der folgenden Punkte auf Sie zutrifft:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Sie erhalten viele Standardanfragen</h3>
                  <p>
                    Öffnungszeiten, Produktverfügbarkeit, Preisauskünfte oder Wegbeschreibungen – solche Routinefragen kann ein KI-Telefonassistent perfekt abdecken und Ihr Team entlasten.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Ihre Telefonleitungen sind häufig besetzt</h3>
                  <p>
                    Ein Voicebot nimmt jeden Anruf sofort an und erfasst zumindest die Kontaktdaten für einen Rückruf, sodass potenzielle Kunden nicht abspringen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Sie möchten außerhalb der Geschäftszeiten erreichbar sein</h3>
                  <p>
                    Die Telefon-KI arbeitet rund um die Uhr – auch nachts, am Wochenende und an Feiertagen, ohne Nachtschichten oder Bereitschaftsdienste.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Terminvereinbarungen nehmen viel Zeit in Anspruch</h3>
                  <p>
                    Ein Voicebot kann direkt mit Ihrem Kalendersystem synchronisiert werden und Termine eigenständig buchen, verschieben oder stornieren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Ihr Team soll sich auf wertschöpfende Tätigkeiten konzentrieren</h3>
                  <p>
                    Gerade in Handwerksbetrieben, Arztpraxen oder Beratungsunternehmen ist die Zeit der Fachkräfte zu wertvoll für reine Telefonannahme.
                  </p>
                </div>
              </div>
            </div>

            {/* Einsatzszenarien */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Voicebot Mittelstand: Typische Einsatzszenarien
            </h2>

            <p>
              Mittelständische Unternehmen setzen KI-Telefonassistenten in verschiedensten Bereichen ein. Hier einige bewährte Anwendungsfälle:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Handwerksbetriebe</h3>
                <p className="text-sm text-muted-foreground">
                  Nutzen Voicebots zur Erstannahme von Aufträgen. Der Bot erfasst die Art des Problems, die Dringlichkeit und die Kontaktdaten. Notfälle werden sofort weitergeleitet.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Arztpraxen</h3>
                <p className="text-sm text-muted-foreground">
                  Profitieren von automatisierter Terminvergabe. Patienten können rund um die Uhr Termine buchen, verschieben oder absagen.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Immobilienverwaltungen</h3>
                <p className="text-sm text-muted-foreground">
                  Setzen Telefon-KI für Schadensmeldungen und Mieteranfragen ein. Der Bot kategorisiert Anliegen und leitet dringende Fälle an den Notdienst weiter.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">E-Commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Nutzen Voicebots für Bestellstatusabfragen und einfache Reklamationen. Kunden erhalten sofort Auskunft über ihre Sendung.
                </p>
              </div>
            </div>

            {/* Versteckte Vorteile */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Die versteckten Vorteile: Mehr als nur Kostenersparnis</h2>

            <p>
              Neben der offensichtlichen Entlastung Ihres Teams bringt ein Voicebot für KMU weitere Vorteile, die sich nicht sofort in Euro und Cent messen lassen:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Verbesserte Kundenzufriedenheit</strong>
                  <p className="mt-2">entsteht durch sofortige Erreichbarkeit. Niemand muss mehr in der Warteschleife hängen oder auf einen Rückruf warten. Studien zeigen, dass 60 Prozent der Kunden lieber mit einem kompetenten Bot sprechen als minutenlang in der Warteschleife zu hängen.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Konsistente Servicequalität</strong>
                  <p className="mt-2">ist garantiert, da der Bot nie einen schlechten Tag hat, nie genervt reagiert und immer freundlich bleibt – auch beim hundertsten Anruf am Tag.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Wertvolle Datenerfassung</strong>
                  <p className="mt-2">erfolgt automatisch. Jedes Gespräch wird protokolliert, kategorisiert und ausgewertet. Sie erhalten Einblicke in die häufigsten Kundenanliegen und können Ihre Prozesse entsprechend optimieren.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Skalierbarkeit ohne Personalaufbau</strong>
                  <p className="mt-2">wird möglich. Wenn Ihr Geschäft wächst und die Anrufzahlen steigen, skaliert der Voicebot einfach mit – ohne dass Sie neue Mitarbeiter einstellen und einarbeiten müssen.</p>
                </div>
              </div>
            </div>

            {/* ROI-Rechnung */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">ROI-Rechnung: Ein Praxisbeispiel</h2>

            <p>
              Schauen wir uns ein konkretes Beispiel an. Ein mittelständischer Handwerksbetrieb mit 15 Mitarbeitern erhält täglich etwa 40 Anrufe:
            </p>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 my-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Ohne Voicebot</h3>
              <p className="mb-4">
                Das Team verbringt täglich etwa <strong>2 Stunden und 40 Minuten</strong> am Telefon – Zeit, die für produktive Arbeit fehlt. Bei einem durchschnittlichen Stundensatz von 45 Euro entspricht das einem Zeitwert von <strong>120 Euro pro Tag</strong> oder <strong>2.400 Euro pro Monat</strong>.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-6 mt-8">Mit Voicebot</h3>
              <p className="mb-4">
                Die KI übernimmt 33 von 40 Anrufen vollständig. Die Telefonzeit reduziert sich auf <strong>35 Minuten pro Tag</strong> – eine Zeitersparnis von 2 Stunden und 5 Minuten täglich.
              </p>

              <div className="bg-white/50 dark:bg-slate-900/50 rounded-xl p-6 mt-6">
                <p className="text-2xl font-bold text-primary mb-2">Monatlicher Nettonutzen: 1.400 €</p>
                <p className="text-sm text-muted-foreground">
                  Bei Kosten von 500 € pro Monat und Zeitersparnis im Wert von 1.900 €
                </p>
                <p className="text-lg font-semibold text-foreground mt-4">
                  Amortisation der Anfangsinvestition (3.560 €): <span className="text-primary">2,5 Monate</span>
                </p>
              </div>
            </div>

            {/* Realistische Erwartungen */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-amber-500" />
              Realistische Erwartungen: Was ein Voicebot NICHT kann
            </h2>

            <p>
              Bei aller Begeisterung für die Technologie ist es wichtig, realistische Erwartungen zu haben. Ein KI-Telefonassistent ist kein Allheilmittel und kann menschliche Mitarbeiter nicht vollständig ersetzen.
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Komplexe Beratungsgespräche</strong>
                  <p className="mt-2">erfordern weiterhin menschliches Einfühlungsvermögen und Fachwissen. Ein Voicebot kann Informationen sammeln und vorqualifizieren, aber die eigentliche Beratung sollte ein Experte übernehmen.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Emotionale Situationen</strong>
                  <p className="mt-2">wie Beschwerden oder Notfälle benötigen oft menschliche Empathie. Hier sollte der Bot schnell an einen Mitarbeiter weiterleiten können.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <strong className="text-lg">Sehr spezifische Fachfragen</strong>
                  <p className="mt-2">übersteigen häufig die Fähigkeiten eines Voicebots. Er kann auf FAQ-Inhalte zurückgreifen, aber bei hochspezialisierten Anfragen ist menschliche Expertise gefragt.</p>
                </div>
              </div>
            </div>

            <p className="text-lg font-medium text-primary border-l-4 border-primary pl-6 my-8">
              Die Lösung liegt in der intelligenten Kombination: Der Voicebot übernimmt Routineaufgaben und leitet komplexe Fälle an Ihre Mitarbeiter weiter. So entsteht ein effizientes Team aus Mensch und Maschine.
            </p>

            {/* Fazit */}
            <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Fazit: Voicebot für KMU – Eine Investition, die sich lohnt</h2>

            <p>
              Die Frage "Lohnt sich ein Voicebot für KMU?" lässt sich für die meisten mittelständischen Unternehmen mit einem klaren Ja beantworten – vorausgesetzt, die Rahmenbedingungen stimmen.
            </p>

            <p>
              Ein <strong>KI-Telefonassistent</strong> ist keine futuristische Spielerei mehr, sondern ein praktisches Werkzeug zur Effizienzsteigerung. Die Technologie ist ausgereift, die <strong>Voicebot Kosten</strong> sind überschaubar, und die Vorteile überwiegen deutlich.
            </p>

            <p>
              Besonders für Unternehmen mit hohem Anrufaufkommen, vielen Routineanfragen oder dem Wunsch nach erweiterter Erreichbarkeit ist ein Voicebot eine sinnvolle Investition.
            </p>

            <p>
              Die Amortisationszeit liegt oft bei unter einem Jahr, und die langfristigen Vorteile – von Zeitersparnis über verbesserte Kundenzufriedenheit bis hin zu wertvollen Dateneinblicken – sind erheblich.
            </p>

            <p>
              Wichtig ist, mit realistischen Erwartungen zu starten. Ein Voicebot ersetzt keine menschlichen Mitarbeiter, sondern ergänzt sie.
            </p>

            <p>
              Er übernimmt die Routineaufgaben, damit Ihr Team sich auf das konzentrieren kann, was wirklich zählt: persönliche Beratung, komplexe Problemlösungen und den Aufbau echter Kundenbeziehungen.
            </p>

            <div className="bg-primary/5 rounded-2xl p-8 my-12 border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Bereit für den nächsten Schritt?</h3>
              <p className="text-muted-foreground mb-6">
                Wenn Sie überlegen, einen KI-Telefonassistenten einzuführen, starten Sie mit einer gründlichen Analyse Ihrer Telefonprozesse. Identifizieren Sie die Bereiche mit dem größten Automatisierungspotenzial und holen Sie Angebote von mehreren Anbietern ein.
              </p>
              <Link href="/termin">
                <Button size="lg" className="w-full md:w-auto">
                  Kostenlose Beratung anfragen
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Weitere Artikel zum Thema</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/voicebot-vs-mitarbeiter" className="group">
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg"
                    alt="Voicebot vs. Mitarbeiter Vergleich"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Voicebot vs. Mitarbeiter: Der direkte Vergleich</h3>
                  <p className="text-sm text-muted-foreground">
                    Wann lohnt sich ein Voicebot und wann ist ein menschlicher Mitarbeiter die bessere Wahl?
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/wohnungswirtschaft-voicebot" className="group">
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/ZjDFZmkGTxILkgAp.jpg"
                    alt="Wohnungswirtschaft Voicebot Praxisbeispiel"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Wohnungsgenossenschaft: Automatisierte Telefonannahme</h3>
                  <p className="text-sm text-muted-foreground">
                    Wie eine Wohnungsgenossenschaft durch VoiceBot-Automatisierung die Erreichbarkeit verbesserte.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
