import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type DropdownOption<T extends string = string> = { value: T; label: string };

type Props<T extends string> = {
    value: T;
    options: DropdownOption<T>[];
    onChange: (v: T) => void;
    prefix?: string;
    className?: string;
};

export default function Dropdown<T extends string>({
    value,
    options,
    onChange,
    prefix,
    className = "",
}: Props<T>) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const current = options.find((o) => o.value === value);

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", onDoc);
        return () => document.removeEventListener("mousedown", onDoc);
    }, []);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-sm text-slate-200"
                style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
            >
                <span className="truncate">
                    {prefix ? <span className="text-slate-500">{prefix} </span> : null}
                    {current?.label}
                </span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} className="shrink-0 text-slate-500">
                    <ChevronDown size={16} />
                </motion.span>
            </motion.button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 z-50 mt-2 min-w-full overflow-hidden rounded-xl border p-1 backdrop-blur-xl"
                        style={{ borderColor: "#2a2748", background: "rgba(14,12,26,0.96)" }}
                    >
                        {options.map((o) => (
                            <li key={o.value}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(o.value);
                                        setOpen(false);
                                    }}
                                    className="flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    {o.label}
                                    {o.value === value && <Check size={14} className="text-violet-400" />}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
