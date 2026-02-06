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
      title: "Praxisbeispiel Wohnungswirtschaft: Automatisierte Telefonannahme mit VoiceBot",
      excerpt:
        "Wie eine Wohnungsgenossenschaft mit über 200 Mitarbeitern durch intelligente Sprachautomatisierung den Kundenservice revolutionierte und die Erreichbarkeit auf 24/7 erweiterte.",
      date: "05. Feb 2026",
      author: "Zöllner Office",
      category: "Praxisbeispiel",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/hBssY4yFgrDMxKuQUwbMQs/sandbox/5JPTOfBKPWHtiL6jUToS28-img-1_1770375848000_na1fn_YmxvZy13b2hudW5nc3dpcnRzY2hhZnQtdm9pY2Vib3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaEJzc1k0eUZnckRNeEt1UVV3Yk1Rcy9zYW5kYm94LzVKUFRPZkJLUFdIdGlMNmpVVG9TMjgtaW1nLTFfMTc3MDM3NTg0ODAwMF9uYTFmbl9ZbXh2WnkxM2IyaHVkVzVuYzNkcnRzWTJoaFpuUXRkbTlwWTJWaWIzUS5qcGc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B78RZar9GenM~UCU5R3aYfGQstmiaAVlHSRL7JyF~554RiD-KL5smGjzarcBnsSW3LhgHMCdjumnWNMtjpORWJPKxD5hTB--lFj4U9DBmm0mZSnxb-DqgmiUkWnbxMdQRS2noEcaIBFDDkU-byNpWyJtFrWlpWoapvByQQmp5UCIVbrCaM6MnTUItXXR3WHRl8tg3M0tEhk2Z5F2PeSY75Si~9-H9i-n-LZ10osTfQvcRWWE6zdeQAsnEbUzdVWKmvlJhzXH-tJ0iyDavabIrWHru2XlcQq2mB4zuVTHkkSLmEugcWJ5w7FhtnvLUKbck8lc6OZMQlFFsOYvS5ztHw__",
      slug: "/blog/wohnungswirtschaft-voicebot",
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
