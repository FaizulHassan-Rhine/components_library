import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./Components/Button/Button_2";
import Home from "./Components/Home/Home";
import ImageViewer from "./Components/ImageViewer/ImageViewer";
import VideoViewer from "./Components/VideoViewer/VideoViewer";
import ProductColorChange from "./Components/ProductColorChange/ServiceExplore";
import ProcessBar from "./Components/ProcessBar/ProcessBar";
import CostBreakDown from "./Components/CostBreakDown/CostBreakDown";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PriceCard from "./Components/PriceCard/PriceCard";
import Modal from "./Components/Modal/Modal";
import Question from "./Components/Question/Question";
import TestAnimation from "./Components/TestAnimation/TestAnimation";
import MegaNavbar from "./Components/MegaNavbar/MegaNavbar";
import ColorChange from "./Components/ColorChange/ColorChange";
import ContactUsLanding from "./Components/ContactUsLanding/ContactUsLanding";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import ScrollAnimation from "./Components/ScrollAnimation/ScrollAnimation";
import VideoWithClickableButton from "./Components/VideoWithClickableButton/VideoWithClickableButton";
import FlyingAnimation from "./Components/FlyingAnimation/FlyingAnimation";
import BubblyButton from "./Components/Button/button_4";
import FacebookEmbed from "./Components/FacebookPageEmbedded/FacebookPageEmbedded";






function App() {





  return (
    <div>

   


      {/* <Home></Home> */}
      {/* <ImageViewer></ImageViewer> */}
      {/* <VideoViewer></VideoViewer> */}
      {/* <FlyingAnimation/> */}
      {/* <BubblyButton/> */}
    <FacebookEmbed/>
      {/* <VideoWithClickableButton/> */}
      {/* <ProductColorChange></ProductColorChange> */}
      {/* <Button></Button> */}
      {/* <ProcessBar></ProcessBar> */}
      {/* <CostBreakDown></CostBreakDown> */}
      {/* <MegaNavbar/> */}
      {/* <Footer></Footer> */}
      {/* <TestAnimation></TestAnimation> */}
      {/* <ColorChange/> */}
      {/* <ContactUsLanding/> */}
      
      {/* <ImageSlider/> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/price-card" element={<PriceCard />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/scroll-animation" element={<ScrollAnimation/>} />
        <Route path="/question" element={<Question />} />

        <Route path="/cost" element={<CostBreakDown />} /> */}
        {/* <Route path="/" element={<Home />} /> */}

      </Routes>



    </div>
  );
}

export default App;
