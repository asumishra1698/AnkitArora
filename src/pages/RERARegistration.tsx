import SimplePage from "./SimplePage";

const advantages = [
  "Standardized carpet area",
  "Right to information",
  "Projects cannot be delayed",
  "Grievances addressed quickly",
  "Builders held responsible for default",
];

const eligibility = [
  "Commercial or residential land over 500 sq m",
  "Real estate projects with more than 8 apartments",
  "Agents engaged in selling or purchasing properties",
];

const faqs = [
  {
    question: "Who must register under RERA?",
    answer:
      "RERA registration applies to promoters, real estate agents, and projects that cross the statutory thresholds. Projects over 500 sq m or more than 8 units must register. Ongoing projects without a completion certificate also need registration within the prescribed time. Arora Ankit And Associates assists Delhi NCR builders and agents with eligibility checks and filings.",
  },
  {
    question: "How long does RERA registration take?",
    answer:
      "Authorities generally issue a registration number within 30 days of receiving a complete application, subject to state-specific timelines. Delays often come from missing documents or incorrect project details. Arora Ankit And Associates prepares the file, validates the documents, and follows up with the authority for Delhi NCR projects.",
  },
  {
    question: "What is the validity of RERA registration?",
    answer:
      "RERA registration is valid for the period declared by the promoter for project completion. It can be extended in limited circumstances such as force majeure events. Extensions are typically capped at one year. Arora Ankit And Associates helps Delhi NCR promoters apply for extensions and maintain compliance.",
  },
  {
    question: "Is RERA registration required for real estate agents?",
    answer:
      "Yes. Real estate agents must register under RERA to facilitate sale or purchase of properties in registered projects. Without registration, agents may face penalties and restrictions. Arora Ankit And Associates handles agent registration filings and renewals for Delhi NCR agents.",
  },
  {
    question: "What documents are needed for RERA registration?",
    answer:
      "Documents typically include promoter PAN, project details, sanctioned plans, title documents, financial statements, and disclosures of key professionals. Requirements vary by state. Arora Ankit And Associates provides a checklist and prepares the complete document set for Delhi NCR applications.",
  },
];

function RERARegistration() {
  return (
    <SimplePage
      title="RERA Registration in India"
      keywords="RERA Registration, RERA Registration in Delhi NCR, Real Estate Regulatory Authority, RERA Agent Registration"
      description="Get RERA Registration in India with Arora Ankit And Associates in Delhi NCR. We help promoters and agents with eligibility checks, documentation, and filing under the RERA Act, 2016."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Eligibility for Registration",
          items: eligibility,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">       

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Introduction</h2>
          <p className="mt-3 text-base text-slate-800">
            The Real Estate (Regulation and Development) Act, 2016 came into effect on May 1, 2017 to regulate the
            real estate sector in India. RERA shapes the activities of builders and promoters, and empowers buyers
            through transparency and accountability. Promoters must register projects to market, sell, advertise, or
            book units under the Act.
          </p>
          <p className="mt-3 text-base text-slate-800">
            RERA registration establishes a transparent contract framework between buyers and sellers. It aims to
            reduce delays, prevent fraud, and strengthen accountability. Arora Ankit And Associates supports Delhi
            NCR promoters and agents with end-to-end RERA compliance.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Salient Features of RERA</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>More security for first-time home buyers</li>
            <li>Better assurance of timely possession</li>
            <li>Stricter action against fraud or false promises</li>
            <li>Digitization of records to reduce data loss</li>
            <li>Quick remedies for disputes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Who needs to apply for RERA Registration?</h3>
          <p className="mt-3 text-base text-slate-800">
            RERA registration applies to real estate agents, promoters, and projects based on specific thresholds.
            This includes all commercial and residential projects above 500 sq m or more than 8 units, local
            promoters with small projects, and ongoing projects without completion certificates (application within
            3 months).
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Documents Required for RERA Registration</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Builder or real estate agent PAN card</li>
            <li>Apartment details including floors, carpet area, and parking</li>
            <li>Declaration and evidence of legal possession of land</li>
            <li>Balance sheet and ITR for the preceding 3 years</li>
            <li>Property title details and rights or mortgage information</li>
            <li>Project location, sanctioned plan, and layout plan</li>
            <li>Ownership documents such as allotment letter or sale agreement</li>
            <li>Details of engineers, architects, and other parties</li>
            <li>Owner consent letter with supporting documents if builder is not the landowner</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Procedure for Registration of Project</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>
              Creation of user ID: Registration starts with creation of the user ID by the promoter on the state
              RERA web portal (for example, Rajasthan RERA: http://rera.rajasthan.gov.in).
            </li>
            <li>
              Profile creation and document upload: The promoter profile is created and project details such as
              documents, maps, and plans are uploaded.
            </li>
            <li>
              Submission of online application and fee payment: The online application is submitted after payment
              of the prescribed fee.
            </li>
            <li>
              Issuance of registration number: As prescribed under Section 5 of the Act, the authority grants the
              registration number within 30 days of submitting the complete application. The number is conveyed by
              email and SMS.
            </li>
            <li>
              Submission of hard copy: A hard copy of the online application along with promoter and project
              documents is submitted to the office of the Registrar.
            </li>
            <li>
              Issuance of the certificate: After submission of the hard copy, the certificate of registration is
              issued by the authorized official.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Procedure for Registration of Agent</h3>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>
              Creation of user ID: Registration starts with creation of the user ID by the agent on the state RERA
              web portal (for example, Rajasthan RERA: http://rera.rajasthan.gov.in).
            </li>
            <li>
              Details upload: After agent profile creation, details and documents are uploaded by the applicant.
            </li>
            <li>
              Online submission of application with fee: The application is submitted online along with the
              prescribed registration fee paid through the online mode.
            </li>
            <li>
              Issuance of registration number: As prescribed under Section 5 of the Act, the authority issues the
              registration number within 30 days of submitting the complete application. The number is conveyed by
              email and SMS.
            </li>
            <li>
              Submission of hard copy: A hard copy of the online application along with agent documents is submitted
              to the office of the Registrar.
            </li>
            <li>
              Issuance of the certificate: After submission of the hard copy, the certificate of registration is
              issued by the authorized official.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">RERA Registration Fees for Real Estate Agents</h3>
          <p className="mt-3 text-base text-slate-800">
            The fee for RERA registration differs from state to state. However, the estimation for the same is as
            follows:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Rs. 10,000 for individuals or proprietorship firms</li>
            <li>Rs. 50,000 for partnership firms, LLPs, companies, or societies</li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            Note: The registration fee for RERA is payable during application via NEFT, RTGS, or other digital modes
            as prescribed by the state authority.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Validity of RERA Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            RERA registration remains valid for the period declared by the promoter for project completion. It may
            be extended for force majeure events such as flood, war, drought, cyclone, earthquake, or other natural
            calamities. The authority can extend the validity by up to one year in justified cases.
          </p>
        </div>
      </section>
    </SimplePage>
  );
}

export default RERARegistration;
