import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/Retouched_Logo.png'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import SignInForm from "../SignInForm/SignInForm";
import localforage from "localforage";
import { userContextManager } from "../../App";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showSignInForm, setShowSignInForm] = useState(false);

    const [getSwitchForm, setSwitchForm] = useState(true);
    const [getUserInfo, setUserInfo, getToken, setToken] = useContext(userContextManager);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const [activeLink, setActiveLink] = useState("");

    function handleLinkClick(link) {
        setActiveLink(link);
    }


    const SignInHandleOpen = () => {
        setShowSignInForm(true);
        setSwitchForm(true)
    }
    const refresh = () => {
        window.location.reload(true)
      }
    const signOutFunc = () => {
        localforage.removeItem("userInfo");
        setUserInfo({});
        refresh()
    };

    const SignUpHandleOpen = () => {
        setShowSignInForm(true);
        setSwitchForm(false)
    }
    const SignInHandleClose = () => {
        setShowSignInForm(false);
    }


    return (
        <div className="container mx-auto">
            {console.log("getToken : " + getToken)}

            <nav className="w-full bg-white">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                            <Link to='/' >
                                <img className="h-6 w-32" src={logo} />
                            </Link>
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
                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                <li className="text-black font-semibold hover:text-orange-400">
                                    <HashLink
                                        to="/#fileUploadPage"
                                        onClick={() => handleLinkClick("Remove Background")}
                                        className={` ${activeLink === "Remove Background" ? "text-orange-400" : ""
                                            }`}
                                    >
                                        Remove Background
                                    </HashLink>
                                </li>
                                <li className="text-black font-semibold hover:text-orange-400">
                                    <HashLink
                                        to="/#illustration"
                                        onClick={() => handleLinkClick("Illustration")}
                                        className={` ${activeLink === "Illustration" ? "text-orange-400" : ""
                                            }`}
                                    >
                                        Illustration
                                    </HashLink>
                                </li>
                                <li>
                                    <div className="relative">
                                        <button
                                            onClick={toggleDropdown}
                                            className="px-4 py-2 text-black font-semibold hover:text-orange-400"
                                        >
                                            <HashLink
                                                to="/#use"
                                                onClick={() => handleLinkClick("How to Use")}
                                                className={` ${activeLink === "How to Use" ? "text-orange-400" : ""
                                                    }`}
                                            >
                                                How to Use <i className="fa-solid fa-chevron-down text-xs"></i>
                                            </HashLink>
                                        </button>
                                        {/* {isDropdownOpen && (
                                            <ul className="absolute z-10  lg:right-0 mt-2  my-4 py-4 lg:py-0 w-full  bg-white rounded-md ">
                                                <li className="px-3 py-1 text-xs my-1 bg-gray-200 hover:bg-gray-100">
                                                    <Link to=''>Option 1</Link>
                                                </li>
                                                <li className="px-3 text-xs py-1 bg-gray-200 hover:bg-gray-100">
                                                    <Link to=''>Option 2</Link>
                                                </li>

                                            </ul>
                                        )} */}
                                    </div>
                                </li>

                                <li className="text-black font-semibold hover:text-orange-400">
                                    <HashLink
                                        to="/#pricing"
                                        onClick={() => handleLinkClick("Pricing")}
                                        className={` ${activeLink === "Pricing" ? "text-orange-400" : ""
                                            }`}
                                    >
                                        Pricing
                                    </HashLink>
                                </li>


                            </ul>

                            {getUserInfo.status_code == 200 ?

                                <div className="mt-3 space-y-2 lg:hidden ">
                                    <button
                                        id="singInButton"
                                        onClick={signOutFunc}
                                        className="px-4 py-1  hover:text-black hover:bg-white border hover:border-[#003333] font-semibold  rounded-3xl text-white bg-[#003333] transition-all"
                                    >
                                        Sign out
                                    </button>
                                </div>
                                :
                                <div className="mt-3 space-y-2 lg:hidden ">
                                    <button
                                        id="singInButton"
                                        onClick={SignInHandleOpen}
                                        className="inline-block w-full px-4 py-2 text-center text-black font-semibold hover:text-white  rounded-3xl  hover:bg-[#003333]"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        id="singUpButton"
                                        onClick={SignUpHandleOpen}
                                        className="inline-block w-full px-4 py-2 text-center text-black hover:text-white  rounded-3xl  hover:bg-[#003333]"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    {getUserInfo.status_code == 200 ?

                        <div className="hidden space-x-2 lg:inline-block ">

                            <button
                                id="singInButton"
                                onClick={signOutFunc}
                                className="px-4 py-1  hover:text-black border hover:border-[#003333] hover:bg-white font-semibold  rounded-3xl text-white bg-[#003333] transition-all"
                            >
                                Sign out
                            </button>
                        </div> :

                        <div className="hidden space-x-2 lg:inline-block ">

                            <button
                                id="singInButton"
                                onClick={SignInHandleOpen}
                                className="px-4 py-1  text-black font-semibold  rounded-3xl hover:text-white hover:bg-[#003333]"
                            >
                                Log in
                            </button>
                            <button
                                id="singUpButton"
                                onClick={SignUpHandleOpen}
                                className="px-4 py-1  text-black font-semibold  rounded-3xl hover:text-white  hover:bg-[#003333]"
                            >
                                Sign up
                            </button>
                        </div>
                    }
                </div>
            </nav>

            <div className="flex justify-center items-center mb-8 ">
                {/* <button
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors"
                    onClick={SignInHandleOpen}
                >
                    Sign In
                </button> */}

                {showSignInForm && <SignInForm onClose={SignInHandleClose} switchBool={getSwitchForm} />}

            </div>

        </div>

    )
}

export default Navbar;