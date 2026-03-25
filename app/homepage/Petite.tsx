import React from "react";
import GlowSlider from "../components/SliderSec";
import CardSlider from "../components/CardSlider";

const Petite = () => {
  return (
    <div className="mt-30">
      <div className="bg-[#f5e9aa3e] pb-30 mt-20">
        <div className="pt-20 px-4 lg:px-20">
          <h1 className="lg:text-5xl text-3xl text-[#292727e0] w-1/2">
            <span className="text-[#29272786]">D-PETITE AURA is your partner</span> in glow, strength and confidence
          </h1>
        </div>
        <GlowSlider />
        <CardSlider />
      </div>
    </div>
  );
};

export default Petite;


//[#f5e9aac2]