"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
  className?: string;
};

const Carousel = ({ children, className }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const calculateDimensions = () => {
      if (scrollContainerRef.current?.firstElementChild) {
        const firstChild = scrollContainerRef.current
          .firstElementChild as HTMLElement;
        setItemWidth(firstChild.offsetWidth);

        const containerStyle = window.getComputedStyle(
          scrollContainerRef.current
        );
        const gapValue = parseInt(containerStyle.gap, 10) || 16;
        setGap(gapValue);
      }
    };

    const observer = new ResizeObserver(calculateDimensions);
    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current && itemWidth > 0) {
      const scrollPos = index * (itemWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0 snap-center mx-2">
            {child}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
