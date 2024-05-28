import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';

const initialImages = [
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
  'https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/04/07/07/14/cat-7905702_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/20/17/18/cat-3336579_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/02/17/04/54/animal-7017939_1280.jpg',
  'https://cdn.pixabay.com/photo/2020/04/27/09/21/cat-5098930_960_720.jpg'
];

const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [unselectedImages, setUnselectedImages] = useState(initialImages);

  const handleImageClick = (image, index, isSelected) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handleSelectClick = () => {
    if (selectedImages.includes(selectedImage)) {
      setSelectedImages(selectedImages.filter(img => img !== selectedImage));
      setUnselectedImages([...unselectedImages, selectedImage]);
    } else {
      setSelectedImages([...selectedImages, selectedImage]);
      setUnselectedImages(unselectedImages.filter(img => img !== selectedImage));
    }
    closeModal();
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImages.includes(selectedImage)) {
      const nextIndex = (selectedIndex + 1) % selectedImages.length;
      setSelectedImage(selectedImages[nextIndex]);
      setSelectedIndex(nextIndex);
    } else {
      const nextIndex = (selectedIndex + 1) % unselectedImages.length;
      setSelectedImage(unselectedImages[nextIndex]);
      setSelectedIndex(nextIndex);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImages.includes(selectedImage)) {
      const prevIndex = (selectedIndex - 1 + selectedImages.length) % selectedImages.length;
      setSelectedImage(selectedImages[prevIndex]);
      setSelectedIndex(prevIndex);
    } else {
      const prevIndex = (selectedIndex - 1 + unselectedImages.length) % unselectedImages.length;
      setSelectedImage(unselectedImages[prevIndex]);
      setSelectedIndex(prevIndex);
    }
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="p-4">
      <div className='mb-6'>
        <h2 className="text-xl font-bold">All Images</h2>
        <div className="flex overflow-x-scroll py-4 space-x-4">
          {unselectedImages.map((image, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-[52px] h-[52px] object-cover cursor-pointer"
                onClick={() => handleImageClick(image, index, false)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-bold">Selected Images</h2>
        <div className="flex overflow-x-auto py-4 space-x-4">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={image}
                alt={`Selected Slide ${index}`}
                className="w-16 h-16 object-cover cursor-pointer"
                onClick={() => handleImageClick(image, index, true)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleModalClick}
        >
          <div className="bg-white p-4 rounded relative flex flex-col items-center">
            <ReactCompareImage
              leftImage={selectedImage}
              rightImage={selectedImage}
              className="w-80 h-80 object-cover mb-4"
            />
            {/* <button
              className="absolute top-2 right-2 text-xl font-bold text-black"
              onClick={closeModal}
            >
              &times;
            </button> */}
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handlePreviousImage}
              >
                Previous
              </button>
              <button
                className={`px-4 py-2 ${
                  selectedImages.includes(selectedImage) ? 'bg-red-500' : 'bg-green-500'
                } text-white rounded`}
                onClick={handleSelectClick}
              >
                {selectedImages.includes(selectedImage) ? 'Unselect' : 'Select'}
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleNextImage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
