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
        
        <Cake className="text-pink-400 w-6 h-6" />

       
      </div>
    </nav>
  );
}
