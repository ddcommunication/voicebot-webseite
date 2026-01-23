import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-0">
      <SEO 
        title="Preise & Pakete"
        description="Transparente Preise für Voicebot-Lösungen. Wählen Sie das Paket, das zu Ihrem Anrufvolumen passt."
        canonical="/preise"
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transparente Preise</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Keine versteckten Kosten. Wählen Sie das Paket, das zu Ihrem Anrufvolumen passt.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Starter */}
            <div className="border border-border rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">Starter</h3>
                <p className="text-muted-foreground mt-2">Für kleine Unternehmen und Praxen.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">149€</span>
                <span className="text-muted-foreground"> / Monat</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Bis zu 200 Anrufe/Monat
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Standard-Stimme
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> E-Mail Benachrichtigung
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Öffnungszeiten-Ansage
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <X className="h-5 w-5 shrink-0" /> Keine Kalender-Integration
                </li>
              </ul>
              <Link href="/kontakt">
                <Button variant="outline" className="w-full">Anfragen</Button>
              </Link>
            </div>

            {/* Professional */}
            <div className="border-2 border-secondary rounded-2xl p-8 bg-white shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">
                Beliebt
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">Professional</h3>
                <p className="text-muted-foreground mt-2">Für wachsende Unternehmen.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">299€</span>
                <span className="text-muted-foreground"> / Monat</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Bis zu 1.000 Anrufe/Monat
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Premium Neural Voice
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Kalender-Integration
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> CRM-Anbindung (Basic)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Priorisierter Support
                </li>
              </ul>
              <Link href="/kontakt">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">Jetzt starten</Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="border border-border rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">Enterprise</h3>
                <p className="text-muted-foreground mt-2">Für komplexe Anforderungen.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">Auf Anfrage</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Unbegrenzte Anrufe
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Custom Voice Cloning
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Volle API-Integration
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> Eigener Server (On-Premise)
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-600 shrink-0" /> 24/7 SLA Support
                </li>
              </ul>
              <Link href="/kontakt">
                <Button variant="outline" className="w-full">Kontaktieren</Button>
              </Link>
            </div>

          </div>
          
          <div className="text-center mt-12 text-muted-foreground text-sm">
            * Alle Preise zzgl. gesetzlicher MwSt. Einmalige Einrichtungsgebühr je nach Komplexität.
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-muted/30 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-serif font-bold mb-4">Unsicher, welches Paket passt?</h2>
          <p className="text-muted-foreground mb-8">
            Wir analysieren Ihr Anrufvolumen und empfehlen Ihnen die wirtschaftlichste Lösung.
          </p>
          <Link href="/kontakt">
            <Button variant="default">Beratung anfordern</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
