export type ProjectStatus = "active" | "paused" | "completed";

export type Member = {
    id: string;
    name: string;
    color: string;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    initial: string;
    color: string;
    status: ProjectStatus;
    starred: boolean;
    documents: number;
    meetings: number;
    presentations: number;
    members: Member[];
    extraMembers: number;
    updatedAt: string;
    progress: number;
};

export type ProjectStat = {
    id: string;
    label: string;
    value: string;
    color: string;
    icon: "projects" | "documents" | "meetings" | "presentations";
    series: number[];
};

export type SortKey = "recent" | "name" | "activity";
export type FilterKey = "all" | ProjectStatus | "starred";
export type ViewMode = "grid" | "list";
