"use client";

import { motion } from "motion/react";
import  BackgroundVideo from "next-video/background-video";

const Hero = () => {
  return (
    <div>
      <section className="relative h-[80dvh] lg:h-screen w-full overflow-hidden bg-[#fafaf8]">
        {/* Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0 h-[80vh]"
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
          <div className="h-[80vh] max-sm:hidden">
           <BackgroundVideo src="https://res.cloudinary.com/dbc4muo4t/video/upload/v1773756541/0317_vm4qmj.mp4" className='h-[80dvh] max-lg:h-[80vh] ' autoPlay muted playsInline loop={false} height={620}/>
           </div>
          <div className="h-[80vh] lg:hidden md:hidden">
           <BackgroundVideo src="https://res.cloudinary.com/dbc4muo4t/video/upload/v1773762872/0317_iwrye6.mp4" className='h-[80dvh]'preload="auto" autoPlay muted playsInline loop={false} height={620}/>
           </div>
        </motion.div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center max-sm:pt-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:text-left w-full lg:pl-20"
          >
            <h1
              className="mb-6 text-green-400 tracking-wider lg:text-[#231f20] max-sm:font-bolder"
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 350,
                letterSpacing: "0.15em",
              }}
            >
              D-PETITE AURA <br /> COLLECTION
            </h1>
            <p
              className="mb-8 w-full text-left mx-auto tracking-wide text-[#231f20]"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                fontWeight: 400,
                letterSpacing: "0.1em",
              }}
            >
              Essence of Elegance
            </p>
            <button
              className="border border-white/40 bg-white/10 max-sm:text-black px-10 py-6 tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
              style={{ fontSize: "0.875rem", letterSpacing: "0.15em" }}
            >
              DISCOVER THE SCENT
            </button>
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
      </section>
    </div>
  );
};

export default Hero;
