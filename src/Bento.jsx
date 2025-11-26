import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import chairImage from './assets/chair.jpg';
import lamp1 from './assets/lamp1.png';
import cupboard1 from './assets/cupboard1.png';
import table1 from './assets/table1.png';
import chairImage2 from './assets/chair2.png';
import drawer1 from './assets/drawer1.png';

"use client";

export function ThreeDCardDemo({img, title, subtitle, f = "flex-col"}) {
  return (
    <CardContainer className="inter-var w-full h-full">
      <CardBody
        className={`h-full w-full border-none bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black rounded-xl p-6 border flex ${f} items-center justify-center`}>
        <div className='flex flex-col items-center justify-center'>
        <CardItem
          translateZ="50"
          className="text-3xl font-bold font-instrument-serif text-neutral-600 dark:text-white text-center">
          {title}
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold font-instrument-serif text-neutral-600 dark:text-white text-center">
          {subtitle}
        </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full flex-1 flex items-center justify-center">
          <img
            src={img}
            className="max-h-full max-w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
const Bento = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-7 sm:grid-rows-5 lg:grid-rows-4 gap-4 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen text-black">
          <div className="bg-black relative group flex items-center justify-center flex-col col-span-1 row-span-2 rounded-xl border-2 border-white">
        <ThreeDCardDemo img={chairImage} title={"Chair"} subtitle={"Sitting with Elegance"} />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-xl bg-gray-200">
            <ThreeDCardDemo img={lamp1} title={"Lamp"} subtitle={"Sitting with Elegance"} f="flex-row" />
          </div>

          <div className="col-span-1 row-span-1 rounded-xl bg-gray-200 min-h-[100px]">
            <ThreeDCardDemo img={drawer1} title={"Chair"} />
          </div>
          <div className="bg-black relative group flex items-center justify-center flex-col col-span-1 row-span-2 rounded-xl border-white border-2 min-h-[200px]">
            <ThreeDCardDemo img={cupboard1} title={"Chair"} subtitle={"Sitting with Elegance"} />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-xl bg-gray-200 min-h-[100px]">
            <ThreeDCardDemo img={table1} title={"Chair"} subtitle={"Sitting with Elegance"} f="flex-row" />
          </div>
          <div className="col-span-1 row-span-1 rounded-xl bg-gray-200 min-h-[100px]">
            <ThreeDCardDemo img={chairImage2} title={"Chair"} />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 rounded-xl bg-gray-200 min-h-[100px]">
            <ThreeDCardDemo img={chairImage} title={"Chair"} subtitle={"Sitting with Elegance"} f="flex-row" />
          </div>
        </div>
    );
};

export default Bento;