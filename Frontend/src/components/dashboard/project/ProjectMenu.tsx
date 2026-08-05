import { AnimatePresence, motion } from "framer-motion";
import { MoreVertical, Pencil, Share2, Archive, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = { onDelete?: () => void };

const actions = [
    { label: "Rename", Icon: Pencil },
    { label: "Share", Icon: Share2 },
    { label: "Archive", Icon: Archive },
] as const;

export default function ProjectMenu({ onDelete }: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    return (
        <div ref={ref} className="relative shrink-0">
            <motion.button
                type="button"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setOpen((o) => !o)}
                aria-label="Project options"
                className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-white/5 hover:text-slate-200"
            >
                <MoreVertical size={16} />
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.96 }}
                        transition={{ duration: 0.16 }}
                        className="absolute bottom-full right-0 z-40 mb-2 w-40 overflow-hidden rounded-xl border p-1 backdrop-blur-xl"
                        style={{ borderColor: "#2a2748", background: "rgba(14,12,26,0.96)" }}
                    >
                        {actions.map(({ label, Icon }) => (
                            <li key={label}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    <Icon size={14} /> {label}
                                </button>
                            </li>
                        ))}
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    setOpen(false);
                                    onDelete?.();
                                }}
                                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-rose-400 transition-colors hover:bg-rose-500/10"
                            >
                                <Trash2 size={14} /> Delete
                            </button>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
