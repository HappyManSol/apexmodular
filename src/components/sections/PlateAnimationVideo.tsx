"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/lib/assets";

export function PlateAnimationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.load();
    void video.play().catch(() => {
      // Autoplay blocked until user interaction
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/images/figma/select-mass.png"
      aria-label="APEX modular plate system animation"
    >
      <source src={assets.plateAnimation} type="video/mp4" />
    </video>
  );
}
