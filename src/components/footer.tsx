"use client";

import GitHub from "@/assets/icons/socials/github";
import Instagram from "@/assets/icons/socials/instagram";
import X from "@/assets/icons/socials/x";
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
  developer: FooterLink[];
  product: FooterLink[];
  company: FooterLink[];
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

export const Footer = () => {
  return (
    <footer className="border-t border-void-purple">
      <div className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-0">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <img
              src="/icon.png"
              alt="gtfol"
              className="h-6 w-fit flex-shrink-0"
            />
            <span className="text-xs text-space-gray">get the f**k off localhost</span>
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
        <div className="flex flex-col gap-y-6 sm:items-end">
          <span className="hidden sm:block">&nbsp;</span>
          <p className="text-sm text-space-gray">
            © 2024-{new Date().getFullYear()} gtfol, LLC. all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
