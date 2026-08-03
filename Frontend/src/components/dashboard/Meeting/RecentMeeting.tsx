import { motion } from "framer-motion";
import { Video, ArrowRight } from "lucide-react";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import { useMeetings } from "../../../hooks/useDashBoard";

export default function RecentMeetings() {
    const { recent } = useMeetings();

    return (
        <Card delay={0.05}>
            <div className="flex items-center justify-between gap-3">
                <p className="truncate text-base font-semibold text-slate-50">Recent Meetings</p>
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
                        className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5"
                    >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: "rgba(59,130,246,0.16)" }}>
                            <Video size={16} className="text-sky-300" />
                        </span>
                        <span className="block min-w-0 flex-1 overflow-hidden">
                            <span className="block truncate text-sm font-medium text-slate-100">{m.title}</span>
                            <span className="block truncate text-xs text-slate-500">
                                {m.date} • {m.duration}
                            </span>
                        </span>
                        <Badge color="#22c55e" className="shrink-0">{m.status}</Badge>
                    </motion.li>
                ))}
            </ul>

            <button className="mt-4 flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200">
                Go to Meetings <ArrowRight size={15} />
            </button>
        </Card>
    );
}
