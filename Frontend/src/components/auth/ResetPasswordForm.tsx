import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Loader2, AlertTriangle, CheckCircle2 } from "lucide-react";
import PasswordInput from "./PasswordInput";
import { resetPassword, type ApiError } from "../../services/auth";
import LOGO from "../../assets/LOGO.png";
import MemoraWord from "../../assets/memora_word.png";

const fade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

const SEGMENT_COLORS = ["#a855f7", "#8b5cf6", "#3b82f6"];
const STRENGTH_LABEL = ["", "Weak", "Medium", "Strong"];
const STRENGTH_COLOR = ["", "#f87171", "#facc15", "#4ade80"];

function getStrength(password: string) {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;
    return Math.max(score, password.length > 0 ? 1 : 0);
}

/** Shared card wrapper so the "invalid link" / "success" / "form" states all look consistent. */
function Card({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex h-auto w-full max-w-[380px] sm:max-w-[420px] flex-col items-center rounded-3xl p-6 sm:p-8"
            style={{
                background:
                    "linear-gradient(180deg, color-mix(in oklab, #14101f 55%, transparent), color-mix(in oklab, #0a0714 60%, transparent))",
                border: "1px solid color-mix(in oklab, var(--color-accent) 30%, transparent)",
                boxShadow: "0 0 60px -10px color-mix(in oklab, var(--color-primary) 35%, transparent)",
            }}
        >
            <motion.div {...fade} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2">
                <img src={LOGO} alt="" className="h-10 w-auto" />
                <img src={MemoraWord} alt="Memora" className="h-4 w-auto" />
            </motion.div>
            {children}
        </motion.div>
    );
}

export default function ResetPasswordForm() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const strength = useMemo(() => getStrength(password), [password]);
    const mismatch = confirmPassword.length > 0 && password !== confirmPassword;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token || mismatch || !password || loading) return;

        setLoading(true);
        setError(null);
        try {
            await resetPassword(token, password);
            setSuccess(true);
        } catch (err) {
            setError((err as ApiError).message ?? "Couldn't reset your password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // --- No/invalid token: don't even show the form ---
    if (!token) {
        return (
            <div className="flex flex-col items-center">
                <Card>
                    <div className="mt-6 flex flex-col items-center text-center">
                        <div
                            className="mb-4 grid h-14 w-14 place-items-center rounded-full"
                            style={{
                                background: "color-mix(in oklab, #f87171 12%, transparent)",
                                border: "1px solid color-mix(in oklab, #f87171 40%, transparent)",
                            }}
                        >
                            <AlertTriangle size={22} style={{ color: "#f87171" }} />
                        </div>
                        <h2
                            className="text-xl text-white font-semibold"
                            style={{ fontFamily: "var(--font-subheading)" }}
                        >
                            Invalid or expired link
                        </h2>
                        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "var(--color-gray)" }}>
                            This password reset link is missing or no longer valid. Request a new
                            one to continue.
                        </p>
                        <Link
                            to="/forgot-password"
                            className="mt-6 flex w-full h-10 sm:h-11 items-center justify-center rounded-xl text-[13px] sm:text-sm font-medium text-white"
                            style={{
                                background: "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                                boxShadow: "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                            }}
                        >
                            Request a new link
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    // --- Success ---
    if (success) {
        return (
            <div className="flex flex-col items-center">
                <Card>
                    <div className="mt-6 flex flex-col items-center text-center">
                        <div
                            className="mb-4 grid h-14 w-14 place-items-center rounded-full"
                            style={{
                                background: "color-mix(in oklab, #4ade80 12%, transparent)",
                                border: "1px solid color-mix(in oklab, #4ade80 40%, transparent)",
                            }}
                        >
                            <CheckCircle2 size={22} style={{ color: "#4ade80" }} />
                        </div>
                        <h2
                            className="text-xl text-white font-semibold"
                            style={{ fontFamily: "var(--font-subheading)" }}
                        >
                            Password reset
                        </h2>
                        <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "var(--color-gray)" }}>
                            Your password has been updated. You can now log in with your new
                            password.
                        </p>
                        <Link
                            to="/login"
                            className="mt-6 flex w-full h-10 sm:h-11 items-center justify-center rounded-xl text-[13px] sm:text-sm font-medium text-white"
                            style={{
                                background: "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                                boxShadow: "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                            }}
                        >
                            Log in
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    // --- Form ---
    return (
        <div className="flex flex-col items-center">
            <Card>
                <div className="mt-6 mb-6 text-center">
                    <motion.h2
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-xl sm:text-2xl text-white font-semibold"
                        style={{ fontFamily: "var(--font-subheading)" }}
                    >
                        Reset Your Password
                    </motion.h2>
                    <motion.p
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-3 text-[12px] sm:text-[13px] leading-relaxed"
                        style={{ color: "var(--color-gray)" }}
                    >
                        Enter your new password below. Make sure it's strong and something
                        you'll remember.
                    </motion.p>
                </div>

                <form className="w-full text-white space-y-5" onSubmit={handleSubmit}>
                    <motion.div {...fade} transition={{ duration: 0.6, delay: 0.15 }}>
                        <PasswordInput
                            label="New password"
                            placeholder="Create a password"
                            value={password}
                            onChange={setPassword}
                        />

                        {password && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-2.5 flex items-center gap-2"
                            >
                                <div className="flex flex-1 gap-1.5">
                                    {SEGMENT_COLORS.map((color, i) => (
                                        <div
                                            key={i}
                                            className="h-1 flex-1 rounded-full transition-colors duration-300"
                                            style={{ background: i < strength ? color : "var(--color-border)" }}
                                        />
                                    ))}
                                </div>
                                <span
                                    className="text-[11px] font-medium whitespace-nowrap"
                                    style={{ color: STRENGTH_COLOR[strength] }}
                                >
                                    {STRENGTH_LABEL[strength]}
                                </span>
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }}>
                        <PasswordInput
                            label="Confirm new password"
                            placeholder="Re-enter password"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                        />
                        {mismatch && (
                            <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-1.5 text-[11px]"
                                style={{ color: "#f87171" }}
                            >
                                Passwords don't match.
                            </motion.p>
                        )}
                    </motion.div>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-lg px-3 py-2 text-[12px]"
                            style={{
                                background: "color-mix(in oklab, #f87171 10%, transparent)",
                                border: "1px solid color-mix(in oklab, #f87171 30%, transparent)",
                                color: "#fca5a5",
                            }}
                        >
                            {error}
                        </motion.p>
                    )}

                    <motion.button
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        whileHover={{ y: -1, scale: 1.005 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        disabled={!password || mismatch || loading}
                        className="flex w-full h-10 sm:h-11 items-center justify-center gap-2 rounded-xl text-[13px] sm:text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                        style={{
                            background: "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                            boxShadow: "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                        }}
                    >
                        {loading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" /> Resetting…
                            </>
                        ) : (
                            "Reset Password"
                        )}
                    </motion.button>
                </form>

                <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="mt-5">
                    <Link
                        to="/login"
                        className="text-[12px] sm:text-[13px] font-medium transition-colors hover:underline"
                        style={{ color: "var(--color-accent)" }}
                    >
                        Back to log in
                    </Link>
                </motion.div>
            </Card>
        </div>
    );
}