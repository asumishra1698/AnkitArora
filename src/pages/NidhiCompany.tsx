import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability protection for members",
  "Accept deposits and grant loans to members",
  "Easy access to public funds within members",
  "Good option for savings-based communities",
  "Less complex structure than NBFC",
];

const requirements = [
  "Minimum three directors",
  "Minimum seven shareholders",
  "Minimum capital of Rs. 10,00,000",
  "Maximum fifteen directors",
  "At least one director is an Indian resident",
];

const faqs = [
  {
    question: "What is a Nidhi Company and who can become a member?",
    answer:
      "A Nidhi Company is a public company formed to cultivate savings and provide loans to its members for mutual benefit. Only individuals can be members; body corporates and LLPs cannot join. It cannot accept deposits from or lend to non-members. Arora Ankit And Associates helps you align the structure with Nidhi rules.",
  },
  {
    question: "What are the minimum incorporation requirements for a Nidhi Company?",
    answer:
      "To incorporate, you need at least three directors, seven shareholders, a paid-up capital of Rs. 10,00,000, and at least one resident director. After incorporation, you must reach 200 members and maintain net owned funds of at least Rs. 20 lakh within one year of commencement.",
  },
  {
    question: "Can a Nidhi Company issue preference shares or raise external funds?",
    answer:
      "No. A Nidhi Company cannot issue preference shares and cannot raise funds from the public other than its members. It is designed for member-based deposits and loans only. This keeps the model focused on mutual benefit rather than external financing or capital markets.",
  },
  {
    question: "What documents are required for Nidhi Company registration?",
    answer:
      "You need self-attested PAN, identity and address proof for all members and directors, passport photos, and registered office proof with NOC and recent utility bill. You also need details of authorized and paid-up capital, business objects, and contact information for members and directors.",
  },
  {
    question: "How does the registration process work under SPICe+?",
    answer:
      "The process includes name reservation in SPICe+ Part A, filing Part B with MoA, AoA, and AGILE-PRO, converting forms to PDF for DSC, and submitting them to MCA. INC-9 is auto-generated in most cases. Arora Ankit And Associates manages filings, reviews, and submissions end to end.",
  },
];

function NidhiCompany() {
  return (
    <SimplePage
      title="Nidhi Company Registration"
      keywords="Nidhi Company Registration, Nidhi Company Registration In Delhi NCR"
      description="Register a Nidhi Company with Arora Ankit And Associates in Delhi NCR. We help you meet the requirements, prepare documents, and file for incorporation under SPICe+."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Nidhi Company Registration </h2>
          <p className="mt-3 text-base text-slate-800">
            A Nidhi Company is formed to encourage thrift and savings among its members and to accept deposits and
            provide loans only to its members for mutual benefit. Only individuals can become members, so a company or
            LLP cannot be a member of a Nidhi Company. These companies are regulated by the Central Government under
            the Nidhi Rules and the Companies Act.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Nidhi Companies typically offer loans at competitive rates compared to banks while operating with a clear
            set of compliance requirements. Arora Ankit And Associates provides end-to-end support for Nidhi Company
            Registration in Delhi, including incorporation and compliance planning.
          </p>
        </div>      

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Basic Conditions for Nidhi Company Registration</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "The Nidhi company must be incorporated as a public company.",
              "Preference shares cannot be issued under any circumstances.",
              "Paid-up equity share capital must be at least Rs. 10,00,000.",
              "The MOA must include objects limited to member deposits and loans for mutual benefit.",
              "The company name must end with Nidhi Limited.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Compliance Requirements After One Year</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "At least 200 members.",
              "Net owned funds of at least Rs. 20 lakh.",
              "Unencumbered term deposits of not less than 10% of outstanding deposits.",
              "Net owned funds to deposits ratio not exceeding 1:20.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Minimum Members and Directors</h2>
          <p className="mt-3 text-base text-slate-800">
            A Nidhi Company requires at least seven members and three directors at incorporation. Members are
            shareholders whose names appear in the register of members, while directors manage the company and oversee
            operations. This structure ensures broader participation and governance from the start.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required for Nidhi Company Registration</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Self-attested PAN of all members and directors",
              "Identity proof: passport, voter ID, Aadhaar, or driving license",
              "Address proof: bank statement or utility bill (not older than 2 months)",
              "Passport-size photographs of members and directors",
              "Registered office proof with NOC, ownership documents, and recent utility bill",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Information Required for Nidhi Company Registration</h2>
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
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Nidhi Company Registration Process</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Apply for name reservation through SPICe+ Part A.",
              "File SPICe+ Part B with MoA, AoA, and AGILE-PRO forms.",
              "Convert SPICe+ forms into PDF and affix DSC.",
              "Upload the forms on the MCA portal.",
              "INC-9 declarations for subscribers and first directors are auto-generated in most cases.",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Recent Amendments for Nidhi Company Registration</h3>
          <div className="mt-5 space-y-4 text-base text-slate-800">
            <p>
              SRN is no longer required for names reserved in SPICe+ Part A, as it auto-populates in Part B. ESIC and
              EPFO registration is mandatory for companies incorporated on or after 23 February 2020. Professional Tax
              registration is mandatory for new companies in Maharashtra, and bank account opening is mandatory via
              AGILE-PRO.
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                INC-9 declarations are auto-generated and submitted electronically, except when subscribers or
                directors exceed 20 or lack DIN and PAN.
              </li>
              <li>
                e-MOA (INC-33) and e-AOA (INC-34) are mandatory when subscribers are up to 7 in specified cases.
              </li>
              <li>
                Physical MoA and AoA are required in select foreign subscriber scenarios.
              </li>
              <li>
                Statutory returns for EPFO/ESI are required only after crossing prescribed thresholds.
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

export default NidhiCompany;
