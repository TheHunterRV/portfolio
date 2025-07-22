"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FlipSkewUp({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, skewY: 5, scale: 0.95 }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
              skewY: 0,
              scale: 1,
              transition: {
                duration: 0.9,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
