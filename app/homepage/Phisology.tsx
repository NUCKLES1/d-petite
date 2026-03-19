"use client"

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative bg-[#1a1a1a] px-6 py-40 md:py-52">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
        >
          <div
            className="mb-8 tracking-widest text-[#d4c9bb]"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}
          >
            OUR PHILOSOPHY
          </div>
          <blockquote
            className="italic leading-relaxed text-[#fafaf8]"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: "1.6",
            }}
          >
            "Every drop tells a story of passion and purity."
          </blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12"
          >
            <p
              className="leading-relaxed text-[#d4c9bb]/80"
              style={{ fontSize: "1.125rem", lineHeight: "1.8" }}
            >
              We believe fragrance is more than a scent — it's an expression
              of identity, an intimate connection between soul and senses.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="mx-auto mt-16 h-px w-32 bg-[#d4c9bb]/40"
      />
    </section>
  );
}
