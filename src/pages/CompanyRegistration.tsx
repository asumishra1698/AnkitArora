import SimplePage from "./SimplePage";

const advantages = [
  "Start operations with a compliant legal structure",
  "Build credibility with clients, banks, and vendors",
  "Access easier funding and investment options",
  "Protect personal assets with limited liability",
  "Create a clear compliance and reporting roadmap",
];

const requirements = [
  "Valid identity and address proof for directors/partners",
  "Registered office address proof",
  "Digital signature (DSC) and DIN for directors",
  "Business activity and capital details",
  "Name availability and approval",
];

const faqs = [
  {
    question: "Which company type is best for my business?",
    answer:
      "The best structure depends on ownership, funding plans, and compliance needs. Arora Ankit And Associates compares Private Limited, LLP, OPC, and Partnership options to select the right fit.",
  },
  {
    question: "How long does company registration take?",
    answer:
      "Timelines typically range from 7-15 working days, depending on document readiness and name approval. Arora Ankit And Associates provides a checklist to reduce delays.",
  },
  {
    question: "Can I register a company with a rented office?",
    answer:
      "Yes. You can use a rented office address with valid rent agreement and owner NOC. We help prepare the correct address proof and utility documents.",
  },
  {
    question: "Is GST registration required during company registration?",
    answer:
      "GST depends on turnover thresholds and business activity. Arora Ankit And Associates evaluates GST applicability and can file it alongside registration if needed.",
  },
  {
    question: "What are the post-registration compliances?",
    answer:
      "Post-registration includes PAN/TAN, bank account, statutory registers, and periodic ROC filings. We set up a compliance calendar to keep everything on track.",
  },
  {
    question: "Can I convert from one business type to another?",
    answer:
      "Yes. Conversions are possible based on eligibility and legal conditions. We advise on timelines, tax impact, and required approvals before initiating conversion.",
  },
  {
    question: "What documents are required from directors?",
    answer:
      "PAN, Aadhaar, address proof, and recent photographs are typically required. We share a simple checklist and verify documents before filing.",
  },
  {
    question: "Do you provide end-to-end registration support?",
    answer:
      "Yes. Arora Ankit And Associates manages name approval, incorporation filings, certificates, and post-registration setup for Company Registration in Delhi NCR.",
  },
];

function CompanyRegistration() {
  return (
    <SimplePage
      title="Company Registration in Delhi NCR"
      keywords="Company Registration, Company Registration in Delhi NCR"
      description="Get Company Registration in Delhi NCR with Arora Ankit And Associates. We help you choose the right structure, manage MCA filings, and set up compliance from day one."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Minimum Requirements",
          items: requirements,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Company Registration Overview</h2>
          <p className="mt-3 text-base text-slate-800">
            Company Registration is the legal process of incorporating a business with the MCA. Arora Ankit And
            Associates provides Company Registration in Delhi NCR with structured documentation, name approval,
            and incorporation filings so you can start operations with confidence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Popular Business Structures</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Private Limited Company",
                text: "Ideal for startups seeking funding, scalability, and limited liability.",
              },
              {
                title: "Limited Liability Partnership (LLP)",
                text: "Best for professional firms that need flexibility with limited liability.",
              },
              {
                title: "One Person Company (OPC)",
                text: "Single founder structure with corporate benefits and compliance framework.",
              },
              {
                title: "Partnership Firm",
                text: "Simple setup with clear partner roles and shared responsibilities.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Process to Register Company</h2>
          <p className="mt-3 text-base text-slate-800">
            The Company Registration process is completed in five clear steps:
          </p>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Apply for the Digital Signature Certificate (DSC)",
              "File the name availability application",
              "Submit SPICe+ along with e-MOA, e-AOA, and AGILE forms",
              "Receive Certificate of Incorporation from ROC with PAN and TAN",
              "Open a current bank account in the company name and deposit subscribed capital",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Fees for Company Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            Company registration fees depend on authorized share capital, state stamp duty, and number of members.
            For example, if the capital is Rs. 1 lakh, there are 2 members, and the registered office is in Delhi,
            the government fees are around Rs. 1,500. Actual costs vary by state and capital slab, and may change
            with statutory updates. Arora Ankit And Associates can estimate fees and total costs after reviewing
            your structure. Professional fees and services are separate and depend on scope.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Checklist</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "PAN and Aadhaar of directors/partners",
              "Address proof (bank statement/utility bill)",
              "Registered office proof with NOC or rent agreement",
              "Passport-size photos",
              "Proposed business activity details",
            ].map((doc) => (
              <li key={doc} className="text-base text-slate-700">
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Post-Registration Compliance</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Issue share certificates and update statutory registers",
              "GST, PF, ESIC registrations based on applicability",
              "Periodic ROC filings and annual compliance",
              "Accounting setup and tax calendar",
            ].map((step) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-base font-semibold text-slate-900">{step}</p>
                <p className="mt-2 text-sm text-slate-800">
                  Arora Ankit And Associates helps you stay compliant after Company Registration.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SimplePage>
  );
}

export default CompanyRegistration;
