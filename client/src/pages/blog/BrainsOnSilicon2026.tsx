import SEO from "@/components/SEO";
import RelatedPosts from "@/components/RelatedPosts";
import AIBadge from "@/components/AIBadge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  MapPin,
  MessageSquareText,
  Network,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const EVENT_URL = "https://brainsonsilicon.com/";
const PARTNER_URL = "https://brainsonsilicon.com/partner";
const PROGRAM_URL = "https://brainsonsilicon.com/programm";
const TICKET_URL = "https://shop.brainsonsilicon.com/";
const HERO_IMAGE = "/manus-storage/brains-on-silicon-2026-hero-2000_d660b672.webp";
const ARTICLE_URL = "https://www.sprachassistent.net/blog/brains-on-silicon-2026";

export default function BrainsOnSilicon2026() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title:
          "Brains on Silicon 2026: Peter Gemander am NFON-Stand für angewandte KI in der Business-Kommunikation",
        description:
          "Brains on Silicon 2026 in Dresden: Treffen Sie Peter Gemander am NFON-Stand und erfahren Sie, wie KI-Voicebots Business-Kommunikation in die Praxis bringen.",
        url: ARTICLE_URL,
        image: `https://www.sprachassistent.net${HERO_IMAGE}`,
        datePublished: "2026-08-20",
        dateModified: "2026-08-20",
      }),
      {
        "@type": "Event",
        name: "Brains on Silicon 2026",
        description:
          "B2B-Konferenz für angewandte KI mit Konferenz, Expo, Startup-Zone, Masterclasses und Networking in Dresden.",
        startDate: "2026-09-14",
        endDate: "2026-09-15",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "ICD Dresden",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dresden",
            addressCountry: "DE",
          },
        },
        image: `https://www.sprachassistent.net${HERO_IMAGE}`,
        url: EVENT_URL,
        organizer: {
          "@type": "Organization",
          name: "CONFGAMES",
          url: "https://www.confgames.com/",
        },
        sameAs: EVENT_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Wann und wo findet Brains on Silicon 2026 statt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Brains on Silicon 2026 findet am 14. und 15. September 2026 im ICD Dresden statt.",
            },
          },
          {
            "@type": "Question",
            name: "Wo ist Peter Gemander bei Brains on Silicon 2026 anzutreffen?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Peter Gemander ist als Entwicklungspartner von NFON am NFON-Stand vertreten. Zöllner Office hat keinen eigenen Stand.",
            },
          },
          {
            "@type": "Question",
            name: "Welches Praxisbeispiel stellt Zöllner Office vor?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Als unabhängig von der Konferenz umgesetztes Praxisbeispiel dient Uwe Ortlepp Immobilien Finanzierung: eine Voicebot-Integration für bessere Erreichbarkeit und automatisierte Terminbuchung.",
            },
          },
        ],
      },
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Brains on Silicon 2026", url: "/blog/brains-on-silicon-2026" },
      ]),
    ],
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Brains on Silicon 2026: Peter Gemander am NFON-Stand"
        description="Brains on Silicon 2026 in Dresden: Treffen Sie Peter Gemander am NFON-Stand. Mit einem verlinkten Praxisbeispiel zu KI-Voicebots für die Business-Kommunikation."
        canonical="/blog/brains-on-silicon-2026"
        type="article"
        image={`https://www.sprachassistent.net${HERO_IMAGE}`}
        keywords="Brains on Silicon 2026, Brains on Silicon Dresden, NFON Stand, Peter Gemander, Zöllner Office, KI Konferenz Dresden, angewandte KI, Voicebot, Uwe Ortlepp Immobilien Finanzierung"
        robots="index, follow"
        schema={schema}
      />

      <section className="relative h-[420px] overflow-hidden md:h-[540px]">
        <img
          src={HERO_IMAGE}
          alt="Abstrakte B2B-Konferenzszene mit KI- und Kommunikationsfokus"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/15" />
        <AIBadge />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container max-w-5xl pb-10 md:pb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5" /> 14.–15. September 2026 · Dresden
            </div>
            <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.85)] sm:text-4xl md:text-6xl">
              Brains on Silicon 2026: Angewandte KI trifft Business-Kommunikation
            </h1>
          </div>
        </div>
      </section>

      <article className="bg-background py-14 md:py-20">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Übersicht
            </Button>
          </Link>

          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Veranstaltung
          </div>
          <p className="mb-3 text-sm text-muted-foreground">
            20. August 2026 · Von Zöllner Office · Lesezeit: 5 Min.
          </p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Gemeinsam die Umsetzungslücke schließen
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Mit <strong>Brains on Silicon 2026</strong> kommt am 14. und 15. September die B2B-Konferenz für angewandte KI ins ICD Dresden. Das Format verbindet Konferenz, Expo, Startup-Zone und Masterclasses – mit dem Ziel, aus KI-Ideen nachvollziehbare Anwendungen für Unternehmen zu machen. Der Veranstalter kündigt mehr als 100 Speaker:innen und mehr als 1.500 Teilnehmende an. <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Die offizielle Veranstaltungsseite</a> fasst diesen Anspruch unter dem Leitmotiv „Closing the implementation gap“ zusammen.
          </p>

          <section className="mb-12 grid grid-cols-1 gap-4 rounded-2xl border border-primary/10 bg-primary/5 p-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 text-sm">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Datum</div>
                <div className="text-muted-foreground">14.–15. September 2026</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Ort</div>
                <div className="text-muted-foreground">ICD Dresden</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Format</div>
                <div className="text-muted-foreground">KI-Konferenz, Expo, Masterclasses und Networking</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Network className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Themen</div>
                <div className="text-muted-foreground">Applied AI, Agentic Workflows, KI-Governance und Souveränität</div>
              </div>
            </div>
          </section>

          <section className="mb-12 overflow-hidden rounded-2xl border border-cyan-300/25 bg-slate-950 text-white shadow-lg shadow-cyan-950/10">
            <div className="bg-[radial-gradient(circle_at_top_right,rgba(22,211,238,0.24),transparent_42%)] p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-cyan-200">
                <Sparkles className="h-5 w-5" /> Treffen Sie Zöllner Office am NFON-Stand
              </div>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Peter Gemander im Austausch zu Voicebots und intelligenter Telefonie
              </h3>
              <p className="leading-relaxed text-slate-200">
                <strong>Peter Gemander</strong>, Geschäftsführer der Zöllner Büro- und IT-Systeme GmbH, ist als Entwicklungspartner von NFON am NFON-Stand vertreten. Zöllner Office hat keinen eigenen Stand. Im persönlichen Gespräch geht es um die Frage, wie sich KI-gestützte Business-Kommunikation verlässlich in bestehende Prozesse integrieren lässt: von der ersten Anrufannahme über die strukturierte Anliegenaufnahme bis zur Terminbuchung und Übergabe an das Team.
              </p>
            </div>
          </section>

          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Warum Brains on Silicon für Unternehmen relevant ist
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Das offizielle Programm spannt den Bogen von Enterprise AI und KI-Governance über digitale Souveränität bis zu KI-Automatisierung im Service. Es macht damit deutlich: Der entscheidende Schritt ist nicht allein der Zugang zu neuen Modellen, sondern ihre sichere, verständliche und wirtschaftlich sinnvolle Anwendung im Alltag. Für Teams mit hohem Telefon- und Serviceaufkommen ist intelligente Kommunikation ein greifbarer Einstieg in diese Umsetzung.
          </p>
          <p className="mb-12 leading-relaxed text-muted-foreground">
            Genau hier setzt der Austausch am NFON-Stand an. Moderne Cloud-Telefonie, CRM- und Terminprozesse sowie KI-Assistenten können so zusammenspielen, dass Routineanfragen zuverlässig erfasst werden und Mitarbeitende mehr Zeit für Fälle erhalten, in denen Fachwissen und persönliche Beratung den Unterschied machen.
          </p>

          <section className="mb-12 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
            <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Praxisbeispiel · unabhängig von der Konferenz
            </div>
            <div className="mb-4 flex items-center gap-3 text-primary">
              <MessageSquareText className="h-6 w-6" />
              <h2 className="text-2xl font-bold text-foreground">Praxisbeispiel: Uwe Ortlepp Immobilien Finanzierung</h2>
            </div>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Als Referenz aus der Praxis zeigt das bereits gemeinsam mit <strong>Uwe Ortlepp Immobilien Finanzierung</strong> umgesetzte Voicebot-Projekt, wie telefonische Erreichbarkeit unterstützt und Termine automatisiert in bestehende Abläufe überführt werden können. Das Praxisbeispiel ist unabhängig von Brains on Silicon entstanden und zeigt, wie aus einer abstrakten KI-Diskussion ein konkreter Nutzen für Beratung, Service und Backoffice wird.
            </p>
            <Link href="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                Praxisbeispiel ansehen <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </section>

          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Erfahrung zählt bei der Umsetzung
          </h2>
          <p className="mb-12 leading-relaxed text-muted-foreground">
            Entscheidend für die Einführung neuer Kommunikationslösungen sind neben Technik vor allem ein sauberer Projektablauf, verständliche Beratung und eine verlässliche Betreuung. Die auf unserer Startseite eingebundene Google-Bewertungsübersicht weist für Zöllner Büro- und IT-Systeme GmbH derzeit <strong>4,9 von 5 Sternen bei 15 Bewertungen</strong> aus. Die veröffentlichten Erfahrungen heben wiederholt Fachkompetenz, transparente Zusammenarbeit und Unterstützung bei individuellen Anforderungen hervor. Diese Rückmeldungen ersetzen keine individuelle Beratung – sie unterstreichen jedoch den Anspruch, KI-Kommunikation praxisnah umzusetzen.
          </p>

          <h2 className="mb-5 text-2xl font-bold text-foreground">
            Fragen, die sich für den Besuch am NFON-Stand lohnen
          </h2>
          <div className="mb-12 overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border bg-muted/30 px-5 py-4 text-sm">
              <span className="font-bold text-primary">01</span>
              <span className="text-muted-foreground">Welche Anrufarten eignen sich für eine teil- oder vollautomatisierte Annahme?</span>
            </div>
            <div className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border px-5 py-4 text-sm">
              <span className="font-bold text-primary">02</span>
              <span className="text-muted-foreground">Wie lassen sich Telefonie, CRM und Terminbuchung sinnvoll miteinander verbinden?</span>
            </div>
            <div className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-border bg-muted/30 px-5 py-4 text-sm">
              <span className="font-bold text-primary">03</span>
              <span className="text-muted-foreground">Wie bleiben Datenschutz, Transparenz und die Rolle der Mitarbeitenden im Prozess klar geregelt?</span>
            </div>
            <div className="grid grid-cols-[2.5rem_1fr] gap-3 px-5 py-4 text-sm">
              <span className="font-bold text-primary">04</span>
              <span className="text-muted-foreground">Wie kann ein Pilotprojekt so angelegt werden, dass sein Nutzen messbar wird?</span>
            </div>
          </div>

          <section className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <h2 className="mb-3 text-2xl font-bold text-foreground">Tickets, Programm und Aussteller</h2>
            <p className="mb-5 leading-relaxed text-muted-foreground">
              Das vollständige Programm, die aktuelle Ausstellerübersicht und die Ticketbuchung stellt Brains on Silicon auf der offiziellen Website bereit. NFON ist dort als Aussteller geführt.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={TICKET_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary text-white hover:bg-primary/90 sm:w-auto">
                  Tickets buchen <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={PROGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/5 sm:w-auto">
                  Programm ansehen <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </section>

          <h2 className="mb-5 text-2xl font-bold text-foreground">Häufige Fragen zu Brains on Silicon 2026</h2>
          <Accordion type="single" collapsible className="mb-12 rounded-2xl border border-border px-5">
            <AccordionItem value="date-place">
              <AccordionTrigger>Wann und wo findet Brains on Silicon 2026 statt?</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                Die Veranstaltung findet am 14. und 15. September 2026 im ICD Dresden statt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="nfon-stand">
              <AccordionTrigger>Wo ist Peter Gemander vor Ort anzutreffen?</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                Peter Gemander ist als Entwicklungspartner von NFON am NFON-Stand vertreten. Zöllner Office hat keinen eigenen Stand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="uwe-ortlepp">
              <AccordionTrigger>Was zeigt das unabhängige Praxisbeispiel mit Uwe Ortlepp?</AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                Es zeigt eine unabhängig von der Konferenz erfolgreich umgesetzte Voicebot-Integration für Uwe Ortlepp Immobilien Finanzierung – mit Fokus auf bessere Erreichbarkeit und automatisierte Terminbuchung.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <section className="rounded-2xl bg-slate-950 p-7 text-center text-white md:p-8">
            <h2 className="mb-3 text-2xl font-bold">Schon vor dem Event über Voicebots sprechen?</h2>
            <p className="mx-auto mb-6 max-w-xl leading-relaxed text-slate-300">
              Vereinbaren Sie ein Gespräch mit Zöllner Office und erfahren Sie, wie KI-gestützte Telefonie zu Ihren Prozessen passen kann.
            </p>
            <Link href="/kontakt">
              <Button className="bg-cyan-400 font-bold text-slate-950 hover:bg-cyan-300">Gespräch anfragen</Button>
            </Link>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-3 text-lg font-bold text-foreground">Quellen und weiterführende Links</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Veranstaltungsdaten, Programm und Aussteller: <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Brains on Silicon 2026</a>, <a href={PROGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">offizielles Programm</a> und <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Partner & Aussteller</a>. Praxisbeispiel: <Link href="/praxisbeispiele/uwe-ortlepp-immobilienfinanzierung" className="text-primary hover:underline">Uwe Ortlepp Immobilien Finanzierung</Link>.
            </p>
          </section>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/brains-on-silicon-2026" />
    </div>
  );
}
