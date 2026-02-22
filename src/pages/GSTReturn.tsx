import SimplePage from "./SimplePage";

const requirements = [
  "GSTIN registration",
  "Sales and purchase invoices",
  "Input tax credit details",
  "Bank statements",
  "Monthly/quarterly turnover data",
  "HSN/SAC codes for goods/services",
  "Tax payment challans",
  "Reconciliation statements",
  "E-way bill records (if applicable)",
  "Digital signature for online filing",
];

const advantages = [
  "Legal compliance with GST laws",
  "Avoidance of penalties and interest",
  "Claim input tax credit",
  "Smooth business operations",
  "Enhanced business credibility",
  "Eligibility for government tenders",
  "Easy access to loans and finance",
  "Transparent tax records",
  "Quick refund processing",
  "Expert support for complex returns",
];

const gstTimeline = [
  { step: "1. Collect Documents", time: "Day 1-3", responsible: "Business Owner" },
  { step: "2. Reconcile GSTR-2A", time: "Day 4-5", responsible: "Accountant" },
  { step: "3. Prepare GSTR-1", time: "Day 6-8", responsible: "Arora Ankit And Associates" },
  { step: "4. File GSTR-1", time: "By 11th", responsible: "Arora Ankit And Associates" },
  { step: "5. Prepare GSTR-3B", time: "Day 12-15", responsible: "Arora Ankit And Associates" },
  { step: "6. Pay & File GSTR-3B", time: "By 20th/22nd/24th", responsible: "Arora Ankit And Associates" },
  { step: "7. Track Status", time: "Ongoing", responsible: "Arora Ankit And Associates" },
];


const faqs = [
  {
    question: "What is a GST return and who must file it?",
    answer: "A GST return is a statement of sales, purchases, and tax paid or collected under GST. Every registered taxpayer must file GST returns as per their category. Arora Ankit And Associates guides you on the right forms and deadlines, ensuring your business stays compliant and avoids penalties.",
  },
  {
    question: "What documents are required for GST return filing?",
    answer: "You need GSTIN, sales and purchase invoices, input tax credit details, bank statements, and tax payment challans. Arora Ankit And Associates reviews your documents, checks for completeness, and ensures all records are accurate for smooth GST return filing.",
  },
  {
    question: "How often do I need to file GST returns?",
    answer: "GST returns are filed monthly or quarterly, depending on your turnover and scheme. Arora Ankit And Associates tracks your deadlines, sends reminders, and files your returns on time, helping you avoid late fees and compliance issues.",
  },
  {
    question: "Can I claim input tax credit through GST returns?",
    answer: "Yes, you can claim input tax credit for eligible purchases and expenses. Arora Ankit And Associates verifies your claims, checks supporting documents, and ensures you maximize your tax savings while staying compliant with GST rules.",
  },
  {
    question: "What happens if I miss the GST return filing deadline?",
    answer: "Missing the GST return deadline leads to penalties, interest, and possible suspension of GSTIN. Arora Ankit And Associates helps you file on time, manages late filings, and advises on minimizing penalties and restoring compliance quickly.",
  },
  {
    question: "Is GST return filing mandatory for nil turnover?",
    answer: "Yes, even if you have nil turnover, you must file a nil GST return. Arora Ankit And Associates ensures your nil returns are filed correctly, preventing unnecessary penalties and keeping your GSTIN active and compliant.",
  },
  {
    question: "How do I reconcile sales and purchase data for GST returns?",
    answer: "Reconciliation involves matching sales and purchase invoices with GST portal data. Arora Ankit And Associates uses advanced tools and expertise to reconcile your records, resolve mismatches, and ensure accurate GST return filing.",
  },
  {
    question: "Can GST returns be revised after submission?",
    answer: "GST returns cannot be revised, but corrections can be made in subsequent returns. Arora Ankit And Associates helps you identify errors, guides you on correction procedures, and ensures your records remain accurate and compliant.",
  },
  {
    question: "How is GST refund processed after return filing?",
    answer: "GST refunds are processed based on return data and supporting documents. Arora Ankit And Associates tracks your refund status, follows up with authorities, and resolves issues so you receive your refund quickly and without stress.",
  },
  {
    question: "Why choose Arora Ankit And Associates for GST return filing?",
    answer: "Arora Ankit And Associates offers expert support, timely reminders, document review, and compliance guidance for GST return filing. We handle complex cases, minimize errors, and ensure your business stays compliant, saving you time and money.",
  },
];

function GSTReturn() {
  return (
    <SimplePage
      title="GST Return Filing"
      keywords="GST Return Filing, GST Compliance, India, Tax Return"
      description="Get expert support for GST return filing in India. We guide you through requirements, documents, deadlines, reconciliation, and common mistakes."
      points={[
        {
          title: "Documents Required",
          items: requirements,
        },
        {
          title: "Advantages of GST Return Filing",
          items: advantages,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is GST Return Filing?</h2>
          <p className="mt-3 text-base text-slate-800">
            GST return filing is the process of submitting details of sales, purchases, and tax paid or collected under GST to the government. It is mandatory for all registered taxpayers and ensures compliance with GST laws.
          </p>

          <p className="mt-4 text-base text-slate-800">
            Arora Ankit And Associates provides end-to-end support, helping you prepare documents, reconcile data, and file returns accurately and on time. Our experts handle GSTR-1, GSTR-3B, and other forms while ensuring you claim maximum input tax credit and avoid penalties.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why File GST Returns?</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              {
                point: "Legal compliance with GST laws",
                detail: "Maintain active GSTIN status, avoid notices, audits, and legal proceedings from GST authorities."
              },
              {
                point: "Avoidance of penalties and interest",
                detail: "₹20-50/day late fee + 18% p.a. interest on unpaid tax. Caps at ₹5,000-10,000 per return."
              },
              {
                point: "Claim input tax credit",
                detail: "Offset GST paid on purchases against output liability. Essential for cash flow management."
              },
              {
                point: "Smooth business operations",
                detail: "Generate e-way bills, participate in tenders, maintain supplier relationships uninterrupted."
              },
              {
                point: "Enhanced business credibility",
                detail: "Compliant GST records build trust with clients, banks, and government authorities."
              },
              {
                point: "Eligibility for government tenders",
                detail: "Most govt contracts require valid GSTIN with regular return filing history."
              },
              {
                point: "Easy access to loans and finance",
                detail: "Banks verify GST returns for loan approvals, working capital, and credit limits."
              },
              {
                point: "Transparent tax records",
                detail: "Automated GSTR-2A matching ensures accurate bookkeeping and audit readiness."
              },
              {
                point: "Quick refund processing",
                detail: "Exporters and inverted duty businesses get refunds within 60 days of filing."
              },
              {
                point: "Expert support for complex returns",
                detail: "Arora Ankit And Associates handles multi-state, export, and ITC reversal cases."
              }
            ].map((item, index) => (
              <div key={index} className="group p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-200">
                <h4 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-blue-700">
                  {item.point}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">GST Return Filing Process</h2>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            <li className="text-base text-slate-700">
              <strong>Collect all required documents and proofs:</strong> Gather invoices, GSTIN, bank statements, and tax payment challans for accurate filing.
            </li>
            <li className="text-base text-slate-700">
              <strong>Register or log in to the GST portal:</strong> Access the official GST portal to start your return filing process. Arora Ankit And Associates assists with registration and login issues.
            </li>
            <li className="text-base text-slate-700">
              <strong>Select the correct GST return form:</strong> Choose the appropriate form (GSTR-1, GSTR-3B, etc.) based on your business type and turnover. Our experts help you avoid mistakes in form selection.
            </li>
            <li className="text-base text-slate-700">
              <strong>Fill in sales, purchase, and tax details:</strong> Enter all relevant information accurately, including sales, purchases, input tax credit, and taxes paid. We review your entries for completeness.
            </li>
            <li className="text-base text-slate-700">
              <strong>Upload supporting documents and proofs:</strong> Attach necessary documents to support your claims and deductions. Arora Ankit And Associates checks for missing or incorrect proofs.
            </li>
            <li className="text-base text-slate-700">
              <strong>Submit and e-sign your return:</strong> Complete the submission and e-signing step to validate your return. We guide you through the available options for secure verification.
            </li>
            <li className="text-base text-slate-700">
              <strong>Track your return and refund status online:</strong> Monitor the progress of your return and refund through the portal. Our team follows up with authorities if delays occur.
            </li>
            <li className="text-base text-slate-700">
              <strong>Reconcile sales and purchase data:</strong> Match invoices and GST portal data to resolve mismatches. Arora Ankit And Associates uses advanced tools for accurate reconciliation.
            </li>
            <li className="text-base text-slate-700">
              <strong>File nil return if no turnover:</strong> Even with nil turnover, file a nil return to keep your GSTIN active. We ensure your nil returns are filed correctly and on time.
            </li>
            <li className="text-base text-slate-700">
              <strong>Consult experts for complex cases:</strong> For complicated tax situations or multiple sources, rely on Arora Ankit And Associates for professional advice and accurate filing.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">GST Return Timeline</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full bg-white border border-slate-200 rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <th className="p-4 text-left font-semibold rounded-tl-xl">Step</th>
                  <th className="p-4 text-left font-semibold">Timeline</th>
                  <th className="p-4 text-left font-semibold rounded-tr-xl">Handled By</th>
                </tr>
              </thead>
              <tbody>
                {gstTimeline.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-t border-slate-100 hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'
                      }`}
                  >
                    <td className="p-4 font-medium text-slate-900 whitespace-nowrap">{item.step}</td>
                    <td className="p-4 font-semibold text-blue-600 whitespace-nowrap">{item.time}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${item.responsible.includes("Arora Ankit And Associates")
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                        }`}>
                        {item.responsible}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600 text-center italic">
            *Timeline for monthly filers | Arora Ankit And Associates manages 80% of the process
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default GSTReturn;