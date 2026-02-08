import SimplePage from "./SimplePage";

const highlights = [
  "Mandatory within 30 days of commencement: apply within 30 days of starting operations.",
  "Applies to organized and unorganized sectors: covers most employers and staff types.",
  "State-specific rules and procedures: process varies by state portal and format.",
  "Governs working conditions and terms of employment: covers hours, wages, and safety.",
];

const requiredEntities = [
  "Commercial establishments like trading, insurance, or banks: offices and storefronts.",
  "Service establishments such as call centers: service-focused workplaces.",
  "Eateries, cafes, hotels, and restaurants: food and hospitality businesses.",
  "Entertainment establishments like theatres and amusement parks: public venues.",
];

const documents = [
  "Photo of establishment with name board and owner: helps verify premises.",
  "List of directors and management with ID and address proof: KYC of key persons.",
  "Company and employee details including salary information: basic staffing details.",
  "Establishment address proof: ownership or rent documents.",
  "Affidavit: as prescribed by the state portal.",
  "PAN card copy: entity or proprietor PAN.",
];

const faqs = [
  {
    question: "Who must register under the Shop and Establishment Act?",
    answer:
      "Any shop or commercial establishment operating from a premises, including trading, service, food, or entertainment businesses, must register under the applicable state Shops and Establishments Act within 30 days of commencing work. Arora Ankit And Associates confirms applicability and handles registrations for Delhi NCR businesses.",
  },
  {
    question: "Is Shop Act registration mandatory for home offices?",
    answer:
      "Many states require registration even for home-based businesses if employees are engaged or the business is operating commercially. Applicability depends on state rules. Arora Ankit And Associates reviews your Delhi NCR setup and advises the correct registration requirement.",
  },
  {
    question: "What details must be declared at registration?",
    answer:
      "Employers typically declare working hours, number of workers, rest intervals, opening and closing hours, overtime wage policy, and health and safety measures. Requirements vary by state. Arora Ankit And Associates prepares the declaration and ensures compliance for Delhi NCR applicants.",
  },
  {
    question: "How long does Shop Act registration take?",
    answer:
      "Timelines vary by state portal and document readiness, but many registrations are completed within a few working days after inspection or verification. Arora Ankit And Associates prepares the application, uploads documents, and follows up to reduce delays for Delhi NCR businesses.",
  },
  {
    question: "Can Shop Act registration help open a current account?",
    answer:
      "Yes. The Shop and Establishment certificate is widely accepted as legal entity proof by banks and is commonly required for opening a current account. Arora Ankit And Associates assists Delhi NCR businesses with documentation so banking formalities are smooth.",
  },
  {
    question: "What records must be maintained after registration?",
    answer:
      "Employers must maintain registers for employees, wages, deductions, fines, advances, and holidays. Some states also require annual submissions to municipal authorities. Arora Ankit And Associates sets up compliance registers and reminders for Delhi NCR businesses.",
  },
  {
    question: "How do amendments or closure updates work?",
    answer:
      "Any change in business details must be notified to the labor department within the prescribed time. In case of closure, the employer must apply for surrender of the registration. Arora Ankit And Associates handles amendments and closure filings for Delhi NCR establishments.",
  },
  {
    question: "What are the benefits of Shop Act registration?",
    answer:
      "It provides legal recognition, helps with current account opening, enables access to government schemes, and makes inspections smoother. It also formalizes employment conditions. Arora Ankit And Associates helps Delhi NCR businesses use the certificate for compliance and operational needs.",
  },
];

function ShopActRegistration() {
  return (
    <SimplePage
      title="Shop Act Registration"
      keywords="Shop Act Registration, Shop and Establishment Registration, Shop Act Registration in Delhi NCR"
      description="Get Shop Act Registration in Delhi NCR with Arora Ankit And Associates. Fast, state-wise filing, clear documentation, and a smooth Shop & Establishment certificate process for shops, offices, and service businesses."
      points={[
        {
          title: "Key Highlights",
          items: highlights,
        },
        {
          title: "Who Requires Registration",
          items: requiredEntities,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-blue-900">Consult Now</p>
              <p className="text-xs text-blue-800">4.6 rating from 101 reviews</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold text-white"
              title="Consult for Shop Act Registration"
            >
              Talk to an expert
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Shop Act Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            If you run a shop, cafe, office, or small hotel, Shop Act registration is usually the first legal step
            to start operating. The process is state-specific, so the exact requirements can vary across Delhi NCR.
            These rules cover both organized and unorganized sectors and set basic working conditions for staff.
          </p>
          <p className="mt-3 text-base text-slate-800">
            It also covers employment terms, working hours, and safety standards. Arora Ankit And Associates helps
            Delhi NCR businesses navigate the state rules and complete registration without back-and-forth.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Meaning of Shop and Establishment Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            Shop and Establishment registration is the legal permission to run a business in India, regulated by
            the Department of Labour. Most shops and establishments must register within 30 days of starting work.
            The certificate is often your first proof of business existence.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Registration is mandatory for most businesses operating from a physical premises. You can also register
            as an entity, startup, MSME, or directly under the Shop and Establishment Act of your state.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Which entities require registration?</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {requiredEntities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">When to apply for Shop Act Registration?</h3>
          <p className="mt-3 text-base text-slate-800">
            If you employ staff, whether full-time, contract, or casual, registration should be done within 30 days
            of starting operations. This keeps worker rights and workplace conditions on the right side of the law.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to Ascertain Whether You Need a License</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Check if the proposed business falls under the definition of shop or commercial establishment.</li>
            <li>Review the state-specific exclusions and coverage list.</li>
            <li>Understand the employee rules and working conditions that apply.</li>
            <li>Apply online within 30 days of starting operations.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Employer Declarations at Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Working hours of employees: shift timings and weekly hours.</li>
            <li>Number of workers: headcount by role or department.</li>
            <li>Rest intervals: breaks and weekly off details.</li>
            <li>Opening and closing hours: business operating timings.</li>
            <li>Health and safety measures: safety and hygiene arrangements.</li>
            <li>Overtime wage policy: overtime rates and rules.</li>
            <li>National and religious holidays: holiday calendar.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents required for Shop Act Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to apply for Shop and Establishment Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            You file the application on the state portal with the required documents and fees. The Labour
            Department may inspect the premises, and once everything checks out, the registration certificate is
            issued.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Shop and Establishment License</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>Helps in opening a current business bank account: accepted proof for banks.</li>
            <li>Serves as proof of legal entity: useful for vendors and contracts.</li>
            <li>Makes inspections smoother: reduces friction during checks.</li>
            <li>Enables access to government benefits: eligible for state schemes.</li>
            <li>Lower compliance burden and one-time cost: limited ongoing filings.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Records to be Maintained</h3>
          <p className="mt-3 text-base text-slate-800">
            Businesses must keep registers for employment, wages, deductions, fines, advances, and holidays. Some
            states also ask for annual submissions of employee and holiday details to local authorities.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Amendment in Shop & Establishment Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            If any business details change, you must inform the labour department within the prescribed timeline.
            For closure, file a surrender application. The officer will cancel the registration once the closure is
            verified.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default ShopActRegistration;
