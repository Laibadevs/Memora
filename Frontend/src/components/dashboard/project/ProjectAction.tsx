import { motion } from "framer-motion";
import { Plus, Upload, Sparkles, Users } from "lucide-react";

const actions = [
    { label: "New Project", Icon: Plus, color: "#8b5cf6" },
    { label: "Import", Icon: Upload, color: "#3b82f6" },
    { label: "Generate with AI", Icon: Sparkles, color: "#a855f7" },
    { label: "Invite Team", Icon: Users, color: "#22c55e" },
];

export default function ProjectActions({ onCreate }: { onCreate?: () => void }) {
    return (
        <div className="flex flex-wrap gap-3">
            {actions.map(({ label, Icon, color }, i) => (
                <motion.button
                    key={label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={label === "New Project" ? onCreate : undefined}
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm text-slate-200"
                    style={{
                        borderColor: `color-mix(in oklab, ${color} 32%, #221f38)`,
                        background: `color-mix(in oklab, ${color} 10%, rgba(255,255,255,0.02))`,
                    }}
                >
                    <Icon size={16} style={{ color }} />
                    {label}
                </motion.button>
            ))}
        </div>
    );
}
