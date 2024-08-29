import React, { useState } from "react";
import "./styles.css"; // Ensure you have this file
import img1 from "./images/444.jpg";
import img2 from "./images/666.jpg";
import img3 from "./images/999.jpg";

const FlyingAnimation = () => {
  const [leftImages, setLeftImages] = useState([img1, img2, img3]);
  const [rightImages, setRightImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(leftImages[0]); // Set to first image in leftImages
  const [animationClass, setAnimationClass] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleToggleClick = () => {
    if (leftImages.includes(selectedImage)) {
      // Set animation class for moving to right
      setAnimationClass("image-animate-right");
      // After animation ends, move image to the right
      setTimeout(() => {
        setLeftImages(leftImages.filter((img) => img !== selectedImage));
        setRightImages([...rightImages, selectedImage]);
        setAnimationClass("");
        setSelectedImage(leftImages[0]); // Automatically select the first image of the updated leftImages
      }, 800); // Duration should match the CSS animation duration
    } else {
      // Set animation class for moving to left
      setAnimationClass("image-animate-left");
      // After animation ends, move image to the left
      setTimeout(() => {
        setRightImages(rightImages.filter((img) => img !== selectedImage));
        setLeftImages([...leftImages, selectedImage]);
        setAnimationClass("");
        setSelectedImage(rightImages[0]); // Automatically select the first image of the updated rightImages
      }, 800); // Duration should match the CSS animation duration
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center mt-10 gap-10">
          {/* Left section */}
          <div className="section">
            <div className="image-container">
              {leftImages.map((image, index) => (
                <div key={index}>
                  <img
                    className={`image ${
                      selectedImage === image ? animationClass : ""
                    }`}
                    src={image}
                    alt={`img${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center section */}
          <div className="center-section">
            {selectedImage && (
              <>
                <img
                  className="selected-image"
                  src={selectedImage}
                  alt="Selected"
                />
                <button
                  className="toggle-button"
                  onClick={handleToggleClick}
                >
                  {leftImages.includes(selectedImage) ? "Select" : "Unselect"}
                </button>
              </>
            )}
          </div>

          {/* Right section */}
          <div className="section">
            <div className="image-container">
              {rightImages.map((image, index) => (
                <div key={index}>
                  <img
                    className={`image ${
                      selectedImage === image ? animationClass : ""
                    }`}
                    src={image}
                    alt={`img${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlyingAnimation;
