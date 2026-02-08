import SimplePage from "./SimplePage";

const requirements = [
  "Minimum two partners",
  "DPIN/DIN for all designated partners",
  "DSC of at least one designated partner",
  "No minimum capital required",
  "At least one designated partner is an Indian resident",
];

const advantages = [
  "Limited liability protection",
  "Lower registration cost",
  "Separate legal entity",
  "Less procedural compliance",
  "Audit required only above thresholds",
];

const faqs = [
  {
    question: "What is LLP Registration and who should choose it?",
    answer:
      "LLP Registration creates a separate legal entity with limited liability and flexible partner roles. It suits professionals, family-owned businesses, and service firms that want simpler compliance than a company. Arora Ankit And Associates evaluates your model, capital needs, and growth plans before recommending LLP or an alternative structure.",
  },
  {
    question: "Is there any minimum capital required for an LLP?",
    answer:
      "No minimum capital is mandated for LLPs. Partners can contribute cash, assets, or services as agreed in the LLP agreement. Arora Ankit And Associates helps define the contribution structure, partner rights, and profit sharing to keep filings and bank documentation aligned with the agreed capital plan.",
  },
  {
    question: "When is audit mandatory for an LLP?",
    answer:
      "Audit is required only if the contribution exceeds INR 25 lakh or annual turnover exceeds INR 40 lakh. If you stay below these limits, audit is not mandatory. Arora Ankit And Associates monitors thresholds and guides you on compliance timelines to avoid penalties and missed filings.",
  },
  {
    question: "What documents are needed for LLP Registration?",
    answer:
      "You need PAN, address proof, photographs, and identity proof for partners, plus registered office proof with NOC and utility bills. Foreign partners need passport and address proof. Arora Ankit And Associates provides a checklist, verifies documents, and prepares filings to reduce resubmissions.",
  },
  {
    question: "How long does the LLP Registration process take?",
    answer:
      "LLP Registration usually takes 10-20 working days depending on name approval and document readiness. Arora Ankit And Associates handles RUN LLP, DSC/DPIN, FiLLiP filing, and LLP agreement registration to keep the process smooth and on time with regular status updates.",
  },
  {
    question: "Can LLP raise equity funding like a private limited company?",
    answer:
      "LLPs are not ideal for equity fundraising from VCs or private equity since they do not issue shares. They work best for professional services and closely held businesses. Arora Ankit And Associates can help evaluate if LLP, private limited, or OPC is better for your funding goals.",
  },
];

function LLPRegistration() {
  return (
    <SimplePage
      title="LLP Registration in Delhi NCR"
      keywords="LLP Registration, LLP Registration in Delhi NCR"
      description="LLP Registration in Delhi NCR made simple with Arora Ankit And Associates. We manage name approval, DSC/DPIN, FiLLiP filing, and LLP agreement registration with clear compliance guidance."
      points={[
        {
          title: "Minimum Requirements",
          items: requirements,
        },
        {
          title: "Advantages",
          items: advantages,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of Limited Liability Partnership</h2>
          <p className="mt-3 text-base text-slate-800">
            A Limited Liability Partnership (LLP) combines partnership flexibility with limited liability. Each
            partner is liable only to the extent of their contribution, and the misconduct or negligence of one
            partner does not transfer to the others. LLPs are easy to manage and ideal for professional services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Key Takeaways</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Limited liability for each partner based on contribution",
              "Risk and responsibilities are shared across partners",
              "Popular among legal, accounting, consulting, and service firms",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Origin of the Concept</h2>
          <p className="mt-3 text-base text-slate-800">
            LLPs were introduced in India through the Limited Liability Partnership Act, 2008. The objective was to
            offer a business structure with limited liability and fewer compliances than companies, while keeping the
            flexibility of partnerships.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Suitability and Popularity</h2>
          <p className="mt-3 text-base text-slate-800">
            LLPs are suitable for professionals, family-owned businesses, and closely held firms that do not plan to
            raise equity funding. They are not preferred for venture capital or private equity investment, where a
            shareholding structure is usually required.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Features of an LLP</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Separate legal entity with perpetual succession",
              "Limited liability for each partner",
              "Lower cost of formation and compliance",
              "No minimum capital contribution",
              "Audit required only above prescribed thresholds",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Basic Requirements to Incorporate LLP</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Minimum two designated partners",
              "Digital signature of at least one designated partner",
              "DPIN/DIN for all partners",
              "Defined contribution (cash, assets, or other value)",
              "At least one designated partner is an Indian resident",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required for LLP Registration</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "PAN or passport (for foreign partners)",
              "Identity proof: Aadhaar, voter ID, or driving license",
              "Address proof: bank statement or utility bill (not older than 3 months)",
              "Registered office proof with NOC and utility bill (not older than 2 months)",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">LLP Registration Process</h2>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Name application through RUN LLP on MCA portal",
              "Obtain DSC for designated partners",
              "File FiLLiP form with partner KYC, consent, and office proof",
              "Receive Certificate of Incorporation from MCA",
              "File LLP Agreement within 30 days using Form 3",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why Register Your LLP?</h3>
          <p className="mt-3 text-base text-slate-800">
            LLP Registration in Delhi NCR ensures legal protection, clear partner roles, and better credibility with
            clients and banks. Arora Ankit And Associates manages filings and post-registration compliance so you can
            start operations with confidence and stay compliant with LLP Act, 2008.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">LLP Registration Fees</h3>
          <p className="mt-3 text-base text-slate-800">
            LLP Registration fees depend on state stamp duty, total contribution, and the number of partners. As an
            example, for a contribution of Rs. 1 lakh with two partners, government fees can be around Rs. 1,500 to
            Rs. 2,500 depending on the state. Professional fees are separate and vary based on scope. Arora Ankit And
            Associates provides a detailed estimate after reviewing your requirements in Delhi NCR.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default LLPRegistration;