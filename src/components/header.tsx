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
    <header className="flex justify-between">
      <div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center focus:outline-void-purple"
          >
            <motion.h2
              className="text-3xl font-medium mt-2 tracking-wide text-white font-unbounded"
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
            className="text-xl font-semibold mt-2 text-space-gray"
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
        className="flex flex-col gap-y-3 items-end justify-end"
      >
        <button
          className="px-4 py-1 bg-hype-purple text-white font-medium hover:bg-hype-purple-hover transition-colors focus:outline-void-purple"
          data-cal-link="allenlin/intro"
          data-cal-config='{"layout":"month_view"}'
        >
          book a call
        </button>
        <span className="text-space-gray text-sm flex items-center gap-1">
          <Mail className="w-4 h-4" />
          <span className="tracking-wide">team@gtfol.dev</span>
        </span>
        <Cal calLink="allenlin/intro" style={{ display: "none" }} />
      </motion.div>
    </header>
  );
};
