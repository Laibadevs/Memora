export type Meeting = {
    id: string;
    title: string;
    project: string;
    date: string;
    duration: string;
    status?: "Summary Ready" | "Processing";
};

export type AgendaItem = {
    id: string;
    time: string;
    title: string;
    subtitle: string;
    color: string;
};

export type Stat = {
    id: string;
    label: string;
    value: string;
    delta: string;
    icon: "projects" | "memories" | "chats" | "tasks";
    color: string;
    series: number[];
};

export type Memory = {
    id: string;
    title: string;
    source: string;
    date: string;
};

export type ActivityEntry = {
    id: string;
    title: string;
    subtitle: string;
    tag: "Meeting" | "Document" | "Task" | "Memory";
};

export type NavItem = {
    label: string;
    icon: string;
    badge?: string;
};
