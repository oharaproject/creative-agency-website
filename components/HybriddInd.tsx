import React from "react";
import Image from "next/image";
import ListofBands from "./ListofBands";

const HybriddInd = () => {
  return (
    <div className="pb-20 px-2 sm:px-4">
      <Image
        src="/hybridd-ent.png"
        alt="hybridd-ent"
        width={200}
        height={200}
        className="h-auto"
      />

      <div className="flex-1 flex flex-col pt-4 gap-3">
        <ListofBands />
      </div>
    </div>
  );
};

export default HybriddInd;
