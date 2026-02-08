import BannerSection from "../components/BannerSection";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import useSiteData from "../hooks/useSiteData";

function Contact() {
  const { contact, social } = useSiteData();

  return (
    <div>
      <Seo
        title="Contact Us | Arora Ankit & Associates"
        description="Get in touch with Arora Ankit & Associates for registrations, compliance, tax, and audit services in Delhi."
      />
      <BannerSection
        title="Contact Us"
        description="Share your requirements and our team will reach out within one business day."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.2 1l-2.2 2.2z" />
                  </svg>
                </span>
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8l-8 7-8-7v10z" />
                  </svg>
                </span>
                <span>{contact.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2a7 7 0 00-7 7c0 4.4 5.6 11 7 11s7-6.6 7-11a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5A2.5 2.5 0 0112 11.5z" />
                  </svg>
                </span>
                <span>{contact.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 4l8 8-8 8v-5H4v-6h8V4z" />
                  </svg>
                </span>
                <span className="flex flex-wrap items-center gap-3">
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                    </svg>
                  </a>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.5 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h3v12H3zM10 9h3v1.7h.1c.5-1 1.7-2 3.6-2 3 0 4.3 1.9 4.3 5.1V21h-3v-6.1c0-1.8-.7-3-2.3-3-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V21h-3z" />
                    </svg>
                  </a>
                  <a
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zm-5 3.5A3.5 3.5 0 1112 16a3.5 3.5 0 010-7zm0 2a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0012 10.5zM17.5 6.8a1 1 0 11-1 1 1 1 0 011-1z" />
                    </svg>
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <h2 className="text-xl font-semibold text-slate-900">Find Us</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Office location map"
                src={contact.mapUrl}
                className="h-64 w-full border-0 sm:h-[150px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </BannerSection>
      <CTASection
        title="Need help with business compliance?"
        description="Speak with our experts for a tailored checklist and timeline for your organization."
        ctaLabel="Request a Call Back"
        ctaTo="/contact"
      />
    </div>
  );
}

export default Contact;
