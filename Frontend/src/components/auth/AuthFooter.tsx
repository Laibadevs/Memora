import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AuthFooterProps {
    prompt: string;
    linkLabel: string;
    to: string;
    delay?: number;
}

export default function AuthFooter({
    prompt,
    linkLabel,
    to,
    delay = 0,
}: AuthFooterProps) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="
                mt-4
                sm:mt-5
                text-center
                text-[12px]
                sm:text-[13px]
                md:text-sm
                leading-relaxed
                px-2
                sm:px-0
            "
            style={{ color: "var(--color-gray)" }}
        >
            {prompt}{" "}
            <Link
                to={to}
                className="
                    font-medium
                    transition-colors
                    hover:underline
                    hover:opacity-90
                "
                style={{ color: "var(--color-accent)" }}
            >
                {linkLabel}
            </Link>
        </motion.p>
    );
}
