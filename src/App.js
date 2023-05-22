import React from "react";
import Button from "./Components/Button/Button_2";
import Home from "./Components/Home/Home";
import ImageViewer from "./Components/ImageViewer/ImageViewer";
import VideoViewer from "./Components/VideoViewer/VideoViewer";
import ProductColorChange from "./Components/ProductColorChange/ServiceExplore";
import ProcessBar from "./Components/ProcessBar/ProcessBar";
import CostBreakDown from "./Components/CostBreakDown/CostBreakDown";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <ImageViewer></ImageViewer>
      <VideoViewer></VideoViewer>
      {/* <ProductColorChange></ProductColorChange> */}
      {/* <Button></Button> */}
      <ProcessBar></ProcessBar>
      <CostBreakDown></CostBreakDown>
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;
