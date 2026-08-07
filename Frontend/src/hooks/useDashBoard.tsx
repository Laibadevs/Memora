import { useMemo } from "react";
import {
    activity,
    agenda,
    memories,
    promptSuggestions,
    recentMeetings,
    stats,
} from "../../src/utils/constant";

/** Mock data hooks — swap the return values for real API calls later. */
export function useMeetings() {
    return useMemo(
        () => ({
            next: {
                title: "Sprint Planning",
                project: "AI Chatbot Development",
                window: "10:00 AM - 11:00 AM",
                startsIn: "In 35 min",
            },
            recent: recentMeetings,
            agenda,
        }),
        [],
    );
}

export function usePresentation() {
    return useMemo(
        () => ({
            title: "Project Alpha – Client Review",
            slides: 15,
            updated: "Updated 2h ago",
            readiness: 92,
        }),
        [],
    );
}

export function useMemory() {
    return useMemo(() => ({ recent: memories, activity }), []);
}

export function useAssistant() {
    return useMemo(
        () => ({
            greeting: "Hi John! How can I help you today?",
            suggestions: promptSuggestions,
            online: true,
        }),
        [],
    );
}

export function useStats() {
    return stats;
}
