import { motion } from "framer-motion";
import { Mic, FileText, User, Sparkles } from "lucide-react";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const sources = [
    { label: "Meeting Note", meta: "May 18" },
    { label: "Slack Discussion", meta: "#eng-team" },
    { label: "Requirement Doc", meta: "v2.1" },
];

export default function MeetingAssistant() {
    return (
        <section className="py-20 px-4 md:px-8 bg-[color:var(--color-background)] ">
            <div className="max-w-7xl ml-5 gap-10 mx-auto">
                <motion.div {...fade} className="mb-10 flex ml-20 justify-center">
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
                            <Sparkles size={14} />Meeting Mode
                        </span>
                    </motion.div>
                </motion.div>
                {/* Top center chip */}


                <div className="mt-14 grid -mr-25 lg:grid-cols-[0.8fr_1.2fr] gap-24 items-center">
                    {/* LEFT */}
                    <div>
                        <motion.h2
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-semibold leading-tight text-[color:var(--color-white)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            Your <span className="text-[color:var(--color-accent)]">AI</span> Meeting
                            <br />
                            Assistant
                        </motion.h2>

                        <motion.p
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.2 }}
                            className="mt-6 text-[color:var(--color-gray)] max-w-md leading-relaxed"
                        >
                            Join meetings, answer questions, and capture important insights — in real time.
                        </motion.p>
                    </div>

                    {/* RIGHT — meeting card */}
                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.15 }}
                        className="relative rounded-2xl border  border-[color:var(--color-border)] bg-[color:var(--color-surface)]/70 p-6 md:p-7 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)]"
                    >
                        {/* Mic + waveform + listening */}
                        <div className="flex items-center gap-4">
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 18px 4px rgba(139,92,246,0.55)",
                                        "0 0 34px 10px rgba(168,85,247,0.9)",
                                        "0 0 18px 4px rgba(139,92,246,0.55)",
                                    ],
                                }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                className="relative h-16 w-16 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-accent)] flex items-center justify-center flex-shrink-0"
                            >
                                <Mic size={22} className="text-white" />
                            </motion.div>

                            <div className="flex-1 flex items-center gap-1 h-12">
                                {Array.from({ length: 34 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 rounded-full bg-gradient-to-t from-[color:var(--color-secondary)] to-[color:var(--color-accent)]"
                                        animate={{
                                            height: [
                                                `${20 + Math.abs(Math.sin(i)) * 30}%`,
                                                `${40 + Math.abs(Math.cos(i * 1.3)) * 55}%`,
                                                `${20 + Math.abs(Math.sin(i)) * 30}%`,
                                            ],
                                        }}
                                        transition={{
                                            duration: 1.1 + (i % 5) * 0.12,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.04,
                                        }}
                                    />
                                ))}
                            </div>

                            <span className="inline-flex items-center gap-1.5 text-xs text-[color:var(--color-white)]/80 bg-[color:var(--color-background)]/60 border border-[color:var(--color-border)] rounded-full px-3 py-1.5 flex-shrink-0">
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.4, repeat: Infinity }}
                                    className="h-1.5 w-1.5 rounded-full bg-green-400"
                                />
                                Listening…
                            </span>
                        </div>

                        {/* Question row */}
                        <motion.div
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.25 }}
                            className="mt-6 flex items-center gap-3 justify-end"
                        >
                            <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/60 px-4 py-3 text-[14px] text-[color:var(--color-white)]/90">
                                How is the payment integration going?
                            </div>
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                                <User size={14} className="text-white" />
                            </div>
                        </motion.div>

                        {/* Answer card */}
                        <motion.div
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.35 }}
                            className="mt-4 rounded-xl border border-[color:var(--color-primary)]/40 bg-[color:var(--color-background)]/40 p-5"
                        >
                            <p className="text-[color:var(--color-white)]/90 text-[14px] leading-relaxed">
                                Payment integration is 75% complete. We're currently testing the Stripe webhook flow.
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-2.5">
                                {sources.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        {...fade}
                                        transition={{ ...fade.transition, delay: 0.45 + i * 0.08 }}
                                        className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-2"
                                    >
                                        <FileText size={12} className="text-[color:var(--color-gray)]" />
                                        <div className="leading-tight">
                                            <div className="text-[12px] text-[color:var(--color-white)]">{s.label}</div>
                                            <div className="text-[10px] text-[color:var(--color-gray)]">{s.meta}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
