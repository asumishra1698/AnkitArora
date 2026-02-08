import SimplePage from "./SimplePage";

const advantages = [
  "Ensure compliance with Income Tax Act requirements",
  "Reduce risk of penalties, notices, and disallowances",
  "Improve accuracy of tax computation and reporting",
  "Strengthen documentation and audit trail",
  "Gain clarity on deductions, exemptions, and limits",
];

const requirements = [
  "Turnover or receipts cross prescribed limits",
  "Books of accounts maintained and reconciled",
  "Tax audit report in Form 3CD",
  "Financial statements and schedules ready",
  "Supporting documents for expenses and income",
];

const faqs = [
  {
    question: "Who is required to get a tax audit?",
    answer:
      "Tax audit applies when turnover or gross receipts exceed the prescribed limits under the Income Tax Act, or when certain presumptive taxation conditions are not met. Arora Ankit And Associates evaluates your case and confirms applicability before the Tax Audit Service starts.",
  },
  {
    question: "What is included in a tax audit report?",
    answer:
      "The report includes Form 3CA/3CB and Form 3CD, covering financial statements, tax clauses, compliance disclosures, and key reconciliations. Arora Ankit And Associates compiles and verifies the necessary schedules and disclosures as part of the Best Tax Audit Service.",
  },
  {
    question: "What documents do you need for tax audit?",
    answer:
      "Arora Ankit And Associates requires financial statements, ledger extracts, bank statements, invoices, expense proofs, fixed asset register, and tax computation details. Arora Ankit And Associates shares a checklist and helps organize everything.",
  },
  {
    question: "What is the due date for tax audit filing?",
    answer:
      "The due date depends on the assessment year and statutory notifications. Arora Ankit And Associates tracks timelines and ensures the audit report and ITR are filed within the applicable due date.",
  },
  {
    question: "Can you handle GST and TDS reconciliations for audit?",
    answer:
      "Yes. Arora Ankit And Associates reconciles GST returns, TDS statements, and books of accounts to ensure disclosures are accurate and consistent across filings.",
  },
  {
    question: "What happens if tax audit is delayed?",
    answer:
      "Delays can lead to penalties and interest. Arora Ankit And Associates prioritizes readiness, coordinates data collection early, and completes the report within timelines.",
  },
  {
    question: "Do you assist with notices after tax audit?",
    answer:
      "Yes. Arora Ankit And Associates supports responses to notices, clarifications on audit observations, and any required follow-up submissions.",
  },
  {
    question: "How long does a tax audit take?",
    answer:
      "Timelines depend on data readiness and transaction volume. Typically, Arora Ankit And Associates completes the audit in 1-3 weeks once full documentation is available.",
  },
  {
    question: "Can you audit new businesses?",
    answer:
      "Yes. Arora Ankit And Associates audits new entities that cross thresholds or require audit due to their tax regime. Arora Ankit And Associates also helps set up compliant accounting practices.",
  },
  {
    question: "How do we start the tax audit process?",
    answer:
      "Share your basic business details and previous filings. Arora Ankit And Associates provides a checklist, assigns a coordinator, and schedules a kickoff call to begin the Tax Audit Service in Delhi NCR or India.",
  },
];

function TaxAudit() {
  return (
    <>
      <SimplePage
        title="Tax Audit Service"
        description="Get Tax Audit Service in Delhi NCR and across India with Arora Ankit And Associates. We deliver best-in-class Tax Audit Service support for Form 3CD compliance, reconciliations, documentation, and timely filing."
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
        <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tax Audit Service Overview</h2>
            <p className="mt-3 text-base text-slate-800">
              Tax audit is a statutory review of books of accounts under the Income Tax Act. Arora Ankit And
              Associates provides Tax Audit Service support in Delhi NCR and India, validating records,
              reconciliations, and Form 3CD disclosures so your ITR is accurate and filed on time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Objectives of Tax Audit</h2>
            <p className="mt-3 text-base text-slate-800">
              A tax audit is carried out with clear objectives to strengthen reporting, compliance, and accuracy.
              Our Tax Audit Service focuses on transparent disclosures and audit-ready documentation.
            </p>
            <ul className="mt-5 space-y-4 list-disc pl-6">
              {[
                "Confirm proper maintenance and accuracy of tax accounts, with auditor verification",
                "Report key tax matters such as variances, compliance with income tax provisions, and major adjustments",
                "Document observations or discrepancies identified after a systematic review of records",
                "Support tax authorities in validating the correctness of income tax returns filed by the business",
                "Verify total income and substantiate deduction and exemption claims",
              ].map((item) => (
                <li key={item} className="text-base text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tax Audit Applicability</h2>
            <p className="mt-3 text-base text-slate-800">
              The Best Tax Audit Service starts with determining applicability under Section 44AB and related
              presumptive taxation rules.
            </p>
            <ol className="mt-5 space-y-4 list-decimal pl-6">
              {[
                "Businesses or professionals crossing prescribed turnover or gross receipts thresholds",
                "Cases where presumptive taxation is opted out or conditions are not met",
                "Entities requiring audit under other laws that still need Form 3CD disclosures",
              ].map((item) => (
                <li key={item} className="text-base text-slate-700">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Mandatory Tax Audit Thresholds</h2>
            <p className="mt-3 text-base text-slate-800">
              The table below summarizes when tax audit under Section 44AB becomes mandatory, based on category and
              threshold conditions. Arora Ankit And Associates provides Tax Audit Service in Delhi NCR and India
              and can review your case to confirm applicability.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Condition</th>
                    <th className="px-4 py-3">Tax Audit Threshold</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Not opting for presumptive taxation</td>
                    <td className="px-4 py-3">Sales, gross receipts, or turnover exceed INR 1 crore in the FY</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Presumptive taxation under Sections 44AE, 44BB, or 44BBB</td>
                    <td className="px-4 py-3">Declared profits are below the specified presumptive limits</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Presumptive taxation under Section 44AD</td>
                    <td className="px-4 py-3">
                      Declared income is below presumptive limits and total income exceeds basic exemption
                      threshold
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">
                      Opted out of Section 44AD within the 5-year lock-in period
                    </td>
                    <td className="px-4 py-3">
                      Total income exceeds basic exemption threshold in any of the next 5 consecutive tax years
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business</td>
                    <td className="px-4 py-3">Presumptive taxation under Section 44AD applied</td>
                    <td className="px-4 py-3">Audit not applicable if turnover is below INR 2 crore in the FY</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Profession</td>
                    <td className="px-4 py-3">Practicing a profession</td>
                    <td className="px-4 py-3">Gross receipts exceed INR 50 lakh in the FY</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Profession</td>
                    <td className="px-4 py-3">Presumptive taxation under Section 44ADA</td>
                    <td className="px-4 py-3">
                      Declared profits are below presumptive limits and total income exceeds basic exemption
                      threshold
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business loss</td>
                    <td className="px-4 py-3">Business loss without presumptive taxation</td>
                    <td className="px-4 py-3">Sales, gross receipts, or turnover exceed INR 1 crore</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business loss</td>
                    <td className="px-4 py-3">
                      Total income exceeds basic exemption threshold and business loss without presumptive taxation
                    </td>
                    <td className="px-4 py-3">
                      Audit required when sales, gross receipts, or turnover exceed INR 1 crore
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business loss</td>
                    <td className="px-4 py-3">
                      Presumptive taxation under Section 44AD with loss and income below basic exemption threshold
                    </td>
                    <td className="px-4 py-3">Tax audit not applicable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-slate-900">Business loss</td>
                    <td className="px-4 py-3">
                      Presumptive taxation under Section 44AD with loss and income above basic exemption threshold
                    </td>
                    <td className="px-4 py-3">
                      Declared income below presumptive limits and total income exceeds basic exemption threshold
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Tax Audit Report Filing Process</h2>
            <p className="mt-3 text-base text-slate-800">
              Follow these steps to complete Tax Audit Service reporting on the income tax portal.
            </p>
            <ol className="mt-5 space-y-4 list-decimal pl-6">
              {[
                "The appointed Chartered Accountant uploads the tax audit report online using valid login credentials.",
                "The taxpayer must add the appointed CA details on the income tax portal.",
                "After upload, the taxpayer must accept or reject the audit report on the portal.",
                "If rejected, the process must be repeated until the report is accepted.",
                "The report must be filed by the statutory due date: 30 September for most taxpayers and 30 November for taxpayers with international transactions, subject to notifications.",
              ].map((step) => (
                <li key={step} className="text-base text-slate-700">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Rules for Auditing Tax</h2>
            <ul className="mt-5 space-y-4 list-disc pl-6">
              {[
                "If a taxpayer runs multiple businesses and the combined turnover exceeds INR 1 crore, tax audit is mandatory.",
                "If a taxpayer practices multiple professions and combined gross receipts exceed INR 50 lakh, tax audit is mandatory.",
                "If a taxpayer runs a business and a profession, audit applies separately to each. Business audit is required if business turnover exceeds INR 1 crore; profession audit is required if professional receipts exceed INR 50 lakh.",
                "Sale of fixed assets like vehicles or immovable property is excluded from turnover or gross receipts for audit threshold purposes.",
                "Tax audit reports are generally not reversible, except when accounts are revised due to changes in law or interpretation after approval.",
              ].map((rule) => (
                <li key={rule} className="text-base text-slate-700">
                  {rule}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Forms Required for Tax Audit</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-800">
                <li>Form 3CB: Tax audit report under Section 44AB.</li>
                <li>Form 3CD: Detailed disclosures and reporting format for Form 3CB.</li>
                <li>Form 3CA + Form 3CD: Used when accounts are audited under a law other than Section 44AB.</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Penalty for Non-Compliance</h2>
            <p className="mt-3 text-base text-slate-800">
              If a taxpayer who is required to undergo tax audit fails to do so, the penalty can be the lower of the
              following amounts:
            </p>
            <ul className="mt-5 space-y-2 list-disc pl-6 text-base text-slate-700">
              {[
                "0.5% of total sales",
                "0.5% of turnover",
                "0.5% of gross receipts",
                "INR 1,50,000",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Penalty Waiver Conditions</h2>
            <p className="mt-3 text-base text-slate-800">
              Penalty may be waived when the taxpayer demonstrates a reasonable cause for non-compliance, such as:
            </p>
            <ul className="mt-5 space-y-2 list-disc pl-6 text-base text-slate-700">
              {[
                "Delay due to the resignation or withdrawal of the tax auditor",
                "Delay due to loss or disability of the partner responsible for accounts",
                "Delay due to labor disruptions such as strikes or lock-outs",
                "Loss of accounts due to theft, fire, or events beyond the taxpayer's control",
                "Natural disasters affecting business operations or records",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Timely Tax Audit Compliance</h2>
            <p className="mt-3 text-base text-slate-800">
              Choosing a Tax Audit Service in India helps reduce risks and improves reporting quality across
              financial statements and tax filings.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                "Early identification of disallowances and tax risks",
                "Accurate reporting of depreciation, expenses, and related party transactions",
                "Better readiness for notices or scrutiny cases",
                "Cleaner financial statements for lenders and stakeholders",
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="text-base font-semibold text-slate-900">{step}</h3>
                  <p className="mt-2 text-sm text-slate-800">
                    Arora Ankit And Associates ensures accurate reporting with full documentation support.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Key Tax Audit Coverage Areas</h2>
            <p className="mt-3 text-base text-slate-800">
              Our Tax Audit Service coverage spans statutory registers, reconciliations, and tax clause disclosures.
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">Books of Accounts Review</h3>
                <p className="mt-2 text-sm text-slate-800">
                  Arora Ankit And Associates reviews ledgers, vouchers, bank reconciliations, and statutory registers to validate accuracy.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">Tax Clause Disclosures</h3>
                <p className="mt-2 text-sm text-slate-800">
                  Arora Ankit And Associates prepares Form 3CD clauses on expenses, depreciation, compliance, and related party transactions.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-base font-semibold text-slate-900">Cross-Return Reconciliations</h3>
                <p className="mt-2 text-sm text-slate-800">
                  Arora Ankit And Associates reconciles GST returns, TDS statements, and financials for consistent reporting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SimplePage>
    </>
  );
}

export default TaxAudit;