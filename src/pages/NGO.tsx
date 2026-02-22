import { Link } from "react-router-dom";
import SimplePage from "./SimplePage";

const ngoRegistrationLinks = [
  {
    title: "NGO Registration",
    description:
      "Register your NGO with expert guidance and compliance support.",
    to: "/ngo/ngo-registration",
  },
  {
    title: "Section 8 NPon",
    description: "Incorporate a not-for-profit Section 8 company.",
    to: "/ngo/section-8",
  },
  {
    title: "Trust Registration",
    description: "Set up a charitable trust for social impact.",
    to: "/ngo/trust-registration",
  },
  {
    title: "Society Registration",
    description: "Form a society for community and cultural initiatives.",
    to: "/ngo/society-registration",
  },

];

const ngoComplianceLinks = [
  {
    title: "NGO Darpan Registration",
    description: "Get listed on the government NGO Darpan portal.",
    to: "/ngo/ngo-darpan",
  },
  {
    title: "FCRA Registration",
    description: "Obtain FCRA approval for foreign funding.",
    to: "/ngo/fcra-registration",
  },
  {
    title: "80G 12A Registration",
    description: "Tax exemption benefits for donors and NGOs.",
    to: "/ngo/80g-12a",
  },
  {
    title: "Corporate Social Responsibility",
    description: "Register to receive CSR funds from companies.",
    to: "/ngo/csr",
  },
];

function NGO() {
  return (
    <SimplePage
      title="NGO Services"
      description="Comprehensive support for NGO registration, compliance, audit, and funding documentation."
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              NGO Registration
            </h3>
            <div className="mt-5 grid gap-4">
              {ngoRegistrationLinks.map((item) => (
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Compliance & Support
            </h3>
            <div className="mt-5 grid gap-4">
              {ngoComplianceLinks.map((item) => (
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

export default NGO;
