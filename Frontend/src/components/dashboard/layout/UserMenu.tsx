import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, LogOut, UserPlus, Settings } from "lucide-react";
import Avatar from "../../common/Avatar";
import Badge from "../../common/Badge";

interface UserMenuProps {
    /** Compact mode renders just the avatar + chevron (used in the Topbar).
     *  Full mode renders the name/email block too (used in the Sidebar footer). */
    compact?: boolean;
}

export default function UserMenu({ compact = false }: UserMenuProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    const menuItems = [
        { label: "Settings", icon: Settings, onClick: () => setOpen(false) },
        { label: "Create new account", icon: UserPlus, onClick: () => navigate("/signup") },
        { label: "Log out", icon: LogOut, onClick: () => navigate("/login"), danger: true },
    ];

    return (
        <div ref={ref} className={compact ? "relative" : "relative border-t pt-4"} style={compact ? undefined : { borderColor: "#1a1730" }}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className={compact ? "flex items-center gap-2" : "flex w-full items-center gap-3 text-left"}
            >
                <Avatar name="John Smith" size={compact ? 40 : 38} />
                {!compact && (
                    <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-2 truncate text-sm font-medium text-slate-100">
                            John Smith <Badge>Pro</Badge>
                        </p>
                        <p className="truncate text-[11px] text-slate-500">john@memora.ai</p>
                    </div>
                )}
                <ChevronDown size={16} className="shrink-0 text-slate-500" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className={`absolute z-50 mt-2 min-w-[200px] overflow-hidden rounded-xl border p-1 backdrop-blur-xl ${compact ? "right-0 top-full" : "bottom-full left-0 mb-2"
                            }`}
                        style={{ borderColor: "#2a2748", background: "rgba(14,12,26,0.96)" }}
                    >
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <button
                                    type="button"
                                    onClick={item.onClick}
                                    className="flex w-full items-center gap-2.5 whitespace-nowrap rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/5"
                                    style={{ color: item.danger ? "#f87171" : "#d1d5db" }}
                                >
                                    <item.icon size={15} />
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
