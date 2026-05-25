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
// Bitte bei neuen Bewertungen oben eintragen und älteste unten entfernen,
// damit immer die 3 neuesten angezeigt werden.
const ALL_REVIEWS: Review[] = [
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
  {
    author: "Doreen Weizsäcker",
    rating: 5,
    date: "August 2024",
    dateISO: "2024-08-15",
    text: "Unser Drucker aus dem Netz war nach 3 Jahren kaputt und keiner ist bereit ihn zu reparieren. Bei der Firma Zöllner bekam ich schnell ein Angebot, nach einer kompetenten Beratung und 2 Tage später stand das Gerät mit Einweisung und Installation im Büro. Das Beste: es gibt ein 60-Monatsservice. Da gibt es die Farbe und Ersatzteile dazu. Dann habe ich erst mal für 5 Jahre eine Absicherung.",
    initials: "DW",
    avatarColor: "bg-violet-600",
  },
];

// Nur die 2 neuesten anzeigen (Liste ist bereits sortiert)
const DISPLAYED_REVIEWS = ALL_REVIEWS.slice(0, 2);

const OVERALL_RATING = 4.6;
const TOTAL_REVIEWS = 10;
const REVIEW_URL = "https://share.google/b7hcOLkz9KNyN85ax";
const MAPS_URL =
  "https://www.google.com/maps/place/Z%C3%B6llner+B%C3%BCro-+und+IT-Systeme+GmbH/@51.46169,13.52755,17z/data=!4m8!3m7!1s0x47a7891785f88d5b:0x539a41d4dff580da!8m2!3d51.46169!4d13.52755!9m1!1b1!16s%2Fg%2F1tx1s6nt?hl=de";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  // Schema.org AggregateRating + Review JSON-LD
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
    <section className="py-20 bg-muted/30">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            {/* Google-Logo nachgebaut */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-xl font-bold text-foreground">Bewertungen</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-foreground">{OVERALL_RATING}</span>
              <div>
                <StarRating rating={Math.round(OVERALL_RATING)} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors mt-0.5 block"
                >
                  {TOTAL_REVIEWS} Google-Bewertungen
                </a>
              </div>
            </div>
          </div>

          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md"
            >
              ★ Bewerten Sie uns auf Google
            </Button>
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {DISPLAYED_REVIEWS.map((review) => (
            <div
              key={review.author}
              className="bg-card rounded-2xl p-6 shadow-md border border-border flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full ${review.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm leading-tight">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                {/* Google G Icon */}
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{review.text}</p>

              {/* Link to Google */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline font-medium mt-auto"
              >
                Auf Google ansehen →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
