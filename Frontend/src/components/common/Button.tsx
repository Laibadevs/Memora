import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../libs/utils";

type Props = {
    children: ReactNode;
    icon?: ReactNode;
    variant?: "primary" | "ghost" | "outline";
    className?: string;
    onClick?: () => void;
};

export default function Button({ children, icon, variant = "primary", className, onClick }: Props) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors";
    const styles =
        variant === "primary"
            ? "text-white"
            : variant === "outline"
                ? "text-slate-200 border"
                : "text-slate-300 hover:text-white";

    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={cn(base, styles, className)}
            style={
                variant === "primary"
                    ? {
                        background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
                        boxShadow: "0 10px 30px -12px rgba(139,92,246,0.9)",
                    }
                    : variant === "outline"
                        ? { borderColor: "#2a2748", background: "rgba(255,255,255,0.03)" }
                        : undefined
            }
        >
            {icon}
            {children}
        </motion.button>
    );
}
