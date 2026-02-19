import SEO from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Clock, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Praxisbeispiele() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      slug: "timum-fuer-makler",
      title: "Timum für Immobilienmakler: Terminautomation mit onOffice & Voicebot",
      category: "Immobilienwirtschaft",
      excerpt:
        "Was kann Timum für Makler? So automatisierst du Besichtigungstermine mit onOffice, Voicebot und Zöllner Office effizient.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/CmbKtyqgiYbsPWCw.webp",
      readTime: "8 Min.",
      results: [
        "Automatische Terminbuchung für Besichtigungen",
        "Nahtlose Integration mit onOffice CRM",
        "Durchgängige Prozesskette: Voicebot → Timum → onOffice",
      ],
    },
    {
      slug: "wohnungswirtschaft-voicebot",
      title: "Wohnungsgenossenschaft: Automatisierte Telefonannahme",
      category: "Wohnungswirtschaft",
      excerpt:
        "Wie eine Wohnungsgenossenschaft mit über 200 Mitarbeitern durch VoiceBot-Automatisierung die Erreichbarkeit auf 24/7 erweiterte und das Service-Team spürbar entlastete.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/GTfBPmolHhsQdIRR.png",
      readTime: "7 Min.",
      results: [
        "7 automatisierte Prozesstypen (Havarie, Schadensmeldung, Beschwerde, Wohnungssuche, FAQ)",
        "24/7-Erreichbarkeit auch außerhalb der Geschäftszeiten",
        "Deutliche Entlastung des Service-Teams von Routineanfragen",
      ],
    },
    {
      slug: "uwe-ortlepp-immobilienfinanzierung",
      title: "Uwe Ortlepp Immobilienfinanzierung",
      category: "Finanzdienstleistung",
      excerpt:
        "24/7 Erreichbarkeit und automatisierte Terminbuchung für Immobilienfinanzierung – nahtlos integriert in bestehende CRM-Systeme.",
      image: "/images/uwe-ortlepp-portrait.jpg",
      readTime: "5 Min.",
      results: [
        "Durchgängige telefonische Erreichbarkeit",
        "Automatisierte Terminbuchung",
        "Entlastung des Backoffice",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Praxisbeispiele - Erfolgreiche Voicebot-Implementierungen"
        description="Erfahren Sie, wie Unternehmen aus verschiedenen Branchen mit Voicebots ihre Erreichbarkeit verbessern und Prozesse automatisieren."
        canonical="/praxisbeispiele"
        keywords="Praxisbeispiele, Case Studies, Voicebot Erfolge, Wohnungswirtschaft, Immobilienfinanzierung, Referenzen"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            generateBreadcrumbSchema([
              { name: "Startseite", url: "/" },
              { name: "Praxisbeispiele", url: "/praxisbeispiele" }
            ])
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FsnTgEKaTsmGiZsv.jpg" 
            alt="Praxisbeispiele Voicebot Technologie" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Erfolgsgeschichten
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Praxisbeispiele aus der{" "}
              <span style={{color: '#0287F6'}}>
                echten Welt
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Entdecken Sie, wie Unternehmen aus verschiedenen Branchen mit
              unseren Voicebot-Lösungen ihre Erreichbarkeit verbessern,
              Prozesse automatisieren und ihre Kunden begeistern.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study) => (
              <Card
                key={study.slug}
                className="overflow-hidden transition-all duration-300 border-none bg-card group rounded-2xl shadow-none"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto rounded-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />

                  </div>

                  {/* Content Section */}
                  <CardContent className="md:col-span-3 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          <Building2 className="h-3.5 w-3.5" />
                          {study.category}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {study.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {study.excerpt}
                      </p>

                      {/* Results */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          <TrendingUp className="h-4 w-4" />
                          <span>Ergebnisse:</span>
                        </div>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-0.5">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={study.slug === 'wohnungswirtschaft-voicebot' ? '/blog/wohnungswirtschaft-voicebot' : `/praxisbeispiele/${study.slug}`}>
                      <Button
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                      >
                        Case Study lesen
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Coming Soon Teaser */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-muted/50 rounded-lg px-8 py-6 border border-border">
              <p className="text-muted-foreground mb-2">
                <span className="font-semibold text-foreground">
                  Weitere Praxisbeispiele folgen in Kürze
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Aus den Branchen: Gesundheitswesen, Handwerk, E-Commerce und
                mehr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Werden Sie Teil unserer Erfolgsgeschichten
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Lassen Sie uns gemeinsam herausfinden, wie ein Voicebot auch Ihr
              Unternehmen voranbringen kann. Kostenlose Erstberatung und
              individuelle Lösungskonzepte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/termin">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                >
                  Jetzt Beratung anfragen
                </Button>
              </Link>
              <Link href="/loesungen">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Lösungen entdecken
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
