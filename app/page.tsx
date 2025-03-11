import React from "react";
import Image from "next/image";
import {
  Navbar,
  Hero,
  HybriddAcd,
  HybriddEnt,
  HybriddEvent,
  HybriddInd,
} from "@/components";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed w-full top-0 left-0 z-[9999]">
        <Navbar />
      </div>

      <div className="flex flex-col relative mx-auto">
        <div className="w-full px-2 sm:px-4 pt-20">
          <div className="max-w-7xl w-full mx-auto">
            <Hero />
          </div>
        </div>

        <div className="w-full px-2 sm:px-4 z-10 relative overflow-hidden">
          <div className="absolute inset-0 w-screen -left-[calc((100vw-100%)/2)]">
            <Image
              src="/Bg.svg"
              alt="Background"
              fill
              className="object-cover object-left"
              quality={100}
              priority
            />
          </div>

          <div className="max-w-7xl w-full mx-auto relative">
            <HybriddAcd />
          </div>
        </div>

        <div className="w-full bg-black-200 px-2 sm:px-4 z-50">
          <div className="max-w-7xl w-full mx-auto">
            <HybriddEnt />
          </div>
        </div>

        <div className="w-full bg-white px-2 sm:px-4 z-10">
          <div className="max-w-7xl w-full mx-auto">
            <HybriddEvent />
          </div>
        </div>

        <div className="relative w-full bg-black-200 px-2 sm:px-4 z-10 min-h-screen">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image
              src="/hybridd-pattern-design.svg"
              alt="Hybridd Indonesia Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>

          <div className="relative z-10 px-2 sm:px-4">
            <div className="max-w-7xl mx-auto">
              <HybriddInd />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
