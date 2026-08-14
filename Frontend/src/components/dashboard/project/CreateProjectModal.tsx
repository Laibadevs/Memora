import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FolderPlus } from "lucide-react";
import Button from "../../common/Button";
import type { Project } from "../../../types/project";

const COLORS = ["#8b5cf6", "#3b82f6", "#22c55e", "#f97316", "#ec4899", "#f59e0b"];

interface CreateProjectModalProps {
    open: boolean;
    onClose: () => void;
    onCreate: (project: Project) => void;
}

export default function CreateProjectModal({ open, onClose, onCreate }: CreateProjectModalProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState(COLORS[0]);

    const handleCreate = () => {
        if (!name.trim()) return;

        const project: Project = {
            id: crypto.randomUUID(),
            name: name.trim(),
            description: description.trim(),
            initial: name.trim()[0]?.toUpperCase() ?? "P",
            color,
            status: "active",
            starred: false,
            documents: 0,
            meetings: 0,
            presentations: 0,
            members: [],
            extraMembers: 0,
            updatedAt: "Just now",
            progress: 0,
        };

        onCreate(project);
        setName("");
        setDescription("");
        setColor(COLORS[0]);
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 12 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-6"
                        style={{ borderColor: "#2a2748", background: "#0e0c1a" }}
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <p className="flex items-center gap-2 text-base font-semibold text-slate-50">
                                <FolderPlus size={18} className="text-violet-300" /> New Project
                            </p>
                            <button
                                onClick={onClose}
                                className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 hover:text-white"
                                aria-label="Close"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                    Project name
                                </label>
                                <input
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Mobile App Redesign"
                                    className="w-full rounded-xl px-3.5 py-2.5 text-sm text-slate-100 outline-none"
                                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #221f38" }}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                    Description (optional)
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="What is this project about?"
                                    rows={3}
                                    className="w-full resize-none rounded-xl px-3.5 py-2.5 text-sm text-slate-100 outline-none"
                                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #221f38" }}
                                />
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-medium text-slate-400">
                                    Color
                                </label>
                                <div className="flex gap-2">
                                    {COLORS.map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setColor(c)}
                                            className="h-8 w-8 rounded-full transition-transform"
                                            style={{
                                                background: c,
                                                transform: color === c ? "scale(1.15)" : "scale(1)",
                                                boxShadow: color === c ? `0 0 0 2px #0e0c1a, 0 0 0 4px ${c}` : "none",
                                            }}
                                            aria-label={`Choose color ${c}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <Button variant="outline" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button onClick={handleCreate}>Create Project</Button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
