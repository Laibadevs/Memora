import { motion } from "framer-motion";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SiClaude } from "react-icons/si";

const PROVIDERS = [
    {
        id: "google",
        icon: <FaGoogle size={14} />,
        label: "Google",
    },
    {
        id: "github",
        icon: <FaGithub size={15} />,
        label: "GitHub",
    },
    {
        id: "claude",
        icon: <SiClaude size={14} className="text-[#d97757]" />,
        label: "Claude",
    },
];

interface SocialLoginProps {
    delay?: number;
    onSelect?: (provider: string) => void;
}

export default function SocialSignup({
    delay = 0,
    onSelect,
}: SocialLoginProps) {
    return (
        <div className="w-full">
            {/* Divider */}
            <div
                className="my-5 sm:my-6 flex items-center gap-3 text-[11px] sm:text-xs  tracking-wider"
                style={{ color: "var(--color-gray)" }}
            >
                <div
                    className="h-px flex-1"
                    style={{ background: "var(--color-border)" }}
                />

                <span className="whitespace-nowrap">
                    or continue with
                </span>

                <div
                    className="h-px flex-1"
                    style={{ background: "var(--color-border)" }}
                />
            </div>

            {/* Buttons — 3 across */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {PROVIDERS.map((provider, i) => (
                    <motion.button
                        key={provider.id}
                        type="button"
                        onClick={() => onSelect?.(provider.id)}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.05,
                            delay: delay + i * 0.08,
                        }}
                        whileHover={{
                            y: -2,
                            scale: 1.02,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
              group
              relative
              flex
              w-full
              h-9
              sm:h-10
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-xl
              border
              px-2
              text-[11px]
              sm:text-[12px]
              font-normal
              transition-all
              duration-300
              backdrop-blur-xl
              focus:outline-none
              focus:ring-2
              focus:ring-violet-500/40
            "
                        style={{
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015))",
                            borderColor: "var(--color-border)",
                            color: "var(--color-white)",
                        }}
                    >
                        {/* Hover Glow */}
                        <span
                            className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-100
                group-hover:opacity-100
              "
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(59,130,246,.12), rgba(139,92,246,.15), rgba(168,85,247,.12))",
                            }}
                        />

                        {/* Border Glow */}
                        <span
                            className="
                absolute
                inset-0
                rounded-xl
                opacity-0
                transition-opacity
                duration-100
                group-hover:opacity-100
              "
                            style={{
                                boxShadow:
                                    "0 0 20px rgba(139,92,246,.22), inset 0 0 0 1px rgba(139,92,246,.18)",
                            }}
                        />

                        {/* Icon */}
                        <span
                            className="
                relative
                z-10
                transition-transform
                duration-100
                group-hover:scale-110
                group-hover:rotate-3
              "
                        >
                            {provider.icon}
                        </span>

                        {/* Text */}
                        <span className="relative z-10 whitespace-nowrap">
                            {provider.label}
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
