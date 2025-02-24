"use client";
import React, { useState, useEffect, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import CarouselDots from "./CarouselDots";

type CarouselProps = {
  children: ReactNode;
  options?: EmblaOptionsType;
};

const Carousel = ({ children, options }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const getSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    emblaApi.on("select", onSelect);
    getSnaps();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">{children}</div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <CarouselDots
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
