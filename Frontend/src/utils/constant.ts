import type { Meeting, AgendaItem, Stat, Memory, ActivityEntry } from "../../src/\/types/dashboard";

export const recentMeetings: Meeting[] = [
    { id: "m1", title: "Client Review", project: "Website Redesign", date: "May 20, 2025", duration: "45 min", status: "Summary Ready" },
    { id: "m2", title: "Backend Discussion", project: "Mobile App", date: "May 19, 2025", duration: "60 min", status: "Summary Ready" },
    { id: "m3", title: "Design Sync", project: "Design Team", date: "May 18, 2025", duration: "30 min", status: "Summary Ready" },
];

export const agenda: AgendaItem[] = [
    { id: "a1", time: "10:00 AM", title: "Sprint Planning", subtitle: "AI Chatbot Development", color: "#a855f7" },
    { id: "a2", time: "11:30 AM", title: "Client Review", subtitle: "Website Redesign", color: "#22c55e" },
    { id: "a3", time: "02:00 PM", title: "Backend Discussion", subtitle: "Mobile App", color: "#f97316" },
    { id: "a4", time: "04:00 PM", title: "Design Sync", subtitle: "Design Team", color: "#ec4899" },
    { id: "a5", time: "05:30 PM", title: "Weekly Retrospective", subtitle: "Team Meeting", color: "#ec4899" },
];

export const stats: Stat[] = [
    { id: "s1", label: "Active Projects", value: "12", delta: "20%", icon: "projects", color: "#a855f7", series: [4, 6, 5, 8, 7, 10, 12] },
    { id: "s2", label: "Memories Stored", value: "342", delta: "18%", icon: "memories", color: "#3b82f6", series: [200, 230, 250, 260, 300, 320, 342] },
    { id: "s3", label: "AI Conversations", value: "1,248", delta: "32%", icon: "chats", color: "#22c55e", series: [600, 700, 780, 900, 1000, 1150, 1248] },
    { id: "s4", label: "Tasks Completed", value: "86%", delta: "12%", icon: "tasks", color: "#f97316", series: [60, 65, 70, 68, 75, 80, 86] },
];

export const memories: Memory[] = [
    { id: "mem1", title: "Decision: Use Supabase for Authentication", source: "Client Review", date: "May 23, 2025" },
    { id: "mem2", title: "API Rate Limiting Implementation", source: "Backend Discussion", date: "May 22, 2025" },
    { id: "mem3", title: "UI/UX Feedback Summary", source: "Design Sync", date: "May 21, 2025" },
    { id: "mem4", title: "Database Schema Architecture", source: "Sprint Planning", date: "May 20, 2025" },
];

export const activity: ActivityEntry[] = [
    { id: "act1", title: "Sprint Planning meeting completed", subtitle: "AI Chatbot Development • 2h ago", tag: "Meeting" },
    { id: "act2", title: "API Requirements document uploaded", subtitle: "AI Chatbot Development • 5h ago", tag: "Document" },
    { id: "act3", title: "Design System task completed", subtitle: "Website Redesign • 1d ago", tag: "Task" },
    { id: "act4", title: "New memory created from Client Review", subtitle: "Website Redesign • 1d ago", tag: "Memory" },
];

export const promptSuggestions: string[] = [
    "Summarize yesterday's meetings",
    "What are my pending tasks?",
    "Show me decisions from last week",
    "Search for API documentation",
];
