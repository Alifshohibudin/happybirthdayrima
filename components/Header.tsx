"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cake, Menu, X } from "lucide-react";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/alma.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10" // responsive size
            priority
          />
          <span className="text-lg md:text-xl font-bold text-pink-400">
            Kerajaan ALMA
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><Link href="#" className="hover:text-pink-400">
          <Cake className="text-pink-400 w-6 h-6" />
          </Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-white">
            <li><Link href="/" className="hover:text-pink-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/project" className="hover:text-pink-400" onClick={() => setIsOpen(false)}>Project</Link></li>
            <li><Link href="/contact" className="hover:text-pink-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
