import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ServiceCard = {
  title: string;
  description: string;
  to: string;
  icon?: ReactNode;
  number?: string;
  tone?: string;
  iconWrapClass?: string;
};

type ServiceSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: ServiceCard[];
  backgroundClassName?: string;
  gridClassName?: string;
  variant?: "centered" | "pastel" | "numbered";
};

function ServiceSection({
  eyebrow,
  title,
  description,
  cards,
  backgroundClassName = "bg-slate-50",
  gridClassName = "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
  variant = "centered",
}: ServiceSectionProps) {
  const baseCardClass = "group flex h-full flex-col rounded-3xl p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg";
  const centeredCardClass = `${baseCardClass} items-center border border-slate-200 bg-white text-center shadow-xl hover:shadow-md`;
  const pastelCardClass = `${baseCardClass} text-left shadow-xl hover:shadow-md`;
  const numberedCardClass = `${baseCardClass} relative border border-slate-200 bg-white text-left shadow-xl hover:shadow-md`;
  const learnMoreClass =
    variant === "centered"
      ? "mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-emerald-600"
      : "mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-slate-900";

  const iconWrapperFor = (card: ServiceCard) => {
    if (card.iconWrapClass) {
      return card.iconWrapClass;
    }

    if (variant === "pastel") {
      return "flex h-12 w-12 items-center justify-center rounded-full bg-white/70";
    }

    if (variant === "numbered") {
      return "flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-semibold text-slate-700";
    }

    return "flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50";
  };

  return (
    <section className={`w-full ${backgroundClassName} px-6 py-14 sm:px-10 lg:px-16`}>
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{eyebrow}</p>
        <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-800">{description}</p>
      </div>
      <div className={gridClassName}>
        {cards.map((card) => (
          <Link
            key={card.title}
            to={card.to}
            className={`${variant === "pastel" ? pastelCardClass : variant === "numbered" ? numberedCardClass : centeredCardClass} ${card.tone ?? ""}`.trim()}
            title={card.title}
          >
            {variant === "numbered" && card.number ? (
              <span className="pointer-events-none absolute right-6 top-6 text-6xl font-semibold text-slate-200">
                {card.number}
              </span>
            ) : null}
            {card.icon ? (
              <div className={iconWrapperFor(card)}>{card.icon}</div>
            ) : null}
            <h2 className="mt-5 text-[1.2rem] font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm text-slate-800">{card.description}</p>
            <span className={learnMoreClass}>
              Learn more
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
export type { ServiceCard };
