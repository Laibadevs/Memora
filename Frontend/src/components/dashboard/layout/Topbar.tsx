import { motion } from "framer-motion";
import { Bell, Plus, ChevronDown, Menu } from "lucide-react";
import SearchBar from "../../common/SearchBar";
import Avatar from "../../common/Avatar";
import WelcomeHeader from "../../dashboard/hero/WelcomeHeader";

export default function Topbar({ onMenu }: { onMenu?: () => void }) {
    return (
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 2xl:grid-cols-[minmax(0,1fr)_minmax(0,460px)_auto]">
            <div className="flex min-w-0 items-center gap-3">
                <button
                    onClick={onMenu}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border text-slate-300 lg:hidden"
                    style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
                    aria-label="Open navigation"
                >
                    <Menu size={18} />
                </button>
                <WelcomeHeader />
            </div>

            <div className="order-last col-span-2 min-w-0 2xl:order-none 2xl:col-span-1">
                <SearchBar />
            </div>

            <div className="flex shrink-0 items-center gap-3">
                <motion.button
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    className="hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white sm:inline-flex"
                    style={{
                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                        boxShadow: "0 14px 32px -14px rgba(139,92,246,1)",
                    }}
                >
                    <Plus size={16} /> Start Meeting
                </motion.button>

                <motion.button
                    whileHover={{ rotate: [0, -12, 12, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative grid h-10 w-10 place-items-center rounded-xl border text-slate-300"
                    style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
                    aria-label="Notifications"
                >
                    <Bell size={17} />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-violet-500 text-[10px] font-bold text-white">
                        3
                    </span>
                </motion.button>

                <button className="flex items-center gap-2">
                    <Avatar name="John Smith" size={40} />
                    <ChevronDown size={16} className="text-slate-500" />
                </button>
            </div>
        </header>
    );
}
