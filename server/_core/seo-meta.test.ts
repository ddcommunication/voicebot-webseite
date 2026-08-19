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
      'content="https://sprachassistent.net/manus-storage/futuresax-innovationsforum-bautzen-2026_05f7a066.png"',
    );
  });
});
