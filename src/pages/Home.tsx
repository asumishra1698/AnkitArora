import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FAQSection from "../components/FAQSection";
import OurCustomers from "../components/OurCustomers";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import ServiceSection from "../components/ServiceSection";
import CTASection from "../components/CTASection";
import {
  auditServices,
  businessServices,
  ngoServices,
  trademarkServices,
} from "../data/serviceSectionsData";
import useSiteData from "../hooks/useSiteData";

function Home() {
  const { brand, contact } = useSiteData();
  const baseReviews = [
    {
      name: "Ankita Sharma",
      role: "Startup Founder",
      quote:
        "Clear advice, quick responses, and a very structured onboarding. They made our registrations effortless.",
    },
    {
      name: "Rohit Mehta",
      role: "NGO Trustee",
      quote:
        "Reliable compliance support with proactive reminders. We always know what is due and when.",
    },
    {
      name: "Pooja Verma",
      role: "SME Owner",
      quote:
        "Transparent pricing and a calm, professional team. Our GST and ROC filings are finally stress-free.",
    },
    {
      name: "Vikram Singh",
      role: "Finance Head",
      quote:
        "They handle filings and timelines with precision. The team is proactive and very approachable.",
    },
    {
      name: "Neha Kapoor",
      role: "Founder, D2C Brand",
      quote:
        "Great mix of advisory and execution. Every compliance item is tracked and closed on time.",
    },
    {
      name: "Aditya Joshi",
      role: "Operations Lead",
      quote:
        "Consistent updates, clean documentation, and a clear plan for every filing. Highly recommend.",
    },
  ];
  const reviews = Array.from({ length: 50 }, (_, index) => ({
    ...baseReviews[index % baseReviews.length],
    id: index + 1,
  }));
  const faqs = [
    {
      question: "How long does company registration take?",
      answer:
        "Most registrations complete in 7-15 working days depending on name approval, document readiness, and MCA timelines.",
    },
    {
      question: "Do I need GST registration from day one?",
      answer:
        "GST is required once you cross the turnover threshold or sell on ecommerce platforms. We assess your case and advise the right timing.",
    },
    {
      question: "What documents are required for registration?",
      answer:
        "Typically PAN, Aadhaar, address proof, and business details. The exact list depends on the entity type and partners.",
    },
    {
      question: "How do you manage monthly compliance?",
      answer:
        "We set up a compliance calendar, share reminders, collect documents, and file returns on your behalf with status updates.",
    },
    {
      question: "Can you handle ROC and annual filings?",
      answer:
        "Yes. We prepare financials, draft resolutions, and complete ROC filings with due-date tracking.",
    },
    {
      question: "Is advisory included or billed separately?",
      answer:
        "We offer bundled plans and custom advisory. You will always get clear pricing before we start.",
    },
  ];
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    url: contact.mapUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
    review: baseReviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: review.quote,
    })),
  };

  return (
    <div>
      <Seo
        title="Arora Ankit & Associates | Chartered Accountants in Delhi"
        description="Delhi-based chartered accountants for business registration, GST, ROC filings, audits, and advisory services."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Reveal>
        <section
          className="relative overflow-hidden bg-slate-50 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-white/60" />
          <div className="relative w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-48">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Trusted advisors in Delhi</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                {brand.name}
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

      <Reveal>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="relative grid w-full gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-20">
            <div className="order-2 space-y-5 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">About Us</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                A modern CA firm focused on clarity, compliance, and growth.
              </h2>
              <p className="text-base leading-relaxed text-slate-800">
                We combine partner-led expertise with responsive, tech-enabled workflows so you always know
                what is next and what is due. From company setup to ongoing compliance, we keep the process
                structured, transparent, and stress-free.
              </p>
              <p className="text-base leading-relaxed text-slate-800">
                Based in Delhi, we serve startups, NGOs, and SMEs across India with registrations, GST, ROC
                filings, audits, and advisory services. Our mission is to be the trusted financial partner that
                helps your organization thrive.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xl font-semibold text-slate-900">15+ years</p>
                  <p className="text-sm text-slate-800">Combined advisory experience</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xl font-semibold text-slate-900">300+ clients</p>
                  <p className="text-sm text-slate-800">Across startups, NGOs, and SMEs</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="rounded-md bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                  title="Learn about the firm"
                >
                  Learn about the firm
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md border border-blue-900 px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                  title="Meet our advisors"
                >
                  Meet our advisors
                </Link>
              </div>
            </div>
            <div className="order-1 flex items-center justify-end lg:order-2">
              <div className="relative w-full max-w-full">
                <div className="absolute -right-6 top-6 h-full w-full rounded-[28px] border border-blue-200/60 bg-blue-50" />
                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl">
                  <img
                    src="/3.webp"
                    alt="Arora Ankit & Associates"
                    title="Arora Ankit & Associates"
                    className="h-auto w-full rounded-2xl object-cover bg-slate-50"
                  />                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <ServiceSection
          eyebrow="Business Registrations"
          title="Explore our core services"
          description="Clear guidance and execution for registrations, GST, and compliance."
          cards={businessServices}
          backgroundClassName="bg-slate-50"
        />
      </Reveal>

      <Reveal>
        <ServiceSection
          eyebrow="NGO Registration"
          title="Choose the right structure"
          description="Guided registration for trusts, societies, and Section-8 entities."
          cards={ngoServices}
          backgroundClassName="bg-white"
          variant="pastel"
        />
      </Reveal>

      <Reveal>
        <ServiceSection
          eyebrow="Trademark Registration"
          title="Protect your brand and creations"
          description="Secure intellectual property with the right registration route."
          cards={trademarkServices}
          backgroundClassName="bg-slate-50"
          variant="numbered"
        />
      </Reveal>

      <Reveal>
        <ServiceSection
          eyebrow="Audit and Tax Management"
          title="Stay compliant with timely filings"
          description="Comprehensive audits and returns to keep your business on track."
          cards={auditServices}
          backgroundClassName="bg-white"
        />
      </Reveal>

      <Reveal>
        <OurCustomers />
      </Reveal>

      <Reveal>
        <section className="bg-slate-50">
          <div className="w-full px-6 py-14 sm:px-10 lg:px-16">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">Google Reviews</p>
                <h2 className="text-2xl font-semibold text-slate-900">Rated 4.9 on Google</h2>
                <p className="text-sm text-slate-800">Trusted by founders, NGOs, and growing businesses across Delhi.</p>
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={`star-${index}`}
                      className="h-5 w-5 text-amber-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
                    </svg>
                  ))}
                  <span className="text-sm font-semibold text-slate-900">4.9/5</span>
                  <span className="text-sm text-slate-500">(120+ reviews)</span>
                </div>
              </div>
              <a
                href={contact.mapUrl}
                className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                title="See Google Reviews"
              >
                See Google Reviews
              </a>
            </div>
            <div className="mt-8">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1.1}
                loop
                autoplay={{ delay: 2600, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1.6 },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <svg
                            key={`${review.id}-star-${starIndex}`}
                            className="h-4 w-4 text-amber-400"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-slate-700">“{review.quote}”</p>
                      <div className="mt-5">
                        <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                        <p className="text-xs text-slate-500">{review.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <FAQSection title="GST & Compliance" faqs={faqs} />
      </Reveal>

      <Reveal>
        <CTASection
          title="Need help with business compliance?"
          description="Speak with our experts for a tailored checklist and timeline for your organization."
          ctaLabel="Request a Call Back"
          ctaTo="/contact"
        />
      </Reveal>
    </div>
  );
}

export default Home;
