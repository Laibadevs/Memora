// import {

//     SiGithub,
//     SiNotion,
//     SiFigma,
//     SiClaude

// } from "react-icons/si";
// import { RiOpenaiFill } from "react-icons/ri";
// import { Sparkles, Cloud, Search, User, Box } from "lucide-react";
// import { FileText } from "lucide-react";



//     const icons = [
//         { Icon: SiFigma, color: "text-pink-400", delay: "0s" },
//         { Icon: SiGithub, color: "text-white", delay: "0.2s" },
//         { Icon: SiClaude, color: "text-white", delay: "0.4s" },
//         { Icon: Cloud, color: "text-violet-300", delay: "0.6s", center: true },
//         { Icon: SiNotion, color: "text-purple-400", delay: "0.8s" },
//         { Icon: RiOpenaiFill, color: "text-white", delay: "1s" },
//     ]
import {
    Sparkles,
    FileText,
    User,
    Calendar,
    Tag,
    Search,
    File,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
// import { SiClaude } from "react-icons/si";

import { motion } from "framer-motion";

/* ---------- Shared fade animation ---------- */
const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

/* ---------- Card 1: Capture ---------- */
function CaptureVisual() {
    const items = [
        { label: "figma", top: "12%", left: "34%" },
        { label: "notion", top: "12%", left: "62%" },
        { label: "github", top: "44%", left: "14%" },
        { label: "slack", top: "44%", left: "78%" },
        { label: "docs", top: "74%", left: "32%" },
        { label: "pdf", top: "74%", left: "60%" },
    ];
    return (
        <div className="relative  h-full w-full">
            <motion.div {...fade} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                    className="absolute inset-0 -m-4 rounded-full blur-2xl animate-pulse-slow"
                    style={{ background: "color-mix(in oklab, var(--color-primary) 40%, transparent)" }}
                />
                <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border-2"
                    style={{
                        borderColor: "color-mix(in oklab, var(--color-accent) 70%, transparent)",
                        background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                        boxShadow: "0 0 40px color-mix(in oklab, var(--color-accent) 70%, transparent)",
                    }}
                >
                    <Sparkles className="h-6 w-6" style={{ color: "var(--color-white)" }} />
                </div>
            </motion.div>


            {items.map((it, i) => (
                <motion.div
                    key={it.label}
                    {...fade}
                    transition={{ ...fade.transition, delay: i * 0.08 }}
                    className="absolute flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md shadow-lg animate-float"
                    style={{
                        top: it.top,
                        left: it.left,
                        border: "1px solid var(--color-border)",
                        background: "color-mix(in oklab, var(--color-white) 4%, transparent)",
                        animationDelay: `${i * 0.25}s`,
                    }}
                >
                    {it.label === "figma" && (
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                            <path fill="#F24E1E" d="M8 2h4v6H8a3 3 0 0 1 0-6z" />
                            <path fill="#A259FF" d="M12 2h4a3 3 0 0 1 0 6h-4V2z" />
                            <path fill="#1ABCFE" d="M15 11a3 3 0 1 1-3 3v-3h3z" />
                            <path fill="#0ACF83" d="M8 14a3 3 0 0 0 4 3v-6H8a3 3 0 0 0 0 3z" />
                            <path fill="#FF7262" d="M8 8h4v6H8a3 3 0 0 1 0-6z" />
                        </svg>
                    )}
                    {it.label === "notion" && (
                        <div
                            className="flex h-5 w-5 items-center justify-center rounded-sm text-[10px] font-black"
                            style={{ background: "var(--color-white)", color: "#000" }}
                        >
                            N
                        </div>
                    )}
                    {it.label === "github" && <FaGithub className="h-5 w-5" style={{ color: "var(--color-white)" }} />}
                    {it.label === "slack" && (
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                            <path fill="#E01E5A" d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5z" />
                            <path fill="#36C5F0" d="M9 6a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5z" />
                            <path fill="#2EB67D" d="M18 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5z" />
                            <path fill="#ECB22E" d="M15 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" />
                        </svg>
                    )}
                    {it.label === "docs" && <FileText className="h-5 w-5" style={{ color: "var(--color-secondary)" }} />}
                    {it.label === "pdf" && <File className="h-5 w-5" style={{ color: "#f87171" }} />}
                </motion.div>
            ))}
        </div>
    );
}

/* ---------- Card 2: Analyze ---------- */
function AnalyzeVisual() {
    const streams = Array.from({ length: 22 });
    const particles = Array.from({ length: 18 });
    return (
        <div className="relative h-full w-full overflow-hidden">
            <motion.div {...fade} className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div
                    className="h-4 w-40 rounded-[50%] blur-lg"
                    style={{ background: "color-mix(in oklab, var(--color-primary) 40%, transparent)" }}
                />
                <div
                    className="mx-auto -mt-3 h-2 w-32 rounded-[50%] border-2"
                    style={{
                        borderColor: "color-mix(in oklab, var(--color-accent) 70%, transparent)",
                        boxShadow: "0 0 25px color-mix(in oklab, var(--color-accent) 80%, transparent)",
                    }}
                />
                <div
                    className="mx-auto -mt-1 h-1.5 w-20 rounded-[50%]"
                    style={{ border: "1px solid color-mix(in oklab, var(--color-indigo) 70%, transparent)" }}
                />
            </motion.div>


            {streams.map((_, i) => {
                const baseAngle = (i / (streams.length - 1)) * 160 - 80;
                const wobble = Math.sin(i * 2.1) * 20;
                const rotate = baseAngle + wobble;
                const spread = Math.sin((rotate * Math.PI) / 180) * 90;
                const delay = (i % 6) * 0.25;
                const grad =
                    i % 2 === 0
                        ? "linear-gradient(to top, transparent, var(--color-primary), var(--color-accent))"
                        : "linear-gradient(to top, transparent, var(--color-secondary), var(--color-white))";
                return (
                    <span
                        key={i}
                        className="absolute bottom-10 left-1/2 h-24 w-[1.5px] rounded-full animate-rise"
                        style={{
                            background: grad,
                            ["--tw-translate-x" as string]: `${spread}px`,
                            ["--tw-rotate" as string]: `${rotate}deg`,
                            transform: `translateX(${spread}px) rotate(${rotate}deg)`,
                            transformOrigin: "bottom center",
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}

            {particles.map((_, i) => (
                <span
                    key={`p-${i}`}
                    className="absolute h-1.5 w-1.5 rounded-full animate-particle"
                    style={{
                        background: "var(--color-accent)",
                        boxShadow: "0 0 8px color-mix(in oklab, var(--color-accent) 90%, transparent)",
                        left: `${20 + Math.random() * 60}%`,
                        bottom: `${20 + Math.random() * 20}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${2.5 + Math.random() * 1.5}s`,
                    }}
                />
            ))}
        </div>
    );
}

/* ---------- Card 3: Understand ---------- */
function UnderstandVisual() {
    const nodes = [
        { x: 70, y: 18, Icon: User, big: true },
        { x: 30, y: 40, Icon: Calendar, big: true },
        { x: 55, y: 50, Icon: Sparkles },
        { x: 20, y: 72, Icon: Tag },
        { x: 78, y: 55, Icon: FileText, big: true },
        { x: 55, y: 82, Icon: FileText },
    ];
    const edges: [number, number][] = [
        [0, 2], [0, 4], [1, 2], [1, 3], [2, 4], [2, 5], [3, 5], [4, 5], [1, 4],
    ];
    return (
        <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
                <linearGradient id="line-grad" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0.85" />
                    <stop offset="1" stopColor="var(--color-secondary)" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="node-glow">
                    <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.9" />
                    <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
                </radialGradient>
            </defs>

            {edges.map(([a, b], i) => (
                <line
                    key={i}
                    x1={nodes[a].x}
                    y1={nodes[a].y}
                    x2={nodes[b].x}
                    y2={nodes[b].y}
                    stroke="url(#line-grad)"
                    strokeWidth="0.4"
                    className="animate-pulse-line"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}

            {nodes.map(({ x, y, Icon, big }, i) => {
                const size = big ? 11 : 8;
                return (
                    <g
                        key={i}
                        className="animate-float-node"
                        style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.3}s` }}
                    >
                        <circle cx={x} cy={y} r={size} fill="url(#node-glow)" opacity="0.6" />
                        <foreignObject x={x - size / 2} y={y - size / 2} width={size} height={size}>
                            <div
                                className="flex h-full w-full items-center justify-center rounded-full"
                                style={{
                                    border: "1px solid color-mix(in oklab, var(--color-accent) 70%, transparent)",
                                    background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                                    boxShadow: "0 0 10px color-mix(in oklab, var(--color-accent) 90%, transparent)",
                                }}
                            >
                                <Icon style={{ width: size * 0.55, height: size * 0.55, color: "var(--color-white)" }} />
                            </div>
                        </foreignObject>
                    </g>
                );
            })}
        </svg>
    );
}

/* ---------- Card 4: Deliver ---------- */
function DeliverVisual() {
    return (
        <div className="flex h-full flex-col justify-center gap-3 p-5">
            <motion.div
                {...fade}
                className="flex items-center gap-2 rounded-xl px-3 py-3"
                style={{
                    border: "1px solid var(--color-border)",
                    background: "color-mix(in oklab, var(--color-white) 3%, transparent)",
                }}
            >
                <div
                    className="h-2 flex-1 rounded"
                    style={{ background: "color-mix(in oklab, var(--color-white) 5%, transparent)" }}
                />
                <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: "color-mix(in oklab, var(--color-white) 5%, transparent)" }}
                >
                    <Search className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} />
                </div>
            </motion.div>
            <motion.div
                {...fade}
                transition={{ ...fade.transition, delay: 0.1 }}
                className="flex items-center gap-2 rounded-xl px-3 py-3 animate-glow"
                style={{
                    border: "1px solid color-mix(in oklab, var(--color-accent) 40%, transparent)",
                    background:
                        "linear-gradient(to right, color-mix(in oklab, var(--color-primary) 40%, transparent), color-mix(in oklab, var(--color-primary) 10%, transparent))",
                    boxShadow: "0 0 30px color-mix(in oklab, var(--color-primary) 35%, transparent)",
                }}
            >
                <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--color-accent)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--color-white)" }}>
                    Answer
                </span>
                <div className="flex-1" />
            </motion.div>
            <motion.div
                {...fade}
                transition={{ ...fade.transition, delay: 0.2 }}
                className="flex items-center gap-2 rounded-xl px-3 py-3"
                style={{
                    border: "1px solid var(--color-border)",
                    background: "color-mix(in oklab, var(--color-white) 3%, transparent)",
                }}
            >
                <div
                    className="h-2 flex-1 rounded"
                    style={{ background: "color-mix(in oklab, var(--color-white) 10%, transparent)" }}
                />
                <div
                    className="flex h-7 w-7 items-center justify-center rounded-md"
                    style={{ background: "color-mix(in oklab, var(--color-primary) 20%, transparent)" }}
                >
                    <FileText className="h-3.5 w-3.5" style={{ color: "var(--color-primary)" }} />
                </div>
            </motion.div>
        </div>

    );
}

const steps = [
    { num: "1", title: "Capture", desc: "Paste anything—notes, docs, links, audio.", Visual: CaptureVisual },
    { num: "2", title: "Analyze", desc: "Memora extracts key insights, decisions, and next actions.", Visual: AnalyzeVisual },
    { num: "3", title: "Understand", desc: "It builds a living knowledge graph of your project.", Visual: UnderstandVisual },
    { num: "4", title: "Deliver", desc: "Ask anything and get answers backed by real context.", Visual: DeliverVisual },
];

/* ---------- Wavy connector ---------- */
function Connector() {
    return (
        <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-full top-1/2 hidden h-20 w-12 -translate-y-1/2 lg:block"
        >
            <defs>
                <linearGradient id="wave-grad" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--color-primary)" stopOpacity="0" />
                    <stop offset="0.5" stopColor="var(--color-accent)" stopOpacity="0.9" />
                    <stop offset="1" stopColor="var(--color-secondary)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0 20 Q 25 0, 50 20 T 100 20" stroke="url(#wave-grad)" strokeWidth="1" fill="none" />
            <path d="M0 22 Q 25 42, 50 22 T 100 22" stroke="url(#wave-grad)" strokeWidth="0.6" fill="none" opacity="0.6" />
            <circle r="1.2" fill="var(--color-accent)">
                <animateMotion dur="3s" repeatCount="indefinite" path="M0 20 Q 25 0, 50 20 T 100 20" />
            </circle>
        </svg>
    );
}

export default function HowItWorks() {
    return (
        <section
            className="relative overflow-hidden -mt-60 py-24 px-4 sm:px-6 lg:px-8"
            style={
                {
                    "--color-background": "#000000",
                    "--color-surface": "#0e0e10",
                    "--color-primary": "#8b5cf6",
                    "--color-secondary": "#3b82f6",
                    "--color-accent": "#a855f7",
                    "--color-indigo": "#6366f1",
                    "--color-white": "#f8fafc",
                    "--color-gray": "#9ca3af",
                    "--color-border": "#24242b",
                    "--font-heading": "'Cardo', serif",
                    "--font-subheading": "'DM Serif Display', serif",
                    "--font-body": "'Inter', sans-serif",
                    background: "var(--color-background)",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-body)",
                } as React.CSSProperties
            }
        >
            <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-node { 0%,100%{transform:translate(0,0)} 50%{transform:translate(0,-1px)} }
        @keyframes rise {
          0%   { transform: translateX(var(--tw-translate-x,0)) translateY(0) rotate(var(--tw-rotate,0)) scaleY(0.2); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateX(var(--tw-translate-x,0)) translateY(-140px) rotate(var(--tw-rotate,0)) scaleY(1); opacity: 0; }
        }
        @keyframes particle { 0%{transform:translateY(0);opacity:0} 30%{opacity:1} 100%{transform:translateY(-90px);opacity:0} }
        @keyframes pulse-line { 0%,100%{opacity:0.35} 50%{opacity:1} }
        @keyframes glow { 0%,100%{box-shadow:0 0 25px color-mix(in oklab, var(--color-primary) 35%, transparent)} 50%{box-shadow:0 0 45px color-mix(in oklab, var(--color-accent) 70%, transparent)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-float-node { animation: float-node 3s ease-in-out infinite; }
        .animate-rise { animation: rise 2.8s ease-out infinite; }
        .animate-particle { animation: particle 3s ease-out infinite; }
        .animate-pulse-line { animation: pulse-line 2.2s ease-in-out infinite; }
        .animate-glow { animation: glow 2.8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>

            {/* ambient background glow
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute left-1/2 top-25 h-96  w-[50rem] -translate-x-1/2 rounded-full blur-3xl"
                    style={{ background: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }}
                />
            </div> */}

            <div className="relative mx-auto max-w-7xl">
                {/* header */}
                <motion.div {...fade} className="mb-16 flex flex-col items-center text-center">
                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.05 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur"
                        style={{
                            border: "1px solid color-mix(in oklab, var(--color-accent) 30%, transparent)",
                            background: "color-mix(in oklab, var(--color-primary) 10%, transparent)",
                            color: "color-mix(in oklab, var(--color-accent) 80%, var(--color-white))",
                            fontFamily: "var(--font-heading)",
                        }}
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        How It Works
                    </motion.div>
                    <motion.h2
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                        style={{ color: "var(--color-white)", fontFamily: "var(--font-heading)" }}
                    >
                        From Scattered to Smart
                    </motion.h2>
                    <motion.p
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.15 }}
                        className="mt-5 max-w-xl text-base sm:text-lg"
                        style={{ color: "var(--color-gray)" }}
                    >
                        Memora connects the dots and turns your projects into intelligent memory.
                    </motion.p>
                </motion.div>

                {/* cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            {...fade}
                            transition={{ ...fade.transition, delay: i * 0.12 }}
                            className="relative flex flex-col"
                        >
                            <div
                                className="relative h-64 overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1"
                                style={{
                                    border: "1px solid var(--color-border)",
                                    background:
                                        "linear-gradient(135deg, color-mix(in oklab, var(--color-white) 5%, transparent), color-mix(in oklab, var(--color-white) 2%, transparent), transparent)",
                                    boxShadow: "0 10px 40px -10px color-mix(in oklab, var(--color-primary) 30%, transparent)",
                                }}
                            >
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "radial-gradient(circle at 50% 60%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 70%)",
                                    }}
                                />
                                <s.Visual />
                            </div>

                            {i < steps.length - 1 && <Connector />}

                            <motion.div
                                {...fade}
                                transition={{ ...fade.transition, delay: i * 0.12 + 0.1 }}
                                className="mt-7 text-center"
                            >
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: "var(--color-white)", fontFamily: "var(--font-subheading)" }}
                                >
                                    {s.num}. {s.title}
                                </h3>
                                <p
                                    className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed"
                                    style={{ color: "var(--color-gray)" }}
                                >
                                    {s.desc}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
