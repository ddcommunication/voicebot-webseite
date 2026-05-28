import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  author: string;
  rating: number;
  date: string;
  dateISO: string;
  text: string;
  initials: string;
  avatarColor: string;
}

// Alle Bewertungen (4–5 Sterne), neueste zuerst
const ALL_REVIEWS: Review[] = [
  {
    author: "Home & Living Immobilien",
    rating: 5,
    date: "Mai 2026",
    dateISO: "2026-05-23",
    text: "Kompetent, unkompliziert und mit vielen guten Ideen und Lösungsansätzen überzeugt uns die Zusammenarbeit mit der Firma Zöllner auf ganzer Linie. Man merkt schnell, dass hier mitgedacht wird und nicht einfach nur 'abgearbeitet' wird. Wir sind gespannt, wohin uns die gemeinsame Reise noch führt. Schön, euch an unserer Seite zu haben.",
    initials: "HL",
    avatarColor: "bg-orange-600",
  },
  {
    author: "Timo Neuberger",
    rating: 5,
    date: "Mai 2026",
    dateISO: "2026-05-23",
    text: "Über eine Veranstaltung durften wir die Firma Zöllner kennenlernen – und sind darüber wirklich sehr froh. Unsere NFON-Telefonanlage wurde zuvor bereits von einem anderen Dienstleister betreut. Dass man Telefonie jedoch so intelligent mit CRM- und Terminprozessen verbinden kann, war uns ehrlich gesagt in dieser Form überhaupt nicht bewusst. Die Firma Zöllner hat uns hier ganz neue Möglichkeiten aufgezeigt und Lösungen geschaffen, die uns im Arbeitsalltag bereits jetzt spürbar weiterhelfen. Besonders schätzen wir die hohe Fachkompetenz, die schnelle Unterstützung und die sehr angenehme Zusammenarbeit. Vielen Dank an das Team der Firma Zöllner – eine klare Empfehlung von uns!",
    initials: "TN",
    avatarColor: "bg-teal-600",
  },
  {
    author: "Uwe Ortlepp",
    rating: 5,
    date: "April 2026",
    dateISO: "2026-04-27",
    text: "Die Firma Zöllner ist mir von NFON als kompetenter Partner empfohlen worden. Von der ersten Kontaktaufnahme über die technische Beratung bis hin zur Installation habe ich mich perfekt betreut gefühlt. Alle Mitarbeiter kannten sich perfekt mit den NFON Lösungen aus und sind echte Profis in der Business Kommunikation. Kann ich wärmsten weiter empfehlen.",
    initials: "UO",
    avatarColor: "bg-indigo-600",
  },
  {
    author: "Marco Kaubisch",
    rating: 5,
    date: "Mai 2026",
    dateISO: "2026-05-22",
    text: "Wir haben eine neue Telefonanlage inkl. Einrichtung bekommen! Es hat alles perfekt zu unserer Zufriedenheit geklappt!",
    initials: "MK",
    avatarColor: "bg-blue-600",
  },
  {
    author: "Kathrin Schreiber",
    rating: 4,
    date: "April 2026",
    dateISO: "2026-04-25",
    text: "Die Firma Zöllner hat den GVST in Sachen Telefonie kompetent und sehr freundlich beraten, ohne Druck, mit guten Ideen und Hinweisen und vor Ort. Wir haben mit Frau Zschieschack nun eine sehr zuverlässige, fachkundige und angenehme Ansprechpartnerin, bei der wir uns mit unseren Fragen melden können.",
    initials: "KS",
    avatarColor: "bg-emerald-600",
  },
];

// Alle 5 Bewertungen anzeigen
const DISPLAYED_REVIEWS = ALL_REVIEWS;

const OVERALL_RATING = 4.9;
const TOTAL_REVIEWS = 13;

// "Jetzt bewerten" → Dresdner Standort
const REVIEW_URL = "https://share.google/Mmgz9NYGFHdTZfVB0";

// "Alle Bewertungen ansehen" → Elsterwerda-Standort (bestehende Maps-URL)
const MAPS_URL =
  "https://www.google.com/maps/place/Z%C3%B6llner+B%C3%BCro-+und+IT-Systeme+GmbH/@51.46169,13.52755,17z/data=!4m8!3m7!1s0x47a7891785f88d5b:0x539a41d4dff580da!8m2!3d51.46169!4d13.52755!9m1!1b1!16s%2Fg%2F1tx1s6nt?hl=de";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zöllner Büro- und IT-Systeme GmbH",
    url: "https://www.sprachassistent.net",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: OVERALL_RATING,
      reviewCount: TOTAL_REVIEWS,
      bestRating: 5,
      worstRating: 1,
    },
    review: DISPLAYED_REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: r.dateISO,
      reviewBody: r.text,
    })),
  };

  return (
    <section className="py-12 bg-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container max-w-3xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Google-Logo */}
            <div>
              <span className="text-xl font-bold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-xl font-bold text-foreground ml-1">Bewertungen</span>
            </div>
            <div className="flex items-center gap-2 border-l border-border pl-4">
              <span className="text-2xl font-bold text-foreground">{OVERALL_RATING}</span>
              <div>
                <StarRating rating={Math.round(OVERALL_RATING)} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {TOTAL_REVIEWS} Bewertungen
                </a>
              </div>
            </div>
          </div>

          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-semibold whitespace-nowrap">
              ★ Jetzt bewerten
            </Button>
          </a>
        </div>

        {/* Review Cards – untereinander */}
        <div className="flex flex-col gap-3">
          {DISPLAYED_REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-card rounded-xl px-5 py-4 shadow-sm border border-border"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div
                  className={`h-9 w-9 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5`}
                >
                  {review.initials}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name + Google-Icon + Datum */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-foreground">{review.author}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Sterne */}
                  <div className="mb-2">
                    <StarRating rating={review.rating} />
                  </div>

                  {/* Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link zu allen Bewertungen */}
        <div className="mt-3 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Alle {TOTAL_REVIEWS} Bewertungen auf Google ansehen →
          </a>
        </div>
      </div>
    </section>
  );
}
