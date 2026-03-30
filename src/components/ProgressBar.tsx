"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-8 py-5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-[#050208]/80 to-transparent pointer-events-none" />

      <div className="relative flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full flex-1 overflow-hidden relative"
            style={{ background: "rgba(124, 58, 237, 0.08)" }}
          >
            <motion.div
              className="h-full rounded-full relative"
              initial={false}
              animate={{
                width: i <= current ? "100%" : "0%",
              }}
              style={{
                background:
                  i < current
                    ? "rgba(167, 139, 250, 0.35)"
                    : i === current
                    ? "linear-gradient(90deg, #7C3AED, #A78BFA, #F59E0B)"
                    : "transparent",
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        ))}

        <div className="ml-4 flex items-center gap-1.5">
          <span className="text-[11px] text-white/25 font-mono tabular-nums tracking-wider">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-white/10">/</span>
          <span className="text-[11px] text-white/15 font-mono tabular-nums tracking-wider">
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
