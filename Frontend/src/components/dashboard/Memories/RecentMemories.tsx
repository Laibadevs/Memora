import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Card from "../../common/Card";
import { useMemory } from "../../../hooks/useDashBoard";

export default function RecentMemories() {
    const { recent } = useMemory();

    return (
        <Card delay={0.1}>
            <div className="flex items-center justify-between gap-3">
                <p className="truncate text-base font-semibold text-slate-50">Recent Memories</p>
                <button className="shrink-0 text-xs font-medium text-violet-300">View All</button>
            </div>

            <ul className="mt-4 space-y-2">
                {recent.map((m, i) => (
                    <motion.li
                        key={m.id}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        whileHover={{ x: 3 }}
                        className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                    >
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: "rgba(139,92,246,0.16)" }}>
                            <FileText size={16} className="text-violet-300" />
                        </span>
                        <span className="block min-w-0 flex-1 overflow-hidden">
                            <span className="block truncate text-sm font-medium text-slate-100">{m.title}</span>
                            <span className="block truncate text-xs text-slate-500">
                                {m.source} • {m.date}
                            </span>
                        </span>
                    </motion.li>
                ))}
            </ul>
        </Card>
    );
}
