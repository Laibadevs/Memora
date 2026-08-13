import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Sparkles, FolderX } from "lucide-react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";
import Button from "../../components/common/Button";
import ChatBubble, { type ChatMessage } from "../../components/dashboard/chat/chatBubble";
import { projectService } from "../../services/project.service";
import { statusColor, statusLabel } from "../../utils/project";

const CANNED_REPLIES = [
    "Got it — I've noted that for this project. Anything else you'd like me to look into?",
    "Here's what I found in the project's documents and meeting notes related to that.",
    "I've cross-referenced this with recent activity — let me know if you'd like more detail.",
    "That's a good question. Based on what's been shared so far, here's my take.",
];

function timeNow() {
    return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function ProjectChat() {
    const { id } = useParams<{ id: string }>();
    const project = id ? projectService.find(id) : undefined;

    const [messages, setMessages] = useState<ChatMessage[]>(() =>
        project
            ? [
                {
                    id: "welcome",
                    role: "ai",
                    text: `Hi! I'm your AI assistant for ${project.name}. Ask me anything about this project — decisions, documents, meetings, or tasks.`,
                    time: timeNow(),
                },
            ]
            : []
    );
    const [draft, setDraft] = useState("");
    const [typing, setTyping] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const handleSend = () => {
        const text = draft.trim();
        if (!text) return;

        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", text, time: timeNow() }]);
        setDraft("");
        setTyping(true);

        setTimeout(() => {
            const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
            setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "ai", text: reply, time: timeNow() }]);
            setTyping(false);
        }, 900 + Math.random() * 600);
    };

    if (!project) {
        return (
            <DashboardLayout>
                <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
                    <span
                        className="grid h-14 w-14 place-items-center rounded-full"
                        style={{ background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.3)" }}
                    >
                        <FolderX size={22} className="text-rose-400" />
                    </span>
                    <div>
                        <p className="text-base font-semibold text-slate-50">Project not found</p>
                        <p className="mt-1 text-sm text-slate-400">
                            This project may have been deleted, or the link is incorrect.
                        </p>
                    </div>
                    <Link to="/project">
                        <Button icon={<ArrowLeft size={16} />}>Back to Projects</Button>
                    </Link>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="flex h-[calc(100vh-140px)] min-h-[520px] flex-col">
                {/* header */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex shrink-0 items-center gap-3 border-b pb-4"
                    style={{ borderColor: "#1c1934" }}
                >
                    <Link
                        to="/project"
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border text-slate-400 transition-colors hover:text-white"
                        style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
                        aria-label="Back to Projects"
                    >
                        <ArrowLeft size={16} />
                    </Link>

                    <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black text-white"
                        style={{
                            background: `linear-gradient(135deg, ${project.color}, color-mix(in oklab, ${project.color} 45%, #000))`,
                            boxShadow: `0 10px 26px -12px ${project.color}`,
                        }}
                    >
                        {project.initial}
                    </span>

                    <div className="min-w-0 flex-1">
                        <p className="flex items-center gap-2 truncate text-base font-semibold text-slate-50">
                            {project.name}
                            <span
                                className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                                style={{
                                    color: statusColor[project.status],
                                    background: `color-mix(in oklab, ${statusColor[project.status]} 16%, transparent)`,
                                }}
                            >
                                {statusLabel[project.status]}
                            </span>
                        </p>
                        <p className="truncate text-[12px] text-slate-500">{project.description}</p>
                    </div>
                </motion.div>

                {/* messages */}
                <div className="flex-1 space-y-4 overflow-y-auto py-5">
                    {messages.map((m) => (
                        <ChatBubble key={m.id} message={m} />
                    ))}

                    {typing && (
                        <div className="flex items-center gap-2.5">
                            <span
                                className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full"
                                style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                            >
                                <Sparkles size={14} className="text-white" />
                            </span>
                            <div
                                className="flex items-center gap-1 rounded-2xl px-4 py-3"
                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #221f38" }}
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.span
                                        key={i}
                                        className="h-1.5 w-1.5 rounded-full bg-slate-400"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div ref={endRef} />
                </div>

                {/* composer */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex shrink-0 items-center gap-3 rounded-2xl border p-2 pl-4"
                    style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
                >
                    <input
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder={`Ask anything about ${project.name}…`}
                        className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSend}
                        disabled={!draft.trim()}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white transition-opacity disabled:opacity-40"
                        style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)" }}
                        aria-label="Send message"
                    >
                        <Send size={16} />
                    </motion.button>
                </motion.div>
            </div>
        </DashboardLayout>
    );
}
