import { motion } from "framer-motion";
import { FileText, Plus, User, Brain, Sparkles } from "lucide-react";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const sources = [
    { label: "Claude Discussion", meta: "May 12, 2024" },
    { label: "Architecture Doc", meta: "v1.3" },
    { label: "GitHub Commit", meta: "abc4cde" },
];

export default function AskMemora() {
    return (
        <section
            id="features"
            className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 "
        >
            <style>{`
        @keyframes am-glow {
          0%,100% { box-shadow: 0 0 18px 4px color-mix(in oklab, var(--color-accent) 45%, transparent); }
          50%     { box-shadow: 0 0 34px 10px color-mix(in oklab, var(--color-primary) 60%, transparent); }
        }
        @keyframes am-float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-5px); }
        }
        @keyframes am-draw {
          from { stroke-dashoffset: 240; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes am-caret {
          0%,100% { opacity: 0.15; }
          50%     { opacity: 1; }
        }
        @keyframes brainGlow{
    0%,100%{
        filter: drop-shadow(0 0 10px rgba(168,85,247,.45))
                drop-shadow(0 0 28px rgba(168,85,247,.18));
    }
    50%{
        filter: drop-shadow(0 0 18px rgba(168,85,247,.8))
                drop-shadow(0 0 46px rgba(168,85,247,.45));
    }
}

.am-glow{
    animation: brainGlow 2.8s ease-in-out infinite;
}
        .am-float { animation: am-float 4s ease-in-out infinite; }
        .am-draw  { stroke-dasharray: 240; animation: am-draw 1.8s ease-out forwards; }
        .am-caret { animation: am-caret 1.1s ease-in-out infinite; }
      `}</style>

            {/* Ambient background */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute right-[8%] top-[60%] h-[28rem] w-[28rem] -translate-y-1/2 rounded-full blur-3xl"
                    style={{
                        background:
                            "color-mix(in oklab, var(--color-primary) 8%, transparent)",
                    }}
                />

                <div
                    className="absolute left-[10%] bottom-0 h-72 w-72 rounded-full blur-3xl"
                    style={{
                        background:
                            "color-mix(in oklab, var(--color-indigo) 8%, transparent)",
                    }}
                />
            </div>

            <div className="relative mx-auto -ml-5  max-w-[1650px] px-6 lg:px-12">
                {/* Centered top badge */}
                <motion.div {...fade} className="mb-10 flex justify-center">
                    <span
                        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-bold backdrop-blur"
                        style={{
                            border: "1px solid color-mix(in oklab, var(--color-accent) 40%, transparent)",
                            background: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                            color: "color-mix(in oklab, var(--color-accent) 85%, var(--color-white))",
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        <Sparkles size={14} /> Ask Memora
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* LEFT — copy */}
                    <div className="lg:col-span-5">
                        <motion.h2
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.1 }}
                            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
                            style={{ color: "var(--color-white)", fontFamily: "var(--font-heading)" }}
                        >
                            Ask Anything.
                            <br />
                            Get{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, var(--color-accent), var(--color-primary))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Real
                            </span>{" "}
                            Answers.
                        </motion.h2>

                        <motion.p
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.2 }}
                            className="mt-6 max-w-md text-base leading-relaxed sm:text-lg"
                            style={{ color: "var(--color-gray)" }}
                        >
                            Memora searches your project memory and returns accurate, traceable answers with sources.
                        </motion.p>
                    </div>

                    {/* RIGHT — chat card */}
                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.15 }}
                        className="relative rounded-[32px] p-8 overflow-visible backdrop-blur-xl sm:p-7 lg:col-span-7"
                        style={{
                            border: "1px solid var(--color-border)",
                            background:
                                "linear-gradient(135deg, color-mix(in oklab, var(--color-white) 4%, transparent), color-mix(in oklab, var(--color-white) 1%, transparent))",
                            boxShadow: "0 0 120px rgba(139,92,246,.20) color-mix(in oklab, var(--color-primary) 45%, transparent)",
                        }}
                    >
                        {/* Question row */}
                        <motion.div {...fade} className="flex items-center gap-4">
                            <div
                                className="w-full rounded-2xl px-5 py-3.5 text-sm md:text-[15px]"
                                style={{
                                    border: "1px solid var(--color-border)",
                                    background: "color-mix(in oklab, var(--color-background) 70%, transparent)",
                                    color: "color-mix(in oklab, var(--color-white) 90%, transparent)",
                                }}
                            >
                                Why did we choose PostgreSQL for this project?
                                <span
                                    className="am-caret ml-0.5 inline-block h-4 w-[2px] translate-y-[3px]"
                                    style={{ background: "var(--color-accent)" }}
                                />
                            </div>
                            <div
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                                style={{
                                    background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
                                    boxShadow: "0 0 20px color-mix(in oklab, var(--color-primary) 55%, transparent)",
                                }}
                            >
                                <User size={16} style={{ color: "var(--color-white)" }} />
                            </div>
                        </motion.div>

                        {/* Answer row with brain node + curved connector */}
                        <div className="relative mt-4 flex ">
                            {/* Curved connector overlay */}
                            <svg
                                viewBox="0 0 220 320"
                                className="absolute -left-[128px] top-[74px] h-[260px] w-[210px] overflow-visible pointer-events-none"
                            >
                                <defs>
                                    <linearGradient id="brain-line" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                                        <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.6" />
                                        <stop offset="10%" stopColor="#A855F7" stopOpacity="1" />
                                    </linearGradient>

                                    <filter id="lineGlow">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feMerge>
                                            <feMergeNode in="blur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Main curved line */}
                                <path
                                    id="brainPath"
                                    d="
        M205 28
        C135 28,
          90 78,
          92 145
        C95 205,
          52 236,
          34 248
    "
                                    stroke="url(#brain-line)"
                                    strokeWidth="2.2"
                                    fill="none"
                                    strokeLinecap="round"
                                    filter="url(#lineGlow)"
                                />


                                {/* Moving glowing dot */}
                                <circle r="4" fill="#B66CFF" filter="url(#lineGlow)">
                                    <animateMotion
                                        dur="3s"
                                        repeatCount="indefinite"
                                        rotate="auto"
                                    >
                                        <mpath href="#brainPath" />
                                    </animateMotion>
                                </circle>

                            </svg>
                            <motion.div
                                {...fade}
                                transition={{ ...fade.transition, delay: 0.2 }}
                                className="am-float absolute -left-[114px] top-[275px] z-40 flex h-[64px] w-[64px] items-center justify-center rounded-full
"
                                style={{
                                    background:
                                        "radial-gradient(circle at 30% 30%, #C084FC 0%, #8B5CF6 60%, #5B21B6 100%)",

                                    border: "1px solid rgba(192,132,252,.35)",

                                    boxShadow: `
  0 0 22px rgba(168,85,247,.65),
  0 0 44px rgba(168,85,247,.35),
  0 0 90px rgba(168,85,247,.20)
`,
                                }}

                            >

                                <Brain
                                    size={22}
                                    style={{ color: "var(--color-white)", opacity: 15, }}
                                />
                            </motion.div>

                            {/* Answer card */}
                            <motion.div
                                {...fade}
                                transition={{ ...fade.transition, delay: 0.25 }}
                                className="relative ml-14 rounded-2xl p-6 md:p-7"
                                style={{
                                    border: "1px solid var(--color-border)",
                                    background: "color-mix(in oklab, var(--color-background) 45%, transparent)",
                                }}
                            >
                                <p
                                    className="text-sm leading-relaxed md:text-[15px]"
                                    style={{ color: "color-mix(in oklab, var(--color-white) 92%, transparent)" }}
                                >
                                    We chose PostgreSQL because it provides ACID compliance, advanced indexing, strong
                                    consistency, and works seamlessly with our relational data model for payments and users.
                                </p>

                                <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                                    <p
                                        className="mb-3 text-sm font-medium"
                                        style={{ color: "var(--color-accent)", fontFamily: "var(--font-subheading)" }}
                                    >
                                        Sources
                                    </p>
                                    <div className="flex flex-wrap items-center gap-2.5">
                                        {sources.map((s, i) => (
                                            <motion.div
                                                key={s.label}
                                                {...fade}
                                                transition={{ ...fade.transition, delay: 0.3 + i * 0.08 }}
                                                whileHover={{ y: -2, scale: 1.02 }}
                                                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 transition"
                                                style={{
                                                    border: "1px solid var(--color-border)",
                                                    background: "color-mix(in oklab, var(--color-surface) 80%, transparent)",
                                                }}
                                            >
                                                <FileText size={13} style={{ color: "var(--color-gray)" }} />
                                                <div className="leading-tight">
                                                    <div className="text-[12px]" style={{ color: "var(--color-white)" }}>
                                                        {s.label}
                                                    </div>
                                                    <div className="text-[10px]" style={{ color: "var(--color-gray)" }}>
                                                        {s.meta}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                        <motion.button
                                            {...fade}
                                            transition={{ ...fade.transition, delay: 0.55 }}
                                            whileHover={{ x: 2 }}
                                            className="ml-auto text-sm font-medium transition-colors"
                                            style={{ color: "var(--color-accent)" }}
                                        >
                                            View all
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}