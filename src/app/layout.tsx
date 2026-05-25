import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Headless NextJS",
  description: "Next.js 15 + TypeScript + Tailwind CSS + Headless UI",
};

import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
