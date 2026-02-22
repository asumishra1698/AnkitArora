import SimplePage from "./SimplePage";

const FIRM_NAME = "Arora Ankit And Associates";

const requirements = [
  "TAN number",
  "Form 16/16A issued to deductees",
  "TDS challan payment proofs",
  "Salary/expense registers",
  "Payment vouchers",
  "Contractor invoices",
  "Bank statements",
  "Interest certificates",
  "Form 24Q/26Q/27Q data",
  "DSC of responsible person",
];

const benefits = [
  "Avoid 1.5% monthly penalty",
  "No interest @1.5%/month",
  "TDS credit to deductees",
  "Income tax refund processing",
  "Fee collection authority",
  "Audit compliance",
  "Default notices prevented",
  "Prosecution avoidance",
  "Statutory audit ready",
  "Expert TDS support",
];

const faqs = [
  {
    question: "What is TDS return filing and who needs it?",
    answer: "TDS returns report tax deducted at source on salaries, contracts, interest, rent, professional fees. All TAN holders deducting TDS must file quarterly returns (24Q, 26Q, 27Q). Arora Ankit And Associates ensures accurate filing and TDS credit matching.",
  },
  {
    question: "What are TDS return deadlines?",
    answer: "Form 24Q (Salary): 31st May annually. Form 26Q/27Q: 31st Jul (Q1), 31st Oct (Q2), 31st Jan (Q3), 31st May (Q4). Late filing penalty ₹200/day. Arora Ankit And Associates tracks all deadlines compliantly.",
  },
  {
    question: "What documents are required?",
    answer: "Need TAN, Form 16/16A, TDS challans, payment proofs, salary registers, contractor invoices, bank statements. Arora Ankit And Associates validates all documents before TRACES/TRP portal filing to prevent rejections and defaults.",
  },
  {
    question: "What happens if I miss TDS deadlines?",
    answer: "₹200/day late filing fee + 1.5% monthly interest on late TDS deposit. Fee collection rights suspended after 1 year delay. Arora Ankit And Associates handles condonation and restores TDS credit functionality quickly.",
  },
  {
    question: "How to correct TDS return errors?",
    answer: "File correction returns (regular/correction) through TRP portal with updated challan/voucher details. Arora Ankit And Associates reconciles TRACES mismatches and files corrections to restore deductee TDS credits promptly.",
  },
  {
    question: "Why choose Arora Ankit And Associates?",
    answer: "Arora Ankit And Associates provides complete TDS compliance - quarterly filing, TRACES reconciliation, correction returns, penalty condonation, DSC management. Stay compliant without defaults or legal complications professionally.",
  },
];

function TDSReturn() {
  return (
    <SimplePage
      title="TDS Return Filing India 2026 | 24Q 26Q 27Q Quarterly Compliance"
      keywords="TDS return filing, Form 24Q, 26Q, 27Q, TAN compliance, quarterly TDS"
      description="Complete TDS return filing: Form 24Q salary, 26Q other payments, 27Q non-resident. Deadlines, penalties, corrections. Expert support."
      points={[
        { title: "Required Documents", items: requirements },
        { title: "Compliance Benefits", items: benefits },
      ]}
      faqs={faqs}
    >
      <section className="space-y-8 p-6 sm:p-8 bg-white rounded-3xl shadow-xl">
        
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            TDS Return Filing Simplified
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            File 24Q, 26Q, 27Q accurately. Avoid penalties. Ensure TDS credits.
          </p>
        </div>

        {/* What is TDS Return Filing */}
        <article>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What is TDS Return Filing?</h2>
          
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-base text-slate-800 leading-relaxed">
              TDS (Tax Deducted at Source) returns are quarterly/annual filings reporting tax deducted on salaries (24Q), 
              professional fees/interest/rent (26Q), and non-resident payments (27Q). Mandatory for all TAN holders. Requires 
              challan payments, Form 16/16A issuance, TRACES validation. Arora Ankit And Associates handles complete filing.
            </p>
          </div>

          <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
            <p className="text-base text-slate-800 leading-relaxed">
              Proper TDS filing ensures deductees claim credits, prevents ₹200/day late fees, 1.5% monthly interest, and 
              maintains fee collection authority. Income tax refunds blocked without matching TDS returns. Arora Ankit And 
              Associates manages TRP portal filing, corrections, and reconciliations compliantly.
            </p>
          </div>
        </article>

        {/* Why File TDS Returns - Detailed Cards */}
        <article>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why File TDS Returns?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { point: "Avoid 1.5% monthly penalty", detail: "₹200/day late filing fee applies until correction. 1-year delay suspends TDS deduction authority permanently." },
              { point: "No interest @1.5%/month", detail: "Late TDS deposit attracts 1.5% monthly interest from 7th to deposit date. Compounding penalty on cash flow." },
              { point: "TDS credit to deductees", detail: "Employees/contractors claim refunds only after matching 26AS with your TDS return. Prevents disputes." },
              { point: "Income tax refund processing", detail: "ITD processes salary refunds only after 24Q matching. Quarterly 26Q critical for vendor refunds." },
              { point: "Fee collection authority", detail: "1-year late filing = permanent TDS deduction rights suspension. Requires ITD approval restoration." },
              { point: "Audit compliance", detail: "Statutory audits verify TDS returns against 26AS. Mismatches flagged as qualification matters." },
              { point: "Default notices prevented", detail: "TRACES flags unmatched challans causing CPC notices. ₹10K+ penalties per default avoided." },
              { point: "Prosecution avoidance", detail: "Repeated defaults trigger prosecution under section 276B. Personal liability for responsible person." },
              { point: "Statutory audit ready", detail: "TDS portal data matches audit requirements automatically. Zero reconciliation efforts needed." },
              { point: "Expert TDS support", detail: "Arora Ankit And Associates handles corrections, TRACES reconciliation, condonation, DSC management compliantly." },
            ].map((item, index) => (
              <div key={index} className="group p-5 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md">
                <h4 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-blue-700">{item.point}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>   
        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Ready for TDS Compliance?</h3>
          <p className="text-blue-100 mb-6">No penalties. Full credits. Expert handling.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
            Contact {FIRM_NAME}
          </button>
        </div>

      </section>
    </SimplePage>
  );
}

export default TDSReturn;
