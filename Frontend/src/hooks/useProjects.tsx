import { useEffect, useState } from "react";
import { projectService } from "../../src/services/project.service";
import type { Project, ProjectStat } from "../../src/types/project";

export function useProjects() {
    const [data, setData] = useState<Project[]>(projectService.list());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 450);
        return () => clearTimeout(t);
    }, []);

    const toggleStar = (id: string) => {
        projectService.toggleStar(id);
        setData((prev) => prev.map((p) => (p.id === id ? { ...p, starred: !p.starred } : p)));
    };

    const addProject = (p: Project) => {
        projectService.add(p);
        setData((prev) => [p, ...prev]);
    };

    const removeProject = (id: string) => {
        projectService.remove(id);
        setData((prev) => prev.filter((p) => p.id !== id));
    };

    return { projects: data, loading, toggleStar, addProject, removeProject };
}

export function useProjectStats(): ProjectStat[] {
    return projectService.stats();
}
