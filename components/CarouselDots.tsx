"use client";
import React from "react";

type CarouselButtonProps = {
  selected: boolean;
  onClick: () => void;
  index: number;
};

const CarouselDots = ({ selected, onClick, index }: CarouselButtonProps) => {
  return (
    <button
      type="button"
      className={`w-3 h-3 rounded-full transition-all duration-300 ${
        selected ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
      }`}
      onClick={onClick}
      aria-label={`Navigate to slide ${index + 1}`}
    />
  );
};

export default CarouselDots;
