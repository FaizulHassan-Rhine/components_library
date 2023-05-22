import React, { useContext, useState } from "react";

import logo from '../../Images/logo.jpg'
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css"

const Navbar2 = () => {

    const [navbar, setNavbar] = useState(false);



    const [activeLink, setActiveLink] = useState("");

    function handleLinkClick(link) {
        setActiveLink(link);
    }



    const refresh = () => {
        window.location.reload(true)
    }



    return (
        <div className="w-full bg-white shadow-sm  sticky top-0 z-[999]">
            <div className="container mx-auto">

                <nav className="w-full bg-white ">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-4">
                        <div>
                            <div className="flex items-center justify-between py-3 lg:py-2 lg:block">
                                <HashLink to='/#root' >
                                    <img className="h-24 w-24" src={logo} />
                                </HashLink>
                                <div className="lg:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="flex flex-col text-lg  items-center justify-center space-y-8 lg:flex-row  lg:space-x-6 lg:space-y-0">
                                    <li className="text-black font-semibold">
                                        <HashLink smooth
                                            // to="/#root"
                                            onClick={() => handleLinkClick("homee")}
                                            className={` hover:text-orange-400 ${activeLink === "homee" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Home
                                        </HashLink>
                                    </li>
                                    <li className="text-black font-semibold ">
                                        <HashLink smooth
                                            // to="/#menu"
                                            onClick={() => handleLinkClick("menu")}
                                            className={`hover:text-orange-400 ${activeLink === "menu" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Menu
                                        </HashLink>
                                    </li>
                                    <li

                                        className=" text-black font-semibold "
                                    >
                                        <Link
                                            // to="/contact-us"
                                            onClick={() => handleLinkClick("contact")}
                                            className={`  hover:text-orange-400 ${activeLink === "contact" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Contact <i className="fa-solid fa-chevron-down text-xs"></i>
                                        </Link>

                                    </li>

                                    <li className="text-black font-semibold">
                                        <Link smooth
                                            // to="/about-us"
                                            onClick={() => handleLinkClick("about")}
                                            className={`  hover:text-orange-400 ${activeLink === "about" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            About Us
                                        </Link>
                                    </li>

                                    <li >
                                        <div class="dropdown inline-block relative">
                                            <button class=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                                <span class="mr-1">Dropdown</span>
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                            </button>
                                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                                                <li class=""><a class="rounded-t bg-gray-100 hover:bg-gray-200 py-2 px-10 block whitespace-no-wrap" href="#">One</a></li>
                                                <li class=""><a class="bg-gray-100 hover:bg-gray-200 py-2 px-10 block whitespace-no-wrap" href="#">Two</a></li>
                                                <li class=""><a class="rounded-b bg-gray-100 hover:bg-gray-200 py-2 px-10 block whitespace-no-wrap" href="#">Three</a></li>
                                            </ul>
                                        </div>
                                    </li>


                                </ul>




                                <div className="mt-3 flex flex-col justify-center  items-center space-y-2 lg:hidden ">
                                    {/* <button
                                        id="singInButton"


                                    >
                                        <Link to="/cart">
                                            <HiShoppingCart className="mr-2 w-6 h-6 hover:text-green-500" />
                                        </Link>
                                            </button> */}
                                    <Link to="/login">
                                        <button className="bg-cyan-500 hover:bg-teal-600 px-5 py-1 rounded-md text-white font-medium">
                                            Sign in
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>



                        <div className="hidden  space-x-2 lg:block ">

                            <div className="flex justify-center items-center gap-2">
                                {/* <button
                                    id="singInButton"


                                >
                                    <Link to="/cart">
                                        <HiShoppingCart className="mr-2 w-6 h-6 hover:text-green-500" />
                                    </Link>
                                </button> */}

                                <button className="bg-cyan-500 hover:bg-teal-600 px-5 py-1 rounded-md text-white font-medium">
                                    <Link to="/login">
                                        Sign in
                                    </Link>
                                </button>
                            </div>

                        </div>

                    </div>
                </nav>





            </div>
        </div>

    )
}

export default Navbar2;