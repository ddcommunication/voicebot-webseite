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

export default function Blog() {
  const posts = [
    {
      title: "Voicebot vs. Mitarbeiter: Der Kosten-Nutzen-Vergleich für Arztpraxen",
      excerpt:
        "Lohnt sich ein Voicebot? Wir vergleichen Kosten, Erreichbarkeit und Effizienz am Beispiel einer Arztpraxis.",
      date: "23. Jan 2026",
      author: "Zöllner Office",
      category: "Analyse",
      image: "/images/blog-voicebot-vs-mitarbeiter-new.jpg",
      slug: "/blog/voicebot-vs-mitarbeiter",
    },
    {
      title: "Warum Voicebots die Zukunft des Kundenservice sind",
      excerpt:
        "Künstliche Intelligenz verändert, wie Unternehmen mit Kunden kommunizieren. Erfahren Sie, warum Voicebots dabei eine Schlüsselrolle spielen.",
      date: "12. Jan 2026",
      author: "Zöllner Office",
      category: "Technologie",
      image: "/images/blog-future-customer-service.jpg",
      slug: "/blog/zukunft-kundenservice",
    },
    {
      title: "5 Tipps für die perfekte Voicebot-Begrüßung",
      excerpt:
        "Der erste Eindruck zählt. So gestalten Sie Dialoge, die Ihre Anrufer nicht frustrieren, sondern begeistern.",
      date: "05. Jan 2026",
      author: "Zöllner Office",
      category: "Best Practices",
      image: "/images/blog-perfect-greeting.jpg",
      slug: "/blog/perfekte-begruessung",
    },
  ];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zöllner Office Blog",
    description: "Aktuelle Einblicke in die Welt der Sprach-KI und Voicebots.",
    blogPost: posts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date, // Note: Should ideally be ISO format
      author: {
        "@type": "Person",
        name: post.author,
      },
      image: `https://www.zoellner-office.de${post.image}`,
    })),
  };

  return (
    <div className="flex flex-col gap-0">
      <SEO
        title="Wissen & News"
        description="Aktuelle Einblicke in die Welt der Sprach-KI, Tipps für die Praxis und Neuigkeiten von Zöllner Office."
        canonical="/blog"
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
