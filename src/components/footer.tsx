"use client";

import GitHub from "@/assets/icons/socials/github";
import Instagram from "@/assets/icons/socials/instagram";
import X from "@/assets/icons/socials/x";
import { scrollToTop } from "@/lib/utils";
import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel: string;
}

interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinks {
  legal: FooterLink[];
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/gtfol",
    icon: GitHub,
    ariaLabel: "GitHub",
  },
  {
    href: "https://x.com/gtfol_dev",
    icon: X,
    ariaLabel: "X",
  },
  {
    href: "https://instagram.com/gtfol_dev",
    icon: Instagram,
    ariaLabel: "Instagram",
  },
];

const FOOTER_LINKS: FooterLinks = {
  legal: [
    {
      href: "/privacy",
      label: "privacy policy",
    },
    {
      href: "/terms",
      label: "terms of service",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-void-purple">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-0">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
              <button
                onClick={scrollToTop}
                className="focus:outline-void-purple"
              >
                <img
                  src="/icon.png"
                  alt="gtfol"
                  className="h-6 w-auto object-contain flex-shrink-0"
                />
              </button>
              <span className="text-xs text-space-gray">
                get the f**k off localhost
              </span>
            </div>
            <div className="flex gap-x-6">
              {SOCIAL_LINKS.map(({ href, icon: Icon, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={ariaLabel}
                  className="focus:outline-void-purple"
                >
                  <Icon className="h-4 w-4 fill-space-gray hover:fill-space-gray-hover transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            {FOOTER_LINKS.legal.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-space-gray hover:text-space-gray-hover transition-colors text-xs"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#252525] flex flex-col sm:flex-row justify-between items-center">
          <div className="text-[#50555c] text-xs mb-4 sm:mb-0">
            {`© 2024-${new Date().getFullYear()} gtfol, LLC. All rights reserved.`}
          </div>
        </div>
      </div>
    </footer>
  );
};
