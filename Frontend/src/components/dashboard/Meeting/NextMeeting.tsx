import { motion } from "framer-motion";
import { CalendarDays, Video } from "lucide-react";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Avatar from "../../common/Avatar";
import Button from "../../common/Button";
import { useMeetings } from "../../../hooks/useDashBoard";


const statuses = [
    { label: "AI Ready", color: "#22c55e" },
    { label: "Auto Recording ON", color: "#22c55e" },
    { label: "Memory Synced", color: "#22c55e" },
];

function Radar() {
    return (
        <div className="relative hidden h-[150px] w-[210px] shrink-0 sm:block">
            {[1, 2, 3].map((r) => (
                <motion.span
                    key={r}
                    className="absolute left-1/2 top-1/2 rounded-full border"
                    style={{
                        width: r * 70,
                        height: r * 70 * 0.42,
                        marginLeft: -(r * 70) / 2,
                        marginTop: -(r * 70 * 0.42) / 2,
                        borderColor: "rgba(168,85,247,0.35)",
                    }}
                    animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.96, 1.04, 0.96] }}
                    transition={{ duration: 3 + r, repeat: Infinity, ease: "easeInOut", delay: r * 0.25 }}
                />
            ))}
            <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-[26%] grid h-16 w-16 -translate-x-1/2 place-items-center rounded-2xl"
                style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(59,130,246,0.6))",
                    boxShadow: "0 0 40px -6px rgba(139,92,246,0.9), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
            >
                <Video size={26} className="text-white" />
            </motion.div>
            <motion.span
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ background: "#c4b5fd", boxShadow: "0 0 26px 8px rgba(168,85,247,0.8)" }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.3, 0.8] }}
                transition={{ duration: 2.4, repeat: Infinity }}
            />
        </div>
    );
}

export default function NextMeetingCard() {
    const { next } = useMeetings();

    return (
        <Card glow className="overflow-hidden">
            <div className="flex items-center justify-between gap-3">
                <p className="flex min-w-0 items-center gap-2 text-base font-semibold text-slate-50">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: "rgba(139,92,246,0.16)" }}>
                        <CalendarDays size={16} className="text-violet-300" />
                    </span>
                    <span className="truncate">Next Meeting</span>
                </p>
                <Badge color="#a855f7">{next.startsIn}</Badge>
            </div>

            <div className="mt-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-sm text-slate-400 whitespace-nowrap">{next.window}</p>
                    <p className="mt-1 text-xl font-bold text-slate-50">{next.title}</p>
                    <p className="text-sm text-slate-400">{next.project}</p>

                    <div className="mt-3 flex items-center">
                        {["Ava Reed", "Liam Cole", "Nina Park"].map((n, i) => (
                            <span key={n} style={{ marginLeft: i ? -10 : 0 }}>
                                <Avatar name={n} size={32} color={["#8b5cf6", "#3b82f6", "#ec4899"][i]} />
                            </span>
                        ))}
                        <span className="ml-2 rounded-full px-2 py-1 text-[11px] text-slate-300" style={{ background: "rgba(255,255,255,0.06)" }}>
                            +5
                        </span>
                    </div>

                    <Button className="mt-4 w-full whitespace-nowrap sm:w-auto" icon={<Video size={20} />}>
                        Join Zoom Meeting
                    </Button>
                </div>
                <Radar />
            </div>

            <div className="mt-4 flex flex-nowrap items-center gap-2 overflow-x-auto">
                {statuses.map((s, i) => (
                    <motion.span
                        key={s.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * i }}
                        className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-xs text-slate-300"
                        style={{ border: "1px solid #221f38", background: "rgba(255,255,255,0.03)" }}
                    >
                        <motion.span
                            className="h-2 w-2 rounded-full"
                            style={{ background: s.color, boxShadow: `0 0 10px ${s.color}` }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                        />
                        {s.label}
                    </motion.span>
                ))}
            </div>
        </Card>
    );
}
