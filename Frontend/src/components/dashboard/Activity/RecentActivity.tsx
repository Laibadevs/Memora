import { motion } from "framer-motion";
import { Brain, CheckSquare, FileText, Video } from "lucide-react";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import { useMemory } from "../../../hooks/useDashBoard";

const meta = {
    Meeting: { Icon: Video, color: "#8b5cf6" },
    Document: { Icon: FileText, color: "#3b82f6" },
    Task: { Icon: CheckSquare, color: "#22c55e" },
    Memory: { Icon: Brain, color: "#ec4899" },
} as const;

export default function RecentActivity() {
    const { activity } = useMemory();

    return (
        <Card delay={0.15}>
            <div className="flex items-center justify-between gap-3">
                <p className="truncate text-base font-semibold text-slate-50">Recent Activity</p>
                <button className="shrink-0 text-xs font-medium text-violet-300">View All</button>
            </div>

            <ul className="mt-4 space-y-2">
                {activity.map((a, i) => {
                    const { Icon, color } = meta[a.tag];
                    return (
                        <motion.li
                            key={a.id}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            whileHover={{ x: 3 }}
                            className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                        >
                            <span
                                className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                                style={{ background: `color-mix(in oklab, ${color} 18%, transparent)` }}
                            >
                                <Icon size={16} style={{ color }} />
                            </span>
                            <span className="block min-w-0 flex-1 overflow-hidden">
                                <span className="block truncate text-sm font-medium text-slate-100">{a.title}</span>
                                <span className="block truncate text-xs text-slate-500">{a.subtitle}</span>
                            </span>
                            <Badge color={color} className="shrink-0">{a.tag}</Badge>
                        </motion.li>
                    );
                })}
            </ul>
        </Card>
    );
}
