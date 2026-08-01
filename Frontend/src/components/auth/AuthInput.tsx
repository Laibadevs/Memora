import type { InputHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon: ReactNode;
    /** Optional element rendered on the right of the label row (e.g. "Forgot password?"). */
    labelAction?: ReactNode;
}

/**
 * Shared text input for the auth pages (Login, Signup, Reset Password): a
 * label row, a left-aligned icon, and consistent dark/glass styling that
 * matches the rest of the site's `--color-*` design tokens.
 */
export default function AuthInput({ label, icon, labelAction, className = "", ...rest }: AuthInputProps) {
    return (
        <div className="group w-full">
            <div className="mb-1.5 sm:mb-2 flex items-center justify-between">
                <label className="text-[12px] sm:text-[13px] font-normal">{label}</label>
                {labelAction}
            </div>
            <div className="relative">
                <span
                    className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:text-[color:var(--color-accent)]"
                    style={{ color: "var(--color-gray)" }}
                >
                    {icon}
                </span>
                <motion.input
                    {...(rest as any)}
                    whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 3px color-mix(in oklab, var(--color-accent) 25%, transparent)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-full h-10 sm:h-11 rounded-xl px-10 sm:px-11 py-3 sm:py-3.5 text-[12px] sm:text-[13px] outline-none transition-colors duration-200 focus:border-[color:var(--color-accent)] ${className}`}
                    style={{
                        background: "color-mix(in oklab, #ffffff 3%, transparent)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-white)",
                    }}
                />
            </div>
        </div>
    );
}
