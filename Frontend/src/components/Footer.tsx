import { motion } from "framer-motion";
import { SiGithub, SiX, SiDiscord } from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa";
import logo from '../assets/LOGO.png'
import word from '../assets/memora_word.png'

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

const columns = [
    {
        title: "Product",
        links: ["Features", "How it Works", "Pricing", "Roadmap"],
    },
    {
        title: "Developers",
        links: ["Documentation", "API", "SDKs", "Status", "Changelog"],
    },
    {
        title: "Company",
        links: ["About", "Blog", "Privacy", "Terms", "Contact"],
    },
];

export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden  px-4 pt-20 pb-8 bg-[color:var(--color-background)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-px w-full max-w-[1450px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b5cf6]/40 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-[1400px]">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
                    {/* brand */}
                    <motion.div {...fade} className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src={logo} alt="" className="h-8 w-auto  md:h-10" />
                            </div>

                            <div>
                                <img src={word} alt="Memora" className="h-4 w-auto z-10 md:h-[20px]" />
                            </div>
                        </div>
                        <p className="mt-4 max-w-xs text-sm text-[#9ca3af]">
                            Give every project a memory.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {[SiGithub, SiX, SiLinkedin, SiDiscord].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="grid h-9 w-9 place-items-center rounded-full border border-[#24242b] text-[#9ca3af] transition-all hover:border-[#8b5cf6]/60 hover:text-[#c4b5fd]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* link columns */}
                    {columns.map((col, i) => (
                        <motion.div key={col.title} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }}>
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#a855f7]">
                                {col.title}
                            </h4>
                            <ul className="mt-5 space-y-3">
                                {col.links.map((l) => (
                                    <li key={l}>
                                        <a
                                            href="#"
                                            className="text-sm text-[#f8fafc]/80 transition-colors hover:text-[#c4b5fd]"
                                        >
                                            {l}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* newsletter */}
                    <motion.div {...fade}>
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-[#a855f7]">
                            Stay in the Loop
                        </h4>
                        <p className="mt-5 text-sm text-[#9ca3af]">
                            Stay updated with the latest features and improvements.
                        </p>
                        <form
                            className="mt-4 flex flex-col gap-3"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-[#24242b] bg-[#0e0e10] px-3 py-2.5 text-sm text-[#f8fafc] placeholder:text-[#9ca3af] focus:border-[#8b5cf6]/60 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] py-2.5 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)] transition-all hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.9)]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#24242b] pt-6 text-xs text-[#9ca3af] md:flex-row"
                >
                    <p>© 2026 Memora. All rights reserved.</p>
                    <p>Built for developers. Loved by teams.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#c4b5fd]">Privacy</a>
                        <a href="#" className="hover:text-[#c4b5fd]">Terms</a>
                        <a href="#" className="hover:text-[#c4b5fd]">Security</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}