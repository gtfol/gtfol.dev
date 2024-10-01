"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import ContactForm from "./contact-form";

export default function ContactPage() {
  useEffect(() => {
    // This empty effect is used to suppress hydration warnings
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col">
      <header className="mb-12">
        <Link href="/">
          <img src="/icon.png" alt="gtfol" className="h-8 w-auto mr-2" />
          <h2 className="text-xl font-bold mt-2 text-space-gray">
            venture studio
          </h2>
        </Link>
      </header>

      <main className="flex-grow">
        <h1 className="text-3xl font-bold mb-8">contact us</h1>

        <div className="mb-8">
          <p className="mb-4">
            whether you're reaching out about our app, interested in our
            ventures, or just want to say hello, we're here to help. if you have
            a specific issue or question, please provide as much detail as
            possible, and our team will get back to you promptly.
          </p>
        </div>

        <ContactForm />

        <div>
          <h2 className="text-xl font-bold mb-4">follow us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://x.com/gtfol_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                x/twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gtfol_inc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hype-purple-text hover:text-hype-purple-text-hover"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
      </main>

      <footer className="mt-12 pt-8 border-t border-void-purple">
        <p className="text-sm text-space-gray">
          © {new Date().getFullYear()} gtfol, LLC. all rights reserved.
        </p>
      </footer>
    </div>
  );
}
