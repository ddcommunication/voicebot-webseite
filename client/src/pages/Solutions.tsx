import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Calendar, MessageSquare, UserCheck, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Solutions() {
  return (
    <div className="flex flex-col gap-0">
      <SEO 
        title="Lösungen & Features"
        description="Entdecken Sie die vielfältigen Einsatzmöglichkeiten unserer Voicebots: Telefonzentrale, Terminvereinbarung, Kundenservice und mehr."
        canonical="/loesungen"
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Lösungen für jeden Anruf</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Unsere Voicebots sind modular aufgebaut. Wählen Sie die Funktionen, die Ihr Unternehmen wirklich braucht – von der einfachen Zentrale bis zum komplexen Kundenservice.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <Phone className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Intelligente Telefonzentrale</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Der Bot nimmt jeden Anruf sofort an, begrüßt den Anrufer professionell und erfragt das Anliegen. Basierend auf den Antworten wird der Anruf an die richtige Abteilung oder den richtigen Ansprechpartner weitergeleitet.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Keine Warteschleifen
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Standort-Erkennung
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Mehrsprachigkeit
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <Calendar className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Termin-Management</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vereinbaren, verschieben oder stornieren Sie Termine vollautomatisch. Der Bot greift direkt auf Ihren Kalender zu, schlägt freie Zeiten vor und trägt Buchungen ein.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Kalender-Synchronisation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Erinnerungs-Service
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Notfall-Erkennung
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <MessageSquare className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">FAQ & Auskunft</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Entlasten Sie Ihr Team von wiederkehrenden Fragen. Öffnungszeiten, Preise, Statusabfragen oder Anfahrtsbeschreibungen beantwortet der Bot souverän und geduldig.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> 24/7 Auskunft
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Konsistente Antworten
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Entlastung bei Standardfragen
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <UserCheck className="h-7 w-7" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Lead-Qualifizierung</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nicht jeder Anruf ist ein Kunde. Der Bot qualifiziert Anfragen vor: Budget, Zeitrahmen und Bedarf werden abgefragt, bevor ein Vertriebsmitarbeiter Zeit investiert.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Vorab-Filterung
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Datenerfassung im CRM
                  </li>
                  <li className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Check className="h-4 w-4 text-secondary" /> Priorisierung von Leads
                  </li>
                </ul>
              </div>
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
                Nahtlose Integration in Ihre Systeme
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ein Voicebot ist nur so gut wie seine Anbindung. Wir integrieren unsere Lösung in Ihre bestehende IT-Landschaft – egal ob CRM, Kalender oder Ticketsystem.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">Microsoft Outlook</div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">Google Calendar</div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">Salesforce</div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">HubSpot</div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">Zendesk</div>
                <div className="bg-white p-4 rounded-lg border shadow-sm text-center font-medium text-primary">Jira</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
              <img 
                src="/images/solutions-tech.jpg" 
                alt="Integration Dashboard" 
                className="relative rounded-lg shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Welche Lösung passt zu Ihnen?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Lassen Sie uns gemeinsam analysieren, wo in Ihrem Unternehmen das größte Potenzial liegt.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
              Beratungstermin vereinbaren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
