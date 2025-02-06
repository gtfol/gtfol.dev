import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeadingBorderProps {
  children: ReactNode;
  delay?: number;
}

export const HeadingBorder = ({ children, delay = 0 }: HeadingBorderProps) => {
  return (
    <motion.div
      className="relative px-4 py-2 border border-white/50 overflow-hidden group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
