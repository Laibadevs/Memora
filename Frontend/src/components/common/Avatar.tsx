type Props = {
    name: string;
    size?: number;
    color?: string;
    ring?: boolean;
};

/** Initials avatar with gradient fill — no external image dependency. */
export default function Avatar({ name, size = 34, color = "#8b5cf6", ring = true }: Props) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

    return (
        <span
            className="inline-grid shrink-0 place-items-center rounded-full font-semibold text-white"
            style={{
                width: size,
                height: size,
                fontSize: size * 0.36,
                background: `linear-gradient(135deg, ${color}, #3b82f6)`,
                border: ring ? "2px solid #0e0c1a" : undefined,
                boxShadow: `0 0 18px -6px ${color}`,
            }}
        >
            {initials}
        </span>
    );
}
