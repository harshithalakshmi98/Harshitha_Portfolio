import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { person } from "@/data/portfolio";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${person.name} · ${person.title}`,
  description:
    "AI Engineer portfolio — machine learning, data visualization, Java, Python, and incident analytics.",
  openGraph: {
    title: `${person.name} · ${person.title}`,
    description:
      "Software engineer pursuing MSc in AI; experience in analytics, ML, and full-stack adjacent tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-[var(--background)] font-[family-name:var(--font-sans)] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
