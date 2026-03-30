"use client";

import { motion } from "framer-motion";

export default function SlideCover() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative grid-bg">
      {/* Background orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          top: "10%",
          right: "15%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          bottom: "15%",
          left: "10%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Logo / Brand */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-3xl font-black glow-purple">
          PAF
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-6xl md:text-8xl font-black tracking-tight text-center"
      >
        <span className="gradient-text">PAF Studio</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xl md:text-2xl text-white/50 mt-6 font-light tracking-wide text-center max-w-2xl"
      >
        Notre vision, notre workflow, notre futur
      </motion.p>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mt-8"
      />

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-4 mt-8"
      >
        {["Sites IA", "Automatisation", "Scalabilité"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full text-sm border border-white/10 text-white/40 bg-white/[0.03]"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20 tracking-widest uppercase">
          Flèches ou swipe pour naviguer
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/20"
        >
          ↓
        </motion.div>
      </motion.div>
    </div>
  );
}
