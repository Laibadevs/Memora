import { motion } from "framer-motion";
import { FolderOpen, FileText, Video, MonitorPlay } from "lucide-react";
import Card from "../../common/Card";
import ActivityChart from "../../../components/charts/ActivityChart";
import { useProjectStats } from "../../../hooks/useProjects";

const icons = {
    projects: FolderOpen,
    documents: FileText,
    meetings: Video,
    presentations: MonitorPlay,
} as const;

export default function ProjectStats() {
    const stats = useProjectStats();

    return (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                    <Card key={s.id} delay={i * 0.06} className="overflow-hidden">
                        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                            <motion.span
                                whileHover={{ rotate: 8, scale: 1.08 }}
                                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${s.color}, color-mix(in oklab, ${s.color} 40%, #000))`,
                                    boxShadow: `0 0 26px -8px ${s.color}`,
                                }}
                            >
                                <Icon size={20} className="text-white" />
                            </motion.span>

                            <div className="min-w-0">
                                <p className="text-2xl font-black leading-none text-slate-50">{s.value}</p>
                                <p className="mt-1.5 text-xs leading-tight text-slate-400">{s.label}</p>
                            </div>

                            <div className="hidden w-14 shrink-0 opacity-90 sm:block">
                                <ActivityChart data={s.series} color={s.color} height={30} />
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
