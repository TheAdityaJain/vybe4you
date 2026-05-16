"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Overlay from "./overlay";

const FRAME_COUNT = 151; // 0 to 150

export default function ScrollyCanvas({ scrollToSection }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load all images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format: frame_000_delay-0.066s.png
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = () => {
      const index = Math.round(frameIndex.get());
      const img = images[index];
      
      if (img) {
        // Handle object-fit cover
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
        }

        // The user wants to zoom out MORE than standard full-screen cover.
        // Because the image has a solid background color that matches our page background,
        // we can safely shrink the image (creating invisible letterboxing).
        const zoomOutScale = 0.85;
        drawWidth *= zoomOutScale;
        drawHeight *= zoomOutScale;
        
        // Anchor the image perfectly to the right edge to remove the blank space on the right!
        // This shifts all empty canvas space to the left, which is perfectly hidden by the frosted glass!
        drawX = canvas.width - drawWidth;
        drawY = (canvas.height - drawHeight) * 0.5;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoaded, images, frameIndex]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="hero" ref={containerRef} className="relative w-full h-[500vh] bg-background">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}
