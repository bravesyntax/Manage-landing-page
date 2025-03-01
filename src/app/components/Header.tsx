import Image from "next/image";
import React from "react";
import assets from "../assets/assets";

const Header = () => {
  return (
    <div className="w-[100%] max-w-[85%] mx-auto mt-5">
      <div className="lg:grid lg:grid-cols-2 lg:items-center flex flex-col-reverse text-center sm:text-left">
        <div className="leftSide">
          <h1 className="text-3xl sm:text-6xl sm:max-w-[90%] font-medium mb-8 text-DarkBlue">
            Bring everyone together to build better products.
          </h1>
          <p className="md:max-w-[60%] mb-8 text-gray-400 sm:text-lg text-sm">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="px-8 sm:px-5 py-3 shadow-2xl text-sm shadow-BrightRed text-white bg-BrightRed rounded-3xl hover:opacity-80">
            Get Started
          </button>
        </div>
        <div className="rightSide flex items-center justify-center">
          <Image
            src={assets.illustrationIntro}
            alt="illustrationIntro"
            width={650}
            className="sm:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
