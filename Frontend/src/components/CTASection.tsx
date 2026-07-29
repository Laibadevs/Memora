import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import cta from '../assets/cta.png'

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

export default function CTASection() {
    // Deterministic star field
    const stars = useMemo(
        () =>
            Array.from({ length: 90 }).map((_, i) => ({
                id: i,
                left: (i * 53) % 100,
                top: (i * 37) % 100,
                size: (i % 3) + 1,
                delay: (i % 10) * 0.3,
                duration: 2 + (i % 5) * 0.6,
            })),
        []
    );

    return (
        <section className="px-4 md:px-8 -mt-15 mb-15 py-16 bg-[color:var(--color-background)]">
            <motion.div
                {...fade}
                className="relative max-w-[1350px] mx-auto h-[200px] overflow-hidden rounded-3xl border border-[color:var(--color-border)]"
            >
                {/* Stars
                <div className="absolute inset-0 pointer-events-none">
                    {stars.map((s) => (
                        <motion.span
                            key={s.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${s.left}%`,
                                top: `${s.top}%`,
                                width: s.size,
                                height: s.size,
                            }}
                            animate={{ opacity: [0.15, 0.9, 0.15] }}
                            transition={{
                                duration: s.duration,
                                repeat: Infinity,
                                delay: s.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Bottom horizon arc glow *
                <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                    <svg
                        viewBox="0 0 1200 400"
                        className="w-full h-[400px]"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <radialGradient id="cta-horizon" cx="50%" cy="100%" r="70%">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                                <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="cta-arc" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
                                <stop offset="50%" stopColor="#93c5fd" stopOpacity="1" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <ellipse cx="600" cy="420" rx="700" ry="220" fill="url(#cta-horizon)" />
                        <motion.path
                            d="M -50 380 Q 600 140 1250 380"
                            stroke="url(#cta-arc)"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 1.6, ease: "easeOut" }}
                            style={{ filter: "drop-shadow(0 0 10px rgba(147,197,253,0.9))" }}
                        />
                    </svg>
                </div>

                {/* Top light beam *
                <motion.div
                    initial={{ opacity: 0, scaleY: 0.4 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-40 origin-top"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(147,197,253,0.9), rgba(147,197,253,0))",
                        filter: "drop-shadow(0 0 8px rgba(147,197,253,0.8))",
                    }}
                /> 
                 {/* Background */}
                <div
                    className="absolute inset-0 w-[1350]"
                    style={{
                        backgroundImage: `url(${cta})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-12 text-center">
                    <motion.h3
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.1 }}
                        className="text-1xl md:text-2xl font-semibold text-[color:var(--color-white)] leading-tight"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Ready to Give Your Project Memory?
                    </motion.h3>

                    <motion.p
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.2 }}
                        className="mt-4 text-[color:var(--color-gray)] max-w-xl mx-auto"
                    >
                        Join thousands of teams that are building smarter with Memora.
                    </motion.p>

                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.3 }}
                        className="mt-8 flex justify-center"
                    >
                        <button
                            className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03]"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                                border: "1px solid rgba(255,255,255,0.15)",
                                boxShadow: `
            inset 0 1px 0 rgba(255,255,255,.15),
            inset 0 -1px 0 rgba(255,255,255,.03),
            0 0 30px rgba(168,85,247,.18)
        `,
                            }}
                        >
                            Get Started
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
