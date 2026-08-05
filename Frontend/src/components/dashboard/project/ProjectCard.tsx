import { motion } from "framer-motion";
import { FileText, Video, MonitorPlay, Star } from "lucide-react";
// import ProjectMembers from "./ProjectMembers";
import ProjectMenu from "../project/ProjectMenu";
import type { Project, ViewMode } from "../../../types/project";
import { statusColor, statusLabel } from "../../../utils/project";

type Props = {
    project: Project;
    view: ViewMode;
    index: number;
    onStar: (id: string) => void;
    onDelete: (id: string) => void;
};

/** Animated aurora ribbon painted behind each project header. */
function Aurora({ color }: { color: string }) {
    return (
        <svg viewBox="0 0 400 120" className="h-full w-full" preserveAspectRatio="none">
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={`M0 ${70 + i * 8} C 90 ${20 + i * 16}, 190 ${104 - i * 12}, 400 ${44 + i * 10}`}
                    fill="none"
                    stroke={color}
                    strokeWidth={16 - i * 4}
                    strokeLinecap="round"
                    opacity={0.24 - i * 0.05}
                    style={{ filter: "blur(9px)" }}
                    animate={{ pathOffset: [0, 1] }}
                    transition={{ duration: 9 + i * 3, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </svg>
    );
}

export default function ProjectCard({ project: p, view, index, onStar, onDelete }: Props) {
    const metrics = [
        { Icon: FileText, value: p.documents, label: "Documents", color: "#94a3b8" },
        { Icon: Video, value: p.meetings, label: "Meetings", color: "#3b82f6" },
        { Icon: MonitorPlay, value: p.presentations, label: "Presentations", color: "#f59e0b" },
    ];

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
            whileHover={{ y: -6 }}
            className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl ${view === "list" ? "grid gap-4 p-5 lg:grid-cols-[minmax(0,1.6fr)_auto_auto]" : "flex flex-col"
                }`}
            style={{
                borderColor: "#221f38",
                background: "linear-gradient(160deg, rgba(24,20,48,0.85), rgba(11,9,24,0.94))",
            }}
        >
            {/* hover glow ring */}
            <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: `0 0 60px -20px ${p.color}, inset 0 0 0 1px color-mix(in oklab, ${p.color} 35%, transparent)` }}
            />

            {view === "grid" && (
                <div className="relative h-[104px] w-full overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{ background: `radial-gradient(120% 140% at 10% 0%, color-mix(in oklab, ${p.color} 22%, transparent), transparent 70%)` }}
                    />
                    <Aurora color={p.color} />
                </div>
            )}

            <div className={view === "grid" ? "-mt-14 flex min-w-0 flex-1 flex-col p-5" : "min-w-0"}>
                <div className="flex items-start justify-between gap-3">
                    <motion.span
                        whileHover={{ rotate: -6, scale: 1.06 }}
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-black text-white"
                        style={{
                            background: `linear-gradient(135deg, ${p.color}, color-mix(in oklab, ${p.color} 45%, #000))`,
                            boxShadow: `0 12px 30px -14px ${p.color}`,
                        }}
                    >
                        {p.initial}
                    </motion.span>

                    <motion.button
                        whileHover={{ scale: 1.2, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onStar(p.id)}
                        aria-label={p.starred ? "Unstar project" : "Star project"}
                        className="shrink-0 text-slate-500 transition-colors hover:text-amber-300"
                    >
                        <Star size={18} fill={p.starred ? "#fbbf24" : "none"} color={p.starred ? "#fbbf24" : "currentColor"} />
                    </motion.button>
                </div>

                <div className="mt-4 flex min-w-0 flex-wrap items-center gap-2">
                    <h3 className="min-w-0 truncate text-base font-semibold text-slate-50">{p.name}</h3>
                    <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                        style={{
                            color: statusColor[p.status],
                            background: `color-mix(in oklab, ${statusColor[p.status]} 16%, transparent)`,
                        }}
                    >
                        {statusLabel[p.status]}
                    </span>
                </div>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-400">{p.description}</p>

                {/* progress */}
                <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Progress</span>
                        <span style={{ color: p.color }}>{p.progress}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p.progress}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${p.color}, #c084fc)`, boxShadow: `0 0 12px -2px ${p.color}` }}
                        />
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 border-t pt-4" style={{ borderColor: "#1c1934" }}>
                    {metrics.map(({ Icon, value, label, color }) => (
                        <motion.div key={label} whileHover={{ y: -2 }} className="min-w-0">
                            <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-100">
                                <Icon size={14} style={{ color }} /> {value}
                            </p>
                            <p className="mt-0.5 truncate text-[11px] text-slate-500">{label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: "#1c1934" }}>

                    <div className="flex shrink-0 items-center gap-1">
                        <span className="whitespace-nowrap text-[11px] text-slate-500">Updated {p.updatedAt}</span>
                        <ProjectMenu onDelete={() => onDelete(p.id)} />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
