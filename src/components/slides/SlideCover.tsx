"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SlideCover() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Large ambient orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)",
          top: "-10%",
          right: "-5%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)",
          bottom: "-5%",
          left: "-5%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Center glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          top: "35%",
          left: "35%",
        }}
        animate={{ scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] flex items-center justify-center text-3xl font-black glow-purple font-display tracking-tight">
            PAF
          </div>
          {/* Subtle ring */}
          <motion.div
            className="absolute -inset-3 rounded-[2rem] border border-white/[0.06]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        className="text-7xl md:text-9xl font-black tracking-tighter text-center font-display"
      >
        <span className="gradient-text">PAF Studio</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="text-lg md:text-xl text-white/35 mt-5 font-light tracking-[0.2em] text-center uppercase"
      >
        Vision &middot; Workflow &middot; Futur
      </motion.p>

      {/* Animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        className="w-40 h-px mt-8"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(245,158,11,0.5), transparent)" }}
      />

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex gap-3 mt-8"
      >
        {["Sites IA", "Automatisation", "Scalabilite"].map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="px-5 py-2 rounded-full text-[13px] font-medium glass text-white/40 hover:text-white/60 transition-colors cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/15 tracking-[0.3em] uppercase font-medium">
          Naviguer
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/15" />
        </motion.div>
      </motion.div>
    </div>
  );
}
