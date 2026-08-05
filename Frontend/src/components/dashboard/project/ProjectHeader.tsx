import { motion } from "framer-motion";

const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

export default function ProjectHeader() {
    return (
        <motion.div {...fade} className="min-w-0">
            <h1 className="text-3xl font-black tracking-tight text-slate-50 sm:text-4xl">
                <span
                    style={{
                        background: "linear-gradient(100deg,#c4b5fd,#8b5cf6 45%,#3b82f6)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Projects
                </span>
            </h1>
            <p className="mt-1.5 text-sm text-slate-400">Manage all your projects in one place</p>
        </motion.div>
    );
}
