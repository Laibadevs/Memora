import { motion } from "framer-motion";

type Props = {
    value: number;
    color?: string;
    height?: number;
};

export default function ProgressBar({ value, color = "#8b5cf6", height = 6 }: Props) {
    return (
        <div
            className="w-full overflow-hidden rounded-full"
            style={{ height, background: "rgba(255,255,255,0.07)" }}
        >
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{
                    background: `linear-gradient(90deg, ${color}, #c084fc)`,
                    boxShadow: `0 0 14px -2px ${color}`,
                }}
            />
        </div>
    );
}
