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
  const [gap, setGap] = useState(0);

  useEffect(() => {
    const calculateDimensions = () => {
      if (scrollContainerRef.current?.firstElementChild) {
        const firstItem = scrollContainerRef.current
          .firstElementChild as HTMLElement;
        const style = window.getComputedStyle(firstItem);

        // Hitung lebar item termasuk margin
        const margin =
          parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
        setItemWidth(firstItem.offsetWidth + margin);

        // Hitung gap dari container
        const containerStyle = window.getComputedStyle(
          scrollContainerRef.current
        );
        setGap(parseInt(containerStyle.gap, 10));
      }
    };

    const observer = new ResizeObserver(calculateDimensions);
    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
      calculateDimensions();
    }

    return () => observer.disconnect();
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current && itemWidth > 0) {
      const scrollPosition = index * (itemWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Container Card */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0 snap-start">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
