import SEO from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function Datenschutz() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Datenschutzerklärung"
        description="Informationen zum Umgang mit Ihren Daten bei Zöllner Büro- & IT-Systeme GmbH."
        canonical="/datenschutz"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            generateBreadcrumbSchema([
              { name: "Startseite", url: "/" },
              { name: "Datenschutz", url: "/datenschutz" }
            ])
          ]
        }}
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Informationen zum Umgang mit Ihren personenbezogenen Daten
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-12">
            
            {/* Section 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">1. Datenschutz auf einen Blick</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Allgemeine Hinweise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Datenerfassung auf dieser Website</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Wie erfassen wir Ihre Daten?</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Wofür nutzen wir Ihre Daten?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">2. Hosting</h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-muted-foreground leading-relaxed space-y-1 mb-4">
                    <p className="font-semibold text-primary">Butterfly Effect Pte. Ltd.</p>
                    <p>109 North Bridge Road</p>
                    <p>#06-W112 FUNAN</p>
                    <p>Singapore 179097</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Bereitstellung der Website erfolgt über eine cloudbasierte Infrastruktur.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer möglichst zuverlässigen Darstellung unseres Online-Angebots.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers umfasst. Die Einwilligung ist jederzeit widerrufbar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Content Delivery Network (CDN)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Zur sicheren und effizienten Auslieferung unserer Website nutzen wir ein Content Delivery Network (CDN). Anbieter ist:
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <div className="text-muted-foreground leading-relaxed space-y-1">
                      <p className="font-semibold text-primary">Cloudflare, Inc.</p>
                      <p>101 Townsend St.</p>
                      <p>San Francisco, CA 94107</p>
                      <p>USA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Cloudflare fungiert als Proxy zwischen unserem Webserver und den Besuchern unserer Website. Dabei kann Cloudflare personenbezogene Daten (z. B. IP-Adressen) verarbeiten, um Angriffe abzuwehren und die Auslieferung zu optimieren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Datenübertragung in die USA erfolgt auf Grundlage der Standardvertragsklauseln der EU-Kommission sowie der Zertifizierung nach dem EU-US Data Privacy Framework.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Weitere Informationen: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.cloudflare.com/privacypolicy/</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Datenschutz</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="text-muted-foreground leading-relaxed space-y-1">
                    <p className="font-semibold text-primary">Zöllner Büro- & IT-Systeme GmbH</p>
                    <p>Burgstraße 1</p>
                    <p>04910 Elsterwerda</p>
                    <p className="pt-2">Vertreten durch: Peter Gemander</p>
                    <p className="pt-2">Telefon: +49 3533 4807-0</p>
                    <p>E-Mail: info@buero-zoellner.de</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Speicherdauer</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Empfänger von personenbezogenen Daten</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 uppercase font-semibold">
                    Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. E oder F DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed uppercase font-semibold">
                    Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Auskunft, Berichtigung und Löschung</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Recht auf Einschränkung der Verarbeitung</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">4. Datenerfassung auf dieser Website</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Einwilligung mit ConsentManager</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Unsere Website nutzt die Consent-Technologie von ConsentManager, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist die Jaohawi AB, Håltegelvägen 1b, 72348 Västerås, Schweden, Website: <a href="https://www.consentmanager.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.consentmanager.de</a> (im Folgenden „ConsentManager").
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Wenn Sie unsere Website betreten, wird eine Verbindung zu den Servern von ConsentManager hergestellt, um Ihre Einwilligungen und sonstigen Erklärungen zur Cookie-Nutzung einzuholen. Anschließend speichert ConsentManager ein Cookie in Ihrem Browser, um Ihnen die erteilten Einwilligungen bzw. deren Widerruf zuordnen zu können. Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern, den Consent-Manager-Provider-Cookie selbst löschen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Aufbewahrungspflichten bleiben unberührt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Der Einsatz von ConsentManager erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Server-Log-Dateien</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Kontaktformular</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">5. Plugins und Tools</h2>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Google Fonts (lokales Hosting)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy?hl=de</a>.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">6. eCommerce und Zahlungsanbieter</h2>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Verarbeiten von Kunden- und Vertragsdaten</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung und Ablauf der ggf. bestehenden gesetzlichen Aufbewahrungsfristen gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">7. Audio- und Videokonferenzen</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Datenverarbeitung</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen" im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/ Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Zweck und Rechtsgrundlagen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Speicherdauer</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Eingesetzte Konferenz-Tools</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wir setzen folgende Konferenz-Tools ein:
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-primary mb-3">Microsoft Teams</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Wir nutzen Microsoft Teams. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Microsoft Teams: <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://privacy.microsoft.com/de-de/privacystatement</a>.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/participant/6474" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.dataprivacyframework.gov/participant/6474</a>.
                    </p>

                    <h5 className="font-semibold text-primary mb-2 text-base">Auftragsverarbeitung</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
