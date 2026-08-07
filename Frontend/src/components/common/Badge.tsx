import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color?: string;
    className?: string;
};

export default function Badge({ children, color = "#a855f7", className = "" }: Props) {
    return (
        <span
            className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-medium ${className}`}
            style={{
                color,
                background: `color-mix(in oklab, ${color} 16%, transparent)`,
                border: `1px solid color-mix(in oklab, ${color} 32%, transparent)`,
            }}
        >
            {children}
        </span>
    );
}
