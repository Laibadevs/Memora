import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Mail, Loader2 } from "lucide-react";
import { requestPasswordReset } from "../../services/auth";
import LOGO from "../../assets/LOGO.png";
import MemoraWord from "../../assets/memora_word.png";

const fade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

export default function EmailSentCard() {
    const location = useLocation();
    const email = (location.state as { email?: string } | null)?.email;

    const [resending, setResending] = useState(false);
    const [resent, setResent] = useState(false);

    const handleResend = async () => {
        if (!email || resending) return;
        setResending(true);
        try {
            await requestPasswordReset(email);
            setResent(true);
        } catch {
            // silently ignore — this is a best-effort convenience action
        } finally {
            setResending(false);
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
                <motion.div {...fade} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2">
                    <img src={LOGO} alt="" className="h-10 w-auto" />
                    <img src={MemoraWord} alt="Memora" className="h-4 w-auto" />
                </motion.div>

                <motion.div
                    {...fade}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="my-6 grid h-16 w-16 place-items-center rounded-full"
                    style={{
                        border: "1.5px solid color-mix(in oklab, var(--color-accent) 55%, transparent)",
                        boxShadow: "0 0 24px -4px color-mix(in oklab, var(--color-accent) 60%, transparent)",
                        background: "color-mix(in oklab, var(--color-primary) 8%, transparent)",
                    }}
                >
                    <Mail size={22} style={{ color: "var(--color-accent)" }} />
                </motion.div>

                <div className="text-center">
                    <motion.h2
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-xl sm:text-2xl text-white font-semibold"
                        style={{ fontFamily: "var(--font-subheading)" }}
                    >
                        Check your inbox
                    </motion.h2>
                    <motion.p
                        {...fade}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-3 text-[12px] sm:text-[13px] leading-relaxed"
                        style={{ color: "var(--color-gray)" }}
                    >
                        {email ? (
                            <>
                                We've sent a password reset link to{" "}
                                <span className="font-medium" style={{ color: "var(--color-white)" }}>
                                    {email}
                                </span>
                                .
                            </>
                        ) : (
                            "We've sent a password reset link to your email."
                        )}
                    </motion.p>
                </div>

                <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 w-full space-y-3">
                    <Link
                        to="/login"
                        className="flex w-full h-10 sm:h-11 items-center justify-center rounded-xl text-[13px] sm:text-sm font-medium text-white"
                        style={{
                            background: "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                            boxShadow: "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                        }}
                    >
                        Back to log in
                    </Link>

                    {email && (
                        <button
                            type="button"
                            onClick={handleResend}
                            disabled={resending}
                            className="flex w-full items-center justify-center gap-2 text-[12px] sm:text-[13px] font-medium transition-colors hover:underline disabled:opacity-60"
                            style={{ color: "var(--color-accent)" }}
                        >
                            {resending ? (
                                <>
                                    <Loader2 size={13} className="animate-spin" /> Resending…
                                </>
                            ) : resent ? (
                                "Sent again ✓"
                            ) : (
                                "Didn't get it? Resend"
                            )}
                        </button>
                    )}
                </motion.div>
            </motion.div>
        </div>
    );
}
