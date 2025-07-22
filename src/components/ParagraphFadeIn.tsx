"use client";
import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement } from "react";

interface Props {
  children: ReactNode;
}

export default function AboutMeAnimation({ children }: Props) {
  const childArray = Children.toArray(children);

  return (
    <div className="space-y-6">
      {childArray.map((child, index) =>
        isValidElement(child) ? (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {child}
          </motion.div>
        ) : (
          <>{child}</>
        )
      )}
    </div>
  );
}
