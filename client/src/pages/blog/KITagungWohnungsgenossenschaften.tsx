import SEO from "@/components/SEO";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Clock, Users, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function KITagungWohnungsgenossenschaften() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: "KI-Tagung der sächsischen Wohnungsgenossenschaften – Zöllner Office am Stand 11",
        description: "Kostenlose Beratung zu Voicebots: Automatisieren Sie Termine mit onOffice und Timum für Immobilienmakler und Wohnungsgenossenschaften effizient und zeitsparend.",
        url: "https://www.sprachassistent.net/blog/ki-tagung-wohnungsgenossenschaften-2026",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/ki-tagung-airport-conference-boNhqRTLWGMLwVojLUrzQV.webp",
        datePublished: "2026-03-20",
        dateModified: "2026-03-20"
      }),
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "KI-Tagung Wohnungsgenossenschaften 2026", url: "/blog/ki-tagung-wohnungsgenossenschaften-2026" }
      ])
    ]
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="KI-Tagung der sächsischen Wohnungsgenossenschaften 2026 – Zöllner Office am Stand 11"
        description="Kostenlose Beratung zu Voicebots: Automatisieren Sie Termine mit onOffice und Timum für Immobilienmakler und Wohnungsgenossenschaften effizient und zeitsparend."
        canonical="/blog/ki-tagung-wohnungsgenossenschaften-2026"
        type="article"
        keywords="KI-Tagung, Wohnungsgenossenschaften, Voicebot, onOffice, Timum, Wohnungswirtschaft, VSWG, Dresden, Zöllner Office"
        schema={articleSchema}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/ki-tagung-airport-conference-boNhqRTLWGMLwVojLUrzQV.webp"
          alt="KI-Tagung Wohnungswirtschaft Dresden – Fachleute im Gespräch an Ausstellungsstand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      <article className="bg-background py-20 -mt-32 relative z-10">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-0 hover:bg-transparent hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Übersicht
            </Button>
          </Link>

          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
            Veranstaltung
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            KI-Tagung der sächsischen Wohnungsgenossenschaften – Wir sind dabei
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-12 text-sm">
            <span>20. März 2026</span>
            <span>•</span>
            <span>Lesezeit: 3 Min.</span>
            <span>•</span>
            <span>Von Zöllner Office</span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            Am 19. Mai 2026 findet in Dresden der Thementag <strong>„KI ist jetzt – Chefsache und Alltag in der Wohnungswirtschaft"</strong> statt – organisiert vom Verband der Sächsischen Wohnungsgenossenschaften (VSWG). Zöllner Büro- & IT Systeme GmbH ist am <strong>Stand Nr. 11</strong> vertreten und berät Wohnungsunternehmen und Immobilienmakler zu KI-gestützten Voicebots – insbesondere zur Integration mit onOffice und Timum.
          </p>

          {/* Was ist die KI-Tagung */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Was ist die KI-Tagung der Wohnungswirtschaft?
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Der Thementag des VSWG richtet sich an Führungskräfte und Fachleute aus Wohnungsgenossenschaften und Wohnungsunternehmen in Sachsen. Im Mittelpunkt steht die Frage, wie Künstliche Intelligenz heute schon im Alltag der Wohnungswirtschaft eingesetzt werden kann – von der Mieterbetreuung über die Verwaltung bis hin zur Kommunikation.
          </p>
          <p className="text-base mb-6 leading-relaxed">
            Die Veranstaltung bietet Fachvorträge, Praxisbeispiele und die Möglichkeit, sich mit Anbietern und Experten direkt auszutauschen. Genau dort sind wir mit unserem Voicebot-Angebot vertreten.
          </p>

          {/* Unsere Expertise */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Unsere Expertise: Voicebots für die Wohnungswirtschaft
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Als Entwicklungspartner der NFON AG sind wir Experten für KI-gestützte Voicebots in der Wohnungswirtschaft. Unsere Bots automatisieren Mieteranfragen, entlasten den Kundenservice und sichern eine schnelle, digitale Erreichbarkeit – rund um die Uhr.
          </p>
          <p className="text-base mb-6 leading-relaxed">
            Mit unserer Expertise helfen wir Wohnungsunternehmen und Immobilienmakler, Prozesse zu modernisieren, Servicequalität zu steigern und die Kommunikation mit Mietern zukunftssicher & DSGVO-konform zu gestalten.
          </p>

          {/* onOffice + Timum Integration */}
          <div className="bg-primary/5 rounded-xl p-8 my-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">
              Highlight: Voicebot + onOffice + Timum
            </h3>
            <p className="text-base mb-4 leading-relaxed">
              Ein besonderes Thema am Stand Nr. 11 ist die Möglichkeit, Voicebots direkt mit der Immobiliensoftware <strong>onOffice</strong> über die Terminbuchungsplattform <strong>Timum</strong> zu verbinden. Das bedeutet für Wohnungsunternehmen und Immobilienmakler:
            </p>
            <div className="space-y-3">
              {[
                "Mieter können Besichtigungstermine und Beratungsgespräche rund um die Uhr per Telefon buchen",
                "Termine werden automatisch in onOffice synchronisiert – ohne manuelle Eingabe",
                "Schadensmeldungen werden aufgenommen und direkt weitergeleitet",
                "Mietanfragen werden qualifiziert und strukturiert erfasst",
                "Entlastung des Büropersonals von Routineanfragen",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Veranstaltungsdetails */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Veranstaltungsdetails
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-muted/50 rounded-xl p-5 flex gap-4 items-start">
              <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Datum</p>
                <p className="text-sm text-muted-foreground">19. Mai 2026</p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-5 flex gap-4 items-start">
              <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Veranstaltungsort</p>
                <p className="text-sm text-muted-foreground">
                  Conference Center Dresden Airport<br />
                  Ebene 2 – Konferenzebene<br />
                  Wilhelmine-Reichard-Ring 1<br />
                  01109 Dresden
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-5 flex gap-4 items-start">
              <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Unser Stand</p>
                <p className="text-sm text-muted-foreground">Stand Nr. 11 – Zöllner Büro- & IT Systeme GmbH</p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-5 flex gap-4 items-start">
              <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">Anmeldeschluss</p>
                <p className="text-sm text-muted-foreground">30. April 2026</p>
              </div>
            </div>
          </div>

          {/* Teilnahmegebühren */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Teilnahmegebühren
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold rounded-tl-lg">Kategorie</th>
                  <th className="text-left p-3 font-semibold">1. Teilnehmer</th>
                  <th className="text-left p-3 font-semibold rounded-tr-lg">Weitere Teilnehmer</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-3 font-medium">Mitglieder</td>
                  <td className="p-3 text-muted-foreground">280 Euro</td>
                  <td className="p-3 text-muted-foreground">260 Euro</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Nichtmitglieder</td>
                  <td className="p-3 text-muted-foreground">360 Euro</td>
                  <td className="p-3 text-muted-foreground">340 Euro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Die Teilnahmegebühr beinhaltet Tagungsunterlagen und Catering.
          </p>

          {/* Anmeldung */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Anmeldung
          </h2>
          <p className="text-base mb-4 leading-relaxed">
            Bitte senden Sie Ihre Anmeldung bis spätestens <strong>30. April 2026</strong> an den VSWG:
          </p>
          <ul className="text-base text-muted-foreground mb-6 space-y-1">
            <li>per Fax: <strong>0351 80701-66</strong></li>
            <li>per E-Mail: <a href="mailto:veranstaltung@vswg.de" className="text-primary hover:underline">veranstaltung@vswg.de</a></li>
            <li>Online: <a href="https://www.vswg.de/index.php?id=256" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.thementag.vswg.de</a></li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://www.vswg.de/index.php?id=256"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto gap-2">
                <ExternalLink className="h-4 w-4" />
                Jetzt zur Veranstaltung anmelden
              </Button>
            </a>
            <a
              href="https://thementag.vswg.de/TTKI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full sm:w-auto gap-2 bg-background">
                <ExternalLink className="h-4 w-4" />
                Veranstaltungswebseite
              </Button>
            </a>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-xl p-8 mt-16 border border-primary/10 text-center">
            <h3 className="text-2xl font-bold mb-3">Treffen Sie uns am Stand Nr. 11</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Kommen Sie am 19. Mai 2026 an unseren Stand und erfahren Sie, wie ein Voicebot Ihre Mieterkommunikation automatisiert – DSGVO-konform und rund um die Uhr.
            </p>
            <Link href="/kontakt">
              <Button size="lg">
                Vorab Beratungsgespräch vereinbaren
              </Button>
            </Link>
          </div>
          {/* Weitere Artikel */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Weitere Artikel zum Thema</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/blog/wohnungswirtschaft-voicebot">
                <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/wohnungswirtschaft-voicebot-hero_0f85733d.png"
                      alt="Voicebot in der Wohnungswirtschaft"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                      Wohnungswirtschaft
                    </div>
                    <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      Voicebot in der Wohnungswirtschaft: Praxisbericht
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Wie Wohnungsunternehmen und Immobilienmakler mit KI-Voicebots Mieteranfragen automatisieren und den Kundenservice entlasten.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/blog/voicebot-kmu-kosten-roi">
                <div className="group rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/DxjkMTxZCjnyTRIc.jpg"
                      alt="Voicebot für KMU"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                      KMU & Mittelstand
                    </div>
                    <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      Voicebot für KMU: Lohnt sich das?
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Umfassende Analyse der Kosten, des Nutzens und der praktischen Einsatzmöglichkeiten von KI-Telefonassistenten.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
