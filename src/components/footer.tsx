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
    href: "https://x.com/gtfol_dev",
    icon: X,
    ariaLabel: "X",
  },
  {
    href: "https://github.com/gtfol",
    icon: GitHub,
    ariaLabel: "GitHub",
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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <p className="text-sm text-space-gray">
          © {new Date().getFullYear()} gtfol, LLC. all rights reserved.
        </p>
        <span className="text-sm text-space-gray">
          <Link href="/contact" className="hover:underline">
            contact us
          </Link>
          : team[at]gtfol.dev
        </span>
      </div>
    </footer>
  );
};
