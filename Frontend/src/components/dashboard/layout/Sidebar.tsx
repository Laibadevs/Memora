import { motion } from "framer-motion";
import { useState } from "react";
import {
    LayoutGrid,
    FolderOpen,
    Video,
    MonitorPlay,
    MessageSquare,
    Brain,
    FileText,
    Share2,
    CheckSquare,
    Calendar,
    BarChart3,
    Settings,
    Sparkles,
    ArrowRight,
    ChevronDown,
} from "lucide-react";
import MemoraLogo from "../../../assets/LOGO.png";
import MemoraWord from "../../../assets/memora_word.png";
import Avatar from "../../common/Avatar";
import Badge from "../../common/Badge";

const items = [
    { label: "Dashboard", Icon: LayoutGrid },
    { label: "Projects", Icon: FolderOpen },
    { label: "Meetings", Icon: Video },
    { label: "Presentations", Icon: MonitorPlay, badge: "New" },
    { label: "AI Chat", Icon: MessageSquare },
    { label: "Memories", Icon: Brain },
    { label: "Documents", Icon: FileText },
    { label: "Knowledge Graph", Icon: Share2 },
    { label: "Tasks", Icon: CheckSquare },
    { label: "Calendar", Icon: Calendar },
    { label: "Analytics", Icon: BarChart3 },
    { label: "Settings", Icon: Settings },
];

export default function Sidebar() {
    const [active, setActive] = useState("Dashboard");

    return (
        <aside
            className="flex h-full w-[248px] shrink-0 flex-col gap-5 border-r px-4 py-5"
            style={{ borderColor: "#1a1730", background: "linear-gradient(180deg,#0c0a18,#08060f)" }}
        >
            <div className="flex min-w-0 items-center gap-1 px-1">
                <div className="flex min-w-0 items-center gap-1 px-1">
                    <img
                        src={MemoraLogo}
                        alt="Memora Logo"
                        className="h-10 w-20 object-contain"
                    />
                </div>
                <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-1 px-1">
                        <img
                            src={MemoraWord}
                            alt="Memora word"
                            className="h-10 w-30 object-contain"
                        />
                    </div>
                    <p className="truncate text-[11px] text-slate-500">AI  Assistant</p>
                </div>
            </div>

            <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-1">
                {items.map(({ label, Icon, badge }, i) => {
                    const isActive = active === label;
                    return (
                        <motion.button
                            key={label}
                            onClick={() => setActive(label)}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.035 }}
                            whileHover={{ x: 4 }}
                            className="group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm"
                            style={{
                                color: isActive ? "#f8fafc" : "#9ca3af",
                                background: isActive
                                    ? "linear-gradient(100deg, rgba(139,92,246,0.9), rgba(109,40,217,0.55))"
                                    : "transparent",
                                boxShadow: isActive ? "0 12px 30px -16px rgba(139,92,246,1)" : undefined,
                            }}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="nav-glow"
                                    className="pointer-events-none absolute inset-0 rounded-xl"
                                    style={{ border: "1px solid rgba(196,181,253,0.35)" }}
                                />
                            )}
                            <Icon size={17} className="shrink-0" />
                            <span className="truncate">{label}</span>
                            {badge && <Badge className="ml-auto" color="#60a5fa">{badge}</Badge>}
                        </motion.button>
                    );
                })}
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border p-4"
                style={{
                    borderColor: "#2a2748",
                    background: "linear-gradient(150deg, rgba(139,92,246,0.18), rgba(59,130,246,0.08))",
                }}
            >
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                    <Sparkles size={15} className="text-violet-300" /> Upgrade to Pro
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-400">
                    Unlock unlimited AI, storage and advanced features.
                </p>
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium text-white"
                    style={{
                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                        boxShadow: "0 12px 28px -14px rgba(139,92,246,1)",
                    }}
                >
                    Upgrade Now <ArrowRight size={15} />
                </motion.button>
            </motion.div>

            <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: "#1a1730" }}>
                <Avatar name="John Smith" size={38} />
                <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-2 truncate text-sm font-medium text-slate-100">
                        John Smith <Badge>Pro</Badge>
                    </p>
                    <p className="truncate text-[11px] text-slate-500">john@memora.ai</p>
                </div>
                <ChevronDown size={16} className="shrink-0 text-slate-500" />
            </div>
        </aside>
    );
}
