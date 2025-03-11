"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled
          ? "bg-black-100 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        {isScrolled ? (
          <Image
            src="/hybridd-group-white.svg"
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

      <ul className="h-auto gap-12 lg:flex hidden items-center mx-auto">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`flex items-center justify-center text-[16px] font-[400] cursor-pointer pb-1.5 transition-all hover:font-bold ${
              isScrolled && "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        {isScrolled ? (
          <Button
            type="button"
            title="Login"
            icon="/user-white.svg"
            variant="px-4 py-2 text-white transition-all hover:bg-black"
          />
        ) : (
          <Button
            type="button"
            title="Login"
            icon="/user-white.svg"
            variant="px-4 py-2 text-white transition-all hover:bg-black"
          />
        )}
      </div>

      <div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Image
            src="/menu-white.svg"
            alt="menu"
            width={24}
            height={24}
            className="inline-block cursor-pointer lg:hidden"
          />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 w-full h-screen right-0 bg-black-100 p-6 shadow-md">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="text-white text-[16px] font-[400] cursor-pointer transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
