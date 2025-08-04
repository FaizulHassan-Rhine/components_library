import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollCircleAnimation() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger updates with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP animation
    const circle = circleRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(circle, {
      scale: 20,
      ease: "power1.inOut",
    }).to(
      text,
      {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
      },
      0
    );
  }, []);

  return (
    <div>
      <div ref={containerRef} className="w-full h-screen relative">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden">
          <div
            ref={circleRef}
            className="bg-green-600 w-48 h-48 rounded-full flex items-center justify-center origin-center"
          >
            <h1
              ref={textRef}
              className="text-white text-2xl font-bold origin-center"
            >
              let&apos;s work
            </h1>
          </div>
        </div>
      </div>

      {/* Dummy section to continue scroll */}
      <div className="h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Dummy Section After Scroll</h2>
      </div>
    </div>
  );
}
