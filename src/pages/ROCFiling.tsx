import SimplePage from "./SimplePage";

const FIRM_NAME = "Arora Ankit And Associates";

const requirements = [
  "DIN & DSC of Directors",
  "Registered office proof",
  "Board resolution",
  "Audited financial statements",
  "INC-22A ACTIVE form",
  "MSME registration (if applicable)",
  "MCA login credentials",
  "Board meeting minutes",
  "Shareholding pattern",
  "INC-20A declaration (if applicable)",
];

const benefits = [
  "Avoid ₹4L+ penalties",
  "Active company status",
  "Loan eligibility maintained",
  "Tender participation",
  "Director disqualification prevented",
  "Credit rating protected",
  "Strike-off avoidance",
  "Compliance certificate",
  "Audit-ready records",
  "Expert ROC support",
];

const faqs = [
  {
    question: "What is ROC filing and who needs it?",
    answer: "ROC filing means submitting AOC-4 (financial statements) and MGT-7 (annual returns) to MCA annually. All registered companies must comply regardless of turnover. Arora Ankit And Associates ensures timely filing, document verification, and avoids penalties while maintaining active company status.",
  },
  {
    question: "What are ROC filing deadlines?",
    answer: "AOC-4 due by September 30th, MGT-7 by September 30th (small cos) or October 31st. Late fees start at ₹100/day without upper limit. Arora Ankit And Associates tracks deadlines and files compliantly to prevent costly penalties.",
  },
  {
    question: "What documents are required?",
    answer: "Need DIN/DSC of directors, audited financials, board resolutions, INC-22A ACTIVE form, registered office proof, and shareholding pattern. Arora Ankit And Associates collects, verifies all documents for error-free MCA portal filing and approval.",
  },
  {
    question: "What happens if I miss ROC deadlines?",
    answer: "₹100/day late fees, director disqualification after 3 years continuous default, company strike-off risk, loan ineligibility. Arora Ankit And Associates handles condonation applications, penalty waivers, and restores compliance quickly.",
  },
  {
    question: "Is ROC filing required for dormant companies?",
    answer: "Yes, dormant companies must file MGT-7 annually even without operations. Arora Ankit And Associates files simplified dormant returns compliantly, maintaining MCA active status and preventing penalties or strike-off proceedings.",
  },
  {
    question: "Why choose Arora Ankit And Associates?",
    answer: "Arora Ankit And Associates provides complete ROC compliance - document review, deadline tracking, form filing, penalty condonation, and MCA follow-ups. Stay compliant without stress while we handle complex filings professionally.",
  },
];


function ROCFiling() {
  return (
    <SimplePage
      title="ROC Annual Filing India 2026 | AOC-4, MGT-7 Compliance"
      keywords="ROC filing, AOC-4, MGT-7, annual return, company compliance"
      description="Complete ROC filing: AOC-4 financials, MGT-7 returns, deadlines, penalties. Expert support from Arora Ankit And Associates."
      points={[
        { title: "Required Documents", items: requirements },
        { title: "Compliance Benefits", items: benefits },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
        <article>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">What is ROC Filing?</h2>
          <p className="mt-3 text-base text-slate-800">
            ROC filing is mandatory annual compliance under Companies Act 2013 for all MCA-registered companies. Submit Form AOC-4
            (audited financial statements - Balance Sheet, P&L, Cash Flow, Directors' Report) and Form MGT-7 (annual returns
            covering directors, shareholders, registered office, share capital). Requires DIN, DSC of directors and auditor
            certification. Arora Ankit And Associates handles complete MCA V3 portal filing, document validation, and board
            resolution drafting to ensure approval without rejections.
          </p>             
          <p className="mt-3 text-base text-slate-800">
            ROC compliance directly impacts business operations - enables loan approvals, government tenders, e-way bills, and
            maintains active company status. Non-filing triggers ₹100/day late fees, director disqualification after 3 years
            continuous default, and MCA strike-off risk. Banks verify ROC status before credit limits. Arora Ankit And Associates
            provides end-to-end support: deadline tracking, form preparation, DSC filing, status monitoring, and condonation
            applications for delayed filings while preventing legal complications.
          </p>         
        </article>
        
        <article>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why File ROC Returns?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                point: "Avoid ₹4L+ penalties",
                detail: "AOC-4/MGT-7 late fees @₹100/day accumulate rapidly. 3-year continuous default = ₹4L+ penalties + prosecution notices from ROC. Arora Ankit And Associates files compliantly to prevent legal action."
              },
              {
                point: "Active company status",
                detail: "Prevents MCA master data deactivation and strike-off proceedings. Inactive status blocks PAN, TAN operations, banking, and statutory payments. Maintain continuous legal existence."
              },
              {
                point: "Loan eligibility maintained",
                detail: "Banks mandatorily verify MCA compliance before approving working capital, term loans, overdraft facilities. Non-compliant companies face credit rejection regardless of financial strength."
              },
              {
                point: "Tender participation",
                detail: "Central/state govt tenders require valid ROC filings + compliance certificate as primary eligibility. Private corporate contracts also verify MCA status before awarding orders."
              },
              {
                point: "Director disqualification prevented",
                detail: "3 years continuous default leads to DIN suspension, directorship ban, personal liability. Protects directors' professional reputation and future opportunities across industries."
              },
              {
                point: "Credit rating protected",
                detail: "CIBIL, D&B, CRISIL ratings factor ROC compliance. Non-filing triggers negative ratings impacting vendor credit, supplier terms, and investor confidence significantly."
              },
              {
                point: "Strike-off avoidance",
                detail: "MCA issues strike-off notice after 1 year non-filing. Struck-off companies cannot revive easily, lose assets to govt, face revival costs exceeding ₹5 lakhs."
              },
              {
                point: "Compliance certificate",
                detail: "CA/CS certification proves regulatory adherence for tenders, loans, audits. Arora Ankit And Associates provides certified compliance reports for business requirements."
              },
              {
                point: "Audit-ready records",
                detail: "MCA portal data auto-matches statutory audit requirements. Eliminates reconciliation efforts between books and regulatory filings during year-end audits."
              },
              {
                point: "Expert ROC support",
                detail: "Arora Ankit And Associates handles condonation applications, penalty waivers, MCA prosecutions, director DIN restoration. Complete compliance lifecycle management."
              }
            ].map((item, index) => (
              <div key={index} className="group p-5 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md">
                <h4 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-blue-700">
                  {item.point}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-2">Ready for ROC Compliance?</h3>
          <p className="text-blue-100 mb-6">No penalties. Active status. Expert support.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-xl transition-all">
            Contact {FIRM_NAME}
          </button>
        </div>
      </section>
    </SimplePage>
  );
}

export default ROCFiling;