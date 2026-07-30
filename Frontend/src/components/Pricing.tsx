import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const tiers = [
    {
        name: "Free",
        priceLabel: "Forever",
        price: "$0",
        suffix: "",
        features: ["1 Project", "Connect GitHub", "Connect Claude", "AI Project Memory", "Basic Search"],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        priceLabel: "Everything in Free",
        price: "$29",
        suffix: "/month",
        features: [
            "Unlimited Projects",
            "AI Meeting Assistant",
            "Project Overview Dashboard",
            "Semantic Search",
            "Unlimited Documents",
            "Priority Support",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        priceLabel: "Custom",
        price: "Custom",
        suffix: "",
        features: ["Unlimited Workspace", "SSO", "API Access", "Custom Integrations", "Dedicated Support", "SLA"],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="relative overflow-hidden  py-24 px-4 bg-[color:var(--color-background)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            {/* // ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-50 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#8b5cf6]/10 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-[#3b82f6]/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                {/* header */}
                <motion.div {...fade} className="mb-16 flex flex-col items-center text-center">
                    <motion.div {...fade} className="mb-10 flex justify-center">
                        <span
                            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-bold backdrop-blur"
                            style={{
                                border: "1px solid color-mix(in oklab, var(--color-accent) 30%, transparent)",
                                background: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                                color: "color-mix(in oklab, var(--color-accent) 85%, var(--color-white))",
                                fontFamily: "var(--font-heading)",
                            }}
                        >
                            <Sparkles size={14} /> Pricing
                        </span>
                    </motion.div>

                    <motion.h2
                        {...fade}
                        className="text-4xl font-normal text-[#f8fafc] md:text-5xl lg:text-6xl"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        Simple Pricing for Every Team
                    </motion.h2>

                    <motion.p {...fade} className="mt-4 max-w-xl text-sm text-[#9ca3af] md:text-base">
                        Start free, upgrade when your project memory grows.
                    </motion.p>
                </motion.div>

                {/* cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={tier.name}
                            {...fade}
                            transition={{ ...fade.transition, delay: idx * 0.1 }}
                            className={`group relative rounded-2xl border p-8 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.35)] ${tier.popular
                                ? "border-[#8b5cf6]/60 bg-gradient-to-b from-[#8b5cf6]/10 to-[#0e0e10]/80 shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]"
                                : "border-[#24242b] bg-[#0e0e10]/60 hover:border-[#8b5cf6]/40 hover:bg-[#0e0e10]/80"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] px-4 py-1 text-xs font-medium text-white shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div>
                                <h3
                                    className="text-2xl text-[#f8fafc]"
                                    style={{ fontFamily: "'DM Serif Display', serif" }}
                                >
                                    {tier.name}
                                </h3>
                                <p className="mt-1 text-sm text-[#9ca3af]">{tier.priceLabel}</p>

                                <div className="mt-6 flex items-baseline">
                                    {tier.price.startsWith("$") ? (
                                        <>
                                            <span className="text-2xl text-[#f8fafc]">$</span>
                                            <span
                                                className="text-6xl text-[#f8fafc]"
                                                style={{ fontFamily: "'DM Serif Display', serif" }}
                                            >
                                                {tier.price.slice(1)}
                                            </span>
                                        </>
                                    ) : (
                                        <span
                                            className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-5xl text-transparent"
                                            style={{ fontFamily: "'DM Serif Display', serif" }}
                                        >
                                            {tier.price}
                                        </span>
                                    )}
                                    {tier.suffix && <span className="ml-1 text-sm text-[#9ca3af]">{tier.suffix}</span>}
                                </div>
                            </div>

                            <ul className="mt-8 space-y-3">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-[#f8fafc]/90">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a855f7]" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`mt-10 w-full rounded-xl py-3 text-sm font-medium transition-all ${tier.popular
                                    ? "bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.7)] hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.9)]"
                                    : "border border-[#8b5cf6]/40 text-[#c4b5fd] hover:bg-[#8b5cf6]/10"
                                    }`}
                            >
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
