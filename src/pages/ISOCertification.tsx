import SimplePage from "./SimplePage";

const advantages = [
  "Customer satisfaction",
  "International credibility",
  "Better internal management",
  "Globally recognized standard",
  "Consistent outcomes",
];

const isoStandards = [
  "ISO 9001:2015 (QMS)",
  "ISO 14001:2015 (EMS)",
  "ISO 27001:2013 (ISMS)",
  "ISO 20000-1:2018 (ITSMS)",
];

const requiredDocuments = [
  "PAN card",
  "Passport size photo",
  "Aadhaar card or voter ID card",
  "Two copies of sales bill or purchase bill",
];

const isoTypes = [
  "ISO 9001:2015 (Quality Management System)",
  "ISO 14001:2015 (Environment Management System)",
  "ISO 45001:2018 (Occupational Health and Safety Management System)",
  "ISO 20000-1:2018 (Information Technology Service Management System)",
  "ISO 22000:2018 (Food Safety Management System)",
  "ISO 27001:2013 (Information Security Management System)",
  "ISO 50001:2018 (Energy Management System)",
  "ISO 13485:2016 (Medical Devices Quality Management System)",
  "ISO 22301:2012 (Business Continuity Management System)",
  "ISO 21001:2018 (Educational Organisations Management System)",
  "ISO 55001:2014 (Asset Management System)",
  "ISO 41001:2018 (Facility Management System)",
  "ISO 37001:2016 (Anti-Bribery Management System)",
  "ISO 29990:2010 (Learning Management System)",
];

const faqs = [
  {
    question: "What is ISO certification and why is it needed?",
    answer:
      "ISO certification confirms that your business processes meet internationally accepted standards for quality, safety, or information security. It improves credibility with customers, partners, and regulators. Arora Ankit And Associates helps Delhi NCR organizations select the right ISO standard, prepare documentation, and complete audits successfully.",
  },
  {
    question: "How long does ISO certification take?",
    answer:
      "Timelines depend on the standard, scope, and readiness of documentation. Many businesses complete certification in a few weeks to a couple of months. Internal process maturity and audit schedules influence the final timeline. Arora Ankit And Associates plans the audit cycle and supports documentation to minimize delays for Delhi NCR clients.",
  },
  {
    question: "Does ISO issue certificates directly?",
    answer:
      "No. ISO develops standards but does not certify businesses. Certifications are issued by accredited certification bodies after audit. Arora Ankit And Associates helps you select a reliable certification body and prepare for the audit in Delhi NCR.",
  },
  {
    question: "Which ISO standard is most common for service businesses?",
    answer:
      "ISO 9001 for quality management is the most common across service industries. For IT and data security, ISO 27001 is widely adopted. Arora Ankit And Associates evaluates your business model and recommends the most relevant standard for Delhi NCR operations.",
  },
  {
    question: "What happens after ISO certification is issued?",
    answer:
      "After certification, businesses must maintain documented processes and undergo periodic surveillance audits. Certificates are typically valid for three years, with ongoing compliance requirements. Arora Ankit And Associates provides audit readiness support and compliance reminders for Delhi NCR businesses.",
  },
];

function ISOCertification() {
  return (
    <SimplePage
      title="ISO Registration"
      keywords="ISO Registration, ISO Certification, ISO Registration in Delhi NCR, ISO 9001, ISO 14001, ISO 27001"
      description="Get ISO Registration with Arora Ankit And Associates in Delhi NCR. We help you select the right ISO standard, prepare documentation, coordinate audits, and receive certification."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "ISO Standards",
          items: isoStandards,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">        
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Introduction</h2>
          <p className="mt-3 text-base text-slate-800">
            ISO is the International Organization for Standardization that develops and publishes international
            standards. It is a non-governmental global body with representatives from national standards bodies.
            ISO standards improve information security, protect company assets, and enhance process quality across
            industries. ISO certification improves business credibility and supports international trade.
          </p>
          <p className="mt-3 text-base text-slate-800">
            The ISO 9000 family addresses different aspects of quality management and includes multiple standards
            built on process-based approaches. Arora Ankit And Associates helps Delhi NCR businesses align with the
            relevant standards for their operations.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Details and Documents</h3>
          <p className="mt-3 text-base text-slate-800">
            To get certified for ISO 13485, ISO 9001, ISO 31000, ISO 50001, ISO 27000, and other major standards, a
            set of details and documents are required. Benefits include internationally recognized marks, customer
            satisfaction, quality assurance, higher credibility for government tenders, and stronger marketability.
          </p>
          <h4 className="mt-4 text-lg font-semibold text-slate-900">Documents Required for Registration</h4>
          <ul className="mt-3 space-y-2 list-disc pl-6 text-base text-slate-700">
            {requiredDocuments.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Types of ISO Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {isoTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">ISO Registration Process in India</h3>
          <h4 className="mt-4 text-lg font-semibold text-slate-900">ISO Certification: Prerequisite</h4>
          <ol className="mt-3 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>
              Selection of an ISO certification type appropriate for the business, such as ISO 9001 for quality,
              ISO 14001 for environment, ISO 27001 for information security, or ISO 22000 for food safety.
            </li>
            <li>
              Selection of an authenticated and reliable ISO certification body. ISO itself does not issue
              certifications; external bodies perform audits and issue certificates.
            </li>
          </ol>

          <h4 className="mt-6 text-lg font-semibold text-slate-900">ISO Registration Steps</h4>
          <ol className="mt-3 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>
              Fill the ISO registration form and select the appropriate certification type for the business.
            </li>
            <li>
              Verification and submission of documents. Documents are checked and filed with the ISO registrar. The
              payment is made online. Arora Ankit And Associates provides the checklist and submission support for
              Delhi NCR businesses.
            </li>
            <li>
              ISO audit to verify business process records. Audit types include first-party (internal), second-party
              (supplier), and third-party (certification) audits.
            </li>
            <li>
              ISO certification issued after successful audit, with the certificate delivered to the business
              address.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">ISO Registration Benefits</h3>
          <p className="mt-3 text-base text-slate-800">
            ISO registration supports product safety, process consistency, and international credibility. It opens
            global business opportunities, improves efficiency and productivity, and builds customer confidence.
            ISO certification also contributes to increased revenue, brand recognition, and empowered teams.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default ISOCertification;
