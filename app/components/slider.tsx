"use client"; // if using Next.js App Router

import { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const items = [
  {
    name: "Red Sneakers",
    price: "59.99",
    image: "/over.png",
  },
  {
    name: "Blue Denim Jacket",
    price: "89.99",
    image: "/body.png",
  },
  {
    name: "Leather Backpack",
    price: "120.00",
    image: "/image1.png",
  },
  {
    name: "Classic Wristwatch",
    price: "199.00",
    image: "/image2.png",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
      setFade(true);
    }, 300); // short fade-out before switching
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1,
      );
      setFade(true);
    }, 300);
  };

  const { name, price, image } = items[currentIndex];

  return (
    <div className="lg:px-26 px-4 w-full -mt-[24%] max-sm:-mt-70 z-30 relative">
      <div className="w-76 max-sm:w-full lg:right-20 lg:absolute">
        <div className="lg:w-full max-sm:h-20 w-50 max-sm:absolute max-sm:-mt-[25%] max-sm:pt-10 flex justify-between max-sm:bg-white rounded-tr-4xl">
          <div className="flex justify-between max-sm:bg-green-300 max-sm:pt-8  max-sm:h-16 max-sm:px-4 rounded-4xl w-44 lg:w-full max-sm:mx-auto max-sm:-mt-7">
            <div>
              <button
                onClick={prevSlide}
                className=" bg-white/60 -translate-y-1/2 duration-300 cursor-pointer hover:bg-white hover:text-black px-1 py-1 rounded-full"
              >
                <MdKeyboardArrowLeft />
              </button>
            </div>
            <div className="w-14 border-t-2 border-white/50 max-sm:hidden"></div>
            <div className="flex space-x-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>{" "}
            <div className="w-14 border-t-2 border-white/50 max-sm:hidden"></div>
            <div>
              <button
                onClick={nextSlide}
                className=" bg-white/60 -translate-y-1/2 duration-300 hover:bg-white cursor-pointer hover:text-black px-1 py-1 rounded-full"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div
          className="relative h-auto overflow-hidden
         w-full rounded-lg shadow-lg flex pt-0 max-w-2xl bg-white/90"
        >
          <div className="w-1/2 p-4">
            <div className="absolute z-10">
              <h2 className="text-2xl">{name}</h2>
              <p className="text-xl">₦{price}</p>
              <p className="text-green-800 text-sm underline pt-20">
                Discover Products
              </p>
            </div>
          </div>
          <img
            src={image}
            alt={name}
            className={`w-1/2 h-50 object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
