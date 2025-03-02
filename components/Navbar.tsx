"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex sticky top-0 mx-auto items-center justify-between z-[9999] px-6 lg:px-20 3xl:px-0 py-5 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <Link href="/">
        {isScrolled ? (
          <Image
            src="/hybridd-group-black.svg"
            alt="hybridd-logo"
            width={110}
            height={29}
          />
        ) : (
          <Image
            src="/hybridd-group-white.svg"
            alt="hybridd-logo"
            width={110}
            height={29}
          />
        )}
      </Link>

      <ul className="h-full gap-12 lg:flex hidden">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`flex items-center justify-center text-white text-[16px] font-[400] cursor-pointer pb-1.5 transition-all hover:font-bold ${
              isScrolled ? "text-black-100" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-90 px-4 py-2 text-white transition-all hover:bg-black"
        />
      </div>

      <Image
        src="/menu-white.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
