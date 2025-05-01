import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Justin Angelo Perez | Web Developer",
  description:
    "Portfolio of Justin Angelo Perez, a creative full stack web developer.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-[var(--color-base-bg)] text-[var(--color-base-text)]"
        }
      >
        <Navbar />
        <main>{children}</main>
        <footer className="w-full text-center text-xs text-[var(--color-glitch-purple)] py-6 border-t border-[var(--color-glitch-purple)]">
          © {new Date().getFullYear()} Justin Angelo Perez. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
