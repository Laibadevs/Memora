import { motion } from "framer-motion";
import { FolderSearch } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
    title: string;
    subtitle?: string;
    action?: ReactNode;
};

export default function EmptyState({ title, subtitle, action }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid place-items-center rounded-2xl border px-6 py-16 text-center"
            style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.02)" }}
        >
            <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-16 w-16 place-items-center rounded-2xl"
                style={{
                    background: "linear-gradient(135deg,#8b5cf6,#3b82f6)",
                    boxShadow: "0 0 40px -10px #8b5cf6",
                }}
            >
                <FolderSearch size={26} className="text-white" />
            </motion.span>
            <p className="mt-4 text-lg font-semibold text-slate-100">{title}</p>
            {subtitle && <p className="mt-1 max-w-sm text-sm text-slate-400">{subtitle}</p>}
            {action && <div className="mt-5">{action}</div>}
        </motion.div>
    );
}
