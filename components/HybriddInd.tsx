import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";

type BreakpointOptions = {
  slidesToScroll: number;
  slidesPerView: number;
};

const HybriddInd = () => {
  const carouselOptions: EmblaOptionsType = {
    align: "start",
    containScroll: "trimSnaps",
    breakpoints: {
      "(max-width: 639px)": {
        slidesToScroll: 1,
        slidesPerView: 1,
      },
      "(min-width: 640px)": {
        slidesToScroll: 2,
        slidesPerView: 2,
      },
      "(min-width: 1024px)": {
        slidesToScroll: 4,
        slidesPerView: 4,
      },
    } as Record<string, BreakpointOptions>,
  };

  return (
    <div className="pb-20 px-2 py-14 sm:px-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-lg">
        <div className="flex items-center gap-8">
          <div>
            <Image
              src="/hybriddind.svg"
              alt="hybriddind-logo"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-semibold">
              Hybridd Indonesia
            </h1>
            <p className="text-white">Make Something Different.</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1392px] mx-auto mt-8 pb-12">
        <Carousel options={carouselOptions}>
          {tshirtData.map((tshirt) => (
            <div
              key={tshirt.id}
              className="
                flex-[0_0_calc(100%-16px)]
                sm:flex-[0_0_calc(50%-20px)]
                lg:flex-[0_0_calc(25%-24px)]
                mx-[5px] min-w-0
              "
            >
              <TshirtCard imageSrc={tshirt.imageSrc} title={tshirt.title} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

interface TshirtCardProps {
  imageSrc: string;
  title: string;
}

const TshirtCard: React.FC<TshirtCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow mb-[92px]">
      <div className="aspect-square bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          width={384}
          height={384}
          className="w-full h-full object-cover object-center transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-white font-medium text-sm line-clamp-2">{title}</h3>
      </div>
    </div>
  );
};

export default HybriddInd;

export const tshirtData = [
  {
    id: 1,
    imageSrc: "/tshirt-1.jpg",
    title: "Astrouble: Beyond Earth Same Damage",
  },
  {
    id: 2,
    imageSrc: "/tshirt-2.jpg",
    title: "Deep Sea-Deep Sad: Hell In Blue",
  },
  {
    id: 3,
    imageSrc: "/tshirt-3.jpg",
    title: "Tropical Tragedy: The Savage Safari",
  },
  {
    id: 4,
    imageSrc: "/lanyard.jpg",
    title: "Lanyard Hybridd Indonesia",
  },
  {
    id: 5,
    imageSrc: "/sticker-mocup-1.jpg",
    title: "Sticker Pack Astrouble",
  },
  {
    id: 6,
    imageSrc: "/sticker-mocup-2.jpg",
    title: "Sticker Pack Deep Sea - Deep Sad",
  },
  {
    id: 7,
    imageSrc: "/sticker-mocup-3.jpg",
    title: "Sticker Pack Tropical Tragedy",
  },
];
