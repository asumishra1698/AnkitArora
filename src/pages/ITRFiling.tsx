import SimplePage from "./SimplePage";

const requirements = [
  "PAN card and Aadhaar card",
  "Form 16 for salaried individuals",
  "Bank statements and investment proofs",
  "Details of deductions (Section 80C, 80D, etc.)",
  "TDS certificates (Form 16A, 16B, 16C)",
  "Business income details (if applicable)",
  "Capital gains statements",
  "Rental income and property details",
  "Interest income certificates",
  "Advance tax and self-assessment tax receipts",
];

const advantages = [
  "Claim tax refunds",
  "Carry forward losses",
  "Avoid penalties for late filing",
  "Establish financial credibility",
  "Easy loan and visa processing",
  "Legal proof of income",
  "Enable government tenders participation",
  "Compliance with Indian tax laws",
  "Quick processing of refunds",
  "Peace of mind with expert support",
];

const faqs = [
  {
    question: "Who must file an ITR in India?",
    answer: "Any individual or entity whose income exceeds the exemption limit must file an Income Tax Return (ITR). Arora Ankit And Associates helps you determine eligibility, prepare documents, and ensure timely compliance so you avoid penalties and maintain financial credibility. Our experts guide you through every step of the filing process for peace of mind.",
  },
  {
    question: "What documents are needed for ITR filing?",
    answer: "For ITR filing, you need PAN, Aadhaar, Form 16, bank statements, investment proofs, and deduction details. Arora Ankit And Associates reviews your documents, checks for completeness, and ensures all required proofs are submitted, minimizing errors and speeding up your tax return process.",
  },
  {
    question: "What is the deadline for ITR filing for AY 2026-27?",
    answer: "The deadline for ITR filing for AY 2026-27 is July 31st for individuals and September 30th for companies, unless extended. Arora Ankit And Associates tracks deadlines, sends reminders, and files your return promptly, helping you avoid late fees and compliance issues.",
  },
  {
    question: "Can I file my ITR online?",
    answer: "Yes, you can file your ITR online via the Income Tax Department's e-filing portal. Arora Ankit And Associates assists with portal registration, form selection, and digital submission, ensuring your return is filed accurately and securely from anywhere in India.",
  },
  {
    question: "What happens if I miss the ITR filing deadline?",
    answer: "Missing the ITR filing deadline can lead to penalties, interest, and loss of refund or carry forward benefits. Arora Ankit And Associates helps you file on time, manages late filings if needed, and advises on minimizing penalties and restoring compliance quickly.",
  },
  {
    question: "Is Aadhaar-PAN linking mandatory for ITR filing?",
    answer: "Yes, linking Aadhaar with PAN is mandatory for ITR filing. Arora Ankit And Associates checks your linking status, assists with the process, and ensures your return is not rejected due to missing linkage, keeping your tax compliance smooth and hassle-free.",
  },
  {
    question: "How do I claim deductions under Section 80C?",
    answer: "To claim Section 80C deductions, provide investment proofs for eligible instruments while filing your ITR. Arora Ankit And Associates reviews your investments, calculates eligible deductions, and ensures all claims are properly documented for maximum tax savings.",
  },
  {
    question: "Can salaried individuals use Form ITR-1?",
    answer: "Salaried individuals with income up to Rs. 50 lakh and no capital gains or business income can use ITR-1. Arora Ankit And Associates helps you select the correct form, fill details accurately, and avoid mistakes that could delay your tax refund or assessment.",
  },
  {
    question: "How long does it take to process an ITR refund?",
    answer: "ITR refunds are usually processed within a few weeks after e-verification and assessment. Arora Ankit And Associates tracks your refund status, follows up with the tax department, and resolves any issues so you receive your refund quickly and without stress.",
  },
  {
    question: "Can I revise my ITR after submission?",
    answer: "Yes, you can revise your ITR before the end of the assessment year if you discover errors. Arora Ankit And Associates assists with revision filings, corrects mistakes, and ensures your updated return is accepted, keeping your tax records accurate and compliant.",
  },
];

function ITRFiling() {
  return (
    <SimplePage
      title="ITR Filing"
      keywords="ITR Filing, Income Tax Return, India, Tax Compliance"
      description="Get expert support for ITR filing in India. We guide you through eligibility, documents, deadlines, deductions, and common mistakes."
      points={[
        {
          title: "Documents Required",
          items: requirements,
        },
        {
          title: "Advantages of Filing ITR",
          items: advantages,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is ITR Filing?</h2>
          <p className="mt-3 text-base text-slate-800">
            Income Tax Return (ITR) filing is the process of declaring your income, deductions, and taxes paid to the Indian government for a financial year. It is a legal requirement for individuals, businesses, and other entities whose income exceeds the prescribed exemption limit. Filing ITR ensures compliance with tax laws, enables you to claim refunds, and provides proof of income for various financial and legal purposes.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Arora Ankit And Associates offers expert guidance for ITR filing, helping you navigate eligibility, documentation, and deadlines. Proper ITR filing not only avoids penalties but also allows you to carry forward losses, participate in government tenders, and access loans or visas. Our team ensures your return is accurate, timely, and fully compliant with Indian tax regulations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why File Your ITR?</h2>
          <p className="mt-3 text-base text-slate-800">
            Filing your Income Tax Return (ITR) is crucial for legal compliance and financial transparency. It allows you to claim tax refunds, carry forward losses, and avoid penalties for late filing. ITR filing is also required for loan and visa applications, government tenders, and serves as proof of income for various official purposes. Timely filing ensures you stay on the right side of tax laws and maintain a clean financial record.
          </p>
          <p className="mt-3 text-base text-slate-800">
            Arora Ankit And Associates provides comprehensive support for ITR filing, helping you maximize deductions, minimize errors, and secure quick refunds. Our experts guide you through the process, ensuring all documents are accurate and submitted on time. Proper ITR filing enhances your financial credibility, enables participation in government schemes, and gives you peace of mind knowing your tax obligations are fully met.
          </p>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            <li className="text-base text-slate-700"><strong>Claim tax refunds:</strong> Filing ITR enables you to claim refunds for excess taxes paid, ensuring you get back what you deserve.</li>
            <li className="text-base text-slate-700"><strong>Carry forward losses:</strong> You can carry forward business or capital losses to future years, reducing your tax liability in subsequent years.</li>
            <li className="text-base text-slate-700"><strong>Avoid penalties for late filing:</strong> Timely ITR filing helps you avoid government penalties and interest charges for delayed returns.</li>
            <li className="text-base text-slate-700"><strong>Establish financial credibility:</strong> ITR acts as proof of income, boosting your credibility for loans, visas, and other financial transactions.</li>
            <li className="text-base text-slate-700"><strong>Easy loan and visa processing:</strong> Banks and embassies often require ITRs for loan approvals and visa applications, making the process smoother.</li>
            <li className="text-base text-slate-700"><strong>Legal proof of income:</strong> ITR provides legal documentation of your earnings, useful for disputes or official requirements.</li>
            <li className="text-base text-slate-700"><strong>Enable government tenders participation:</strong> Many government tenders require ITRs as eligibility proof, opening new business opportunities.</li>
            <li className="text-base text-slate-700"><strong>Compliance with Indian tax laws:</strong> Filing ITR keeps you compliant with Indian tax regulations, avoiding legal complications.</li>
            <li className="text-base text-slate-700"><strong>Quick processing of refunds:</strong> Timely and accurate ITR filing ensures faster processing of tax refunds by the authorities.</li>
            <li className="text-base text-slate-700"><strong>Peace of mind with expert support:</strong> With Arora Ankit And Associates, you get expert guidance, reducing stress and ensuring your tax matters are handled professionally.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">ITR Filing Process</h2>
          <ol className="mt-5 space-y-4 list-decimal pl-6">
            <li className="text-base text-slate-700"><strong>Collect all required documents and proofs:</strong> Gather PAN, Aadhaar, Form 16, bank statements, investment proofs, and deduction details to ensure accurate filing.</li>
            <li className="text-base text-slate-700"><strong>Register or log in to the Income Tax e-filing portal:</strong> Access the official portal to start your ITR filing process. Arora Ankit And Associates can assist with registration and login issues.</li>
            <li className="text-base text-slate-700"><strong>Select the correct ITR form based on your income type:</strong> Choose the appropriate form (ITR-1, ITR-2, etc.) depending on your income sources. Our experts help you avoid mistakes in form selection.</li>
            <li className="text-base text-slate-700"><strong>Fill in income, deduction, and tax details:</strong> Enter all relevant information accurately, including salary, business income, deductions, and taxes paid. We review your entries for completeness.</li>
            <li className="text-base text-slate-700"><strong>Upload supporting documents and proofs:</strong> Attach necessary documents to support your claims and deductions. Arora Ankit And Associates checks for missing or incorrect proofs.</li>
            <li className="text-base text-slate-700"><strong>E-verify your return using Aadhaar OTP, net banking, or other methods:</strong> Complete the e-verification step to validate your return. We guide you through the available options for secure verification.</li>
            <li className="text-base text-slate-700"><strong>Track your refund and assessment status online:</strong> Monitor the progress of your refund and assessment through the portal. Our team follows up with authorities if delays occur.</li>
            <li className="text-base text-slate-700"><strong>Revise your return if you discover errors before the assessment year ends:</strong> Make corrections and submit a revised return if needed. Arora Ankit And Associates ensures your revised return is compliant and accepted.</li>
            <li className="text-base text-slate-700"><strong>Keep records for future reference and compliance:</strong> Maintain copies of your filed returns and supporting documents for audits, loans, and legal requirements.</li>
            <li className="text-base text-slate-700"><strong>Consult experts for complex cases or business income:</strong> For complicated tax situations, business income, or multiple sources, rely on Arora Ankit And Associates for professional advice and accurate filing.
            </li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Common Mistakes to Avoid</h2>
          <ul className="mt-5 space-y-4 list-disc pl-6">
            {["Missing the filing deadline", "Choosing the wrong ITR form", "Incorrect income or deduction details", "Not linking Aadhaar with PAN", "Failure to e-verify the return", "Ignoring TDS and advance tax details", "Not keeping supporting documents", "Overlooking capital gains or rental income", "Not revising errors before assessment year ends", "Ignoring professional help for complex cases"].map((item) => (
              <li key={item} className="text-base text-slate-700">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </SimplePage>
  );
}

export default ITRFiling;