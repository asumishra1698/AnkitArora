import SimplePage from "./SimplePage";

const requirements = [
  "Minimum two partners",
  "DIN of the partners",
  "No minimum capital requirement",
  "DSC of one partner",
  "One partner must be an Indian resident",
];

const advantages = [
  "Limited liability protection",
  "No requirement of audit in many cases",
  "Lower registration cost",
  "Separate legal entity for LLP route",
  "Less procedural compliance",
];

const faqs = [
  {
    question: "Is partnership registration mandatory in India?",
    answer:
      "Partnership registration is optional under the Indian Partnership Act, 1932, but it is strongly recommended. Registered firms can enforce contractual rights, file suits against third parties, and create stronger legal standing for banking, vendor onboarding, and tax documentation. Arora Ankit And Associates advises on state-wise requirements in Delhi NCR and handles registration when partners choose to formalize the firm.",
  },
  {
    question: "What documents are needed to register a partnership firm?",
    answer:
      "Typical documents include Form 1 application, a stamped and signed partnership deed, affidavit, identity and address proof of partners, and proof of principal place of business such as ownership papers or a rent agreement with utility bill. Arora Ankit And Associates verifies the set, formats affidavits, and submits the file to the Registrar of Firms for Delhi NCR registrations.",
  },
  {
    question: "How long does partnership registration take?",
    answer:
      "Timelines depend on state portals and document readiness. In most Delhi NCR jurisdictions, the process can take 7-15 working days once the deed is finalized and documents are complete. Arora Ankit And Associates prepares the deed, validates KYC, and tracks the application to reduce resubmissions and speed up certificate issuance.",
  },
  {
    question: "Can partners decide any profit-sharing ratio?",
    answer:
      "Yes. Partners can choose any profit and loss sharing ratio in the partnership deed. The ratio should be clear for tax reporting and dispute prevention. If a ratio is not specified, profits are shared equally by default. Arora Ankit And Associates drafts deeds that align with partner roles, capital contribution, and risk allocation for Delhi NCR firms.",
  },
  {
    question: "Should I choose a partnership firm or LLP?",
    answer:
      "A partnership firm is simpler and cheaper to start but has unlimited liability. An LLP offers limited liability and a separate legal entity with higher compliance. The right choice depends on risk, funding, and credibility goals. Arora Ankit And Associates compares both structures for your Delhi NCR business and recommends the most suitable route.",
  },
];

function PartnershipRegistration() {
  return (
    <SimplePage
      title="Partnership Registration"
      keywords="Partnership Registration, Partnership Firm Registration, Partnership Registration in Delhi NCR, Partnership Deed, Register of Firms"
      description="Register a partnership firm with Arora Ankit And Associates in Delhi NCR. Get deed drafting, state registration, PAN setup, and compliance guidance for smooth business operations."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of Partnership Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            The Indian Partnership Act, 1932 defines partnership as an agreement between persons who agree to share
            profits of a business carried on by all or any one of them acting for all. A partnership firm combines
            the skills, capital, and effort of two or more people under a mutually agreed partnership deed. Arora
            Ankit And Associates supports partnership registration in Delhi NCR with deed drafting and filing.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Registration is optional but recommended because it provides legal recognition and helps partners
            enforce rights in disputes, banking, or vendor onboarding. The registration process is completed on the
            state Register of Firms portal.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Features of Partnership Firm</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Governed by the Partnership Act, 1932</li>
            <li>Applicable to any business, profession, or industry</li>
            <li>Profit and loss sharing based on a predefined ratio</li>
            <li>Unlimited liability for partners</li>
            <li>Tenure depends on the partnership deed and partner consent</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Advantages of Partnership Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Quick decisions since each partner can act on behalf of the firm</li>
            <li>Profits are taxed in the hands of partners as per the agreement</li>
            <li>Low commencement cost and fewer formalities</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Is it necessary to register a partnership?</h3>
          <p className="mt-3 text-base text-slate-800">
            Registration is optional and can be completed before starting business or anytime during operations.
            Registered firms enjoy legal rights that are not available to unregistered firms, such as the ability to
            enforce contractual claims in court. Arora Ankit And Associates recommends registration to avoid future
            disputes and improve business credibility in Delhi NCR.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Application for registration in Form 1</li>
            <li>Specimen affidavit</li>
            <li>Certified copy of the partnership deed</li>
            <li>Proof of principal place of business (ownership or rent agreement)</li>
          </ol>
          <p className="mt-3 text-base text-slate-800">
            If the Registrar is satisfied, the firm is entered in the Register of Firms and a Certificate of
            Registration is issued. The Register of Firms is open for public inspection on payment of prescribed
            fees.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Process of Partnership Firm Registration</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>Selection of name for the partnership firm</li>
            <li>Creation and attestation of partnership deed</li>
            <li>Registration on the state portal</li>
            <li>Application for PAN after registration</li>
            <li>Opening of current account and commencement of business</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Wrapping up</h3>
          <p className="mt-3 text-base text-slate-800">
            Partnership firms are a practical choice for founders who want shared ownership and flexible decision
            making. A properly drafted partnership deed and timely registration help prevent conflicts over profit
            sharing, responsibilities, and exit terms. Arora Ankit And Associates guides Delhi NCR partners through
            drafting, registration, and post-registration compliance so the business can start with clarity.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default PartnershipRegistration;
