import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Wrench,
  ShoppingBag,
  Building2,
  Briefcase,
  Home,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

export default function Anwendungsbeispiele() {
  const useCases = [
    {
      icon: Stethoscope,
      title: "Arztpraxen & Kliniken",
      description:
        "Terminvereinbarungen rund um die Uhr, Notfallerkennung und automatische Weiterleitung an den diensthabenden Arzt. Reduzierung der Wartezeiten in der Telefonzentrale.",
      features: [
        "Automatische Terminbuchung und -erinnerung",
        "Notfall-Priorisierung",
        "Rezeptbestellung per Telefon",
        "Mehrsprachige Patientenbetreuung",
      ],
      color: "from-blue-500 to-blue-400",
    },
    {
      icon: Wrench,
      title: "Handwerksbetriebe",
      description:
        "Auftragsannahme auch außerhalb der Geschäftszeiten, Notdienst-Koordination und automatische Terminplanung. Keine verpassten Aufträge mehr.",
      features: [
        "24/7 Notdienst-Hotline",
        "Automatische Auftragserfassung",
        "Terminkoordination mit Technikern",
        "Rückrufservice bei komplexen Anfragen",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Einzelhandel",
      description:
        "Bestellstatusabfragen, Produktberatung und Reklamationsmanagement automatisiert. Entlastung des Kundenservice-Teams bei Standardanfragen.",
      features: [
        "Bestellstatus-Auskunft",
        "Produktverfügbarkeit prüfen",
        "Retourenabwicklung",
        "Öffnungszeiten und Standortinformationen",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      title: "Immobilienverwaltung",
      description:
        "Automatische Besichtigungstermine, Mietanfragen und Schadensmeldungen. Mieter erreichen immer einen Ansprechpartner, auch am Wochenende.",
      features: [
        "Besichtigungstermine vereinbaren",
        "Schadensmeldungen aufnehmen",
        "Mietanfragen vorqualifizieren",
        "Notfall-Hotline für Mieter",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Briefcase,
      title: "Rechtsanwälte & Steuerberater",
      description:
        "Mandantenanfragen strukturiert erfassen, Termine koordinieren und Erstberatungen vorqualifizieren. DSGVO-konforme Kommunikation garantiert.",
      features: [
        "Mandatsanfragen vorqualifizieren",
        "Terminvereinbarung mit Fachanwälten",
        "Fristenerinnerungen",
        "Vertrauliche Datenerfassung",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Home,
      title: "Hausverwaltung & Facility Management",
      description:
        "Störungsmeldungen entgegennehmen, Handwerker koordinieren und Mieteranfragen bearbeiten. Zentrale Anlaufstelle für alle Anliegen.",
      features: [
        "Störungsmeldungen kategorisieren",
        "Handwerker-Einsätze koordinieren",
        "Hausmeister-Service anfragen",
        "Mieterkommunikation automatisieren",
      ],
      color: "from-blue-400 to-blue-500",
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Anwendungsbeispiele"
        description="Entdecken Sie, wie Voicebots in verschiedenen Branchen eingesetzt werden: Arztpraxen, Handwerk, E-Commerce, Immobilien und mehr."
        canonical="/anwendungsbeispiele"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-6">
              <Phone className="h-4 w-4 mr-2" />
              Branchenspezifische Lösungen
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Anwendungsbeispiele für{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                intelligente Sprachassistenten
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Entdecken Sie, wie Unternehmen aus verschiedenen Branchen mit
              Voicebots ihre Erreichbarkeit verbessern, Kosten senken und die
              Kundenzufriedenheit steigern.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardHeader>
                  <div
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <useCase.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-2 pt-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Vorteile für jede Branche
            </h2>
            <p className="text-lg text-muted-foreground">
              Unabhängig von Ihrer Branche profitieren Sie von diesen
              Kernvorteilen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Kosteneinsparung
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reduzieren Sie Personalkosten durch Automatisierung von
                  Routineanfragen. Ein Voicebot kann unbegrenzt viele Anrufe
                  gleichzeitig bearbeiten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Höhere Erreichbarkeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 verfügbar, auch an Wochenenden und Feiertagen. Keine
                  verpassten Anrufe mehr – jeder Kunde wird sofort bedient.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Bessere Kundenerfahrung
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keine Warteschleifen, sofortige Antworten und schnelle
                  Problemlösung. Ihre Kunden werden es Ihnen danken.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Skalierbarkeit
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wachsen Sie ohne Grenzen. Der Voicebot passt sich automatisch
                  an steigende Anrufvolumen an – ohne zusätzliche Kosten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Finden Sie Ihre maßgeschneiderte Lösung
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Jede Branche hat spezifische Anforderungen. Lassen Sie uns
            gemeinsam die perfekte Voicebot-Lösung für Ihr Unternehmen
            entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Kostenlose Beratung anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/loesungen">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10 text-white font-bold px-8 h-14 text-lg"
              >
                Alle Lösungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
