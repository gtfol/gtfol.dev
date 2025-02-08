import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PortfolioCardProps {
  href: string;
  title: string;
  description: string;
  front: string;
  back?: string;
  bgColor: string;
  category: "consumer" | "saas" | "enterprise";
  delay: number;
}
export function PortfolioCard({
  href,
  title,
  description,
  front,
  back,
  category,
  delay,
  bgColor,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-full focus:outline-void-purple"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="px-4 transition-colors h-full flex flex-col relative text-center py-8">
        <div className="relative mb-6">
          <AnimatePresence initial={false}>
            <motion.img
              key={!!back && isHovered ? "back" : "front"}
              src={`/portfolio/${!!back && isHovered ? back : front}.png`}
              alt={title}
              className="w-full h-auto aspect-[3/4] object-cover absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div
            className="w-full aspect-[3/4]"
            style={{ backgroundColor: bgColor }}
          />
          <div className="absolute top-3 right-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 bg-black/25 px-2 py-0.5 backdrop-blur-sm text-xs select-none">
            {category}
          </div>
        </div>
        <h3 className="text-sm font-unbounded font-normal tracking-wider mb-3">
          {title}
        </h3>
        <p className="text-sm sm:opacity-0 sm:group-hover:opacity-60 opacity-60 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
