"use client";

import { useState, useCallback, useEffect } from "react";
import SlideWrapper from "@/components/SlideWrapper";
import ProgressBar from "@/components/ProgressBar";
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

  // Keyboard navigation
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

  // Touch / swipe navigation
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

  // Mouse wheel
  useEffect(() => {
    let lastWheel = 0;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < 600) return; // debounce
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
      <SlideWrapper direction={direction} slideKey={currentSlide}>
        <CurrentSlideComponent />
      </SlideWrapper>

      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Side navigation buttons */}
      {currentSlide > 0 && (
        <button
          onClick={prev}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center transition-colors text-white/40 hover:text-white/70"
          aria-label="Previous slide"
        >
          ←
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={next}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center transition-colors text-white/40 hover:text-white/70"
          aria-label="Next slide"
        >
          →
        </button>
      )}
    </main>
  );
}
