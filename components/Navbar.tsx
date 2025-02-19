import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex mx-auto items-center justify-between z-30 bg-transparent px-6 lg:px-20 3xl:px-0 relative py-5">
      <Link href="/">
        <Image
          src="/hybridd-group.svg"
          alt="hybridd-logo"
          width={110}
          height={29}
        />
      </Link>

      <ul className="h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex items-center justify-center text-white text-[16px] font-[400] cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-90 px-4 py-2 text-white transition-all hover:bg-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
