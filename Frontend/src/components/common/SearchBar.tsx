import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar({ placeholder = "Search across projects, meetings, docs..." }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="group relative flex w-full items-center gap-3 rounded-2xl border px-4 py-3"
            style={{
                borderColor: "#221f38",
                background: "rgba(255,255,255,0.03)",
            }}
        >
            <Search size={18} className="shrink-0 text-slate-500 transition-colors group-focus-within:text-violet-400" />
            <input
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
                placeholder={placeholder}
            />
            <kbd
                className="hidden shrink-0 rounded-md px-2 py-1 text-[11px] text-slate-400 sm:block"
                style={{ border: "1px solid #2a2748", background: "rgba(255,255,255,0.03)" }}
            >
                ⌘ K
            </kbd>
        </motion.div>
    );
}
