import React, { useState } from 'react';
import ReactCompareImage from 'react-compare-image';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

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
                                className="w-20 h-20 object-cover cursor-pointer"
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
                                className="w-20 h-20 object-cover cursor-pointer"
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
                    <div className="bg-white  rounded relative flex flex-col items-center">
                        <div className='h-[400px] w-[400px]  rounded-lg shadow-lg '>
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
                        <button onClick={handlePreviousImage} className="absolute top-1/2 transform -translate-y-1/2 left-0  text-3xl text-[#003333] hover:text-[#006464] transition duration-500 z-[9]">< MdArrowBackIosNew/></button>
                            <button onClick={handleNextImage} className="absolute top-1/2 transform -translate-y-1/2 right-0  text-3xl text-[#003333] hover:text-[#006464] transition duration-500 z-[9]">< MdArrowForwardIos/></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
