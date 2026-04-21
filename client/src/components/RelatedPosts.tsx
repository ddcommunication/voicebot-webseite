import { Link } from "wouter";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
}

const ALL_POSTS: BlogPost[] = [
  {
    title: "Nia FrontDesk: Der KI-Sprachassistent von NFON",
    excerpt:
      "Nia FrontDesk von NFON nimmt Anrufe automatisch entgegen, beantwortet Standardfragen und leitet Gespräche intelligent weiter – 24/7, DSGVO-konform und ohne zusätzliche Hardware.",
    category: "Produkttest",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/nia-frontdesk-empfang-ki-sprachassistent_615ddce2.webp",
    slug: "/blog/nia-frontdesk-nfon",
  },
  {
    title: "onOffice business-beats 2026 – Voicebot-Integration live erleben in Aachen",
    excerpt:
      "Peter Gemander von Zöllner Office präsentiert am 8. Mai 2026 in Aachen: NFON Cloudya, Voicebot mit Timum-Anbindung an onOffice und ein Live-Praxisbeispiel mit Uwe Ortlepp.",
    category: "Veranstaltung",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/business-beats-hero-2026-jZnDmrkB7YXis7h5S2DkzV.webp",
    slug: "/blog/business-beats-2026-onoffice-voicebot",
  },
  {
    title: "KI-Tagung der sächsischen Wohnungsgenossenschaften – Wir sind dabei",
    excerpt:
      "Am 19. Mai 2026 findet in Dresden der Thementag \"KI ist jetzt\" statt. Zöllner Office ist am Stand Nr. 11 vertreten und berät zu Voicebots für die Wohnungswirtschaft.",
    category: "Veranstaltung",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/ki-tagung-airport-conference-boNhqRTLWGMLwVojLUrzQV.webp",
    slug: "/blog/ki-tagung-wohnungsgenossenschaften-2026",
  },
  {
    title: "Voicebot für KMU: Lohnt sich das?",
    excerpt:
      "Umfassende Analyse der Kosten, des Nutzens und der praktischen Einsatzmöglichkeiten von KI-Telefonassistenten für kleine und mittelständische Unternehmen.",
    category: "KMU & Mittelstand",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/DxjkMTxZCjnyTRIc.jpg",
    slug: "/blog/voicebot-kmu-kosten-roi",
  },
  {
    title: "Hackathon Vice-Meister bei Nexus Connect 2026",
    excerpt:
      "60 Teilnehmer, 9 Teams, 90 Minuten: Unser AI-Engineer entwickelte beim NFON/Botario-Workshop einen funktionsfähigen Voicebot und erreichte den zweiten Platz.",
    category: "News",
    image: "/images/Hackathon-Vice-Meister4.jpeg",
    slug: "/blog/hackathon-vice-meister",
  },
  {
    title: "Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen",
    excerpt:
      "Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz am Beispiel einer Arztpraxis.",
    category: "Analyse",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg",
    slug: "/blog/voicebot-vs-mitarbeiter",
  },
  {
    title: "Warum Voicebots die Zukunft des Kundenservice sind",
    excerpt:
      "Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren. Erfahren Sie, warum Voicebots dabei eine Schlüsselrolle spielen.",
    category: "Technologie",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/cWJnjiaMnKxmewHD.jpg",
    slug: "/blog/zukunft-kundenservice",
  },
  {
    title: "5 Tipps für die perfekte Voicebot-Begrüßung",
    excerpt:
      "Der erste Eindruck zählt. So gestalten Sie Dialoge, die Ihre Anrufer nicht frustrieren, sondern begeistern.",
    category: "Best Practices",
    image:
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FyIGbdGFeQuXelAa.jpg",
    slug: "/blog/perfekte-begruessung",
  },
];

interface RelatedPostsProps {
  /** Slug des aktuellen Artikels – wird aus den Vorschlägen ausgeschlossen */
  currentSlug: string;
  /** Anzahl der angezeigten ähnlichen Beiträge (Standard: 3) */
  count?: number;
}

export default function RelatedPosts({ currentSlug, count = 3 }: RelatedPostsProps) {
  const related = ALL_POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);

  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-2xl font-bold text-primary mb-8">Ähnliche Beiträge</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group h-full flex flex-col">
                <div className="h-44 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-primary mt-1 mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Artikel lesen
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
