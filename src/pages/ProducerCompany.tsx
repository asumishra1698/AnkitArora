import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability protection",
  "Loans under Producer Company structure",
  "Ideal for producers and farmers",
  "Best option for agricultural activities",
  "Can add multiple members",
];

const requirements = [
  "Minimum five directors",
  "Minimum ten shareholders",
  "Minimum capital of Rs. 5,00,000",
  "Maximum fifteen directors",
  "At least one director is an Indian resident",
];

const faqs = [
  {
    question: "What is a Producer Company and who can register it in Delhi NCR?",
    answer:
      "A Producer Company is a private company formed by producers, farmers, or agriculturists to improve income and market access. It focuses on production, harvesting, processing, and marketing of primary produce. In Delhi NCR, you can register a Producer Company with at least 10 producer members and 5 directors, subject to eligibility and capital requirements.",
  },
  {
    question: "Which law governs Producer Company Registration?",
    answer:
      "Producer Companies are governed by Part IXA of the Companies Act, 1956, which continues to apply through Section 465 of the Companies Act, 2013 until a specific law is enacted. This legal framework defines permissible activities, member structure, and compliance standards that apply to Producer Company Registration in Delhi NCR and across India.",
  },
  {
    question: "What documents are required for Producer Company Registration?",
    answer:
      "Required documents include PAN, identity and address proof, photographs of members and directors, and registered office proof with NOC and utility bill. Additional documents like Khasra/Khatauni and producer certificates certified by local authorities are needed to verify producer status. Arora Ankit And Associates prepares the checklist and reviews all documents before filing.",
  },
  {
    question: "What is the minimum capital and member requirement?",
    answer:
      "You need a minimum paid-up capital of Rs. 5,00,000 and at least 10 producer members to incorporate a Producer Company. A minimum of 5 directors is mandatory, with at least one resident director in India. These conditions ensure proper governance and eligibility under the Producer Company framework in Delhi NCR.",
  },
  {
    question: "How long does Producer Company Registration take in Delhi NCR?",
    answer:
      "Registration usually takes 15-25 working days, depending on name approval, document readiness, and MCA processing timelines. The timeline includes SPICe+ Part A and Part B filing, DSC, e-MOA/e-AOA, and AGILE-PRO. Arora Ankit And Associates manages filing milestones and provides status updates throughout the process.",
  },
];

function ProducerCompany() {
  return (
    <SimplePage
      title="Producer Company Registration"
      keywords="Producer Company Registration, Producer Company Registration In Delhi NCR"
      description="Producer Company Registration in Delhi NCR made simple with Arora Ankit And Associates. We manage member structure, SPICe+ filing, and compliance planning for producer companies."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of a Producer Company</h2>
          <p className="mt-3 text-base text-slate-800">
            A Producer Company is a legally organized body of farmers and agriculturalists introduced to raise the
            income and profitability of Indian producers. It is incorporated as a private company, with the primary
            objective of production, harvesting, processing, and selling of members' produce. Producer Company
            Registration in Delhi NCR allows 10 or more producers to form a company with at least 5 directors and a
            minimum capital of Rs. 5,00,000.
          </p>
          <p className="mt-3 text-base text-slate-800">
            The structure combines professional governance with member-driven benefits, enabling better market access,
            access to finance, and collective bargaining for farmers and producer groups.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Legal Provisions for Producer Company Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            There is no separate provision under the Companies Act, 2013, but Part IXA of the Companies Act, 1956
            continues to govern Producer Companies through Section 465. This ensures Producer Company Registration in
            Delhi NCR follows a clear legal framework for incorporation, member eligibility, and permitted activities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Activities Allowed for Producer Companies</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Production, processing, harvesting, procurement, grading, handling, marketing, and export of produce",
              "Providing training, education, research, and consultancy services for members",
              "Production and distribution of power and conservation of natural resources",
              "Promoting mutual assistance, welfare measures, and insurance for producers",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required for Producer Company Registration</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Self-attested PAN of members and directors",
              "Identity proof: passport, voter ID, Aadhaar, or driving license",
              "Address proof: bank statement or utility bill (not older than 2 months)",
              "Passport-size photographs of members and directors",
              "Registered office proof with NOC and recent utility bill",
              "Khasra/Khatauni and Jamabandi of subscribers",
              "Producer certificate from Tehsildar, Agriculture Officer, Patwari, SDM, or District Administrator",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Information Required for Producer Company Registration</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Authorized and paid-up share capital and number of shares subscribed",
              "Place of birth and duration of stay at present residential address",
              "Occupation and educational qualification of members and directors",
              "Proposed business objects of the company",
              "Email IDs and contact numbers of members and directors",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Process of Producer Company Registration</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Apply for name reservation through SPICe+ Part A.",
              "File SPICe+ Part B with MoA, AoA, and AGILE-PRO forms.",
              "Convert SPICe+ forms to PDF and affix DSC.",
              "Upload the forms on the MCA portal for processing.",
              "INC-9 declarations are auto-generated in most cases.",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Recent Amendments for Producer Company Registration</h3>
          <div className="mt-5 space-y-4 text-base text-slate-800">
            <p>
              SRN is no longer required for names reserved in SPICe+ Part A. ESIC and EPFO registration is mandatory
              for companies incorporated on or after 23 February 2020, and bank account opening is mandatory via
              AGILE-PRO. Profession Tax registration is mandatory for Maharashtra-based companies.
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                INC-9 declarations are auto-generated except when subscribers or directors exceed 20 or lack DIN and
                PAN.
              </li>
              <li>
                e-MOA (INC-33) and e-AOA (INC-34) are mandatory when subscribers are up to 7 in specified cases.
              </li>
              <li>
                Physical MoA and AoA are required in select foreign subscriber scenarios.
              </li>
            </ul>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">S. No.</th>
                  <th className="px-4 py-3">Case</th>
                  <th className="px-4 py-3">Forms to be filed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">1</td>
                  <td className="px-4 py-3">Non-individual first subscriber based outside India</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with apostilled MoA and AoA attachments</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">2</td>
                  <td className="px-4 py-3">Non-individual first subscriber based in India</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with linked e-MoA (INC-33) and e-AoA (INC-34)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">3</td>
                  <td className="px-4 py-3">Indian national subscriber other than director</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with linked e-MoA (INC-33) and e-AoA (INC-34)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">4</td>
                  <td className="px-4 py-3">Indian national subscriber-cum-director</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with linked e-MoA (INC-33) and e-AoA (INC-34)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">5</td>
                  <td className="px-4 py-3">Foreign national subscriber (not director) with valid DIN</td>
                  <td className="px-4 py-3">
                    SPICe+ (INC-32) with linked e-MoA/e-AoA and valid business visa; if visa is unavailable, use
                    apostilled MoA/AoA and do not use e-MoA/e-AoA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">6</td>
                  <td className="px-4 py-3">Foreign national subscriber-cum-director with valid DIN</td>
                  <td className="px-4 py-3">
                    SPICe+ (INC-32) with linked e-MoA/e-AoA and valid business visa; if visa is unavailable, use
                    apostilled MoA/AoA and do not use e-MoA/e-AoA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">7</td>
                  <td className="px-4 py-3">Foreign national subscriber-cum-director without valid DIN</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with apostilled MoA and AoA attachments</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-700">
            Note: The maximum number of subscribers permitted for SPICe+ filing is 7. If subscribers exceed 7,
            SPICe+ must be filed with MoA and AoA as attachments.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default ProducerCompany;
