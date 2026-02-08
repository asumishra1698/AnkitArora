import { Link } from "react-router-dom";
import SimplePage from "./SimplePage";

const businessRegistrationLinks = [
  {
    title: "Company Registration",
    description: "Pick the right structure and register quickly.",
    to: "/start-business/company-registration",
  },
  {
    title: "Private Limited Company Registration",
    description: "Most preferred structure for funded startups.",
    to: "/start-business/private-limited-company-registration",
  },
  {
    title: "Public Limited Company Registration",
    description: "Raise capital from the public with compliance support.",
    to: "/start-business/public-limited-company-registration",
  },
  {
    title: "Limited Liability Partnership Registration",
    description: "Flexible ownership with limited liability protection.",
    to: "/start-business/llp-registration",
  },
  {
    title: "One Person Company Registration",
    description: "Single founder setup with corporate identity.",
    to: "/start-business/opc-registration",
  },
  {
    title: "Nidhi Company Registration",
    description: "Mutual benefit structure for member lending.",
    to: "/start-business/nidhi-company-registration",
  },
  {
    title: "Producer Company Registration",
    description: "Built for farmer and producer collectives.",
    to: "/start-business/producer-company-registration",
  },
  {
    title: "Foreign Company Registration",
    description: "Set up a foreign business presence in India.",
    to: "/start-business/foreign-company-registration",
  },
  {
    title: "Partnership Registration",
    description: "Simple firm setup with clear partnership deed.",
    to: "/start-business/partnership-registration",
  },
  {
    title: "Sole Proprietorship Registration",
    description: "Fast and lightweight registration for solo owners.",
    to: "/start-business/sole-proprietorship-registration",
  },
];

const licenseLinks = [
  {
    title: "GST Registration",
    description: "Threshold check and filing in one go.",
    to: "/licenses/gst-registration",
  },
  {
    title: "FSSAI Registration",
    description: "Food license for manufacturers and sellers.",
    to: "/licenses/fssai-registration",
  },
  {
    title: "Import Export Code",
    description: "IEC for cross-border trade and remittances.",
    to: "/licenses/import-export-code",
  },
  {
    title: "ISO Certification",
    description: "Global standards for quality and compliance.",
    to: "/licenses/iso-certification",
  },
  {
    title: "RERA Registration",
    description: "Registration for real estate projects and agents.",
    to: "/licenses/rera-registration",
  },
  {
    title: "MSME Udyam Registration",
    description: "Udyam certificate to unlock MSME benefits.",
    to: "/licenses/msme-udyam",
  },
  {
    title: "Shop Act Registration",
    description: "State-wise shop and establishment license.",
    to: "/licenses/shop-act-registration",
  },
  {
    title: "Business Registration Number (BRN)",
    description: "Unique business ID for compliance and banking.",
    to: "/licenses/brn",
  },
  {
    title: "Startup Registration",
    description: "DPIIT recognition and Startup India benefits.",
    to: "/licenses/startup-registration",
  },
];

function StartBusiness() {
  return (
    <SimplePage
      title="Start Business"
      description="Launch your company with expert guidance on registrations, documentation, and compliance.
      We offer end-to-end support for private limited, LLP, and OPC structures."
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Business Registration
            </h3>
            <div className="mt-5 grid gap-4">
              {businessRegistrationLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-md"
                  title={item.title}
                >
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Licenses</h3>
            <div className="mt-5 grid gap-4">
              {licenseLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-md"
                  title={item.title}
                >
                  <p className="text-base font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SimplePage>
  );
}

export default StartBusiness;
