import "./globals.css";
import type { Metadata } from "next";
import { CSPostHogProvider } from "../providers/PostHogProvider";
import { GeistMono } from 'geist/font/mono'
import { Space_Mono, Unbounded } from "next/font/google";

import "./globals.css";
import clsx from "clsx";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-unbounded",
  fallback: ["sans-serif"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  fallback: ["Courier New", "monospace"],
});

const geist = GeistMono;

export const metadata: Metadata = {
  title: "gtfol",
  icons: ["/favicon.ico"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gtfol.inc",
    images: [
      {
        url: "https://gtfol.inc/logo.png",
        width: 600,
        height: 600,
        alt: "gtfol",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en">
      <CSPostHogProvider>
        <body
          className={clsx(
            unbounded.variable,
            spaceMono.variable,
            geist.className,
            "h-full text-black"
          )}
        >
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
