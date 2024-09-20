import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="mb-12">
        <img src="/icon.png" alt="gtfol" className="h-8 w-auto mr-2" />
        <h2 className="text-xl font-bold mt-2 text-space-gray">
          get the f**k off localhost
        </h2>
      </header>

      <main>
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">what is gtfol?</h3>
          <p className="mb-4">
            gtfol is a venture studio founded by a community of builders,
            founders, creatives, and researchers in boston.
          </p>
          <p>
            our goal is simple: we want to help people "get the f**k off
            localhost".
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
                href="https://oneswype.com"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Swype
              </a>{" "}
              — applying to jobs by swiping right
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
                href="https://usefortitude.com/"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                Fortitude
              </a>{" "}
              — payments platform to protect businesses from chargebacks and
              frauds
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
          !
        </p>
      </main>
    </div>
  );
}
