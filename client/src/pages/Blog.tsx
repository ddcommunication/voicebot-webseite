import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";

export default function Blog() {
  const posts = [
    {
      title: "Nia FrontDesk: Der KI-Sprachassistent von NFON",
      excerpt:
        "Nia FrontDesk von NFON nimmt Anrufe automatisch entgegen, beantwortet Standardfragen und leitet Gespräche intelligent weiter – 24/7, DSGVO-konform und ohne zusätzliche Hardware.",
      date: "21. Apr 2026",
      author: "Zöllner Office",
      category: "Produkttest",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/nia-frontdesk-sprachassistent-nfon_a90798a2.webp",
      slug: "/blog/nia-frontdesk-nfon",
    },
    {
      title: "onOffice business-beats 2026 – Voicebot-Integration live erleben in Aachen",
      excerpt:
        "Peter Gemander von Zöllner Office präsentiert am 8. Mai 2026 in Aachen: NFON Cloudya, Voicebot mit Timum-Anbindung an onOffice und ein Live-Praxisbeispiel mit Uwe Ortlepp. Tickets ab 349 €.",
      date: "8. Mai 2026",
      author: "Zöllner Office",
      category: "Veranstaltung",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/business-beats-hero-2026-jZnDmrkB7YXis7h5S2DkzV.webp",
      slug: "/blog/business-beats-2026-onoffice-voicebot",
    },
    {
      title: "KI-Tagung der sächsischen Wohnungsgenossenschaften – Wir sind dabei",
      excerpt:
        "Am 19. Mai 2026 findet in Dresden der Thementag \"KI ist jetzt\" statt. Zöllner Office ist am Stand Nr. 11 vertreten und berät zu Voicebots für die Wohnungswirtschaft – inkl. Integration mit onOffice und Timum.",
      date: "20. März 2026",
      author: "Zöllner Office",
      category: "Veranstaltung",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030399330/jqo46mGjR6yyo4xPHsKw3d/ki-tagung-airport-conference-boNhqRTLWGMLwVojLUrzQV.webp",
      slug: "/blog/ki-tagung-wohnungsgenossenschaften-2026",
    },
    {
      title: "Voicebot für KMU: Lohnt sich das?",
      excerpt:
        "Umfassende Analyse der Kosten, des Nutzens und der praktischen Einsatzmöglichkeiten von KI-Telefonassistenten für kleine und mittelständische Unternehmen. Inklusive ROI-Rechnung und Praxisbeispielen.",
      date: "14. Feb 2026",
      author: "Zöllner Office",
      category: "KMU & Mittelstand",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/DxjkMTxZCjnyTRIc.jpg",
      slug: "/blog/voicebot-kmu-kosten-roi",
    },
    {
      title: "Hackathon Vice-Meister bei Nexus Connect 2026",
      excerpt:
        "60 Teilnehmer, 9 Teams, 90 Minuten: Unser AI-Engineer entwickelte beim NFON/Botario-Workshop einen funktionsf\u00e4higen Voicebot f\u00fcr Verwaltungszentralen und erreichte den zweiten Platz.",
      date: "05. Feb 2026",
      author: "Z\u00f6llner Office",
      category: "News",
      image: "/images/Hackathon-Vice-Meister4.jpeg",
      slug: "/blog/hackathon-vice-meister",
    },
    {
      title: "Voicebot vs. Mitarbeiter: Kosten-Nutzen-Vergleich Arztpraxen",
      excerpt:
        "Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz am Beispiel einer Arztpraxis.",
      date: "23. Jan 2026",
      author: "Zöllner Office",
      category: "Analyse",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/tQqBNxdVhzvLaJJB.jpg",
      slug: "/blog/voicebot-vs-mitarbeiter",
    },
    {
      title: "Warum Voicebots die Zukunft des Kundenservice sind",
      excerpt:
        "Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren. Erfahren Sie, warum Voicebots dabei eine Schlüsselrolle spielen.",
      date: "12. Jan 2026",
      author: "Zöllner Office",
      category: "Technologie",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/cWJnjiaMnKxmewHD.jpg",
      slug: "/blog/zukunft-kundenservice",
    },
    {
      title: "5 Tipps für die perfekte Voicebot-Begrüßung",
      excerpt:
        "Der erste Eindruck zählt. So gestalten Sie Dialoge, die Ihre Anrufer nicht frustrieren, sondern begeistern.",
      date: "05. Jan 2026",
      author: "Zöllner Office",
      category: "Best Practices",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/FyIGbdGFeQuXelAa.jpg",
      slug: "/blog/perfekte-begruessung",
    },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Zöllner Office Blog",
        description: "Aktuelle Einblicke in die Welt der Sprach-KI und Voicebots.",
        url: "https://www.sprachassistent.net/blog",
        blogPost: posts.map(post => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          url: `https://www.sprachassistent.net${post.slug}`,
          author: {
            "@type": "Organization",
            name: post.author,
          },
        })),
      },
      generateBreadcrumbSchema([
        { name: "Startseite", url: "/" },
        { name: "Blog", url: "/blog" }
      ])
    ]
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Voicebot-Blog: Wissen, Praxistipps & News"
        description="Voicebot-Blog von Zöllner Office: Praxistipps zur KI-Telefonie, Branchen-News zu onOffice und NFON Cloudya, Fallstudien und aktuelle Veranstaltungen rund um Sprachassistenten."
        canonical="/blog"
        keywords="Voicebot Blog, Sprach-KI, Best Practices, Praxisbeispiele, News, Wissen"
        schema={blogSchema}
      />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Wissen & News
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Aktuelle Einblicke in die Welt der Sprach-KI, Tipps für die Praxis
            und Neuigkeiten von Zöllner Office.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow"
              >
                <Link href={post.slug || "#"} className="block">
                  <div className="h-48 overflow-hidden relative cursor-pointer">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </Link>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Link href={post.slug || "#"}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary font-semibold hover:text-secondary transition-colors group"
                    >
                      Weiterlesen{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
