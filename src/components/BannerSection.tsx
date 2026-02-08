import type { ReactNode } from "react";
import useSiteData from "../hooks/useSiteData";

const inputClasses =
    "w-full border-b border-slate-200 bg-transparent pb-3 text-sm text-slate-700 outline-none transition focus:border-blue-600";

type DescriptionColumn = {
    title?: string;
    items: string[];
};

export type BannerSectionProps = {
    title: string;
    description: string | string[] | DescriptionColumn[];
    formTitle?: string;
    children?: ReactNode;
};

function BannerSection({ title, description, formTitle = "Get a Consultation by Expert", children }: BannerSectionProps) {
    const { contact } = useSiteData();
    const isColumnDescription =
        Array.isArray(description) &&
        description.length > 0 &&
        typeof description[0] === "object" &&
        "items" in description[0];
    const paragraphParts: string[] = typeof description === "string"
        ? description
            .split("\n")
            .map((part) => part.trim())
            .filter(Boolean)
        : [];
    const bulletItems: string[] = !isColumnDescription && Array.isArray(description)
        ? (description as string[])
        : [];

    return (
        <section className="bg-slate-50">
            <div className="w-full px-4 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
                <div className="grid items-start gap-10 lg:grid-cols-12">
                    <div className="min-w-0 lg:col-span-8">
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Trusted advisors in Delhi</p>
                        <h1 className="mt-4 max-w-full break-words text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            {title}
                        </h1>
                        {isColumnDescription ? (
                            <div className="mt-6 grid gap-8 md:grid-cols-2">
                                {(description as DescriptionColumn[]).map((column) => (
                                    <div key={column.title || column.items.join("-")}
                                        className="space-y-4">
                                        {column.title && (
                                            <h2 className="text-xl font-semibold text-slate-900">
                                                {column.title}
                                            </h2>
                                        )}
                                        <ul className="space-y-4">
                                            {column.items.map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                                                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.7 5.3a1 1 0 010 1.4l-7.3 7.3a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.3 3.3 6.6-6.6a1 1 0 011.4 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : bulletItems.length ? (
                            <ul className="mt-5 space-y-4">
                                {bulletItems.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-base text-slate-700">
                                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.7 5.3a1 1 0 010 1.4l-7.3 7.3a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.3 3.3 6.6-6.6a1 1 0 011.4 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="mt-4 max-w-full break-words space-y-4 text-base text-slate-800 sm:text-lg">
                                {paragraphParts.map((part, index) => (
                                    <p key={`${title}-desc-${index}`}>{part}</p>
                                ))}
                            </div>
                        )}
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <a
                                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
                                title={`Call ${contact.phone}`}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11.4 11.4 0 00.6 3.6 1 1 0 01-.2 1l-2.2 2.2z" />
                                </svg>
                                Call Us
                            </a>
                            <a
                                href={`mailto:${contact.email}`}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
                                title={`Email ${contact.email}`}
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8l-8 7-8-7v10z" />
                                </svg>
                                Email Us
                            </a>
                        </div>
                        {children ? (
                            <div className="mt-2 pt-4">
                                {children}
                            </div>
                        ) : null}
                    </div>

                    <div className="md:col-span-4 md:sticky md:top-36 self-start rounded-xl border-4 border-blue-400/80 bg-white p-8 shadow-sm">
                        <h2 className="text-lg font-semibold text-slate-900">{formTitle}</h2>
                        <form className="mt-6 space-y-5">
                            <label className="block text-sm text-slate-800">
                                Name*
                                <input className={inputClasses} type="text" placeholder="Your name" required />
                            </label>
                            <label className="block text-sm text-slate-800">
                                Email*
                                <input className={inputClasses} type="email" placeholder="you@example.com" required />
                            </label>
                            <label className="block text-sm text-slate-800">
                                Phone*
                                <input className={inputClasses} type="tel" placeholder="+91 98765 43210" required />
                            </label>
                            <label className="block text-sm text-slate-800">
                                Your Query*
                                <input className={inputClasses} type="text" placeholder="Tell us about your requirement" required />
                            </label>
                            <button
                                type="submit"
                                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow hover:from-blue-800 hover:to-emerald-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
