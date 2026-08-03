import { motion } from "framer-motion";
import { greeting } from "../../../utils/formatDate";

export default function WelcomeHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
        >
            <h1 className="flex items-center gap-2 truncate text-xl font-bold text-slate-50 sm:text-2xl">
                {greeting()}, John!
                <motion.span
                    animate={{ rotate: [0, 18, -8, 18, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
                    className="inline-block origin-bottom"
                >
                    👋
                </motion.span>
            </h1>
            <p className="truncate text-sm text-slate-400">
                Here's what's happening in your workspace today.
            </p>
        </motion.div>
    );
}
