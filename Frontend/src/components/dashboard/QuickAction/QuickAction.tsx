import { motion } from "framer-motion";
import { Brain, FileUp, MessageSquare, Plus, Video } from "lucide-react";
import Card from "../../common/Card";

const actions = [
    { label: "Start Meeting", Icon: Video, color: "#8b5cf6" },
    { label: "Upload Document", Icon: FileUp, color: "#3b82f6" },
    { label: "Create Memory", Icon: Plus, color: "#ec4899" },
    { label: "Ask AI", Icon: MessageSquare, color: "#22c55e" },
    { label: "New Task", Icon: Brain, color: "#f59e0b" },
];

export default function QuickActions() {
    return (
        // <Card delay={0.1}>
        //     <div className="grid items-center gap-4 lg:grid-cols-[auto_minmax(0,1fr)]">
        //         <p className="text-base font-semibold text-slate-50">Quick Actions</p>
        //         <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        //             {actions.map((a, i) => (
        //                 <motion.button
        //                     key={a.label}
        //                     initial={{ opacity: 0, y: 18 }}
        //                     whileInView={{ opacity: 1, y: 0 }}
        //                     viewport={{ once: true }}
        //                     transition={{ duration: 0.45, delay: i * 0.07 }}
        //                     whileHover={{ y: -4, scale: 1.03 }}
        //                     whileTap={{ scale: 0.97 }}
        //                     className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm text-slate-200"
        //                     style={{ border: "1px solid #221f38", background: "rgba(255,255,255,0.03)" }}
        //                 >
        //                     <a.Icon size={16} style={{ color: a.color }} />
        //                     <span className="truncate">{a.label}</span>
        //                 </motion.button>
        //             ))}
        //         </div>
        //     </div>
        // </Card>
    );
}
