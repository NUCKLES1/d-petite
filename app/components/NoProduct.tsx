import React from "react";
import { motion } from "framer-motion";

const NoProducts = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div
      className={
        "flex flex-col items-center justify-center py-10 h-60 space-y-4 text-center rounded-lg ml-[10%] w-[80%] mt-10"
      }
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[1.5rem] font-bold">No Product Available</p>
      </motion.div>
      <motion.p
        className="text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We&apos;re sorry, but there are no product matching on {""}
        <span className="text-base text-black font-semibold">
          {selectedTab}
        </span>
        criteria at the moment.
      </motion.p>
      <motion.div
        className="text-black"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-full h-10">
        <div className="loader mx-auto w-10 h-6 my-auto">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      </motion.div>
      <motion.p
        className="text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        please check back later or explore our other product categories.
      </motion.p>
    </div>
  );
};

export default NoProducts;
