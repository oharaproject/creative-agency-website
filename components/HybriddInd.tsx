import React from "react";
import Image from "next/image";

const HybriddInd = () => {
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
    </div>
  );
};

export default HybriddInd;
