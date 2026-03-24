import SEO from "@/components/SEO";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Check,
  Building2,
  Clock,
  Target,
  TrendingUp,
  Quote,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function UweOrtleppCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: "Case Study: Voicebot-Lösung für Uwe Ortlepp Immobilienfinanzierung",
        description: "Erfolgreiche Voicebot-Implementierung: 24/7 Erreichbarkeit und automatisierte Terminbuchung für Immobilienfinanzierung.",
        url: "https://www.sprachassistent.net/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung",
        image: "https://www.sprachassistent.net/images/uwe-ortlepp-portrait.jpg",
        datePublished: "2026-01-26",
        dateModified: "2026-02-13",
        author: "Dr. Thomas Zöllner"
      }),
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Praxisbeispiele", url: "/praxisbeispiele" },
        { name: "Uwe Ortlepp", url: "/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung" }
      ])
    ]
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Case Study: Uwe Ortlepp Immobilienfinanzierung"
        description="Erfolgreiche Voicebot-Implementierung: 24/7 Erreichbarkeit und automatisierte Terminbuchung für Immobilienfinanzierung."
        canonical="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung"
        type="article"
        keywords="Uwe Ortlepp, Immobilienfinanzierung, Voicebot, Case Study, 24/7 Erreichbarkeit, Terminbuchung"
        schema={articleSchema}
      />

      {/* Hero Section with Image */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="/images/uwe-ortlepp-consultation.jpg"
          alt="Uwe Ortlepp im Beratungsgespräch - Immobilienfinanzierung"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-900 border border-white/50 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <Building2 className="h-3.5 w-3.5" />
              Finanzdienstleistung
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 break-words">
              <span style={{color: '#0287F6'}}>Uwe Ortlepp</span>{" "}
              Immobilienfinanzierung
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-6">
              24/7 Erreichbarkeit und automatisierte Terminbuchung durch
              intelligente Voicebot-Integration
            </p>
            <div className="text-white/80 space-y-1">
              <p className="text-sm font-medium">Inhaber - OW Immobilien Finanzierung</p>
              <a 
                href="https://uoimmofinanz.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors underline"
                title="Immobilien – Finanzierung"
              >
                uoimmofinanz.de
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container max-w-4xl">
          <Link href="/praxisbeispiele">
            <Button
              variant="ghost"
              className="mb-8 -ml-4 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Übersicht
            </Button>
          </Link>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Telefonische Erreichbarkeit
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-secondary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Automatisierte Terminbuchung
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">
                  Doppelbuchungen
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Ausgangssituation */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-primary m-0">
                  Ausgangssituation
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Uwe Ortlepp Immobilienfinanzierung ist in einer stark
                beratungsintensiven Branche tätig, in der persönliche Expertise
                und Vertrauen eine zentrale Rolle spielen. Ein Großteil der
                täglichen Arbeitszeit entfällt auf individuelle Kundengespräche.
                Gleichzeitig gehen telefonische Anfragen zu jeder Tageszeit ein
                – häufig genau dann, wenn persönliche Beratungsgespräche
                stattfinden oder das Backoffice nicht besetzt ist.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Obwohl bereits die moderne Online-Terminbuchung Timum integriert
                war, bevorzugten viele Interessenten weiterhin den
                telefonischen Erstkontakt. Nicht angenommene Anrufe führten
                dadurch zu unnötigen Wartezeiten, Medienbrüchen oder verpassten
                Kontaktchancen.
              </p>
            </div>

            {/* Die Lösung */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-primary m-0">
                  Die Lösung
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Gemeinsam mit Uwe Ortlepp wurde eine maßgeschneiderte
                Voicebot-Lösung entwickelt, die telefonische Anfragen
                strukturiert entgegennimmt, Interessenten gezielt durch
                vordefinierte Prozesse führt und Termine automatisiert bucht.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Der Voicebot ist vollständig in die bestehende
                Terminbuchungssoftware <strong>Timum</strong> integriert.
                Dadurch werden alle Termine im CRM <strong>onOffice</strong> –
                unabhängig davon, ob sie online oder telefonisch gebucht werden
                – zentral verwaltet. Doppelbuchungen werden zuverlässig
                ausgeschlossen. Der Sprachassistent informiert den Inhaber
                automatisiert über Gesprächsinhalte, Terminbuchungen und
                Kundenanliegen und sorgt so für maximale Transparenz und
                Prozesssicherheit.
              </p>

              {/* Integration Diagram */}
              <div className="bg-muted/30 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  Systemintegration
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[160px]">
                    <div className="text-primary font-bold text-lg mb-2">
                      Voicebot
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Telefonische Anfragen
                    </div>
                  </div>
                  
                  {/* Arrow - horizontal on desktop, vertical on mobile */}
                  <div className="text-primary text-3xl font-bold">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[160px]">
                    <div className="text-secondary font-bold text-lg mb-2">
                      Timum
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Terminbuchung
                    </div>
                  </div>
                  
                  {/* Arrow - horizontal on desktop, vertical on mobile */}
                  <div className="text-primary text-3xl font-bold">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[160px]">
                    <div className="text-primary font-bold text-lg mb-2">
                      onOffice
                    </div>
                    <div className="text-xs text-muted-foreground">
                      CRM-System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Besondere Merkmale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Besondere Merkmale
              </h2>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Zentrale Terminbuchung über alle Kanäle hinweg
                    </strong>
                    <p className="text-muted-foreground mt-1">
                      Online und telefonisch in einem System – nahtlose
                      Integration ohne Medienbrüche
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Automatische Vermeidung von Doppelbuchungen
                    </strong>
                    <p className="text-muted-foreground mt-1">
                      Intelligente Synchronisation zwischen allen
                      Buchungskanälen
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Individuell steuerbare Aktivzeiten des Voicebots
                    </strong>
                    <p className="text-muted-foreground mt-1">
                      Flexibel anpassbar je nach Geschäftszeiten und
                      Verfügbarkeit
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      Skalierbar und zukunftssicher
                    </strong>
                    <p className="text-muted-foreground mt-1">
                      Vorbereitet für weitere Automatisierungsprozesse und
                      wachsende Anforderungen
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">
                      DSGVO-konforme Umsetzung mit höchsten
                      Sicherheitsstandards
                    </strong>
                    <p className="text-muted-foreground mt-1">
                      BSI C5 zertifiziert und in georedundanten Rechenzentren
                      betrieben
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Zielsetzung */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Zielsetzung
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Sicherstellung einer{" "}
                    <strong className="text-foreground">
                      durchgängigen telefonischen Erreichbarkeit (24/7)
                    </strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Automatisierte und{" "}
                    <strong className="text-foreground">
                      barrierefreie Terminbuchung
                    </strong>{" "}
                    für Interessenten
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">
                      Nahtlose Integration
                    </strong>{" "}
                    in bestehende Systeme (Timum & onOffice)
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    Spürbare{" "}
                    <strong className="text-foreground">
                      Entlastung des Backoffice
                    </strong>{" "}
                    bei gleichbleibend hoher Servicequalität
                  </span>
                </li>
              </ul>
            </div>

            {/* Customer Quote */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-2xl my-12 relative overflow-hidden border border-primary/10">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src="/images/uwe-ortlepp-portrait.jpg"
                    alt="Uwe Ortlepp"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <a 
                      href="https://uoimmofinanz.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-lg text-primary hover:text-primary/80 transition-colors underline decoration-2 underline-offset-2"
                      title="Immobilien – Finanzierung"
                    >
                      Uwe Ortlepp
                    </a>
                    <div className="text-sm text-muted-foreground">
                      Inhaber - OW Immobilien Finanzierung
                    </div>
                  </div>
                </div>
                <blockquote className="text-lg text-foreground leading-relaxed italic">
                  "Mit der Zöllner Büro- & IT Systeme GmbH haben wir einen
                  kompetenten Entwicklungspartner für die
                  Voicebot-Programmierung gefunden. Die Lösung wurde exakt nach
                  unseren Anforderungen umgesetzt und nahtlos in unsere
                  bestehende Telefon- und Systemlandschaft integriert. Der
                  gesamte Projektverlauf war professionell, strukturiert und
                  zuverlässig."
                </blockquote>
              </div>
            </div>

            {/* Video */}
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-black relative">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full"
                  style={{ aspectRatio: '9/16', maxHeight: '80vh', margin: '0 auto', display: 'block' }}
                  poster="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/voicebot-immobilienmakler-poster_29ce919c.jpg"
                >
                  <source
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/voicebot-immobilienmakler-praxisbeispiel_990955d3.mp4"
                    type="video/mp4"
                  />
                  Ihr Browser unterstützt das Video-Format nicht.
                </video>
              </div>
            </div>

            {/* Mehrwert */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Mehrwert für Uwe Ortlepp
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                        01
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Permanente Erreichbarkeit
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Auch außerhalb der Geschäftszeiten oder bei nicht
                      besetztem Backoffice werden Anrufe professionell
                      entgegengenommen, Anliegen erfasst und Termine gebucht.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">
                        02
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Entlastung & Effizienzsteigerung
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Routineanfragen und Terminabstimmungen laufen
                      automatisiert ab – mehr Zeit für persönliche Beratung und
                      komplexe Finanzierungsfälle.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                        03
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Maximale Flexibilität
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Der Wechsel zwischen persönlicher Anrufannahme und
                      Voicebot-Betrieb ist jederzeit möglich – situationsabhängig
                      und per Knopfdruck.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl">
                        04
                      </div>
                      <h3 className="text-xl font-bold text-foreground m-0">
                        Höchste Sicherheit
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Die Lösung erfüllt sämtliche Datenschutz- und
                      Sicherheitsanforderungen und wird in zertifizierten,
                      georedundanten Rechenzentren betrieben.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* About Zöllner */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Über Zöllner Büro- IT-Systeme GmbH
              </h3>
              <p className="text-slate-300 mb-4">
                <strong className="text-white">NFON-Entwicklungspartner</strong>
              </p>
              <p className="text-slate-300 leading-relaxed">
                Seit mehr als 45 Jahren steht Zöllner für skalierbare IT- und
                Telekommunikationslösungen und ist als Entwicklungspartner der
                NFON AG führend im Bereich KI-Voicebots.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg text-center border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interessiert an einer ähnlichen Lösung?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
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
              <Link href="/praxisbeispiele">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Weitere Praxisbeispiele
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
