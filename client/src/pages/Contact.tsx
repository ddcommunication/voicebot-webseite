import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Kontakt & Demo</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Erleben Sie unsere Voicebots live. Vereinbaren Sie eine kostenlose Demo oder stellen Sie uns Ihre Fragen.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Nachricht senden</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-sm font-medium">Vorname</label>
                    <Input id="firstname" placeholder="Max" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-sm font-medium">Nachname</label>
                    <Input id="lastname" placeholder="Mustermann" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                  <Input id="email" type="email" placeholder="max@firma.de" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                  <Input id="phone" type="tel" placeholder="+49 ..." />
                </div>

                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium">Thema</label>
                  <Select>
                    <SelectTrigger>
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
                  <label htmlFor="message" className="text-sm font-medium">Nachricht</label>
                  <Textarea id="message" placeholder="Wie können wir Ihnen helfen?" className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
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
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Hier finden Sie uns</h2>
                <p className="text-muted-foreground mb-8">
                  Zöllner Office ist Ihr Partner für digitale Kommunikation. Wir sitzen im Herzen von Berlin, arbeiten aber für Kunden in ganz Deutschland.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-none shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Anschrift</h3>
                      <p className="text-muted-foreground">
                        Zöllner Office GmbH<br/>
                        Musterstraße 123<br/>
                        10115 Berlin
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
                        +49 (0) 30 123 456 78<br/>
                        <span className="text-sm text-muted-foreground/80">Mo-Fr, 08:00 - 18:00 Uhr</span>
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
                        info@zoellner-office.de<br/>
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
