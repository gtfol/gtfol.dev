"use client";

import { motion } from "framer-motion";
import { LoadingScreen } from "./loading-screen";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <LoadingScreen />
      <motion.div
        className="relative min-h-screen bg-[#09090B] text-white flex flex-col z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
