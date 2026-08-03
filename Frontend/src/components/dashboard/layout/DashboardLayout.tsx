import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative min-h-screen w-full overflow-x-hidden"
            style={{
                background:
                    "radial-gradient(120% 90% at 20% 0%, #16112f 0%, #0a0818 45%, #05040c 100%)",
                fontFamily: "var(--font-body, Inter, sans-serif)",
            }}
        >
            {/* ambient glows */}
            <div className="pointer-events-none absolute -top-40 left-1/4 h-[320px] w-[320px] rounded-full blur-3xl opacity-40"
                style={{ background: "color-mix(in oklab, #8b5cf6 40%, transparent)" }} />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full blur-3xl opacity-30"
                style={{ background: "color-mix(in oklab, #3b82f6 40%, transparent)" }} />

            <div className="relative flex">
                <div className="sticky top-0 hidden h-screen lg:block">
                    <Sidebar />
                </div>

                <AnimatePresence>
                    {open && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpen(false)}
                                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                            />
                            <motion.div
                                initial={{ x: -260 }}
                                animate={{ x: 0 }}
                                exit={{ x: -260 }}
                                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                                className="fixed inset-y-0 left-0 z-50 lg:hidden"
                            >
                                <Sidebar />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">
                    <Topbar onMenu={() => setOpen(true)} />
                    <div className="mt-6">{children}</div>
                </main>
            </div>
        </div>
    );
}
