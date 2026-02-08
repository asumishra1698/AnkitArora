import { Link } from "react-router-dom";

type CTASectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  className?: string;
};

function CTASection({ title, description, ctaLabel, ctaTo, className }: CTASectionProps) {
  return (
    <section className={`py-12 sm:py-16 ${className ?? ""}`.trim()}>
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
              <p className="mt-2 text-slate-200">{description}</p>
            </div>
            <Link
              to={ctaTo}
              className="rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:from-amber-300 hover:to-amber-200"
              title={ctaLabel}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
