import { motion } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";
import Dropdown from "../../common/DropDown";
import type { FilterKey, SortKey, ViewMode } from "../../../types/project";

type Props = {
    filter: FilterKey;
    onFilter: (v: FilterKey) => void;
    sort: SortKey;
    onSort: (v: SortKey) => void;
    view: ViewMode;
    onView: (v: ViewMode) => void;
    count: number;
};

export default function ProjectFilters({
    filter,
    onFilter,
    sort,
    onSort,
    view,
    onView,
    count,
}: Props) {
    return (
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="flex min-w-0 items-center gap-3 truncate text-xl font-bold text-slate-50"
            >
                All Projects
                <span className="shrink-0 rounded-lg bg-white/5 px-2 py-0.5 text-xs font-medium text-slate-400">
                    {count}
                </span>
            </motion.h2>

            <div className="col-span-2 flex flex-wrap items-center gap-3 sm:col-span-1">
                <Dropdown
                    value={filter}
                    onChange={onFilter}
                    className="min-w-[150px] flex-1 sm:flex-none"
                    options={[
                        { value: "all", label: "All Projects" },
                        { value: "active", label: "Active" },
                        { value: "paused", label: "Paused" },
                        { value: "completed", label: "Completed" },
                        { value: "starred", label: "Starred" },
                    ]}
                />
                <Dropdown
                    value={sort}
                    onChange={onSort}
                    prefix="Sort by:"
                    className="min-w-[170px] flex-1 sm:flex-none"
                    options={[
                        { value: "recent", label: "Recent" },
                        { value: "name", label: "Name" },
                        { value: "activity", label: "Activity" },
                    ]}
                />

                <div
                    className="flex shrink-0 items-center gap-1 rounded-xl border p-1"
                    style={{ borderColor: "#221f38", background: "rgba(255,255,255,0.03)" }}
                >
                    {([
                        ["grid", LayoutGrid],
                        ["list", List],
                    ] as const).map(([mode, Icon]) => (
                        <motion.button
                            key={mode}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => onView(mode)}
                            aria-label={`${mode} view`}
                            className="relative grid h-9 w-9 place-items-center rounded-lg"
                            style={{ color: view === mode ? "#fff" : "#7b8194" }}
                        >
                            {view === mode && (
                                <motion.span
                                    layoutId="view-toggle"
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                                        boxShadow: "0 10px 24px -14px rgba(139,92,246,1)",
                                    }}
                                />
                            )}
                            <Icon size={17} className="relative" />
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
}
