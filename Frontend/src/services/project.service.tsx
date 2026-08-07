import { projects, projectStats } from "../../src/data/project";
import type { Project, ProjectStat } from "../../src/types/project";

/** Local data source for the projects workspace (swap for an API later). */
export const projectService = {
    list(): Project[] {
        return projects;
    },
    stats(): ProjectStat[] {
        return projectStats;
    },
    find(id: string): Project | undefined {
        return projects.find((p) => p.id === id);
    },
};
