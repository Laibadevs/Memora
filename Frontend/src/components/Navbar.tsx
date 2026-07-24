import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MemoraLogo from "../assets/Memora_Logo.png";
import MemoraWord from "../assets/memora_word.png";

const NAV_LINKS = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Docs', id: 'docs' },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // If we land on "/" with a hash (e.g. coming from another route),
    // scroll to that section once the page has mounted.
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
    }, [location])

    const goToSection = (id: string) => {
        setOpen(false)
        if (location.pathname !== '/') {
            navigate(`/#${id}`)
            return
        }
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        } else {
            navigate(`/#${id}`)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-[1650px] mx-auto flex items-center justify-between px-6 lg:px-12 h-16 md:h-20">
                <button
                    onClick={() => goToSection('hero')}
                    className="flex items-center gap-4 shrink-0"
                    aria-label="Memora home"
                >
                    <img src={MemoraLogo} alt="" className="h-5 w-auto  md:h-10" />
                    <img src={MemoraWord} alt="Memora" className="h-4 w-auto z-10 md:h-[20px]" />
                </button>

                <ul className="hidden md:flex items-center gap-20">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => goToSection(link.id)}
                                className="group relative text-[15px] font-medium text-white/80 hover:text-white transition-colors py-1"
                            >
                                {link.label}
                                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 rounded-full bg-[linear-gradient(90deg,#3B82F6,#8B5CF6,#A855F7)] transition-all duration-300 ease-out group-hover:w-full" />
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-6">
                    <button
                        className="group relative px-3 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-all duration-300"
                    >
                        Log in

                        <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#A855F7] transition-all duration-300 group-hover:w-full" />
                    </button>
                    <button
                        onClick={() => goToSection('pricing')}
                        className="text-base font-medium text-white px-5 py-2.5 rounded-full bg-[linear-gradient(90deg,#3B82F6_0%,#6366F1_40%,#8B5CF6_75%,#A855F7_100%)] hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,92,246,0.45)] transition-all duration-200"
                    >
                        Sign Up
                    </button>
                </div>

                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden bg-[#050505]/95 backdrop-blur-md border-b border-white/5"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-1">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => goToSection(link.id)}
                                        className="w-full text-left py-3 px-2 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors border-b border-white/5 last:border-0"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                            <div className="flex gap-3 pt-4">
                                <button className="flex-1 py-2.5 text-[15px] font-medium text-white/80 border border-white/15 rounded-full hover:bg-white/5 hover:text-white transition-colors">
                                    Log in
                                </button>
                                <button
                                    onClick={() => goToSection('pricing')}
                                    className="flex-1 py-2.5 text-[15px] font-medium text-white rounded-full bg-[linear-gradient(90deg,#3B82F6_0%,#6366F1_40%,#8B5CF6_75%,#A855F7_100%)]"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}