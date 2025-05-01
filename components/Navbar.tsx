"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="z-50 relative">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          Justin
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium ">
          <li>
            <Link href="/about" className="">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden z-50 relative">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary text-dark flex flex-col justify-center items-center space-y-6 text-xl font-medium z-40">
          <Link href="/" onClick={closeMenu} className="">
            Home
          </Link>
          <Link href="/about" onClick={closeMenu} className="">
            About
          </Link>
          <Link href="/projects" onClick={closeMenu} className="">
            Projects
          </Link>
          <Link href="/blog" onClick={closeMenu} className="">
            Blog
          </Link>
          <Link href="/contact" onClick={closeMenu} className="">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
