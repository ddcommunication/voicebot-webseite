import SEO from "@/components/SEO";

export default function Datenschutz() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Datenschutzerklärung"
        description="Informationen zum Umgang mit Ihren Daten bei Zöllner Office."
        canonical="/datenschutz"
      />

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-serif font-bold mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-lg max-w-none">
            <h3>1. Datenschutz auf einen Blick</h3>
            <p>
              <strong>Allgemeine Hinweise</strong>
              <br />
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3>2. Hosting und Content Delivery Networks (CDN)</h3>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              <br />
              <strong>Externes Hosting</strong>
              <br />
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
              Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die
              über eine Website generiert werden, handeln.
            </p>

            <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
            <p>
              <strong>Datenschutz</strong>
              <br />
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              <strong>Hinweis zur verantwortlichen Stelle</strong>
              <br />
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
              <br />
              Zöllner Office GmbH
              <br />
              Musterstraße 123
              <br />
              10115 Berlin
              <br />
              E-Mail: info@zoellner-office.de
            </p>

            <h3>4. Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Cookies</strong>
              <br />
              Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
              sind kleine Textdateien und richten auf Ihrem Endgerät keinen
              Schaden an. Sie werden entweder vorübergehend für die Dauer einer
              Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert.
            </p>
            <p>
              <strong>Kontaktformular</strong>
              <br />
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
