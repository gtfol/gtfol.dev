"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center">
          <motion.h2
            className="text-3xl font-medium mt-2 tracking-wide text-white font-unbounded"
            initial={false}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            gtfol
          </motion.h2>
        </Link>
        <motion.p
          className="text-sm text-space-gray mt-2"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          get the f**k off localhost
        </motion.p>
      </div>
      <AnimatePresence mode="wait">
        <motion.h2
          key={isHovered ? "hover" : "default"}
          className="text-xl font-bold mt-2 text-space-gray"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {isHovered ? "get the f**k off localhost" : "ai product studio"}
        </motion.h2>
      </AnimatePresence>
    </header>
  );
};
