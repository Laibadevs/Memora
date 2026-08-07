import { useMemo, useState } from "react";
import type { FilterKey, Project, SortKey, ViewMode } from "../../src/types/project";
import { sortProjects } from "../../src/utils/project";

export function useProjectFilter(list: Project[]) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState<FilterKey>("all");
    const [sort, setSort] = useState<SortKey>("recent");
    const [view, setView] = useState<ViewMode>("grid");

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        const filtered = list.filter((p) => {
            const matchesQuery =
                !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
            const matchesFilter =
                filter === "all" ? true : filter === "starred" ? p.starred : p.status === filter;
            return matchesQuery && matchesFilter;
        });
        return sortProjects(filtered, sort);
    }, [list, query, filter, sort]);

    return { query, setQuery, filter, setFilter, sort, setSort, view, setView, results };
}
