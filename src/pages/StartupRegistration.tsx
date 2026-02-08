import SimplePage from "./SimplePage";

const advantages = [
  "Limited liability for founders",
  "Stronger brand image and market credibility",
  "Easier access to capital and funding",
  "Tax benefits and incentives (subject to approval)",
  "Boosts employment and growth",
];

const eligibility = [
  "Private limited company or LLP",
  "Startup status valid for first 10 years",
  "Turnover not exceeding Rs. 100 crore in any year",
  "Approval from DPIIT",
  "Patent or trademark support where applicable",
  "Funding disclosures as per SEBI requirements",
];

const documents = [
  "Registration certificate of the startup",
  "Details of all directors",
  "Proof of concept (pitch deck, website link, or video)",
  "Patent and trademark details (if any)",
  "PAN number",
];

function StartupRegistration() {
  return (
    <SimplePage
      title="Start-up Registration in Delhi NCR"
      keywords="Startup Registration in Delhi NCR, Startup India Registration, DPIIT Startup Recognition, Startup Registration in Delhi NCR"
      description="Start-up Registration in Delhi NCR and Delhi NCR with Arora Ankit And Associates. We help you complete DPIIT recognition, document checks, and compliance steps for a smooth Startup India registration."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Eligibility Criteria",
          items: eligibility,
        },
      ]}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">     

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Start-up Registration in Delhi NCR</h2>
          <p className="mt-3 text-base text-slate-800">
            A start-up is a young company founded by one or more entrepreneurs to develop a product or service and
            bring it to market. Under income tax rules, a start-up can be a company or LLP engaged in innovation,
            development, deployment, or commercialization of new products or services.
          </p>
          <p className="mt-3 text-base text-slate-800">
            If you have an idea and plan to start a business in Delhi NCR, you need to follow the required procedure
            to register your company. Arora Ankit And Associates helps founders complete Startup India recognition
            and documentation without confusion.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why register a startup in Delhi NCR?</h3>
          <p className="mt-3 text-base text-slate-800">
            Jaipur, also called the Pink City, is the largest city in Rajasthan and one of the most populous cities
            in India. The business ecosystem continues to grow, which makes Jaipur a promising place for new
            founders to build and scale startups.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Eligibility Criteria for Startup Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            {documents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Steps for Startup Company Registration</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Incorporate the business as a private limited company, LLP, or partnership firm.</li>
            <li>Register under the Startup India scheme.</li>
            <li>Fill the required details and upload documents in PDF format.</li>
            <li>
              For tax exemption, apply for Inter-Ministerial Board certification (if applicable).
            </li>
            <li>
              Self-certify that you meet the eligibility conditions such as entity type, incorporation timeline,
              turnover limit, innovation focus, and not being a split or reconstruction of an existing business.
            </li>
            <li>
              Receive the recognition number after verification of the uploaded documents.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Startup Registration</h3>
          <ol className="mt-5 space-y-3 list-decimal pl-6 text-base text-slate-700">
            <li>Limits personal liability and enables tax deductions.</li>
            <li>Enhances brand image, reputation, and perception.</li>
            <li>Improves fundraising ability and access to debt.</li>
            <li>Boosts employment and encourages innovation.</li>
          </ol>
          <p className="mt-3 text-base text-slate-800">
            It is advisable to register your startup to access available benefits and scale confidently.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default StartupRegistration;
