"use client";

import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import logo from "../../public/logo.png";
import logo2 from "../../public/logo2.png";

export default function Navbar() {
  const [isStyled, setIsStyled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isStyled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isStyled]);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="w-full background py-6 px-4 lg:px-14 max-sm:px-4 fixed z-100 overflow-hidden">
        <div className="flex justify-between">
          <Link href="/" className="cursor-pointer">
            <div className="lg:mt-2 flex">
             <ul className="flex gap-8 max-sm:hidden text-white">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Delivery</li>
             </ul>
            </div>
          </Link>

          <div className="text-white max-sm:ml-0 max-sm:absolute lg:-ml-50">
            <Image src={logo} alt="logo" className="w-12 h-10 max-sm:hidden"/>
            <Image src={logo2} alt="logo" className="w-16 h-14 -mt-1 lg:hidden"/>
          </div>
          <div
            className="text-bold bg-black p-2 rounded-full text-xl gap-1 flex cursor-pointer"
            onClick={toggleStyle}
          >
            <IoIosMenu size={30} className="hidden max-sm:block text-white" />
            <h1 className="max-sm:hidden text-white">Menu</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          width: isStyled ? (isMobile ? "105%" : "30%") : "0",
          position: "fixed",
          opacity: isStyled ? "1" : "1",
          transition: "width 0.5s ease-in-out",
        }}
        className="absolute overflow-hidden bg-black bg-opacity-[0.5] right-0 h-screen z-120 rounded-tl-xl rounded-bl-xl bottom-0"
      >
        <div className="w-full px-8 md:px-4 pt-18 lg:pr-10">
          <div
            onClick={toggleStyle}
            className="flex gap-3 text-white text-xl font-bold cursor-pointer justify-end"
          >
            <button>Close</button>
            <LiaTimesSolid size={30} />
          </div>
          <div>
         
          </div>
        </div>
      </div>
      <div
        style={{
          position: isStyled ? "fixed" : "absolute",
          opacity: isStyled ? "1" : "0",
          height: isStyled ? "100vh" : "0",
          display: isStyled ? "block" : "none",
          background:
            "linear-gradient(111deg, rgba(0, 0, 0, .8) 1.21%, rgba(0, 0, 0, .32))",
        }}
        onClick={toggleStyle}
        className="hidden
          top-0 left-0 z-80 w-full bg-[#00000078]"
      ></div>
    </div>
  );
};


