import { motion } from "framer-motion";
import { SquareArrowOutUpRightIcon } from "lucide-react";

interface PortfolioCardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
  category: "consumer" | "b2b" | "enterprise";
  delay: number;
}

export function PortfolioCard({
  href,
  imageUrl,
  title,
  description,
  category,
  delay,
}: PortfolioCardProps) {
  return (
    <motion.a
      href={href}
      className="group h-full focus:outline-void-purple"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <div className="hover:bg-void-purple/10 transition-colors h-full flex flex-col relative">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto aspect-[3/4] object-cover mb-4"
          />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-2 bg-black/50 backdrop-blur-sm text-xs border border-white">
            {category}
          </div>
        </div>
        <h3 className="text-base font-bold mb-2">{title}</h3>
        <p className="text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
