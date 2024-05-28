import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

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

const ImageSlider = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [unselectedImages, setUnselectedImages] = useState(initialImages || []);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
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
        const imagesArray = selectedImages.includes(selectedImage) ? selectedImages : unselectedImages;
        const currentIndex = imagesArray.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % imagesArray.length;
        setSelectedImage(imagesArray[nextIndex]);
        setSelectedIndex(nextIndex);
    };

    const handlePreviousImage = () => {
        const imagesArray = selectedImages.includes(selectedImage) ? selectedImages : unselectedImages;
        const currentIndex = imagesArray.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
        setSelectedImage(imagesArray[prevIndex]);
        setSelectedIndex(prevIndex);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="p-4">
            <div className='mb-6'>
            <div className="flex justify-between items-center gap-2 pb-2 ">
                      <h1 className="font-semibold text-lg ">Downloadable</h1>
                      {/* --------------------------------------------------download--------------------------------------- */}
                      <div className="">
                        <div className="relative inline-block text-left">
                          <div className="flex justify-center items-center gap-2">
                         
                             
                          
                            <button
                              type="button"
                              onClick={toggleDropdown}

                              className="px-1.5 py-1    bg-gray-400 rounded-md text-white outline-none  shadow-lg  flex justify-center items-center gap-2 "

                              id="options-menu"
                              aria-expanded="true"
                              aria-haspopup="true"
                            >
                              {/* <span className="">Download</span> */}
                              {/* Dropdown arrow */}
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                              </svg>



                            </button>
                          </div>

                          {/* Dropdown panel */}
                          {isOpen && (
                            <div
                              className="origin-top-right absolute right-0 mt-1 z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
                              role="menu"

                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              {/* Dropdown items */}
                              <button
                                // onClick={() => zipFileDownload("jpg")}
                                className="block px-6 py-1 w-full text-[11px] text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                role="menuitem"
                              >
                                JPG
                              </button>
                              <button
                                // onClick={() => zipFileDownload("png")}
                                className="block px-6 py-1 text-[11px] w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                role="menuitem"
                              >
                                PNG
                              </button>
                              <button
                                // onClick={() => zipFileDownload("psd")}
                                className="block px-6 py-1 text-[11px] w-full text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                role="menuitem"
                              >
                                PSD
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                <div className="flex overflow-x-auto py-2 space-x-4">
                    {unselectedImages && unselectedImages.map((image, index) => (
                        <div key={index} className="relative flex-shrink-0">
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-20 h-20 object-cover cursor-pointer"
                                onClick={() => handleImageClick(image, index, false)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="">
                <h2 className="text-xl font-bold">Selected for rework</h2>
                <div className="flex overflow-x-auto py-4 space-x-4">
                    {selectedImages && selectedImages.map((image, index) => (
                        <div key={index} className="relative flex-shrink-0">
                            <img
                                src={image}
                                alt={`Selected Slide ${index}`}
                                className="w-20 h-20 object-cover cursor-pointer"
                                onClick={() => handleImageClick(image, index, true)}
                            />
                        </div>
                    ))}
                </div>
                {selectedImages.length > 0 && (
                    
                
                <div className='flex justify-center items-center'>
                    <button className='bg-yellow-500 text-white px-4 py-2 rounded-3xl'>Send for rework</button>
                </div>
                )}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={handleModalClick}
                >
                    <div className="bg-white rounded relative flex flex-col items-center">
                        <div className='h-[300px] w-[330px]  rounded-lg shadow-lg '>
                            <div className='h-full flex flex-col justify-center'>
                                <ReactCompareImage
                                    leftImage={selectedImage}
                                    rightImage={selectedImage}
                                />
                            </div>
                        </div>
                        <div className="flex space-x-4 py-2">
                            <button
                                className={`px-4 py-2 ${selectedImages.includes(selectedImage) ? 'bg-red-700' : 'bg-green-700'
                                    } text-white rounded`}
                                onClick={handleSelectClick}
                            >
                                {selectedImages.includes(selectedImage) ? 'Deselect' : 'Select for rework'}
                            </button>
                        </div>
                        <button onClick={handlePreviousImage} className="absolute top-1/2 transform -translate-y-1/2 left-0  text-3xl text-[#003333] hover:text-[#006464] transition duration-500 z-[9]"><MdArrowBackIos /></button>
                        <button onClick={handleNextImage} className="absolute top-1/2 transform -translate-y-1/2 right-0  text-3xl text-[#003333] hover:text-[#006464] transition duration-500 z-[9]"><MdArrowForwardIos /></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
