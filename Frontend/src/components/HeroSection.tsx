import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { HeroOrb } from "./HeroOrb3d";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen  flex items-center px-1  pb-16 md:pt-50 overflow-hidden"
        >
            <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float-node { 0%,100%{transform:translate(0,0)} 50%{transform:translate(0,-1px)} }
        @keyframes rise {
          0%   { transform: translateX(var(--tw-translate-x,0)) translateY(0) rotate(var(--tw-rotate,0)) scaleY(0.2); opacity: 0; }
          15%  { opacity: 1; }
          100% { transform: translateX(var(--tw-translate-x,0)) translateY(-140px) rotate(var(--tw-rotate,0)) scaleY(1); opacity: 0; }
        }
        @keyframes particle { 0%{transform:translateY(0);opacity:0} 30%{opacity:1} 100%{transform:translateY(-90px);opacity:0} }
        @keyframes pulse-line { 0%,100%{opacity:0.35} 50%{opacity:1} }
        @keyframes glow { 0%,100%{box-shadow:0 0 25px color-mix(in oklab, var(--color-primary) 35%, transparent)} 50%{box-shadow:0 0 45px color-mix(in oklab, var(--color-accent) 70%, transparent)} }
        @keyframes pulse-slow { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        .animate-float-node { animation: float-node 3s ease-in-out infinite; }
        .animate-rise { animation: rise 2.8s ease-out infinite; }
        .animate-particle { animation: particle 3s ease-out infinite; }
        .animate-pulse-line { animation: pulse-line 2.2s ease-in-out infinite; }
        .animate-glow { animation: glow 2.8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
            {/* ambient background wash behind the whole section */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full  opacity-10 blur-[110px]" />
            </div>

            <div className="relative max-w-[1650px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 md:gap-8 items-start w-full">
                {/* Left: copy — each element reveals one after another */}
                <div>
                    <motion.span
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.1 }}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium px-3.5 py-1.5 rounded-full mb-6"
                        style={{
                            background: 'rgba(139,92,246,0.12)',
                            border: '1px solid rgba(139,92,246,0.35)',
                            color: '#C4B5FD',
                        }}
                    >
                        <Sparkles size={13} /> AI Project Intelligence Platform
                    </motion.span>

                    <motion.h1
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.2 }}
                        className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white"
                    >
                        Every Project Has Data.
                        <br />
                        <span className="bg-[length:200%_100%] bg-[linear-gradient(90deg,#3B82F6,#6366F1,#8B5CF6,#A855F7,#3B82F6)] bg-clip-text text-transparent animate-gradient">
                            Memora Gives It Memory
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.3 }}
                        className="mt-6 text-white/60 text-base sm:text-lg max-w-lg leading-relaxed"
                    >
                        Turn scattered conversations, repositories, documents, and meetings into an AI that
                        understands your project.
                    </motion.p>

                    <motion.div
                        {...fade}
                        transition={{ ...fade.transition, delay: 0.4 }}
                        className="mt-9 flex flex-col sm:flex-row gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3, boxShadow: '0 12px 36px -6px rgba(139,92,246,0.75)' }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="group inline-flex items-center justify-center gap-2 text-white font-medium px-7 py-3.5 rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, #3B82F6 0%, #6366F1 40%, #8B5CF6 75%, #A855F7 100%)',
                                boxShadow: '0 8px 30px -8px rgba(139,92,246,0.55)',
                            }}
                        >
                            Start Building for Free
                            <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.3)' }}
                            whileTap={{ scale: 0.95, y: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/90 font-medium px-7 py-3.5 rounded-full"
                        >
                            <Play size={15} /> Watch Demo
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right: cinematic hero illustration */}
                <motion.div
                    {...fade}
                    transition={{ ...fade.transition, delay: 0.5, duration: 0.8 }}
                    className="relative w-full px-2 -mt-20 aspect-square max-w-[700px] mx-auto"
                >
                    <HeroOrb />
                </motion.div>
            </div>
        </section>
    )
}