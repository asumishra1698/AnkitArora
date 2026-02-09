import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import useSiteData from "../hooks/useSiteData";
import { blogPosts } from "../posts";
function Blog() {
  const { brand, contact } = useSiteData();
  return (
    <div>
      <Seo
        title="Blog | Chartered Accountants in Delhi"
        keywords="Chartered Accountants, Delhi, Business Registration, GST, ROC Filings, Audits, Advisory Services"
        description="Delhi-based chartered accountants for business registration, GST, ROC filings, audits, and advisory services."
      />
      <Reveal>
        <section
          className="relative overflow-hidden bg-slate-50 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-white/60" />
          <div className="relative w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Trusted advisors in Delhi</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Blogs
              </h1>
              <p className="mt-4 text-lg text-slate-800">
                {brand.tagline}. We help startups, NGOs, and growing businesses with registrations, taxation,
                compliance, and audit services.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                  title="Get Consultation"
                >
                  Get Consultation
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="rounded-xl border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                  title={`Call ${contact.phone}`}
                >
                  Call {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{post.date}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-blue-900">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-slate-700">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                Read more
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Need help with business compliance?"
        description="Speak with our experts for a tailored checklist and timeline for your organization."
        ctaLabel="Request a Call Back"
        ctaTo="/contact"
      />
    </div>
  );
}

export default Blog;
