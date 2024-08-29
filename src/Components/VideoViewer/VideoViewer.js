import React from "react";
import video from "./video/ring.webm";

const VideoViewer = () => {
  return (
    <div className="flex container mx-auto justify-center bg-red-300">
      <video
        className="mt-20 mb-20"
        width="90%"
        height="450"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
};

export default VideoViewer;
