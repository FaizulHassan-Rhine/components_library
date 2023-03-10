import React from "react";
import video from "./video/production.mp4";

const VideoViewer = () => {
  return (
    <div className="flex container mx-auto justify-center">
      <video className="mt-20 mb-20" width="90%" height="450" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoViewer;
