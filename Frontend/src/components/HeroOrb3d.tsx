
import logo from "../assets/LOGO.png";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo, useState } from "react";


/**
 * Cinematic Memora hero orb
 * - System boot → platform → integrations → orb charge → logo → network → idle loop
 * Pure SVG + framer-motion, GPU-friendly transforms, responsive via viewBox.
 */

type Integration = {
    key: string;
    label: string;
    src: string;
    /** activation order index (0..7) */
    order: number;
};

// Activation order: Zapier, Notion, GitHub, OpenAI, PDF, Figma, Google Docs, Slack
const INTEGRATIONS: Integration[] = [
    { key: "zapier", label: "Zapier", src: "https://cdn.simpleicons.org/zapier/ff4a00", order: 0 },
    { key: "notion", label: "Notion", src: "https://cdn.simpleicons.org/notion/ffffff", order: 1 },
    { key: "github", label: "GitHub", src: "https://cdn.simpleicons.org/github/ffffff", order: 2 },
    { key: "openai", label: "OpenAI", src: "https://cdn.simpleicons.org/openai/10a37f", order: 3 },
    { key: "pdf", label: "PDF", src: "https://cdn.simpleicons.org/adobeacrobatreader/ec1c24", order: 4 },
    { key: "figma", label: "Figma", src: "https://cdn.simpleicons.org/figma/a259ff", order: 5 },
    { key: "gdocs", label: "Google Docs", src: "https://cdn.simpleicons.org/googledocs/4285f4", order: 6 },
    { key: "slack", label: "Slack", src: "https://cdn.simpleicons.org/slack/4a154b", order: 7 },
];

// SVG canvas
const VB = 600;
const CX = VB / 2;
const CY = VB / 2 - 20;
const ORBIT_R = 220;
const ORB_R = 70;

// Icon layout — even distribution starting at top
const positioned = INTEGRATIONS
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((it, i, arr) => {
        // Visual position around circle — spread by visual index so they don't cluster
        const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
        return {
            ...it,
            x: CX + Math.cos(angle) * ORBIT_R,
            y: CY + Math.sin(angle) * ORBIT_R,
        };
    });

// Timeline anchors (seconds)
const T = {
    boot: 0,
    platform: 1,
    integrationsStart: 2,
    perIntegration: 0.25, // stagger
    orbCharge: 4,
    logo: 5,
    network: 6,
};

export function HeroOrb() {
    const [booted, setBooted] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setBooted(true), T.network * 1000 + 500);
        return () => clearTimeout(t);
    }, []);

    // Random idle pulses across lines
    const [pulseTick, setPulseTick] = useState(0);
    useEffect(() => {
        if (!booted) return;
        const id = setInterval(() => setPulseTick((n) => n + 1), 1800);
        return () => clearInterval(id);
    }, [booted]);

    const randomLineIdx = useMemo(
        () => Math.floor(Math.random() * positioned.length),
        [pulseTick],
    );

    return (
        <div className="relative w-full h-[420px] md:h-[560px] flex items-center justify-center select-none">
            {/* Ambient background glow */}
            <motion.div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: T.platform }}
            >
                <div className="w-[60%] h-[60%] rounded-full blur-2xl"
                    style={{ background: "radial-gradient(circle, oklch(0.55 0.25 285 / 0.35), transparent 65%)" }} />
            </motion.div>

            {/* Floating whole scene */}
            <motion.svg
                viewBox={`0 0 ${VB} ${VB}`}
                className="relative w-full h-full max-w-[640px]"
                animate={booted ? { y: [0, -6, 0] } : undefined}
                transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            >
                <defs>
                    <radialGradient id="orbFill" cx="50%" cy="60%" r="60%">
                        <stop offset="0%" stopColor="oklch(0.85 0.15 285)" stopOpacity="0.95" />
                        <stop offset="55%" stopColor="oklch(0.5 0.22 290)" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="oklch(0.2 0.1 275)" stopOpacity="0.85" />
                    </radialGradient>
                    <radialGradient id="orbBloom" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="oklch(0.85 0.2 285)" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="oklch(0.85 0.2 285)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="oklch(0.7 0.19 240)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="oklch(0.7 0.22 300)" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.7 0.2 240)" />
                        <stop offset="50%" stopColor="oklch(0.6 0.24 275)" />
                        <stop offset="100%" stopColor="oklch(0.62 0.24 305)" />
                    </linearGradient>
                    <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <filter id="bigGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="7" />
                    </filter>
                </defs>

                {/* ================= PLATFORM ================= */}
                <g transform={`translate(${CX} ${CY + ORB_R + 40})`}>
                    {[0, 1, 2].map((i) => {
                        const rx = 190 - i * 38;
                        const ry = 32 - i * 6;
                        return (
                            <motion.ellipse
                                key={i}
                                cx={0} cy={0}
                                rx={rx} ry={ry}
                                fill="none"
                                stroke="url(#ringGrad)"
                                strokeWidth={1.2}
                                filter="url(#softGlow)"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{
                                    opacity: [0, 0.9, 0.55],
                                    scale: [0.85, 1.05, 1],
                                }}
                                transition={{
                                    duration: 1.1,
                                    delay: T.platform + i * 0.28,
                                    ease: "easeOut",
                                    times: [0, 0.6, 1],
                                }}
                                style={{ transformOrigin: "center" }}
                            />
                        );
                    })}
                    {/* Idle expanding rings */}
                    {booted && [0, 1].map((i) => (
                        <motion.ellipse
                            key={`idle-${i}`}
                            cx={0} cy={0}
                            rx={120} ry={20}
                            fill="none"
                            stroke="oklch(0.7 0.2 285 / 0.6)"
                            strokeWidth={1}
                            initial={{ opacity: 0.6, scale: 0.5 }}
                            animate={{ opacity: [0.6, 0], scale: [0.5, 1.6] }}
                            transition={{ duration: 3.5, delay: i * 1.75, ease: "easeOut", repeat: Infinity }}
                            style={{ transformOrigin: "center" }}
                        />
                    ))}
                </g>

                {/* Rising platform particles (subtle boot phase + ongoing) */}
                {Array.from({ length: 14 }).map((_, i) => {
                    const x = CX + (Math.random() - 0.5) * 320;
                    const y0 = CY + ORB_R + 60;
                    return (
                        <motion.circle
                            key={`p-${i}`}
                            cx={x} cy={y0} r={1.4}
                            fill="oklch(0.85 0.15 290)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.8, 0], y: [0, -160 - Math.random() * 60] }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                delay: (i * 0.3) % 4,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                        />
                    );
                })}

                {/* ================= CONNECTION LINES ================= */}
                {positioned.map((p, i) => {
                    const activateAt = T.integrationsStart + p.order * T.perIntegration;
                    return (
                        <g key={`line-${p.key}`}>
                            <motion.line
                                x1={CX} y1={CY} x2={p.x} y2={p.y}
                                stroke="url(#lineGrad)"
                                strokeWidth={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.35, 0.22] }}
                                transition={{
                                    duration: 0.6,
                                    delay: activateAt + 0.1,
                                    times: [0, 0.6, 1],
                                }}
                            />
                            {/* Breathing glow after network wakes */}
                            {booted && (
                                <motion.line
                                    x1={CX} y1={CY} x2={p.x} y2={p.y}
                                    stroke="oklch(0.7 0.22 285 / 0.5)"
                                    strokeWidth={1.5}
                                    filter="url(#softGlow)"
                                    animate={{ opacity: [0.15, 0.5, 0.15] }}
                                    transition={{
                                        duration: 3.5 + i * 0.15,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            )}
                            {/* Energy pulse traveling to center on activation */}
                            <EnergyPulse
                                fromX={p.x} fromY={p.y} toX={CX} toY={CY}
                                delay={activateAt + 0.15}
                            />
                            {/* Idle random pulses */}
                            {booted && i === randomLineIdx && (
                                <EnergyPulse
                                    key={`idle-pulse-${pulseTick}`}
                                    fromX={p.x} fromY={p.y} toX={CX} toY={CY}
                                    delay={0}
                                />
                            )}
                            {/* Continuous data particles */}
                            {booted && (
                                <DataStream
                                    fromX={p.x} fromY={p.y} toX={CX} toY={CY}
                                    offset={i * 0.35}
                                />
                            )}
                        </g>
                    );
                })}

                {/* ================= CENTRAL ORB ================= */}
                {/* Outer bloom */}
                <motion.circle
                    cx={CX} cy={CY} r={ORB_R + 40}
                    fill="url(#orbBloom)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: booted ? [0.55, 0.85, 0.55] : [0, 0.5] }}
                    transition={
                        booted
                            ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            : { duration: 1.2, delay: T.orbCharge }
                    }
                    style={{ transformOrigin: `${CX}px ${CY}px` }}
                />
                {/* Orb body */}
                <motion.circle
                    cx={CX} cy={CY} r={ORB_R}
                    fill="url(#orbFill)"
                    stroke="oklch(0.85 0.1 285 / 0.6)"
                    strokeWidth={1}
                    initial={{ opacity: 0.2, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: booted ? [1, 1.035, 1] : [0.9, 1.05, 1],
                    }}
                    transition={
                        booted
                            ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            : { duration: 1.2, delay: T.orbCharge, ease: "easeOut" }
                    }
                    style={{ transformOrigin: `${CX}px ${CY}px` }}
                />
                {/* Charging fill mask - a rising glow */}
                <motion.circle
                    cx={CX} cy={CY + ORB_R} r={ORB_R * 0.9}
                    fill="oklch(0.75 0.22 285 / 0.7)"
                    filter="url(#bigGlow)"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 0.9, 0], y: [0, -ORB_R * 1.6, -ORB_R * 2] }}
                    transition={{ duration: 1.1, delay: T.orbCharge, ease: "easeOut" }}
                />
                {/* Inner circulating particles */}
                {booted && Array.from({ length: 6 }).map((_, i) => {
                    const a = (i / 6) * Math.PI * 2;
                    return (
                        <motion.circle
                            key={`inner-${i}`}
                            r={1.6}
                            fill="oklch(0.95 0.05 285)"
                            initial={{ cx: CX + Math.cos(a) * 20, cy: CY + Math.sin(a) * 20, opacity: 0.6 }}
                            animate={{
                                cx: [
                                    CX + Math.cos(a) * 30,
                                    CX + Math.cos(a + Math.PI) * 30,
                                    CX + Math.cos(a + 2 * Math.PI) * 30,
                                ],
                                cy: [
                                    CY + Math.sin(a) * 30,
                                    CY + Math.sin(a + Math.PI) * 30,
                                    CY + Math.sin(a + 2 * Math.PI) * 30,
                                ],
                            }}
                            transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "linear" }}
                        />
                    );
                })}

                {/* ================= INTEGRATIONS ================= */}
                {positioned.map((p) => {
                    const activateAt = T.integrationsStart + p.order * T.perIntegration;
                    return (
                        <g key={`icon-${p.key}`}>
                            {/* Faint boot outline */}
                            <motion.circle
                                cx={p.x} cy={p.y} r={26}
                                fill="none"
                                stroke="oklch(0.6 0.1 280 / 0.4)"
                                strokeWidth={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.5] }}
                                transition={{ duration: 1, delay: T.boot + 0.2 }}
                            />
                            {/* Activated tile */}
                            <motion.g
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{
                                    opacity: 1,
                                    scale: [0.7, 1.15, 1],
                                }}
                                transition={{
                                    duration: 0.55,
                                    delay: activateAt,
                                    ease: [0.34, 1.56, 0.64, 1],
                                }}
                                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                            >
                                <motion.circle
                                    cx={p.x} cy={p.y} r={26}
                                    fill="oklch(0.18 0.04 275 / 0.85)"
                                    stroke="oklch(0.6 0.2 285 / 0.7)"
                                    strokeWidth={1}
                                    filter="url(#softGlow)"
                                />
                                {/* Foreign icons via <image> */}
                                <image
                                    href={p.src}
                                    x={p.x - 14} y={p.y - 14}
                                    width={28} height={28}
                                    style={{ filter: "drop-shadow(0 0 6px rgba(150,100,255,0.35))" }}
                                />
                            </motion.g>
                            {/* Idle floating (subtle, per-icon timing) */}
                            {booted && (
                                <FloatingWrap x={p.x} y={p.y} seed={p.order} />
                            )}
                        </g>
                    );
                })}
            </motion.svg>

            {/* Logo overlay (positioned over orb) — built in two halves */}
            <LogoBuild />
        </div>
    );
}

/* ---------- Sub-components ---------- */

function EnergyPulse({
    fromX, fromY, toX, toY, delay,
}: { fromX: number; fromY: number; toX: number; toY: number; delay: number }) {
    return (
        <motion.circle
            r={3.5}
            fill="oklch(0.95 0.15 285)"
            filter="url(#softGlow)"
            initial={{ cx: fromX, cy: fromY, opacity: 0 }}
            animate={{ cx: toX, cy: toY, opacity: [0, 1, 0] }}
            transition={{ duration: 0.7, delay, ease: "easeIn" }}
        />
    );
}

function DataStream({
    fromX, fromY, toX, toY, offset,
}: { fromX: number; fromY: number; toX: number; toY: number; offset: number }) {
    return (
        <>
            {[0, 1].map((i) => (
                <motion.circle
                    key={i}
                    r={1.6}
                    fill="oklch(0.9 0.15 285)"
                    initial={{ cx: fromX, cy: fromY, opacity: 0 }}
                    animate={{ cx: toX, cy: toY, opacity: [0, 0.9, 0] }}
                    transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: offset + i * 1.2,
                        ease: "easeIn",
                    }}
                />
            ))}
        </>
    );
}

function FloatingWrap({ x, y, seed }: { x: number; y: number; seed: number }) {
    // Non-synced gentle float for the tile shadow (icon <g> already rendered).
    // Kept as pure decoration ring pulse per icon.
    const dur = 3 + (seed % 4) * 0.7;
    const dly = (seed * 0.37) % 2;
    return (
        <motion.circle
            cx={x} cy={y} r={26}
            fill="none"
            stroke="oklch(0.7 0.22 285 / 0.35)"
            strokeWidth={1}
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: dur, delay: dly, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: `${x}px ${y}px` }}
        />
    );
}

function LogoBuild() {
    const controls = useAnimationControls();
    useEffect(() => {
        (async () => {
            // Wait for logo phase
            await new Promise((r) => setTimeout(r, T.logo * 1000));
            await controls.start({
                opacity: 1,
                scale: [0.7, 1.05, 1],
                filter: [
                    "drop-shadow(0 0 0px rgba(150,100,255,0))",
                    "drop-shadow(0 0 14px rgba(150,100,255,0.8))",
                    "drop-shadow(0 0 8px rgba(150,100,255,0.55))",
                ],
                transition: { duration: 1, ease: "easeOut" },
            });
            // Idle breathing
            controls.start({
                scale: [1, 1.03, 1],
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            });
        })();
    }, [controls]);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: "translateY(-3.3%)" }}>
            <div className="relative w-24 md:w-32 aspect-square">
                {/* Left half reveal (blue side) */}
                <motion.img
                    src={logo} alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 50% 0 0)", opacity: 1 }}
                    transition={{ duration: 0.5, delay: T.logo, ease: "easeOut" }}
                    style={{ filter: "drop-shadow(0 0 10px rgba(80,140,255,0.7))" }}
                />
                {/* Right half reveal (purple side) */}
                <motion.img
                    src={logo} alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ clipPath: "inset(0 0 0 100%)", opacity: 0 }}
                    animate={{ clipPath: "inset(0 0 0 50%)", opacity: 1 }}
                    transition={{ duration: 0.5, delay: T.logo + 0.25, ease: "easeOut" }}
                    style={{}}
                />
                {/* Final settled logo */}
                <motion.img
                    src={logo}
                    alt="Memora"
                    className="absolute inset-0 w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={controls}
                />
            </div>
        </div>
    );
}
