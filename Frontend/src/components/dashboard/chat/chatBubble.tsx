import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Avatar from "../../common/Avatar";

export interface ChatMessage {
    id: string;
    role: "user" | "ai";
    text: string;
    time: string;
}

export default function ChatBubble({ message }: { message: ChatMessage }) {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
        >
            {isUser ? (
                <Avatar name="John Smith" size={30} />
            ) : (
                <span
                    className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full"
                    style={{ background: "linear-gradient(135deg,#8b5cf6,#3b82f6)" }}
                >
                    <Sparkles size={14} className="text-white" />
                </span>
            )}

            <div className={`max-w-[75%] ${isUser ? "items-end" : "items-start"} flex flex-col`}>
                <div
                    className="rounded-2xl px-4 py-2.5 text-sm leading-relaxed text-slate-100"
                    style={
                        isUser
                            ? {
                                background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                                borderBottomRightRadius: 4,
                            }
                            : {
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid #221f38",
                                borderBottomLeftRadius: 4,
                            }
                    }
                >
                    {message.text}
                </div>
                <span className="mt-1 px-1 text-[10px] text-slate-500">{message.time}</span>
            </div>
        </motion.div>
    );
}
