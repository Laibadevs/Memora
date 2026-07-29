import { motion } from "framer-motion";
import { Code2, Terminal, Plug, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { SiGithub, SiNotion, SiFigma, SiDiscord } from "react-icons/si";
import { FaSlack as SiSlack } from "react-icons/fa";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const cards = [
    {
        icon: Code2,
        title: "REST API",
        desc: "Build custom integrations using our API.",
        link: "View Docs",
        body: null as React.ReactNode,
    },
    {
        icon: Terminal,
        title: "SDKs",
        desc: "Ready-to-use SDKs.",
        link: "Browse SDKs",
        body: (
            <div className="flex flex-wrap gap-2">
                {["JavaScript", "Python", "Go"].map((l) => (
                    <span
                        key={l}
                        className="rounded-md border border-[#24242b] bg-[#0e0e10] px-2.5 py-1 text-xs text-[#f8fafc]/80"
                    >
                        {l}
                    </span>
                ))}
            </div>
        ),
    },
    {
        icon: Plug,
        title: "Integrations",
        desc: null,
        link: "Integration Guide",
        body: (
            <div className="flex items-center gap-3 text-lg">
                <SiGithub className="text-white" />
                <SiNotion className="text-white" />
                <SiSlack className="text-white" />
                <SiFigma className="text-white" />
                <div className="grid h-5 w-5 place-items-center rounded border border-[#24242b]">
                    <span className="text-[10px] text-[#9ca3af]">+</span>
                </div>
            </div>
        ),
    },
    {
        icon: BookOpen,
        title: "Examples",
        desc: null,
        link: "View Examples",
        body: (
            <div className="flex flex-wrap gap-2">
                {["Project Memory", "Meeting AI", "Knowledge Graph"].map((l) => (
                    <span
                        key={l}
                        className="rounded-md border border-[#24242b] bg-[#0e0e10] px-2.5 py-1 text-xs text-[#f8fafc]/80"
                    >
                        {l}
                    </span>
                ))}
            </div>
        ),
    },
];

export default function Docs() {
    return (
        <section
            id="docs"
            className="relative overflow-hidden py-24 px-4 bg-[color:var(--color-background)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-1/3 h-[400px] w-[600px] rounded-full bg-[#6366f1]/10 blur-[140px]" />
            </div>

            <div className="relative mx-auto max-w-[1450px] px-4">
                <motion.div {...fade} className="mb-14 flex flex-col items-center text-center">
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
                            <Sparkles size={14} /> Docs
                        </span>
                    </motion.div>
                    <motion.h3
                        {...fade}
                        className="text-4xl text-[#f8fafc] md:text-5xl"
                        style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                        Developer Documentation
                    </motion.h3>
                    <motion.p {...fade} className="mt-4 max-w-xl text-sm text-[#9ca3af] md:text-base">
                        Everything you need to integrate Memora into your workflow.
                    </motion.p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            {...fade}
                            transition={{ ...fade.transition, delay: i * 0.08 }}
                            className="group flex flex-col rounded-2xl border border-[#24242b] bg-[#0e0e10]/60 p-6 backdrop-blur transition-all duration-300 hover:scale-105 hover:border-[#8b5cf6]/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]"
                        >
                            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10">
                                <c.icon className="h-5 w-5 text-[#c4b5fd]" />
                            </div>
                            <h3
                                className="text-xl text-[#f8fafc]"
                                style={{ fontFamily: "'DM Serif Display', serif" }}
                            >
                                {c.title}
                            </h3>
                            {c.desc && <p className="mt-2 text-sm text-[#9ca3af]">{c.desc}</p>}
                            {c.body && <div className="mt-4">{c.body}</div>}
                            <div className="mt-auto pt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-1.5 text-sm text-[#a855f7] transition-colors hover:text-[#c4b5fd]"
                                >
                                    {c.link}
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* need help */}
                <motion.div
                    {...fade}
                    className="mt-6 flex flex-col gap-6 rounded-2xl border border-[#24242b] bg-[#0e0e10]/60 p-6 backdrop-blur md:flex-row md:items-center md:justify-between"
                >
                    <div>
                        <h4 className="text-lg text-[#f8fafc]" style={{ fontFamily: "'DM Serif Display', serif" }}>
                            Need help?
                        </h4>
                        <p className="text-sm text-[#9ca3af]">Join our community or explore resources.</p>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        {[
                            { Icon: SiDiscord, label: "Join Discord" },
                            { Icon: BookOpen, label: "Read Documentation" },
                            { Icon: SiGithub, label: "GitHub Repository" },
                        ].map((it) => (
                            <a
                                key={it.label}
                                href="#"
                                className="inline-flex items-center gap-2 text-sm text-[#f8fafc] transition-colors hover:text-[#c4b5fd]"
                            >
                                <it.Icon className="h-4 w-4" />
                                {it.label}
                                <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}