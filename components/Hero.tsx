import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { businesses } from "@/contants";
import Image from "next/image";
// import { GlobeDemo } from "./ui/GridGlobe";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen text-white">
      <div>
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
            className="uppercase text-center text-[30px] md:text-5xl lg:text-6xl"
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

      <div className="flex justify-center items-center space-x-10 ">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="h-[48px] w-[70px] relative hover:scale-105 hover:cursor-pointer transition-transform duration-300"
          >
            <Image
              src={business.src}
              alt={business.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* <GlobeDemo /> */}
    </div>
  );
};

export default Hero;
