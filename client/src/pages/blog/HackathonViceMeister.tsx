import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Clock, Zap } from "lucide-react";
import { Link } from "wouter";

export default function HackathonViceMeister() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hackathon Vice-Meister bei Nexus Connect 2026",
    image: "https://www.zoellner-office.de/images/Hackathon-Vice-Meister4.jpeg",
    author: {
      "@type": "Person",
      name: "Zöllner Office",
    },
    publisher: {
      "@type": "Organization",
      name: "Zöllner Office",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zoellner-office.de/logo.png",
      },
    },
    datePublished: "2026-02-05",
    description:
      "60 Teilnehmer, 9 Teams, 90 Minuten: Unser AI-Engineer entwickelte beim NFON/Botario-Workshop einen funktionsfähigen Voicebot für Verwaltungszentralen und erreichte den zweiten Platz.",
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Hackathon Vice-Meister bei Nexus Connect 2026"
        description="60 Teilnehmer, 9 Teams, 90 Minuten: Unser AI-Engineer entwickelte beim NFON/Botario-Workshop einen funktionsfähigen Voicebot für Verwaltungszentralen und erreichte den zweiten Platz."
        canonical="/blog/hackathon-vice-meister"
        type="article"
        schema={articleSchema}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="/images/Hackathon-Vice-Meister4.jpeg"
          alt="Nexus Connect 2026 Hackathon - Teilnehmer im Konferenzraum"
          className="w-full h-full object-cover"
        />
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

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hackathon Vice-Meister bei Nexus Connect 2026
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-12 text-sm">
            <span>05. Feb 2026</span>
            <span>•</span>
            <span>Lesezeit: 4 Min.</span>
            <span>•</span>
            <span>Von Zöllner Office</span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base text-muted-foreground mb-12 leading-relaxed">
            60 Teilnehmer aus ganz Deutschland. Ein Ziel: KI in echte Business Cases bringen. 
            Für unser Unternehmen war unser AI-Engineer dabei – und hat beim NFON/Botario-Workshop 
            tief ins AI- & KI-Portfolio der NFON AG und der Botario-Plattform eintauchen können.
          </p>

          {/* Workshop Image */}
          <div className="my-12">
            <img
              src="/images/Hackathon-Vice-Meister2.jpeg"
              alt="Workshop-Teilnehmer bei der Arbeit"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Section 1: Der Hackathon */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Der Hackathon: 90 Minuten, 9 Teams, ein Ziel
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Zum Abschluss wurde es ernst: 9 Teams wurden ausgelost. Jedes Team musste in nur 
            90 Minuten einen Business Case entwickeln und einen Pitch für eine Jury vorbereiten. 
            Die besten drei Teams wurden ausgezeichnet.
          </p>

          {/* Event Venue Image */}
          <div className="my-12">
            <img
              src="/images/Hackathon-Vice-Meister3.jpeg"
              alt="Event-Location mit modernem Design"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Section 2: Unser Case */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Unser Case: Überlastete Verwaltungszentralen
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Telefonzentralen, die ständig am Limit sind, teuer im Betrieb, teils extern oder 
            gar nicht besetzt – und deren Hauptaufgabe oft nur Weiterverbinden ist. Unser 
            AI-Engineer dachte sich: Nicht nur drüber reden. Bauen.
          </p>

          {/* Key Features */}
          <div className="bg-primary/5 rounded-xl p-8 my-12 border border-primary/10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              Die technische Umsetzung in 90 Minuten
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>Nia Front Desk</strong> als zentrale Annahme eingerichtet
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>Intelligente Weiterleitung</strong> an die zuständigen Abteilungen
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>Voicebot über Botario-Plattform</strong> entwickelt
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>Fragen zu KFZ An- und Ummeldungen</strong> automatisch beantwortet
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-base leading-relaxed">
                  <strong>Rückrufe und Termine</strong> bei der Zulassungsstelle vereinbart
                </p>
              </div>
            </div>
          </div>

          <p className="text-base mb-6 leading-relaxed">
            Also hat er kurzerhand zusätzlich zur Konzeption auch die komplette technische 
            Umsetzung übernommen. In 90 Minuten. 🤯 Technisch eine absolute Meisterleistung.
          </p>

          {/* Participants Image */}
          <div className="my-12">
            <img
              src="/images/Hackathon-Vice-Meister1.jpeg"
              alt="Hackathon-Teilnehmer während der Entwicklungsphase"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Section 3: Der Plot Twist */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-12">
            Der Plot-Twist-Moment
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Und dann kam der unerwartete Moment: Die Präsentation wurde versehentlich gelöscht. 
            Am Ende wurde es „nur" der Vize-Titel.
          </p>

          {/* Presentation Image */}
          <div className="my-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/iLkxonQweFWnToVE.jpg"
              alt="Team-Präsentation beim Hackathon - Bühne mit NEXUS CONNECT Branding"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Award Ceremony Image */}
          <div className="my-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/VvsFJoZeVGgOajNH.jpg"
              alt="Siegerehrung - Team auf der Bühne bei der Preisverleihung"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Team with Robot Image */}
          <div className="my-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/sBfGkdPcgAHPecJW.jpg"
              alt="Team mit NFON Roboter und Auszeichnung"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Trophy Close-up Image */}
          <div className="my-12">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/TITBmQRRsrvtJrIA.jpg"
              alt="NEXUS CONNECT 2026 Pokal - AI Deal 2025 für Zöllner Büro- & IT-Systeme GmbH"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Conclusion */}
          <div className="bg-secondary/10 rounded-xl p-8 my-12 border border-secondary/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-secondary" />
              Fazit
            </h3>
            <p className="text-base leading-relaxed">
              Trotzdem: Riesenrespekt an das Team – starke Idee, starke Umsetzung, starker Einsatz. 
              Genau so entsteht Innovation. Der zweite Platz ist ein großartiger Erfolg und zeigt, 
              was mit den richtigen Tools und dem nötigen Know-how in kürzester Zeit möglich ist.
            </p>
          </div>

          {/* Related Articles Section */}
          <div className="mt-20 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-8">Weitere interessante Artikel</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/voicebot-vs-mitarbeiter" className="group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg"
                      alt="Voicebot vs. Mitarbeiter"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz am Beispiel einer Arztpraxis.
                  </p>
                </div>
              </Link>

              <Link href="/blog/zukunft-kundenservice" className="group">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/cWJnjiaMnKxmewHD.jpg"
                      alt="Zukunft des Kundenservice"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    Warum Voicebots die Zukunft des Kundenservice sind
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren. Erfahren Sie, warum Voicebots dabei eine Schlüsselrolle spielen.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
