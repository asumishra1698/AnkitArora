import SimplePage from "./SimplePage";

const requirements = [
  "Minimum one director",
  "Minimum one nominee",
  "No minimum capital required",
  "DSC of the director",
  "Director must be an Indian resident",
];

const advantages = [
  "Limited liability protection",
  "Separate legal entity",
  "Perpetual existence",
  "Best option for single owners",
  "Less procedural compliances",
];

const faqs = [
  {
    question: "What is a One Person Company and who should register it?",
    answer:
      "A One Person Company (OPC) is a company with a single member under Section 2(62) of the Companies Act, 2013. It suits solo founders who want limited liability, a separate legal entity, and better credibility than a proprietorship. It is ideal for consultants, freelancers, and micro-businesses in Delhi NCR.",
  },
  {
    question: "What are the minimum requirements for OPC registration?",
    answer:
      "You need one director, one nominee, a valid DSC, and a resident director who has stayed in India for at least 182 days in the preceding calendar year. There is no mandatory minimum paid-up capital. Arora Ankit And Associates verifies eligibility and prepares all MCA filings.",
  },
  {
    question: "When does an OPC need to convert to a private limited company?",
    answer:
      "Conversion is mandatory if paid-up capital exceeds Rs. 50 lakh or average turnover over three consecutive financial years exceeds Rs. 2 crore. The company must convert within six months of crossing the limit. Voluntary conversion is not allowed within two years of incorporation.",
  },
  {
    question: "Is audit mandatory for an OPC?",
    answer:
      "Audit becomes compulsory when the OPC’s contribution exceeds Rs. 25 lakh or annual turnover exceeds Rs. 40 lakh. Below these thresholds, audit is not mandatory, but basic ROC compliances still apply. Arora Ankit And Associates tracks thresholds and keeps your filings on schedule.",
  },
  {
    question: "What documents are required for OPC incorporation?",
    answer:
      "Documents typically include PAN, identity proof, address proof, and photographs of the member and nominee, plus registered office proof with owner NOC and a recent utility bill. Additional details like business objects and capital structure are also required for SPICe+ filing.",
  },
  {
    question: "How long does OPC registration take in Delhi NCR?",
    answer:
      "OPC registration usually takes 10-15 working days, depending on name approval and document readiness. The timeline includes DSC issuance, SPICe+ Part A and Part B filing, and INC-9 processing. Arora Ankit And Associates provides end-to-end support and status updates.",
  },
];

function OnePersonCompany() {
  return (
    <SimplePage
      title="One Person Company Registration in Delhi NCR"
      keywords="One Person Company Registration, OPC Registration in Delhi NCR"
      description="Get One Person Company Registration in Delhi NCR with Arora Ankit And Associates. We handle name approval, nominee setup, SPICe+ filing, and compliance guidance for OPCs."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of One Person Company</h2>
          <p className="mt-3 text-base text-slate-800">
            As per Section 2(62) of the Companies Act, 2013, a One Person Company (OPC) is a company with only one
            member. The single member is the subscriber to the memorandum of association and holds the shares of the
            company. An OPC blends the advantages of a company with the control of a sole proprietorship.
          </p>
          <p className="mt-3 text-base text-slate-800">
            OPC registration allows solo founders to build a corporate structure without bringing in partners. It is
            a modern option for micro-businesses and professionals who want limited liability, a formal identity, and
            easier access to contracts, banking, and vendor relationships.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Rationale Behind One Person Company</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Convert a business idea into a corporate form without adding partners",
              "Limited liability for the sole member",
              "Single-person control with structured governance",
              "Low resource requirements to start",
              "No minimum paid-up capital mandated by law",
              "Perpetual succession through a nominated successor",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of OPC Registration in Delhi NCR</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Limited liability: the member’s liability is limited to their shareholding.",
              "Independent existence: OPC has a separate legal identity from the owner.",
              "Lower tax burden: remuneration, rent, and interest paid to the owner are deductible.",
              "Quicker actions: single-owner control enables faster decisions.",
              "No minimum capital contribution: start with a practical capital plan.",
              "Audit only when contribution exceeds Rs. 25 lakh or turnover crosses Rs. 40 lakh.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Major Conditions for Incorporation</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "The member and nominee must be natural persons, Indian citizens, and residents of India.",
              "Resident means staying in India for at least 182 days during the immediately preceding calendar year.",
              "No person can incorporate more than one OPC.",
              "No person can be a nominee in more than one OPC.",
              "If a person becomes a member of another OPC as nominee, they must regularize within 180 days.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Other Provisions and Conversion Rules</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "An OPC can start with authorized capital of Rs. 1 lakh; there is no minimum paid-up capital.",
              "Mandatory conversion when paid-up capital exceeds Rs. 50 lakh.",
              "Mandatory conversion when average turnover of three consecutive years exceeds Rs. 2 crore.",
              "OPC cannot be incorporated or converted into a Section 8 company.",
              "OPC cannot carry out non-banking financial investment activities.",
              "Voluntary conversion is not allowed within two years of incorporation unless thresholds are crossed.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Self-attested PAN of member, nominee, and director",
              "Identity proof: passport, voter ID, Aadhaar, or driving license",
              "Address proof: bank statement or utility bill (not older than 2 months)",
              "Passport-size photographs of member and nominee",
              "Registered office proof with NOC and recent utility bill",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Information Needed</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Authorized and paid-up capital structure of the proposed company",
              "Place of birth and duration of stay at present residential address",
              "Occupation and educational qualification of member and nominee",
              "Proposed business objectives of the company",
              "Email IDs and contact numbers of member and nominee",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">OPC Registration Process in Delhi NCR</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Obtain DSC for the proposed member and director.",
              "Apply for name reservation through SPICe+ Part A.",
              "File SPICe+ Part B with KYC, office proof, and nominee consent (INC-3).",
              "Prepare e-MOA (INC-33) and e-AOA (INC-34) and affix DSC.",
              "File AGILE-PRO for PAN, TAN, GST (if required), EPFO, ESIC, and bank account.",
              "Upload forms on MCA and submit INC-9 declaration electronically.",
              "Receive Certificate of Incorporation and complete post-incorporation steps.",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why Register an OPC with Us?</h3>
          <p className="mt-3 text-base text-slate-800">
            Arora Ankit And Associates provides OPC registration support in Delhi NCR with clear documentation,
            eligibility checks, and compliance guidance. We manage name approval, SPICe+ filing, and nominee
            formalities, and guide you on post-incorporation compliances so your OPC starts strong and stays compliant.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default OnePersonCompany;
