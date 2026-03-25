"use client";

import { useRef, useEffect } from "react";

const slides = [
  { title: "Hair Growth", image: "/cream2.png" },
  { title: "Neck Firming", image: "/cream.png" },
  { title: "Pigmentation", image: "/cream3.png" },
  { title: "Attraction", image: "/cream4.png" },
  { title: "Dark Circles", image: "/cream.png" },
  { title: "Hair Growth", image: "/cream2.png" },
  { title: "Neck Firming", image: "/cream.png" },
  { title: "Pigmentation", image: "/cream3.png" },
  { title: "Attraction", image: "/cream4.png" },
  { title: "Dark Circles", image: "/cream.png" },
];

export default function CardSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("div"); // first card
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16; // matches Tailwind gap-4 (16px)

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const interval = setInterval(() => {
    const card = container.querySelector("div");
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // width + gap

    // If near the end → reset to start
    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - cardWidth
    ) {
      container.scrollTo({
        left: 0,
        behavior: "auto", // instant reset (no animation)
      });
    } else {
      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="relative max-w-6xl mx-auto p-6 bg-[#f8f8f8] rounded-3xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-400 text-sm">
            Glowskin is your partner
          </p>
          <h2 className="text-2xl font-semibold">
            in glow, strength, and confidence
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("prev")}
            className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
          >
            ←
          </button>

          <button
            onClick={() => scroll("next")}
            className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-80 h-90 bg-white rounded-2xl overflow-hidden shadow-sm flex-shrink-0 snap-start"
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}