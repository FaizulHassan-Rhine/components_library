import React, { useState } from "react";
import "./style.css";
import p1 from "./images/1.png";
import p2 from "./images/2.png";
import p3 from "./images/3.png";
import p4 from "./images/4.png";
import p5 from "./images/5.png";
import p6 from "./images/6.png";
import p7 from "./images/7.png";
import p8 from "./images/8.png";

const ImageViewer = () => {
  const ViewImage = [
    {
      img: p1,
      title: "3D Model Bowler Bag",
      cat: "Fashion Accessories",
      details:
        "Offering precision 3D design services for fashion accessory businesses, creating lifelike models that showcase each product's intricate details and enhance their visual appeal. ",
    },
    {
      img: p2,
      title: "3D Model Tub Chair",
      cat: "Furniture & Movables",
      details:
        "Delivering customized 3D modeling solutions that enable us to create and visualize furniture designs with unmatched precision and realism.",
    },
    {
      img: p3,
      title: "3D Model Drill",
      cat: "Hardware & Tools ",
      details:
        "Offering realistic 3D models that allow clients to visualize and refine product concepts, showcase designs, and support marketing efforts, by providing customized solutions that cater to each client's unique needs. ",
    },
    {
      img: p4,
      title: "3D Model DSLR Camera",
      cat: "Tech Equipements",
      details:
        "Our 3D modeling services provide realistic visualizations of your camera design, with customized solutions tailored to your needs. We pay attention to every product specification and detail, allowing you to refine product concepts, showcase designs, and support marketing efforts. Providing the tools that are necessary to create outstanding 3D visualizations.",
    },
    {
      img: p5,
      title: "3D Model Lipstick",
      cat: " Cosmetics ",
      details:
        "Bring your cosmetic products to life with realistic visualizations that allow you to showcase and refine product concepts, support marketing efforts, and make informed decisions before manufacturing. With attention to detail, we create 3D models that capture the essence of your cosmetics, from the texture of the product to the intricate details of the packaging.",
    },
    {
      img: p6,
      title: "3D Model VR Headset",
      cat: "Tech Accessories",
      details:
        "Providing customized solutions to create realistic visualizations of your virtual reality gear, refining product concepts, and supporting marketing efforts. Trust us to deliver outstanding 3D models tailored to your needs.",
    },
    {
      img: p7,
      title: "3D Model Cleaning Bottles",
      cat: "Household Products ",
      details:
        "Our 3D modeling services create realistic visualizations of your household cleaning products, refining product concepts and supporting marketing efforts. With attention to detail, we capture the essence of your products, from the shape of the bottle to the texture of the cleaner. Our customized solutions help your cleaning products stand out in a competitive market. Trust us to provide outstanding 3D models that showcase your cleaning products.",
    },
    {
      img: p8,
      title: "3D Model Water Bottles",
      cat: "Containers",
      details:
        "Our 3D modeling services create detailed and realistic visualizations of your container designs, supporting your product development and marketing efforts. With customized solutions, we ensure your containers stand out in a competitive market. Trust us to deliver outstanding 3D models that showcase your container designs.",
    },
  ];

  const [getImage, setImage] = useState();
  const [getClose, setClose] = useState("hidden");
  const [getDetails, setDetails] = useState();

  const HandleImage = (img, details) => {
    setImage(img);
    setClose("block");
    setDetails(details);
  };

  const HandleClose = () => {
    setClose("hidden");
  };

  return (
    <div className="pt-10 container mx-auto pb-9">
      <h2 className="text-3xl text-center font-bold text-lime-500">
        Photo View Component
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-16 cursor-pointer  justify-items-center">
        {ViewImage.map((data) => (
          <div onClick={() => HandleImage(data.img, data.details)}>
            <div className="img-container  hover:scale-110 transition duration-300 ease-in-out">
              <img className="img-bag" src={data.img} alt="" />
              <div className="view-content ">
                <p className="text-white   mb-2">{data.cat}</p>
              </div>
              <div className="blank "></div>
            </div>
          </div>
        ))}
      </div>
      <div
        id="imgPopupWrap"
        className={"fixed top-0 z-10 left-0 w-full h-full  " + getClose}
      >
        <div onClick={HandleClose} className="bgshadow"></div>
        <div className="product-container flex gap-8">
          <img className="w-[700px]" src={getImage} />
          <p className="text-white w-full self-center text-justify  mb-2">
            {getDetails}
          </p>
        </div>
        <span onClick={HandleClose} className="closeBtn cursor-pointer">
          X
        </span>
      </div>
    </div>
  );
};

export default ImageViewer;
