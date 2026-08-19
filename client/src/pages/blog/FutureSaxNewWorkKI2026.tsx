import SEO from "@/components/SEO";
import RelatedPosts from "@/components/RelatedPosts";
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
  Clock,
  ExternalLink,
  MapPin,
  Mic2,
  Network,
  Users,
} from "lucide-react";
import { Link } from "wouter";

const EVENT_URL =
  "https://www.futuresax.de/events/veranstaltung/futuresax-innovationsforum-new-work-ki/";
const PROGRAM_URL =
  "https://www.futuresax.de/fileadmin/user_upload/Programm-IF-II-2026_.pdf";
const HERO_IMAGE =
  "/manus-storage/futuresax-sorbisches-national-ensemble-bautzen-2026_a453606a.jpg";
const ARTICLE_URL =
  "https://www.sprachassistent.net/blog/futuresax-innovationsforum-new-work-ki-2026";

export default function FutureSaxNewWorkKI2026() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      generateArticleSchema({
        title:
          "futureSAX-Innovationsforum New Work & KI 2026: Peter Gemander präsentiert smarte Telefonie",
        description:
          "Am 24. September 2026 spricht Peter Gemander beim futureSAX-Innovationsforum New Work & KI in Bautzen über smarte Telefonanlagen mit KI-Assistenten.",
        url: ARTICLE_URL,
        image: `https://www.sprachassistent.net${HERO_IMAGE}`,
        datePublished: "2026-08-19",
        dateModified: "2026-08-19",
      }),
      {
        "@type": "Event",
        name: "futureSAX-Innovationsforum New Work & KI",
        description:
          "Impuls- und Vernetzungsevent für den sächsischen Mittelstand rund um KI-Integration, neue Arbeitswelten und resiliente Geschäftsmodelle.",
        startDate: "2026-09-24T12:00:00+02:00",
        endDate: "2026-09-24T18:00:00+02:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Sorbisches National-Ensemble",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Äußere Lauenstraße 2",
            postalCode: "02625",
            addressLocality: "Bautzen",
            addressCountry: "DE",
          },
        },
        image: `https://www.sprachassistent.net${HERO_IMAGE}`,
        url: EVENT_URL,
        organizer: {
          "@type": "Organization",
          name: "futureSAX – Innovationsplattform des Freistaates Sachsen",
          url: "https://www.futuresax.de/",
        },
        performer: {
          "@type": "Person",
          name: "Peter Gemander",
          jobTitle: "Geschäftsführer",
          worksFor: {
            "@type": "Organization",
            name: "Zöllner Büro- und IT-Systeme GmbH",
            url: "https://www.sprachassistent.net",
          },
        },
        sameAs: EVENT_URL,
      },
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" },
        {
          name: "futureSAX-Innovationsforum New Work & KI 2026",
          url: "/blog/futuresax-innovationsforum-new-work-ki-2026",
        },
      ]),
    ],
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="futureSAX-Innovationsforum New Work & KI 2026"
        description="Peter Gemander spricht am 24. September 2026 beim futureSAX-Innovationsforum New Work & KI in Bautzen über smarte Telefonanlagen mit KI-Assistenten."
        canonical="/blog/futuresax-innovationsforum-new-work-ki-2026"
        type="article"
        image={`https://www.sprachassistent.net${HERO_IMAGE}`}
        keywords="futureSAX Innovationsforum New Work KI 2026, Peter Gemander, smarte Telefonanlage, KI-Assistenten, KI Telefonie, Bautzen, Zöllner Office"
        robots="index, follow"
        schema={schema}
      />

      <section className="relative h-[400px] md:h-[520px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Blick auf Bautzen mit dem Sorbischen National-Ensemble als Veranstaltungsort des futureSAX-Innovationsforums"
          className="w-full h-full object-cover object-center saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-cyan-950/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.24),transparent_36%)]" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container max-w-4xl pb-10 md:pb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur-sm mb-4">
              <Calendar className="h-3.5 w-3.5" /> 24. September 2026 · Bautzen
            </div>
            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
              futureSAX-Innovationsforum New Work & KI: Wir sind dabei
            </h1>
          </div>
        </div>
      </section>

      <article className="bg-background py-14 md:py-20">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 -ml-4 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Übersicht
            </Button>
          </Link>

          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
            Veranstaltung
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            19. August 2026 · Von Zöllner Office · Lesezeit: 4 Min.
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Intelligente Business-Kommunikation live im Fokus
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Am <strong>24. September 2026</strong> bringt das
            {" "}
            <a
              href={EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              futureSAX-Innovationsforum New Work & KI
            </a>
            {" "}Unternehmen, Wissenschaft und Transformationsakteure im
            Sorbischen National-Ensemble in Bautzen zusammen. Zöllner Office ist
            dabei: <strong>Peter Gemander</strong> zeigt, wie eine smarte
            Telefonanlage mit KI-Assistenten die Business-Kommunikation
            weiterentwickeln kann.
          </p>

          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="flex items-start gap-3 text-sm">
              <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Datum & Uhrzeit</div>
                <div className="text-muted-foreground">24. September 2026, 12:00–18:00 Uhr</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Veranstaltungsort</div>
                <div className="text-muted-foreground">Sorbisches National-Ensemble, Äußere Lauenstraße 2, 02625 Bautzen</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Austausch</div>
                <div className="text-muted-foreground">Impulse, Pitches und Networking für den sächsischen Mittelstand</div>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Network className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground">Matchmaking</div>
                <div className="text-muted-foreground">KI-basiertes Partner-Matching für angemeldete Teilnehmende</div>
              </div>
            </div>
          </section>

          <section className="mb-12 rounded-2xl overflow-hidden border border-cyan-300/30 bg-slate-950 text-white shadow-lg shadow-cyan-950/10">
            <div className="p-6 md:p-8 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.25),transparent_42%)]">
              <div className="flex items-center gap-3 text-cyan-200 text-sm font-semibold mb-4">
                <Mic2 className="h-5 w-5" /> Pitch-Session A: Digital Workers/Data Science
              </div>
              <p className="text-cyan-100 font-semibold text-sm mb-2">14:30 Uhr · Peter Gemander</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Intelligente Business-Kommunikation: Smarte Telefonanlage mit KI-Assistenten
              </h3>
              <p className="text-slate-200 leading-relaxed">
                Der Geschäftsführer der Zöllner Büro- & IT-Systeme GmbH
                erläutert, wie Unternehmen ihre Erreichbarkeit, die
                Gesprächssteuerung und wiederkehrende Serviceprozesse mit
                KI-Assistenten intelligent verbinden können. Im Mittelpunkt steht
                die Frage, wie Telefonie als integrierter Bestandteil moderner
                Arbeitsabläufe gestaltet werden kann.
              </p>
            </div>
          </section>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Was das futureSAX-Innovationsforum auszeichnet
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            futureSAX positioniert das Innovationsforum als Impuls- und
            Vernetzungsformat für den sächsischen Mittelstand. Im Fokus stehen
            die Integration von KI in neue Arbeitswelten sowie ihre Auswirkungen
            auf Strukturen, Prozesse und Geschäftsmodelle. Das Programm verbindet
            dafür Diskussionen, kompakte Pitch-Sessions und Räume für den direkten
            Austausch.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Für Unternehmen ist genau diese Verbindung entscheidend: KI entfaltet
            ihren Nutzen nicht als isoliertes Werkzeug, sondern dann, wenn sie
            sinnvoll mit realen Kommunikationswegen, vorhandenen Anwendungen und
            den Menschen im Team zusammenspielt. Intelligente Telefonie ist ein
            konkreter Anwendungsfall dafür – vom ersten Anruf über die
            Anliegenaufnahme bis zur gezielten Übergabe an Mitarbeitende.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-5">
            Programmüberblick: die wichtigsten Stationen des Tages
          </h2>
          <div className="mb-12 overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-border bg-muted/30 px-5 py-4 text-sm">
              <span className="font-bold text-primary">12:00 Uhr</span>
              <span className="text-muted-foreground">Check-in und Networking im Ausstellungsbereich mit Mittagsimbiss</span>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-border px-5 py-4 text-sm">
              <span className="font-bold text-primary">13:00 Uhr</span>
              <span className="text-muted-foreground">Begrüßung und thematische Einführung</span>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-border bg-muted/30 px-5 py-4 text-sm">
              <span className="font-bold text-primary">14:30 Uhr</span>
              <span className="text-foreground font-medium">Pitch-Sessions, darunter Peter Gemander mit „Intelligente Business-Kommunikation“</span>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-border px-5 py-4 text-sm">
              <span className="font-bold text-primary">16:00 Uhr</span>
              <span className="text-muted-foreground">Matchmaking-Session und parallele Diskussion zu Wachstum und Kapital für den Mittelstand</span>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-x-4 bg-muted/30 px-5 py-4 text-sm">
              <span className="font-bold text-primary">17:00 Uhr</span>
              <span className="text-muted-foreground">Kulinarisch begleitetes Get-together im Ausstellungsbereich</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">
            Warum smarte Telefonie zu New Work gehört
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Neue Arbeitswelten brauchen Kommunikationsprozesse, die zuverlässig,
            transparent und anpassungsfähig sind. Wenn KI-Assistenten Anrufe
            entgegennehmen, Informationen strukturiert erfassen und Anliegen
            passend weiterleiten, können Teams ihre Zeit stärker auf Gespräche
            konzentrieren, in denen persönliche Expertise wirklich zählt.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Der Vortrag von Peter Gemander nimmt deshalb nicht nur Technologie in
            den Blick. Er zeigt, wie eine moderne Telefonanlage zu einem Baustein
            der digitalen Arbeitsorganisation werden kann: mit klaren Übergaben,
            besserer Erreichbarkeit und einem Service, der sich an den Prozessen
            des jeweiligen Unternehmens orientiert.
          </p>

          <section className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Anmeldung und Programm
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Die Anmeldung erfolgt über futureSAX. Dort finden Interessierte auch
              die vollständigen Veranstaltungsdetails sowie das offizielle
              Programm als PDF. Für das KI-basierte Matchmaking kann die Teilnahme
              im Zuge der Anmeldung ausgewählt werden.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={EVENT_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                  Zur offiziellen Anmeldung <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={PROGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto border-primary/30 text-primary hover:bg-primary/5">
                  Programm als PDF <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </section>

          <h2 className="text-2xl font-bold text-foreground mb-5">
            Häufige Fragen zum Event
          </h2>
          <Accordion type="single" collapsible className="mb-12 rounded-2xl border border-border px-5">
            <AccordionItem value="when">
              <AccordionTrigger>Wann und wo findet das Forum statt?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Das futureSAX-Innovationsforum New Work & KI findet am 24. September 2026 von 12:00 bis 18:00 Uhr im Sorbischen National-Ensemble, Äußere Lauenstraße 2, 02625 Bautzen statt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="peter">
              <AccordionTrigger>Wann spricht Peter Gemander?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Peter Gemander spricht um 14:30 Uhr in der Pitch-Session A „Digital Workers/Data Science“ über „Intelligente Business-Kommunikation: Smarte Telefonanlage mit KI-Assistenten“.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="topic">
              <AccordionTrigger>Worum geht es in dem Vortrag?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Im Zentrum steht, wie KI-Assistenten und moderne Telefonanlagen die geschäftliche Kommunikation unterstützen können – etwa bei der Annahme, Strukturierung und Weiterleitung von Anliegen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="matchmaking">
              <AccordionTrigger>Was ist das KI-basierte Matchmaking?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Angemeldete Teilnehmende können vor Ort in zehnminütigen Gesprächen potenzielle Partner aus Unternehmen und Institutionen der sächsischen KI-Netzwerklandschaft kennenlernen. Die Auswahl erfolgt im Rahmen der offiziellen Anmeldung.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <section className="rounded-2xl bg-slate-950 p-7 md:p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Sie möchten mit Peter Gemander sprechen?</h2>
            <p className="max-w-xl mx-auto text-slate-300 leading-relaxed mb-6">
              Vereinbaren Sie vorab einen Gesprächstermin und erfahren Sie, wie KI-gestützte Telefonie zu Ihren Prozessen passen kann.
            </p>
            <Link href="/kontakt">
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold">
                Gespräch anfragen
              </Button>
            </Link>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-lg font-bold text-foreground mb-3">Quellen</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Veranstaltungsangaben und Programm: {" "}
              <a href={EVENT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                futureSAX-Innovationsforum New Work & KI
              </a>
              {" "}sowie {" "}
              <a href={PROGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                offizielles Programm-PDF
              </a>.
            </p>
          </section>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/futuresax-innovationsforum-new-work-ki-2026" />
    </div>
  );
}
