type OurCustomersProps = {
    heading?: string;
    subheading?: string;
    description?: string;
    total?: number;
    logos?: Array<{ src: string; alt?: string }>;
};

const DEFAULT_LOGOS = [
    { src: "/logo/classic.jpg", alt: "Classic" },
    { src: "/logo/klogo.webp", alt: "Klogo" },
    { src: "/logo/LOANS-NEED-1-png-768x432.png", alt: "Loans Need" },
    { src: "/logo/logotaxsuvidha-768x191.png", alt: "Tax Suvidha" },
    { src: "/logo/mskp.png", alt: "MSKP" },
    { src: "/logo/nlogo.png", alt: "N Logo" },
    { src: "/logo/22.jpg", alt: "22" },
    { src: "/logo/24.png", alt: "24" },
    { src: "/logo/wincredit-768x210.png", alt: "Win Credit" },
    { src: "/logo/sd.png", alt: "SD" },
    { src: "/logo/LOGOultra.png", alt: "Ultra" },
    { src: "/logo/26.png", alt: "26" },
    { src: "/logo/26.png", alt: "26" },
    { src: "/logo/26.png", alt: "26" },
    { src: "/logo/26.png", alt: "26" },
    { src: "/logo/26.png", alt: "26" },

];

function OurCustomers({
    heading = "Our Customers",
    subheading = "Trusted by growing teams",
    description = "Placeholder logos for now. We will replace them with real client brands.",
    total,
    logos,
}: OurCustomersProps) {
    const resolvedLogos = logos && logos.length > 0 ? logos : DEFAULT_LOGOS;
    const resolvedTotal = typeof total === "number" ? total : resolvedLogos.length;

    return (
        <section>
            <div className="w-full px-6 py-14 sm:px-10 lg:px-16">
                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">{heading}</p>
                    <h2 className="text-2xl font-semibold text-slate-900">{subheading}</h2>
                    <p className="text-sm text-slate-800">{description}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    {Array.from({ length: resolvedTotal }).map((_, index) => {
                        const logo = resolvedLogos[index % resolvedLogos.length];
                        const altText = logo.alt || "Client logo";
                        return (
                            <div
                                key={`logo-${index}`}
                                className="group flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                            >
                                <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-white">
                                    <img
                                        src={logo.src}
                                        alt={altText}
                                        title={altText}
                                        className="h-auto w-20 object-contain transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default OurCustomers;
