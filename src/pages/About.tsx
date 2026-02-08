import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "../components/Seo";
import OurCustomers from "../components/OurCustomers";
import useSiteData from "../hooks/useSiteData";
import Reveal from "../components/Reveal";
import CTASection from "../components/CTASection";

function About() {
  const { brand, contact } = useSiteData();

  return (
    <div>
      <Seo
        title="About Us | Chartered Accountants in Delhi"
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
                About Us
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
        <section className="w-full px-4 py-14 sm:px-8 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">About Arora Ankit And Associates</h2>
              <p className="mt-4 text-base text-slate-800">
                Arora Ankit And Associates is a Delhi-based chartered accountancy firm helping startups, SMEs, NGOs,
                and professionals with registration, taxation, and compliance. As trusted Chartered Accountants in
                Delhi, we guide clients through company registration, LLP formation, GST registration and filing, ROC
                compliances, income tax returns, audits, and advisory services. Our approach combines clear checklists,
                proactive reminders, and practical advice so founders can focus on growth while staying compliant with
                MCA and tax regulations.
              </p>
              <p className="mt-4 text-base text-slate-800">
                We believe compliance should be predictable and transparent. Our team supports you from the first
                consultation to ongoing reporting, ensuring every filing is accurate and on time. Whether you are
                setting up a new business, registering an NGO, or strengthening governance for an established company,
                we tailor timelines and documentation to your needs. With a client-first mindset and detailed process
                tracking, we deliver reliable outcomes for registration, audit, and advisory requirements across Delhi
                and NCR.
              </p>
            </div>
            <div
              className="aspect-[3/2] w-full rounded-3xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: "url(/3.webp)" }}
              aria-label="Arora Ankit And Associates team in Delhi"
              role="img"
            />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="w-full px-4 pb-14 sm:px-8 lg:px-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Meet Our Team</h2>
              <p className="mt-2 text-base text-slate-700">
                Dedicated chartered accountants and compliance experts focused on accuracy, timelines, and clarity.
              </p>
            </div>
            <div className="hidden text-sm font-semibold text-slate-500 md:block">Swipe to explore</div>
          </div>

          <div className="mt-8">
            <Swiper
              modules={[Navigation]}
              className="team-swiper"
              navigation
              spaceBetween={24}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1.4 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {[
                {
                  name: "Ankit Arora",
                  role: "Founder & CA",
                },
                {
                  name: "Neha Gupta",
                  role: "Tax & Compliance",
                },
                {
                  name: "Rohit Mehra",
                  role: "Audit Lead",
                },
                {
                  name: "Priya Sharma",
                  role: "ROC & MCA Filings",
                },
                {
                  name: "Saurabh Jain",
                  role: "GST Advisory",
                },
                {
                  name: "Kiran Malhotra",
                  role: "Corporate Compliance",
                },
                {
                  name: "Vivek Nair",
                  role: "Direct Tax",
                },
                {
                  name: "Aisha Khan",
                  role: "NGO & CSR",
                },
              ].map((member) => (
                <SwiperSlide key={member.name}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-semibold text-blue-900">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                    <p className="mt-3 text-sm text-slate-700">
                      Focused on accuracy, proactive reporting, and keeping filings on track for every client.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </Reveal>

      <Reveal><OurCustomers /></Reveal>

       <CTASection
        title="Need help with business compliance?"
        description="Speak with our experts for a tailored checklist and timeline for your organization."
        ctaLabel="Request a Call Back"
        ctaTo="/contact"
      />
    </div>
  );
}

export default About;
