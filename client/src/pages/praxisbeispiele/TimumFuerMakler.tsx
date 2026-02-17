import SEO from "@/components/SEO";
import { Calendar, Building2, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function TimumFuerMakler() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Timum für Immobilienmakler: Terminautomation mit onOffice & Voicebot"
        description="Was kann Timum für Makler? So automatisierst du Besichtigungstermine mit onOffice, Voicebot und Zöllner Office effizient."
        canonical="/praxisbeispiele/timum-fuer-makler"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md">
              <Calendar className="w-4 h-4 mr-2" />
              Praxisbeispiel
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Timum für Immobilienmakler: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Terminautomation mit onOffice & Voicebot
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Was kann Timum für Makler? So automatisierst du Besichtigungstermine mit onOffice, Voicebot und Zöllner Office effizient.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="container max-w-4xl">
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/CmbKtyqgiYbsPWCw.webp"
              alt="Immobilienmakler Terminplanung mit digitalem System"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Digitale Terminautomatisierung für moderne Immobilienmakler
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In der Immobilienbranche entscheidet Geschwindigkeit oft über den Zuschlag. Wer Besichtigungstermine noch per Telefon oder E-Mail koordiniert, verliert wertvolle Zeit – und häufig auch Interessenten. Genau hier setzt <strong>Timum</strong> an: eine spezialisierte Terminmanagement-Lösung, die speziell für Makler und Immobilienunternehmen entwickelt wurde.
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Die Kernidee hinter Timum</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Timum digitalisiert und automatisiert die Terminvereinbarung rund um Immobilien. Interessenten können selbstständig Besichtigungstermine buchen, während im Hintergrund alle Daten strukturiert verarbeitet werden. Dadurch wird das Backoffice entlastet und der Vertriebsprozess deutlich beschleunigt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Online-Terminbuchung</h3>
                      <p className="text-muted-foreground text-sm">
                        Für Einzel- und Gruppentermine mit automatischen E-Mail-Bestätigungen und Erinnerungen
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Website-Integration</h3>
                      <p className="text-muted-foreground text-sm">
                        Nahtlose Einbindung der Terminbuchung auf Ihrer Website mit mobiler Optimierung
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Kalender-Export</h3>
                      <p className="text-muted-foreground text-sm">
                        Automatischer Export in Outlook, Google Kalender und andere Systeme
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Mobile Nutzung</h3>
                      <p className="text-muted-foreground text-sm">
                        Vollständig optimiert für Smartphone und Tablet – Termine von überall verwalten
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-primary mb-2">
                Für Makler bedeutet das:
              </p>
              <p className="text-muted-foreground">
                Weniger Telefonate, weniger Koordinationsaufwand und mehr Zeit für Abschlüsse.
              </p>
            </div>
          </div>

          {/* CRM Integration */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Besonders stark: Die CRM-Integration</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Der echte Hebel entsteht durch die tiefe Verzahnung mit Makler-CRM-Systemen. Timum lässt sich mit wichtigen CRM-Lösungen wie <strong>onOffice</strong>, FlowFact oder dem Scout Manager verbinden. Dabei werden Objekte automatisch importiert und gebuchte Termine direkt als Aktivitäten im CRM angelegt. Bestehende Kontakte werden zugeordnet, neue Interessenten automatisch angelegt.
            </p>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Warum die Verbindung zu onOffice so entscheidend ist
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In Deutschland gehört <strong>onOffice enterprise</strong> zu den am weitesten verbreiteten CRM-Systemen für Makler. Die Software dient als zentrale Plattform zur Verwaltung von Objekten, Kontakten und Vermarktungsprozessen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Die Kombination aus onOffice und Timum sorgt für einen nahezu durchgängigen digitalen Workflow.
              </p>
            </div>
          </div>

          {/* Process Flow Diagram */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Typischer Ablauf in der Praxis
            </h2>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl mb-8">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/yNrHebbvpnPcDNLv.png"
                alt="Prozessablauf: Voicebot → Timum → onOffice"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="space-y-4">
              {[
                { step: 1, text: "Immobilie wird in onOffice angelegt" },
                { step: 2, text: "Objekt wird automatisch an Timum übergeben" },
                { step: 3, text: "Interessent bucht online einen Termin" },
                { step: 4, text: "Termin erscheint sofort im CRM" },
                { step: 5, text: "Aktivität wird dem Kontakt zugeordnet" }
              ].map(({ step, text }) => (
                <div key={step} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    {step}
                  </div>
                  <p className="text-lg font-medium">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-primary mb-2">
                Das Ergebnis:
              </p>
              <p className="text-muted-foreground">
                Reduzierte Medienbrüche und verhinderte typische Fehlerquellen im Makleralltag.
              </p>
            </div>
          </div>

          {/* Strategic Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Der strategische Vorteil für Maklerbüros
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Viele Makler unterschätzen, wie viel Zeit in der Terminabstimmung verloren geht. Mit Timum lassen sich komplette Prozessketten automatisieren.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: "⚡", title: "Weniger Telefonaufwand", desc: "Automatische Terminbuchung entlastet das Vertriebsteam" },
                { icon: "🚀", title: "Schnellere Reaktionszeiten", desc: "Interessenten erhalten sofort Terminoptionen" },
                { icon: "📊", title: "Strukturierte Daten", desc: "Alle Informationen landen automatisch im CRM" },
                { icon: "📅", title: "Bessere Auslastung", desc: "Optimale Nutzung von Besichtigungsslots" },
                { icon: "✨", title: "Professioneller Eindruck", desc: "Modernes, digitales Auftreten gegenüber Kunden" },
                { icon: "💼", title: "Mehr Zeit für Abschlüsse", desc: "Fokus auf wertschöpfende Tätigkeiten" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-xl">
              <p className="text-muted-foreground italic">
                Gerade in umkämpften Märkten wie Dresden, Leipzig oder Berlin kann das den Unterschied machen.
              </p>
            </div>
          </div>

          {/* Zöllner Office Integration */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Wichtig für die Praxis: Schnittstelle über Zöllner Office
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Für viele Immobilienunternehmen besonders interessant: <strong>Zöllner Office</strong> kann eine Schnittstelle zu Timum bereitstellen und gleichzeitig die Verbindung zu onOffice herstellen.
              </p>
              <p className="text-lg font-semibold text-primary mb-4">
                Damit entsteht eine durchgängige Prozesskette:
              </p>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">📞</span>
                  <span className="font-medium">Voicebot / Telefonautomation</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ArrowRight className="h-5 w-5 ml-2" />
                  <span>Terminbuchung in Timum</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ArrowRight className="h-5 w-5 ml-2" />
                  <span>Automatische Übergabe an onOffice</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <ArrowRight className="h-5 w-5 ml-2" />
                  <span>Strukturierte Weiterverarbeitung im Makler-CRM</span>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Für die Immobilienbranche ist das hochrelevant, weil onOffice in vielen Maklerbüros bereits Standard ist. Die Integration sorgt dafür, dass bestehende Systeme nicht ersetzt werden müssen, sondern intelligent erweitert werden.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Fazit: Timum ist ein Effizienz-Booster für digital arbeitende Makler
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Timum ist kein weiteres Tool „nice to have", sondern ein echter Produktivitätshebel für Immobilienunternehmen. Besonders in Kombination mit onOffice und einer professionellen Schnittstelle – etwa über Zöllner Office – entsteht ein durchgängiger, automatisierter Vertriebsprozess.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Makler, die heute auf solche integrierten Lösungen setzen, arbeiten nicht nur effizienter. Sie wirken auch moderner, schneller und deutlich kundenfreundlicher.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-primary">
                  Und genau das entscheidet im Immobilienmarkt von morgen.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interessiert an einer Voicebot-Lösung für Ihr Maklerbüro?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Erfahren Sie, wie Zöllner Office Ihnen helfen kann, Timum, onOffice und Voicebot-Technologie nahtlos zu integrieren.
            </p>
            <Link href="/kontakt">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                Jetzt Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-2xl font-bold text-primary mb-8">Weitere Praxisbeispiele</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/praxisbeispiele">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      Alle Praxisbeispiele ansehen
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Entdecken Sie weitere Anwendungsfälle für Voicebots in verschiedenen Branchen
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/loesungen">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      Unsere Lösungen
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Erfahren Sie mehr über unsere Voicebot-Lösungen für Unternehmen
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Lösungen entdecken <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
