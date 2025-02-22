import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { classes } from "@/contants";

const HybriddAcademy = () => {
  return (
    <div className="pb-20 pt-20 px-2 sm:px-4">
      <Image
        src="/Program.png"
        alt="Hybridd-Academy"
        width={342}
        height={100}
        className="h-auto mb-8 mx-auto"
      />

      <div className="max-w-[1392px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2">
          {classes.slice(0, 4).map((clas) => (
            <div key={clas.id} className="w-full h-full">
              <CardContainer className="w-full h-full">
                <CardBody className="bg-white relative group/card h-full rounded-xl p-6 border border-black/[0.1] flex flex-col">
                  <div className="flex-1 flex flex-col h-full">
                    {" "}
                    {/* Bagian Gambar dengan Tinggi Tetap */}
                    <CardItem translateZ="100" className="w-full h-48">
                      <Image
                        src={clas.image}
                        alt={clas.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </CardItem>
                    {/* Bagian Konten Text */}
                    <div className="flex-1 flex flex-col justify-between pt-4">
                      <div className="space-y-3 fle">
                        <CardItem
                          translateZ="50"
                          className="text-xl font-bold text-blue-700 line-clamp-2 leading-tight"
                        >
                          {clas.title}
                        </CardItem>

                        <CardItem
                          as="p"
                          translateZ="60"
                          className="text-blue-600 text-sm line-clamp-3"
                        >
                          {clas.description}
                        </CardItem>
                      </div>

                      {/* Bagian Harga dan Tombol */}
                      <div className="mt-4">
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
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HybriddAcademy;
