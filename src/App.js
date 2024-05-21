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





function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };
  
      const addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      addScript.onerror = () => console.error("Google Translate script failed to load.");
      document.body.appendChild(addScript);
  
      // Ensure the function is available globally
      window.googleTranslateElementInit = googleTranslateElementInit;
  
      // Cleanup the script when the component unmounts
      return () => {
        document.body.removeChild(addScript);
        delete window.googleTranslateElementInit;
      };
    }, []);
  
    const handleTranslate = (lang) => {
      const googleTranslateElement = document.querySelector('.goog-te-combo');
      if (googleTranslateElement) {
        googleTranslateElement.value = lang;
        googleTranslateElement.dispatchEvent(new Event('change'));
      } else {
        console.error("Google Translate element not found.");
      }
    };
  
   
 
  
 
  return (
    <div>
    
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <div className="relative inline-block text-center notranslate ">
        <div className="">
          <button
            type="button"
            className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Select Language
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {dropdownOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1 " role="none">
              <button
                onClick={() => handleTranslate('en')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                English
              </button>
              <button
                onClick={() => handleTranslate('es')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                Spanish
              </button>
              <button
                onClick={() => handleTranslate('fr')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                French
              </button>
              <button
                onClick={() => handleTranslate('de')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                German
              </button>
              <button
                onClick={() => handleTranslate('nl')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                Dutch
              </button>
              
            </div>
          </div>
        )}
      </div>
    
      {/* <div className="language-buttons notranslate flex justify-center items-center gap-2">
        <button className="bg-blue-500  text-white font-bold py-2 px-4 rounded" onClick={() => handleTranslate('en')}>English</button>
        <button className="bg-red-500  text-white font-bold py-2 px-4 rounded" onClick={() => handleTranslate('es')}>Spanish</button>
        <button className="bg-yellow-500  text-white font-bold py-2 px-4 rounded" onClick={() => handleTranslate('fr')}>French</button>
        <button className="bg-green-500  text-white font-bold py-2 px-4 rounded" onClick={() => handleTranslate('de')}>German</button>
        <button className="bg-purple-500  text-white font-bold py-2 px-4 rounded" onClick={() => handleTranslate('nl')}>Dutch</button>
     
      </div> */}
      
   
      {/* <Home></Home> */}
      {/* <ImageViewer></ImageViewer> */}
      {/* <VideoViewer></VideoViewer> */}
      {/* <ProductColorChange></ProductColorChange> */}
      {/* <Button></Button> */}
      {/* <ProcessBar></ProcessBar> */}
      {/* <CostBreakDown></CostBreakDown> */}
      {/* <MegaNavbar/> */}
      {/* <Footer></Footer> */}
      {/* <TestAnimation></TestAnimation> */}
      {/* <ColorChange/> */}
      {/* <ContactUsLanding/> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/price-card" element={<PriceCard />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/question" element={<Question />} />
   
        <Route path="/cost" element={<CostBreakDown/>} />
        {/* <Route path="/" element={<Home />} /> */}

      </Routes>
     
   

    </div>
  );
}

export default App;
