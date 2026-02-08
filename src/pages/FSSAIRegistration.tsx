import SimplePage from "./SimplePage";

const advantages = [
  "Consumer awareness and trust",
  "Use of the FSSAI logo",
  "Food safety compliance",
];

const licenseTypes = [
  "Basic FSSAI Registration",
  "FSSAI State License",
  "Central Registration",
];

const faqs = [
  {
    question: "Who needs FSSAI registration or license?",
    answer:
      "Food Business Operators who manufacture, process, store, distribute, or sell food need FSSAI registration or license based on turnover and capacity. Small businesses below Rs. 12 lakh turnover need Basic Registration, while higher turnover or capacity requires State or Central License. Arora Ankit And Associates evaluates your activity and selects the correct license for Delhi NCR businesses.",
  },
  {
    question: "How long does FSSAI registration take?",
    answer:
      "Timelines depend on license type and document readiness. Basic Registration is quicker, while State and Central licenses can take longer due to scrutiny and possible inspection. With complete documents, the process can move within a few weeks. Arora Ankit And Associates prepares filings, follows up, and helps avoid resubmissions for Delhi NCR clients.",
  },
  {
    question: "What is the difference between Basic, State, and Central licenses?",
    answer:
      "Basic Registration is for small FBOs with turnover below Rs. 12 lakh. State License applies to turnover between Rs. 12 lakh and Rs. 20 crore, and Central License is for large businesses, importers, exporters, or those with multi-state operations. Arora Ankit And Associates maps your turnover and capacity to the correct license category.",
  },
  {
    question: "Is FSSAI mandatory for home-based food businesses?",
    answer:
      "Yes. Home-based food businesses are also FBOs and typically require Basic Registration if turnover is within limits. The registration builds customer trust and ensures compliance with food safety standards. Arora Ankit And Associates guides Delhi NCR home kitchens and cloud brands through the correct documentation and registration steps.",
  },
  {
    question: "What happens after the license is issued?",
    answer:
      "Once issued, the FSSAI registration number must be displayed at the place of business and printed on food packaging where applicable. Businesses must follow hygiene and safety standards and renew the license before expiry. Arora Ankit And Associates provides compliance reminders and renewal support for Delhi NCR food businesses.",
  },
];

function FSSAIRegistration() {
  return (
    <SimplePage
      title="Food License Registration"
      keywords="FSSAI Registration, Food License Registration, FSSAI License in Delhi NCR, FSSAI Basic Registration, FSSAI State License, FSSAI Central License"
      description="Get Food License Registration with Arora Ankit And Associates in Delhi NCR. We help you identify the correct FSSAI license, prepare documents, file applications, and stay compliant with food safety rules."
      points={[
        {
          title: "Advantages",
          items: advantages,
        },
        {
          title: "Types of Food License",
          items: licenseTypes,
        },
      ]}
      faqs={faqs}
    >
      <section className="rounded-3xl bg-white p-6 shadow-xl space-y-10 sm:p-8">      

        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Introduction</h2>
          <p className="mt-3 text-base text-slate-800">
            The Food Safety and Standards Authority of India (FSSAI) was formed under the Food Safety and Standards
            Act, 2006 with two primary objectives: to consolidate food-related laws under one authority and to lay
            down science-based standards for food production, storage, distribution, import, and sale. FSSAI acts as
            the single reference body for food safety rules and reports to the Ministry of Health and Family Welfare,
            Government of India.
          </p>
          <p className="mt-3 text-base text-slate-800">
            FSSAI consolidated all food-related acts and made it mandatory for food businesses to comply with the
            Food Safety and Standards Act. Arora Ankit And Associates supports Delhi NCR food businesses with timely
            FSSAI registration and documentation.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Who Needs FSSAI Registration Certificate</h3>
          <p className="mt-3 text-base text-slate-800">
            FSSAI registration is required for Food Business Operators with annual turnover above Rs. 12 lakh,
            including food manufacturers, retailers, vendors, stall holders, and medium or large food industries.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Food business operators producing or selling food items</li>
            <li>Food retailers, itinerant vendors, or hawkers</li>
            <li>Temporary or permanent food stall holders</li>
            <li>Medium and large food industries</li>
            <li>FBOs with annual turnover above Rs. 12 lakh</li>
          </ul>
          <p className="mt-4 text-base text-slate-800">
            Registration is also mandatory based on capacity, such as daily production above 100 kg or litres, milk
            handling above 500 litres per day, or slaughtering capacity above 2 large animals, 10 small animals, or
            50 poultry birds. Food businesses with turnover below Rs. 12 lakh generally do not require a license.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Benefits of Food License Registration</h3>
          <p className="mt-3 text-base text-slate-800">
            After registration, a 14-digit FSSAI number is allotted and printed on food products. FSSAI registration
            improves adherence to food safety regulations and builds customer trust.
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Consumer awareness and confidence in food safety</li>
            <li>Brand image and marketing advantage with FSSAI number</li>
            <li>Business expansion credibility for funding and partnerships</li>
            <li>Legal protection against penalties and misuse of brand name</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Types of FSSAI Registration/License</h3>
          <p className="mt-3 text-base text-slate-800">
            FSSAI registration depends on turnover and scale. Basic Registration applies to small businesses with
            turnover below Rs. 12 lakh. State License applies to turnover between Rs. 12 lakh and Rs. 20 crore.
            Central License applies to large businesses with turnover above Rs. 20 crore, importers, exporters, or
            businesses supplying government departments.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Eligibility for an FSSAI Central License</h3>
          <p className="mt-3 text-base text-slate-800">
            Central License is required for large manufacturing units, importers, exporters, and businesses with
            large capacity or multi-state operations. Key eligibility conditions include:
          </p>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Dairy units handling above 50,000 litres per day or 2,500 MT per annum</li>
            <li>Vegetable oil units processing above 2 MT per day</li>
            <li>Slaughtering units above 50 large animals, 150 small animals, or 1,000 poultry birds per day</li>
            <li>Meat processing units above 500 kg per day or 150 MT per annum</li>
            <li>Food processing units above 2 MT per day (excluding certain milling units)</li>
            <li>Proprietary foods, 100% export oriented units, and all importers</li>
            <li>Large storage, wholesale, retail, distributor, supplier, and caterer thresholds</li>
            <li>Premises in Central Government establishments, airports, seaports, and defense areas</li>
          </ul>
          <p className="mt-3 text-base text-slate-800">
            If an FBO has premises in two or more states, a Central License is required for the head office and a
            license or registration for each unit.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Eligibility for State License</h3>
          <p className="mt-3 text-base text-slate-800">
            State License applies to medium-sized businesses within specified capacity and turnover limits. Typical
            criteria include dairy units between 501 and 50,000 LPD, vegetable oil units up to 2 MT/day, and
            slaughtering capacities below the Central License thresholds. It also covers restaurants, caterers,
            distributors, and transporters under specified turnover limits.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Details and Documents Required</h3>
          <p className="mt-3 text-base text-slate-800">
            Documents commonly required include rent agreement, entity proof, list of food products, and identity
            photographs. Arora Ankit And Associates prepares the document set and files on the appropriate portal
            for Delhi NCR businesses.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">FSSAI Registration Process</h3>
          <p className="mt-3 text-base text-slate-800">
            The whole process of food license registration is divided into four simple steps as follows:
          </p>
          <ol className="mt-5 space-y-4 list-decimal pl-6 text-base text-slate-700">
            <li>
              Filling of Application Form: Application filing is the first step for food license registration in
              India. Lodging of applications with the food and safety department in Form A is to be done by the
              applicant.
            </li>
            <li>
              Application acceptance or rejection: The application may get accepted or rejected by the Department.
              The acceptance or rejection of the application is conveyed to the applicant within 7 days from the
              date of application submission.
            </li>
            <li>
              Allotment of Registration Certificate: Upon the application acceptance by the department, the
              Certificate of Registration bearing the registration number and photo of the applicant is allotted to
              the applicant.
            </li>
            <li>
              Presentation of Registration Certificate: The FBO must display the Certificate of Registration as
              granted by the Department at the place of business.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">Noteworthy Points</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-base text-slate-700">
            <li>Sections 31(1) and 31(2) of the FSS Act, 2006 govern registration</li>
            <li>Food Safety and Standards Regulations, 2011 guide licensing and registration</li>
            <li>FSSAI provides an online licensing and registration system for FBOs</li>
            <li>Schedule 4 of the regulations defines sanitary and hygienic inspection criteria</li>
          </ul>
        </div>
      </section>
    </SimplePage>
  );
}

export default FSSAIRegistration;
