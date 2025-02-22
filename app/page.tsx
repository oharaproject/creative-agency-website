import { Navbar, Hero, HybriddAcademy } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col relative justify-center items-center mx-auto overflow-hidden">
      <div className="w-full bg-black-100 px-2 sm:px-4 ">
        <div className="max-w-7xl w-full mx-auto">
          <Navbar />
          <Hero />
        </div>
      </div>

      <div className="w-full bg-white-100 px-2 sm:px-4 z-10">
        <div className="max-w-7xl w-full mx-auto">
          <HybriddAcademy />
        </div>
      </div>
    </main>
  );
}
