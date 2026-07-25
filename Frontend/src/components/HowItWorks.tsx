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
const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

/* ---------- Card 1: Capture ---------- */
function CaptureVisual() {
    // 6 icons arranged in circle around central glowing orb
    const items = [
        { label: "figma", top: "12%", left: "34%" },
        { label: "notion", top: "12%", left: "62%" },
        { label: "github", top: "44%", left: "14%" },
        { label: "slack", top: "44%", left: "78%" },
        { label: "docs", top: "74%", left: "32%" },
        { label: "pdf", top: "74%", left: "60%" },
    ];
    return (
        <div className="relative h-full w-full">
            {/* central glowing orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 -m-4 rounded-full bg-violet-500/40 blur-2xl animate-pulse-slow" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-violet-400/70 bg-gradient-to-br from-violet-500/60 to-fuchsia-500/40 shadow-[0_0_40px_rgba(168,85,247,0.7)]">
                    <Sparkles className="h-6 w-6 text-white" />
                </div>
            </div>

            {items.map((it, i) => (
                <div

                    key={it.label}
                    className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-lg animate-float"
                    style={{ top: it.top, left: it.left, animationDelay: `${i * 0.25}s` }}
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
                        <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-black text-[10px] font-black">N</div>
                    )}
                    {it.label === "github" && <FaGithub className="h-5 w-5 text-white" />}
                    {it.label === "slack" && (
                        <svg viewBox="0 0 24 24" className="h-5 w-5">
                            <path fill="#E01E5A" d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5z" />
                            <path fill="#36C5F0" d="M9 6a2 2 0 1 1 2-2v2H9zm0 1a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4h5z" />
                            <path fill="#2EB67D" d="M18 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-4 0V4a2 2 0 1 1 4 0v5z" />
                            <path fill="#ECB22E" d="M15 18a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" />
                        </svg>
                    )}
                    {it.label === "docs" && <FileText className="h-5 w-5 text-sky-400" />}
                    {it.label === "pdf" && <File className="h-5 w-5 text-red-400" />}
                </div>
            ))}
        </div>
    );
}

/* ---------- Card 2: Analyze (fountain) ---------- */
function AnalyzeVisual() {
    const streams = Array.from({ length: 22 });
    const particles = Array.from({ length: 18 });
    return (
        <div className="relative h-full w-full overflow-hidden">
            {/* portal ring */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="h-4 w-40 rounded-[50%] bg-violet-500/40 blur-lg" />
                <div className="mx-auto -mt-3 h-2 w-32 rounded-[50%] border-2 border-violet-400/70 shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
                <div className="mx-auto -mt-1 h-1.5 w-20 rounded-[50%] border border-fuchsia-300/70" />
            </div>

            {/* rising streams */}
            {streams.map((_, i) => {
                const spread = (i - streams.length / 2) * 6;
                const delay = (i % 6) * 0.25;
                const hue = i % 2 === 0 ? "from-violet-500/0 via-violet-400 to-fuchsia-300" : "from-cyan-500/0 via-sky-400 to-white";
                return (
                    <span
                        key={i}
                        className={`absolute bottom-10 left-1/2 h-24 w-[1.5px] rounded-full bg-gradient-to-t ${hue} animate-rise`}
                        style={{
                            transform: `translateX(${spread}px) rotate(${spread * 0.4}deg)`,
                            transformOrigin: "bottom center",
                            animationDelay: `${delay}s`,
                        }}
                    />
                );
            })}

            {/* floating particles */}
            {particles.map((_, i) => (
                <span
                    key={`p-${i}`}
                    className="absolute h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_8px_rgba(236,72,153,0.9)] animate-particle"
                    style={{
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

/* ---------- Card 3: Understand (knowledge graph) ---------- */
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
                    <stop offset="0" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#ec4899" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="node-glow">
                    <stop offset="0" stopColor="#a855f7" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#a855f7" stopOpacity="0" />
                </radialGradient>
            </defs>

            {edges.map(([a, b], i) => (
                <line
                    key={i}
                    x1={nodes[a].x} y1={nodes[a].y}
                    x2={nodes[b].x} y2={nodes[b].y}
                    stroke="url(#line-grad)"
                    strokeWidth="0.4"
                    className="animate-pulse-line"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}

            {nodes.map(({ x, y, Icon, big }, i) => {
                const size = big ? 11 : 8;
                return (
                    <g key={i} className="animate-float-node" style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.3}s` }}>
                        <circle cx={x} cy={y} r={size} fill="url(#node-glow)" opacity="0.6" />
                        <foreignObject x={x - size / 2} y={y - size / 2} width={size} height={size}>
                            <div className="flex h-full w-full items-center justify-center rounded-full border border-violet-300/70 bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]">
                                <Icon className="text-white" style={{ width: size * 0.55, height: size * 0.55 }} />
                            </div>
                        </foreignObject>
                    </g>
                );
            })}
        </svg>
    );
}

/* ---------- Card 4: Deliver (search + answer) ---------- */
function DeliverVisual() {
    return (
        <div className="flex h-full flex-col justify-center gap-3 p-5">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                <div className="h-2 flex-1 rounded bg-white/5" />
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5">
                    <Search className="h-3.5 w-3.5 text-violet-300" />
                </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-violet-400/40 bg-gradient-to-r from-violet-600/40 to-violet-500/10 px-3 py-3 shadow-[0_0_30px_rgba(139,92,246,0.35)] animate-glow">
                <Sparkles className="h-3.5 w-3.5 text-violet-200" />
                <span className="text-sm font-medium text-white">Answer</span>
                <div className="flex-1" />
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3">
                <div className="h-2 flex-1 rounded bg-white/10" />
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-500/20">
                    <FileText className="h-3.5 w-3.5 text-violet-300" />
                </div>
            </div>
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
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="pointer-events-none absolute left-full top-1/2 hidden h-20 w-12 -translate-y-1/2 lg:block">
            <defs>
                <linearGradient id="wave-grad" x1="0" x2="1">
                    <stop offset="0" stopColor="#a855f7" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#c084fc" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#ec4899" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d="M0 20 Q 25 0, 50 20 T 100 20" stroke="url(#wave-grad)" strokeWidth="1" fill="none" />
            <path d="M0 22 Q 25 42, 50 22 T 100 22" stroke="url(#wave-grad)" strokeWidth="0.6" fill="none" opacity="0.6" />
            <circle r="1.2" fill="#f0abfc" className="animate-flow-dot">
                <animateMotion dur="3s" repeatCount="indefinite" path="M0 20 Q 25 0, 50 20 T 100 20" />
            </circle>
        </svg>
    );
}

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-[#050014] py-24 px-4 -mt-60 sm:px-6 lg:px-">
            <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-node { 0%,100%{transform:translate(0,0)} 50%{transform:translate(0,-1px)} }
        @keyframes rise {
          0%   { transform: translateX(var(--tw-translate-x,0)) translateY(0) scaleY(0.2); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateX(var(--tw-translate-x,0)) translateY(-140px) scaleY(1); opacity: 0; }
        }
        @keyframes particle { 0%{transform:translateY(0);opacity:0} 30%{opacity:1} 100%{transform:translateY(-90px);opacity:0} }
        @keyframes pulse-line { 0%,100%{opacity:0.35} 50%{opacity:1} }
        @keyframes glow { 0%,100%{box-shadow:0 0 25px rgba(139,92,246,0.35)} 50%{box-shadow:0 0 45px rgba(168,85,247,0.7)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-float-node { animation: float-node 3s ease-in-out infinite; }
        .animate-rise { animation: rise 2.8s ease-out infinite; }
        .animate-particle { animation: particle 3s ease-out infinite; }
        .animate-pulse-line { animation: pulse-line 2.2s ease-in-out infinite; }
        .animate-glow { animation: glow 2.8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>

            {/* ambient background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* header */}
                <div className="mb-16 flex flex-col items-center text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-200 backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5" />
                        How It Works
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        From Scattered to Smart
                    </h2>
                    <p className="mt-5 max-w-xl text-base text-white/60 sm:text-lg">
                        Memora connects the dots and turns your projects into intelligent memory.
                    </p>
                </div>

                {/* cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {steps.map((s, i) => (
                        <div
                            key={s.num}
                            className="relative flex flex-col opacity-0"
                            style={{ animation: `fadeUp 0.7s ease-out ${i * 0.15}s forwards` }}
                        >
                            <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent shadow-[0_10px_40px_-10px_rgba(139,92,246,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_60px_-10px_rgba(139,92,246,0.5)]">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(139,92,246,0.18),transparent_70%)]" />
                                <s.Visual />
                            </div>

                            {i < steps.length - 1 && <Connector />}

                            <div className="mt-7 text-center">
                                <h3 className="text-xl font-semibold text-white">
                                    {s.num}. {s.title}
                                </h3>
                                <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-white/60">
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
