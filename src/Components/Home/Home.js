import React from "react";
import { FaPinterestP, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-black flex justify-center items-center">
      <button
        href="#"
        className=" h-12 w-12 text-center  rounded-md m-5 relative overflow-hidden facebook "
      >
        <FaFacebookF className=" h-5 w-5 inline "></FaFacebookF>
      </button>
      <button
        href="#"
        className=" h-12 w-12 text-center  rounded-md m-5 relative overflow-hidden pinterest "
      >
        <FaPinterestP className=" h-5 w-5 inline "></FaPinterestP>
      </button>
      <button
        href="#"
        className=" h-12 w-12 text-center  rounded-md m-5 relative overflow-hidden twitter "
      >
        <FaTwitter className=" h-5 w-5 inline "></FaTwitter>
      </button>
    </div>
  );
};

export default Home;
