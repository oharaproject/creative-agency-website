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
    <main className="relative">
      <div className="fixed w-full top-0 left-0 z-[9999]">
        <Navbar />
      </div>

      <div className="flex flex-col relative mx-auto">
        <div className="w-full bg-black-100 px-2 sm:px-4 pt-20">
          <div className="max-w-7xl w-full mx-auto">
            <Hero />
          </div>
        </div>

        <div className="w-full bg-white px-2 sm:px-4 z-10">
          <div className="max-w-7xl w-full mx-auto">
            <HybriddAcd />
          </div>
        </div>

        <div className="w-full bg-black-200 px-2 sm:px-4 z-10">
          <div className="max-w-7xl w-full mx-auto">
            <HybriddEnt />
          </div>
        </div>

        <div className="w-full bg-white px-2 sm:px-4 z-10">
          <div className="max-w-7xl w-full mx-auto">
            <HybriddEvent />
          </div>
        </div>
      </div>
    </main>
  );
}
