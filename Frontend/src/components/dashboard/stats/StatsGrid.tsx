import { motion } from "framer-motion";
import { ArrowUpRight, Brain, CheckSquare, FolderOpen, MessageSquare } from "lucide-react";
import Card from "../../common/Card";
import ActivityChart from "../../../components/charts/ActivityChart";
import { useStats } from "../../../hooks/useDashBoard";

const icons = {
    projects: FolderOpen,
    memories: Brain,
    chats: MessageSquare,
    tasks: CheckSquare,
} as const;

export default function StatsGrid() {
    const stats = useStats();

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                    <Card key={s.id} delay={i * 0.06} className="overflow-hidden">
                        <div className="flex items-center gap-3">
                            <motion.span
                                whileHover={{ rotate: 8, scale: 1.08 }}
                                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${s.color}, color-mix(in oklab, ${s.color} 45%, #000))`,
                                    boxShadow: `0 0 24px -8px ${s.color}`,
                                }}
                            >
                                <Icon size={18} className="text-white" />
                            </motion.span>
                            <p className="min-w-0 truncate text-sm text-slate-300">{s.label}</p>
                        </div>

                        <p className="mt-3 text-3xl font-black text-slate-50">{s.value}</p>
                        <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: s.color }}>
                            <ArrowUpRight size={13} /> {s.delta}
                            <span className="text-slate-500"> from last month</span>
                        </p>

                        <div className="mt-3 -mx-1">
                            <ActivityChart data={s.series} color={s.color} />
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
