import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PortfolioCardProps {
  href: string;
  title: string;
  description: string;
  front: string;
  back: string;
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
      <div className="hover:bg-void-purple/10 transition-colors h-full flex flex-col relative text-center pb-8">
        <div className="relative mb-6">
          <AnimatePresence initial={false}>
            <motion.img
              key={isHovered ? "back" : "front"}
              src={`/portfolio/${isHovered ? back : front}.png`}
              alt={title}
              className="w-full h-auto aspect-[3/4] object-cover absolute overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
              }}
              style={{
                willChange: "transform, opacity",
              }}
            />
          </AnimatePresence>
          <div className="w-full aspect-[3/4]" />
          <div className="absolute top-3 right-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-2 py-2 bg-black/50 backdrop-blur-sm text-xs border border-white select-none">
            {category}
          </div>
        </div>
        <h3 className="text-sm font-bold mb-3">{title}</h3>
        <p className="text-xs sm:opacity-0 sm:group-hover:opacity-60 opacity-60 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
