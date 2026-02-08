import type { ReactNode } from "react";
import BannerSection from "../components/BannerSection";
import type { BannerSectionProps } from "../components/BannerSection";
import FAQSection, { type FAQItem } from "../components/FAQSection";
import Seo from "../components/Seo";

type SimplePageProps = {
  title: string;
  description: BannerSectionProps["description"];
  points?: DescriptionColumn[];
  children?: ReactNode;
  faqs?: FAQItem[];
};

type DescriptionColumn = {
  title?: string;
  items: string[];
};

function isDescriptionColumn(value: string | DescriptionColumn): value is DescriptionColumn {
  return typeof value === "object" && value !== null && "items" in value;
}

function SimplePage({ title, description, points, children, faqs }: SimplePageProps) {
  const seoDescription = (() => {
    if (typeof description === "string") {
      return description;
    }

    if (Array.isArray(description)) {
      if (description.length === 0) {
        return "";
      }

      if (typeof description[0] === "string") {
        return description.join(" ");
      }

      return description
        .filter(isDescriptionColumn)
        .flatMap((column) => column.items)
        .filter(Boolean)
        .join(" ");
    }

    return "";
  })();

  return (
    <>
      <Seo
        title={`${title} | Arora Ankit & Associates`}
        description={seoDescription}
      />
      <BannerSection title={title} description={description}>
        {points && points.length > 0 ? (
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            {points.map((column) => (
              <div key={column.title || column.items.join("-")}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                {column.title ? (
                  <h2 className="text-xl font-semibold text-slate-900">{column.title}</h2>
                ) : null}
                <ul className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 010 1.4l-7.3 7.3a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.3 3.3 6.6-6.6a1 1 0 011.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
        {children}
        <FAQSection title={title} faqs={faqs} />
      </BannerSection>
    </>
  );
}

export default SimplePage;
