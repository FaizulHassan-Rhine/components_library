import React from "react";
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

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <ImageViewer></ImageViewer> */}
      {/* <VideoViewer></VideoViewer> */}
      {/* <ProductColorChange></ProductColorChange> */}
      {/* <Button></Button> */}
      {/* <ProcessBar></ProcessBar> */}
      <CostBreakDown></CostBreakDown>
      {/* <MegaNavbar/> */}
      {/* <Footer></Footer> */}
      {/* <TestAnimation></TestAnimation> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/price-card" element={<PriceCard />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/question" element={<Question />} />

        {/* <Route path="/" element={<Home />} /> */}

      </Routes>


    </div>
  );
}

export default App;
