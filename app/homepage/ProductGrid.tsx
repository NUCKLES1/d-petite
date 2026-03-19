"use client"

import React, { useState } from "react";
import HomeTabber from "./HomeTabber";
import OurPopular from "./OurPopular";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const [selectedBar, setSelectedBar] = useState("");
  return (
    <div className="mt-10 flex flex-col items-center">
      <HomeTabber selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;
