"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  direction: number;
  slideKey: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.93,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "50%" : "-50%",
    opacity: 0,
    scale: 0.93,
    filter: "blur(8px)",
  }),
};

export default function SlideWrapper({ children, direction, slideKey }: SlideWrapperProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 200, damping: 28 },
          opacity: { duration: 0.4, ease: "easeOut" },
          scale: { duration: 0.4, ease: "easeOut" },
          filter: { duration: 0.35 },
        }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
