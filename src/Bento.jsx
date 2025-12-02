import React from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import chairImage from './assets/chair.jpg';
import lamp1 from './assets/lamp1.png';
import cupboard1 from './assets/cupboard1.png';
import table1 from './assets/table1.png';
import chairImage2 from './assets/chair2.png';
import drawer1 from './assets/drawer1.png';
import { img } from 'framer-motion/client';

"use client";
export function ThreeDCardDemo({
  image = chairImage,
  title = '',
  subtitle = '',
  orientation = 'square',
  f = 'flex-col',
}) {
  
  // 1. Determine Image Wrapper Classes based on layout
  // If flex-row (Horizontal): Image takes specific width (e.g., 1/3) and full height.
  // If flex-col (Vertical): Image takes remaining height (flex-1) and full width.
  let wrapperClass = "rounded-xl overflow-hidden flex items-center justify-center ";
  
  if (f.includes('row')) {
     // Horizontal Layout (Lamp)
     // w-1/3: Image container takes 33% width
     // h-full: Matches parent height
     wrapperClass += "w-auto h-full"; 
  } else {
     // Vertical Layout (Chair, Cupboard)
     // w-full: Full width
     // flex-1: Take REMAINING height after text
     // min-h-0: CRITICAL. Allows flex child to shrink below its content size
     wrapperClass += "w-full flex-1 min-h-0"; 
  }

  // 2. Image Class: Always cover or contain?
  // 'object-contain' is usually better for furniture so you don't chop off legs/tops,
  // but 'object-cover' looks cleaner if you want full fill.
  const imgClass = "w-full h-full object-contain "; // Change to object-contain if you want to see the whole item

  return (
    <CardContainer containerClassName="h-full w-full py-0 block" className="inter-var w-full h-full">
      <CardBody
        className={`h-full w-full bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black rounded-xl p-4 flex ${f} gap-4 items-center justify-center`}
      >
        {/* TEXT SECTION */}
        {(title || subtitle) && (
          // If row: w-2/3 (remaining space). If col: w-full.
          <div className={`${f.includes('row') ? 'w-2/3' : 'w-full'} flex flex-col justify-center items-center`}>
            {title && (
              <CardItem translateZ="50" className="text-3xl text-center font-bold font-instrument-serif text-neutral-600 dark:text-white">
                {title}
              </CardItem>
            )}
            {subtitle && (
              <CardItem translateZ="50" className="text-lg text-center font-medium font-instrument-serif text-neutral-600 dark:text-white mt-1">
                {subtitle}
              </CardItem>
            )}
          </div>
        )}

        {/* IMAGE SECTION */}
        <CardItem 
          translateZ="100" 
          className={wrapperClass} // Using our calculated wrapper class
        >
          <img src={image} className={imgClass} alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
const Bento = () => {
  return (
    <div className="grid-container mx-auto text-black w-[70vw] gap-4 sm:gap-6 lg:gap-8 my-12">
          <div className="bg-black rounded-xl"
          style={{gridArea: "box-1"}}>
        <ThreeDCardDemo image={chairImage} orientation="vertical" title={"Chair"} subtitle={"Where comfort meets timeless design."} />
          </div>
          <div className="rounded-xl bg-gray-200" style={{gridArea: "box-2"}}>
            <ThreeDCardDemo image={lamp1} title={"Lamp"} orientation={"horizontal"} subtitle={"Illuminate your space with a soft, warm glow."} f="flex-row" />
          </div>

          <div className="rounded-xl bg-gray-200" style={{gridArea: "box-3"}}>
            <ThreeDCardDemo image={drawer1} orientation="vertical" title={"Drawer"} subtitle={"Smart storage for modern living."} />
          </div>
          <div className="bg-black rounded-xl" style={{gridArea: "box-4"}}>
            <ThreeDCardDemo image={cupboard1} title={"Cupboard"} subtitle={"Store your treasures in style."} />
          </div>

          <div className="rounded-xl bg-gray-200" style={{gridArea: "box-5"}}>
            <ThreeDCardDemo image={table1} orientation="horizontal" title={"Table"} subtitle={"The centerpiece of your dining experience."} f="flex-row" />
          </div>
          <div className="rounded-xl bg-gray-200" style={{gridArea: "box-6"}}>
            <ThreeDCardDemo image={chairImage2} title={"Chair"} subtitle={"A perfect blend of form and function."} />
          </div>
          <div className="rounded-xl bg-gray-200" style={{gridArea: "box-7"}}>
            <ThreeDCardDemo image={chairImage} title={"Chair"} subtitle={"Experience comfort in every curve."} f="flex-row" />
          </div>
        </div>
    );
};

export default Bento;