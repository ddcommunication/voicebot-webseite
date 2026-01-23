import SEO from "@/components/SEO";

export default function AGB() {
  return (
    <div className="flex flex-col gap-0">
      <SEO 
        title="Allgemeine Geschäftsbedingungen"
        description="AGB der Zöllner Office GmbH für Voicebot-Dienstleistungen."
        canonical="/agb"
      />

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-serif font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <h3>§ 1 Geltungsbereich</h3>
            <p>
              (1) Die nachstehenden Bedingungen gelten für alle im Zusammenhang mit dem Betrieb von Voicebots geschlossenen Verträge zwischen der Zöllner Office GmbH (nachfolgend "Anbieter") und dem Kunden.
            </p>
            <p>
              (2) Abweichende Bedingungen des Kunden akzeptiert der Anbieter nicht. Dies gilt auch, wenn der Anbieter der Einbeziehung nicht ausdrücklich widerspricht.
            </p>

            <h3>§ 2 Vertragsgegenstand</h3>
            <p>
              (1) Gegenstand des Vertrages ist die Bereitstellung und der Betrieb von KI-basierten Sprachassistenten (Voicebots) zur Automatisierung von Telefonanrufen.
            </p>
            <p>
              (2) Der genaue Funktionsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung des gewählten Pakets.
            </p>

            <h3>§ 3 Vertragsschluss</h3>
            <p>
              Der Vertrag kommt durch die Annahme des Kundenauftrags durch den Anbieter zustande. Die Annahme erfolgt durch eine ausdrückliche Auftragsbestätigung oder durch Beginn der Leistungserbringung.
            </p>

            <h3>§ 4 Pflichten des Kunden</h3>
            <p>
              Der Kunde ist verpflichtet, alle für die Einrichtung und den Betrieb des Voicebots erforderlichen Informationen und Zugänge rechtzeitig zur Verfügung zu stellen.
            </p>

            <h3>§ 5 Haftung</h3>
            <p>
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
