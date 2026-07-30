import type { InputHTMLAttributes, ReactNode } from "react";

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
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="text-[13px] font-normal">{label}</label>
                {labelAction}
            </div>
            <div className="relative">
                <span
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gray)" }}
                >
                    {icon}
                </span>
                <input
                    {...rest}
                    className={`w-full h-10 rounded-xl px-11 py-3.5 text-[12px] outline-none transition-colors focus:border-[color:var(--color-accent)] ${className}`}
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
