import SimplePage from "./SimplePage";

const advantages = [
  "Reputation with customers: builds trust and credibility.",
  "Account opening in company name: simplifies banking.",
  "Getting loans: improves lender confidence and faster approvals.",
  "Getting on record: protects business name and identity.",
];

const advantageDetails = [
  {
    title: "Reputation with customers",
    description:
      "Building reputation is tough, especially if you are starting for the first time. Getting your business registered and taking BRN gives customers confidence that they are dealing with a reputable organization. When customers pay to your business account before you deliver goods or services, a registered business and corporate account build extra trust.",
  },
  {
    title: "Account opening in your company name",
    description:
      "If you want to open a corporate account in your company name, BRN makes the process simpler. A corporate account adds credibility with customers, banks, suppliers, and other business partners.",
  },
  {
    title: "Getting loans",
    description:
      "When your business is registered and you have BRN, accessing loans becomes easier and faster than when you do not have BRN. You do not have to prove you are a business, and lenders are more willing to extend funding.",
  },
  {
    title: "Getting on record",
    description:
      "Registering with local or state authorities and obtaining BRN helps protect your business name. It reduces the risk of another organization registering the same name in the future.",
  },
];

const requirements = [
  "Digital Signature Certificate (DSC)",
  "Director Identification Number (DIN)",
  "Registration on MCA portal (if applicable)",
  "Certificate of Incorporation (if applicable)",
  "PAN card and Aadhaar card copies",
  "Latest electricity bill",
  "Photo of applicant",
  "Bank statement of the organisation",
  "Phone number and email address",
];

const faqs = [
  {
    question: "What is a Business Registration Number (BRN)?",
    answer:
      "BRN is a unique identifier for your business, such as a state tax ID or registered identification number. It helps authorities track business activity and provides a formal identity for your organization. Arora Ankit And Associates assists Delhi NCR businesses with BRN understanding and filing support.",
  },
  {
    question: "Is BRN mandatory for all businesses?",
    answer:
      "Depending on your industry and location, BRN may be required for compliance, banking, or licensing. Requirements vary by state and business type. Arora Ankit And Associates reviews your Delhi NCR setup and confirms if BRN is necessary for your operations.",
  },
  {
    question: "Can BRN help open a business bank account?",
    answer:
      "Yes. BRN is commonly accepted as a business identifier and can simplify current account opening. It adds credibility with banks, customers, and suppliers. Arora Ankit And Associates helps prepare the paperwork so the account opening process is smooth.",
  },
  {
    question: "How long does BRN registration take?",
    answer:
      "Timelines depend on the portal and completeness of documents. Most applications move quickly once identity and business details are verified. Arora Ankit And Associates prepares documents, submits forms, and follows up for Delhi NCR businesses.",
  },
  {
    question: "Can a sole proprietor obtain BRN?",
    answer:
      "Yes. Proprietors can apply using their personal PAN and Aadhaar along with business details. The BRN can then be used for banking, billing, and government records. Arora Ankit And Associates guides Delhi NCR proprietors through the correct steps.",
  },
];

function BusinessRegistrationNumber() {
  return (
    <SimplePage
      title="Business Registration Number (BRN)"
      keywords="Business Registration Number, BRN Registration, BRN Registration in Delhi NCR"
      description="Get BRN Registration in Delhi NCR with Arora Ankit And Associates. We help you understand eligibility, gather documents, and complete the online BRN application without delays."
      points={[
        {
          title: "Advantages of BRN",
          items: advantages,
        },
        {
          title: "Documents Required",
          items: requirements,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">  
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">BRN Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            Starting a business is a big step. Beyond choosing a name and a budget, you also need to meet legal
            requirements. Depending on your industry and location, you may need a Business Registration Number
            (BRN). It gives your business a formal identity and makes compliance, banking, and licensing easier.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is a Business Registration Number?</h3>
          <p className="mt-3 text-base text-slate-800">
            A BRN is a unique identifier it is either a state tax ID number or a registered identification number.
            It gives a special identity to your business. After receiving BRN, concerned authorities will receive
            all the details of business activities online which enables easy registration of your organisation. A
            business registration number can be either a state employer identification number (EIN) or a registered
            identification number. Both serve as unique identifiers and can be obtained for free. In addition to
            this, you may apply online for obtaining BRN to save time and to keep things simple.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Advantages of BRN Registration</h3>
          <div className="mt-4 space-y-4 text-base text-slate-700">
            {advantageDetails.map((item) => (
              <p key={item.title}>
                <span className="font-semibold text-slate-900">{item.title}:</span> {item.description}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Requirement</h3>
          <p className="mt-3 text-base text-slate-800">
            Keep these documents ready before applying for BRN:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Basic Requirements for Proprietorship</h3>
          <p className="mt-3 text-base text-slate-800">
            Sole proprietorship registration is usually completed digitally, and a business bank account is often
            required. Depending on the business, you may register under Udyam, Shop and Establishment, or GST.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Udyam registration under MSME</li>
            <li>Shop and Establishment registration</li>
            <li>GST registration (if applicable)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to obtain BRN Registration</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Visit the BRN registration portal.</li>
            <li>Select Registration and apply for BRN (use NGO option if applicable).</li>
            <li>Read the instructions and accept the declaration.</li>
            <li>Enter mobile number, email ID, and captcha to verify.</li>
            <li>Validate OTP received on the email ID.</li>
            <li>Enter all relevant details and upload signature (JPEG up to 50 KB).</li>
            <li>Provide business name and address, PAN or TAN, and correspondence address.</li>
            <li>Select major activity code and year of start of operations.</li>
            <li>Choose ownership code and expected number of workers.</li>
            <li>Enter proposed investment and applicable acts.</li>
            <li>Submit the application and print the acknowledgement.</li>
            <li>BRN is auto generated and sent to your registered email and mobile.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Precautions while applying for BRN</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Use your own mobile number and email for BRN registration.</li>
            <li>Read the BRN tutorial carefully to avoid errors.</li>
            <li>Fill institution or firm status details accurately.</li>
            <li>Verify auto-filled fields and complete the rest carefully.</li>
            <li>Fill head office details only if available.</li>
            <li>Select the correct major activity code.</li>
            <li>If rejected, view the reason and update BRN instead of reapplying.</li>
            <li>Use Update or Cancel options online when needed.</li>
          </ol>
        </div>
      </section>
    </SimplePage>
  );
}

export default BusinessRegistrationNumber;
