import { useState } from "react";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";
import ProjectHeader from "../../components/dashboard/hero/WelcomeHeader";
import ProjectStats from "../../components/dashboard/stats/StatsGrid";
import ProjectFilters from "../../components/dashboard/project/ProjectFilters";
import ProjectGrid from "../../components/dashboard/project/ProjectGrid";
import ProjectActions from "../../components/dashboard/project/ProjectAction";
import CreateProjectModal from "../../components/dashboard/project/CreateProjectModal";
import { useProjects } from "../../hooks/useProjects";
import { useProjectFilter } from "../../hooks/useProjectFilter";

export default function Projects() {
    const { projects, loading, toggleStar, addProject, removeProject } = useProjects();
    const { setQuery, filter, setFilter, sort, setSort, view, setView, results } =
        useProjectFilter(projects);
    const [modal, setModal] = useState(false);

    return (
        <DashboardLayout
            active="Projects"

            onCreate={() => setModal(true)}
        >
            <div className="grid gap-7">
                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                    <ProjectHeader />
                    <ProjectActions onCreate={() => setModal(true)} />
                </div>

                <ProjectStats />

                <div className="h-px w-full" style={{ background: "linear-gradient(90deg,#221f38,transparent)" }} />

                <ProjectFilters
                    filter={filter}
                    onFilter={setFilter}
                    sort={sort}
                    onSort={setSort}
                    view={view}
                    onView={setView}
                    count={results.length}
                />

                <ProjectGrid
                    projects={results}
                    view={view}
                    loading={loading}
                    onStar={toggleStar}
                    onDelete={removeProject}
                    onReset={() => {
                        setFilter("all");
                        setQuery("");
                    }}
                />
            </div>

            <CreateProjectModal open={modal} onClose={() => setModal(false)} onCreate={addProject} />
        </DashboardLayout>
    );
}
