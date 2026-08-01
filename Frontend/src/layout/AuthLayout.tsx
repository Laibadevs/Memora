import type { ReactNode } from "react";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Scene3d from "../assets/Scene3D.png";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const reduceMotion = useReducedMotion();

    const particles = useMemo(
        () =>
            Array.from({ length: 26 }, (_, i) => ({
                id: i,
                // scattered across the entire image, not just one corner
                left: 4 + Math.random() * 92,
                bottom: 4 + Math.random() * 92,
                size: 1.3 + Math.random() * 2,
                delay: Math.random() * 5,
                duration: 3 + Math.random() * 3,
                rise: 40 + Math.random() * 90,
            })),
        []
    );

    return (
        <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div
                className="
          relative
          w-full
          max-w-6xl
          -mt-5
          min-h-[650px]
          sm:min-h-[600px]
          lg:h-[650px]
          overflow-hidden
          rounded-[24px]
          sm:rounded-[32px]
          border border-white/10
          shadow-2xl
        "
            >
                {/* Background artwork */}
                <img
                    src={Scene3d}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-black/35" />

                {/* ---- Rising light particles, spread across the whole scene ---- */}
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

                {/* Signup Form */}
                <div className="relative z-10 flex h-full items-center justify-center px-4 py-8 sm:px-8 lg:justify-end lg:px-16 lg:py-0">
                    <div className="w-full max-w-md">{children}</div>
                </div>
            </div>
        </div>
    );
}
