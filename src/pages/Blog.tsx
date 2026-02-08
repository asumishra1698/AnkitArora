import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import useSiteData from "../hooks/useSiteData";

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
