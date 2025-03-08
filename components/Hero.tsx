import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { businesses } from "@/contants";
import Image from "next/image";
import Globe from "./Globe";
// import { GlobeDemo } from "./ui/GridGlobe";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 text-white h-auto overflow-hidden">
      {/* GLOBE */}
      <div className="absolute inset-0 z-0 h-3/4 w-full">
        <div className="relative h-full w-full scale-[80%] -translate-y-[6.5%] md:scale-[200%] md:translate-y-[50%] lg:translate-y-[78%] lg:scale-[200%] xl:translate-y-[76%] xl:scale-[250%] 2xl:translate-y-[73%] 2xl:scale-[250%] ">
          <Globe />
        </div>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 w-full bg-black-100/60"></div>
      {/* 

      {/* SPOTLIGHT */}
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* grid start */}
      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div> */}
      {/* grid end */}

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-10">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            another slogan right here
          </h2> */}

          <TextGenerateEffect
            className="uppercase text-center text-[30px] md:text-5xl lg:text-6xl "
            words="hybridd group"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Where Creativity Meets Purpose
          </p>

          <a href="#about">
            <MagicButton
              title="Lets Collaborate!"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="z-20"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="hidden md:block relative aspect-[1.67] hover:scale-105 transition-transform duration-300 z-20"
              style={{
                width: "clamp(80px, 15vw, 112px)",
                height: "clamp(48px, calc(15vw * 0.6), 67px)",
              }}
            >
              <Image
                src={business.src}
                alt={business.alt}
                fill
                sizes="(min-width: 768px) 15vw, (min-width: 1024px) 12vw, (min-width: 1280px) 10vw"
                className="object-contain p-1.5"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <GlobeDemo /> */}
    </div>
  );
};

export default Hero;
