"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { PortfolioCard } from "@/components/portfolio-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function HomePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col">
      <div className="mb-16">
        <Header />
      </div>

      <main className="flex-grow">
        <div className="mb-16">
          <div className="flex">
            <motion.div
              className="px-4 py-2 border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <h3 className="text-xl font-unbounded">what is gtfol?</h3>
            </motion.div>
          </div>
          <motion.div
            className="my-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: "easeOut",
              }}
            >
              we build software that go from 0 → 1, scale, and repeat.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.3,
                ease: "easeOut",
              }}
            >
              our expertise is in building consumer apps, b2b software, and
              enterprise solutions at 10x speed — shipped within 2-4 weeks.
            </motion.p>
          </motion.div>
        </div>

        <div className="mb-12">
          <div className="flex">
            <motion.div
              className="px-4 py-2 border border-white/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <h3 className="text-xl font-unbounded">latest portfolio</h3>
            </motion.div>
          </div>
          <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 text-center">
            <PortfolioCard
              href="https://eddypump.com"
              imageUrl="https://placehold.co/336x448"
              title="eddy pump"
              description="pump & dredge equipment recommendation"
              category="enterprise"
              delay={0.1}
            />

            <PortfolioCard
              href="https://textfully.dev"
              imageUrl="https://placehold.co/336x448"
              title="textfully"
              description="the open source twilio alternative"
              category="b2b"
              delay={0.2}
            />

            <PortfolioCard
              href="https://gloskin.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="glo"
              description="your #1 skincare coach"
              category="consumer"
              delay={0.3}
            />

            <PortfolioCard
              href="http://wakeupclub.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="wakeup club"
              description="get the f**k out of bed"
              category="consumer"
              delay={0.4}
            />

            <PortfolioCard
              href="https://flowwork.vercel.app"
              imageUrl="https://placehold.co/336x448"
              title="flow work"
              description="cowork with friends and get sh*t done"
              category="consumer"
              delay={0.4}
            />
          </div>
        </div>
        <div className="border-t border-void-purple my-12"></div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">rev portfolio</h2>
          <ul className="space-y-2">
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
              — payments platform to protect businesses from chargebacks and
              frauds
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
              — healthcare software to 10x staff productivity at 1/10th the cost
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
        </div>
        <p>
          looking to join our affiliated startup community? check out:&nbsp;
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

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
