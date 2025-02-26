import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { classes } from "@/contants";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./Carousel";

type BreakpointOptions = {
  slidesToScroll: number;
  slidesPerView: number;
};

const HybriddAcd = () => {
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
    <div className="pb-20 pt-12 px-2 sm:px-4">
      <Image
        src="/hybridd-academy.png"
        alt="Hybridd-Academy"
        width={200}
        height={200}
        className="h-auto"
      />

      <div className="max-w-[1392px] mx-auto">
        <Carousel options={carouselOptions}>
          {classes.map((clas) => (
            <div
              key={clas.id}
              className="
                flex-[0_0_calc(100%-16px)]    // Full width mobile
                sm:flex-[0_0_calc(50%-20px)]  // 2 columns tablet
                lg:flex-[0_0_calc(25%-24px)]  // 4 columns desktop
                mx-[5px] min-w-0
              "
            >
              <CardContainer className="w-full h-full">
                <CardBody className="bg-white relative group/card h-full rounded-xl p-6 border border-black/[0.1] flex flex-col">
                  {/* Bagian Gambar */}
                  <div className="h-48 flex-shrink-0">
                    <CardItem translateZ="100" className="w-full h-full">
                      <Image
                        src={clas.image}
                        alt={clas.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </CardItem>
                  </div>

                  {/* Bagian Konten */}
                  <div className="flex-1 flex flex-col pt-4 gap-3">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-blue-700 line-clamp-2 leading-tight"
                    >
                      {clas.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-blue-600 text-sm line-clamp-3 flex-1"
                    >
                      {clas.description}
                    </CardItem>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center">
                        <CardItem translateZ="80">
                          <p className="text-sm font-medium text-gray-400">
                            Rp. {clas.price.toLocaleString("id-ID")}
                          </p>
                        </CardItem>

                        <CardItem translateZ="80">
                          <button className="px-4 py-2 bg-yellow-400 text-blue-700 text-sm font-medium rounded-lg hover:bg-yellow-500 transition-colors shadow-sm">
                            Gabung Kelas
                          </button>
                        </CardItem>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HybriddAcd;
