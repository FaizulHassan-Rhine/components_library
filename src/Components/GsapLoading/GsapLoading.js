import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const spinnerRef = useRef(null);

  useEffect(() => {
    // Spin the loader
    gsap.to(spinnerRef.current, {
      rotation: 360,
      repeat: -1,
      ease: 'linear',
      duration: 1,
    });

    // Simulate loading complete after 3 seconds
    setTimeout(() => {
      openDoors();
    }, 1000);
  }, []);

  const openDoors = () => {
    // Stop spinner
    gsap.killTweensOf(spinnerRef.current);

    // Animate door opening effect
    gsap.to(leftDoorRef.current, {
      x: '-100%',
      duration: 1,
      ease: 'power2.inOut',
    });
    gsap.to(rightDoorRef.current, {
      x: '100%',
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setLoading(false);
      },
    });
  };

  if (!loading) {
    return (
      <div className="main-content flex items-center justify-center h-screen bg-white text-black text-3xl">
        🚀 Welcome to the App!
      </div>
    );
  }

  return (
    <div className="loading-container fixed inset-0 z-50 overflow-hidden">
      {/* Doors */}
      <div
        ref={leftDoorRef}
        className="absolute inset-y-0 left-0 w-1/2 bg-black"
      />
      <div
        ref={rightDoorRef}
        className="absolute inset-y-0 right-0 w-1/2 bg-black"
      />

      {/* Spinner */}
      <div className="flex items-center justify-center h-full z-10 relative">
        <div
          ref={spinnerRef}
          className="w-40 h-40 border-4 border-white border-t-transparent rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
