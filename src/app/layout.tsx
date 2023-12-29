import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { LayoutProps } from "@/types/props";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Datewise",
  description: "A Better Google Calendar",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
