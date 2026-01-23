import SEO from "@/components/SEO";

export default function Impressum() {
  return (
    <div className="flex flex-col gap-0">
      <SEO 
        title="Impressum"
        description="Rechtliche Informationen und Anbieterkennzeichnung von Zöllner Office."
        canonical="/impressum"
      />

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-serif font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              Zöllner Office GmbH<br />
              Musterstraße 123<br />
              10115 Berlin
            </p>

            <h3>Vertreten durch</h3>
            <p>Max Mustermann (Geschäftsführer)</p>

            <h3>Kontakt</h3>
            <p>
              Telefon: +49 (0) 30 123 456 78<br />
              E-Mail: info@zoellner-office.de
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123 456 789
            </p>

            <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin
            </p>

            <h3>Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
