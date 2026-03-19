"use client"

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative bg-[#fafaf8] px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="tracking-widest text-[#6b6b6b]"
                style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
              >
                ABOUT GUIAC
              </motion.div>
              <h2
                className="leading-tight text-[#1a1a1a]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400 }}
              >
                The Art of Fragrance
              </h2>
            </div>
            <p
              className="leading-relaxed text-[#6b6b6b]"
              style={{ fontSize: "1.125rem", lineHeight: "1.8" }}
            >
              GUIAC redefines the art of fragrance — blending natural
              sophistication with timeless allure. Each bottle captures the
              essence of modern elegance, crafted for those who seek beauty in
              simplicity and passion in every detail.
            </p>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752432067207-811a64eda434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzYwMzU5MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="GUIAC Perfume Bottle"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}