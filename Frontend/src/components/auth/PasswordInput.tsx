import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    /** Optional element rendered on the right of the label row (e.g. "Forgot password?"). */
    labelAction?: React.ReactNode;
}

export default function PasswordInput({
    label = "Password",
    placeholder = "Enter your password",
    value,
    onChange,
    labelAction,
}: PasswordInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="group w-full">
            <div className="mb-1.5 sm:mb-2 flex items-center justify-between">
                <label className="text-[12px] sm:text-[13px] font-medium">{label}</label>
                {labelAction}
            </div>
            <div className="relative">
                <Lock
                    size={14}
                    className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 group-focus-within:text-[color:var(--color-accent)]"
                    style={{ color: "var(--color-gray)" }}
                />
                <motion.input
                    type={visible ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    whileFocus={{
                        scale: 1.01,
                        boxShadow: "0 0 0 3px color-mix(in oklab, var(--color-accent) 25%, transparent)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="w-full h-10 sm:h-11 rounded-xl px-10 sm:px-11 py-3 sm:py-3.5 text-[12px] sm:text-[13px] outline-none transition-colors duration-200 focus:border-[color:var(--color-accent)]"
                    style={{
                        background: "color-mix(in oklab, #ffffff 3%, transparent)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-white)",
                    }}
                />
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 transition-colors duration-200 hover:text-[color:var(--color-accent)]"
                    style={{ color: "var(--color-gray)" }}
                    aria-label={visible ? "Hide password" : "Show password"}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={visible ? "on" : "off"}
                            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                            transition={{ duration: 0.15 }}
                            className="block"
                        >
                            {visible ? <EyeOff size={14} /> : <Eye size={14} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>
        </div>
    );
}
