import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import heroright from "../assets/heroright.png";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 overflow-hidden"
        >
            {/* ambient background wash behind the whole section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#8B5CF6] opacity-10 blur-[110px]" />
            </div>

            <div className="relative max-w-[1650px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 md:gap-8 items-center w-full">
                {/* Left: copy */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-1.5 rounded-full mb-6"
                        style={{
                            background: 'rgba(139,92,246,0.12)',
                            border: '1px solid rgba(139,92,246,0.35)',
                            color: '#C4B5FD',
                        }}
                    >
                        <Sparkles size={13} /> AI Project Intelligence Platform
                    </span>

                    <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
                        Every Project Has Data.
                        <br />
                        <span className="bg-[length:200%_100%] bg-[linear-gradient(90deg,#3B82F6,#6366F1,#8B5CF6,#A855F7,#3B82F6)] bg-clip-text text-transparent animate-gradient">
                            Memora Gives It Memory
                        </span>

                    </h1>

                    <p className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
                        Turn scattered conversations, repositories, documents, and meetings into an AI that
                        understands your project.
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row gap-4">
                        <button className="group inline-flex items-center justify-center gap-2 text-white font-medium px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                            style={{
                                background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 40%, #8B5CF6 75%, #A855F7 100%)',
                                boxShadow: '0 8px 30px -8px rgba(139,92,246,0.55)',
                            }}
                        >
                            Start Building for Free
                            <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/90 font-medium px-7 py-3.5 rounded-full hover:bg-white/5 transition-colors">
                            <Play size={15} /> Watch Demo
                        </button>
                    </div>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {['ND', 'RK', 'SP', 'AL'].map((initials, i) => (
                                <div
                                    key={initials}
                                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[10px] font-semibold text-white"
                                    style={{
                                        borderColor: '#050505',
                                        background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
                                        zIndex: 10 - i,
                                    }}
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-white/50">
                            Join 10,000+ developers
                            <br className="hidden sm:block" /> building smarter
                        </p>
                    </div>
                </motion.div>

                {/* Right: cinematic hero illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-square max-w-[560px] mx-auto"
                >
                    <img src={heroright} alt="Memora" className="h-4 flex justify-end w-auto z-10 md:h-[400px]" />

                </motion.div>

            </div>
        </section>
    )
}