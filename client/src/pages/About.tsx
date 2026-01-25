import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Building2, Users, Award, CheckCircle2, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Über uns"
        description="Zöllner Büro- & IT-Systeme GmbH - Ihr Partner für intelligente Sprachassistenten. Erfahren Sie mehr über unsere Geschichte, unser Team und unsere Partnerschaften mit NFON und botario."
        canonical="/ueber-uns"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-hero-office.jpg"
            alt="Zöllner Team - Voice AI Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Seit über 30 Jahren Ihr Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Über{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Zöllner Büro- & IT-Systeme
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Wir verbinden über 30 Jahre Erfahrung in Büro- und IT-Systemen mit modernster KI-Technologie. 
              Unsere Mission: Unternehmen erreichbar machen und Mitarbeiter entlasten.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Unsere Geschichte
              </h2>
              <p className="text-lg text-muted-foreground">
                Von der Bürotechnik zur Voice AI – eine Erfolgsgeschichte aus Elsterwerda
              </p>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Die Anfänge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Zöllner Büro- & IT-Systeme GmbH wurde mit der Vision gegründet, Unternehmen in der Region Elsterwerda 
                    mit modernster Bürotechnik und IT-Infrastruktur zu versorgen. Was als klassischer Bürotechnik-Händler begann, 
                    entwickelte sich schnell zu einem ganzheitlichen IT-Dienstleister mit Fokus auf Kommunikationslösungen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Der Wandel zur Cloud-Telefonie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mit dem Aufkommen der Cloud-Telefonie erkannten wir frühzeitig das Potenzial moderner VoIP-Systeme. 
                    Als zertifizierter NFON-Partner begleiten wir seit Jahren Unternehmen bei der Umstellung von klassischen 
                    Telefonanlagen auf flexible Cloud-Lösungen. Diese Expertise bildet heute die perfekte Grundlage für unsere 
                    Voicebot-Integration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Der Schritt zur KI-gestützten Kommunikation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Digitalisierung brachte neue Herausforderungen: Unternehmen müssen rund um die Uhr erreichbar sein, 
                    ohne ihre Mitarbeiter zu überlasten. Hier kamen intelligente Sprachassistenten ins Spiel. Durch unsere 
                    Partnerschaft mit botario, einer führenden KI-Voicebot-Plattform, können wir heute maßgeschneiderte 
                    Voice-AI-Lösungen anbieten, die nahtlos in bestehende Telefonsysteme integriert werden.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Heute: Ihr Partner für intelligente Kommunikation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mit Standorten in Elsterwerda und Dresden betreuen wir heute Unternehmen aus den unterschiedlichsten Branchen – 
                    von Arztpraxen über Handwerksbetriebe bis hin zu E-Commerce-Unternehmen. Unser Team verbindet technisches 
                    Know-how mit tiefem Verständnis für geschäftliche Prozesse. Wir sprechen die Sprache unserer Kunden und 
                    entwickeln Lösungen, die wirklich funktionieren.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Experten für Telefonie, IT und KI – vereint durch eine gemeinsame Vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                    PG
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Peter Gemander</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">Geschäftsführer</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Mit über 30 Jahren Erfahrung in der Büro- und IT-Branche leitet Peter Gemander das Unternehmen 
                      mit klarer Vision: Technologie muss dem Menschen dienen, nicht umgekehrt. Seine Expertise in 
                      Kommunikationslösungen prägt die strategische Ausrichtung des Unternehmens.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shrink-0">
                    <Users className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Unser Experten-Team</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">IT-Spezialisten & Voice-AI-Consultants</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Unser interdisziplinäres Team aus IT-Technikern, Telefonie-Experten und KI-Spezialisten arbeitet 
                      Hand in Hand, um maßgeschneiderte Voicebot-Lösungen zu entwickeln. Von der Beratung über die 
                      Implementierung bis zum Support – wir begleiten Sie auf jedem Schritt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Unsere Partnerschaften
            </h2>
            <p className="text-lg text-muted-foreground">
              Starke Partner für erstklassige Lösungen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* NFON Partnership */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/images/nfon-logo.png" alt="NFON Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">NFON</h3>
                    <p className="text-sm text-muted-foreground font-medium">Zertifizierter Cloud-Telefonie Partner</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Als zertifizierter NFON-Partner bieten wir professionelle Cloud-Telefonie-Lösungen für Unternehmen jeder Größe. 
                  NFON ist Europas führender Anbieter für Cloud-Telefonanlagen und ermöglicht flexible, skalierbare 
                  Kommunikationslösungen ohne teure Hardware-Investitionen.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Europaweite Cloud-Infrastruktur</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>DSGVO-konforme Datenhaltung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>99,9% Verfügbarkeitsgarantie</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Nahtlose Voicebot-Integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* botario Partnership */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2">
                    <img src="/images/botario-logo.jpg" alt="botario Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">botario</h3>
                    <p className="text-sm text-muted-foreground font-medium">Premium KI-Voicebot Plattform</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Durch unsere Partnerschaft mit botario setzen wir auf eine der fortschrittlichsten KI-Voicebot-Plattformen 
                  am Markt. botario kombiniert modernste Natural Language Processing (NLP) Technologie mit intuitiver 
                  Konfiguration und ermöglicht hochgradig personalisierte Sprachassistenten.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Modernste GPT-basierte KI-Technologie</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Mehrsprachige Konversationen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Natürliche Stimmen mit Emotionen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>CRM- und Kalender-Integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-primary/20 bg-primary/5 max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary shrink-0 mt-1" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-primary mb-2">Das Beste aus beiden Welten</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Kombination aus NFON Cloud-Telefonie und botario KI-Voicebots ermöglicht uns, 
                      End-to-End-Lösungen anzubieten, die nahtlos zusammenarbeiten. Ihre Anrufer erleben 
                      professionelle Gesprächsführung, während Ihre Mitarbeiter entlastet werden – alles aus einer Hand.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground">
              Was uns antreibt und wie wir arbeiten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Qualität vor Quantität
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir setzen nicht auf Masse, sondern auf maßgeschneiderte Lösungen, die wirklich funktionieren. 
                  Jeder Voicebot wird individuell auf Ihre Bedürfnisse trainiert und kontinuierlich optimiert.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Transparenz & Vertrauen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keine versteckten Kosten, keine leeren Versprechen. Wir kommunizieren offen, was möglich ist 
                  und was (noch) nicht. Datenschutz nach DSGVO ist für uns nicht verhandelbar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  Innovation mit Sinn
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir nutzen KI nicht als Selbstzweck, sondern um echte Probleme zu lösen. Technologie muss 
                  dem Menschen dienen und den Arbeitsalltag erleichtern – nicht komplizierter machen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Werden Sie Teil der Zukunft
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            Lassen Sie uns gemeinsam Ihren Kundenservice auf das nächste Level heben. 
            Profitieren Sie von über 30 Jahren Erfahrung und modernster KI-Technologie.
          </p>
          <Link href="/kontakt">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Jetzt Beratungstermin vereinbaren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
