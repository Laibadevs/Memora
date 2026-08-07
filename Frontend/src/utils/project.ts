import type { Project, ProjectStatus, SortKey } from "../../src/types/project";

export const statusColor: Record<ProjectStatus, string> = {
    active: "#22c55e",
    paused: "#f59e0b",
    completed: "#3b82f6",
};

export const statusLabel: Record<ProjectStatus, string> = {
    active: "Active",
    paused: "Paused",
    completed: "Completed",
};

const recency = (v: string) => {
    const n = parseInt(v, 10) || 0;
    if (v.includes("h")) return n;
    if (v.includes("d")) return n * 24;
    if (v.includes("w")) return n * 24 * 7;
    return n;
};

export function sortProjects(list: Project[], key: SortKey): Project[] {
    const copy = [...list];
    if (key === "name") return copy.sort((a, b) => a.name.localeCompare(b.name));
    if (key === "activity")
        return copy.sort(
            (a, b) =>
                b.documents + b.meetings + b.presentations - (a.documents + a.meetings + a.presentations),
        );
    return copy.sort((a, b) => recency(a.updatedAt) - recency(b.updatedAt));
}

export function totalAssets(p: Project) {
    return p.documents + p.meetings + p.presentations;
}
