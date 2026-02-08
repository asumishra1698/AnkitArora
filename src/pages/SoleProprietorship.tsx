import SimplePage from "./SimplePage";

const benefits = [
  "Start Business in One Day: Proprietorship formation is the easiest among all other business forms and can be started within one working day.",
  "100% Online & Easy Process: Arora Ankit And Associates helps small businesses start as a proprietorship firm in an entirely online environment without hassle.",
  "Ease of Compliance: The compliance requirement is significantly less, and there is no need to get the accounts audited or file any annual return in many cases.",
  "Easy to Close: There is no specific process to close the proprietorship firm. Simply surrender registrations and licenses and close business.",
  "Easy to Control & Manage: As there is no separation of ownership and control, it is considerably easy to manage and control the proprietary business.",
  "Tax Advantage: As the taxable income forms part of the proprietor's ITR, the benefit of slab-based income tax is available to proprietorship.",
  "Limited Capital Requirements: There is minimum or limited capital requirement for sole proprietorship registration. Depending on the owner of the business, the capital will be contributed.",
];

const minimumRequirements = [
  "One Indian citizen and resident proprietor",
  "PAN and Aadhaar of the proprietor",
  "Business name and nature of activity",
  "Registered office address proof",
  "Business bank account details",
];

const advantages = [
  "Quick setup with minimal formalities",
  "Lower compliance and audit burden",
  "Full control and decision-making",
  "Low capital requirement",
  "Taxed under individual income tax slabs",
];

const registrationOptions = [
  "Udyam (MSME) registration",
  "Shop and Establishment registration",
  "GST registration (if applicable)",
];

const documents = [
  "Aadhaar card of the proprietor",
  "PAN card of the proprietor",
  "Bank account details for the business",
  "Registered office proof (ownership or rent agreement)",
];

const faqs = [
  {
    question: "Is sole proprietorship registration mandatory in India?",
    answer:
      "There is no separate law for mandatory proprietorship registration. The business is established through alternative registrations like GST, Udyam, or Shop and Establishment. However, formal registration helps in opening bank accounts, invoicing, and compliance. Arora Ankit And Associates advises the right registration route for Delhi NCR businesses based on turnover and activity.",
  },
  {
    question: "How long does sole proprietorship registration take?",
    answer:
      "Timelines depend on the registration route. Udyam can be completed quickly, while Shop and Establishment or GST may take a few working days. With complete documents, most Delhi NCR registrations can be done within 3-10 working days. Arora Ankit And Associates prepares the checklist, verifies KYC, and files promptly to avoid delays.",
  },
  {
    question: "Can a company or LLP be a sole proprietor?",
    answer:
      "No. A sole proprietorship can only be owned by a living individual who is an Indian citizen and resident. Companies, LLPs, or other entities cannot be sole proprietors. Arora Ankit And Associates can help you evaluate whether a proprietorship, partnership, or LLP is better for your Delhi NCR business goals and risk profile.",
  },
  {
    question: "Is GST registration required for a sole proprietorship?",
    answer:
      "GST registration is required only if turnover crosses the prescribed threshold or if the business has mandatory GST applicability. For services, the common threshold is Rs. 20 lakh and for trading it is Rs. 40 lakh, subject to changes and exceptions. Arora Ankit And Associates checks applicability and handles GST registration when required in Delhi NCR.",
  },
  {
    question: "What are the post-registration compliances?",
    answer:
      "Post-registration compliance includes maintaining books, filing income tax returns, and GST returns if applicable. Proprietors are taxed as individuals, so ITR filing depends on total income slabs. Arora Ankit And Associates sets up a compliance calendar and reminders so Delhi NCR proprietors stay current with filings and avoid penalties.",
  },
];

function SoleProprietorship() {
  return (
    <SimplePage
      title="Sole Proprietorship Registration"
      keywords="Sole Proprietorship Registration, Sole Proprietor, Proprietorship Registration in Delhi NCR, Shop and Establishment, Udyam Registration, GST Registration"
      description=" We help you choose the right registration route, complete documentation, and set up tax and compliance requirements."
      points={[
        {
          title: "Minimum Requirements",
          items: minimumRequirements,
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
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Overview of Sole Proprietorship</h2>
          <p className="mt-3 text-base text-slate-800">
            A sole proprietorship is the simplest way to start a business in India. The business is owned and
            managed by one person, and there is no legal separation between the owner and the business. Registration
            is not mandatory, but the business is typically identified through GST, Udyam, or Shop and Establishment
            registration. Arora Ankit And Associates guides Delhi NCR proprietors on the right setup route.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Common examples include retail shops, salons, pharmacies, and small service businesses. Profits and
            losses are reported in the proprietor's individual income tax return.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Who is a Sole Proprietor?</h3>
          <p className="mt-3 text-base text-slate-800">
            A sole proprietor is a living individual who owns the proprietorship firm. The person must be an Indian
            citizen and resident, and the business income belongs entirely to the proprietor. The proprietor also
            bears full personal responsibility for losses, debts, and obligations of the business.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Since the owner and business are treated as the same, there is no separate legal identity for the firm.
            A corporate entity cannot become a sole proprietor. Arora Ankit And Associates helps Delhi NCR founders
            confirm eligibility and choose the right structure when personal liability is a concern.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Sole Proprietorship Registration in Delhi NCR</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Registration Options</h3>
          <p className="mt-3 text-base text-slate-800">
            Sole proprietorships are recognized through one or more registrations depending on the business
            activity. Arora Ankit And Associates helps you pick the right route for Delhi NCR compliance.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {registrationOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required</h3>
          <p className="mt-3 text-base text-slate-800">
            The following documents are commonly required for most proprietorship registrations:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Procedure for Registration</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>Choose a unique business name for the proprietorship</li>
            <li>Select the location for business operations</li>
            <li>Register under Udyam (MSME) if applicable</li>
            <li>Apply for GST registration based on turnover and activity</li>
            <li>Apply for IEC if involved in import or export</li>
            <li>Secure FSSAI registration for food-related businesses</li>
            <li>Obtain TAN if you will deduct TDS on salary payments</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Post-registration compliances</h3>
          <p className="mt-3 text-base text-slate-800">
            Proprietorships must maintain accounts and file income tax returns as per individual slabs. GST returns
            apply if registered. Arora Ankit And Associates supports Delhi NCR proprietors with periodic compliance,
            filing reminders, and advisory support so the business stays compliant year-round.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default SoleProprietorship;
