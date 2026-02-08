import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability protection for shareholders",
  "Better image and credibility in the market",
  "Easier access to equity funding and loans",
  "Ability to list on stock exchanges",
  "Preferred structure for large investors",
];

const requirements = [
  "Minimum three directors",
  "Minimum seven members",
  "No minimum paid-up capital",
  "Maximum fifteen directors",
  "At least one resident director in India",
];

const faqs = [
  {
    question: "What is a public limited company?",
    answer:
      "A public limited company is a company that can offer shares to the public and has limited liability. It is governed by the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs. Arora Ankit And Associates helps you structure, incorporate, and comply with the required filings.",
  },
  {
    question: "How many directors and members are required?",
    answer:
      "A public limited company must have at least three directors and seven members, with a maximum of fifteen directors unless approval is obtained. At least one director must be a resident of India. Arora Ankit And Associates verifies eligibility and prepares incorporation documents accordingly.",
  },
  {
    question: "Is there a minimum capital requirement?",
    answer:
      "No statutory minimum paid-up capital is required to form a public limited company. You can decide capital based on your business plan and funding needs. Arora Ankit And Associates helps determine the authorized and paid-up capital structure and updates it when required.",
  },
  {
    question: "Can a public limited company list on a stock exchange?",
    answer:
      "Yes. A public limited company can raise capital through an IPO and list on recognized stock exchanges, subject to SEBI and listing requirements. Arora Ankit And Associates can guide you on readiness, compliance, and ongoing disclosure obligations before and after listing.",
  },
  {
    question: "What post-incorporation compliances apply?",
    answer:
      "Post-incorporation compliance includes statutory registers, board meetings, annual filings, and disclosure requirements. Depending on operations, GST, PF, and ESIC registrations may also apply. Arora Ankit And Associates creates a compliance calendar and supports ongoing filings and governance.",
  },
  {
    question: "How long does public limited company registration take?",
    answer:
      "Timelines typically range from 15-25 working days, depending on document readiness, name approval, and MCA processing. Arora Ankit And Associates provides a checklist, reviews documents, and tracks filings to reduce delays and ensure timely incorporation.",
  },
];

function PublicLimited() {
  return (
    <SimplePage
      title="Public Limited Company Registration"
      keywords="Public Limited Company Registration, Public Limited Company Registration in Delhi NCR"
      description="Set up a public limited company with Arora Ankit And Associates. We manage name approval, SPICe+ filings, capital structuring, and compliance planning for medium and large businesses."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of Public Limited Company</h2>
          <p className="mt-3 text-base text-slate-800">
            Under the Companies Act, 2013, a public limited company can offer shares to the public and has limited
            liability. It can raise funds through an IPO or a stock exchange platform, and is required to disclose
            accurate financial information to shareholders. Arora Ankit And Associates manages incorporation and
            compliance for Public Limited Company Registration.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Suitability and Popularity</h2>
          <p className="mt-3 text-base text-slate-800">
            A public company is suitable for medium and large businesses that want to raise equity capital from the
            public. Due to its benefits like enhanced credibility, easier fundraising, and share transferability, it
            remains one of the most popular structures for growth-stage enterprises in India.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Characteristics of Public Limited Company</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Minimum three directors and at least seven shareholders",
              "No minimum paid-up capital requirement",
              "Mandatory prospectus for public offer and disclosures",
              "Company name must end with the word 'Limited'",
              "Limited liability for shareholders based on shareholding",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Public Limited Company</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              "Additional capital by offering shares to the public",
              "Higher market visibility through stock exchange listing",
              "Risk diversification through wider shareholding",
              "Business expansion opportunities with public funding",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-base font-semibold text-slate-900">{item}</p>
                <p className="mt-2 text-sm text-slate-800">
                  Arora Ankit And Associates helps plan compliance for public fund raising.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Requirements for Incorporation</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "Minimum 3 directors and 7 members",
              "PAN card of members and directors",
              "Identity proof (passport, voter ID, Aadhaar, or driving license)",
              "Address proof (bank statement or utility bill not older than 2 months)",
              "Passport-size photographs of members and directors",
              "Registered office proof with NOC or property papers",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Information Required</h2>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Authorized and paid-up share capital and number of shares subscribed",
              "Place of birth and duration of stay at current address",
              "Occupation details of members and directors",
              "Proposed business objectives",
              "Educational qualifications of members and directors",
              "Email IDs and contact numbers of members and directors",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Process of Public Limited Company Registration</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            {[
              "Apply for name reservation using SPICe+ Part A",
              "Complete SPICe+ Part B with incorporation details",
              "Generate PDF and affix DSC",
              "Upload the SPICe+ form on MCA portal",
              "INC-9 declaration is auto-generated and submitted electronically",
            ].map((step) => (
              <li key={step} className="text-base text-slate-700">
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Recent Amendments and Changes</h3>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {[
              "SRN is auto-displayed for names reserved in SPICe+ Part A.",
              "ESIC and EPFO registration is mandatory for new companies incorporated w.e.f. 23 February 2020.",
              "Profession Tax registration is mandatory for companies incorporated in Maharashtra w.e.f. 23 February 2020.",
              "Bank account application is mandatory via AGILE-PRO linked form.",
              "INC-9 is auto-generated and e-submitted except when subscribers or directors exceed 20 or lack DIN/PAN.",
              "e-MoA (INC-33) and e-AoA (INC-34) are mandatory when subscribers are up to 7, with specific case rules.",
            ].map((item) => (
              <li key={item} className="text-base text-slate-700">
                {item}
              </li>
            ))}
          </ul>

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
                  <td className="px-4 py-3">SPICe+ (INC-32) with apostilled MoA and AoA</td>
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
                    SPICe+ (INC-32) with linked e-MoA/e-AoA and valid business visa; without visa, file apostilled
                    MoA/AoA and do not use e-MoA/e-AoA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">6</td>
                  <td className="px-4 py-3">Foreign national subscriber-cum-director with valid DIN</td>
                  <td className="px-4 py-3">
                    SPICe+ (INC-32) with linked e-MoA/e-AoA and valid business visa; without visa, file apostilled
                    MoA/AoA and do not use e-MoA/e-AoA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">7</td>
                  <td className="px-4 py-3">Foreign national subscriber-cum-director without valid DIN</td>
                  <td className="px-4 py-3">SPICe+ (INC-32) with apostilled MoA and AoA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-700">
            Note: Maximum subscribers for SPICe+ is 7. If subscribers exceed 7, SPICe+ must be filed with MoA and
            AoA attachments. Statutory returns for EPFO/ESI are required only after crossing the prescribed threshold.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default PublicLimited;