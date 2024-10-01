import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col">
      <header className="mb-12">
        <img src="/icon.png" alt="gtfol" className="h-8 w-auto mr-2" />
        <h2 className="text-xl font-bold mt-2 text-space-gray">
          get the f**k off localhost
        </h2>
      </header>

      <main className="flex-grow">
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">what is gtfol?</h3>
          <p className="mb-4">
            gtfol is a venture studio founded by a community of builders,
            founders, creatives, and researchers in boston.
          </p>
          <p className="mb-4">
            our goal is simple: we want to build companies that go from 0 → 1,
            scale, and repeat.
          </p>
          <p>
            our vision is to assemble the next generation of Steve Jobs, Mark
            Zuckerberg, and Elon Musk, and build companies together that change
            the world.
          </p>
        </div>

        <details className="mb-4" open>
          <summary className="cursor-pointer text-xl font-semibold">
            latest ventures
          </summary>
          <ul className="space-y-2 mt-4">
            <li>
              <a
                href="https://www.gloskin.app/"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Glo
              </a>{" "}
              — your #1 skincare coach
            </li>
            <li>
              <a
                href="https://wakeupclubapp.com/"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Wakeup Club
              </a>{" "}
              — get the f**k out of bed and make the most of daylight
            </li>
            <li>
              <a
                href="https://flowwork.xyz/"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Flow Work
              </a>{" "}
              — cowork with friends in real time, find your flow, and get sh*t
              done
            </li>
          </ul>
        </details>

        <details className="mb-12">
          <summary className="cursor-pointer text-xl font-semibold">
            rev ventures
          </summary>
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
                href="https://swype.jobs"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Swype
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
        </details>

        <p>
          looking for our community/incubator? check out{" "}
          <a
            href="https://rev.school"
            className="text-hype-purple-text hover:text-hype-purple-text-hover"
          >
            rev.school
          </a>
        </p>
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
            : team[at]gtfol.inc
          </span>
        </div>
      </footer>
    </div>
  );
}
