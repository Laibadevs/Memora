import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../libs/utils";

type Props = HTMLMotionProps<"div"> & {
    glow?: boolean;
    hover?: boolean;
    delay?: number;
};

/** Glass panel used across the dashboard. */
export default function Card({ glow, hover = true, delay = 0, className, children, ...rest }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay }}
            whileHover={hover ? { y: -4 } : undefined}
            className={cn(
                "relative rounded-2xl border p-5 backdrop-blur-xl transition-colors",
                className,
            )}
            style={{
                borderColor: "#221f38",
                background:
                    "linear-gradient(160deg, rgba(24,20,48,0.85), rgba(11,9,24,0.92))",
                boxShadow: glow
                    ? "0 0 40px -18px rgba(139,92,246,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"
                    : "inset 0 1px 0 rgba(255,255,255,0.04)",
                ...rest.style,
            }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}
