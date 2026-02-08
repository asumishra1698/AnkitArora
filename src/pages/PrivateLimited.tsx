import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability protection for shareholders",
  "Higher credibility with clients, banks, and investors",
  "Easier access to funding and equity investment",
  "Separate legal entity and perpetual succession",
  "Clear ownership structure with shareholding",
];

const requirements = [
  "Minimum 2 directors and 2 shareholders",
  "At least one resident director in India",
  "Registered office address proof",
  "DSC and DIN for directors",
  "Name approval and MOA/AOA drafting",
];

const faqs = [
  {
    question: "How long does Private Limited Company Registration take?",
    answer:
      "Typical timelines are 7-15 working days, depending on document readiness and MCA name approval. Arora Ankit And Associates provides a checklist, validates documents, and files promptly to reduce rework. Delays usually come from incomplete KYC, address proof, or name objections.",
  },
  {
    question: "What is the minimum capital for a private limited company?",
    answer:
      "There is no statutory minimum paid-up capital. You can start with a practical amount that matches your business needs and future funding plans. Arora Ankit And Associates helps decide the authorized and paid-up capital structure and updates it later if you raise investment.",
  },
  {
    question: "Can I use a rented office as the registered address?",
    answer:
      "Yes, a rented office can be used as the registered address with a rent agreement, owner NOC, and a recent utility bill. Arora Ankit And Associates reviews the documents, ensures the address format is compliant, and submits the correct proof during MCA filing.",
  },
  {
    question: "Is GST registration mandatory during incorporation?",
    answer:
      "GST depends on turnover thresholds, business activity, and place of supply. Some businesses need GST at incorporation, while others can apply later. Arora Ankit And Associates evaluates applicability, advises the right timing, and can file GST along with company registration if needed.",
  },
  {
    question: "What are the post-incorporation compliances?",
    answer:
      "Post-incorporation work includes PAN/TAN activation, bank account opening, share certificates, statutory registers, and routine ROC filings. Depending on operations, GST, PF, or ESIC may also apply. Arora Ankit And Associates sets a compliance calendar and handles filings so deadlines are met.",
  },
  {
    question: "Can a single person form a private limited company?",
    answer:
      "A private limited company needs at least two shareholders and two directors. If you are a single founder, you can choose OPC or add a nominee shareholder. Arora Ankit And Associates explains the options, compliance impact, and helps you pick the right structure.",
  },
  {
    question: "Do you provide end-to-end incorporation support?",
    answer:
      "Yes. Arora Ankit And Associates manages name approval, SPICe+ filing, e-MOA/e-AOA, PAN/TAN, and post-incorporation setup. We coordinate documentation, follow MCA timelines, and keep you updated until the Certificate of Incorporation is issued and compliance is scheduled with a dedicated coordinator.",
  },
];

function PrivateLimited() {
  return (
    <SimplePage
      title="Private Limited Company Registration"
      keywords="Private Limited Company Registration, Private Limited Company Registration in Delhi NCR"
      description="Get Private Limited Company Registration in Delhi NCR with Arora Ankit And Associates. We manage name approval, SPICe+ filing, e-MOA/e-AOA, PAN/TAN, and compliance setup."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Private Limited Company Overview</h2>
          <p className="mt-3 text-base text-slate-800">
            A Private Limited Company is one of the most widely adopted business structures in India and is well
            suited for small and medium-sized businesses. The total number of members is capped at 200, which helps
            maintain a closely held ownership structure while still enabling growth and investment.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Once registered, the company becomes a separate legal entity, independent of its directors and
            shareholders. This means the business continues to exist even if a member exits or passes away. The
            Companies Act, 2013 governs Private Limited companies, and the Ministry of Corporate Affairs regulates
            their registration. Arora Ankit And Associates manages the MCA filing process end to end.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Checklist</h2>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "PAN, Aadhaar, and address proof of directors",
              "Passport-size photographs",
              "Registered office proof with NOC or rent agreement",
              "Utility bill (not older than 2 months)",
              "Business activity details and capital structure",
            ].map((doc) => (
              <li key={doc} className="text-base text-slate-700">
                {doc}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Basic Information Required</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Authorized and paid-up share capital of the proposed company and number of shares subscribed by members",
              "Capital amount can be any value; no minimum capital is required to commence",
              "Place of birth and duration of stay of members and directors at the current residential address",
              "Occupation of members and directors",
              "Proposed object or business of the company",
              "Educational qualification of members and directors",
              "Email IDs and contact numbers of members and directors",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Process to Register a Private Limited Company</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Apply for DSC and DIN",
              "Name approval through MCA",
              "File SPICe+ with e-MOA, e-AOA, and AGILE forms",
              "Receive Certificate of Incorporation with PAN and TAN",
              "Open bank account and complete post-incorporation setup",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Changes As Per Recent Amendments</h3>
          <div className="mt-5 space-y-4 text-base text-slate-800">
            <p>
              SRN details are not required for names reserved in SPICe+ Part A; the system auto-populates them in
              Part B after Part A is filed.
            </p>
            <ul className="space-y-3 list-disc pl-6">
              <li>ESIC and EPFO registration is mandatory for companies incorporated w.e.f. 23 February 2020.</li>
              <li>Profession Tax registration is mandatory for new companies in Maharashtra w.e.f. 23 February 2020.</li>
              <li>
                Bank account application is mandatory for new companies incorporated w.e.f. 23 February 2020 and is
                filed through the AGILE-PRO linked form.
              </li>
              <li>
                INC-9 declarations for subscribers and first directors are auto-generated in PDF and e-submitted,
                except when subscribers/directors exceed 20 or any subscriber/director lacks DIN and PAN.
              </li>
              <li>
                e-MoA (INC-33) and e-AoA (INC-34) are mandatory when subscribers are up to 7, subject to the cases
                below. Where subscribers exceed 7, SPICe+ must be filed with physical MoA/AoA attachments.
              </li>
              <li>
                Statutory returns for EPFO/ESI are required only after crossing the prescribed threshold limits.
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
            Note: In the cases above, the maximum number of subscribers permitted for SPICe+ filing is 7. If the
            number of subscribers exceeds 7, SPICe+ must be filed with MoA and AoA as attachments.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default PrivateLimited;