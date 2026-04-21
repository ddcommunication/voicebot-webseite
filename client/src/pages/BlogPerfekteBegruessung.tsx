import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, X, Check } from "lucide-react";
import { Link } from "wouter";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPerfekteBegruessung() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="5 Tipps für die perfekte Voicebot-Begrüßung"
        description="5 Praxistipps für die perfekte Voicebot-Begrüßung: Wie Sie Dialoge gestalten, die Anrufer nicht frustrieren, sondern begeistern – mit konkreten Beispielen und Formulierungshilfen."
        canonical="/blog/perfekte-begruessung"
      />

      {/* Hero Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FyIGbdGFeQuXelAa.jpg"
          alt="Perfekte Voicebot-Begrüßung"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container max-w-4xl">
            <div className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              Best Practices
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              5 Tipps für die perfekte Voicebot-Begrüßung
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> 05. Jan 2026
              </span>
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" /> Zöllner Office
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container max-w-3xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 -ml-4 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Übersicht
            </Button>
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Die ersten Sekunden eines Telefonats entscheiden darüber, ob ein
              Anrufer frustriert auflegt oder positiv gestimmt bleibt. Bei
              Voicebots ist dieser erste Eindruck noch wichtiger – denn hier gibt
              es keine zweite Chance. In diesem Artikel zeigen wir Ihnen fünf
              bewährte Strategien für Begrüßungen, die Ihre Anrufer begeistern.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Tipp 1: Kurz und prägnant – keine Romane
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <X className="h-5 w-5 text-red-500" />
                  <h3 className="font-bold text-red-700">Schlecht</h3>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Guten Tag und herzlich willkommen bei der Mustermann GmbH,
                  Ihrem Partner für innovative Lösungen im Bereich der digitalen
                  Transformation. Mein Name ist Lisa, Ihr virtueller Assistent.
                  Ich bin hier, um Ihnen bei allen Anliegen weiterzuhelfen. Bitte
                  haben Sie einen Moment Geduld, während ich Ihre Anfrage
                  bearbeite..."
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold text-green-700">Gut</h3>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Guten Tag, hier ist Lisa von Mustermann. Wie kann ich Ihnen
                  helfen?"
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Warum das funktioniert:</strong> Anrufer wollen schnell zum
              Punkt kommen. Jede Sekunde, die Sie mit unnötigen Informationen
              verschwenden, erhöht die Abbruchrate. Studien zeigen: Begrüßungen
              über 10 Sekunden führen zu 30% mehr Abbrüchen.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Tipp 2: Transparenz – sagen Sie, dass Sie ein Bot sind
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Viele Unternehmen versuchen, ihren Voicebot so menschlich wie
              möglich klingen zu lassen. Das ist ein Fehler. Kunden merken
              ohnehin, dass sie mit einem Bot sprechen – und fühlen sich getäuscht,
              wenn Sie es verschleiern.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-primary mb-3">
                Empfohlene Formulierungen
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  ✓ "Hallo, ich bin Ihr digitaler Assistent. Wie kann ich Ihnen
                  helfen?"
                </li>
                <li>
                  ✓ "Guten Tag, hier spricht der Voicebot von [Firma]. Was kann
                  ich für Sie tun?"
                </li>
                <li>
                  ✓ "Willkommen! Ich bin ein automatischer Assistent und
                  beantworte gerne Ihre Fragen."
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Wichtig:</strong> Bieten Sie immer die Möglichkeit, zu
              einem menschlichen Mitarbeiter weitergeleitet zu werden. Eine
              einfache Ergänzung wie "Sagen Sie jederzeit 'Mitarbeiter', wenn Sie
              mit einem Menschen sprechen möchten" schafft Vertrauen.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Tipp 3: Kontext nutzen – personalisieren Sie die Begrüßung
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Moderne Voicebots können auf Kontextinformationen zugreifen:
              Rufnummer, vorherige Anrufe, offene Termine oder Bestellungen. Nutzen
              Sie diese Daten, um die Begrüßung zu personalisieren.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-2">
                  Beispiel 1: Wiederkehrender Anrufer
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Guten Tag, Herr Müller! Schön, wieder von Ihnen zu hören. Geht
                  es um Ihren Termin am Donnerstag, oder haben Sie ein anderes
                  Anliegen?"
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-2">
                  Beispiel 2: Offene Bestellung
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Hallo! Ich sehe, Sie haben eine Bestellung bei uns aufgegeben.
                  Möchten Sie den Status erfahren, oder kann ich Ihnen
                  anderweitig helfen?"
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-2">
                  Beispiel 3: Nach Geschäftszeiten
                </p>
                <p className="text-sm text-muted-foreground italic">
                  "Guten Abend! Unsere Mitarbeiter sind derzeit nicht erreichbar,
                  aber ich kann Ihnen gerne weiterhelfen oder eine Nachricht
                  aufnehmen."
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Personalisierung zeigt dem Anrufer, dass Sie ihn kennen und seine
              Zeit wertschätzen. Das erhöht die Zufriedenheit messbar.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Tipp 4: Optionen klar kommunizieren – aber nicht alle auf einmal
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Ein klassischer Fehler: Der Bot rattert fünf Optionen herunter, und
              der Anrufer hat nach der dritten schon vergessen, was die erste war.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <X className="h-5 w-5 text-red-500" />
                  <h3 className="font-bold text-red-700">Zu viele Optionen</h3>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Sagen Sie 'Termin', um einen Termin zu buchen, 'Stornierung',
                  um einen Termin zu stornieren, 'Öffnungszeiten', um unsere
                  Öffnungszeiten zu erfahren, 'Adresse', um unsere Adresse zu
                  hören, oder 'Mitarbeiter', um mit einem Mitarbeiter verbunden zu
                  werden."
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <h3 className="font-bold text-green-700">Besser: Offene Frage</h3>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Wie kann ich Ihnen helfen? Sie können zum Beispiel einen Termin
                  buchen oder Fragen zu unseren Leistungen stellen."
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Pro-Tipp:</strong> Nutzen Sie Natural Language Processing
              (NLP), damit Anrufer frei formulieren können. Statt "Sagen Sie
              'Termin'" erlauben Sie Formulierungen wie "Ich brauche einen
              Termin", "Kann ich morgen vorbeikommen?" oder "Wann haben Sie Zeit?"
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Tipp 5: Stimme und Tonalität – der Unterschied zwischen Roboter und
              Assistent
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Stimme Ihres Voicebots ist genauso wichtig wie der Text. Moderne
              Text-to-Speech-Systeme bieten erstaunlich natürliche Stimmen – nutzen
              Sie sie!
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                Checkliste für die richtige Stimme
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Geschlecht & Alter:</strong> Wählen Sie eine Stimme,
                    die zu Ihrer Zielgruppe passt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sprechgeschwindigkeit:</strong> Nicht zu schnell (140-160
                    Wörter/Minute ist ideal)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Betonung:</strong> Wichtige Wörter hervorheben (z.B.
                    "Wie kann <em>ich</em> Ihnen helfen?")
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pausen:</strong> Kurze Pausen nach Fragen geben dem
                    Anrufer Zeit zum Nachdenken
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tonalität:</strong> Freundlich, aber professionell –
                    nicht zu enthusiastisch
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Testen Sie verschiedene Stimmen:</strong> Lassen Sie
              Kollegen und Testkunden mehrere Varianten anhören. Was für Sie
              natürlich klingt, kann für andere roboterhaft wirken – und
              umgekehrt.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Bonus-Tipp: Kontinuierlich optimieren
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Die perfekte Begrüßung entsteht nicht über Nacht. Analysieren Sie
              regelmäßig Ihre Gesprächsdaten:
            </p>

            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Wie viele Anrufer brechen in den ersten 10 Sekunden ab?</span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Welche Formulierungen führen zu Missverständnissen?
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Wie oft sagen Anrufer "Mitarbeiter", ohne den Bot auszuprobieren?
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Gibt es bestimmte Tageszeiten oder Anrufgründe mit höheren
                  Abbruchraten?
                </span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Nutzen Sie diese Erkenntnisse, um Ihre Begrüßung kontinuierlich zu
              verbessern. A/B-Tests helfen dabei, verschiedene Varianten zu
              vergleichen und die beste auszuwählen.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
              Zusammenfassung: Die perfekte Begrüßung in 5 Schritten
            </h2>

            <div className="bg-primary/5 p-8 rounded-lg mb-8">
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-primary">Kurz & prägnant:</strong>{" "}
                    Maximal 10 Sekunden, keine unnötigen Details
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-primary">Transparent:</strong> Sagen
                    Sie klar, dass es sich um einen Bot handelt
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-primary">Personalisiert:</strong>{" "}
                    Nutzen Sie Kontextinformationen für individuelle Begrüßungen
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary shrink-0">
                    4
                  </span>
                  <div>
                    <strong className="text-primary">Klar strukturiert:</strong>{" "}
                    Offene Fragen statt endloser Optionslisten
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl font-bold text-primary shrink-0">
                    5
                  </span>
                  <div>
                    <strong className="text-primary">Natürliche Stimme:</strong>{" "}
                    Investieren Sie in hochwertige Text-to-Speech-Technologie
                  </div>
                </li>
              </ol>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Mit diesen fünf Tipps schaffen Sie eine Begrüßung, die Ihre Anrufer
              nicht frustriert, sondern begeistert. Der erste Eindruck zählt –
              machen Sie ihn zu einem positiven Erlebnis!
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Brauchen Sie Hilfe bei der Gestaltung Ihres Voicebots?
            </h3>
            <p className="text-muted-foreground mb-6">
              Wir unterstützen Sie bei der Entwicklung von Dialogen, die Ihre
              Kunden begeistern. Von der Konzeption bis zur Umsetzung.
            </p>
            <Link href="/termin">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
              >
                Jetzt Beratung anfragen
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Weitere interessante Artikel</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <Link href="/blog/voicebot-vs-mitarbeiter" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg"
                  alt="Voicebot vs. Mitarbeiter"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Voicebot vs. Mitarbeiter: Der Kosten-Nutzen-Vergleich
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Lohnt sich die Investition in einen KI-Voicebot wirklich? Wir machen den harten Fakten-Check mit konkreten Zahlen.
                  </p>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog/zukunft-kundenservice" className="group">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/cWJnjiaMnKxmewHD.jpg"
                  alt="Zukunft des Kundenservice"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    Warum Voicebots die Zukunft des Kundenservice sind
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren. Erfahren Sie, warum Voicebots dabei eine Schlüsselrolle spielen.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <RelatedPosts currentSlug="/blog/perfekte-begruessung" />
    </div>
  );
}
