import type { Metadata } from "next";
import "./globals.css";
import { Iceland } from "next/font/google";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Justin Angelo Perez | Web Developer",
  description:
    "Portfolio of Justin Angelo Perez, a creative full stack web developer.",
};

const iceland = Iceland({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-iceland",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={iceland.className + " bg-gray-900 text-slate-200"}>
        <Navbar />
        <main>{children}</main>
        <footer className="w-full text-center text-lg py-6 border-t">
          © {new Date().getFullYear()} Justin A ngelo Perez. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
