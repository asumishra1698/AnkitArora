import SimplePage from "./SimplePage";

const benefits = [
  "Access to MSME-only government tenders",
  "Cheaper bank loans and priority lending",
  "Tax rebates and concessions",
  "Patent registration at lower cost",
  "Preference for government licenses and certifications",
  "Access to central and state schemes",
];

const highlights = [
  "Self-declaration based registration on Udyam portal",
  "Unified classification for manufacturing and services",
  "Revised investment and turnover thresholds",
  "Online certificate with Udyam Registration Number (URN)",
];

const documents = [
  "PAN details of proprietor, directors, or partners",
  "Aadhaar details of proprietor, directors, or partners",
  "Registered office proof (allotment, lease, possession, or property tax receipt)",
  "Rent agreement and NOC with utility bill for rented premises",
  "Purchase bill of raw materials",
  "Sale bill for end products",
  "Partnership deed for partnership firm",
  "MOA, AOA, and COI for company with board resolution",
  "Industrial license, if applicable",
  "Affidavit on stamp paper for power and machinery status",
  "Purchase bills for machinery and installation",
  "Bank account statement",
];

const faqs = [
  {
    question: "What is Udyam Registration and how is it different from MSME registration?",
    answer:
      "Udyam Registration is the current MSME registration system launched on July 1, 2020. The old MSME or Udyog Aadhaar certificate has been replaced by a single Udyam Registration Number (URN). The core purpose remains the same: to classify MSMEs and unlock government benefits. Arora Ankit And Associates assists Delhi NCR businesses with correct migration and registration.",
  },
  {
    question: "Who is eligible for MSME/Udyam registration?",
    answer:
      "Any business that falls within the MSME investment and turnover thresholds can apply, regardless of whether it is in manufacturing or services. The classification is now uniform across sectors. Arora Ankit And Associates reviews your investment and turnover figures, validates documents, and confirms eligibility for Delhi NCR applicants.",
  },
  {
    question: "What is the latest MSME classification criteria?",
    answer:
      "The revised criteria combine investment and turnover. Micro: investment up to Rs. 1 crore and turnover up to Rs. 5 crore. Small: investment up to Rs. 10 crore and turnover up to Rs. 50 crore. Medium: investment up to Rs. 50 crore and turnover up to Rs. 250 crore. Arora Ankit And Associates helps apply the correct classification.",
  },
  {
    question: "Is Udyam registration mandatory to get MSME benefits?",
    answer:
      "While Udyam registration is not mandatory for all businesses, it is required to access MSME schemes, incentives, and priority sector benefits. Many lenders and government departments ask for the Udyam certificate. Arora Ankit And Associates recommends registration if you want to use MSME benefits in Delhi NCR.",
  },
  {
    question: "How long does Udyam registration take?",
    answer:
      "Udyam registration is completed online and can be done quickly if Aadhaar and PAN data match. Most applications are completed the same day, subject to OTP verification and data validation. Arora Ankit And Associates prepares the inputs and resolves data mismatches to reduce delays for Delhi NCR businesses.",
  },
  {
    question: "Which documents are required for Udyam registration?",
    answer:
      "Core details include Aadhaar and PAN of the proprietor or authorized person, and business details such as address and activity. Depending on entity type, supporting documents like MOA, AOA, partnership deed, and office proof may be required. Arora Ankit And Associates provides a checklist and verifies documents before filing in Delhi NCR.",
  },
  {
    question: "How can I check my Udyam registration status?",
    answer:
      "You can check status on the Udyam portal using the Udyam Registration Number and registered phone number to generate OTP. Arora Ankit And Associates helps retrieve the URN, validate details, and download the certificate for Delhi NCR applicants if needed.",
  },
  {
    question: "Can existing Udyog Aadhaar registrations be migrated?",
    answer:
      "Yes. Businesses holding a Udyog Aadhaar (UAM) number can migrate to Udyam by validating the UAM number with OTP on the portal. Arora Ankit And Associates handles the migration steps and updates classification details to keep the registration active for Delhi NCR businesses.",
  },
];

function MSMEUdyam() {
  return (
    <SimplePage
      title="MSME Udyam Registration"
      keywords="MSME Udyam Registration, Udyam Registration, MSME Registration in Delhi NCR, Udyam Certificate, Udyam Aadhar"
      description="Get MSME Udyam Registration with Arora Ankit And Associates in Delhi NCR. We help you understand classification, prepare documents, complete online filing, and secure your Udyam certificate."
      points={[
        {
          title: "Benefits",
          items: benefits,
        },
        {
          title: "Registration Highlights",
          items: highlights,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">       

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">MSME Udyam Registration</h2>
          <p className="mt-3 text-base text-slate-800">
            The Union MSME Ministry launched the Udyam Registration Portal on July 1, 2020. It enables MSMEs to
            register on a self-declaration basis and obtain a Udyam Registration Number. The process was introduced
            as part of the Prime Minister's relief package during the COVID-19 pandemic and now serves as the
            standard MSME registration route.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Many businesses understand Udyam registration as a gateway to government benefits, but there is often
            confusion about MSME vs Udyam. Arora Ankit And Associates helps Delhi NCR entrepreneurs clarify the
            difference and complete the correct registration.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Difference between MSME and Udyam Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            The MSME certificate is now issued as a Udyam Registration Certificate with a unique Udyam Registration
            Number (URN). Udyam Aadhar registration is the simplified and official route to MSME registration.
            Once you obtain the 12-digit URN, you can access MSME benefits and schemes.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is MSME Registration?</h3>
          <p className="mt-3 text-base text-slate-800">
            MSME registration was introduced on October 2, 2006 to promote Micro, Small, and Medium Enterprises and
            improve their competitiveness. MSMEs are critical to India's economic growth, and registration enables
            access to government incentives. Arora Ankit And Associates supports Delhi NCR enterprises with end-to-end
            MSME registration assistance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is a Micro, Small, or Medium Enterprise?</h3>
          <p className="mt-3 text-base text-slate-800">
            The MSMED Act, 2006 governs MSME classification. The government has removed the distinction between
            manufacturing and services and introduced revised investment and turnover criteria, announced on May 13,
            2020. Classification is now unified across sectors.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Criteria</th>
                  <th className="px-4 py-3">Micro</th>
                  <th className="px-4 py-3">Small</th>
                  <th className="px-4 py-3">Medium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3">Investment</td>
                  <td className="px-4 py-3">Up to Rs. 1 crore</td>
                  <td className="px-4 py-3">Up to Rs. 10 crore</td>
                  <td className="px-4 py-3">Up to Rs. 50 crore</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Annual Turnover</td>
                  <td className="px-4 py-3">Up to Rs. 5 crore</td>
                  <td className="px-4 py-3">Up to Rs. 50 crore</td>
                  <td className="px-4 py-3">Up to Rs. 250 crore</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-base text-slate-800">
            A micro enterprise has investment up to Rs. 1 crore and turnover up to Rs. 5 crore. A small enterprise
            has investment up to Rs. 10 crore and turnover up to Rs. 50 crore. A medium enterprise has investment up
            to Rs. 50 crore and turnover up to Rs. 250 crore.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of MSME/Udyam Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Requirement</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {documents.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Registration Process of MSME/Udyam</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Visit the Udyam portal at udyamregistration.gov.in.</li>
            <li>
              Select the category: New entrepreneurs not registered as MSME/UAM, or existing UAM holders for
              migration.
            </li>
            <li>Enter Aadhaar number and name as per Aadhaar, then validate with OTP.</li>
            <li>Fill the form with required details and submit with captcha.</li>
            <li>
              For UAM migration, enter UAM number and validate with OTP sent to registered email or mobile.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to Check Udyam Registration Status</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Visit udyamregistration.gov.in</li>
            <li>Enter the Udyam Registration Number and registered phone number.</li>
            <li>Select the OTP option.</li>
            <li>Validate and generate OTP to view status and download certificate.</li>
          </ol>
        </div>
      </section>
    </SimplePage>
  );
}

export default MSMEUdyam;
