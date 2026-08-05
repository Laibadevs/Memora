import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import EmptyState from "../../common/EmptyState";
import Loader from "../../common/Loader";
import type { Project, ViewMode } from "../../../types/project";

type Props = {
    projects: Project[];
    view: ViewMode;
    loading?: boolean;
    onStar: (id: string) => void;
    onDelete: (id: string) => void;
    onReset?: () => void;
};

export default function ProjectGrid({ projects, view, loading, onStar, onDelete, onReset }: Props) {
    if (loading) return <Loader />;

    if (!projects.length)
        return (
            <EmptyState
                title="No projects match your filters"
                subtitle="Try a different search term, or clear the filters to see all workspace projects."
                action={
                    <button
                        onClick={onReset}
                        className="rounded-xl px-4 py-2.5 text-sm font-medium text-white"
                        style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)" }}
                    >
                        Clear filters
                    </button>
                }
            />
        );

    return (
        <motion.div
            layout
            className={
                view === "grid"
                    ? "grid gap-6 sm:grid-cols-2 2xl:grid-cols-3"
                    : "grid gap-4"
            }
        >
            <AnimatePresence mode="popLayout">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={p.id}
                        project={p}
                        view={view}
                        index={i}
                        onStar={onStar}
                        onDelete={onDelete}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
