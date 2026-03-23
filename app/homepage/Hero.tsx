"use client";

import { motion } from "motion/react";
import Image from "next/image";
import back from "../../public/back.png";
import over from "../../public/over.png";
import { IoArrowUp } from "react-icons/io5";
import ImageSlider from "../components/slider";

const Hero = () => {
  return (
    <div>
      <section className="relative h-[964px]  w-full lg:overflow-hidden bg-[#fafaf8] rounded-bl-2xl rounded-br-2xl">
        <div className="pt-30 px-4 text-3xl">
          <h1>The Ultimate Solution for Weight, Hair, and Skin</h1>
          <div className="flex gap-3 mt-8">
            <button
              className="border border-white/40 bg-black rounded-full max-sm:text-white px-10 py-4 tracking-widest cursor-pointer text-white duration-300 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
              style={{ fontSize: "0.875rem", letterSpacing: "0.15em" }}
            >
              Explore Product
            </button>
            <button className="px-4 py-2 hover:border-white/40 bg-green-200 rounded-full backdrop-blur-sm duration-300 hover:bg-transparent hover:text-white">
              <IoArrowUp className="rotate-40 text-2xl" />
            </button>
          </div>
        </div>
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute overflow-hidden inset-0 lg:h-[964px] h-[50vh] max-sm:px-4 max-sm:mt-75 rounded-xl"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundVideo: `https://res.cloudinary.com/dbc4muo4t/video/upload/v1773754984/Untitled_Made_with_FlexClip_1_zpwxoj.mp4`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />*/}

          <div className="h-full rounded-xl lg:hidden md:hidden">
            <Image
              src={back}
              alt=""
              className="object-cover h-full rounded-xl overflow-hidden w-full"
            />
          </div>
          <Image
            src={back}
            alt=""
            className="object-cover max-sm:hidden h-[964px]  w-full"
          />

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-20"
          >
            <Image
              src={over}
              alt=""
              className="object-contain w-200 mx-auto lg:-mt-[60%] -mt-[105%]"
            />
          </motion.div>
        </motion.div>

        {/* Content Overlay */}
        <div className=" z-10 relative flex h-full flex-col justify-center -mt-50 px-6 max-sm:-mt-45">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className=" w-full lg:px-10 relative z-10"
          >
            <h1
              className="mb-6 lg:text-center tracking-tight lg:font-medium text-white relative z-10"
              style={{
                letterSpacing: "0.01em",
                textAlign: "center",
                width: "100%", // take full width
                fontSize: "13vw", // responsive font size based on viewport width
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              SKIN ESSENCE
            </h1>
            <p
              className="mb-8 max-sm:pl-2 mt-20 w-60 text-left tracking-wide text-white"
              style={{
                fontSize: "clamp(0.9rem, 1vw, 1rem)",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
            >
              Elevated skincare inspired by nature and perfected modern
              formulation for everyday confidence.
            </p>
            <div className="flex gap-3 max-sm:hidden">
              <button
                className="border border-white/40 bg-white/10 rounded-full max-sm:text-white px-10 py-4 tracking-widest cursor-pointer text-white duration-300 backdrop-blur-sm transition-all hover:bg-white hover:text-black"
                style={{ fontSize: "0.875rem", letterSpacing: "0.15em" }}
              >
                Explore Product
              </button>
              <button className="px-4 py-2 hover:border-white/40 bg-white rounded-full backdrop-blur-sm duration-300 hover:bg-transparent hover:text-white">
                <IoArrowUp className="rotate-40 text-2xl" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-12 w-6 rounded-full border-2 border-white/40"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/60"
            />
          </motion.div>
        </motion.div>
        <ImageSlider />
      </section>
    </div>
  );
};

export default Hero;
