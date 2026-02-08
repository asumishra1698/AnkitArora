import SimplePage from "./SimplePage";

const advantages = [
  "Take input tax credit",
  "Make interstate sales without restrictions",
  "Register on e-commerce platforms",
  "Limited compliance for eligible schemes",
  "Less tax liability through credits and set-offs",
];

const eligibility = [
  "Turnover above Rs. 40 lakh for goods",
  "Turnover above Rs. 20 lakh for services",
  "Voluntary registration even below threshold",
  "Interstate sales",
  "Non-resident taxable person",
];

const faqs = [
  {
    question: "Who must register under GST?",
    answer:
      "GST registration is mandatory once aggregate turnover crosses the prescribed threshold, and for certain categories such as interstate suppliers, e-commerce sellers, casual taxable persons, and non-resident taxable persons regardless of turnover. Arora Ankit And Associates reviews your business activity in Delhi NCR, checks applicability, and prepares the correct registration route to keep you compliant.",
  },
  {
    question: "Can I take input tax credit without GST registration?",
    answer:
      "No. Input tax credit can only be claimed by registered businesses filing GST returns. Without registration, you cannot collect GST or claim credits on purchases. Arora Ankit And Associates helps you evaluate the benefit of registration, complete documentation, and set up return filing so eligible credits are not lost.",
  },
  {
    question: "What is aggregate turnover for GST purposes?",
    answer:
      "Aggregate turnover includes taxable supplies, exempt supplies, exports, and interstate supplies on a PAN basis, excluding taxes and certain inward supplies. If you have multiple business locations under one PAN, all turnovers are combined. Arora Ankit And Associates calculates your turnover correctly for Delhi NCR entities to avoid late registration risks.",
  },
  {
    question: "What documents are required for GST registration?",
    answer:
      "Common documents include PAN, identity and address proof of promoters, photographs, business registration proof if applicable, address proof of the place of business, and bank account proof. Requirements vary by entity type. Arora Ankit And Associates provides a checklist, verifies documents, and files the application to minimize resubmissions.",
  },
  {
    question: "Is voluntary GST registration useful?",
    answer:
      "Voluntary registration can improve business credibility, enable input tax credit, and satisfy B2B customer requirements even if turnover is below threshold. However, it also brings return filing obligations. Arora Ankit And Associates evaluates the trade-offs for Delhi NCR businesses and recommends whether voluntary registration makes commercial sense.",
  },
];

function GSTRegistration() {
  return (
    <SimplePage
      title="GST Registration"
      keywords="GST Registration, GST Registration in Delhi NCR, GST Advisory, Input Tax Credit, GST Threshold"
      description="Get GST registration with Arora Ankit And Associates in Delhi NCR. We help you assess eligibility, prepare documents, file the application, and stay compliant with return timelines."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Eligibility",
          items: eligibility,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">How to get GST Registration?</h2>
          <p className="mt-3 text-base text-slate-800">
            The Goods and Services Tax (GST) applies to both goods and services through a dual structure that
            balances Central and State revenues. Introduced on July 1, 2017, GST is a destination-based, multi-stage
            tax charged on every value addition. It reduces the cascading effect of tax, improves transparency, and
            supports investment and e-commerce growth under the One Nation One Tax framework.
          </p>
          <p className="mt-3 text-base text-slate-800">
            GST registration is mandatory for businesses supplying goods or services once thresholds apply. Only
            registered entities can collect GST from customers and claim input tax credit (ITC). Arora Ankit And
            Associates helps Delhi NCR businesses with eligibility checks, documentation, and filing to ensure
            compliant registration.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">GST Turnover Limit</h3>
          <p className="mt-3 text-base text-slate-800">
            GST registration is mandatory for casual taxable persons, non-resident taxable persons, and businesses
            making supplies through e-commerce operators, irrespective of turnover. For regular suppliers, turnover
            thresholds depend on the nature of supply and state category.
          </p>
          <p className="mt-3 text-base text-slate-800">
            A casual taxable person is anyone who occasionally undertakes transactions involving supply of goods or
            services in a state or union territory where there is no fixed place of business. Arora Ankit And
            Associates helps Delhi NCR businesses interpret applicability and choose the correct GST route.
          </p>
          <p className="mt-3 text-base text-slate-800">
            For goods suppliers, registration is mandatory when aggregate turnover exceeds Rs. 40 lakh in normal
            category states, subject to conditions such as no inter-state supply in specified states and no supply of
            pan masala, tobacco, or ice cream. If conditions are not met, the limit reduces to Rs. 20 lakh. For
            special category states, the threshold is Rs. 20 lakh for goods and Rs. 10 lakh in certain cases.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Should not be engaged in the supply of services</li>
            <li>Should not make intra-state supplies in specified states</li>
            <li>Should not supply pan masala, tobacco, or ice cream</li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            For service providers, the threshold remains Rs. 20 lakh in normal category states and Rs. 10 lakh in
            special category states. Arora Ankit And Associates confirms the correct threshold based on your
            business activity and location.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Arora Ankit And Associates provides end-to-end GST advisory and registration support, taking care of
            turnover checks and compliance requirements to avoid late registration issues.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Special Category States</h3>
          <p className="mt-3 text-base text-slate-800">
            Special category states include Arunachal Pradesh, Assam, Himachal Pradesh, Jammu and Kashmir, Manipur,
            Meghalaya, Mizoram, Nagaland, Sikkim, Tripura, and Uttarakhand. Threshold limits in these states are lower
            for GST registration. Arora Ankit And Associates helps businesses selling into these regions determine the
            correct compliance approach.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">GST Registration Threshold Table</h3>
          <p className="mt-3 text-base text-slate-800">
            The initial GST registration limits were revised in the 32nd GST Council meeting for the supply of goods.
            The table below shows the initial and revised thresholds for goods and services.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">Aggregate Turnover</th>
                  <th className="px-4 py-3">Registration Mandatory</th>
                  <th className="px-4 py-3">Applicability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3">More than Rs. 20 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Initial threshold for normal category states (till March 31, 2019)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More than Rs. 10 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Initial threshold for special category states (till March 31, 2019)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More than Rs. 40 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">New limits for sale of goods in normal category states (from April 1, 2019)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More than Rs. 20 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">New limits for sale of goods in special category states (from April 1, 2019)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More than Rs. 20 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Service providers in normal category states (unchanged)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">More than Rs. 10 lakh</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Service providers in special category states (unchanged)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Aggregate Turnover Explained</h3>
          <p className="mt-3 text-base text-slate-800">
            Aggregate turnover includes taxable supplies, exempt supplies, exports, and interstate supplies on a
            PAN basis. It excludes GST and certain inward supplies. If a person has multiple places of business, all
            turnovers are combined to compute aggregate turnover. Arora Ankit And Associates ensures correct
            calculation to avoid late registration or unnecessary compliance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Voluntary GST Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            Businesses below the threshold can opt for voluntary registration to improve credibility, meet B2B
            customer requirements, and claim input tax credit. Voluntary registration also requires regular return
            filing. Arora Ankit And Associates helps Delhi NCR businesses decide if voluntary GST registration is
            commercially beneficial.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required for GST Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            If you wish to avail GST registration services, it is important to understand the document requirements
            in advance. The exact list varies by entity type such as company, LLP, proprietorship, trust, or
            society. Arora Ankit And Associates provides a tailored checklist and validates documents before filing.
          </p>
          <p className="mt-3 text-base text-slate-800">
            PAN card of the business or applicant is mandatory because GST registration is linked to PAN. Identity
            and address proof with photographs are also required. Acceptable identity proofs include passport, voter
            ID, PAN, Aadhaar, and driving license. Acceptable address proofs include passport, Aadhaar, driving
            license, voter ID, and ration card.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Company: Managing Director, Directors, and authorized person</li>
            <li>HUF: Karta</li>
            <li>Proprietary concern: Proprietor</li>
            <li>Local authority: CEO or equivalent</li>
            <li>Statutory body: CEO or equivalent</li>
            <li>Trust: Managing trustee, trustees, and authorized person</li>
            <li>Partnership firm or LLP: Managing or designated partners</li>
            <li>Association of persons or BOI: Managing committee members</li>
            <li>Others: Persons in charge</li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            Business registration document is required for most entity types. Proprietorships are generally exempt
            from separate business registration proof because the proprietor and the business are the same. Charter
            documents are required for incorporated entities. Arora Ankit And Associates confirms applicability and
            prepares the correct set.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Address proof for place of business is required for all locations. Guidance is available on
            https://www.gst.gov.in/. Acceptable proofs include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Owned premises: Property tax receipt, municipal khata, or electricity bill</li>
            <li>
              Rented or leased premises: Valid rental agreement with owner proof such as property tax receipt,
              municipal khata, or electricity bill
            </li>
            <li>SEZ premises: SEZ approval documents issued by the Government of India</li>
            <li>
              Other cases: Consent letter from owner with supporting ownership proof such as electricity bill or
              municipal khata
            </li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            Proof of bank account is required. Submit any one of the following: the first and relevant page of
            passbook, the relevant page of bank statement, or a cancelled cheque bearing the name of proprietor or
            business entity, bank account number, IFSC, MICR, and bank branch details.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default GSTRegistration;
