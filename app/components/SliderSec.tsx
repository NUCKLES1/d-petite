"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const slides = [
  { id: 1, title: "Dark Circles", image: "/cream.png" },
  { id: 2, title: "Acne Care", image: "/cream2.png" },
  { id: 3, title: "Glow Boost", image: "/cream4.png" },
];

export default function PremiumSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (i: number) => (i + slides.length) % slides.length;

  return (
    <div className="relative lg:hidden md:hidden mt-20 h-120 pt-30 w-full max-w-xl mx-auto overflow-hidden py-10 ">
      {/* Heading */}
      <p className="text-gray-400 text-sm text-center">
        Glowskin is your partner
      </p>
      <h2 className="text-xl font-semibold text-center mb-6">
        in glow, strength, and confidence
      </h2>

      <div className="relative flex items-center justify-center">
        {slides.map((slide, i) => {
          const position = getIndex(i - index);

          let style = "";
          let scale = 1;
          let blur = "0px";
          let zIndex = 0;
          let x = 0;

          if (position === 0) {
            // Active
            scale = 1;
            blur = "0px";
            zIndex = 3;
            x = 0;
          } else if (position === 1) {
            // Next (right)
            scale = 0.85;
            blur = "3px";
            zIndex = 2;
            x = 180;
          } else if (position === slides.length - 1) {
            // Prev (left)
            scale = 0.85;
            blur = "3px";
            zIndex = 2;
            x = -180;
          } else {
            scale = 0.7;
            blur = "6px";
            zIndex = 1;
            x = 0;
          }

          return (
            <motion.div
              key={slide.id}
              className="absolute w-[80%]"
              animate={{
                x,
                scale,
                filter: `blur(${blur})`,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
              style={{ zIndex }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                {/* Image */}
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[350px] object-cover"
                  />

                  {/* Gradient overlay (depth effect) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 bg-[#EAD6C4] text-white px-4 py-1 rounded-full text-sm">
                  {slide.title}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="absolute w-full inset-0 flex items-center mx-auto px-4 mt-86 pointer-events-none">
        {/* Prev Button */}
        <div className="mx-auto gap-5 flex">
        <button
          onClick={() =>
            setIndex((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="pointer-events-auto backdrop-blur-md bg-purple-100 text-black hover:bg-white/50 transition-all duration-300 rounded-full p-3 shadow-lg"
        >
          <MdKeyboardArrowLeft size={20}/>
        </button>

        {/* Next Button */}
        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="pointer-events-auto backdrop-blur-md bg-purple-100 hover:bg-white/50 transition-all text-black duration-300 rounded-full p-3 shadow-lg"
        >
         <MdKeyboardArrowRight size={20}/>
        </button>
        </div>
      </div>
    </div>
  );
}
