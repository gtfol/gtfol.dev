"use client";

import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [latestOpen, setLatestOpen] = React.useState(true);
  const [revOpen, setRevOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col">
      <header className="mb-12">
        <img src="/icon.png" alt="gtfol" className="h-8 w-auto mr-2" />
        <h2 className="text-xl font-bold mt-2 text-space-gray">
          get the f**k off localhost
        </h2>
      </header>

      <div className="border-t border-void-purple mb-12"></div>

      <main className="flex-grow">
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-8">what is gtfol?</h3>
          <p className="mb-4">
            gtfol is an ai product studio. we build software that go from 0 → 1,
            then scale, and repeat.
          </p>
          <p>
            our playbook allows us to build consumer apps, b2b software, and
            enterprise solutions at 10x speed, going from idea, design, mockup,
            mvp, to launch within days.
          </p>
        </div>

        <div className="border-t border-void-purple my-12"></div>

        <div className="mb-12">
          <div
            onClick={() => setLatestOpen(!latestOpen)}
            className="cursor-pointer text-xl font-semibold flex items-center hover:text-white/80 select-none"
          >
            <motion.span
              initial={false}
              animate={{ rotate: latestOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-0.5 mr-2"
            >
              ▶
            </motion.span>
            latest portfolio
          </div>
          <AnimatePresence initial={false}>
            {latestOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden ml-6"
              >
                <ul className="space-y-2 mt-4">
                  <li>
                    <a
                      href="https://textfully.dev"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Textfully
                    </a>{" "}
                    — the open source twilio alternative
                  </li>
                  <li>
                    <a
                      href="https://gloskin.vercel.app"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Glo
                    </a>{" "}
                    — your #1 skincare coach
                  </li>
                  <li>
                    <a
                      href="http://wakeupclub.vercel.app"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Wakeup Club
                    </a>{" "}
                    — get the f**k out of bed and make the most of daylight
                  </li>
                  <li>
                    <a
                      href="https://flowwork.vercel.app"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Flow Work
                    </a>{" "}
                    — cowork with friends in real time, find your flow, and get
                    sh*t done
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="border-t border-void-purple my-12"></div>

        <div className="mb-8">
          <div
            onClick={() => setRevOpen(!revOpen)}
            className="cursor-pointer text-xl font-semibold flex items-center hover:text-white/80 select-none"
          >
            <motion.span
              initial={false}
              animate={{ rotate: revOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-0.5 mr-2"
            >
              ▶
            </motion.span>
            rev portfolio
          </div>
          <AnimatePresence initial={false}>
            {revOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden ml-6"
              >
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href="https://makefireplace.com"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Fireplace
                    </a>{" "}
                    — all-in-one community management for student orgs
                  </li>
                  <li>
                    <a
                      href="https://sorce.jobs"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Sorce
                    </a>{" "}
                    — apply to jobs by swyping right
                  </li>
                  <li>
                    <a
                      href="https://www.auribuslabs.com"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Auribus Labs
                    </a>{" "}
                    — the world's first platform for hearing health
                  </li>
                  <li>
                    <a
                      href="https://usefortitude.com"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Fortitude
                    </a>{" "}
                    — payments platform to protect businesses from chargebacks
                    and frauds
                  </li>
                  <li>
                    <a
                      href="https://parkwithperch.com"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Perch
                    </a>{" "}
                    — stress-free, reserved football parking
                  </li>
                  <li>
                    <a
                      href="https://bibite.app"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Bibite
                    </a>{" "}
                    — split bills and share restaurant reviews with friends
                  </li>
                  <li>
                    <a
                      href="https://edenonearth.ai"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Eden
                    </a>{" "}
                    — healthcare software to 10x staff productivity at 1/10th
                    the cost
                  </li>
                  <li>
                    <a
                      href="https://intervieweveryone.org"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Interview Everyone
                    </a>{" "}
                    — pre-screening interview tool for small businesses
                  </li>
                  <li>
                    <a
                      href="https://edugator.app"
                      className="text-hype-purple-text hover:text-hype-purple-text-hover"
                    >
                      Edugator
                    </a>{" "}
                    — the future of computing education
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p>
          looking for our affiliated startup community? check out:&nbsp;
          <a
            href="https://rev.school"
            referrerPolicy="no-referrer"
            target="_blank"
            className="text-hype-purple-text hover:text-hype-purple-text-hover"
          >
            rev.school
          </a>
        </p>

        <div className="border-t border-void-purple my-12"></div>
      </main>

      <footer className="mt-12 pt-8 border-t border-void-purple">
        <p className="text-sm text-space-gray">
          © {new Date().getFullYear()} gtfol, LLC. all rights reserved.
        </p>
        <div className="mt-4">
          <span className="text-sm text-space-gray">
            <Link href="/contact" className="hover:underline">
              contact us
            </Link>
            : team[at]gtfol.dev
          </span>
        </div>
      </footer>
    </div>
  );
}
