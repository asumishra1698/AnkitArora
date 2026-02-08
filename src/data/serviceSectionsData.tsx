import { type ServiceCard } from "../components/ServiceSection";

export const businessServices: ServiceCard[] = [
  {
    title: "Foreign Company Registration",
    description: "Set up a foreign company in India with structured filings and approvals.",
    to: "/start-business/foreign-company-registration",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="20" width="44" height="30" rx="4" fill="#2EAD4A" />
        <path
          d="M24 20V16C24 13.8 25.8 12 28 12H36C38.2 12 40 13.8 40 16V20"
          stroke="#1E7F36"
          strokeWidth="3"
          fill="none"
        />
        <rect x="30" y="32" width="4" height="6" rx="1" fill="#1E7F36" />
        <line x1="10" y1="38" x2="54" y2="38" stroke="#1E7F36" strokeWidth="2" />
      </svg>

    ),
  },
  {
    title: "Private Limited Company",
    description: "Popular entity structure for startups seeking credibility and growth.",
    to: "/start-business/private-limited-company-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 7h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm2 0V5a4 4 0 118 0v2h-2V5a2 2 0 10-4 0v2H6z" />
      </svg>
    ),
  },
  {
    title: "Public Limited Company",
    description: "Suitable for businesses raising capital from the public.",
    to: "/start-business/public-limited-company-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l8 4v6c0 5.5-3.4 9.8-8 10-4.6-.2-8-4.5-8-10V6l8-4zm0 4.1L6 8.2V12c0 4.2 2.4 7.5 6 7.9 3.6-.4 6-3.7 6-7.9V8.2L12 6.1z" />
      </svg>
    ),
  },
  {
    title: "LLP Registration",
    description: "Ideal for professional firms needing flexibility and limited liability.",
    to: "/start-business/llp-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3a9 9 0 109 9 9 9 0 00-9-9zm1 4v5h4v2h-6V7z" />
      </svg>
    ),
  },
  {
    title: "Nidhi Company Registration",
    description: "Support for mutual benefit societies with member deposits and lending.",
    to: "/start-business/nidhi-company-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l4 7h-8l4-7zm-7 9h14v9H5v-9zm3 2v5h2v-5H8zm6 0v5h2v-5h-2z" />
      </svg>
    ),
  },
  {
    title: "Producer Company Registration",
    description: "Ideal for farmers and producer groups seeking a formal structure.",
    to: "/start-business/producer-company-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3l7 7-7 11-7-11 7-7zm0 3.2L8.4 9.4 12 15l3.6-5.6L12 6.2z" />
      </svg>
    ),
  },
  {
    title: "One Person Company",
    description: "Single founder setup with corporate structure and limited liability.",
    to: "/start-business/opc-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.3 0-6 1.6-6 3.5V20h12v-2.5C18 15.6 15.3 14 12 14z" />
      </svg>
    ),
  },
  {
    title: "Partnership Registration",
    description: "Simple partnership setup with clear deed drafting and filings.",
    to: "/start-business/partnership-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 12a3 3 0 110-6 3 3 0 010 6zm10 0a3 3 0 110-6 3 3 0 010 6zM3 20v-1c0-2.2 2.7-4 6-4 1.4 0 2.7.3 3.7.8-1.1.9-1.7 2-1.7 3.2V20H3zm18 0h-8v-1c0-1.2-.6-2.3-1.7-3.2 1-.5 2.3-.8 3.7-.8 3.3 0 6 1.8 6 4v1z" />
      </svg>
    ),
  },
  {
    title: "GST Registration",
    description: "GST registration for goods and services with guided threshold assessment.",
    to: "/licenses/gst-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l4 4h-3v4h-2V6H8l4-4zm-7 9h14a2 2 0 012 2v7H3v-7a2 2 0 012-2zm2 2v5h2v-5H7zm4 0v5h2v-5h-2zm4 0v5h2v-5h-2z" />
      </svg>
    ),
  },
  {
    title: "FSSAI Food License",
    description: "State or central food license registration for food businesses.",
    to: "/licenses/fssai-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M8 2h8a4 4 0 014 4v3H4V6a4 4 0 014-4zm-4 9h16v7a4 4 0 01-4 4H8a4 4 0 01-4-4v-7zm6 2v7h2v-7h-2z" />
      </svg>
    ),
  },
  {
    title: "Import Export Code (IEC)",
    description: "IEC registration for businesses planning cross-border trade.",
    to: "/licenses/import-export-code",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 7h8v2H4v8H2V9a2 2 0 012-2zm8-4l3 3-3 3V7H6V5h6V3zm8 6v8a2 2 0 01-2 2h-8v-2h8V9h2zm-8 4l-3-3 3-3v2h6v2h-6v2z" />
      </svg>
    ),
  },
  {
    title: "RERA Registrations",
    description: "RERA registration for real estate projects and agents.",
    to: "/licenses/rera-registration",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 21V9l9-6 9 6v12h-6v-6h-6v6H3zm6-8h2v-2H9v2zm4 0h2v-2h-2v2z" />
      </svg>
    ),
  },
];

export const ngoServices: ServiceCard[] = [
  {
    title: "Trust Registration",
    description:
      "Set up a charitable trust with proper deed drafting, trusteeship structure, and compliance guidance.",
    to: "/ngo/trust-registration",
    tone: "bg-amber-50",
    icon: (
      <svg className="h-6 w-6 text-amber-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 13h18v8H3v-8zm2 2v4h2v-4H5zm4 0v4h2v-4H9zm4 0v4h2v-4h-2zm4 0v4h2v-4h-2zM12 3l8 4v4H4V7l8-4z" />
      </svg>
    ),
  },
  {
    title: "Society Registration",
    description:
      "Register a society for social, cultural, or educational objectives with state-level approvals.",
    to: "/ngo/society-registration",
    tone: "bg-rose-50",
    icon: (
      <svg className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M5 11h4V7H5v4zm0 6h4v-4H5v4zm6 0h4v-4h-4v4zm0-6h4V7h-4v4zm6-4v10h2V7h-2z" />
      </svg>
    ),
  },
  {
    title: "Section-8 Company",
    description: "Incorporate a Section-8 company for nonprofit objectives with structured governance.",
    to: "/ngo/section-8",
    tone: "bg-fuchsia-50",
    icon: (
      <svg className="h-6 w-6 text-fuchsia-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4zm-1 6v5h2V8h-2zm0 7v2h2v-2h-2z" />
      </svg>
    ),
  },
  {
    title: "FCRA Registration",
    description: "Comply with FCRA norms to accept foreign contributions with end-to-end filing support.",
    to: "/ngo/fcra-registration",
    tone: "bg-emerald-50",
    icon: (
      <svg className="h-6 w-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a5 5 0 015 5v2h-2V7a3 3 0 00-6 0v2H7V7a5 5 0 015-5zm-7 9h14v9H5v-9zm6 2v5h2v-5h-2z" />
      </svg>
    ),
  },
];

export const trademarkServices: ServiceCard[] = [
  {
    title: "Trademark Registration",
    description: "Register your brand name or logo and build goodwill in the market.",
    to: "/trademark/registration",
    icon: "TM",
    number: "1",
  },
  {
    title: "Copyright Registration",
    description: "Protect creative works and establish legal ownership for your content.",
    to: "/trademark/copyright",
    icon: "C",
    number: "2",
  },
  {
    title: "Design Registration",
    description: "Safeguard product design, shape, pattern, and configuration.",
    to: "/trademark/design",
    icon: "A",
    number: "3",
  },
  {
    title: "Patent Registration",
    description: "Secure exclusive rights for inventions, processes, and innovations.",
    to: "/trademark/patent",
    icon: "P",
    number: "4",
  },
];

export const auditServices: ServiceCard[] = [
  {
    title: "ITR Filing",
    description: "Prepare and file income tax returns with accurate disclosures and supporting documents.",
    to: "/compliances/itr-filing",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zm7 1v4h4" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "ROC Filing",
    description: "Annual ROC filings, resolutions, and compliance tracking for your company.",
    to: "/compliances/roc-filing",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 7h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zm2 0V5a4 4 0 118 0v2h-2V5a2 2 0 10-4 0v2H6z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "GST Return",
    description: "Timely GST return filing with reconciliation and compliance checks.",
    to: "/compliances/gst-return",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 4h16v4H4V4zm0 6h16v10H4V10zm4 2v6h2v-6H8zm4 0v6h2v-6h-2z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "TDS Return",
    description: "Quarterly TDS return filing with error-free challans and reports.",
    to: "/compliances/tds-return",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm2 4h8v2H8V7zm0 4h8v2H8v-2zm0 4h6v2H8v-2z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "GST Audit",
    description: "Audit support for GST compliance, documentation review, and reporting.",
    to: "/compliances/gst-audit",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 5h10a2 2 0 012 2v10a2 2 0 01-2 2H4V5zm14 9l4 4-2 2-4-4v-2h2z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "Bank Audit",
    description: "Audit assistance for banks and financial institutions with clear reporting.",
    to: "/compliances/bank-audit",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 3l9 5v2H3V8l9-5zm-7 9h14v7H5v-7zm2 2v3h2v-3H7zm4 0v3h2v-3h-2zm4 0v3h2v-3h-2z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "NGO Audit",
    description: "Audit services for NGOs, trusts, and societies with compliance coverage.",
    to: "/compliances/ngo-audit",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.3 0-6 1.6-6 3.5V20h12v-2.5C18 15.6 15.3 14 12 14z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
  {
    title: "Tax Audit",
    description: "Tax audit support, documentation review, and final reporting.",
    to: "/compliances/tax-audit",
    icon: (
      <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6 4h12a2 2 0 012 2v5H4V6a2 2 0 012-2zm-2 9h16v7H4v-7zm3 2v3h2v-3H7zm4 0v3h2v-3h-2z" />
      </svg>
    ),
    iconWrapClass: "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50",
  },
];
