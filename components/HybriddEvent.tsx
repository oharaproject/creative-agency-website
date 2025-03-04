"use client";
import { LayoutGrid } from "./ui/LayoutGrid";
import Image from "next/image";

const HybriddEvent = () => {
  return (
    <>
      <div className="px-2 sm:px-4 py-8">
        <div className=" flex justify-between mb-6">
          <div className="font-semibold text-4xl">
            <h1 className="text-black-100 font-bold items-center w-[600px] h-auto">
              Here&apos;s Some Of Our Projects, created for our beloved clients.
            </h1>
          </div>

          <div className="flex items-center">
            <Image src="/heo.png" alt="heo-logo" width={100} height={200} />
          </div>
        </div>

        <div className="h-screen  w-full">
          <LayoutGrid cards={eventDocumentations} />
        </div>
      </div>
    </>
  );
};

export default HybriddEvent;

const Skeleton = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};

const eventDocumentations = [
  {
    id: 1,
    content: (
      <Skeleton
        title="Grand Opening Festival 2024"
        description="Pembukaan festival tahunan dengan pertunjukan spektakuler, bazaar kuliner, dan panggung hiburan utama"
      />
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: (
      <Skeleton
        title="Annual Charity Gala Dinner"
        description="Acara penggalangan dana untuk pendidikan anak kurang mampu dengan malam hiburan dan lelang amal."
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: (
      <Skeleton
        title="Corporate Leadership Summit"
        description="Konferensi leadership untuk 500+ eksekutif dengan pembicara internasional, workshop pengembangan diri, dan sesi networking eksklusif."
      />
    ),
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: (
      <Skeleton
        title="Community Music Festival"
        description="Festival musik lokal dengan 20+ band indie, area food truck kreatif, dan instalasi seni interaktif untuk komunitas pecinta musik."
      />
    ),
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
