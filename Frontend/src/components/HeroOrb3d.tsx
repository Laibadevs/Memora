import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import MemoraLogo from '../assets/Memora_Logo.png'
import IntegrationIcon from './IntegrationIcon'
import { integrations, ORB_CENTER, PLATFORM_CENTER } from '../../src/data/integration'

/* ------------------------------------------------------------------ */
/*  Timeline constants (seconds) — mirrors the Phase 1–7 animation brief */
/* ------------------------------------------------------------------ */
const T_PLATFORM_START = 1
const T_PLATFORM_STEP = 0.28
const T_ICONS_START = 2
const T_ICONS_STEP = 0.26
const T_ORB_CHARGE = 4
const T_LOGO_DRAW = 5
const T_LOGO_PULSE = 6
const T_IDLE_START = 7

const PLATFORM_RINGS = [
    { rx: 15, ry: 4.6, color: '#3B82F6' },
    { rx: 21, ry: 6.2, color: '#6366F1' },
    { rx: 27, ry: 7.8, color: '#8B5CF6' },
    { rx: 33, ry: 9.4, color: '#A855F7' },
]

/** Builds a gently curved (never straight) SVG path from an icon card to the orb. */
function buildCurvePath(x1: number, y1: number, x2: number, y2: number, bend: number) {
    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2
    const dx = x2 - x1
    const dy = y2 - y1
    const len = Math.hypot(dx, dy) || 1
    const perpX = -dy / len
    const perpY = dx / len
    const curve = len * bend
    const cx = midX + perpX * curve
    const cy = midY + perpY * curve
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

export default function HeroOrb3D() {
    const reduceMotion = useReducedMotion()

    const stars = useMemo(
        () =>
            Array.from({ length: 26 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 0.6 + Math.random() * 1.2,
                delay: Math.random() * 4,
                duration: 2.5 + Math.random() * 2.5,
            })),
        []
    )

    const orbParticles = useMemo(
        () =>
            Array.from({ length: 14 }, (_, i) => ({
                id: i,
                x: 20 + Math.random() * 60,
                y: 20 + Math.random() * 60,
                size: 1.2 + Math.random() * 1.6,
                delay: T_ORB_CHARGE + Math.random() * 2,
                duration: 3 + Math.random() * 2,
            })),
        []
    )

    return (
        <motion.div
            className="relative w-full h-full select-none"
            aria-hidden="true"
            initial={{ y: 0 }}
            animate={reduceMotion ? {} : { y: [0, -6, 0] }}
            transition={
                reduceMotion
                    ? undefined
                    : { duration: 9, delay: T_IDLE_START, repeat: Infinity, ease: 'easeInOut' }
            }
        >
            {/* ---------- Background ambience: radial glows + star particles ---------- */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[28px]">
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[75%] aspect-square rounded-full bg-[#3B82F6] opacity-[0.14] blur-[90px]" />
                <div className="absolute top-[62%] left-1/2 -translate-x-1/2 w-[65%] aspect-square rounded-full bg-[#8B5CF6] opacity-[0.16] blur-[100px]" />
                {stars.map((s) => (
                    <motion.span
                        key={s.id}
                        className="absolute rounded-full bg-white"
                        style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
                        initial={{ opacity: 0.1 }}
                        animate={reduceMotion ? { opacity: 0.35 } : { opacity: [0.1, 0.7, 0.1] }}
                        transition={
                            reduceMotion
                                ? undefined
                                : { duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }
                        }
                    />
                ))}
            </div>

            {/* ---------- SVG layer: platform rings + connection network ---------- */}
            <svg
                className="absolute inset-0 w-full h-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="hero-line-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="55%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                    <filter id="hero-soft-blur" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="0.9" />
                    </filter>
                </defs>

                {/* Phase 2 — platform rings, activating bottom-up, blue -> indigo -> purple */}
                <g transform={`translate(${PLATFORM_CENTER.x} ${PLATFORM_CENTER.y})`}>
                    {PLATFORM_RINGS.map((ring, i) => (
                        <motion.ellipse
                            key={i}
                            cx="0"
                            cy="0"
                            rx={ring.rx}
                            ry={ring.ry}
                            fill="none"
                            stroke={ring.color}
                            strokeWidth="0.55"
                            style={{ filter: 'url(#hero-soft-blur)' }}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={
                                reduceMotion
                                    ? { opacity: 0.55, scale: 1 }
                                    : { opacity: [0, 0.9, 0.5, 0.65, 0.5], scale: [0.85, 1.06, 1, 1.015, 1] }
                            }
                            transition={
                                reduceMotion
                                    ? undefined
                                    : {
                                        duration: 4,
                                        delay: T_PLATFORM_START + i * T_PLATFORM_STEP,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: 'easeInOut',
                                    }
                            }
                        />
                    ))}
                </g>

                {/* Phase 3 & 6 — curved connection lines + traveling energy pulses */}
                {integrations.map((it, i) => {
                    const path = buildCurvePath(
                        it.x,
                        it.y,
                        ORB_CENTER.x,
                        ORB_CENTER.y,
                        i % 2 === 0 ? 0.16 : -0.16
                    )
                    const activateDelay = T_ICONS_START + it.activationOrder * T_ICONS_STEP
                    const pulseDelay = activateDelay + 0.18
                    const idlePeriod = 6 + (i % 4) * 1.4 // varied recurrence so pulses feel random, not synced

                    return (
                        <g key={it.key}>
                            <motion.path
                                d={path}
                                fill="none"
                                stroke="url(#hero-line-grad)"
                                strokeWidth="0.35"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={
                                    reduceMotion
                                        ? { pathLength: 1, opacity: 0.45 }
                                        : { pathLength: 1, opacity: [0, 0.8, 0.4, 0.55, 0.4] }
                                }
                                transition={
                                    reduceMotion
                                        ? undefined
                                        : {
                                            pathLength: { duration: 0.6, delay: activateDelay, ease: 'easeOut' },
                                            opacity: {
                                                duration: 4,
                                                delay: activateDelay,
                                                repeat: Infinity,
                                                repeatDelay: 3,
                                                ease: 'easeInOut',
                                            },
                                        }
                                }
                            />
                            {!reduceMotion && (
                                <circle r="0.9" fill={it.color} opacity="0">
                                    <animateMotion
                                        path={path}
                                        dur={`${idlePeriod}s`}
                                        begin={`${pulseDelay}s`}
                                        repeatCount="indefinite"
                                        calcMode="linear"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        values="0;1;1;0;0"
                                        keyTimes="0;0.04;0.16;0.22;1"
                                        dur={`${idlePeriod}s`}
                                        begin={`${pulseDelay}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    )
                })}
            </svg>

            {/* ---------- Center orb ---------- */}
            <div
                className="absolute"
                style={{
                    top: `${ORB_CENTER.y - 21}%`,
                    left: `${ORB_CENTER.x}%`,
                    width: '42%',
                    transform: 'translateX(-50%)',
                }}
            >
                <div className="relative aspect-square">
                    {/* outer atmospheric glow */}
                    <motion.div
                        className="absolute -inset-8 rounded-full bg-[#8B5CF6] blur-3xl"
                        initial={{ opacity: 0.05 }}
                        animate={reduceMotion ? { opacity: 0.28 } : { opacity: [0.05, 0.35, 0.22, 0.32, 0.22] }}
                        transition={
                            reduceMotion
                                ? undefined
                                : { duration: 5, delay: T_ORB_CHARGE, repeat: Infinity, ease: 'easeInOut' }
                        }
                    />

                    {/* glass sphere — one-shot charge-in (Phase 4) */}
                    <motion.div
                        className="absolute inset-0 rounded-full border"
                        style={{
                            borderColor: 'rgba(168,85,247,0.5)',
                            background:
                                'radial-gradient(circle at 35% 30%, rgba(59,130,246,0.35), rgba(139,92,246,0.18) 45%, rgba(5,5,5,0.05) 75%)',
                            backdropFilter: 'blur(6px)',
                            boxShadow: '0 0 60px 10px rgba(139,92,246,0.35), inset 0 0 40px rgba(59,130,246,0.25)',
                        }}
                        initial={{ opacity: 0.12, scale: 0.86 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={reduceMotion ? { duration: 0.4 } : { duration: 1, delay: T_ORB_CHARGE, ease: 'easeOut' }}
                    >
                        {/* continuous breathing pulse layered on top, starts once charged */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={
                                reduceMotion
                                    ? {}
                                    : { scale: [1, 1.035, 1], opacity: [0.85, 1, 0.85] }
                            }
                            transition={
                                reduceMotion
                                    ? undefined
                                    : { duration: 4.5, delay: T_LOGO_PULSE, repeat: Infinity, ease: 'easeInOut' }
                            }
                            style={{
                                background:
                                    'radial-gradient(circle at 35% 30%, rgba(59,130,246,0.25), transparent 60%)',
                            }}
                        />

                        {/* reflection highlight */}
                        <div
                            className="absolute rounded-full bg-white/30 blur-[3px]"
                            style={{ top: '14%', left: '22%', width: '20%', height: '10%' }}
                        />

                        {/* inner drifting particles */}
                        {orbParticles.map((p) => (
                            <motion.span
                                key={p.id}
                                className="absolute rounded-full bg-white"
                                style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                                initial={{ opacity: 0 }}
                                animate={
                                    reduceMotion
                                        ? { opacity: 0.5 }
                                        : { opacity: [0, 0.8, 0], y: [0, -8, 0] }
                                }
                                transition={
                                    reduceMotion
                                        ? undefined
                                        : { duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }
                                }
                            />
                        ))}

                        {/* Phase 5 — Memora logo, revealed with a left-to-right clip wipe
                (the real logo asset already goes blue -> purple left to right,
                so the wipe reads as "blue side, then purple side" without
                redrawing the artwork). */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="relative w-[52%]"
                                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                                transition={reduceMotion ? { duration: 0.4 } : { duration: 1, delay: T_LOGO_DRAW, ease: 'easeInOut' }}
                            >
                                <motion.img
                                    src={MemoraLogo}
                                    alt="Memora"
                                    className="w-full h-full object-contain"
                                    style={{ filter: 'drop-shadow(0 0 18px rgba(139,92,246,0.65))' }}
                                    animate={
                                        reduceMotion
                                            ? {}
                                            : { scale: [1, 1, 1.05, 1] }
                                    }
                                    transition={
                                        reduceMotion
                                            ? undefined
                                            : { duration: 0.9, delay: T_LOGO_PULSE, times: [0, 0.55, 0.8, 1], ease: 'easeOut' }
                                    }
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* beam projecting down toward the platform */}
                    <motion.div
                        className="absolute left-1/2 top-full -translate-x-1/2 w-[3px]"
                        style={{
                            height: `${(PLATFORM_CENTER.y - ORB_CENTER.y) * 2.3}%`,
                            background: 'linear-gradient(180deg, rgba(139,92,246,0.75), transparent)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={reduceMotion ? { opacity: 0.6 } : { opacity: [0, 0.75, 0.45, 0.65, 0.45] }}
                        transition={
                            reduceMotion
                                ? undefined
                                : { duration: 4, delay: T_ORB_CHARGE, repeat: Infinity, ease: 'easeInOut' }
                        }
                    />
                </div>
            </div>

            {/* ---------- Integration cards ---------- */}
            {integrations.map((it, i) => {
                const activateDelay = T_ICONS_START + it.activationOrder * T_ICONS_STEP
                const floatDuration = 3.2 + (i % 3) * 0.6
                const floatDelay = T_IDLE_START + i * 0.35

                return (
                    <motion.div
                        key={it.key}
                        className="absolute w-11 h-11 md:w-14 md:h-14 rounded-2xl flex items-center justify-center"
                        style={{
                            top: `${it.y}%`,
                            left: `${it.x}%`,
                            transform: 'translate(-50%, -50%)',
                            color: it.color,
                            background: 'rgba(14,14,16,0.65)',
                            border: '1px solid #24242B',
                            backdropFilter: 'blur(10px)',
                            boxShadow: `0 0 22px -6px ${it.color}99, 0 8px 20px -8px rgba(0,0,0,0.6)`,
                        }}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={
                            reduceMotion
                                ? { opacity: 1, scale: 1 }
                                : {
                                    opacity: 1,
                                    scale: [0.7, 1.12, 0.96, 1],
                                    y: [0, -3, 0, 3, 0],
                                }
                        }
                        transition={
                            reduceMotion
                                ? { duration: 0.4 }
                                : {
                                    opacity: { duration: 0.35, delay: activateDelay },
                                    scale: {
                                        duration: 0.6,
                                        delay: activateDelay,
                                        times: [0, 0.55, 0.8, 1],
                                        ease: 'easeOut',
                                    },
                                    y: {
                                        duration: floatDuration,
                                        delay: floatDelay,
                                        repeat: Infinity,
                                        repeatType: 'mirror',
                                        ease: 'easeInOut',
                                    },
                                }
                        }
                        title={it.label}
                        aria-label={it.label}
                    >
                        <IntegrationIcon type={it.key} size={20} />
                    </motion.div>
                )
            })}
        </motion.div>
    )
}