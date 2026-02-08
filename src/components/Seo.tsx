import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  canonicalUrl?: string;
  robots?: string;
  keywords?: string;
};

const DEFAULT_IMAGE = "/LOGO.png";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function buildKeywords(title: string, description: string) {
  const shortDescription = description.split(/\s+/).slice(0, 16).join(" ");
  return [
    title,
    `${title} services`,
    `${title} consultation`,
    shortDescription,
  ]
    .filter(Boolean)
    .join(", ");
}

function Seo({ title, description, image = DEFAULT_IMAGE, canonicalUrl, robots, keywords }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const resolvedKeywords = keywords?.trim() || buildKeywords(title, description);

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: resolvedKeywords,
    });

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl || window.location.href,
    });

    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: image,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: image,
    });

    upsertLink("canonical", canonicalUrl || window.location.href);

    if (robots) {
      upsertMeta('meta[name="robots"]', {
        name: "robots",
        content: robots,
      });
    } else {
      const robotsMeta = document.head.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }
  }, [title, description, image, canonicalUrl, robots, keywords]);

  return null;
}

export default Seo;
