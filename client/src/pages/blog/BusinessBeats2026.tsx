import SEO from "@/components/SEO";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Clock, Users, ExternalLink, Ticket } from "lucide-react";
import { Link } from "wouter";

export default function BusinessBeats2026() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title: "onOffice business-beats 2026 ✓ sprachassistent.net",
        description: "Live-Demo Voicebot-Integration in onOffice mit Peter Gemander von Zöllner Büro- und IT-Systeme GmbH, perfekte Lösung für Immobilienmakler",
        url: "https://www.sprachassistent.net/blog/business-beats-2026-onoffice-voicebot",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/business-beats-hero-2026-jZnDmrkB7YXis7h5S2DkzV.webp",
        datePublished: "2026-03-30",
        dateModified: "2026-03-30"
      }),
      {
        "@type": "Event",
        "name": "onOffice business-beats 2026",
        "description": "Live-Demo Voicebot-Integration in onOffice mit Peter Gemander von Zöllner Büro- und IT-Systeme GmbH. Branchentreff für Immobilienmakler mit Voicebot, Timum Integration, CRM Automatisierung und Networking.",
        "startDate": "2026-05-08T09:00:00+02:00",
        "endDate": "2026-05-08T22:00:00+02:00",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
          "@type": "Place",
          "name": "DAS LIEBIG",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Liebigstraße 19",
            "addressLocality": "Aachen",
            "postalCode": "52070",
            "addressCountry": "DE"
          }
        },
        "image": "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/business-beats-hero-2026-jZnDmrkB7YXis7h5S2DkzV.webp",
        "url": "https://www.sprachassistent.net/blog/business-beats-2026-onoffice-voicebot",
        "organizer": {
          "@type": "Organization",
          "name": "onOffice software GmbH",
          "url": "https://www.business-beats.com"
        },
        "performer": {
          "@type": "Person",
          "name": "Peter Gemander",
          "worksFor": {
            "@type": "Organization",
            "name": "Zöllner Büro- und IT-Systeme GmbH"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "349",
          "priceCurrency": "EUR",
          "url": "https://www.business-beats.com/tickets/",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-03-30"
        }
      },
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "onOffice business-beats 2026", url: "/blog/business-beats-2026-onoffice-voicebot" }
      ])
    ]
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="onOffice business-beats 2026 ✓ sprachassistent.net"
        description="Live-Demo Voicebot-Integration in onOffice mit Peter Gemander von Zöllner Büro- und IT-Systeme GmbH, perfekte Lösung für Immobilienmakler"
        canonical="/blog/business-beats-2026-onoffice-voicebot"
        type="article"
        keywords="onOffice business-beats 2026, onOffice Voicebot, Timum onOffice, NFON Cloudya, Immobilienmakler KI, Peter Gemander, Zöllner Office, Aachen, business-beats Event"
        robots="index, follow"
        schema={articleSchema}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/business-beats-hero-2026-jZnDmrkB7YXis7h5S2DkzV.webp"
          alt="onOffice business-beats 2026 – Das Branchenevent für Immobilienmakler in Aachen"
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
            onOffice business-beats 2026 – Wir sind dabei mit Live-Demo zur Voicebot-Integration
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-12 text-sm">
            <span>8. Mai 2026</span>
            <span>•</span>
            <span>Lesezeit: 4 Min.</span>
            <span>•</span>
            <span>Von Zöllner Office</span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            Am <strong>8. Mai 2026</strong> findet in Aachen das <strong>11. onOffice business-beats</strong> statt – das Branchenevent des Jahres für Immobilienmakler. <strong>Peter Gemander</strong> von der Zöllner Büro- und IT-Systeme GmbH ist live vor Ort und präsentiert, wie Voicebots direkt in onOffice integriert werden können. Mit dabei: ein echtes Praxisbeispiel von <strong>Uwe Ortlepp</strong> aus der Immobilienfinanzierung.
          </p>

          {/* Event-Eckdaten */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Datum</div>
                <div className="text-muted-foreground">8. Mai 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Veranstaltungsort</div>
                <div className="text-muted-foreground">DAS LIEBIG, Liebigstraße 19, 52070 Aachen</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Ticket className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Ticketpreis</div>
                <div className="text-muted-foreground">Normalpreis: 349 €</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="h-5 w-5 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Fortbildung</div>
                <div className="text-muted-foreground">3 MaBV-Fortbildungsstunden</div>
              </div>
            </div>
          </div>

          {/* Was sind die business-beats */}
          <h2 className="text-2xl font-bold text-foreground mb-4">Was sind die onOffice business-beats?</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Die <strong>onOffice business-beats</strong> sind das jährliche Highlight-Event der deutschen Immobilienbranche. Seit über einem Jahrzehnt bringt das Event Makler, Technologieanbieter und Branchenexperten zusammen – zum Austausch, zur Weiterbildung und zum Netzwerken auf höchstem Niveau. Mit jährlich wachsenden Teilnehmerzahlen und einem abwechslungsreichen Programm aus Fachvorträgen, Branchentalk und Ausstellern hat sich das Event als <em>DAS</em> Makler-Event des Jahres etabliert.
          </p>
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            2026 findet die <strong>11. Ausgabe</strong> statt – im DAS LIEBIG in Aachen. Nach der Tagesveranstaltung lädt eine exklusive <strong>After-Show-Party</strong> mit Liveband und Premium-Catering zum weiteren Netzwerken ein. Kurzum: Wer in der Immobilienbranche vernetzt sein möchte, ist hier richtig.
          </p>

          {/* YouTube Video */}
          <div className="mb-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/jy0mYK5qjBI"
                title="onOffice business-beats – Das Branchenevent für Immobilienmakler"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Eindrücke von den vergangenen business-beats – so wird auch 2026 wieder
            </p>
          </div>

          {/* Warum onOffice so wichtig ist */}
          <h2 className="text-2xl font-bold text-foreground mb-4">Warum onOffice für Immobilienmakler unverzichtbar ist</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            <strong>onOffice</strong> ist die führende CRM- und Maklersoftware im deutschsprachigen Raum. Tausende Immobilienbüros verwalten damit ihre Objekte, Kontakte, Termine und Akquise-Prozesse – alles in einer zentralen Plattform. Die Software ist tief in die täglichen Abläufe von Maklern integriert: von der Exposé-Erstellung über die Kundenkommunikation bis hin zur Terminverwaltung.
          </p>
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            Genau deshalb ist die <strong>direkte Anbindung von Voicebots an onOffice</strong> ein entscheidender Schritt: Wenn ein Anrufer rund um die Uhr einen Besichtigungstermin buchen kann – und dieser Termin automatisch in onOffice landet, ohne manuelle Eingabe – dann spart das täglich wertvolle Zeit und verhindert, dass Leads verloren gehen.
          </p>

          {/* Peter Gemanders Themen */}
          <h2 className="text-2xl font-bold text-foreground mb-6">Das bringt Peter Gemander mit nach Aachen</h2>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            <strong>Peter Gemander</strong> von der Zöllner Büro- und IT-Systeme GmbH ist Spezialist für moderne Kommunikationslösungen in der Immobilienbranche. Bei den business-beats 2026 präsentiert er zwei konkrete Themen, die zeigen, wie Technologie den Makleralltag revolutioniert:
          </p>

          {/* Thema 1 */}
          <div className="mb-8 p-6 bg-card rounded-2xl border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 text-lg">1</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">NFON Cloudya – Cloud-Telefonie mit onOffice-Anbindung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>NFON Cloudya</strong> ist eine moderne Cloud-Telefonanlage, die sich nahtlos in onOffice integrieren lässt. Eingehende Anrufe werden automatisch dem richtigen Kontakt zugeordnet, Gesprächsnotizen direkt im CRM gespeichert und Rückrufaufgaben automatisch angelegt. Das Ergebnis: weniger Klicks, mehr Fokus auf das Wesentliche – den Kunden.
                </p>
              </div>
            </div>
          </div>

          {/* Thema 2 */}
          <div className="mb-12 p-6 bg-card rounded-2xl border border-border shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 text-lg">2</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Voicebot + Timum = automatische Terminbuchung direkt in onOffice</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Das Herzstück der Präsentation: Ein <strong>KI-Voicebot</strong>, der über die Terminbuchungsplattform <strong>Timum</strong> Termine direkt in onOffice einträgt – vollautomatisch, 24/7, ohne menschliches Zutun. Interessenten rufen an, der Bot fragt nach dem gewünschten Termin, prüft die Verfügbarkeit und bucht direkt. Kein Zettel, kein Rückruf, keine manuelle Eingabe.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Besichtigungstermine rund um die Uhr per Telefon buchbar</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Automatische Synchronisation in onOffice – ohne manuelle Eingabe</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Mietanfragen werden qualifiziert und strukturiert erfasst</li>
                  <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Entlastung des Büropersonals von Routineanfragen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Praxisbeispiel Uwe Ortlepp */}
          <div className="mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-lg font-bold text-foreground mb-3">Live-Praxisbeispiel: Uwe Ortlepp, Immobilienfinanzierung</h3>
            <p className="text-muted-foreground leading-relaxed">
              Besonders spannend: <strong>Uwe Ortlepp</strong> aus der Immobilienfinanzierung ist persönlich vor Ort und zeigt anhand seines eigenen Unternehmens, wie der Voicebot in der Praxis funktioniert. Kein Theorie-Vortrag, sondern ein echtes, bereits im Einsatz befindliches System – mit messbaren Ergebnissen. Mehr Abschlüsse, weniger Aufwand, 24/7 erreichbar.
            </p>
            <Link href="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung">
              <Button variant="outline" className="mt-4 text-primary border-primary/30 hover:bg-primary/5">
                Praxisbeispiel ansehen <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Jetzt Termin vereinbaren */}
          <div className="mb-12 p-6 bg-slate-900 text-white rounded-2xl">
            <h3 className="text-lg font-bold mb-3">Jetzt schon Termin mit Peter Gemander vereinbaren</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Sie möchten sich die Voicebot-Integration vor Ort in Ruhe erklären lassen? Vereinbaren Sie noch heute einen persönlichen Gesprächstermin mit Peter Gemander für den 8. Mai 2026 in Aachen – bevor die Slots ausgebucht sind.
            </p>
            <Link href="/kontakt">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Termin anfragen
              </Button>
            </Link>
          </div>

          {/* Tickets */}
          <div className="mb-12 p-6 bg-card rounded-2xl border border-border shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-3">Tickets & Anmeldung</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Tickets für die onOffice business-beats 2026 sind zum <strong>Normalpreis von 349 €</strong> erhältlich. Die Anmeldung erfolgt direkt über die offizielle Website. Bitte beachten Sie: Tickets sind erst nach vollständiger Bezahlung gültig. Bei Buchung im Motel One Aachen gilt der Code <strong>„business-beats 2026"</strong> für Sonderkonditionen.
            </p>
            <a href="https://www.business-beats.com/tickets/" target="_blank" rel="noopener noreferrer">
              <Button className="mt-3 bg-primary hover:bg-primary/90 text-white">
                Jetzt Ticket sichern <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Fazit */}
          <h2 className="text-2xl font-bold text-foreground mb-4">Fazit: Ein Event, das sich lohnt</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            Die onOffice business-beats 2026 sind mehr als eine Konferenz – sie sind der Treffpunkt der Immobilienbranche. Wer verstehen möchte, wie KI-Voicebots und Cloud-Telefonie den Makleralltag konkret verändern, sollte sich den <strong>8. Mai 2026 in Aachen</strong> fest vormerken. Peter Gemander und Uwe Ortlepp zeigen live, was heute schon möglich ist.
          </p>
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            Wir freuen uns auf persönliche Gespräche, spannende Einblicke und neue Kontakte. Bis Aachen!
          </p>

          {/* Weitere Artikel */}
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-bold text-foreground mb-6">Weitere Artikel zum Thema</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ki-tagung-wohnungsgenossenschaften-2026">
                <div className="group rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/ki-tagung-airport-conference-boNhqRTLWGMLwVojLUrzQV.webp"
                    alt="KI-Tagung Wohnungsgenossenschaften"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-foreground text-sm">KI-Tagung der sächsischen Wohnungsgenossenschaften – Wir sind dabei</p>
                    <p className="text-xs text-muted-foreground mt-1">Am 19. Mai 2026 in Dresden</p>
                  </div>
                </div>
              </Link>
              <Link href="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung">
                <div className="group rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/voicebot-immobilienmakler-poster_29ce919c.jpg"
                    alt="Uwe Ortlepp Praxisbeispiel"
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-foreground text-sm">Praxisbeispiel: Uwe Ortlepp Immobilienfinanzierung</p>
                    <p className="text-xs text-muted-foreground mt-1">Voicebot in der Praxis – live erleben</p>
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
