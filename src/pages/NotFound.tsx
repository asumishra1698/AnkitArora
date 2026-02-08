import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <Seo
        title="Page not found | Arora Ankit & Associates"
        description="The page you are looking for does not exist or has moved."
        robots="noindex, nofollow"
      />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center gap-6 px-6 py-20 sm:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Error 404</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          This page took a detour.
        </h1>
        <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
          Try heading back to the homepage or browse our services to continue.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
            title="Go to homepage"
          >
            Go to homepage
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            title="Contact us"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
