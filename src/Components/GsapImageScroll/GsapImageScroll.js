import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScroll() {
  useEffect(() => {
    // Smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // Subtle parallax effect only (5% movement)
    gsap.utils.toArray(".parallax-img").forEach((img) => {
      gsap.fromTo(
        img,
        { 
          y: "-15%",
          scale: 1.03 // Slight initial zoom
        },
        {
          y: "15%",
          scale: 0.98, // Slight zoom out
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&q=80",
    "https://images.unsplash.com/photo-1569596082827-c5e8990496cb?w=1000&q=80",
    "https://images.unsplash.com/photo-1587932775991-708a20af2cc2?w=1000&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1000&q=80",
    "https://images.unsplash.com/photo-1623166200209-6bd48520d6cb?w=1000&q=80",
    "https://images.unsplash.com/photo-1532587459811-f057563d1936?w=1000&q=80",
  ];

  const texts = [
    {
      title: "Left-Aligned Heading",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Right-Aligned Heading",
      body: "Suspendisse potenti. Integer euismod, urna sit amet hendrerit.",
    },
    {
      title: "Left-Aligned Heading",
      body: "Curabitur non lectus vitae nunc venenatis dictum.",
    },
    {
      title: "Right-Aligned Heading",
      body: "Fusce eget nisl id dolor pretium fermentum.",
    },
  ];

  return (
    <div className="m-0 p-0 overflow-x-hidden">
      {/* First full-screen image */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src={images[0]}
          alt="Full Screen 1"
          className="absolute top-0 left-0 w-full h-full object-cover parallax-img will-change-transform"
        />
      </section>

      {/* Alternating text+image panels */}
      {texts.map((txt, idx) => {
        const imgSrc = images[idx + 1];
        const isTextLeft = idx % 2 === 0;

        return (
          <section
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 items-center w-full min-h-screen"
          >
            {isTextLeft && (
              <div className="p-8 md:p-12 flex items-center justify-center bg-gray-50 h-full">
                <div className="max-w-md">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">{txt.title}</h2>
                  <p className="text-lg md:text-xl leading-relaxed">{txt.body}</p>
                </div>
              </div>
            )}

            <div className="relative overflow-hidden w-full h-screen">
              <img
                src={imgSrc}
                alt={`Section ${idx + 2}`}
                className="absolute inset-0 w-full h-full object-cover parallax-img will-change-transform"
              />
            </div>

            {!isTextLeft && (
              <div className="p-8 md:p-12 flex items-center justify-center bg-gray-50 h-full">
                <div className="max-w-md">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4">{txt.title}</h2>
                  <p className="text-lg md:text-xl leading-relaxed">{txt.body}</p>
                </div>
              </div>
            )}
          </section>
        );
      })}

      {/* Last full-screen image */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <img
          src={images[5]}
          alt="Full Screen 2"
          className="absolute top-0 left-0 w-full h-full object-cover parallax-img will-change-transform"
        />
      </section>
    </div>
  );
}