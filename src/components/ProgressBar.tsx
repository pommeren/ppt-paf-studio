"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-1.5 px-6 py-4 bg-gradient-to-t from-[var(--color-dark)] to-transparent">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1 rounded-full flex-1 overflow-hidden"
          style={{ background: "rgba(108, 58, 237, 0.15)" }}
        >
          <motion.div
            className="h-full rounded-full"
            initial={false}
            animate={{
              width: i < current ? "100%" : i === current ? "100%" : "0%",
              background:
                i < current
                  ? "rgba(108, 58, 237, 0.5)"
                  : i === current
                  ? "linear-gradient(90deg, #6C3AED, #F59E0B)"
                  : "transparent",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      ))}
      <span className="ml-3 text-xs text-white/30 font-mono tabular-nums min-w-[3ch] text-right">
        {current + 1}/{total}
      </span>
    </div>
  );
}
