"use client";

import { useEffect, useRef } from "react";
import { assets } from "@/lib/assets";

export function PlateAnimationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    void video.play().catch(() => {
      // Autoplay blocked until user interaction — controls allow manual play
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
      preload="auto"
      aria-label="APEX modular plate system animation"
    >
      <source src={assets.plateAnimation} type="video/mp4" />
      <source src={assets.plateAnimationMov} type="video/quicktime" />
    </video>
  );
}
