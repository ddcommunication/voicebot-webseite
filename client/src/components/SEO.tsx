import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  schema?: object;
  keywords?: string;
  robots?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  type = "website",
  image = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030399330/aJdwTMGgxMBLbFMd.jpg",
  schema,
  keywords,
  robots = "index, follow",
}: SEOProps) {
  const siteTitle = "Zöllner Office";
  const fullTitle = `${title} | ${siteTitle}`;
  const baseUrl = "https://www.sprachassistent.net";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

  // Aggressively remove Manus-injected meta tags
  useEffect(() => {
    const removeManusMetaTags = () => {
      // Remove all OG, Twitter, and description meta tags not managed by Helmet
      const selectors = [
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        'meta[name="description"]',
        'title'
      ];
      
      selectors.forEach(selector => {
        const tags = document.querySelectorAll(selector);
        tags.forEach(tag => {
          // Only remove tags that are NOT managed by Helmet
          if (!tag.hasAttribute('data-rh') && !tag.hasAttribute('data-react-helmet')) {
            tag.remove();
          }
        });
      });
    };

    // Remove immediately
    removeManusMetaTags();
    
    // Also remove after a short delay to catch any late injections
    const timer = setTimeout(removeManusMetaTags, 100);
    
    return () => clearTimeout(timer);
  }, [title, description]);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
