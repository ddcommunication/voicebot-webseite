import SEO from "@/components/SEO";
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
  Shield,
  Phone,
  Users,
} from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function WBGSchwarzheide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Voicebot &bdquo;Moni&ldquo; für die WBG Schwarzheide eG – Praxisbeispiel",
    description:
      "Wie die Wohnungsbaugenossenschaft Schwarzheide eG mit dem KI-Voicebot &bdquo;Moni&ldquo; von Zöllner ihre Erreichbarkeit verbessert, Mitarbeitende entlastet und Schadensmeldungen rund um die Uhr erfasst.",
    url: "https://sprachassistent.net/praxisbeispiele/wbg-schwarzheide",
    datePublished: "2026-05-31",
    dateModified: "2026-05-31",
    author: {
      "@type": "Organization",
      name: "Zöllner Büro- und IT-Systeme GmbH",
      url: "https://sprachassistent.net",
    },
    publisher: {
      "@type": "Organization",
      name: "Zöllner Büro- und IT-Systeme GmbH",
      url: "https://sprachassistent.net",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://sprachassistent.net/praxisbeispiele/wbg-schwarzheide",
    },
  };

  const merkmale = [
    {
      icon: Phone,
      title: "Nahtlose Integration in die bestehende NFON Cloudtelefonie",
      desc: "Kein Systemwechsel notwendig – der Voicebot ergänzt die vorhandene Infrastruktur ohne Ausfallzeiten.",
    },
    {
      icon: Check,
      title: "Jeder Anruf wird entgegengenommen",
      desc: "Auch bei hohem Anrufaufkommen, in Besprechungen oder außerhalb der Geschäftszeiten bleibt kein Anruf unbeantwortet.",
    },
    {
      icon: Target,
      title: "Strukturierte Erfassung beim Erstkontakt",
      desc: "Wichtige Informationen zum Anliegen – Schadensmeldung, Beschwerde oder allgemeine Anfrage – werden sofort und vollständig aufgenommen.",
    },
    {
      icon: Clock,
      title: "24/7 Erreichbarkeit",
      desc: "Mieterinnen und Mieter erreichen jederzeit einen verlässlichen Ansprechpartner – auch nachts, am Wochenende und an Feiertagen.",
    },
    {
      icon: Users,
      title: "Entlastung der Mitarbeitenden",
      desc: "Weniger Zeitaufwand für Nachbearbeitungen und Rückrufe – mehr Fokus auf wertschöpfende Aufgaben in der Mieterverwaltung.",
    },
    {
      icon: Shield,
      title: "DSGVO-konforme Umsetzung",
      desc: "Höchste Sicherheitsstandards, betrieben in zertifizierten, georedundanten Rechenzentren in Deutschland.",
    },
  ];

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebot &bdquo;Moni&ldquo; für die WBG Schwarzheide eG | Praxisbeispiel"
        description="Wie die Wohnungsbaugenossenschaft Schwarzheide eG mit dem KI-Voicebot &bdquo;Moni&ldquo; von Zöllner ihre Erreichbarkeit verbessert, Mitarbeitende entlastet und Schadensmeldungen rund um die Uhr erfasst."
        canonical="/praxisbeispiele/wbg-schwarzheide"
        type="article"
        robots="index, follow"
        keywords="WBG Schwarzheide, Wohnungsbaugenossenschaft Voicebot, Voicebot Wohnungswirtschaft, NFON Voicebot, Moni Voicebot, Schadensmeldung Voicebot, 24/7 Erreichbarkeit Wohnungswirtschaft"
        schema={articleSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[420px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wbg-schwarzheide-hero.jpg"
            alt="Wohngebäude der WBG Schwarzheide eG – Voicebot-Lösung für die Wohnungswirtschaft"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/80 to-slate-900" />
        </div>

        <div className="container relative z-10 py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-900 border border-white/50 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            <Building2 className="h-3.5 w-3.5" />
            Wohnungswirtschaft
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Voicebot{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              &bdquo;Moni&ldquo;
            </span>{" "}
            für die WBG Schwarzheide eG
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-6 leading-relaxed">
            24/7 Erreichbarkeit, automatisierte Schadensmeldungserfassung und
            spürbare Entlastung der Mitarbeitenden – durch nahtlose
            NFON-Integration.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-blue-400" />
              ~1.720 Mieteinheiten
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-400" />
              Schwarzheide, Brandenburg
            </span>
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
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Telefonische Erreichbarkeit
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-secondary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  ~1.720
                </div>
                <div className="text-sm text-muted-foreground">
                  Betreute Mieteinheiten
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-primary/5">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">
                  Verpasste Anrufe
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

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Die Wohnungsbaugenossenschaft Schwarzheide eG betreut rund{" "}
                <strong className="text-foreground">720 eigene Mieter</strong>{" "}
                sowie etwa{" "}
                <strong className="text-foreground">
                  1.000 Mieter im Rahmen der Fremdverwaltung
                </strong>
                . Entsprechend hoch ist das tägliche Anrufaufkommen –
                insbesondere bei Schadensmeldungen, Beschwerden und allgemeinen
                Serviceanfragen.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Gerade zu Stoßzeiten oder während Besprechungen können nicht
                immer alle Anrufe direkt entgegengenommen werden. Die Folge sind
                verpasste Anrufe, die von den Mitarbeitenden nachträglich
                bearbeitet und zurückgerufen werden müssen.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Dieser zusätzliche Aufwand bindet wertvolle Ressourcen und
                erschwert es den Teams, sich auf ihre eigentlichen Aufgaben zu
                konzentrieren. Zudem bestand der Wunsch, Mietern auch{" "}
                <strong className="text-foreground">
                  außerhalb der Geschäftszeiten
                </strong>{" "}
                einen verlässlichen Ansprechpartner zu bieten und wichtige
                Informationen frühzeitig aufzunehmen.
              </p>
            </div>

            {/* Die Lösung */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-primary m-0">
                  Die Lösung: Voicebot &bdquo;Moni&ldquo;
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Mit dem Voicebot{" "}
                <strong className="text-foreground">&bdquo;Moni&ldquo;</strong> erweitert
                die WBG Schwarzheide ihre bestehende Kommunikationslösung um
                einen intelligenten digitalen Assistenten. Dank der bereits
                eingesetzten{" "}
                <strong className="text-foreground">NFON Cloudtelefonie</strong>{" "}
                stand hierfür die ideale technische Grundlage zur Verfügung. Die
                cloudbasierte Infrastruktur ermöglicht eine nahtlose Integration
                des Voicebots und schafft die Voraussetzungen für eine moderne,
                zukunftssichere Telefonkommunikation.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Moni nimmt eingehende Anrufe automatisch entgegen, wenn
                Mitarbeitende gerade im Gespräch, in Terminen oder außerhalb der
                Geschäftszeiten nicht erreichbar sind. Dabei erfasst der
                Voicebot die wichtigsten Informationen zum Anliegen des Anrufers
                und stellt diese{" "}
                <strong className="text-foreground">
                  strukturiert zur weiteren Bearbeitung
                </strong>{" "}
                bereit.
              </p>

              {/* Integration Diagram */}
              <div className="bg-muted/30 p-8 rounded-xl my-8 border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  Technische Integration
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                  <div className="bg-white p-5 rounded-xl shadow-md text-center min-w-[150px] border border-slate-100">
                    <div className="text-primary font-bold text-base mb-1">
                      Eingehender Anruf
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Mieter ruft an
                    </div>
                  </div>
                  <div className="text-primary text-2xl font-bold">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl shadow-md text-center min-w-[150px] border border-blue-200">
                    <div className="text-blue-700 font-bold text-base mb-1">
                      NFON Cloudya
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Cloud-Telefonanlage
                    </div>
                  </div>
                  <div className="text-primary text-2xl font-bold">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl shadow-md text-center min-w-[150px] border border-cyan-200">
                    <div className="text-cyan-700 font-bold text-base mb-1">
                      Voicebot &bdquo;Moni&ldquo;
                    </div>
                    <div className="text-xs text-muted-foreground">
                      KI-Sprachassistent
                    </div>
                  </div>
                  <div className="text-primary text-2xl font-bold">
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl shadow-md text-center min-w-[150px] border border-slate-100">
                    <div className="text-primary font-bold text-base mb-1">
                      Strukturierte Übergabe
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Anliegen & Rückruf
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Besondere Merkmale */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Besondere Merkmale
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {merkmale.map((m, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <m.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <strong className="text-foreground text-sm leading-snug block mb-1">
                        {m.title}
                      </strong>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mehrwert */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-8">
                Mehrwert für die WBG Schwarzheide
              </h2>
              <div className="space-y-6">
                <div className="flex gap-5 p-6 rounded-xl bg-blue-50 border border-blue-100">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Permanente Erreichbarkeit
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Auch außerhalb der Geschäftszeiten oder bei nicht
                      besetzter Telefonzentrale werden Anrufe professionell
                      entgegengenommen, Anliegen erfasst und ein Rückruf
                      vereinbart.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 rounded-xl bg-cyan-50 border border-cyan-100">
                  <div className="h-10 w-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Entlastung der Mitarbeitenden
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Weniger Zeitaufwand für die Annahme und Nachbearbeitung
                      von Anrufen, mehr Fokus auf die Betreuung von Mietern und
                      das operative Tagesgeschäft.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Höchste Sicherheit
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Die Lösung erfüllt sämtliche Datenschutz- und
                      Sicherheitsanforderungen und wird in zertifizierten,
                      georedundanten Rechenzentren betrieben.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kundenstimme */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-6 right-8 opacity-10">
                  <Quote className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 mb-6 italic">
                    „Mit der Einführung des Voicebots erwarten wir eine spürbare
                    Entlastung unserer Mitarbeitenden sowie eine Verbesserung
                    des Services für unsere Mieterinnen und Mieter. Die
                    Entscheidung für den Voicebot von NFON und die
                    Zusammenarbeit mit Zöllner basieren auf Professionalität,
                    Zuverlässigkeit und einer nahtlosen Integration in unsere
                    bestehende Telefonanlage."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-500/30 flex items-center justify-center text-white font-bold text-lg">
                      AS
                    </div>
                    <div>
                      <div className="font-bold text-white">Anne Sicker</div>
                      <div className="text-sm text-white/70">
                        Geschäftsführender Vorstand, WBG Schwarzheide eG
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-border/50 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Ähnliche Lösung für Ihre Wohnungsverwaltung?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Wir entwickeln maßgeschneiderte Voicebot-Lösungen für die
              Wohnungswirtschaft – DSGVO-konform, nahtlos integriert und
              persönlich betreut.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-full px-8"
                >
                  Jetzt Beratung anfragen
                </Button>
              </Link>
              <Link href="/praxisbeispiele">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
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
