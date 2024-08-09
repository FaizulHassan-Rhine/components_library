import React, { useState, useRef } from "react";
import video from "../VideoViewer/video/production.mp4";

const VideoWithClickableButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [buttonColors, setButtonColors] = useState({
    button1: "bg-blue-500",
    button2: "bg-green-500",
    button3: "bg-red-500",
  });
  const videoRef = useRef(null);

  const handlePlay = () => {
    setShowButtons(true);
  };

  const handlePause = () => {
    setShowButtons(false);
  };

  const handleButtonClick = (button) => {
    console.log(`Button ${button} clicked`);

    setButtonColors((prevColors) => ({
      ...prevColors,
      [button]: "bg-yellow-500", // Change color to yellow on click
    }));
  };

  return (
    <div className="flex container mx-auto justify-center relative">
      <video
        className="mt-20 mb-20"
        width="90%"
        height="450"
        controls
        ref={videoRef}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src={video} type="video/mp4" />
      </video>
      {showButtons && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
          <button
            onClick={() => handleButtonClick("button1")}
            className={`pointer-events-auto text-white px-4 py-2 m-2 ${buttonColors.button1}`}
          >
            Action 1
          </button>
          <button
            onClick={() => handleButtonClick("button2")}
            className={`pointer-events-auto text-white px-4 py-2 m-2 ${buttonColors.button2}`}
          >
            Action 2
          </button>
          <button
            onClick={() => handleButtonClick("button3")}
            className={`pointer-events-auto text-white px-4 py-2 m-2 ${buttonColors.button3}`}
          >
            Action 3
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoWithClickableButton;
