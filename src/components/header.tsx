"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Mail } from "lucide-react";

export const Header = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      });
    })();
  }, []);

  return (
    <header className="flex justify-between px-8 pt-8 pb-8 mb-8 bg-[#09090B]">
      <div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center focus:outline-void-purple"
          >
            <motion.h2
              className="text-2xl sm:text-4xl text-white font-unbounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
            >
              gtfol
            </motion.h2>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <motion.h2
            className="text-sm sm:text-base mt-1 sm:mt-2 text-space-gray"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            ai product studio
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        className="flex flex-col gap-y-2 sm:gap-y-3 items-end justify-end"
      >
        <div className="relative overflow-hidden">
          <motion.button
            className="w-32 py-2 sm:w-40 sm:py-2.5 bg-hype-purple text-white font-unbounded text-xs sm:text-sm tracking-wider hover:bg-hype-purple-hover transition-colors focus:outline-void-purple"
            data-cal-link="gtfol/intro"
            data-cal-config='{"layout":"month_view"}'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            book a call
          </motion.button>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "linear",
              delay: 2,
            }}
          />
        </div>
        <motion.span
          className="text-space-gray text-sm flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <Mail className="w-4 h-4" />
          <span className="text-xs sm:text-sm">team@gtfol.dev</span>
        </motion.span>
        <Cal calLink="gtfol/intro" style={{ display: "none" }} />
      </motion.div>
    </header>
  );
};
