import SEO from "@/components/SEO";
import GoogleReviews from "@/components/GoogleReviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Shield,
  Settings,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Building2,
  Globe,
  FileText,
  Headphones,
  Code2,
  Lock,
} from "lucide-react";
import { Link } from "wouter";
import { generateAggregateRatingSchema, generateBreadcrumbSchema } from "@/lib/schema";

export default function NFONSupportBlog() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "NFON Support", url: "/blog/nfon-support" }
      ]),
      {
        "@type": "Product",
        name: "NFON-Service & Support für Unternehmen",
        description:
          "Persönlicher NFON Support, Voicebots, CTI-Integrationen und moderne Cloud-Telefonie für Unternehmen jeder Größe – flexibel, sicher und skalierbar.",
        url: "https://sprachassistent.net/blog/nfon-support",
        brand: {
          "@type": "Organization",
          name: "Zöllner Büro- und IT-Systeme GmbH",
          url: "https://www.sprachassistent.net",
        },
        aggregateRating: generateAggregateRatingSchema(),
      }
    ]
  };

  const leistungen = [
    {
      icon: Building2,
      title: "Einrichtung & Migration",
      desc: "Nahtlose Einrichtung und Migration Ihrer NFON-Cloud-Telefonanlage – ohne Ausfallzeiten.",
      color: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Settings,
      title: "Betreuung & Betrieb",
      desc: "Laufende Betreuung bestehender NFON-Systeme – proaktiv, zuverlässig und persönlich.",
      color: "from-cyan-500 to-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: Users,
      title: "Benutzerverwaltung",
      desc: "Professionelle Verwaltung von Nutzern, Gruppen und Rufnummernkonzepten für jede Unternehmensgröße.",
      color: "from-violet-500 to-violet-600",
      bg: "bg-violet-50",
    },
    {
      icon: Phone,
      title: "Softphones & Endgeräte",
      desc: "Einrichtung von Softphones, Microsoft Teams-Integration und allen gängigen Endgeräten.",
      color: "from-emerald-500 to-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Globe,
      title: "Homeoffice & Mobil",
      desc: "Flexible Lösungen für Homeoffice, mobiles Arbeiten und verteilte Standorte.",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Zap,
      title: "Schneller Support",
      desc: "Fehleranalyse und direkte Hilfe im Supportfall – ohne lange Warteschleifen oder anonyme Tickets.",
      color: "from-yellow-500 to-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      icon: Code2,
      title: "CTI & CRM-Integration",
      desc: "Nahtlose Anbindung Ihrer NFON-Anlage an CRM-, ERP- und Ticketsysteme.",
      color: "from-pink-500 to-pink-600",
      bg: "bg-pink-50",
    },
    {
      icon: Headphones,
      title: "Voicebots & KI",
      desc: "Entwicklung intelligenter Voicebots und Sprachassistenten direkt auf Basis Ihrer NFON-Anlage.",
      color: "from-indigo-500 to-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: FileText,
      title: "Individuelle Anpassungen",
      desc: "Maßgeschneiderte Konfigurationen, Workflows und Optimierungen für Ihre spezifischen Anforderungen.",
      color: "from-teal-500 to-teal-600",
      bg: "bg-teal-50",
    },
    {
      icon: Shield,
      title: "Persönlicher Ansprechpartner",
      desc: "Ein fester Experte, der Ihre Anlage kennt – erreichbar, verlässlich, ohne Ticketsystem-Frust.",
      color: "from-blue-600 to-cyan-500",
      bg: "bg-blue-50",
    },
  ];

  const entwicklung = [
    { icon: Code2, text: "CTI-Integrationen in bestehende CRM- und ERP-Systeme" },
    { icon: Settings, text: "Individuelle Schnittstellen und Automatisierungen" },
    { icon: Headphones, text: "Entwicklung moderner Voicebots und Sprachassistenten" },
    { icon: Zap, text: "KI-gestützte Telefonie- und Serviceprozesse" },
    { icon: Phone, text: "Intelligente Anrufsteuerung und Routing-Lösungen" },
    { icon: Building2, text: "Individuelle Kommunikationslösungen für komplexe Anforderungen" },
  ];

  const kundengruppen = [
    "Handwerksbetriebe und lokale Unternehmen",
    "Arztpraxen und Dienstleister",
    "Mittelständische Unternehmen",
    "Filial- und Standortunternehmen",
    "Internationale Organisationen",
    "Unternehmen mit KRITIS-/kritisnaher Infrastruktur",
  ];

  const gruende = [
    "Schnelle Reaktionszeiten",
    "Direkte Kommunikation",
    "Langfristige Betreuung",
    "Praxisnahe Lösungen",
    "Hohe Erreichbarkeit",
    "Individuelle Entwicklung statt Standardlösungen",
  ];

  const kritis = [
    "SLA-basierte Support- und Reaktionszeiten",
    "Backup der NFON-Konfiguration nach jeder relevanten Änderung",
    "Sichere Bereitstellung von Konfigurationsständen für den Ernstfall",
    "Vollständige und nachvollziehbare Dokumentation der gesamten NFON-Telefonanlage",
    "Dokumentation von Rufnummernkonzepten, Routing, Gruppen, Endgeräten und Integrationen",
    "Unterstützung bei Compliance- und Audit-Anforderungen",
  ];

  return (
    <div className="flex flex-col gap-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <SEO
        title="NFON Support & Service für Unternehmen | Zöllner Office"
        description="Persönlicher NFON Support – Voicebots, CTI-Integrationen und Cloud-Telefonie für Unternehmen. Schnell, sicher, zuverlässig. Jetzt anfragen: +49 3533 4807-12"
        canonical="/blog/nfon-support"
        type="article"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
              Gold-Service- &amp; Entwicklungspartner der NFON AG
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              NFON-Service &amp; Support{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                für Unternehmen
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-6">
              Persönlicher Service für Ihre Cloud-Telefonanlage. Als
              Gold-Service- und Entwicklungspartner von NFON AG begleiten wir
              Unternehmen langfristig, zuverlässig und persönlich – von der
              Einführung bis zum täglichen Betrieb.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-lg rounded-full px-8"
                >
                  Jetzt Beratung anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+4935334807-12">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +49 3533 4807-12
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro: Mehr als Telefonie */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                NFON Support &amp; Entwicklung aus einer Hand
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Als offizieller Entwicklungspartner der NFON AG bieten wir
                umfassenden NFON Support und entwickeln individuelle Lösungen
                rund um moderne Business-Kommunikation. Wir verbinden klassische
                Telefonie mit moderner Softwareentwicklung und schaffen Lösungen,
                die Prozesse automatisieren, Service verbessern und die
                Erreichbarkeit optimieren.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Gerade Unternehmen mit hohem Kommunikationsaufkommen profitieren
                von unserem persönlichen NFON Support, intelligenten
                Sprachlösungen, automatisierten Abläufen und nahtlosen
                Integrationen in bestehende Systeme.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {entwicklung.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="container max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-5">
              <Zap className="h-4 w-4" />
              Alles aus einer Hand
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5">
              Unser NFON Support
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Leistungen im Überblick
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der Einrichtung bis zum laufenden Betrieb – wir übernehmen alle Aufgaben rund um Ihre Cloud-Telefonanlage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {leistungen.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-xs font-bold text-slate-300 group-hover:text-slate-400 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Icon */}
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-bold text-base text-foreground mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                {/* Bottom accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundengruppen */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Für jede Unternehmensgröße – national und international
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir betreuen sämtliche Kundengruppen – von kleinen Unternehmen
                mit nur einer Nebenstelle bis hin zu internationalen
                Organisationen mit über 1.000 Nebenstellen und komplexen
                Standortstrukturen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dabei unterstützen wir nicht nur Kunden in Deutschland, sondern
                weltweit – zuverlässig, skalierbar und mit persönlichem Support.
                Gerade bei verteilten Standorten, internationalen
                Rufnummernkonzepten und hohen Anforderungen an Verfügbarkeit,
                Sicherheit und Integration profitieren unsere Kunden von unserer
                langjährigen Erfahrung.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {kundengruppen.map((gruppe, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-muted/20"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {gruppe}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bestehende NFON-Anlagen */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                NFON Support auch für bestehende Anlagen
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Viele Unternehmen nutzen bereits eine NFON-Telefonanlage,
                erhalten jedoch keinen zuverlässigen NFON Support oder wünschen
                sich einen persönlicheren Ansprechpartner. Genau hier kommen wir
                ins Spiel.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Wir übernehmen bestehende NFON-Umgebungen, analysieren die
                aktuelle Konfiguration und unterstützen bei Erweiterungen,
                Optimierungen und im täglichen Betrieb – schnell, kompetent und
                unkompliziert.
              </p>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8 mt-2"
                >
                  Bestehende Anlage übernehmen lassen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {gruende.map((grund, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    {grund}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KRITIS / Sicherheit */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-1.5 text-sm font-medium text-amber-700 mb-6">
              <Lock className="h-4 w-4" />
              Für sicherheitskritische Infrastrukturen
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Höchste Standards für Sicherheit, Dokumentation und Verfügbarkeit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Für Unternehmen mit hohen Anforderungen an Sicherheit,
              Nachvollziehbarkeit und Verfügbarkeit bieten wir auf Wunsch
              individuelle Service-Level-Agreements sowie strukturierte
              Betriebs- und Dokumentationsprozesse an.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {kritis.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-amber-50/50 border border-amber-100 rounded-xl"
              >
                <Shield className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 text-center border border-border/50">
            <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Gerade für Unternehmen mit Anforderungen aus{" "}
              <strong>NIS2, KRITIS, ISO 9001</strong> oder internen
              Sicherheitsrichtlinien ist eine saubere Dokumentation und ein
              strukturierter Betrieb heute unverzichtbar. Wir sorgen dafür, dass
              Ihre Kommunikationsinfrastruktur nicht nur funktioniert, sondern
              auch professionell dokumentiert, nachvollziehbar abgesichert und
              langfristig betreibbar ist.
            </p>
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Ihr Partner für NFON Support und moderne Business-Kommunikation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technik allein reicht heute nicht mehr aus. Entscheidend ist, wie
              schnell und zuverlässig NFON Support geleistet wird und ob ein
              Partner erreichbar ist, wenn Unterstützung benötigt wird.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Persönlicher NFON Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ein fester Ansprechpartner für Ihren NFON Support, der Ihre
                  Anlage kennt – kein anonymes Ticketsystem, keine langen
                  Warteschleifen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-2">
                  <Code2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">Eigene Entwicklung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Als Entwicklungspartner der NFON AG entwickeln wir individuelle
                  Integrationen, Voicebots und Automatisierungen direkt für Ihre
                  Prozesse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-2">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">National &amp; International</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ob kleines Unternehmen oder internationale Organisation mit
                  1.000+ Nebenstellen – wir skalieren mit Ihren Anforderungen.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ob kleine Unternehmen, Mittelstand oder internationale
              Standortstrukturen: Wir unterstützen Sie dabei, Ihre
              Unternehmenskommunikation modern, flexibel und zukunftssicher
              aufzustellen – mit persönlichem Support, technischer Erfahrung,
              eigener Entwicklungskompetenz und echter Leidenschaft für Service.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold shadow-lg rounded-full px-10"
              >
                Jetzt unverbindlich anfragen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <GoogleReviews />
    </div>
  );
}
