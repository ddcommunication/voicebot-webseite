import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, Phone, Clock, Users, TrendingUp, Shield, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function WohnungswirtschaftCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Praxisbeispiel Wohnungswirtschaft: Automatisierte Telefonannahme mit VoiceBot",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/hBssY4yFgrDMxKuQUwbMQs/sandbox/5JPTOfBKPWHtiL6jUToS28-img-1_1770375848000_na1fn_YmxvZy13b2hudW5nc3dpcnRzY2hhZnQtdm9pY2Vib3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaEJzc1k0eUZnckRNeEt1UVV3Yk1Rcy9zYW5kYm94LzVKUFRPZkJLUFdIdGlMNmpVVG9TMjgtaW1nLTFfMTc3MDM3NTg0ODAwMF9uYTFmbl9ZbXh2WnkxM2IyaHVkVzVuYzNkcnRzWTJoaFpuUXRkbTlwWTJWaWIzUS5qcGc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B78RZar9GenM~UCU5R3aYfGQstmiaAVlHSRL7JyF~554RiD-KL5smGjzarcBnsSW3LhgHMCdjumnWNMtjpORWJPKxD5hTB--lFj4U9DBmm0mZSnxb-DqgmiUkWnbxMdQRS2noEcaIBFDDkU-byNpWyJtFrWlpWoapvByQQmp5UCIVbrCaM6MnTUItXXR3WHRl8tg3M0tEhk2Z5F2PeSY75Si~9-H9i-n-LZ10osTfQvcRWWE6zdeQAsnEbUzdVWKmvlJhzXH-tJ0iyDavabIrWHru2XlcQq2mB4zuVTHkkSLmEugcWJ5w7FhtnvLUKbck8lc6OZMQlFFsOYvS5ztHw__",
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
      "Wie eine Wohnungsgenossenschaft mit über 200 Mitarbeitern durch intelligente VoiceBot-Automatisierung den Kundenservice revolutionierte und die Erreichbarkeit auf 24/7 erweiterte.",
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Praxisbeispiel Wohnungswirtschaft: VoiceBot-Automatisierung"
        description="Wie eine Wohnungsgenossenschaft mit über 200 Mitarbeitern durch intelligente VoiceBot-Automatisierung den Kundenservice revolutionierte."
        canonical="/blog/wohnungswirtschaft-voicebot"
        type="article"
        schema={articleSchema}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/hBssY4yFgrDMxKuQUwbMQs/sandbox/5JPTOfBKPWHtiL6jUToS28-img-1_1770375848000_na1fn_YmxvZy13b2hudW5nc3dpcnRzY2hhZnQtdm9pY2Vib3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaEJzc1k0eUZnckRNeEt1UVV3Yk1Rcy9zYW5kYm94LzVKUFRPZkJLUFdIdGlMNmpVVG9TMjgtaW1nLTFfMTc3MDM3NTg0ODAwMF9uYTFmbl9ZbXh2WnkxM2IyaHVkVzVuYzNkcnRzWTJoaFpuUXRkbTlwWTJWaWIzUS5qcGc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B78RZar9GenM~UCU5R3aYfGQstmiaAVlHSRL7JyF~554RiD-KL5smGjzarcBnsSW3LhgHMCdjumnWNMtjpORWJPKxD5hTB--lFj4U9DBmm0mZSnxb-DqgmiUkWnbxMdQRS2noEcaIBFDDkU-byNpWyJtFrWlpWoapvByQQmp5UCIVbrCaM6MnTUItXXR3WHRl8tg3M0tEhk2Z5F2PeSY75Si~9-H9i-n-LZ10osTfQvcRWWE6zdeQAsnEbUzdVWKmvlJhzXH-tJ0iyDavabIrWHru2XlcQq2mB4zuVTHkkSLmEugcWJ5w7FhtnvLUKbck8lc6OZMQlFFsOYvS5ztHw__"
          alt="Wohnungswirtschaft VoiceBot Automatisierung"
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
            Praxisbeispiel Wohnungswirtschaft: Automatisierte Telefonannahme mit VoiceBot
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-12 text-sm">
            <span>5. Feb 2026</span>
            <span>•</span>
            <span>Lesezeit: 7 Min.</span>
            <span>•</span>
            <span>Von Zöllner Office</span>
          </div>

          {/* Lead Paragraph */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium">
            Wie eine Wohnungsgenossenschaft mit über 200 Mitarbeitern durch intelligente Sprachautomatisierung ihren Kundenservice revolutionierte, die Erreichbarkeit auf 24/7 erweiterte und gleichzeitig das Service-Team spürbar entlastete.
          </p>

          {/* Kunde & Kontext */}
          <div className="bg-muted/30 rounded-xl p-8 mb-12 border border-border">
            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              Kunde & Kontext
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Branche</div>
                <div className="text-base font-semibold">Wohnungswirtschaft</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Unternehmensgröße</div>
                <div className="text-base font-semibold">&gt;200 Mitarbeiter</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">Projektumfang</div>
                <div className="text-base font-semibold">Inbound-Telefonie / Kundenservice</div>
              </div>
            </div>
          </div>

          {/* Herausforderung */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-16 flex items-center gap-3">
            <AlertTriangle className="h-7 w-7 text-primary" />
            Die Herausforderung
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Die Wohnungsgenossenschaft stand vor einer typischen Problematik der Branche: Ein hohes und wiederkehrendes Anrufaufkommen führte zu systematischen Engpässen im Kundenservice. Die Auswirkungen waren deutlich spürbar und beeinträchtigten sowohl die Servicequalität als auch die Arbeitsbedingungen des Teams.
          </p>

          <Card className="mb-12 border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Phone className="h-5 w-5 text-red-600" />
                Konkrete Problemfelder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Eingeschränkte Erreichbarkeit während Stoßzeiten</div>
                  <div className="text-sm text-muted-foreground">Mieter erreichten oft nur das Besetztzeichen oder landeten in langen Warteschleifen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hohe Belastung des Service-Teams</div>
                  <div className="text-sm text-muted-foreground">Mitarbeiter verbrachten den Großteil ihrer Zeit mit Routineanfragen statt mit komplexen Fällen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Manuelle Standardprozesse mit geringer Wertschöpfung</div>
                  <div className="text-sm text-muted-foreground">Wiederholende Aufgaben wie Terminvereinbarungen banden unnötig Ressourcen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-600 text-sm font-bold">4</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Keine Erreichbarkeit außerhalb der Geschäftszeiten</div>
                  <div className="text-sm text-muted-foreground">Notfälle und dringende Anliegen konnten abends und am Wochenende nicht bearbeitet werden</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-base mb-12 leading-relaxed">
            Der Kunde benötigte eine skalierbare Lösung, um die Servicequalität und Effizienz nachhaltig zu verbessern und seinen Mitgliedern sowie Mietern einen modernen, digitalen Kundenservice zu bieten.
          </p>

          {/* Zielsetzung */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-16 flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary" />
            Zielsetzung
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Automatisierte Annahme und Qualifizierung</div>
                    <div className="text-sm text-muted-foreground">Eingehende Anrufe sollen automatisch entgegengenommen und nach Anliegen kategorisiert werden</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Entlastung der Mitarbeitenden</div>
                    <div className="text-sm text-muted-foreground">Service-Team soll von Standardanfragen befreit werden und sich auf komplexe Fälle konzentrieren können</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Verbesserte Erreichbarkeit</div>
                    <div className="text-sm text-muted-foreground">24/7-Service auch außerhalb der Geschäftszeiten für dringende Anliegen</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Strukturierte Übergabe</div>
                    <div className="text-sm text-muted-foreground">Komplexe Anliegen sollen mit allen relevanten Informationen an den richtigen Ansprechpartner weitergeleitet werden</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lösung */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-16 flex items-center gap-3">
            <Shield className="h-7 w-7 text-primary" />
            Die Lösung
          </h2>
          <p className="text-base mb-6 leading-relaxed">
            Die Implementierung eines <strong>Botario VoiceBots</strong> mit nahtloser Einbindung in die vorhandene TK-Infrastruktur bildete das Herzstück der Lösung. Der VoiceBot übernimmt die automatisierte Gesprächsführung und verarbeitet Kundenanliegen regelbasiert und dialogorientiert. Die Lösung wurde passgenau auf die Geschäftsprozesse des Kunden abgestimmt.
          </p>

          <Card className="mb-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Umsetzung & Scope</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Konzeption und Design der Voice-Dialoge</div>
                  <div className="text-sm text-muted-foreground">Entwicklung natürlicher Gesprächsabläufe für alle relevanten Anliegen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Definition relevanter Use Cases und Entscheidungslogiken</div>
                  <div className="text-sm text-muted-foreground">Mapping aller Anrufgründe und Erstellung intelligenter Routing-Regeln</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Integration in die bestehende Telefonie-Infrastruktur</div>
                  <div className="text-sm text-muted-foreground">Anbindung an vorhandene Telefonanlage ohne Systemwechsel</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Enge Abstimmung zwischen Business-Anforderungen und Technologie</div>
                  <div className="text-sm text-muted-foreground">Iterative Entwicklung mit kontinuierlichem Feedback aus der Praxis</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technische Herausforderung */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              Technische Herausforderung bei der Umsetzung
            </h3>
            <p className="text-base mb-4 leading-relaxed">
              <strong>Problem:</strong> Die Anbindung an die vorhandene Systemlandschaft gestaltete sich komplex. Das bestehende CRM-System bot nur teure API-Schnittstellen an, die das Projektbudget gesprengt hätten.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Lösung:</strong> Über eine pragmatische Import/Export-Lösung mit SFTP-Server wurde eine kostengünstige Alternative geschaffen, die alle erforderlichen Daten zuverlässig austauscht – ohne teure API-Lizenzen.
            </p>
          </div>

          {/* Implementierte Prozesse */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-16">
            Implementierte Prozesse
          </h2>
          <p className="text-base mb-8 leading-relaxed">
            Der VoiceBot wurde für folgende Anrufgründe konfiguriert und deckt damit das gesamte Spektrum der eingehenden Anfragen ab:
          </p>

          <div className="space-y-6 mb-12">
            {/* Havarie */}
            <Card className="border-red-300 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Havarie (Notfall)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Wird genutzt, wenn der Anrufer ein Anliegen hat, das keinen Aufschub bis zum nächsten Werktag zulässt.
                </p>
                <div className="text-sm">
                  <strong>Beispiele:</strong> Wasserrohrbruch, Stromausfall in der gesamten Wohnung, wachsender Nässefleck an der Decke, aus der Wohnung ausgesperrt, Wohnungstürschlüssel abgebrochen, Klospülung läuft dauerhaft, Brandschaden, Rauchgeruch und Rauchwarnmelder löst aus
                </div>
              </CardContent>
            </Card>

            {/* Schadensmeldung */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-600" />
                  Schadensmeldung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Voraussetzung:</strong> Nur für authentifizierte Anrufer mit Mietvertrag verfügbar.
                </p>
                <p className="text-sm text-muted-foreground">
                  Wird genutzt, wenn ein Anrufer mit Mietvertrag einen Standard-Schaden meldet. Ein Standard-Schaden definiert sich dadurch, dass er <strong>kein kritischer Havarie-Fall</strong> ist, sondern ein unkritischer Schaden.
                </p>
              </CardContent>
            </Card>

            {/* Beschwerde */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  Beschwerde
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Wird genutzt, wenn der Anrufer eine Beschwerde hat. Eine Beschwerde lässt sich breit definieren und umfasst alle Unzufriedenheitsäußerungen.
                </p>
              </CardContent>
            </Card>

            {/* Wohnungssuche */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Wohnungssuche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Wird genutzt, wenn der Anrufer eine neue Wohnung sucht oder Fragen zu einer neuen Wohnung hat.
                </p>
              </CardContent>
            </Card>

            {/* Auskunft / FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  Auskunft / FAQ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Beantwortet Fragen zu Öffnungszeiten, Prozessen, Kontaktwegen, Regeln, Zuständigkeiten und mehr. Geeignet für alle Informationswünsche.
                </p>
              </CardContent>
            </Card>

            {/* Vorklärung */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-600" />
                  Vorklärung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gesprächspuffer zur Einordnung unklarer Anliegen. Stellt Rückfragen, sammelt Eckdaten. Kann keine Fragen beantworten, sondern bereitet die Weiterleitung vor.
                </p>
              </CardContent>
            </Card>

            {/* Sonstiges */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  Sonstiges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Wird genutzt, wenn das Anliegen keinem konkreten Prozess oder Fall eindeutig zugeordnet werden kann.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Ergebnis & Mehrwert */}
          <h2 className="text-3xl font-bold font-serif mb-6 mt-16 flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary" />
            Ergebnis & Mehrwert
          </h2>
          <p className="text-base mb-8 leading-relaxed">
            Die Implementierung des VoiceBots führte zu messbaren Verbesserungen in allen definierten Zielbereichen. Die Wohnungsgenossenschaft konnte ihre Servicequalität deutlich steigern und gleichzeitig die Arbeitsbedingungen für das Team verbessern.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Deutliche Reduktion manueller Serviceanfragen</div>
                    <div className="text-sm text-muted-foreground">Routineanfragen werden automatisch bearbeitet, ohne Mitarbeiter zu binden</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Spürbare Entlastung des Kundenservice-Teams</div>
                    <div className="text-sm text-muted-foreground">Mitarbeiter können sich auf komplexe Fälle konzentrieren, die menschliche Expertise erfordern</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Verbesserte Erreichbarkeit und kürzere Reaktionszeiten</div>
                    <div className="text-sm text-muted-foreground">24/7-Verfügbarkeit auch außerhalb der Geschäftszeiten für dringende Anliegen</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Positives Feedback von Kunden und Mitarbeitenden</div>
                    <div className="text-sm text-muted-foreground">Sowohl Mieter als auch das Service-Team schätzen die neue Lösung</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fazit */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold font-serif mb-4">Fazit</h3>
            <p className="text-base leading-relaxed mb-4">
              Dieses Praxisbeispiel zeigt eindrucksvoll, wie VoiceBot-Technologie in der Wohnungswirtschaft eingesetzt werden kann, um Servicequalität und Effizienz gleichzeitig zu steigern. Die Kombination aus intelligenter Automatisierung und menschlicher Expertise schafft ein Serviceerlebnis, das sowohl für Mieter als auch für Mitarbeiter einen echten Mehrwert bietet.
            </p>
            <p className="text-base leading-relaxed">
              Besonders bemerkenswert ist die pragmatische Lösung der technischen Herausforderungen: Statt teurer API-Schnittstellen wurde eine kostengünstige Alternative gefunden, die alle Anforderungen erfüllt. Dies zeigt, dass VoiceBot-Projekte auch mit begrenztem Budget erfolgreich umgesetzt werden können.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">
              Interessiert an einer ähnlichen Lösung?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie uns gemeinsam herausfinden, wie ein VoiceBot auch Ihren Kundenservice revolutionieren kann.
            </p>
            <Link href="/kontakt">
              <Button
                size="lg"
                variant="secondary"
                className="font-bold"
              >
                Jetzt Beratungsgespräch vereinbaren
              </Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold font-serif mb-8">
              Weitere Artikel
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/hackathon-vice-meister">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      Hackathon Vice-Meister bei Nexus Connect 2026
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Wie unser AI-Engineer in 90 Minuten einen funktionsfähigen Voicebot für Verwaltungszentralen entwickelte.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/blog/voicebot-vs-mitarbeiter">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                      Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz für Arztpraxen.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
