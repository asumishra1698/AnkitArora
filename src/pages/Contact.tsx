import BannerSection from "../components/BannerSection";
import Seo from "../components/Seo";
import useSiteData from "../hooks/useSiteData";

function Contact() {
  const { contact } = useSiteData();

  return (
    <div>
      <Seo
        title="Contact Us | Arora Ankit & Associates"
        description="Get in touch with Arora Ankit & Associates for registrations, compliance, tax, and audit services in Delhi."
      />
      <BannerSection
        title="Contact Us"
        description="Share your requirements and our team will reach out within one business day."
      />

      <div className="w-full px-16 pb-16">
        <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Office</h2>
          <p className="mt-3 text-sm text-slate-800">{contact.location}</p>
          <p className="mt-3 text-sm text-slate-800">Phone: {contact.phone}</p>
          <p className="mt-1 text-sm text-slate-800">Email: {contact.email}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Send a message</h2>
          <p className="mt-3 text-sm text-slate-800">
            Use this area to integrate your contact form or enquiry widget.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
