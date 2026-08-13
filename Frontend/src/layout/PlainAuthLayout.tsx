import type { ReactNode } from "react";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PlainAuthLayoutProps {
    children: ReactNode;
}

/**
 * Shared shell for auth pages that don't need a big illustration
 * (Forgot Password, Reset Password): plain black background, particles
 * scattered across the whole viewport, form card centered.
 */
export default function PlainAuthLayout({ children }: PlainAuthLayoutProps) {
    const reduceMotion = useReducedMotion();

    const particles = useMemo(
        () =>
            Array.from({ length: 40 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                bottom: Math.random() * 100,
                size: 1.2 + Math.random() * 2,
                delay: Math.random() * 6,
                duration: 3 + Math.random() * 4,
                rise: 40 + Math.random() * 100,
            })),
        []
    );

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center p-4 sm:p-6">
            {/* soft ambient glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.14), transparent 70%)",
                }}
            />

            {/* scattered rising particles */}
            {!reduceMotion &&
                particles.map((p) => (
                    <motion.span
                        key={p.id}
                        className="pointer-events-none absolute rounded-full"
                        style={{
                            left: `${p.left}%`,
                            bottom: `${p.bottom}%`,
                            width: p.size,
                            height: p.size,
                            background: "#c4b5fd",
                            boxShadow: "0 0 6px 1px rgba(196,181,253,0.8)",
                        }}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: [0, 1, 0], y: -p.rise }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                ))}

            {/* Form card, centered */}
            <div className="relative z-10 w-full flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}
