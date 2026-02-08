import { useMemo } from "react";

export type NavLink = {
  label: string;
  to: string;
  children?: Array<{ label: string; to: string }>;
  dropdownSections?: Array<{
    title: string;
    links: Array<{ label: string; to: string }>;
  }>;
};

export type FooterGroup = {
  title: string;
  links: Array<{ label: string; to: string }>;
};

export type SiteData = {
  brand: {
    name: string;
    tagline: string;
    logo: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    mapUrl: string;
  };
  social: {
    facebook: string;
    linkedin: string;
    instagram: string;
  };
  navLinks: NavLink[];
  footerGroups: FooterGroup[];
};

export default function useSiteData(): SiteData {
  return useMemo(
    () => ({
      brand: {
        name: "Arora Ankit & Associates",
        tagline: "Chartered Accountants & Business Advisors",
        logo: "/LOGO.png",
      },
      contact: {
        email: "admin@aroraankitandassociates.com",
        phone: "+91-9999 241024",
        location: "Shahdara, East Delhi, Delhi, India 110092",
        mapUrl: "https://www.google.com/maps?output=embed&q=Shahdara%2C%20East%20Delhi%2C%20Delhi%2C%20India%20110092",
      },
      social: {
        facebook: "https://www.facebook.com/gonardweb",
        linkedin: "https://linkedin.com/company/gonardwebtechnologies",
        instagram: "https://instagram.com/gonardweb",
      },
      navLinks: [
        {
          label: "Start Business",
          to: "/start-business",
          dropdownSections: [
            {
              title: "Business Registration",
              links: [
                { label: "Company Registration", to: "/start-business/company-registration" },
                { label: "Private Limited Company Registration", to: "/start-business/private-limited-company-registration" },
                { label: "Public Limited Company Registration", to: "/start-business/public-limited-company-registration" },
                { label: "Limited Liability Partnership Registration", to: "/start-business/llp-registration" },
                { label: "One Person Company Registration", to: "/start-business/opc-registration" },
                { label: "Nidhi Company Registration", to: "/start-business/nidhi-company-registration" },
                { label: "Producer Company Registration", to: "/start-business/producer-company-registration" },
                { label: "Foreign Company Registration", to: "/start-business/foreign-company-registration" },
                { label: "Partnership Registration", to: "/start-business/partnership-registration" },
                { label: "Sole Proprietorship Registration", to: "/start-business/sole-proprietorship-registration" },
              ],
            },
            {
              title: "Licenses",
              links: [
                { label: "GST Registration", to: "/licenses/gst-registration" },
                { label: "FSSAI Registration", to: "/licenses/fssai-registration" },
                { label: "Import Export Code", to: "/licenses/import-export-code" },
                { label: "ISO Certification", to: "/licenses/iso-certification" },
                { label: "RERA Registration", to: "/licenses/rera-registration" },
                { label: "MSME Udyam Registration", to: "/licenses/msme-udyam" },
                { label: "Shop Act Registration", to: "/licenses/shop-act-registration" },
                { label: "Business Registration Number (BRN)", to: "/licenses/brn" },
                { label: "Startup Registration", to: "/licenses/startup-registration" },
              ],
            },
          ],
        },
        {
          label: "NGO",
          to: "/ngo",
          dropdownSections: [
            {
              title: "NGO Services",
              links: [
                { label: "NGO Registration", to: "/ngo/ngo-registration" },
                { label: "Section 8 NPon", to: "/ngo/section-8" },
                { label: "Trust Registration", to: "/ngo/trust-registration" },
                { label: "Society Registration", to: "/ngo/society-registration" },
                { label: "NGO Darpan Registration", to: "/ngo/ngo-darpan" },
                { label: "FCRA Registration", to: "/ngo/fcra-registration" },
                { label: "80G 12A Registration", to: "/ngo/80g-12a" },
                { label: "Corporate Social Responsibility", to: "/ngo/csr" },
              ],
            },
          ],
        },
        {
          label: "Trademark",
          to: "/trademark",
          dropdownSections: [
            {
              title: "Trademark",
              links: [
                { label: "Trademark Registration", to: "/trademark/registration" },
                { label: "Copyright Registration", to: "/trademark/copyright" },
                { label: "Design Registration", to: "/trademark/design" },
                { label: "Patent Registration", to: "/trademark/patent" },
              ],
            },
          ],
        },
        {
          label: "Compliances",
          to: "/compliances",
          dropdownSections: [
            {
              title: "Filing & Returns",
              links: [
                { label: "ITR Filing", to: "/compliances/itr-filing" },
                { label: "GST Return", to: "/compliances/gst-return" },
                { label: "ROC Filing", to: "/compliances/roc-filing" },
                { label: "TDS Return", to: "/compliances/tds-return" },
                { label: "XBRL Filing", to: "/compliances/xbrl-filing" },
              ],
            },
            {
              title: "Audit Assurance",
              links: [
                { label: "GST Audit", to: "/compliances/gst-audit" },
                { label: "NGO Audit", to: "/compliances/ngo-audit" },
                { label: "Tax Audit", to: "/compliances/tax-audit" },
                { label: "Stock Audit", to: "/compliances/stock-audit" },
                { label: "Statutory Audit", to: "/compliances/statutory-audit" },
                { label: "Bank Audit", to: "/compliances/bank-audit" },
              ],
            },
            {
              title: "Advisory Consultancy",
              links: [
                { label: "GST Advisory", to: "/compliances/gst-advisory" },
                { label: "Tax Planning", to: "/compliances/tax-planning" },
                { label: "Legal Secretarial", to: "/compliances/legal-secretarial" },
                { label: "Project Financing", to: "/compliances/project-financing" },
                { label: "NRI Taxation", to: "/compliances/nri-taxation" },
                { label: "Strike off Section-8 Company", to: "/compliances/strike-off-section-8" },
              ],
            },
          ],
        },
        {
          label: "Blog",
          to: "/blog",
        },
        {
          label: "About",
          to: "/about",
        },
        {
          label: "Contact",
          to: "/contact",
        },
      ],
      footerGroups: [
        {
          title: "Business Registration",
          links: [
            { label: "Private Limited Company Registration", to: "/start-business/private-limited-company-registration" },
            { label: "Public Limited Company Registration", to: "/start-business/public-limited-company-registration" },
            { label: "One Person Company Registration", to: "/start-business/opc-registration" },
            { label: "Company Registration", to: "/start-business/company-registration" },
            { label: "Foreign Company Registration", to: "/start-business/foreign-company-registration" },
          ],
        },
        {
          title: "Licenses",
          links: [
            { label: "GST Registration", to: "/licenses/gst-registration" },
            { label: "FSSAI Registration", to: "/licenses/fssai-registration" },
            { label: "MSME Udyam Registration", to: "/licenses/msme-udyam" },
            { label: "ISO Certification", to: "/licenses/iso-certification" },
            { label: "Business Registration Number", to: "/licenses/brn" },
          ],
        },
        {
          title: "Audit & Tax",
          links: [
            { label: "NGO Audit", to: "/compliances/ngo-audit" },
            { label: "NRI Taxation", to: "/compliances/nri-taxation" },
            { label: "TDS Return", to: "/compliances/tds-return" },
            { label: "Tax Audit", to: "/compliances/tax-audit" },
            { label: "Statutory Audit", to: "/compliances/statutory-audit" },
          ],
        },
      ],
    }),
    [],
  );
}
