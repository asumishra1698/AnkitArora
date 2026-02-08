import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability protection for the foreign parent",
  "Access to foreign direct investment and global capital",
  "Lower registration cost than many overseas jurisdictions",
  "Separate legal entity and independent contracts",
  "Reduced procedural compliance for liaison offices",
];

const requirements = [
  "Minimum two persons for Indian company route",
  "DIN of the proposed director",
  "No minimum capital requirement",
  "DSC of at least one person",
  "One partner must be an Indian resident",
];

const faqs = [
  {
    question: "What are the main routes to incorporate a foreign company in India?",
    answer:
      "Foreign entities can enter India by incorporating an Indian company (wholly owned subsidiary or joint venture) or by registering a foreign company presence such as a liaison office, branch office, or project office. The right route depends on your activity, funding model, and RBI conditions. Arora Ankit And Associates evaluates eligibility and recommends the best structure for Delhi NCR operations and compliance.",
  },
  {
    question: "Is RBI approval required for liaison or branch offices?",
    answer:
      "Yes, most liaison and branch office setups need RBI approval under FEMA. RBI evaluates profitability, net worth, sectoral restrictions, and the proposed scope of activity. In some cases, an Authorized Dealer bank can route the application. Arora Ankit And Associates prepares the RBI documentation and coordinates filings to ensure the Delhi NCR office is approved without delays.",
  },
  {
    question: "How long does foreign company registration take in India?",
    answer:
      "Timelines vary by route. Incorporating an Indian subsidiary generally takes 2-4 weeks depending on documentation, name approval, and MCA processing. Liaison or branch office approvals can take longer because RBI review is involved. Arora Ankit And Associates provides a checklist, verifies papers early, and keeps the process on track for Delhi NCR clients.",
  },
  {
    question: "What documents are mandatory within 30 days of setting up in India?",
    answer:
      "A foreign company must file Form FC-1 with the Registrar of Companies within 30 days of establishing a place of business in India. Documents include the charter documents, registered office details, directors list, authorized representative details in India, and RBI approval proof. Arora Ankit And Associates formats, notarizes, and submits the full set to avoid resubmissions.",
  },
  {
    question: "What are the ongoing compliances after incorporation?",
    answer:
      "Ongoing requirements include annual ROC filings, financial statements, tax registrations, and reporting of any changes to office details or authorized representatives. Branch and liaison offices also need RBI reporting and repatriation compliance. Arora Ankit And Associates sets up a compliance calendar, tracks due dates, and handles filings for foreign companies operating in Delhi NCR.",
  },
];

function ForeignCompany() {
  return (
    <SimplePage
      title="Foreign Company Registration"
      keywords="Foreign Company Registration, Incorporation of Foreign Company in India, Foreign Company Registration in Delhi NCR, Liaison Office Registration, Branch Office Registration"
      description="Incorporate a foreign company with Arora Ankit And Associates in Delhi NCR. We assist with liaison office, branch office, project office, and subsidiary setup, along with RBI approvals and ROC filings."
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Incorporation of Foreign Company in India</h2>
          <p className="mt-3 text-base text-slate-800">
            Under the Companies Act, 2013, a foreign company is incorporated outside India but has a place of
            business in India or carries out business activity in India. Arora Ankit And Associates helps foreign
            businesses expand into India by choosing the right structure, preparing documentation, and completing
            RBI and ROC filings for Delhi NCR operations.
          </p>
          <p className="mt-3 text-base text-slate-800">
            You can enter India through the following routes:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Incorporate as an Indian company under the Companies Act, 2013</li>
            <li>Wholly owned subsidiary</li>
            <li>Joint venture</li>
            <li>Register as a foreign company</li>
            <li>Set up a liaison office</li>
            <li>Representative or project office</li>
            <li>Branch office of the foreign company</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Setting Up a Liaison Office</h3>
          <p className="mt-3 text-base text-slate-800">
            A liaison office (also known as a representative office) explores the Indian market and supports the
            parent company with communication and coordination. It cannot undertake commercial activities and must
            use remittances received from the foreign parent for its operations.
          </p>
          <p className="mt-3 text-base text-slate-800">
            RBI criteria typically include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Profit-making record for the immediate preceding 3 financial years</li>
            <li>Net worth of more than USD 50,000 in the home country</li>
            <li>Specific approvals under FEMA 1999 or IRDA when applicable</li>
            <li>Application routed through an Authorized Dealer Category-I bank</li>
            <li>Unique identification number issued by RBI after approval</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Project Office</h3>
          <p className="mt-3 text-base text-slate-800">
            A project office can be established in India when a foreign company has a specific project with an
            Indian entity. RBI approval is not required when certain funding or authorization conditions are met.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Project is funded directly from abroad by inward remittance</li>
            <li>Funded by a bilateral or multilateral international financial institution</li>
            <li>Authorized by the appropriate government authority</li>
            <li>Term loan granted by an Indian bank or public financial institution</li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            If the above conditions are not met, RBI approval is required prior to setup.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Branch Office of the Foreign Company</h3>
          <p className="mt-3 text-base text-slate-800">
            A branch office can conduct business activities in India after RBI approval, subject to eligibility
            conditions such as:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Engaged in manufacturing or trading activities</li>
            <li>Profit track record in the immediate preceding 5 financial years</li>
            <li>Net worth of at least USD 100,000 in the home country</li>
          </ul>
          <p className="mt-4 text-base text-slate-800">
            Branch offices can undertake activities such as import/export of goods, consultancy services, research
            work aligned with the parent company, technical collaborations, IT and software services, and technical
            support to products supplied by the parent group.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Note: Branch offices cannot manufacture in India directly, but can subcontract to Indian manufacturers.
            Profits can be repatriated after applicable taxes and RBI compliance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required</h3>
          <p className="mt-3 text-base text-slate-800">
            The following documents must be filed within 30 days of establishing a place of business in India:
          </p>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Business sector details to evaluate RBI approval requirement</li>
            <li>Certified copy of charter, statutes, or MOA/AOA with translation if needed</li>
            <li>Registered or principal office address of the foreign company</li>
            <li>List of directors and company secretary with particulars</li>
            <li>Details of authorized person(s) in India for service of process</li>
            <li>Full address of the principal place of business in India</li>
            <li>Details of any previous place of business in India</li>
            <li>Declaration on non-conviction or debarment of directors or representatives</li>
          </ol>
          <p className="mt-3 text-base text-slate-800">
            Form FC-1 must be filed with the Registrar along with the prescribed fees, supported by RBI approval
            under FEMA or other applicable laws.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default ForeignCompany;
