"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideWrapper from "@/components/SlideWrapper";
import ProgressBar from "@/components/ProgressBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import SlideCover from "@/components/slides/SlideCover";
import SlideVision from "@/components/slides/SlideVision";
import SlideEntryPoint from "@/components/slides/SlideEntryPoint";
import SlideAutomation from "@/components/slides/SlideAutomation";
import SlideScalability from "@/components/slides/SlideScalability";
import SlideAffiliation from "@/components/slides/SlideAffiliation";
import SlideWorkflow from "@/components/slides/SlideWorkflow";
import SlideRevenue from "@/components/slides/SlideRevenue";
import SlideNextSteps from "@/components/slides/SlideNextSteps";

const slides = [
  SlideCover,
  SlideVision,
  SlideEntryPoint,
  SlideAutomation,
  SlideScalability,
  SlideAffiliation,
  SlideWorkflow,
  SlideRevenue,
  SlideNextSteps,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (next: number) => {
      if (next < 0 || next >= slides.length) return;
      setDirection(next > currentSlide ? 1 : -1);
      setCurrentSlide(next);
    },
    [currentSlide]
  );

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx < 0) next();
        else prev();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  useEffect(() => {
    let lastWheel = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < 600) return;
      lastWheel = now;
      if (e.deltaY > 0) next();
      else if (e.deltaY < 0) prev();
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [next, prev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="w-screen h-screen overflow-hidden relative bg-[var(--color-dark)] slide-container">
      {/* Ambient background */}
      <ParticlesBackground />

      {/* Top-left branding */}
      <div className="fixed top-6 left-8 z-50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-[10px] font-black tracking-tight">
          PAF
        </div>
        <span className="text-[11px] text-white/20 font-medium tracking-widest uppercase font-display">
          Studio
        </span>
      </div>

      {/* Slide number - top right */}
      <div className="fixed top-6 right-8 z-50">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentSlide}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-[11px] text-white/15 font-mono tracking-widest"
          >
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>

      <SlideWrapper direction={direction} slideKey={currentSlide}>
        <CurrentSlideComponent />
      </SlideWrapper>

      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Navigation buttons */}
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={prev}
          className="fixed left-5 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full glass flex items-center justify-center transition-all text-white/30 hover:text-white/60 hover:bg-white/[0.06]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      )}
      {currentSlide < slides.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={next}
          className="fixed right-5 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full glass flex items-center justify-center transition-all text-white/30 hover:text-white/60 hover:bg-white/[0.06]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </main>
  );
}
