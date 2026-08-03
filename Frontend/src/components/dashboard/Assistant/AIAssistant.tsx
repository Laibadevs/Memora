import { motion } from "framer-motion";
import { Send, Sparkles, SquareCheck } from "lucide-react";
import Card from "../../common/Card";
import { useAssistant } from "../../../hooks/useDashBoard";

export default function AIAssistant() {
    const assistant = useAssistant();

    return (
        <Card delay={0.12} glow className="overflow-hidden">
            <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full blur-3xl"
                style={{ background: "rgba(139,92,246,0.35)" }}
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative flex items-center justify-between gap-3">
                <p className="flex min-w-0 items-center gap-2 text-base font-semibold text-slate-50">
                    <motion.span
                        animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                        style={{ background: "rgba(168,85,247,0.18)" }}
                    >
                        <Sparkles size={16} className="text-violet-300" />
                    </motion.span>
                    <span className="truncate">AI Assistant</span>
                </p>
                <span className="flex shrink-0 items-center gap-2 text-xs text-slate-300">
                    <motion.span
                        className="h-2 w-2 rounded-full bg-emerald-400"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    Online
                </span>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mt-4 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid #221f38" }}
            >
                {assistant.greeting}
            </motion.p>

            <ul className="relative mt-3 space-y-2">
                {assistant.suggestions.map((s, i) => (
                    <motion.li
                        key={s}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.08 * i }}
                    >
                        <motion.button
                            whileHover={{ x: 4, backgroundColor: "rgba(139,92,246,0.14)" }}
                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm text-slate-200"
                            style={{ border: "1px solid #221f38", background: "rgba(255,255,255,0.03)" }}
                        >
                            <SquareCheck size={15} className="shrink-0 text-violet-300" />
                            <span className="truncate">{s}</span>
                        </motion.button>
                    </motion.li>
                ))}
            </ul>

            <div
                className="relative mt-4 flex items-center gap-2 rounded-2xl px-3 py-2"
                style={{ border: "1px solid #221f38", background: "rgba(255,255,255,0.03)" }}
            >
                <input
                    placeholder="Ask anything..."
                    className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
                <motion.button
                    whileHover={{ scale: 1.08, rotate: -8 }}
                    whileTap={{ scale: 0.92 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white"
                    style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)", boxShadow: "0 10px 24px -12px rgba(139,92,246,1)" }}
                    aria-label="Send"
                >
                    <Send size={15} />
                </motion.button>
            </div>
        </Card>
    );
}
