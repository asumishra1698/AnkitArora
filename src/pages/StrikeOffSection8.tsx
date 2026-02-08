import SimplePage from "./SimplePage";

const advantages = [
  "Clear pending statutory compliance",
  "Reduce ongoing compliance costs",
  "Avoid future penalties and late fees",
  "Official closure with ROC records",
  "Guided documentation and filings",
];

const requirements = [
  "Board and shareholder approval",
  "Settled liabilities and bank accounts",
  "Up-to-date filings before strike off",
  "No pending litigation or disputes",
  "DIN/DSC and ROC documentation",
];

const faqs = [
  {
    question: "When should a Section-8 company apply for strike off?",
    answer: "Apply once operations stop, liabilities settle, and filings are complete. aroraankitandassociates verifies no pending notices, dues, or litigation, then prepares the strike off application with board approvals, checklist, and compliant documentation for your Section-8 company.",
  },
  {
    question: "Is board approval required for strike off?",
    answer: "Yes, board approval is mandatory and member consent required. aroraankitandassociates drafts resolutions, conducts meetings, records decisions, and ensures the strike off filing is valid, compliant, and supported by complete records for your entity during review.",
  },
  {
    question: "What documents are required for Section-8 strike off?",
    answer: "Required documents include board resolution, affidavits, indemnity bonds, latest financials, and assets-liabilities statement. aroraankitandassociates reviews records, prepares a tailored checklist, and ensures each attachment matches ROC requirements for your case before submission and approval stages.",
  },
  {
    question: "Can we apply if there is pending litigation?",
    answer: "No. Pending litigation or regulatory proceedings must be resolved first. aroraankitandassociates verifies status, clears outstanding matters, and proceeds only when risks are closed, helping your application avoid objections during ROC review and approval stages promptly.",
  },
  {
    question: "How long does the strike-off process take?",
    answer: "Typical timelines range from several weeks to a few months, depending on ROC workload and document readiness. aroraankitandassociates shares estimates, tracks milestones, and updates you regularly until completion with clear status reports and next steps.",
  },
  {
    question: "Do bank accounts need to be closed?",
    answer: "Yes, bank accounts should be closed and proof included with the application. aroraankitandassociates helps obtain closure letters, settle balances, and verify statements before filing to avoid ROC queries and delays for your Section-8 case submission.",
  },
  {
    question: "Will we receive confirmation from ROC?",
    answer: "After approval, ROC issues strike off confirmation and publishes notice in the official gazette. aroraankitandassociates shares acknowledgments, a final compliance summary, and archival guidance for your records and future reference needs and closures documentation set.",
  },
  {
    question: "Are penalties applicable for non-compliance?",
    answer: "Yes, penalties can apply for late or incomplete filings. aroraankitandassociates runs compliance checks, corrects gaps, and ensures accurate submissions to reduce rejection risk during ROC review and approval for your Section-8 company case always carefully.",
  },
  {
    question: "Can a struck-off company be revived?",
    answer: "Revival is possible only under specific legal conditions via tribunal or court procedures. aroraankitandassociates evaluates eligibility, explains risks, and guides restoration steps if required after strike off with proper documentation and timely filing support available.",
  },
  {
    question: "How do we start the strike-off process?",
    answer: "Start by sharing entity details, last filings, financial statements, and bank status. aroraankitandassociates reviews compliance, prepares a checklist, and schedules resolutions with timelines and coordinator support for your strike off journey from start to finish.",
  },
];

function StrikeOffSection8() {
  return (
    <>
      <SimplePage
        title="Strike off Section-8 Company"
        description="Navigate the strike off process for your Section-8 company with expert guidance on eligibility, documentation, and compliance. We help you close your nonprofit entity smoothly and in line with MCA requirements."
        points={[
          {
            title: "Advantages",
            items: advantages,
          },
          {
            title: "Minimum Requirements",
            items: requirements,
          },
        ]}
        faqs={faqs}
      >
        <section className="rounded-3xl bg-white p-8 shadow-xl space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Introduction</h2>
            <p className="mt-3 text-base text-slate-800">
              A Section-8 company exists for nonprofit objectives and applies its income to its mission. Strike off is
              a formal closure route under MCA when the company is inactive and compliant, resulting in removal from
              the ROC register after due process.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Eligibility to Strike Off</h2>
            <ol className="mt-5 space-y-4 list-decimal pl-6">
              {[
                "The company did not commence operations within one year of incorporation",
                "The company has been inactive for two consecutive financial years and has not applied for dormant status under Section 455",
                "The company’s objectives have changed, and achieving the revised objectives has become impractical",
              ].map((item) => (
                <li key={item} className="text-base text-slate-700">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Advantages of Strike Off</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                "Fast closure for inactive, no‑creditor companies; with creditors, a prior notice period is required before applying",
                "Low government cost for filing the strike‑off application with ROC",
                "No routine investigation into directors’ conduct after strike off, unless the company is later revived for liquidation",
                "Once dissolved, there is no requirement to file annual returns and accounts with ROC",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-slate-900">{step}</h3>
                  <p className="mt-2 text-sm text-slate-800">
                    We structure the closure to meet MCA requirements and avoid future compliance issues.
                  </p>
                </div>
              ))}
            </div>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-slate-900">Types of Strike Off</h2>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">Strike off by ROC</h3>
                <p className="mt-2 text-sm text-slate-800">
                  ROC can issue Form STK-1 to the company and directors, indicating proposed removal and seeking
                  representations or documents within the prescribed period, usually 30 days from the notice date.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">Strike off by Company</h3>
                <p className="mt-2 text-sm text-slate-800">
                  After completing obligations, the company files Form STK-2 with ROC. A special resolution backed
                  by at least 75% member approval is required before submitting the application and attachments.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900">Documents Required</h2>
            <ol className="mt-5 space-y-4 list-decimal pl-6">
              {[
                "Certified true copy of the special resolution with meeting notice and explanatory statement",
                "Memorandum of Association (MOA)",
                "Articles of Association (AOA)",
                "Copy of the board resolution approving strike off",
                "Certified copy of resolution approving any related conversion, with meeting notice and explanatory statement",
                "Compliance certificate from CA/CS/CWA as applicable",
                "Statement of assets and liabilities within 30 days, verified by the auditor",
                "Registered valuer report on market value of assets",
                "Financial statements, directors’ reports, annual returns, and audit reports for last two financial years (or one year if applicable)",
                "Power of attorney from each creditor, if any",
                "Director declaration confirming regional director conditions (if applicable) are met",
              ].map((doc) => (
                <li key={doc} className="text-base text-slate-700">
                  {doc}
                </li>
              ))}
            </ol>
          </div>


          <div>
            <h2 className="text-3xl font-bold text-slate-900">Procedure Overview</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {[
                "Hold board meeting and general meeting to approve surrender and strike off proposal",
                "Call a special general meeting and pass the resolution to initiate closure",
                "Within 30 days of EGM approval, file MGT-14 with required papers, DSC, and fees",
                "Prepare and submit INC-18 to the Regional Director with documentation and conversion fees",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-base font-semibold text-slate-900">{step}</p>
                  <p className="mt-2 text-sm text-slate-800">We coordinate documentation and filings at every step.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SimplePage>
    </>
  );
}

export default StrikeOffSection8;
