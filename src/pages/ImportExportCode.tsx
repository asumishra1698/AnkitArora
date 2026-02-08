import SimplePage from "./SimplePage";

const advantages = [
  "Global market reach",
  "Lifetime validity",
  "No annual maintenance",
  "Reduces risk of illegal transportation",
  "No additional compliance after issuance",
];

const eligibility = [
  "Clear shipments",
  "In case of imports",
  "Receipt of foreign currency",
  "Required for goods and services exports",
];

const documents = [
  "Copy of entity PAN card",
  "Business address proof",
  "Photograph and KYC of director, partner, or proprietor",
  "Valid Indian mobile number of director, partner, or proprietor",
  "Charter documents of the entity",
  "Letter of authorized signatory or board resolution",
  "Director, partner, or proprietor email ID",
  "Cancelled cheque, passbook, or bank statement",
];

const faqs = [
  {
    question: "Is IEC mandatory for import and export?",
    answer:
      "Yes. IEC is mandatory for businesses and individuals importing or exporting goods or services from India. Without IEC, you cannot clear shipments or receive foreign remittances. Proprietors can obtain IEC in their own name. Arora Ankit And Associates helps Delhi NCR importers and exporters register quickly and avoid DGFT rejections.",
  },
  {
    question: "What is the validity of IEC?",
    answer:
      "IEC has lifetime validity and does not require renewal or annual filings. The same IEC can be used for all branches or factories of the entity. Arora Ankit And Associates advises clients to obtain IEC early so it is ready for future import or export transactions in Delhi NCR.",
  },
  {
    question: "How long does IEC registration take?",
    answer:
      "IEC is issued by DGFT after online application and document submission, typically within 1 to 2 working days if details are accurate. Delays usually occur due to PAN mismatches or missing proofs. Arora Ankit And Associates verifies documents and tracks the application to keep timelines short for Delhi NCR businesses.",
  },
  {
    question: "Can IEC be used for both goods and services?",
    answer:
      "Yes. IEC is required for import and export of both goods and services. It is also needed by banks for inward remittances from overseas customers. Arora Ankit And Associates ensures the IEC application captures the correct nature of concern and activities for Delhi NCR exporters and service providers.",
  },
  {
    question: "What is the government fee for IEC registration?",
    answer:
      "The government fee for IEC registration is Rs. 500, payable online through EFT during submission. After approval, the IEC allotment letter with the 10-digit code is issued. Arora Ankit And Associates handles payment guidance, submission, and follow-up for Delhi NCR applicants.",
  },
];

function ImportExportCode() {
  return (
    <SimplePage
      title="Import/Export Code (IEC)"
      keywords="Import Export Code, IEC Registration, Import Export Code in Delhi NCR, DGFT IEC, IEC Application"
      description="Get Import/Export Code (IEC) registration with Arora Ankit And Associates in Delhi NCR. We help you prepare documents, file the DGFT application, and start importing or exporting without delays."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Who requires IEC Code",
          items: eligibility,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
       
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Introduction</h2>
          <p className="mt-3 text-base text-slate-800">
            Import Export Code (IEC) is a 10-digit identification number issued by the Directorate General of
            Foreign Trade (DGFT), Ministry of Commerce and Industries, Government of India. It is required for any
            person or entity involved in importing or exporting goods or services from India. Arora Ankit And
            Associates helps Delhi NCR businesses obtain IEC quickly with proper documentation.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Is IE Code imperative? Who needs it?</h3>
          <p className="mt-3 text-base text-slate-800">
            IEC is mandatory for importers and exporters in India. Individuals or business organizations engaged in
            importing or exporting goods or services need IEC. Proprietors can obtain IEC in their own name. Without
            IEC, international trade and foreign remittances cannot be processed.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Validity of Import Export Code</h3>
          <p className="mt-3 text-base text-slate-800">
            IEC has lifetime validity and does not require renewal or periodic filings. The same IEC applies to all
            branches or factories of the importer or exporter. Many businesses obtain IEC early to stay ready for
            future international transactions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is the purpose of IEC?</h3>
          <p className="mt-3 text-base text-slate-800">
            Exporters need IEC to quote during shipments, and banks require IEC to process foreign remittances. IEC
            enables import and export transactions without additional approvals. Without IEC, businesses cannot
            participate in the international market.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Application for IEC</h3>
          <p className="mt-3 text-base text-slate-800">
            IEC application is submitted online to DGFT with supporting documents. After submission, DGFT issues the
            IEC within 1-2 working days if details are accurate. Arora Ankit And Associates manages the filing and
            status tracking for Delhi NCR applicants.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Details and Documents Required</h3>
          <p className="mt-3 text-base text-slate-800">
            Details and documents required to apply for IEC include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
          <p className="mt-3 text-base text-slate-800">
            You can also avail IEC registration services to save time on documentation and filing. Share the above
            documents and details physically or online using scanned copies, and the rest of the work is managed by
            the service provider. Arora Ankit And Associates supports Delhi NCR applicants with fast processing and
            accurate submission.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">IEC Registration Process</h3>
          <p className="mt-3 text-base text-slate-800">
            Import Export Code (IEC) Registration is an online process which can be divided into simple steps as
            mentioned below:
          </p>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Go to DGFT (Directorate General of Foreign Trade) website.</li>
            <li>Go to Services, click on IEC, and select Online IEC application.</li>
            <li>Enter your PAN (Permanent Account Number).</li>
            <li>Make sure you are directed to the next page where you will need to enter your PAN.</li>
            <li>Click on the Search option. If you entered an incorrect PAN, click Reset.</li>
            <li>Enter details for PAN verification.</li>
            <li>You will be redirected to a page to fill Name (as per PAN), DOB or Incorporation, and Captcha.</li>
            <li>Click Submit after entering all details.</li>
          </ol>
          <p className="mt-3 text-base text-slate-800">
            Note: Any wrong detail on the PAN served site will lead to authentication failure. IEC applications can
            be rejected due to errors, so it is important to verify each step.
          </p>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700" start={9}>
            <li>If details are valid, a message stating your PAN has been verified will appear. Click Proceed.</li>
            <li>Login for fresh IEC application.</li>
            <li>For a new IEC application, give your email address and mobile number.</li>
            <li>Enter the Captcha and click Generate OTP.</li>
            <li>Enter the OTP and click Submit. If not received, click Regenerate OTP.</li>
            <li>
              After OTP submission, a 20 digit e-commerce number is displayed. Enter entity name, address, city,
              state, district, PIN code, mobile number, email, name on PAN, PAN, date of incorporation, nature of
              concern, preferred tasks, bank account details, and applicant details.
            </li>
            <li>Click Update and Save after entering all details.</li>
            <li>
              You will be redirected to a page to fill bank details, including branch serial number, branch address,
              city, state, district, and 6 digit PIN.
            </li>
            <li>
              Click Add to update director, proprietor, partner, Karta, or managing trustee details.
            </li>
            <li>
              Update director details such as director serial number, DIN, name, PAN, date of birth, address, mobile
              number, Aadhaar, and other required information.
            </li>
            <li>
              Click Add and upload documents such as address proof and cancelled cheque or bank certificate.
            </li>
            <li>Fee payment and fee verification.</li>
            <li>Preview all details, verify, and click Print Application.</li>
            <li>Click Submit for final submission using digital signature or without digital signature.</li>
          </ol>
          <p className="mt-3 text-base text-slate-800">
            Documents must be uploaded in GIF or PDF format, with size not exceeding 5 MB. For address proof, you can
            use sale deed, rent agreement, lease deed, mobile postpaid bill, MOU, electricity bill, telephone
            landline bill, or partnership deed. Passport, voter ID, and Aadhaar are acceptable for proprietorships.
            If the firm name is not on the address proof, submit a NOC in favor of the firm along with ownership
            proof. Arora Ankit And Associates helps ensure documents are accepted on the first attempt.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Government fee for IEC registration</h3>
          <p className="mt-3 text-base text-slate-800">
            The government fee for IEC registration is Rs. 500, payable via EFT during online submission. After
            successful submission, the IEC allotment letter with a 10-digit code is issued. Once IEC is received,
            the business can start importing and exporting.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default ImportExportCode;
