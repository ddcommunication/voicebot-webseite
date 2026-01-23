import SEO from "@/components/SEO";
import { Building2, Phone, Mail, Printer, FileText, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Impressum"
        description="Rechtliche Informationen und Anbieterkennzeichnung von Zöllner Büro- & IT-Systeme GmbH."
        canonical="/impressum"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Scale className="h-6 w-6 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Impressum</h1>
          </div>
          <p className="text-slate-300 text-lg">
            Rechtliche Informationen und Anbieterkennzeichnung
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container max-w-4xl">
          <div className="grid gap-8">
            {/* Firmeninformationen */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      Angaben gemäß § 5 TMG
                    </h2>
                    <div className="text-lg space-y-1">
                      <p className="font-semibold text-slate-900">
                        Zöllner Büro- & IT-Systeme GmbH
                      </p>
                      <p className="text-muted-foreground">Burgstraße 1</p>
                      <p className="text-muted-foreground">04910 Elsterwerda</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-bold text-lg text-primary mb-3">
                    Vertreten durch
                  </h3>
                  <p className="text-muted-foreground">Peter Gemander</p>
                </div>
              </CardContent>
            </Card>

            {/* Kontaktinformationen */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Kontakt</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Telefon</p>
                      <a
                        href="tel:+4935334807-0"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +49 3533 4807-0
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Telefax</p>
                      <p className="text-muted-foreground">+49 3533 4807-20</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 md:col-span-2">
                    <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">E-Mail</p>
                      <a
                        href="mailto:info@buero-zoellner.de"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@buero-zoellner.de
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registereintrag */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <div className="space-y-4 flex-1">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-3">
                        Registereintrag
                      </h2>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Eintragung im Handelsregister</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          <div>
                            <span className="font-medium text-slate-900">
                              Registergericht:
                            </span>{" "}
                            Amtsgericht Cottbus
                          </div>
                          <div>
                            <span className="font-medium text-slate-900">
                              Registernummer:
                            </span>{" "}
                            HRB 2365
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-bold text-lg text-primary mb-2">
                        Umsatzsteuer-Identifikationsnummer
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        gemäß § 27 a Umsatzsteuergesetz
                      </p>
                      <p className="font-mono text-lg text-slate-900">
                        DE813770994
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Verantwortlicher */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Inhaltlich Verantwortlicher nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-muted-foreground mb-1">Peter Gemander</p>
                <p className="text-sm text-muted-foreground/80">(Anschrift siehe oben)</p>
              </CardContent>
            </Card>

            {/* Redaktionelle Unterstützung */}
            <Card className="border-none shadow-lg bg-slate-50">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold text-primary mb-3">
                  Redaktionelle Unterstützung
                </h2>
                <p className="text-muted-foreground">
                  Andreas Fiedler | Online Marketing Dresden
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
