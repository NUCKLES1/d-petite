import React from "react";
import Hero from "./Hero";
import { AboutSection } from "./About";
import { PhilosophySection } from "./Phisology";
import { Footer } from "../components/Footer";
import ProductGrid from "./ProductGrid";
import Navbar from "../components/Navbar";
import NewArrival from "./NewArrival";
import OurPopular from "./OurPopular";

const Homepage = async () => {
  return (
    <div className="h-auto overflow-hidden">
      <Navbar />
      <Hero />
      <NewArrival />
      <OurPopular />
      <ProductGrid />
      <AboutSection />
      <PhilosophySection />
      <Footer />
    </div>
  );
};

export default Homepage;
