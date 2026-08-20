import { describe, expect, it } from "vitest";
import { injectSeoMeta } from "./seo-meta";

describe("SEO-Metadaten: futureSAX-Innovationsforum", () => {
  it("liefert für die Event-Route eindeutige Article-Metadaten mit Canonical und Hero-Bild", () => {
    const html = "<!doctype html><html><head></head><body></body></html>";
    const result = injectSeoMeta(
      html,
      "/blog/futuresax-innovationsforum-new-work-ki-2026",
    );

    expect(result).toContain(
      "<title>futureSAX-Innovationsforum New Work & KI 2026 | Zöllner Office</title>",
    );
    expect(result).toContain(
      '<link rel="canonical" href="https://sprachassistent.net/blog/futuresax-innovationsforum-new-work-ki-2026">',
    );
    expect(result).toContain('<meta property="og:type" content="article">');
    expect(result).toContain(
      'content="https://sprachassistent.net/manus-storage/bautzen-panorama-monster4711-cc-by-sa-3_5ca87732.webp"',
    );
  });

  it("liefert für die Brains-on-Silicon-Route eindeutige Article-Metadaten mit Canonical und Hero-Bild", () => {
    const html = "<!doctype html><html><head></head><body></body></html>";
    const result = injectSeoMeta(html, "/blog/brains-on-silicon-2026");

    expect(result).toContain(
      "<title>Brains on Silicon 2026: Peter Gemander am NFON-Stand | Zöllner Office</title>",
    );
    expect(result).toContain(
      '<link rel="canonical" href="https://sprachassistent.net/blog/brains-on-silicon-2026">',
    );
    expect(result).toContain('<meta property="og:type" content="article">');
    expect(result).toContain(
      'content="https://sprachassistent.net/manus-storage/brains-on-silicon-2026-hero-2000_d660b672.webp"',
    );
    expect(result).toContain(
      '<meta property="og:image:secure_url" content="https://sprachassistent.net/manus-storage/brains-on-silicon-2026-hero-2000_d660b672.webp">',
    );
    expect(result).toContain('<meta property="og:image:type" content="image/webp">');
    expect(result).toContain(
      '<meta name="twitter:image:alt" content="Brains on Silicon 2026: Peter Gemander am NFON-Stand | Zöllner Office">',
    );
  });

  it("liefert für bestehende Blogbeiträge jeweils ein eigenes Open-Graph-Bild", () => {
    const html = "<!doctype html><html><head></head><body></body></html>";
    const result = injectSeoMeta(html, "/blog/hackathon-vice-meister");

    expect(result).toContain(
      '<meta property="og:image" content="https://sprachassistent.net/images/Hackathon-Vice-Meister4.jpeg">',
    );
    expect(result).toContain('<meta property="og:image:type" content="image/jpeg">');
    expect(result).toContain('<meta property="og:image:secure_url"');
  });
});
