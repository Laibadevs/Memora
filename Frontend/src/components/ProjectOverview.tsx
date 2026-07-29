import { motion } from "framer-motion";
import { ArrowRight, Sparkles, LayoutGrid, Calendar, FileEdit, ListChecks, AlertTriangle, FileText, Diamond } from "lucide-react";
import logo from "../assets/memora_logo.png";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const sidebar = [
    { icon: LayoutGrid, label: "Overview", active: true },
    { icon: Calendar, label: "Timeline" },
    { icon: FileEdit, label: "Decisions" },
    { icon: ListChecks, label: "Tasks" },
    { icon: AlertTriangle, label: "Risks" },
    { icon: FileText, label: "Documents" },
];

const techs = [
    { name: "React", color: "#3b82f6" },
    { name: "FastAPI", color: "#10b981" },
    { name: "PostgreSQL", color: "#3b82f6" },
    { name: "Tailwind CSS", color: "#a855f7" },
];

// Donut math
const R = 62;
const C = 2 * Math.PI * R;
const HEALTH = 82;

export default function ProjectOverview() {
    return (
        <section id="use-cases" className="py-20 px-4 gap-90 md:px-8 bg-[color:var(--color-background)] ">
            <div className="max-w-7.5xl ml-5 mr-8  mx-auto">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute right-[8%] top-[40%] h-[34rem] w-[34rem] rounded-full blur-[160px]"
                        style={{
                            background: "rgba(139,92,246,.10)",
                        }}
                    />

                    <div
                        className="absolute left-[10%] bottom-[-8rem] h-[28rem] w-[28rem] rounded-full blur-[140px]"
                        style={{
                            background: "rgba(99,102,241,.08)",
                        }}
                    />
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
                </div>
                {/* Top center chip */}
                <div className="flex justify-center">
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
                            <Sparkles size={14} /> Project Overview
                        </span>
                    </motion.div>
                </div>

                <div className="mt-14 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] gap-12 items-center">
                    {/* LEFT */}
                    <div>

                        <motion.h2
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.1 }}
                            className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-[color:var(--color-white)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            See Your Project
                            <br /> at a Glance
                        </motion.h2>
                        <motion.p
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.2 }}
                            className="mt-6 text-[color:var(--color-gray)] max-w-md leading-relaxed"
                        >
                            Real-time insights into your project's health, progress, and risks.
                        </motion.p>
                        <motion.button
                            {...fade}
                            transition={{ ...fade.transition, delay: 0.3 }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-secondary)] shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)]"
                        >
                            View Dashboard <ArrowRight size={16} />
                        </motion.button>
                    </div>

                    {/* RIGHT dashboard */}
                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.15 }}
                        className="relative rounded-2xl border border-[color:var(--color-border)]  p-4 md:p-5 backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(139,92,246,0.35)]"
                    >
                        <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                            {/* Sidebar */}
                            <div className="w-[180px] rounded-xl border border-[color:var(--color-border)]  p-3">
                                <div className="flex items-center justify-center h-14 mb-2">
                                    <img src={logo} alt="Memora" className="h-10 w-auto" />
                                </div>
                                <div className="space-y-1">
                                    {sidebar.map((s, i) => (
                                        <motion.div
                                            key={s.label}
                                            {...fade}
                                            transition={{ ...fade.transition, delay: 0.2 + i * 0.05 }}
                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition ${s.active
                                                ? "bg-[color:var(--color-primary)]/15 text-[color:var(--color-white)] border border-[color:var(--color-primary)]/30"
                                                : "text-[color:var(--color-gray)] hover:text-[color:var(--color-white)] hover:bg-[color:var(--color-surface)]"
                                                }`}
                                        >
                                            <s.icon size={16} />
                                            {s.label}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Main content */}
                            <div className="min-w-0">
                                <motion.h3
                                    {...fade}
                                    className="text-[color:var(--color-white)] font-semibold mb-3"
                                >
                                    Project Overview
                                </motion.h3>

                                {/* Top row: 4 stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {/* Health donut */}
                                    <motion.div
                                        {...fade}
                                        transition={{ ...fade.transition, delay: 0.1 }}
                                        className="rounded-xl border border-[color:var(--color-border)]  p-4"
                                    >
                                        <div className="text-xs text-[color:var(--color-gray)] mb-2">Project Health</div>
                                        <div className="relative mx-auto h-[130px] w-[130px]">
                                            <svg viewBox="0 0 150 150" className="h-full w-full -rotate-90">
                                                <circle cx="75" cy="75" r={R} stroke="var(--color-border)" strokeWidth="10" fill="none" />
                                                <defs>
                                                    <linearGradient id="donut" x1="0" x2="1" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#22d3ee" />
                                                        <stop offset="100%" stopColor="#3b82f6" />
                                                    </linearGradient>
                                                </defs>
                                                <motion.circle
                                                    cx="75"
                                                    cy="75"
                                                    r={R}
                                                    stroke="url(#donut)"
                                                    strokeWidth="10"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                    strokeDasharray={C}
                                                    initial={{ strokeDashoffset: C }}
                                                    whileInView={{ strokeDashoffset: C - (C * HEALTH) / 100 }}
                                                    viewport={{ once: true, margin: "-80px" }}
                                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="text-2xl font-bold text-[color:var(--color-white)]">{HEALTH}%</div>
                                                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Good
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <StatCard delay={0.15} label="Completed Tasks" value="18" delta="12% this week" tone="emerald" />
                                    <StatCard delay={0.2} label="Pending Tasks" value="4" delta="3% this week" tone="emerald" />
                                    <StatCard delay={0.25} label="Risks" value="2" delta="High Priority" tone="rose" valueTone="rose" />
                                </div>

                                {/* Bottom row: technologies + timeline */}
                                <div className="mt-3 grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-3">
                                    <motion.div
                                        {...fade}
                                        transition={{ ...fade.transition, delay: 0.2 }}
                                        className="rounded-xl border border-[color:var(--color-border)]  p-4"
                                    >
                                        <div className="text-sm text-[color:var(--color-white)] font-medium mb-3">Technologies</div>
                                        <ul className="space-y-2.5">
                                            {techs.map((t, i) => (
                                                <motion.li
                                                    key={t.name}
                                                    {...fade}
                                                    transition={{ ...fade.transition, delay: 0.25 + i * 0.06 }}
                                                    className="flex items-center justify-between text-sm"
                                                >
                                                    <span className="flex items-center gap-2 text-[color:var(--color-white)]/90">
                                                        <Diamond size={12} style={{ color: t.color }} fill={t.color} />
                                                        {t.name}
                                                    </span>
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        {...fade}
                                        transition={{ ...fade.transition, delay: 0.25 }}
                                        className="rounded-xl border border-[color:var(--color-border)]  p-4"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="text-sm text-[color:var(--color-white)] font-medium">Project Timeline</div>
                                            <button className="text-xs text-[color:var(--color-secondary)] hover:text-[color:var(--color-primary)]">
                                                View Timeline
                                            </button>
                                        </div>
                                        <svg viewBox="0 0 320 120" className="w-full h-[120px]">
                                            <defs>
                                                <linearGradient id="tl-line" x1="0" x2="1" y1="0" y2="0">
                                                    <stop offset="0%" stopColor="var(--color-secondary)" />
                                                    <stop offset="100%" stopColor="#22d3ee" />
                                                </linearGradient>
                                                <linearGradient id="tl-fill" x1="0" x2="0" y1="0" y2="1">
                                                    <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.25" />
                                                    <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            {(() => {
                                                const pts = [
                                                    [10, 95], [50, 88], [90, 80], [130, 70],
                                                    [170, 60], [210, 40], [250, 50], [290, 20], [315, 15],
                                                ];
                                                const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
                                                const area = `${d} L315,115 L10,115 Z`;
                                                return (
                                                    <>
                                                        <path d={area} fill="url(#tl-fill)" />
                                                        <motion.path
                                                            d={d}
                                                            fill="none"
                                                            stroke="url(#tl-line)"
                                                            strokeWidth="2.2"
                                                            initial={{ pathLength: 0 }}
                                                            whileInView={{ pathLength: 1 }}
                                                            viewport={{ once: true, margin: "-80px" }}
                                                            transition={{ duration: 1.6, ease: "easeInOut" }}
                                                        />
                                                        {pts.map(([x, y], i) => (
                                                            <motion.circle
                                                                key={i}
                                                                cx={x}
                                                                cy={y}
                                                                r="3.5"
                                                                fill="#22d3ee"
                                                                stroke="var(--color-background)"
                                                                strokeWidth="1.5"
                                                                initial={{ opacity: 0, scale: 0 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true, margin: "-80px" }}
                                                                transition={{ delay: 0.2 + i * 0.12, duration: 0.35 }}
                                                            />
                                                        ))}
                                                    </>
                                                );
                                            })()}
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StatCard({
    label,
    value,
    delta,
    tone,
    valueTone,
    delay = 0,
}: {
    label: string;
    value: string;
    delta: string;
    tone: "emerald" | "rose";
    valueTone?: "rose";
    delay?: number;
}) {
    const toneClass = tone === "emerald" ? "text-emerald-400" : "text-rose-400";
    const valueClass = valueTone === "rose" ? "text-rose-400" : "text-[color:var(--color-white)]";
    return (
        <motion.div
            initial={fade.initial}
            whileInView={fade.whileInView}
            viewport={fade.viewport}
            transition={{ ...fade.transition, delay }}
            className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/40 p-4 flex flex-col justify-between"
        >
            <div className="text-xs text-[color:var(--color-gray)]">{label}</div>
            <div className={`text-3xl font-bold mt-2 ${valueClass}`}>{value}</div>
            <div className={`text-[11px] mt-1 ${toneClass} flex items-center gap-1`}>
                <span>↑</span> {delta}
            </div>
        </motion.div>
    );
}