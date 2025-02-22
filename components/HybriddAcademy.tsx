import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { classes } from "@/contants";
import Carousel from "./Carousel";

const HybriddAcademy = () => {
  return (
    <div className="pb-20 pt-20 px-2 sm:px-4">
      <Image
        src="/Program.png"
        alt="Hybridd-Acadmy"
        width="342"
        height="100"
        className="h-auto"
      />

      <Carousel className="mx-auto max-w-7xl">
        {classes.map((clas) => (
          <div
            key={clas.id}
            className="flex-shrink-0 w-[300px] sm:w-[320px] mx-2"
          >
            <CardContainer className="w-full h-full">
              <CardBody className="bg-white relative group/card h-full rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] dark:bg-white">
                <CardItem translateZ="100" className="w-full h-48">
                  <Image
                    src={clas.image}
                    alt={clas.title}
                    width="400"
                    height="300"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardItem>

                <div className="pt-4 flex-1 flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-blue-700 line-clamp-2 h-[3.5rem]"
                  >
                    {clas.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-blue-600 text-sm mt-2 mb-4 line-clamp-3 min-h-[72px]"
                  >
                    {clas.description}
                  </CardItem>

                  <div className="mt-auto">
                    <div className="flex justify-between items-center">
                      <CardItem translateZ="80" className="">
                        <p className="text-sm font-medium text-gray-400">
                          Rp. {clas.price.toLocaleString("id-ID")}
                        </p>
                      </CardItem>

                      <CardItem translateZ="80" className="">
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
  );
};

// <CardContainer key={clas.id} className="">
//   <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
//     <CardItem translateZ="100" className="w-full">
//       <Image
//         src={clas.image}
//         alt={clas.title}
//         width="1000"
//         height="1000"
//         className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//       />
//     </CardItem>

//     <CardItem
//       translateZ="50"
//       className="text-xl font-bold text-blue-700 dark:text-blue-700 mt-4"
//     >
//       {clas.title}
//     </CardItem>

//     <CardItem
//       as="p"
//       translateZ="60"
//       className="text-blue-600 text-sm max-w-sm mt-2 dark:text-blue-600"
//     >
//       {clas.description}
//     </CardItem>

//     <div className="flex justify-between items-center mt-10">
//       <CardItem translateZ="80" className="">
//         <p className="text-lg font-medium text-gray-400">
//           Rp. {clas.price.toLocaleString("id-ID")}
//         </p>
//       </CardItem>

//       <CardItem translateZ="80" className="">
//         <button className="px-4 py-2 bg-yellow-400 text-blue-600 text-xs font-bold rounded-lg border border-none hover:bg-yellow-500 transition-colors">
//           Gabung Kelas
//         </button>
//       </CardItem>
//     </div>
//   </CardBody>
// </CardContainer>

export default HybriddAcademy;
