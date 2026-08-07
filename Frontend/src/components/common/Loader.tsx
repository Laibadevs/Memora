import { motion } from "framer-motion";

export default function Loader({ label = "Loading projects" }: { label?: string }) {
    return (
        <div className="flex items-center justify-center gap-3 py-16 text-sm text-slate-400">
            <span className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                        animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12 }}
                    />
                ))}
            </span>
            {label}…
        </div>
    );
}
