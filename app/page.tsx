import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col relative bg-black-100 sm:px-10 px-5 justify-center items-center mx-auto overflow-hidden">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
