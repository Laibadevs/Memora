import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Check } from "lucide-react";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";
import SocialSignup from "./SocialSignup";
import AuthFooter from "./AuthFooter";

const fade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire up to services/auth.ts once the API is ready.
    };

    return (
        <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex h-auto ml-10 mt-2 w-full max-w-[380px] sm:max-w-[400px] flex-col rounded-3xl p-6 sm:p-8"
            style={{
                background:
                    "linear-gradient(180deg, color-mix(in oklab, #14101f 40%, transparent), color-mix(in oklab, #0a0714 42%, transparent))",
                border: "1px solid color-mix(in oklab, var(--color-accent) 25%, transparent)",
                boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--color-primary) 25%, transparent)",
            }}
        >
            {/* header */}
            <div className="text-center -mt-1 sm:-mt-3">
                <motion.h2
                    {...fade}
                    transition={{ duration: 0.6 }}
                    className="text-lg sm:text-xl text-white font-semibold"
                    style={{ fontFamily: "var(--font-subheading)" }}
                >
                    Create Account
                </motion.h2>
                <motion.p
                    {...fade}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="mt-2 text-[12px] sm:text-[13px]"
                    style={{ color: "var(--color-gray)" }}
                >
                    Start building your Memora account
                </motion.p>
            </div>
            <form className="mt-4 text-white space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <motion.div {...fade} transition={{ duration: 0.6, delay: 0.08 }}>
                    <AuthInput
                        label="Full name"
                        icon={<User size={14} />}
                        type="text"
                        placeholder="Jane Cooper"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </motion.div>

                <motion.div {...fade} transition={{ duration: 0.6, delay: 0.13 }}>
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

                <div className="grid grid-cols-2 gap-3">
                    <motion.div {...fade} transition={{ duration: 0.6, delay: 0.18 }}>
                        <PasswordInput
                            label="Password"
                            placeholder="Password"
                            value={password}
                            onChange={setPassword}
                        />
                    </motion.div>

                    <motion.div {...fade} transition={{ duration: 0.6, delay: 0.22 }}>
                        <PasswordInput
                            label="Confirm password"
                            placeholder="Re-enter"
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                        />
                    </motion.div>
                </div>
                <motion.label
                    {...fade}
                    transition={{ duration: 0.6, delay: 0.26 }}
                    className="flex cursor-pointer items-start gap-3 text-[12px] sm:text-[13px] leading-relaxed select-none"
                >
                    <span
                        className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-sm transition-colors"
                        style={{
                            background: agree ? "linear-gradient(135deg,#8b5cf6,#3b82f6)" : "transparent",
                            border: `1px solid ${agree ? "transparent" : "var(--color-border)"}`,
                        }}
                        onClick={() => setAgree((v) => !v)}
                    >
                        {agree && <Check size={12} className="text-white" />}
                    </span>
                    <span style={{ color: "var(--color-gray)" }}>
                        I agree to the{" "}
                        <a href="/terms" className="font-medium hover:underline" style={{ color: "var(--color-accent)" }}>
                            Terms
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="font-medium hover:underline" style={{ color: "var(--color-accent)" }}>
                            Privacy Policy
                        </a>
                    </span>
                </motion.label>         <motion.button
                    {...fade}
                    transition={{
                        duration: 0.25,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        y: -2,
                        scale: 1.02,
                        boxShadow: "0 14px 35px -8px rgba(139,92,246,0.65)",
                    }}
                    whileTap={{
                        scale: 0.97,
                    }}
                    type="submit"
                    className="
                        mt-2
                        flex
                        w-full
                        h-10
                        sm:h-11
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        text-[13px]
                        sm:text-sm
                        font-normal
                        text-white
                        transition-all
                        duration-300
                        ease-out
                    "
                    style={{
                        background:
                            "linear-gradient(90deg,#8B5CF6 0%,#7C3AED 50%,#3B82F6 100%)",
                        boxShadow:
                            "0 10px 30px -6px color-mix(in oklab, var(--color-primary) 60%, transparent)",
                    }}
                >
                    Create Account
                </motion.button>
            </form>

            <SocialSignup delay={0.35} />

            <AuthFooter
                prompt="Already have an account?"
                linkLabel="Log in"
                to="/login"
                delay={0.55}
            />
        </motion.div>
    );
}