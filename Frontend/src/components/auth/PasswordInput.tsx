import { useState } from "react";
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
        <div>
            <div className="mb-2 flex items-center justify-between">
                <label className="text-[13px] font-medium">{label}</label>
                {labelAction}
            </div>
            <div className="relative">
                <Lock
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gray)" }}
                />
                <input
                    type={visible ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full h-10 rounded-xl px-11 py-3.5 text-[12px] outline-none transition-colors focus:border-[color:var(--color-accent)]"
                    style={{
                        background: "color-mix(in oklab, #ffffff 3%, transparent)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-white)",
                    }}
                />
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gray)" }}
                    aria-label={visible ? "Hide password" : "Show password"}
                >
                    {visible ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
            </div>
        </div>
    );
}
