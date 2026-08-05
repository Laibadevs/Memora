import { motion } from "framer-motion";
import { AudioLines, MonitorPlay, BarChart3 } from "lucide-react";
import Card from "../../common/Card";
import Badge from "../../common/Badge";
import Button from "../../common/Button";
import ProgressBar from "../../common/ProgressBar";
import { usePresentation } from "../../../hooks/useDashBoard";

export default function PresentationCard() {
    const deck = usePresentation();

    return (
        <Card delay={0.08}>
            <div className="flex items-center justify-between gap-3">
                <p className="flex min-w-0 items-center gap-2 text-base font-semibold text-slate-50">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ background: "rgba(59,130,246,0.16)" }}>
                        <MonitorPlay size={16} className="text-sky-300" />
                    </span>
                    <span className="truncate">Today's Presentation</span>
                </p>
                <Badge color="#22c55e">Ready</Badge>
            </div>

            <div className="mt-3 flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <p className="text-lg font-bold text-slate-50">{deck.title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                        {deck.slides} slides • {deck.updated}
                    </p>

                    <p className="mt-4 text-4xl font-black text-slate-50">{deck.readiness}%</p>
                    <p className="text-sm text-slate-400">Ready</p>
                    <div className="mt-2 max-w-[240px]">
                        <ProgressBar value={deck.readiness} />
                    </div>
                </div>

                {/* floating deck stack */}
                <div className="relative hidden h-[140px] w-[180px] shrink-0 sm:block">
                    {[0, 1].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [-4 - i * 2, 6 + i * 2, -4 - i * 2], rotate: [-6 + i * 3, -2 + i * 3, -6 + i * 3] }}
                            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute rounded-2xl"
                            style={{
                                inset: `${20 + i * 14}px ${10 + i * 18}px auto auto`,
                                width: 130,
                                height: 100,
                                background: "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(59,130,246,0.18))",
                                border: "1px solid rgba(168,85,247,0.4)",
                                boxShadow: "0 16px 40px -18px rgba(139,92,246,0.9)",
                                backdropFilter: "blur(6px)",
                            }}
                        />
                    ))}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-8 top-12 flex h-[86px] items-end gap-1.5 rounded-xl px-3 pb-3"
                    >
                        {[26, 44, 34, 58].map((h, i) => (
                            <motion.span
                                key={i}
                                className="w-3 rounded-t-md"
                                style={{ background: "linear-gradient(180deg,#c4b5fd,#7c3aed)", boxShadow: "0 0 14px rgba(139,92,246,0.8)" }}
                                initial={{ height: 6 }}
                                whileInView={{ height: h }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, delay: 0.15 * i, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="mt-4 flex flex-nowrap gap-2 overflow-x-auto">
                <Button variant="outline" className="flex-1 whitespace-nowrap" icon={<MonitorPlay size={18} />}>Open Presentation</Button>
                <Button variant="outline" className="flex-1 whitespace-nowrap" icon={<AudioLines size={18} />}>Practice with AI</Button>
            </div>
            <BarChart3 className="hidden" />
        </Card>
    );
}
