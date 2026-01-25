import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Vielen Dank!", {
        description: "Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.",
      });
      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error("Fehler beim Senden", {
        description: error.message || "Bitte versuchen Sie es später erneut.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullName = `${formData.firstname} ${formData.lastname}`.trim();
    
    submitMutation.mutate({
      name: fullName,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Kontakt & Demo"
        description="Erleben Sie unsere Voicebots live. Vereinbaren Sie eine kostenlose Demo oder stellen Sie uns Ihre Fragen."
        canonical="/kontakt"
      />

      {/* Hero Section with Elsterwerda Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/contact-hero-ai-robot.jpg" 
            alt="KI-gestützte Kommunikationslösungen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="container relative z-10 py-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              Kontakt & Demo
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Erleben Sie unsere Voicebots live. Vereinbaren Sie eine kostenlose
              Demo oder stellen Sie uns Ihre Fragen. Wir sind für Sie da.
            </p>
          </div>
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="text-sm font-medium">
                      Vorname *
                    </label>
                    <Input 
                      id="firstname" 
                      placeholder="Max" 
                      className="bg-white"
                      value={formData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="text-sm font-medium">
                      Nachname *
                    </label>
                    <Input 
                      id="lastname" 
                      placeholder="Mustermann" 
                      className="bg-white"
                      value={formData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Firma (optional)
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Muster GmbH" 
                    className="bg-white"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-Mail *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="max@firma.de" 
                    className="bg-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefon *
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+49 ..." 
                    className="bg-white"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht (optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    className="min-h-[120px] bg-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full font-bold text-white hover:opacity-90"
                  style={{ backgroundColor: '#0B1528' }}
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Wird gesendet..." : "Absenden"}
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

                {/* Contact Person */}
                <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-cyan-50 mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <img 
                        src="/images/peter-gemander.jpg" 
                        alt="Peter Gemander" 
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">Ihr Ansprechpartner</h3>
                        <p className="text-lg font-semibold text-primary/90">Peter Gemander</p>
                        <p className="text-sm text-muted-foreground">Experte für Kommunikationslösungen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
