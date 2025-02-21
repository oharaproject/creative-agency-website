import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { classes } from "@/contants";

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

      <div>
        <div className="flex items-center mx-auto gap-10 overflow-hidden">
          {classes.map((clas) => (
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
            <CardContainer key={clas.id} className="w-[428px] h-full">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <Image
                    src={clas.image}
                    alt={clas.title}
                    width="1000"
                    height="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>

                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-blue-700 dark:text-blue-700 mt-4"
                >
                  {clas.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-blue-600 text-sm max-w-sm mt-2 dark:text-blue-600"
                >
                  {clas.description}
                </CardItem>

                <div className="flex justify-between items-center mt-10">
                  <CardItem translateZ="80" className="">
                    <p className="text-lg font-medium text-gray-400">
                      Rp. {clas.price.toLocaleString("id-ID")}
                    </p>
                  </CardItem>

                  <CardItem translateZ="80" className="">
                    <button className="px-4 py-2 bg-yellow-400 text-blue-600 text-xs font-bold rounded-lg border border-none hover:bg-yellow-500 transition-colors">
                      Gabung Kelas
                    </button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HybriddAcademy;
