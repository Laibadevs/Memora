import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import AuthInput from "./AuthInput";
import AuthFooter from "./AuthFooter";
import { requestPasswordReset, type ApiError } from "../../services/auth";
import LOGO from "../../assets/LOGO.png";
import MemoraWord from "../../assets/memora_word.png";

const fade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);
        setError(null);
        try {
            await requestPasswordReset(email);
            setSent(true);
        } catch (err) {
            setError((err as ApiError).message ?? "Couldn't send the reset link. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
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
                {/* logo */}
                <motion.div
                    {...fade}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-2"
                >
                    <img src={LOGO} alt="" className="h-10 w-auto" />
                    <img src={MemoraWord} alt="Memora" className="h-4 w-auto" />
                </motion.div>

                {/* header */}
                <div className="mt-6 text-center">
                    <motion.h2
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-xl sm:text-2xl text-white font-semibold"
                        style={{ fontFamily: "var(--font-subheading)" }}
                    >
                        Forgot Password?
                    </motion.h2>
                    <motion.p
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-3 text-[12px] sm:text-[13px] leading-relaxed"
                        style={{ color: "var(--color-gray)" }}
                    >
                        {sent
                            ? "Check your inbox for a link to reset your password."
                            : " Enter your email address and we'll send you a link to reset your password."}
                    </motion.p>
                </div>

                {/* icon badge */}
                <motion.div
                    {...fade}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="my-6 grid h-16 w-16 place-items-center rounded-full"
                    style={{
                        border: "1.5px solid color-mix(in oklab, var(--color-accent) 55%, transparent)",
                        boxShadow: "0 0 24px -4px color-mix(in oklab, var(--color-accent) 60%, transparent)",
                        background: "color-mix(in oklab, var(--color-primary) 8%, transparent)",
                    }}
                >
                    <Mail size={22} style={{ color: "var(--color-accent)" }} />
                </motion.div>

                {sent ? (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full rounded-xl px-4 py-3.5 text-[13px] leading-relaxed text-center"
                        style={{
                            background: "color-mix(in oklab, var(--color-accent) 10%, transparent)",
                            border: "1px solid color-mix(in oklab, var(--color-accent) 25%, transparent)",
                            color: "var(--color-white)",
                        }}
                    >
                        We've sent a reset link to <span className="font-medium">{email}</span>.
                    </motion.div>
                ) : (
                    <form className="w-full text-white space-y-5" onSubmit={handleSubmit}>
                        <motion.div {...fade} transition={{ duration: 0.6, delay: 0.2 }}>
                            <AuthInput
                                label="Email address"
                                icon={<Mail size={14} />}
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
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
                            disabled={loading}
                            className="flex w-full h-10 sm:h-11 items-center justify-center gap-2 rounded-xl text-[13px] sm:text-sm font-medium text-white disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                            style={{
                                background: "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                                boxShadow: "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                            }}
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" /> Sending…
                                </>
                            ) : (
                                "Send Reset Link"
                            )}
                        </motion.button>
                    </form>
                )}

                <AuthFooter
                    prompt="Remember your password?"
                    linkLabel="Log in"
                    to="/login"
                    delay={0.3}
                />
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-[12px]"
                style={{ color: "var(--color-gray)" }}
            >
                © 2024 Memora. All rights reserved.
            </motion.p>
        </div>
    );
}