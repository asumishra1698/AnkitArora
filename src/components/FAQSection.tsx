import { useState } from "react";

export type FAQItem = {
    question: string;
    answer: string;
};

type FAQSectionProps = {
    title: string;
    faqs?: FAQItem[];
};

function FAQSection({ title, faqs }: FAQSectionProps) {
    const resolvedFaqs = faqs && faqs.length > 0 ? faqs : [];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (resolvedFaqs.length === 0) {
        return null;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: resolvedFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="mt-8 w-full rounded-3xl bg-white p-6 shadow-xl sm:p-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="mx-auto max-w-5xl text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 sm:text-sm">FAQs</p>
                <h5 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{title} FAQs</h5>
                <p className="mt-3 text-sm text-slate-800">
                    Common questions answered by our experts.
                </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl items-start gap-6">
                {resolvedFaqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <button
                            key={faq.question}
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="self-start cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left"
                            aria-expanded={isOpen}
                        >
                            <div className="flex w-full cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900">
                                <span>{faq.question}</span>
                                <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-800">
                                    <span className="absolute h-0.5 w-3 bg-slate-600" />
                                    <span className={`absolute h-3 w-0.5 bg-slate-600 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`} />
                                </span>
                            </div>
                            <div
                                className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-sm text-slate-800">{faq.answer}</p>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default FAQSection;
