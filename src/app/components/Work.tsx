import React from "react";
import assets from "../assets/assets";
import Image from "next/image";
const Work = () => {
  return (
    <div className="bg-BrightRed relative overflow-hidden py-20 sm:py-16">
      <Image
        src={assets.bgTabletPattern}
        alt="bgTabletPattern"
        className="absolute lg:-top-[20%] lg:left-[10%] lg:w-[40%] md:-top-[20%] md:left-[10%] md:w-[50%] opacity-5 hidden md:block"
      />
      <Image
        src={assets.bgTabletPattern}
        alt="bgTabletPattern"
        className="absolute lg:-top-[190%] lg:-right-[25%] lg:w-[40%] md:-top-[90%] md:-right-[25%] md:w-[40%] opacity-5 hidden md:block"
      />

      <Image
        src={assets.bgSimplifyMobile}
        alt="bgTabletPattern"
        className="absolute sm:hidden top-[10%]"
      />

      <div className="w-[100%] max-w-[85%] mx-auto sm:flex sm:items-center sm:justify-between  text-center sm:text-left">
        <div className="md:w-[40%] mb-6 sm:mb-0">
          <h1 className="text-5xl text-VeryLightGray">
            Simplify how your team works today.
          </h1>
        </div>
        <div className="sm:w-[50%] sm:flex sm:justify-end">
          <button className="px-8 sm:px-5 py-3 text-sm text-BrightRed  bg-VeryLightGray rounded-3xl ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
