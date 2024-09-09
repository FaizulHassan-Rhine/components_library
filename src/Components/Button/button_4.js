import React, { useState } from 'react';
import './button_4.css';
const BubblyButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const animateButton = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    // Reset the animation after 700ms
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <button
      className={`bubbly-button ${isAnimating ? 'animate' : ''} text-white bg-pink-500 py-3 px-8 rounded-lg shadow-lg hover:bg-pink-600 transition-all`}
      onClick={animateButton}
    >
      Click me!
    </button>
  );
};

export default BubblyButton;
