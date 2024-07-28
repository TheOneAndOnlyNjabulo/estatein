"use client";
import Image from "next/image";
import React from "react";
import MenuItems from "./MenuItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-3 py-4 bg-bgsecondary border border-transparent border-b-white/20 z-20">
      <div className="flex items-center justify-between max-w-[1440px] m-auto">
        <div className="w-[160px] h-[48px] cursor-pointer">
          <Link href="/">
            <Image src="/Logo.png" width={160} height={48} alt="Logo" />
          </Link>
        </div>
        <MenuItems />
        <button
          onClick={() => {}}
          className="p-2 text-white bg-background rounded-md hover:bg-primary"
        >
          Contact us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
