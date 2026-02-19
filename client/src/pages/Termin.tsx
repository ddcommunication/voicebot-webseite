import SEO from "@/components/SEO";

export default function Termin() {
  return (
    <>
      <SEO 
        title="Beratungstermin buchen"
        description="Buchen Sie jetzt Ihren persönlichen Beratungstermin für Voicebot-Lösungen. Kostenlose Erstberatung – wir zeigen Ihnen, wie KI-Telefonie Ihr Unternehmen entlastet."
        canonical="/termin"
      />
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Beratungstermin buchen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vereinbaren Sie jetzt einen kostenlosen Beratungstermin. Wir zeigen Ihnen, wie unsere Voicebot-Lösungen Ihr Unternehmen entlasten und Ihre Erreichbarkeit verbessern können.
            </p>
          </div>

          {/* Timum Widget iframe */}
          <iframe
            src="https://www.timum.de/4c6f8131-b445-48b3-a78d-deb05e3cb77b/e4ad70b0-fe8a-401e-85c1-1660b0ca2220?embed=true"
            width="100%"
            height="550"
            frameBorder="0"
            style={{ border: 'none' }}
            title="Terminbuchung"
          />

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Sie haben Fragen? Rufen Sie uns an unter{" "}
              <a href="tel:+4935334807-48" className="text-primary hover:underline">
                +49 3533 4807-48
              </a>{" "}
              oder schreiben Sie uns an{" "}
              <a href="mailto:kontakt@sprachassistent.net" className="text-primary hover:underline">
                kontakt@sprachassistent.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
