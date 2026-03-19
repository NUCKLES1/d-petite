import React from "react";
import Image from "next/image";
import pef from "../../public/15.png";

const NewArrival = () => {
  return (
    <div className="px-4 lg:px-20 bg-[#fafaf8] pt-10 lg:pt-30">
      <h1 className="text-2xl lg:text-4xl text-[#231f20]">New Available</h1>
      <div className="lg:flex grid grid-cols-2 gap-5 mt-14">
        <div className="w-45 lg:w-80 lg:h-120">
          <div className="rounded-sm bg-white">
            <Image src={pef} alt="" className="max-sm:h-50" />
          </div>
          <div className="pb-4 pt-2 text-[#231f20]">
            <h1 className="text-xl lg:text-2xl">Matcha 101</h1>
            <p>Pefume</p>
          </div>
          <h2 className="text-xl lg:text-2xl">$19.99</h2>
        </div>
        <div className="w-45 lg:w-80 lg:h-120">
          <div className="rounded-sm bg-white">
            <Image src={pef} alt="" className="max-sm:h-50" />
          </div>
          <div className="pb-4 pt-2 text-[#231f20]">
            <h1 className="text-xl lg:text-2xl">Matcha 101</h1>
            <p>Pefume</p>
          </div>
          <h2 className="text-xl lg:text-2xl">$19.99</h2>
        </div>
        <div className="w-45 lg:w-80 lg:h-120">
          <div className="rounded-sm bg-white">
            <Image src={pef} alt="" className="max-sm:h-50" />
          </div>
          <div className="pb-4 pt-2 text-[#231f20]">
            <h1 className="text-xl lg:text-2xl">Matcha 101</h1>
            <p>Pefume</p>
          </div>
          <h2 className="text-xl lg:text-2xl">$19.99</h2>
        </div>
        <div className="w-45 lg:w-80 h-100 lg:h-120">
          <div className="rounded-sm bg-white">
            <Image src={pef} alt="" className="max-sm:h-50" />
          </div>
          <div className="pb-4 pt-2 text-[#231f20]">
            <h1 className="text-xl lg:text-2xl">Matcha 101</h1>
            <p>Pefume</p>
          </div>
          <h2 className="text-xl lg:text-2xl">$19.99</h2>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
