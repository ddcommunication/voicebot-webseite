import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Kontakt & Demo"
        description="Erleben Sie unsere Voicebots live. Vereinbaren Sie eine kostenlose Demo oder stellen Sie uns Ihre Fragen."
        canonical="/kontakt"
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Kontakt & Demo
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Erleben Sie unsere Voicebots live. Vereinbaren Sie eine kostenlose
            Demo oder stellen Sie uns Ihre Fragen.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="p-8 rounded-2xl shadow-lg border border-gray-200" style={{ backgroundColor: '#E7E8E9' }}>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Nachricht senden
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-sm font-medium">
                      Vorname
                    </label>
                    <Input id="firstname" placeholder="Max" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-sm font-medium">
                      Nachname
                    </label>
                    <Input id="lastname" placeholder="Mustermann" className="bg-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail
                  </label>
                  <Input id="email" type="email" placeholder="max@firma.de" className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon
                  </label>
                  <Input id="phone" type="tel" placeholder="+49 ..." className="bg-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium">
                    Thema
                  </label>
                  <Select>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demo anfragen</SelectItem>
                      <SelectItem value="beratung">Beratung</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    className="min-h-[120px] bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-bold text-white hover:opacity-90"
                  style={{ backgroundColor: '#0B1528' }}
                >
                  Absenden
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Hier finden Sie uns
                </h2>
                <p className="text-muted-foreground mb-8">
                  Die Zöllner Büro- & IT-Systeme GmbH ist Ihr Partner für digitale Kommunikation und intelligente Sprachassistenten. Mit zwei Standorten in Elsterwerda und Dresden sind wir für Kunden in ganz Deutschland erreichbar.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Hauptsitz Elsterwerda</h3>
                      <p className="text-muted-foreground">
                        Zöllner Büro- & IT-Systeme GmbH
                        <br />
                        Burgstraße 1
                        <br />
                        04910 Elsterwerda
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Standort Dresden</h3>
                      <p className="text-muted-foreground">
                        Zöllner Büro- & IT-Systeme GmbH
                        <br />
                        Pillnitzer Landstraße 32
                        <br />
                        01326 Dresden
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Telefon</h3>
                      <p className="text-muted-foreground">
                        <strong>Elsterwerda:</strong> +49 3533 4807-0
                        <br />
                        <strong>Dresden:</strong> +49 351 287087-50
                        <br />
                        <span className="text-sm text-muted-foreground/80">
                          Mo-Fr, 08:00 - 18:00 Uhr
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">E-Mail</h3>
                      <p className="text-muted-foreground">
                        info@zoellner-office.de
                        <br />
                        support@zoellner-office.de
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
