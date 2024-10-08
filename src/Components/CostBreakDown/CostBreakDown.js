import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
import { IoLanguage } from "react-icons/io5";
// import logo from '../../images/logo.png'
import { IoMdArrowDropdown } from "react-icons/io";
import england from "../../Images/united-kingdom.png"
import spain from "../../Images/spain.png"
import france from "../../Images/france.png"
import germany from "../../Images/germany.png"
import dutch from "../../Images/netherlands.png"
const CostBreakDown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { handleTranslate } = GoogleTranslate();
  
    const selectLanguage = (lang) => {
      handleTranslate(lang);
      setDropdownOpen(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Adjust the delay to ensure the language change is fully applied
    };

    return (
        <div className="container mx-auto">
            <div >
                <div className="bg-white flex flex-col items-center mt-10">
                    {/* <img className="h-8 w-44 mb-2" src={logo} alt="" /> */}
                    <p className="text-3xl font-bold">COST BREAKDOWN</p>
                </div>
                <div id="google_translate_element" style={{ display: "none" }}></div>
      <div className="relative inline-block text-center notranslate ">
        <div className="">
        
          <button
            type="button"
            className="flex justify-center text-xl items-center gap-2 w-40 rounded-md border border-gray-300 shadow-sm px-2 py-2   font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            defaultValue="en"
          >
            <IoLanguage className="text-xl"/>
            Language
           < IoMdArrowDropdown className="text-xl"/>
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
                onClick={() => selectLanguage('en')}
                className="flex justify-start items-center gap-3 px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                <img className="h-7 w-7" src={england} alt=""/>
                English
              </button>
              
              <button
                onClick={() => selectLanguage('es')}
                className="flex justify-start items-center gap-3 px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                <img className="h-7 w-7" src={spain} alt=""/>
                Spanish
              </button>
              <button
                onClick={() => selectLanguage('fr')}
                className="flex justify-start items-center gap-3 px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                <img className="h-7 w-7" src={france} alt=""/>
                French
              </button>
              <button
                onClick={() => selectLanguage('de')}
                className="flex justify-start items-center gap-3 px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                <img className="h-7 w-7" src={germany} alt=""/>
                German
              </button>
              <button
                onClick={() => selectLanguage('nl')}
                className="flex justify-start items-center gap-3 px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 w-full text-center"
                role="menuitem"
              >
                <img className="h-7 w-7" src={dutch} alt=""/>
                Dutch
              </button>

            </div>
          </div>
        )}
      </div>
                <div className="flex justify-center mx-auto mt-10 gap-36 border-black border py-5 w-[600px] ">
                    <div className="flex justify-between gap-5">
                        <div><p className="font-semibold">Date:</p>
                            <p className="font-semibold">Order No: </p>
                            <p className="font-semibold">Order Status: </p>
                            <p className="font-semibold">Raw Images: </p>
                        </div>

                        <div>
                            <p>18-Mar-23</p>
                            <p> AI-0001-IMG</p>
                            <p>incomplete</p>
                            <p>10</p>
                        </div>

                    </div>
                    <div className="flex justify-between gap-5">
                        <div>
                            <p className="font-semibold">Service Type: </p>
                            <p className="font-semibold">Subscription: </p>
                            <p className="font-semibold">Payment Status: </p>
                        </div>

                        <div>

                            <p>Manual</p>
                            <p>AI Premium</p>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>

                <div className=" w-[600px] mx-auto mt-10">
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr className="bg-gray-400">
                                                <th scope="col" class="px-6 py-2">SL</th>
                                                <th scope="col" class="px-6 py-2">Service</th>
                                                <th scope="col" class="px-6 py-2">No.of Services</th>
                                                <th scope="col" class="px-6 py-2">Charge/Image</th>
                                                <th scope="col" class="px-6 py-2">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-2 font-medium">1</td>
                                                <td class="whitespace-nowrap px-6 py-2">Remove BG (AI)</td>
                                                <td class="whitespace-nowrap px-6 py-2">10</td>
                                                <td class="whitespace-nowrap px-6 py-2">$0.00</td>
                                                <td class="whitespace-nowrap px-6 py-2">$0.00</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-2 font-medium">2</td>
                                                <td class="whitespace-nowrap px-6 py-2">Remove BG (Manua)</td>
                                                <td class="whitespace-nowrap px-6 py-2">10</td>
                                                <td class="whitespace-nowrap px-6 py-2">$0.20</td>
                                                <td class="whitespace-nowrap px-6 py-2">$2.00</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-2 font-medium">3</td>
                                                <td class="whitespace-nowrap px-6 py-2">Image Retouch</td>
                                                <td class="whitespace-nowrap px-6 py-2">5</td>
                                                <td class="whitespace-nowrap px-6 py-2">$1.00</td>
                                                <td class="whitespace-nowrap px-6 py-2">$5.00</td>
                                            </tr>
                                            <tr class="border-b dark:border-neutral-500">
                                                <td class="whitespace-nowrap px-6 py-2 font-medium">3</td>
                                                <td class="whitespace-nowrap px-6 py-2">Image Masking</td>
                                                <td class="whitespace-nowrap px-6 py-2">5</td>
                                                <td class="whitespace-nowrap px-6 py-2">$0.40</td>
                                                <td class="whitespace-nowrap px-6 py-2">$2.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-[600px]  mt-8 mx-auto gap-5">
                    <div>
                        <p className="font-semibold">Total Charge </p> <hr></hr>
                        <p className="font-semibold">Discount </p><hr></hr>
                        <p className="font-semibold">Net Charge </p><hr></hr>
                    </div>

                    <div className="mr-5">

                        <p className="font-semibold">$9.00</p>
                        <p className="font-semibold">$0.00</p>
                        <p className="font-semibold">$9.00</p>
                    </div>
                </div>
                <div className="flex justify-end w-[600px]  mt-8 mx-auto">
                    <Link to={"/price-card"} className="bg-green-600 text-white px-4 py-2 rounded-full">Data Test</Link>
                </div>
                <div className="w-[700px] mx-auto mt-20 " >
                    <hr className="mb-3"></hr>
                    <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 2nd Floor, Navana DH Tower, Plot:06, Panthapath, Dhaka, Bangladesh   <span className="font-bold">Phone:</span> 02-55013583   <span className="font-bold">Email:</span> info@retouched.ai</p>
                </div>

                <button
                    className=" w-10 h-10 border border-theme-shade rounded-full"
                    style={{
                        position: "absolute",
                        top: 60,
                        right: 40,
                        backgroundColor: "white",

                        padding: "8px 15px",
                    }}
                // onClick={handleCloseClick}
                >
                    <i className="fa-solid fa-xmark "></i>
                </button>


            </div>

        </div>
    )
}
export default CostBreakDown;
