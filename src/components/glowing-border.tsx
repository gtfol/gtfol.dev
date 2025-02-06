import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingBorderProps {
  children: ReactNode;
  delay?: number;
}

export const GlowingBorder = ({ children, delay = 0 }: GlowingBorderProps) => {
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
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          delay: delay + 0.5,
        }}
      />
      {children}
    </motion.div>
  );
}; 