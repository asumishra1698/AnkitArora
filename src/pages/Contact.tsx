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
                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.9 7.6a4 4 0 11-7.8 0 4 4 0 017.8 0zM6.6 16.2a7.2 7.2 0 0110.8 0 8 8 0 11-10.8 0z" />
                  </svg>
                </span>
                <span className="flex flex-wrap items-center gap-3">
                  <a
                    className="font-medium text-slate-900 hover:text-blue-700"
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                  <a
                    className="font-medium text-slate-900 hover:text-blue-700"
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="font-medium text-slate-900 hover:text-blue-700"
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
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
                className="h-64 w-full border-0 sm:h-[320px]"
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
