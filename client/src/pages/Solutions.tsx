import { Button } from "@/components/ui/button";
import { Check, Phone, Calendar, MessageSquare, UserCheck } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Solutions() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebot-Lösungen für Unternehmen | Telefonzentrale & Kundenservice"
        description="Professionelle KI-Voicebot-Lösungen von Zöllner Office: Automatische Telefonzentrale, intelligente Terminvereinbarung, 24/7 Kundenservice. DSGVO-konform, Made in Germany. Jetzt Demo anfragen!"
        keywords="Voicebot, KI-Sprachassistent, automatische Telefonzentrale, Terminvereinbarung, Kundenservice Bot, 24/7 Erreichbarkeit, DSGVO-konform, Made in Germany, Zöllner Office"
        canonical="/loesungen"
      />

      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/solutions-hero-robot-dark.jpg"
            alt="Friendly AI Robot Assistant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center max-w-4xl pt-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Modulare Voice-Technologie
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Lösungen für jeden Anruf
          </h1>
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Unsere Voicebots sind modular aufgebaut. Wählen Sie die Funktionen,
            die Ihr Unternehmen wirklich braucht – von der einfachen Zentrale
            bis zum komplexen Kundenservice.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="group text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                Intelligente Telefonzentrale
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Der Bot nimmt jeden Anruf sofort an, begrüßt den Anrufer
                professionell und erfragt das Anliegen. Basierend auf den
                Antworten wird der Anruf an die richtige Abteilung oder den
                richtigen Ansprechpartner weitergeleitet.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Keine Warteschleifen
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Standort-Erkennung
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Mehrsprachigkeit
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="group text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Calendar
                    className="h-7 w-7 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                Termin-Management
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Vereinbaren, verschieben oder stornieren Sie Termine
                vollautomatisch. Der Bot greift direkt auf Ihren Kalender zu,
                schlägt freie Zeiten vor und trägt Buchungen ein.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Kalender-Synchronisation
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Erinnerungs-Service
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Notfall-Erkennung
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="group text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare
                    className="h-7 w-7 animate-pulse"
                    style={{ animationDuration: "4s" }}
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                FAQ & Auskunft
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Entlasten Sie Ihr Team von wiederkehrenden Fragen.
                Öffnungszeiten, Preise, Statusabfragen oder
                Anfahrtsbeschreibungen beantwortet der Bot souverän und
                geduldig.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  24/7 Auskunft
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Konsistente Antworten
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Entlastung bei Standardfragen
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="group text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck
                    className="h-7 w-7 animate-bounce"
                    style={{ animationDuration: "5s" }}
                  />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                Lead-Qualifizierung
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Nicht jeder Anruf ist ein Kunde. Der Bot qualifiziert Anfragen
                vor: Budget, Zeitrahmen und Bedarf werden abgefragt, bevor ein
                Vertriebsmitarbeiter Zeit investiert.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Vorab-Filterung
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Datenerfassung im CRM
                </li>
                <li className="flex items-center gap-3 text-base text-primary font-semibold justify-center md:justify-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  Priorisierung von Leads
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Nahtlose Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ein Voicebot ist nur so gut wie seine Anbindung. Wir integrieren
                unsere Lösung in Ihre bestehende IT-Landschaft – egal ob CRM,
                Kalender oder Ticketsystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  Microsoft Outlook
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  Google Calendar
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  Salesforce
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  HubSpot
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  Zendesk
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary hover:shadow-md transition-shadow cursor-default">
                  Jira
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-outlook.png"
                  alt="Microsoft Outlook"
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-google-calendar.png"
                  alt="Google Calendar"
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-salesforce.png"
                  alt="Salesforce"
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-hubspot.png"
                  alt="HubSpot"
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-zendesk.png"
                  alt="Zendesk"
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="/images/logo-jira.png"
                  alt="Jira"
                  className="h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-blue-business.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="container max-w-3xl relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Welche Lösung passt zu Ihnen?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Lassen Sie uns gemeinsam analysieren, wo in Ihrem Unternehmen das
            größte Potenzial liegt.
          </p>
          <Link href="/kontakt">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300 text-white font-bold shadow-lg hover:shadow-xl transition-all px-8 rounded-full"
            >
              Beratungstermin vereinbaren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
