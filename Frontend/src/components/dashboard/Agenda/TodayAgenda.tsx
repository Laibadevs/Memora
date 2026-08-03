import { motion } from "framer-motion";
import { CalendarDays, Plus, Video } from "lucide-react";
import Card from "../../common/Card";
import { useMeetings } from "../../../hooks/useDashBoard";

export default function TodayAgenda() {
    const { agenda } = useMeetings();

    return (
        <Card delay={0.05}>
            <div className="flex items-center justify-between gap-3">
                <p className="flex min-w-0 items-center gap-2 text-base font-semibold text-slate-50">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: "rgba(139,92,246,0.16)" }}>
                        <CalendarDays size={16} className="text-violet-300" />
                    </span>
                    <span className="truncate">Today's Agenda</span>
                </p>
                <button className="shrink-0 text-xs font-medium text-violet-300 hover:text-violet-200">View Calendar</button>
            </div>

            <ul className="mt-4 space-y-1">
                {agenda.map((a, i) => (
                    <motion.li
                        key={a.id}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.07 }}
                        whileHover={{ x: 3 }}
                        className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/5"
                    >
                        <motion.span
                            className="h-2.5 w-2.5 shrink-0 rounded-full"
                            style={{ background: a.color, boxShadow: `0 0 10px ${a.color}` }}
                            animate={{ scale: [1, 1.35, 1] }}
                            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
                        />
                        <span className="w-[68px] shrink-0 text-xs text-slate-400">{a.time}</span>
                        <span className="block min-w-0 flex-1 overflow-hidden">
                            <span className="block truncate text-sm font-medium text-slate-100">{a.title}</span>
                            <span className="block truncate text-xs text-slate-500">{a.subtitle}</span>
                        </span>
                        <span
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-300 opacity-70 transition-opacity group-hover:opacity-100"
                            style={{ border: "1px solid #221f38", background: "rgba(255,255,255,0.03)" }}
                        >
                            <Video size={14} />
                        </span>
                    </motion.li>
                ))}
            </ul>

            <button className="mt-4 flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200">
                <Plus size={15} /> Add new meeting
            </button>
        </Card>
    );
}
